import { BlogFeed, DIYPromptBox, CTAFooter } from "@/components/content";

const healthPosts = [
  {
    id: "1",
    title: "A Clinician's Guide to Agentic AI in Healthcare",
    excerpt: "Understanding how autonomous AI agents are reshaping clinical workflows and what doctors need to know to stay ahead.",
    date: "Jan 13, 2026",
    category: "Agentic AI",
    slug: "clinicians-guide-agentic-ai",
    url: "https://medium.com/@GreyBrain/a-clinicians-guide-to-agentic-ai-in-healthcare-564cd29d84a7",
  },
  {
    id: "2",
    title: "The doctors who master AI today will define the future of medicine tomorrow",
    excerpt: "Why early adoption of AI tools isn't just an advantage—it's becoming essential for modern medical practice.",
    date: "Jan 12, 2026",
    category: "Opinion",
    slug: "doctors-master-ai-future",
    url: "https://medium.com/@GreyBrain/the-doctors-who-master-ai-today-will-define-the-future-of-medicine-tomorrow-97bd52a69c7f",
  },
  {
    id: "3",
    title: "Clinical AI Landscape Update: Open-Source Maturation, Regulatory Shifts, and the Privacy Paradox",
    excerpt: "A comprehensive look at the evolving clinical AI ecosystem and what it means for healthcare practitioners.",
    date: "Jan 10, 2026",
    category: "Industry Update",
    slug: "clinical-ai-landscape-update",
    url: "https://medium.com/@GreyBrain/clinical-ai-landscape-update-open-source-maturation-regulatory-shifts-and-the-privacy-paradox-74c55dead58a",
  },
  {
    id: "4",
    title: "ChatGPT for Healthcare: The AI That Speaks Every Patient's Language",
    excerpt: "How multilingual AI capabilities are breaking down communication barriers in patient care.",
    date: "Jan 9, 2026",
    category: "Tools",
    slug: "chatgpt-healthcare-multilingual",
    url: "https://medium.com/@GreyBrain/chatgpt-for-healthcare-the-ai-that-speaks-every-patients-language-d07762ab40c6",
  },
  {
    id: "5",
    title: "The GenAI Stethoscope: How 2026 Doctors Think Faster, Not Harder",
    excerpt: "Practical strategies for integrating generative AI into your daily clinical decision-making process.",
    date: "Jan 3, 2026",
    category: "Workflow",
    slug: "genai-stethoscope-2026",
    url: "https://medium.com/@GreyBrain/the-genai-stethoscope-how-2026-doctors-think-faster-not-harder-c9809114c819",
  },
];

const todaysPrompt = {
  title: "Today's DIY Prompt",
  prompt: "You are a clinical documentation assistant. Help me create a patient-friendly discharge summary for [CONDITION]. Include: 1) What happened during the visit, 2) Medications prescribed with simple instructions, 3) Warning signs to watch for, 4) Follow-up appointments needed. Use 8th-grade reading level.",
};

export default function HealthPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-blue/5 to-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-3">
            GreyBrain <span className="text-brand-blue">Health</span>
          </h1>
          <p className="text-gray-600 font-sans max-w-xl">
            From Stethoscope to Algorithm. AI tools, tutorials, and insights for healthcare innovators.
          </p>
          <a
            href="https://medium.com/@GreyBrain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm text-brand-blue hover:underline"
          >
            Follow on Medium →
          </a>
        </div>
      </section>

      {/* Blog Feed with Sidebar */}
      <BlogFeed
        posts={healthPosts}
        sidebar={
          <div className="sticky top-20 space-y-6">
            <DIYPromptBox title={todaysPrompt.title} prompt={todaysPrompt.prompt} />
            
            {/* Products Highlight */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-sm text-brand-charcoal mb-3">Try Our Tools</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://aiassist.greybrain.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                    Clinical AI Assist →
                  </a>
                </li>
                <li>
                  <a href="https://greywaken.greybrain.in/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                    GreyWaken →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
      />

      {/* CTA Footer */}
      <CTAFooter
        text="Ready to master AI in healthcare? Join our comprehensive program."
        href="/academy"
      />
    </>
  );
}
