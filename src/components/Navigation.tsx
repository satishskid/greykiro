"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Health", href: "/health" },
  { label: "Soul", href: "/soul" },
  { label: "Lens", href: "/lens" },
  { label: "Academy", href: "/academy" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/greybrain", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/greybrain", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@greybrain", label: "YouTube" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="font-heading text-lg font-bold text-brand-charcoal">
            GreyBrain<span className="text-brand-blue">.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-brand-blue"
                        : "text-brand-charcoal hover:text-brand-blue"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side: Social + Subscribe */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-1 mr-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-400 hover:text-brand-blue transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            {/* Subscribe Button */}
            <Link
              href="/lab"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-brand-blue rounded-full hover:bg-brand-blue/90 transition-colors"
            >
              <Mail size={14} />
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-2 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-brand-blue"
                          : "text-brand-charcoal hover:text-brand-blue"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-sm font-medium text-white bg-brand-blue rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail size={14} />
                  Subscribe
                </Link>
              </li>
            </ul>

            {/* Mobile Social */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-brand-blue transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
