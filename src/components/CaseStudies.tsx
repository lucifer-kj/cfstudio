"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Award, Layers, CheckCircle2, ChevronRight } from "lucide-react";

interface CaseStudy {
  id: string;
  category: "d2c" | "luxury" | "b2b" | "services";
  title: string;
  client: string;
  location: string;
  tag: string;
  highlightMetric: string;
  metricLabel: string;
  timeframe: string;
  before: {
    monthlyRevenue: string;
    roas: string;
    cpa: string;
    challenge: string;
  };
  after: {
    monthlyRevenue: string;
    roas: string;
    cpa: string;
    solution: string;
  };
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "bengal-silk",
    category: "luxury",
    title: "From Stagnant Walk-Ins to ₹38L/mo E-Commerce & Retail Scale",
    client: "Bengal Heritage Weaves",
    location: "Kolkata, Park Street & Online",
    tag: "Luxury Retail & D2C",
    highlightMetric: "5.6x",
    metricLabel: "Blended Meta & Google ROAS",
    timeframe: "90 Days",
    before: {
      monthlyRevenue: "₹3.8 Lakhs",
      roas: "1.9x",
      cpa: "₹1,450",
      challenge: "High reliance on local store traffic, struggling with Shopify store conversions and creative ad fatigue.",
    },
    after: {
      monthlyRevenue: "₹38.4 Lakhs",
      roas: "5.6x",
      cpa: "₹520",
      solution: "Engineered authentic video heritage hooks, Advantage+ catalog ads, and VIP WhatsApp preview drops for Kolkata and Pan-India NRI audiences.",
    },
    tags: ["Meta ASC+", "Shopify CRO", "WhatsApp VIP Automation", "Heritage Video UGC"],
  },
  {
    id: "aura-nutrition",
    category: "d2c",
    title: "Scaling a Clean Whey Brand to ₹84L/mo Profitable Run-Rate",
    client: "Aura Pure Nutrition",
    location: "Pan-India D2C",
    tag: "Health & D2C E-Com",
    highlightMetric: "₹84L+",
    metricLabel: "Monthly Revenue Unlocked",
    timeframe: "6 Months",
    before: {
      monthlyRevenue: "₹12.2 Lakhs",
      roas: "2.3x",
      cpa: "₹880",
      challenge: "High customer acquisition cost eating margins, zero post-purchase retention, and severe churn on monthly subscriptions.",
    },
    after: {
      monthlyRevenue: "₹84.6 Lakhs",
      roas: "4.9x",
      cpa: "₹395",
      solution: "Created 40+ direct-response UGC lab comparison videos, 1-click cart bundles, and automated WhatsApp 30-day replenishment triggers.",
    },
    tags: ["3D Product Motion", "Klaviyo Flows", "Google PMax", "Meta Direct Response"],
  },
  {
    id: "zenith-clinic",
    category: "services",
    title: "Generating 640+ High-Ticket Aesthetic Consultations / Month",
    client: "Zenith Aesthetic Clinics",
    location: "Kolkata & Salt Lake",
    tag: "High-Ticket Healthcare",
    highlightMetric: "640+",
    metricLabel: "Qualified Bookings / Month",
    timeframe: "60 Days",
    before: {
      monthlyRevenue: "45 Bookings",
      roas: "2.1x",
      cpa: "₹1,850 CPL",
      challenge: "Wasting budget on untargeted broad leads who never showed up to clinic consultations.",
    },
    after: {
      monthlyRevenue: "642 Bookings",
      roas: "6.8x Lead Value",
      cpa: "₹420 CPL",
      solution: "Hyper-localized Google Search intent capture, interactive consultation quiz funnel, and automated WhatsApp confirmation with instant clinic directions.",
    },
    tags: ["Google Search Ads", "Quiz Funnel", "WhatsApp CRM Sync", "Local Kolkata SEO"],
  },
  {
    id: "cloudscale-saas",
    category: "b2b",
    title: "210+ Enterprise Demo Calls Booked with ABM Strategy",
    client: "CloudScale Infra Labs",
    location: "Global & India B2B",
    tag: "B2B SaaS & Tech",
    highlightMetric: "210+",
    metricLabel: "Enterprise Demos Booked",
    timeframe: "120 Days",
    before: {
      monthlyRevenue: "8 Demos/mo",
      roas: "Unpredictable",
      cpa: "₹14,000/demo",
      challenge: "Long 6-month sales cycle, low LinkedIn engagement, and unqualified demo requests.",
    },
    after: {
      monthlyRevenue: "58 Demos/mo",
      roas: "7.4x Pipeline Value",
      cpa: "₹3,200/demo",
      solution: "Bespoke thought-leadership video campaigns targeting CTOs and VPs of Engineering, retargeted with case study landing pages and instant calendar booking.",
    },
    tags: ["LinkedIn Ads", "Account-Based Marketing", "High-Converting Landers"],
  },
];

export default function CaseStudies() {
  const [filter, setFilter] = useState<string>("all");

  const filteredStudies =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === filter);

  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-white dark:bg-[#0B0F1A] border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200/80 dark:border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Real Brands. Real Numbers. <br />
              <span className="gradient-text">Zero Fluff Case Studies.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "All Wins", value: "all" },
              { label: "D2C E-Com", value: "d2c" },
              { label: "Luxury & Fashion", value: "luxury" },
              { label: "Healthcare & Clinics", value: "services" },
              { label: "B2B SaaS", value: "b2b" },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === f.value
                    ? "bg-brand-600 text-white shadow-md shadow-brand-500/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      {study.tag}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-0.5">
                      {study.client}
                    </h3>
                    <span className="text-xs text-slate-400 block">{study.location}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-display font-black text-brand-600 dark:text-brand-400">
                      {study.highlightMetric}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                      {study.metricLabel}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 dark:text-white mt-5">
                  &ldquo;{study.title}&rdquo;
                </h4>

                {/* Before vs After Split Comparison Card */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Before */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/60 border border-red-200/50 dark:border-red-950/50 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      <span>Before CFStudio</span>
                      <span>Baseline</span>
                    </div>
                    <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      <div>Revenue: <strong className="text-slate-800 dark:text-slate-200">{study.before.monthlyRevenue}</strong></div>
                      <div>ROAS: <strong className="text-slate-800 dark:text-slate-200">{study.before.roas}</strong></div>
                      <div>CPA/CPL: <strong className="text-slate-800 dark:text-slate-200">{study.before.cpa}</strong></div>
                    </div>
                    <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-100 dark:border-slate-850">
                      &ldquo;{study.before.challenge}&rdquo;
                    </p>
                  </div>

                  {/* After */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/60 border border-emerald-300/60 dark:border-emerald-900/60 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <span>With CFStudio</span>
                      <span>{study.timeframe}</span>
                    </div>
                    <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      <div>Revenue: <strong className="text-emerald-600 dark:text-emerald-400">{study.after.monthlyRevenue}</strong></div>
                      <div>ROAS: <strong className="text-emerald-600 dark:text-emerald-400">{study.after.roas}</strong></div>
                      <div>CPA/CPL: <strong className="text-emerald-600 dark:text-emerald-400">{study.after.cpa}</strong></div>
                    </div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium pt-1 border-t border-slate-100 dark:border-slate-850">
                      {study.after.solution}
                    </p>
                  </div>
                </div>

                {/* Tech & Strategy Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {study.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-[11px] font-semibold text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Verified Client Case Study</span>
                <a
                  href="#audit-form"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
                >
                  <span>Replicate These Results</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
