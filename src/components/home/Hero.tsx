import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Brain mesh background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="brain-mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-brand-blue" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-brand-blue" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-brand-blue" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-brand-blue" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brain-mesh)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight mb-6">
            Upgrade Your{" "}
            <span className="text-brand-blue">Biological Intelligence</span>{" "}
            with{" "}
            <span className="text-brand-gold">Artificial Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-sans">
            Bridging Medical Science, Vedic Wisdom, and Generative AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/academy" variant="primary" size="lg">
              Explore The Academy
            </Button>
            <Button href="/lab" variant="secondary" size="lg">
              Enter The Lab
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
