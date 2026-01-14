import { BlogFeed, DIYPromptBox, CTAFooter } from "@/components/content";

const healthPosts = [
  {
    id: "1",
    title: "GPT-4 vs Claude 3 for Clinical Documentation",
    excerpt: "A comprehensive comparison of leading AI models for medical note-taking and clinical documentation workflows.",
    date: "Jan 10, 2026",
    category: "AI Model Review",
    slug: "gpt4-vs-claude3-clinical",
  },
  {
    id: "2",
    title: "Building a Symptom Checker with No-Code Tools",
    excerpt: "Step-by-step guide to creating a basic symptom assessment tool using Bubble and OpenAI API.",
    date: "Jan 5, 2026",
    category: "No-Code Tutorial",
    slug: "symptom-checker-no-code",
  },
  {
    id: "3",
    title: "AI-Assisted Differential Diagnosis: A Case Study",
    excerpt: "How one physician integrated AI into their diagnostic workflow and improved patient outcomes.",
    date: "Dec 28, 2025",
    category: "Clinical Use-Case",
    slug: "ai-differential-diagnosis",
  },
];

const todaysPrompt = {
  title: "Today's DIY Prompt",
  prompt: "You are a medical educator. Create a patient-friendly explanation of [CONDITION] that includes: 1) What it is in simple terms, 2) Common symptoms, 3) When to seek medical attention. Use analogies where helpful.",
};

export default function HealthPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-blue/5 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            GreyBrain <span className="text-brand-blue">Health</span>
          </h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl">
            From Stethoscope to Algorithm. AI tools, tutorials, and insights for healthcare innovators.
          </p>
        </div>
      </section>

      {/* Blog Feed with Sidebar */}
      <BlogFeed
        posts={healthPosts}
        sidebar={
          <div className="sticky top-24">
            <DIYPromptBox title={todaysPrompt.title} prompt={todaysPrompt.prompt} />
          </div>
        }
      />

      {/* CTA Footer */}
      <CTAFooter
        text="Build this tool yourself in the 'No-Code AI Doctor' Course"
        href="/academy"
      />
    </>
  );
}
