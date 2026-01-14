import { Card } from "@/components/ui";
import { CTAFooter } from "@/components/content";
import { Film } from "lucide-react";

const cinemaPosts = [
  {
    id: "1",
    title: "Animal: Masculinity in Crisis",
    excerpt: "A psychoanalytic reading of Sandeep Reddy Vanga's controversial exploration of toxic masculinity and father-son dynamics.",
    year: "2023",
    genre: "Drama/Action",
  },
  {
    id: "2",
    title: "12th Fail: The Sociology of Merit",
    excerpt: "How Vidhu Vinod Chopra's film deconstructs the myth of meritocracy in Indian civil services.",
    year: "2023",
    genre: "Biography/Drama",
  },
  {
    id: "3",
    title: "Laapataa Ladies: Gender and Rural India",
    excerpt: "Kiran Rao's feminist comedy and its subtle critique of patriarchal structures in small-town India.",
    year: "2024",
    genre: "Comedy/Drama",
  },
  {
    id: "4",
    title: "Panchayat: The Digital Gaze on Rural Life",
    excerpt: "Examining how the OTT series constructs and commodifies rural India for urban audiences.",
    year: "2020-2024",
    genre: "Comedy/Drama Series",
  },
];

export default function LensPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-charcoal to-gray-800 py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            GreyBrain <span className="text-brand-blue">Lens</span>
          </h1>
          <p className="text-lg text-gray-300 font-sans max-w-2xl">
            Decoding Culture. Academic analysis of Indian Cinema and OTT content.
          </p>
        </div>
      </section>

      {/* Visual Gallery Grid */}
      <section className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cinemaPosts.map((post) => (
            <Card key={post.id} hoverable className="overflow-hidden">
              {/* Placeholder for movie poster */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                <Film className="text-gray-600" size={64} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="text-brand-blue font-medium">{post.genre}</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-400">{post.year}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <CTAFooter
        text="Sharpen your critical thinking in The Academy"
        href="/academy"
      />
    </>
  );
}
