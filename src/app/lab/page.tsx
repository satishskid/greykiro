import { NewsletterForm } from "@/components/lab";
import { Beaker } from "lucide-react";

export default function LabPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-brand-blue/5 via-white to-brand-gold/5">
      <div className="container-custom py-20 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-blue/10 mb-8">
          <Beaker className="text-brand-blue" size={40} />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
          Join The GreyBrain Lab
        </h1>

        {/* Promise */}
        <p className="text-lg md:text-xl text-gray-600 font-sans mb-10 max-w-xl mx-auto">
          One experiment. One prompt. One insight. Weekly.
        </p>

        {/* Newsletter Form */}
        <NewsletterForm />

        {/* Trust indicators */}
        <p className="mt-8 text-sm text-gray-400">
          Join 500+ doctors and innovators. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
