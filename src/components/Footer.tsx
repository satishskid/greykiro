"use client";

import Link from "next/link";
import { Instagram, Linkedin, Facebook, Send, MessageCircle } from "lucide-react";

const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/greybrain.ai/", icon: Instagram, handle: "@greybrain.ai" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/greybrain/", icon: Linkedin, handle: "GreyBrain" },
  { platform: "Facebook", url: "https://www.facebook.com/61578061765400/", icon: Facebook, handle: "GreyBrain" },
  { platform: "Telegram", url: "https://t.me/greybrainsoai", icon: Send, handle: "@greybrainsoai" },
];

const quickLinks = [
  { label: "Health", href: "/health" },
  { label: "Soul", href: "/soul" },
  { label: "Lens", href: "/lens" },
  { label: "Academy", href: "/academy" },
];

const mediumLinks = [
  { label: "Healthcare AI", href: "https://medium.com/@GreyBrain" },
  { label: "ConsciousAI", href: "https://medium.com/@Sage_AI" },
  { label: "Cinema Analysis", href: "https://medium.com/@GreyBrainer" },
];

const courseLinks = [
  { label: "GenAI Express", href: "https://learn.greybrain.ai/course/gen-ai-doctors-express" },
  { label: "12-Week Program", href: "https://learn.greybrain.ai/course/gen-ai-healthcare" },
  { label: "All Courses", href: "https://learn.greybrain.ai" },
];

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Community Join Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-1">Join The GreyBrain Community</h3>
              <p className="text-gray-400 text-sm font-sans">
                Connect with 500+ healthcare professionals exploring AI.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://chat.whatsapp.com/D8pR8tE6aYeLiE6PnU7gqL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors text-sm font-medium"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://t.me/greybrainsoai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#0088cc] text-white rounded-lg hover:bg-[#0088cc]/90 transition-colors text-sm font-medium"
              >
                <Send size={16} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-heading text-lg font-bold">
              GreyBrain<span className="text-brand-blue">.ai</span>
            </Link>
            <p className="mt-3 text-gray-400 text-sm font-sans leading-relaxed">
              Where Grey Matter Meets AI
            </p>
            <p className="mt-2 text-gray-500 text-xs font-sans">
              Bengaluru, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-medium text-sm mb-4">AI School</h4>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Medium Publications */}
          <div>
            <h4 className="font-medium text-sm mb-4">Read on Medium</h4>
            <ul className="space-y-2">
              {mediumLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-sm mb-4">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      <Icon size={14} />
                      {link.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 GreyBrain.ai. All rights reserved. · IIHMR Bangalore Partner
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={link.platform}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
