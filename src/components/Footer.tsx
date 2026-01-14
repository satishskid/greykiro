import Link from "next/link";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { platform: "Twitter", url: "https://twitter.com/greybrain", icon: Twitter },
  { platform: "LinkedIn", url: "https://linkedin.com/company/greybrain", icon: Linkedin },
  { platform: "YouTube", url: "https://youtube.com/@greybrain", icon: Youtube },
  { platform: "Email", url: "mailto:hello@greybrain.ai", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-heading text-xl font-bold">
              GreyBrain<span className="text-brand-blue">.ai</span>
            </Link>
            <p className="mt-2 text-gray-400 text-sm">
              Where Grey Matter Meets AI
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-brand-blue transition-colors duration-200"
                  aria-label={`Follow us on ${link.platform}`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
