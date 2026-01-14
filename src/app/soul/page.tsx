import { Card } from "@/components/ui";
import { CTAFooter } from "@/components/content";

const soulArticles = [
  {
    id: "1",
    title: "Beyond the Haze: Embracing Non-Conceptual Awareness in a World of Rational Analysis",
    excerpt: "Exploring the limits of analytical thinking and the wisdom of direct experience.",
    date: "Dec 18, 2025",
    readTime: "8 min read",
    url: "https://medium.com/@Sage_AI/beyond-the-haze-embracing-non-conceptual-awareness-in-a-world-of-rational-analysis-e17a5d12da92",
  },
  {
    id: "2",
    title: "The Horses of Distraction: How a 3,000-Year-Old Teaching Explains Your Instagram Addiction",
    excerpt: "The Katha Upanishad's chariot metaphor decoded for the digital age.",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    url: "https://medium.com/@Sage_AI/the-horses-of-distraction-how-a-3-000-year-old-teaching-explains-your-instagram-addiction-b0b5f84dd9a8",
  },
  {
    id: "3",
    title: "That Which You Are",
    excerpt: "A meditation on identity, consciousness, and the nature of self.",
    date: "Dec 13, 2025",
    readTime: "5 min read",
    url: "https://medium.com/@Sage_AI/that-which-you-are-ec3a5950a7a0",
  },
  {
    id: "4",
    title: "The Throne Within: Why Ancient Wisdom About Self-Sovereignty Still Matters",
    excerpt: "Reclaiming inner authority in an age of external validation.",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    url: "https://medium.com/@Sage_AI/the-throne-within-why-ancient-wisdom-about-self-sovereignty-still-matters-in-your-broken-down-life-f9c0b3b6b426",
  },
  {
    id: "5",
    title: "Unplugged: When Ancient Wisdom Meets Modern Distraction",
    excerpt: "Finding stillness in a world designed to capture your attention.",
    date: "Dec 8, 2025",
    readTime: "6 min read",
    url: "https://medium.com/@Sage_AI/unplugged-when-ancient-wisdom-meets-modern-distraction-ee116462589f",
  },
];

export default function SoulPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-gold/5 to-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-3">
            GreyBrain <span className="text-brand-gold">Soul</span>
          </h1>
          <p className="text-gray-600 font-sans max-w-xl">
            The Science of Purpose. Where neuroscience meets Vedic wisdom.
          </p>
          <a
            href="https://medium.com/@Sage_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm text-brand-gold hover:underline"
          >
            Follow ConsciousAI on Medium →
          </a>
        </div>
      </section>

      {/* Minimalist Article List */}
      <section className="container-custom py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          {soulArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card hoverable className="p-6 group">
                <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Card>
            </a>
          ))}
        </div>

        {/* Tools Highlight */}
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-brand-gold/5 rounded-xl border border-brand-gold/20">
          <h3 className="font-bold text-brand-charcoal mb-3">Explore Our Wellness Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <a href="https://sageai.greybrain.in/intro" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
              🕉️ SageAI - ConsciousAI →
            </a>
            <a href="https://shanti.greybrain.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
              🧘 Shanti Pranayama Coach →
            </a>
            <a href="https://aispira.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
              🫁 RESPIRA Breathing Coach →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTAFooter
        text="Explore the science behind spirituality in our Spiritual Health program."
        href="/academy"
      />
    </>
  );
}
