"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, ArrowRight, Menu, X, MessageSquare } from "lucide-react";

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
    { name: "Methodology", href: "#engine" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "ROI Modeling", href: "#calculator" },
    { name: "Proof", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0B0F1A]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none">
            <div className="relative h-9 w-44 sm:w-48">
              {theme === "dark" ? (
                <div className="flex items-center gap-2.5 h-full">
                  <div className="relative w-7 h-7 rounded-md overflow-hidden flex items-center justify-center p-1 bg-white/5 border border-white/10">
                    <Image
                      src="/brand/cf-icon-mark.png"
                      alt="CFStudio Icon"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-0.5 leading-none">
                      CFStudio
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 ml-1"></span>
                    </span>
                    <span className="text-[8.5px] tracking-widest text-slate-400 font-semibold uppercase mt-1">
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

          {/* Desktop Nav Links (Primary/Secondary Colors, Clean) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/919830000000?text=Hi%20CFStudio%2C%20I'd%20like%20to%20discuss%20our%20marketing%20strategy."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Primary Action Button (High Contrast Dark Slate / White) */}
            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Book Growth Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-[#0B0F1A] border-b border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="#audit-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider"
            >
              Book Growth Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
