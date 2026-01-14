import { Card } from "@/components/ui";
import { Stethoscope, Brain, Film } from "lucide-react";

const facultyCards = [
  {
    id: "health",
    title: "GreyBrain Health",
    description: "From Stethoscope to Algorithm. AI for Healthcare Innovators.",
    icon: Stethoscope,
    href: "/health",
    accentColor: "blue" as const,
  },
  {
    id: "soul",
    title: "GreyBrain Soul",
    description: "The Science of Purpose. Neuroscience meets Vedic Wisdom.",
    icon: Brain,
    href: "/soul",
    accentColor: "gold" as const,
  },
  {
    id: "lens",
    title: "GreyBrain Lens",
    description: "Decoding Culture. Academic Analysis of Cinema.",
    icon: Film,
    href: "/lens",
    accentColor: "blue" as const,
  },
];

export function FeatureGrid() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
          The Three Faculties
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-sans">
          Explore our integrated approach to human potential through technology, wisdom, and culture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.id}
                href={card.href}
                hoverable
                accentColor={card.accentColor}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    card.accentColor === "blue"
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "bg-brand-gold/10 text-brand-gold"
                  }`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-sans">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { facultyCards };
