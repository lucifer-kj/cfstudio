"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Mail, Phone, MapPin, MessageSquare, ArrowUp } from "lucide-react";

export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#080B13] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-44">
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
                  />
                )}
              </div>
            </Link>

            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              CFStudio is Kolkata&apos;s premier high-impact performance marketing and creative growth agency. We architect algorithmic ad funnels that compound client revenue.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919830000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-500 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-300 dark:hover:border-brand-800 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-pink-600 hover:border-pink-300 dark:hover:border-pink-800 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-sky-500 hover:border-sky-300 dark:hover:border-sky-800 transition-colors shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  The CF Growth Engine™
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Interactive ROI Calculator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Partner Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Core Expertise
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Meta & Instagram Ads</li>
              <li>Google Search & PMax</li>
              <li>Viral Direct-Response UGC</li>
              <li>Shopify Funnels & CRO</li>
              <li>Generative Engine & SEO</li>
              <li>Server-Side Tracking (sGTM)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                <span>Sector V, Salt Lake & Park Street, Kolkata, West Bengal 700091, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                <a href="mailto:growth@cfstudio.in" className="hover:text-brand-600 dark:hover:text-brand-400">
                  growth@cfstudio.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                <span>+91 98300 XXXXX</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} CFStudio. All rights reserved. &ldquo;Digital Marketing That Works&rdquo; is a registered trademark.</p>
          
          <div className="flex items-center gap-6">
            <a href="#audit-form" className="hover:text-brand-600 dark:hover:text-brand-400">Privacy Policy</a>
            <a href="#audit-form" className="hover:text-brand-600 dark:hover:text-brand-400">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
