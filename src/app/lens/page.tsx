import { Card } from "@/components/ui";
import { CTAFooter } from "@/components/content";
import { Film, Star } from "lucide-react";

const cinemaPosts = [
  {
    id: "1",
    title: "GreyBrainer Analysis: Angammal (2025)",
    excerpt: "A deep dive into the narrative structure and cultural commentary of this Tamil drama.",
    date: "Jan 12, 2026",
    type: "Analysis",
    url: "https://medium.com/@GreyBrainer/greybrainer-analysis-angammal-2025-a61fae9e6916",
  },
  {
    id: "2",
    title: "GreyBrainer Analysis: Ikkis",
    excerpt: "Examining the portrayal of military valor and national identity in contemporary Indian cinema.",
    date: "Jan 3, 2026",
    type: "Analysis",
    url: "https://medium.com/@GreyBrainer/greybrainer-analysis-ikkis-6b5b54a0cf1e",
  },
  {
    id: "3",
    title: "GreyBrainer Report: The Roses (2025)",
    excerpt: "A comprehensive review of storytelling techniques and thematic elements.",
    date: "Dec 30, 2025",
    type: "Report",
    url: "https://medium.com/@GreyBrainer/greybrainer-report-the-roses-2025-220e22e0eb78",
  },
  {
    id: "4",
    title: "GreyBrainer Report: Emily in Paris Season 5",
    excerpt: "Cultural analysis of the global phenomenon and its evolving narrative.",
    date: "Dec 27, 2025",
    type: "Report",
    url: "https://medium.com/@GreyBrainer/greybrainer-report-emily-in-paris-season-5-799ae154c41c",
  },
  {
    id: "5",
    title: "The Strategic Pivot: Navigating Streaming Fatigue and Prioritising Value",
    excerpt: "How OTT platforms are adapting to changing viewer behaviors and content saturation.",
    date: "Dec 22, 2025",
    type: "Industry",
    url: "https://medium.com/@GreyBrainer/the-strategic-pivot-navigating-streaming-fatigue-and-prioritising-value-ceb5365bc51d",
  },
  {
    id: "6",
    title: "Detailed Comparative Analysis: Arjun Reddy V/S The Girlfriend",
    excerpt: "A psychoanalytic comparison of toxic masculinity across cultural adaptations.",
    date: "Dec 18, 2025",
    type: "Comparative",
    url: "https://medium.com/@GreyBrainer/detailed-comparative-analysis-arjun-reddy-v-s-the-girlfriend-6ef02145557a",
  },
];

export default function LensPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-charcoal to-gray-800 py-12 text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            GreyBrain <span className="text-brand-blue">Lens</span>
          </h1>
          <p className="text-gray-300 font-sans max-w-xl">
            Decoding Culture. Academic analysis of Indian Cinema and OTT content.
          </p>
          <a
            href="https://medium.com/@GreyBrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm text-brand-blue hover:underline"
          >
            Follow GreyBrainer on Medium →
          </a>
        </div>
      </section>

      {/* Visual Gallery Grid */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cinemaPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card hoverable className="overflow-hidden h-full">
                {/* Placeholder for movie poster */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-40 flex items-center justify-center relative">
                  <Film className="text-gray-600" size={48} />
                  <span className="absolute top-2 right-2 text-xs bg-brand-blue/90 text-white px-2 py-0.5 rounded">
                    {post.type}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-base font-bold text-brand-charcoal mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Methodology Link */}
        <div className="mt-10 text-center">
          <a
            href="https://medium.com/@GreyBrainer/detailed-comparative-analysis-greybrainer-methodology-1baff7ef483d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-blue transition-colors"
          >
            <Star size={14} />
            Learn about the GreyBrainer Methodology →
          </a>
        </div>
      </section>

      {/* CTA Footer */}
      <CTAFooter
        text="Sharpen your critical thinking skills in The Academy."
        href="/academy"
      />
    </>
  );
}
