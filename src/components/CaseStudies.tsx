"use client";

import React, { useState, useRef } from "react";
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
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const filteredStudies =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === filter);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / (clientWidth * 0.86));
      setActiveMobileIndex(Math.min(Math.max(index, 0), caseStudies.length - 1));
    }
  };

  const scrollToMobileIndex = (index: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const itemWidth = container.clientWidth * 0.86;
    container.scrollTo({ left: index * itemWidth, behavior: "smooth" });
    setActiveMobileIndex(index);
  };

  return (
    <section id="case-studies" className="py-14 sm:py-16 md:py-24 relative bg-white dark:bg-[#0B0F1A] border-b border-slate-200 dark:border-slate-800">
      
      {/* Corner crosshairs at section boundary */}
      <span className="hidden sm:block absolute -top-2.5 -left-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>
      <span className="hidden sm:block absolute -top-2.5 -right-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
              [03 // VERIFIED PORTFOLIOS]
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Documented capital returns across diverse verticals.
            </h2>
          </div>

          {/* Desktop Filter Pills (Untouched) */}
          <div className="hidden lg:flex items-center gap-1.5">
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
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
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

        {/* MOBILE SPECIFIC: Fingertip Swipeable Carousel with Interactive Pagination (lg:hidden) */}
        <div className="lg:hidden mt-6">
          <div 
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-3.5 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory scrollbar-none touch-pan-x"
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="w-[86vw] shrink-0 snap-center bg-slate-50 dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 dark:border-slate-800">
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

                  <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {study.title}
                  </h4>

                  {/* Clean Before vs After Split */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-0.5">
                      <span className="text-[9px] font-mono font-semibold uppercase text-slate-400 block">
                        Baseline
                      </span>
                      <div className="text-[11px]">Rev: <strong>{study.before.monthlyRevenue}</strong></div>
                      <div className="text-[11px]">ROAS: <strong>{study.before.roas}</strong></div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-700 space-y-0.5">
                      <span className="text-[9px] font-mono font-semibold uppercase text-slate-900 dark:text-white block">
                        With CFStudio
                      </span>
                      <div className="text-[11px]">Rev: <strong className="text-slate-900 dark:text-white">{study.after.monthlyRevenue}</strong></div>
                      <div className="text-[11px]">ROAS: <strong className="text-slate-900 dark:text-white">{study.after.roas}</strong></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#audit-form"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider active:scale-[0.98] transition-all min-h-[44px]"
                  >
                    <span>Replicate These Results</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Accessible Touch Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-2" role="tablist" aria-label="Case studies pagination">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToMobileIndex(idx)}
                aria-label={`Go to case study ${idx + 1}`}
                aria-selected={activeMobileIndex === idx}
                role="tab"
                className="p-2 min-w-[32px] min-h-[32px] flex items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    activeMobileIndex === idx
                      ? "w-6 h-1.5 bg-slate-900 dark:bg-white"
                      : "w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP SPECIFIC: Full 2-Col Grid (hidden lg:grid) - 100% UNTOUCHED */}
        <div className="mt-8 hidden lg:grid lg:grid-cols-2 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                      {study.tag} • {study.location}
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

                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {study.title}
                </h4>

                {/* Before vs After Clean Table */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 block">
                      Initial Baseline
                    </span>
                    <div>Revenue: <strong className="text-slate-700 dark:text-slate-300">{study.before.monthlyRevenue}</strong></div>
                    <div>ROAS: <strong className="text-slate-700 dark:text-slate-300">{study.before.roas}</strong></div>
                    <div>CPA: <strong className="text-slate-700 dark:text-slate-300">{study.before.cpa}</strong></div>
                  </div>

                  <div className="p-3 rounded bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-700 space-y-1">
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate-900 dark:text-white block">
                      With CFStudio ({study.timeframe})
                    </span>
                    <div>Revenue: <strong className="text-slate-900 dark:text-white">{study.after.monthlyRevenue}</strong></div>
                    <div>ROAS: <strong className="text-slate-900 dark:text-white">{study.after.roas}</strong></div>
                    <div>CPA: <strong className="text-slate-900 dark:text-white">{study.after.cpa}</strong></div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-normal">
                  {study.after.solution}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex gap-1.5">
                  {study.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#audit-form"
                  className="font-semibold text-slate-900 dark:text-white hover:underline flex items-center gap-0.5"
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
