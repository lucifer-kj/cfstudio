"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, ArrowRight, Menu, X, MessageSquare, PhoneCall } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Growth Engine", href: "#engine" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "ROI Calculator", href: "#calculator" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0B0F1A]/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-10 w-44 sm:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
              {theme === "dark" ? (
                <div className="flex items-center gap-2.5 h-full">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-white/5 border border-white/10 shadow-glow-sm">
                    <Image
                      src="/brand/cf-icon-mark.png"
                      alt="CFStudio Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-0.5">
                      CF<span className="text-brand-400">Studio</span>
                      <span className="text-[10px] text-brand-300 font-semibold align-top ml-0.5">™</span>
                    </span>
                    <span className="text-[9px] tracking-widest text-slate-400 font-semibold uppercase -mt-0.5">
                      Digital Marketing That Works
                    </span>
                  </div>
                </div>
              ) : (
                <Image
                  src="/brand/cfstudio-logo-full.png"
                  alt="CFStudio Logo - Digital Marketing That Works"
                  fill
                  className="object-contain object-left"
                  priority
                />
              )}
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/919830000000?text=Hi%20CFStudio%2C%20I'd%20like%20to%20discuss%20scaling%20our%20brand%20marketing!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-900/50 bg-white dark:bg-slate-900/60 transition-all shadow-sm flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 bg-white dark:bg-slate-900/60 transition-all shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 scale-100" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform rotate-0 scale-100" />
              )}
            </button>

            {/* Primary Audit CTA */}
            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all group"
            >
              <span>Get Free Growth Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu & Theme button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-5 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href="https://wa.me/919830000000?text=Hi%20CFStudio%2C%20I'd%20like%20to%20discuss%20scaling%20our%20brand%20marketing!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Chat</span>
            </a>
            <a
              href="#audit-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold shadow-md shadow-brand-500/25"
            >
              <span>Get Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
