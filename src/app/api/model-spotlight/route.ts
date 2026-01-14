import { NextResponse } from "next/server";

interface HuggingFaceModel {
  id: string;
  modelId: string;
  author: string;
  downloads: number;
  likes: number;
  tags: string[];
  pipeline_tag?: string;
  lastModified: string;
}

interface SpotlightModel {
  id: string;
  name: string;
  author: string;
  downloads: string;
  likes: number;
  description: string;
  tags: string[];
  url: string;
  useCase: string;
}

// Cache for 6 hours
let cachedModels: SpotlightModel[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 6 * 60 * 60 * 1000;

// Healthcare-related search terms
const HEALTHCARE_TAGS = [
  "medical",
  "clinical",
  "healthcare",
  "biomedical",
  "radiology",
  "pathology",
  "diagnosis",
  "drug",
  "protein",
  "genomics",
];

// Model use case descriptions
const USE_CASES: Record<string, string> = {
  "text-generation": "Generate clinical notes, patient summaries, or medical content",
  "text-classification": "Classify medical documents, symptoms, or patient feedback",
  "question-answering": "Answer medical questions from clinical literature",
  "summarization": "Summarize research papers, patient histories, or clinical trials",
  "translation": "Translate medical documents across languages",
  "image-classification": "Classify medical images like X-rays, CT scans, MRIs",
  "object-detection": "Detect anomalies in medical imaging",
  "text-to-image": "Generate medical illustrations or diagrams",
  "feature-extraction": "Extract features from medical text or images",
  "fill-mask": "Complete medical terminology or clinical phrases",
};

function formatDownloads(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

async function fetchHealthcareModels(): Promise<SpotlightModel[]> {
  try {
    // Search for healthcare-related models, sorted by downloads
    const searchQueries = ["medical", "clinical", "healthcare", "biomedical"];
    const allModels: HuggingFaceModel[] = [];

    for (const query of searchQueries.slice(0, 2)) {
      const response = await fetch(
        `https://huggingface.co/api/models?search=${query}&sort=downloads&direction=-1&limit=10`,
        {
          headers: {
            "Accept": "application/json",
          },
          next: { revalidate: 21600 }, // 6 hours
        }
      );

      if (response.ok) {
        const models = await response.json();
        allModels.push(...models);
      }
    }

    // Deduplicate by model ID
    const uniqueModels = Array.from(
      new Map(allModels.map((m) => [m.id || m.modelId, m])).values()
    );

    // Transform to our format
    const spotlightModels: SpotlightModel[] = uniqueModels
      .slice(0, 6)
      .map((model) => {
        const pipelineTag = model.pipeline_tag || "text-generation";
        const useCase = USE_CASES[pipelineTag] || "General healthcare AI applications";

        return {
          id: model.id || model.modelId,
          name: (model.id || model.modelId).split("/").pop() || "Unknown",
          author: model.author || (model.id || model.modelId).split("/")[0] || "Unknown",
          downloads: formatDownloads(model.downloads || 0),
          likes: model.likes || 0,
          description: `${pipelineTag.replace(/-/g, " ")} model`,
          tags: (model.tags || []).slice(0, 3),
          url: `https://huggingface.co/${model.id || model.modelId}`,
          useCase,
        };
      });

    return spotlightModels;
  } catch (error) {
    console.error("Error fetching HuggingFace models:", error);
    return getFallbackModels();
  }
}

function getFallbackModels(): SpotlightModel[] {
  return [
    {
      id: "microsoft/BiomedNLP-PubMedBERT-base-uncased-abstract",
      name: "PubMedBERT",
      author: "Microsoft",
      downloads: "2.1M",
      likes: 892,
      description: "Pre-trained on PubMed abstracts",
      tags: ["medical", "bert", "nlp"],
      url: "https://huggingface.co/microsoft/BiomedNLP-PubMedBERT-base-uncased-abstract",
      useCase: "Extract insights from medical literature and research papers",
    },
    {
      id: "emilyalsentzer/Bio_ClinicalBERT",
      name: "ClinicalBERT",
      author: "MIT",
      downloads: "1.8M",
      likes: 654,
      description: "Trained on clinical notes",
      tags: ["clinical", "bert", "ehr"],
      url: "https://huggingface.co/emilyalsentzer/Bio_ClinicalBERT",
      useCase: "Analyze electronic health records and clinical documentation",
    },
    {
      id: "medicalai/ClinicalBERT",
      name: "MedicalAI ClinicalBERT",
      author: "MedicalAI",
      downloads: "890K",
      likes: 423,
      description: "Clinical text understanding",
      tags: ["medical", "clinical", "transformer"],
      url: "https://huggingface.co/medicalai/ClinicalBERT",
      useCase: "Process and understand clinical narratives",
    },
  ];
}

export async function GET() {
  const now = Date.now();

  // Return cached if fresh
  if (cachedModels.length > 0 && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json({ models: cachedModels, cached: true });
  }

  // Fetch fresh
  const models = await fetchHealthcareModels();

  if (models.length > 0) {
    cachedModels = models;
    lastFetchTime = now;
  }

  return NextResponse.json({ 
    models: cachedModels.length > 0 ? cachedModels : getFallbackModels(), 
    cached: false 
  });
}
