import { NextResponse } from "next/server";

// Cache the prompt for the day
let cachedPrompt: { prompt: string; category: string; tip: string; date: string } | null = null;
let lastGeneratedDate = "";

const PROMPT_CATEGORIES = [
  "Clinical Documentation",
  "Patient Communication", 
  "Differential Diagnosis",
  "Medical Education",
  "Research & Literature",
  "Practice Management",
  "Mental Health Support",
  "Preventive Care",
];

async function generateDailyPrompt() {
  const today = new Date().toISOString().split("T")[0];
  
  // Return cached if same day
  if (cachedPrompt && lastGeneratedDate === today) {
    return cachedPrompt;
  }

  const groqApiKey = process.env.GROQ_API_KEY;
  
  if (!groqApiKey) {
    return getFallbackPrompt();
  }

  // Pick category based on day of week
  const dayOfWeek = new Date().getDay();
  const category = PROMPT_CATEGORIES[dayOfWeek % PROMPT_CATEGORIES.length];

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `You are an expert in AI applications for healthcare. Generate creative, practical AI prompts that doctors can use immediately with ChatGPT, Claude, or any LLM. Focus on ${category}.`
          },
          {
            role: "user", 
            content: `Generate ONE mind-bending, highly practical AI prompt for doctors in the category "${category}". 

The prompt should:
1. Be immediately usable (copy-paste ready)
2. Solve a real clinical workflow problem
3. Be impressive and make doctors say "wow, I never thought of using AI this way"
4. Include placeholders like [patient age], [condition], etc.

Return ONLY a JSON object with this exact format:
{
  "prompt": "The actual prompt text that doctors can copy and use",
  "category": "${category}",
  "tip": "A one-line tip on how to get the best results from this prompt"
}

No markdown, no explanation, just the JSON.`
          }
        ],
        temperature: 0.9,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      console.error("Groq API error:", response.status);
      return getFallbackPrompt();
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return getFallbackPrompt();
    }

    // Parse JSON from response
    const parsed = JSON.parse(content);
    
    cachedPrompt = {
      prompt: parsed.prompt,
      category: parsed.category || category,
      tip: parsed.tip,
      date: today,
    };
    lastGeneratedDate = today;

    return cachedPrompt;
  } catch (error) {
    console.error("Error generating prompt:", error);
    return getFallbackPrompt();
  }
}

function getFallbackPrompt() {
  const fallbacks = [
    {
      prompt: `You are a senior physician reviewing a case. A [age]-year-old patient presents with [chief complaint]. Their history includes [relevant history]. 

Create a structured differential diagnosis with:
1. Most likely diagnosis (with reasoning)
2. Three alternative diagnoses to rule out
3. Specific questions to ask that would help narrow down
4. Red flags that would change urgency

Think step-by-step like a seasoned clinician.`,
      category: "Differential Diagnosis",
      tip: "Add specific lab values or imaging findings to get more targeted differentials.",
    },
    {
      prompt: `Transform this clinical note into patient-friendly language that a [education level] person can understand. Maintain accuracy but remove jargon. Include:
1. What the diagnosis means in simple terms
2. Why the recommended treatment helps
3. What symptoms to watch for
4. When to seek immediate care

Clinical note: [paste your note here]`,
      category: "Patient Communication",
      tip: "Specify the patient's primary language and cultural background for better localization.",
    },
    {
      prompt: `Create a comprehensive SOAP note from this patient encounter:

Patient: [age, gender]
Chief Complaint: [complaint]
History: [brief history]
Vitals: [if available]
Exam Findings: [key findings]

Format with proper medical terminology, ICD-10 considerations, and billing-appropriate documentation. Include pertinent negatives.`,
      category: "Clinical Documentation",
      tip: "Include the specific EMR system you use for formatting that matches your workflow.",
    },
  ];

  const today = new Date();
  const index = today.getDate() % fallbacks.length;
  
  return {
    ...fallbacks[index],
    date: today.toISOString().split("T")[0],
  };
}

export async function GET() {
  const prompt = await generateDailyPrompt();
  return NextResponse.json(prompt);
}
