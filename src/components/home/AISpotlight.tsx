"use client";

import { useEffect, useState } from "react";
import { Sparkles, Copy, Check, ExternalLink, Download, Heart, Cpu, Lightbulb } from "lucide-react";

interface DailyPrompt {
  prompt: string;
  category: string;
  tip: string;
  date: string;
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

export function AISpotlight() {
  const [prompt, setPrompt] = useState<DailyPrompt | null>(null);
  const [models, setModels] = useState<SpotlightModel[]>([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"prompt" | "models">("prompt");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch daily prompt
    fetch("/api/daily-prompt")
      .then((res) => res.json())
      .then((data) => setPrompt(data))
      .catch(console.error);

    // Fetch model spotlight
    fetch("/api/model-spotlight")
      .then((res) => res.json())
      .then((data) => setModels(data.models || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const copyPrompt = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-brand-blue/5 via-white to-brand-gold/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-medium mb-3">
            <Sparkles size={14} />
            AI Lab
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal">
            Your Daily AI Toolkit
          </h2>
          <p className="text-gray-500 font-sans text-sm mt-2">
            Fresh prompts and trending healthcare AI models
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("prompt")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "prompt"
                ? "bg-brand-blue text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Lightbulb size={16} />
            DIY Prompt
          </button>
          <button
            onClick={() => setActiveTab("models")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "models"
                ? "bg-brand-blue text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Cpu size={16} />
            Model Spotlight
          </button>
        </div>

        {/* Content */}
        {activeTab === "prompt" && prompt && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Prompt Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
                    {prompt.category}
                  </span>
                  <span className="text-xs text-gray-400 ml-3">
                    Refreshes daily
                  </span>
                </div>
                <button
                  onClick={copyPrompt}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    copied
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={14} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Prompt
                    </>
                  )}
                </button>
              </div>

              {/* Prompt Content */}
              <div className="p-6">
                <pre className="whitespace-pre-wrap font-sans text-sm text-brand-charcoal leading-relaxed bg-gray-50 rounded-xl p-4 border border-gray-100">
                  {prompt.prompt}
                </pre>

                {/* Tip */}
                <div className="mt-4 flex items-start gap-2 text-sm">
                  <Lightbulb size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    <span className="font-medium text-brand-gold">Pro tip:</span>{" "}
                    {prompt.tip}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400">
                  Use with ChatGPT, Claude, Gemini, or any LLM · Replace [placeholders] with your data
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "models" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
              // Loading skeleton
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-100 rounded w-1/2 mb-4"></div>
                  <div className="h-12 bg-gray-100 rounded mb-3"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-100 rounded w-16"></div>
                    <div className="h-6 bg-gray-100 rounded w-16"></div>
                  </div>
                </div>
              ))
            ) : (
              models.slice(0, 3).map((model) => (
                <a
                  key={model.id}
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-brand-blue/30 hover:shadow-md transition-all group"
                >
                  {/* Model Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors">
                        {model.name}
                      </h3>
                      <p className="text-xs text-gray-400">by {model.author}</p>
                    </div>
                    <ExternalLink size={14} className="text-gray-300 group-hover:text-brand-blue transition-colors" />
                  </div>

                  {/* Use Case */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {model.useCase}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Download size={12} />
                      {model.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={12} />
                      {model.likes}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {model.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))
            )}
          </div>
        )}

        {/* HuggingFace Attribution */}
        {activeTab === "models" && (
          <div className="text-center mt-6">
            <a
              href="https://huggingface.co/models?pipeline_tag=text-generation&sort=downloads&search=medical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-blue transition-colors"
            >
              Explore more on Hugging Face <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
