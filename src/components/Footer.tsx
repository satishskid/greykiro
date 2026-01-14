"use client";

import Link from "next/link";
import { useState } from "react";
import { Twitter, Linkedin, Youtube, Mail, ArrowRight, CheckCircle } from "lucide-react";

const socialLinks = [
  { platform: "Twitter", url: "https://twitter.com/greybrain", icon: Twitter, handle: "@greybrain" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/greybrain", icon: Linkedin, handle: "GreyBrain" },
  { platform: "YouTube", url: "https://youtube.com/@greybrain", icon: Youtube, handle: "@greybrain" },
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

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-1">Join The GreyBrain Lab</h3>
              <p className="text-gray-400 text-sm font-sans">
                One experiment. One prompt. One insight. Weekly.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle size={18} />
                <span className="text-sm">You&apos;re in! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-brand-blue"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-brand-blue text-white rounded-lg hover:bg-brand-blue/90 transition-colors flex items-center gap-1.5 text-sm font-medium"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-heading text-lg font-bold">
              GreyBrain<span className="text-brand-blue">.ai</span>
            </Link>
            <p className="mt-3 text-gray-400 text-sm font-sans leading-relaxed">
              Where Grey Matter Meets AI
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
            © 2025 GreyBrain.ai. All rights reserved.
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
