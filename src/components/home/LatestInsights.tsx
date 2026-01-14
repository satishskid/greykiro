import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const insights = {
  health: {
    title: "Health",
    color: "blue",
    mediumUrl: "https://medium.com/@GreyBrain",
    posts: [
      {
        title: "A Clinician's Guide to Agentic AI in Healthcare",
        date: "Jan 13",
        url: "https://medium.com/@GreyBrain/a-clinicians-guide-to-agentic-ai-in-healthcare-564cd29d84a7",
      },
      {
        title: "The doctors who master AI today will define the future of medicine tomorrow",
        date: "Jan 12",
        url: "https://medium.com/@GreyBrain/the-doctors-who-master-ai-today-will-define-the-future-of-medicine-tomorrow-97bd52a69c7f",
      },
    ],
  },
  soul: {
    title: "Soul",
    color: "gold",
    mediumUrl: "https://medium.com/@Sage_AI",
    posts: [
      {
        title: "The Horses of Distraction: How a 3,000-Year-Old Teaching Explains Your Instagram Addiction",
        date: "Dec 15",
        url: "https://medium.com/@Sage_AI/the-horses-of-distraction-how-a-3-000-year-old-teaching-explains-your-instagram-addiction-b0b5f84dd9a8",
      },
      {
        title: "The Throne Within: Why Ancient Wisdom About Self-Sovereignty Still Matters",
        date: "Dec 10",
        url: "https://medium.com/@Sage_AI/the-throne-within-why-ancient-wisdom-about-self-sovereignty-still-matters-in-your-broken-down-life-f9c0b3b6b426",
      },
    ],
  },
  lens: {
    title: "Lens",
    color: "blue",
    mediumUrl: "https://medium.com/@GreyBrainer",
    posts: [
      {
        title: "GreyBrainer Analysis: Angammal (2025)",
        date: "Jan 12",
        url: "https://medium.com/@GreyBrainer/greybrainer-analysis-angammal-2025-a61fae9e6916",
      },
      {
        title: "Detailed Comparative Analysis: Arjun Reddy V/S The Girlfriend",
        date: "Dec 18",
        url: "https://medium.com/@GreyBrainer/detailed-comparative-analysis-arjun-reddy-v-s-the-girlfriend-6ef02145557a",
      },
    ],
  },
};

export function LatestInsights() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal">
            Latest Insights
          </h2>
          <span className="text-sm text-gray-400 font-sans">From our Medium publications</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(insights).map(([key, section]) => (
            <div key={key} className="group">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-bold ${section.color === "gold" ? "text-brand-gold" : "text-brand-blue"}`}>
                  {section.title}
                </h3>
                <a
                  href={section.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-brand-blue transition-colors flex items-center gap-1"
                >
                  View all <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {section.posts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group/post"
                  >
                    <p className="text-sm font-medium text-brand-charcoal leading-snug mb-2 group-hover/post:text-brand-blue transition-colors line-clamp-2">
                      {post.title}
                    </p>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
