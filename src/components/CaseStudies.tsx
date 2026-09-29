"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

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
    title: "Scaling a Kolkata heritage brand from local walk-ins to ₹38L/mo e-commerce revenue.",
    client: "Bengal Heritage Weaves",
    location: "Kolkata, Park Street & Online",
    tag: "Heritage Retail",
    highlightMetric: "5.6x",
    metricLabel: "Blended Media ROAS",
    timeframe: "90 Days",
    before: {
      monthlyRevenue: "₹3.8 Lakhs",
      roas: "1.9x",
      cpa: "₹1,450",
      challenge: "High dependence on physical store footfall; low mobile checkout conversion rate.",
    },
    after: {
      monthlyRevenue: "₹38.4 Lakhs",
      roas: "5.6x",
      cpa: "₹520",
      solution: "Engineered heritage video hooks, Meta ASC+ dynamic catalogs, and VIP WhatsApp collection drops.",
    },
    tags: ["Meta ASC+", "Shopify CRO", "WhatsApp Drops"],
  },
  {
    id: "aura-nutrition",
    category: "d2c",
    title: "Unlocking ₹84L/mo run-rate for a clean whey nutrition brand with direct-response UGC.",
    client: "Aura Pure Nutrition",
    location: "Pan-India D2C",
    tag: "Consumer D2C",
    highlightMetric: "₹84L+",
    metricLabel: "Monthly Revenue Scaled",
    timeframe: "6 Months",
    before: {
      monthlyRevenue: "₹12.2 Lakhs",
      roas: "2.3x",
      cpa: "₹880",
      challenge: "Customer acquisition costs outpacing margins; minimal post-purchase repeat rate.",
    },
    after: {
      monthlyRevenue: "₹84.6 Lakhs",
      roas: "4.9x",
      cpa: "₹395",
      solution: "Deployed 30+ direct-response UGC angles, 1-click cart bundles, and automated 30-day WhatsApp replenishment loops.",
    },
    tags: ["Creative UGC", "Klaviyo Retention", "Google PMax"],
  },
  {
    id: "zenith-clinic",
    category: "services",
    title: "Delivering 640+ qualified monthly aesthetic consultations at ₹420 CPL.",
    client: "Zenith Aesthetic Clinics",
    location: "Kolkata, Salt Lake Sector V",
    tag: "High-Ticket Clinical",
    highlightMetric: "640+",
    metricLabel: "Consultations / Mo",
    timeframe: "60 Days",
    before: {
      monthlyRevenue: "45 Bookings",
      roas: "2.1x",
      cpa: "₹1,850 CPL",
      challenge: "Budget burned on unqualified leads with poor clinic show-up rates.",
    },
    after: {
      monthlyRevenue: "642 Bookings",
      roas: "6.8x Lead Value",
      cpa: "₹420 CPL",
      solution: "Implemented high-intent Google Search campaigns paired with an interactive qualification funnel and instant WhatsApp reminders.",
    },
    tags: ["Google Search", "Quiz Funnels", "WhatsApp CRM"],
  },
  {
    id: "cloudscale-saas",
    category: "b2b",
    title: "Booking 210+ enterprise demo conversations with targeted account-based marketing.",
    client: "CloudScale Infra Labs",
    location: "India & Global B2B",
    tag: "Enterprise SaaS",
    highlightMetric: "210+",
    metricLabel: "Enterprise Demos",
    timeframe: "120 Days",
    before: {
      monthlyRevenue: "8 Demos/mo",
      roas: "Unpredictable",
      cpa: "₹14,000/demo",
      challenge: "Prolonged sales cycles, generic messaging, and untargeted LinkedIn spend.",
    },
    after: {
      monthlyRevenue: "58 Demos/mo",
      roas: "7.4x Pipeline Value",
      cpa: "₹3,200/demo",
      solution: "Rolled out founder-led video campaigns for technical leadership, retargeted with dedicated case studies and direct calendar scheduling.",
    },
    tags: ["LinkedIn ABM", "Landing Page CRO", "Pipeline Attribution"],
  },
];

export default function CaseStudies() {
  const [filter, setFilter] = useState<string>("all");

  const filteredStudies =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === filter);

  return (
    <section id="case-studies" className="py-16 md:py-24 relative bg-white dark:bg-[#0B0F1A] border-b border-slate-200 dark:border-slate-800">
      
      {/* Corner crosshairs at section boundary */}
      <span className="hidden sm:block absolute -top-2.5 -left-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>
      <span className="hidden sm:block absolute -top-2.5 -right-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
              [04 // VERIFIED PORTFOLIOS]
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Documented capital returns across diverse verticals.
            </h2>
          </div>

          {/* Filter Pills with touch scrolling on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { label: "All", value: "all" },
              { label: "D2C Brands", value: "d2c" },
              { label: "Heritage Retail", value: "luxury" },
              { label: "Clinics", value: "services" },
              { label: "B2B SaaS", value: "b2b" },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all active:scale-[0.97] min-h-[38px] ${
                  filter === f.value
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                    : "bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Tip */}
        <div className="lg:hidden flex items-center justify-between text-[11px] text-slate-400 pt-3">
          <span>Swipe horizontally to view case studies →</span>
          <span className="font-mono">{filteredStudies.length} Studies</span>
        </div>

        {/* Responsive Container: Fluid Horizontal Snap Carousel on Mobile, Clean Grid on Desktop */}
        <div className="mt-4 lg:mt-8 flex lg:grid lg:grid-cols-2 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="w-[88vw] sm:w-[420px] lg:w-auto shrink-0 snap-center bg-slate-50 dark:bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                      {study.tag}
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-0.5">
                      {study.client}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-xl font-display font-bold text-slate-900 dark:text-white">
                      {study.highlightMetric}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {study.metricLabel}
                    </span>
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {study.title}
                </h4>

                {/* Before vs After Clean Table */}
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 block">
                      Baseline
                    </span>
                    <div>Rev: <strong className="text-slate-700 dark:text-slate-300">{study.before.monthlyRevenue}</strong></div>
                    <div>ROAS: <strong className="text-slate-700 dark:text-slate-300">{study.before.roas}</strong></div>
                    <div>CPA: <strong className="text-slate-700 dark:text-slate-300">{study.before.cpa}</strong></div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-700 space-y-1">
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate-900 dark:text-white block">
                      CFStudio ({study.timeframe})
                    </span>
                    <div>Rev: <strong className="text-slate-900 dark:text-white">{study.after.monthlyRevenue}</strong></div>
                    <div>ROAS: <strong className="text-slate-900 dark:text-white">{study.after.roas}</strong></div>
                    <div>CPA: <strong className="text-slate-900 dark:text-white">{study.after.cpa}</strong></div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-normal line-clamp-2">
                  {study.after.solution}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex gap-1 overflow-hidden">
                  {study.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium truncate">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#audit-form"
                  className="font-semibold text-slate-900 dark:text-white hover:underline flex items-center gap-0.5 shrink-0 ml-2"
                >
                  <span>Replicate Model</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
