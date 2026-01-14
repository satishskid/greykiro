import Link from "next/link";
import { Stethoscope, Brain, Film, ArrowRight, ExternalLink } from "lucide-react";

const faculties = [
  {
    id: "health",
    title: "GreyBrain Health",
    tagline: "From Stethoscope to Algorithm",
    description: "AI for Healthcare Innovators",
    icon: Stethoscope,
    href: "/health",
    color: "blue",
    mediumUrl: "https://medium.com/@GreyBrain",
    latestPost: {
      title: "A Clinician's Guide to Agentic AI in Healthcare",
      excerpt: "Understanding how autonomous AI agents are reshaping clinical workflows and patient care.",
      date: "Jan 13, 2025",
      url: "https://medium.com/@GreyBrain/a-clinicians-guide-to-agentic-ai-in-healthcare-564cd29d84a7",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1400/0*health-ai-thumbnail.jpg",
    },
  },
  {
    id: "soul",
    title: "GreyBrain Soul",
    tagline: "The Science of Purpose",
    description: "Neuroscience meets Vedic Wisdom",
    icon: Brain,
    href: "/soul",
    color: "gold",
    mediumUrl: "https://medium.com/@Sage_AI",
    latestPost: {
      title: "The Horses of Distraction: How a 3,000-Year-Old Teaching Explains Your Instagram Addiction",
      excerpt: "Ancient wisdom from the Katha Upanishad decoded for the modern distracted mind.",
      date: "Dec 15, 2024",
      url: "https://medium.com/@Sage_AI/the-horses-of-distraction-how-a-3-000-year-old-teaching-explains-your-instagram-addiction-b0b5f84dd9a8",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1400/0*soul-wisdom-thumbnail.jpg",
    },
  },
  {
    id: "lens",
    title: "GreyBrain Lens",
    tagline: "Decoding Culture",
    description: "Academic Analysis of Cinema",
    icon: Film,
    href: "/lens",
    color: "blue",
    mediumUrl: "https://medium.com/@GreyBrainer",
    latestPost: {
      title: "GreyBrainer Analysis: Angammal (2025)",
      excerpt: "A deep psychoanalytic breakdown of the latest Tamil cinema masterpiece.",
      date: "Jan 12, 2025",
      url: "https://medium.com/@GreyBrainer/greybrainer-analysis-angammal-2025-a61fae9e6916",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1400/0*lens-cinema-thumbnail.jpg",
    },
  },
];

export function FeatureGrid() {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal text-center mb-2">
          The Three Faculties
        </h2>
        <p className="text-gray-500 text-center mb-8 max-w-lg mx-auto font-sans text-sm">
          Technology, wisdom, and culture — integrated for human potential.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {faculties.map((faculty) => {
            const Icon = faculty.icon;
            const isGold = faculty.color === "gold";
            
            return (
              <div
                key={faculty.id}
                className={`bg-white rounded-xl border overflow-hidden transition-all hover:shadow-lg ${
                  isGold ? "border-brand-gold/20 hover:border-brand-gold/40" : "border-brand-blue/20 hover:border-brand-blue/40"
                }`}
              >
                {/* Faculty Header */}
                <Link href={faculty.href} className="block p-5 pb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                        isGold ? "bg-brand-gold/10 text-brand-gold" : "bg-brand-blue/10 text-brand-blue"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-base ${isGold ? "text-brand-gold" : "text-brand-blue"}`}>
                        {faculty.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        {faculty.tagline}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Latest Post */}
                <a
                  href={faculty.latestPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 pb-4 group"
                >
                  {/* Thumbnail placeholder - gradient background */}
                  <div 
                    className={`w-full h-28 rounded-lg mb-3 flex items-center justify-center ${
                      isGold 
                        ? "bg-gradient-to-br from-brand-gold/5 to-brand-gold/15" 
                        : "bg-gradient-to-br from-brand-blue/5 to-brand-blue/15"
                    }`}
                  >
                    <span className={`text-xs font-medium ${isGold ? "text-brand-gold/40" : "text-brand-blue/40"}`}>
                      Latest Article
                    </span>
                  </div>
                  
                  <p className="text-sm font-medium text-brand-charcoal leading-snug mb-1.5 line-clamp-2 group-hover:text-brand-blue transition-colors">
                    {faculty.latestPost.title}
                  </p>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-2">
                    {faculty.latestPost.excerpt}
                  </p>
                  <span className="text-xs text-gray-400">{faculty.latestPost.date}</span>
                </a>

                {/* Footer Links */}
                <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={faculty.href}
                    className={`text-xs font-medium flex items-center gap-1 transition-colors ${
                      isGold ? "text-brand-gold hover:text-brand-gold/80" : "text-brand-blue hover:text-brand-blue/80"
                    }`}
                  >
                    View Archive <ArrowRight size={12} />
                  </Link>
                  <a
                    href={faculty.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors"
                  >
                    Medium <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { faculties };
