import { Button } from "@/components/ui";

interface CTAFooterProps {
  text: string;
  href: string;
}

export function CTAFooter({ text, href }: CTAFooterProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom text-center">
        <p className="text-lg text-gray-700 mb-6 font-sans">{text}</p>
        <Button href={href} variant="primary" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  );
}
