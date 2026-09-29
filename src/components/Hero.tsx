"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export default function Hero() {
  const capabilities = [
    { title: "Algorithmic Media Buying", desc: "Meta ASC+, Google PMax & Search architecture focused on net contribution margin." },
    { title: "Direct-Response Creative Lab", desc: "In-house scripting, UGC production, and 3D visual hooks." },
    { title: "Funnel CRO & Server-Side Data", desc: "Frictionless checkout, Shopify optimization, and 1st-party sGTM tracking." },
  ];

  const proofPoints = [
    { label: "Managed Ad Capital", value: "₹14.8Cr+" },
    { label: "Historical Blended ROAS", value: "4.92x" },
    { label: "Direct Attributed Sales", value: "₹68.5Cr+" },
    { label: "Partner Retention Rate", value: "94%" },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200 dark:border-slate-800">
      
      {/* Corner crosshairs at section boundary */}
      <span className="hidden sm:block absolute -top-2.5 -left-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>
      <span className="hidden sm:block absolute -top-2.5 -right-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Clear, High-Conviction Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Minimal Kicker with Mono Marker */}
            <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              <span>[KOLKATA HQ // REVENUE & PERFORMANCE ARCHITECTURE]</span>
            </div>

            {/* Main Headline - Solid High Contrast, Clean Optical Hierarchy */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              We engineer capital-efficient growth for high-ambition brands.
            </h1>

            {/* Direct, Honest Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal leading-relaxed">
              CFStudio pairs ruthless unit economics with high-velocity creative production and algorithmic media buying. We eliminate wasted spend and turn customer acquisition into a compounding revenue asset.
            </p>

            {/* High-Contrast Action CTAs with generous touch targets */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#audit-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm group min-h-[46px]"
              >
                <span>Request Growth Diagnostic</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 text-xs font-bold uppercase tracking-wider transition-all min-h-[46px]"
              >
                <span>Model Growth Economics</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Minimal Trust Metadata */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>Verified Meta & Google Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>Zero Retainer Markups</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>Weekly Strategic Sprints</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Editorial Capability & Performance Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Overview Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-sm bg-slate-900 dark:bg-white" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Agency Operating System
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-500">
                  EST. 2024 / KOLKATA
                </span>
              </div>

              {/* Three Real Pillars */}
              <div className="space-y-3">
                {capabilities.map((cap, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-150 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      0{i + 1}. {cap.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                      {cap.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Callout */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Engagement Model:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Dedicated Growth Pod</span>
              </div>

            </div>

          </div>

        </div>

        {/* Minimalist Monochromatic Proof Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proofPoints.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
