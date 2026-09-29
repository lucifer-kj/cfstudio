"use client";

import React, { useState } from "react";
import { Search, Sparkles, Rocket, RefreshCw, Check } from "lucide-react";

const stages = [
  {
    step: "01",
    phase: "Forensic Audit & Unit Economics",
    icon: Search,
    timeframe: "Days 1 — 5",
    tagline: "Uncovering hidden tracking leaks and CAC ceilings.",
    description:
      "We perform deep forensic analysis across your Shopify checkout, Google Analytics 4, Meta Conversions API (CAPI), and contribution margins before deploying ad capital.",
    bulletPoints: [
      "Server-side pixel & CAPI event audit (Purchase, AddToCart, ViewContent)",
      "Unit economics modeling: COGS, CAC tolerance, and breakeven ROAS",
      "Historical ad creative teardown and budget waste analysis",
      "Checkout funnel drop-off audit and mobile speed optimization"
    ],
    outcome: "A clear 90-day growth plan with non-negotiable KPI targets."
  },
  {
    step: "02",
    phase: "Creative & Direct-Response Lab",
    icon: Sparkles,
    timeframe: "Days 6 — 14",
    tagline: "Producing high-hook creative assets built for algorithmic feeds.",
    description:
      "Because algorithms prioritize engagement and watch time, creative is targeting. Our studio scripts and produces 15–25 bespoke ad hooks designed to capture qualified prospects.",
    bulletPoints: [
      "Direct-Response UGC video ads tested for >40% 3-second hook rate",
      "3D product animations and dynamic feature callouts",
      "Competitive whitespace research to exploit ad library gaps",
      "Landing page variants aligned with primary ad angles"
    ],
    outcome: "A production library of creative angles ready for live media buying."
  },
  {
    step: "03",
    phase: "Algorithmic Media Architecture",
    icon: Rocket,
    timeframe: "Days 15 — 30",
    tagline: "Multi-channel scaling across Meta, Google & YouTube.",
    description:
      "We build resilient account structures designed to withstand platform fluctuations. We deploy broad targeting, Advantage+ Shopping Campaigns (ASC+), and Google Performance Max with bid boundaries.",
    bulletPoints: [
      "Testing sandbox campaigns to isolate winning hooks",
      "High-intent Google Search capture to harvest demand created by Meta",
      "Cost-cap constraints to protect contribution margin",
      "Real-time contribution margin tracking via sGTM"
    ],
    outcome: "Predictable, profitable customer acquisition at targeted CAC."
  },
  {
    step: "04",
    phase: "Retention Loops & Compounding Scale",
    icon: RefreshCw,
    timeframe: "Days 30 — 90+",
    tagline: "Compounding customer LTV to maximize net bottom-line return.",
    description:
      "Scaling is sustained when initial buyers return. We implement automated WhatsApp flows, segmented email journeys, and bundle offers to lift customer lifetime value.",
    bulletPoints: [
      "Automated WhatsApp sequences for cart recovery and COD confirmation",
      "Replenishment reminders synchronized to product usage cycles",
      "A/B testing on bundles, order bumps, and free shipping tiers",
      "Weekly strategic growth reviews with executive leadership"
    ],
    outcome: "30-50% lift in repeat customer revenue."
  }
];

export default function GrowthEngine() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = stages[activeStep];
  const StepIcon = currentStage.icon;

  return (
    <section id="engine" className="py-20 md:py-24 relative bg-white dark:bg-[#0B0F1A] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            The CF Growth Engine™: Systematic execution in four phases.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A disciplined, four-stage protocol engineered to scale capital efficiently without margin erosion.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stages.map((st, index) => {
            const isCurrent = activeStep === index;
            return (
              <button
                key={st.step}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  isCurrent
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900 dark:border-white shadow-sm"
                    : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold">
                    PHASE {st.step}
                  </span>
                  <span className={`text-[10px] uppercase font-semibold ${isCurrent ? "text-slate-300 dark:text-slate-600" : "text-slate-400"}`}>
                    {st.timeframe}
                  </span>
                </div>
                <div className="font-display font-bold text-xs sm:text-sm line-clamp-1">
                  {st.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="mt-6 bg-slate-50 dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  {currentStage.timeframe}
                </span>
                <span className="text-xs text-slate-500 font-medium">Phase {currentStage.step} of 04</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {currentStage.tagline}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {currentStage.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Milestones & Deliverables:
                </div>
                {currentStage.bulletPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Milestone Outcome */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-850 rounded-lg p-5 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
                  <StepIcon className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Phase Objective
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                {currentStage.outcome}
              </p>

              <div className="pt-2">
                <a
                  href="#audit-form"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Initiate Phase 01 Audit</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
