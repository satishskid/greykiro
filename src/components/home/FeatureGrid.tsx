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
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal text-center mb-3">
          The Three Faculties
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto font-sans text-sm">
          Explore our integrated approach to human potential through technology, wisdom, and culture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facultyCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.id}
                href={card.href}
                hoverable
                accentColor={card.accentColor}
                className="text-center py-8"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 ${
                    card.accentColor === "blue"
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "bg-brand-gold/10 text-brand-gold"
                  }`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 font-sans text-sm">
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
