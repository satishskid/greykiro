import { Card } from "@/components/ui";
import { CTAFooter } from "@/components/content";

const soulArticles = [
  {
    id: "1",
    title: "The Neuroscience of Burnout",
    excerpt: "Understanding how chronic stress rewires your brain and evidence-based strategies for recovery.",
    date: "Jan 12, 2026",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Dharma in the Digital Age",
    excerpt: "Ancient Vedic principles for finding purpose in a world of infinite distractions.",
    date: "Jan 8, 2026",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "The Dopamine-Dharma Connection",
    excerpt: "How aligning your neurochemistry with your values creates sustainable motivation.",
    date: "Jan 3, 2026",
    readTime: "10 min read",
  },
];

export default function SoulPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-gold/5 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            GreyBrain <span className="text-brand-gold">Soul</span>
          </h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl">
            The Science of Purpose. Where neuroscience meets Vedic wisdom.
          </p>
        </div>
      </section>

      {/* Minimalist Article List */}
      <section className="container-custom section-spacing">
        <div className="max-w-2xl mx-auto space-y-8">
          {soulArticles.map((article) => (
            <Card key={article.id} hoverable className="p-8">
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-brand-charcoal mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed">
                {article.excerpt}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <CTAFooter
        text="Find your balance in the 'Scientific Search for Peace' Protocol"
        href="/academy"
      />
    </>
  );
}
