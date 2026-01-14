import { Sparkles } from "lucide-react";

interface DIYPromptBoxProps {
  title: string;
  prompt: string;
}

export function DIYPromptBox({ title, prompt }: DIYPromptBoxProps) {
  return (
    <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-brand-blue" size={20} />
        <h3 className="font-bold text-brand-charcoal">{title}</h3>
      </div>
      <p className="text-gray-700 font-sans text-sm leading-relaxed bg-white p-4 rounded-lg border border-gray-100">
        {prompt}
      </p>
    </div>
  );
}
