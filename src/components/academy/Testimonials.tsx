import { Card } from "@/components/ui";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-4">
          What Our Students Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-sans">
          Join hundreds of professionals who have transformed their practice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <Quote
                className="absolute top-4 right-4 text-brand-blue/20"
                size={32}
              />
              <p className="text-gray-700 font-sans mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-bold text-brand-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
