"use client";

import React, { useState } from "react";
import { 
  Target, 
  Layers, 
  Video, 
  Search, 
  MessageSquareCode, 
  LineChart, 
  Check, 
  ArrowUpRight 
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  keyMetric: string;
  metricLabel: string;
}

const services: ServiceItem[] = [
  {
    id: "paid-ads",
    icon: Target,
    title: "Performance Paid Media",
    headline: "Algorithmic media buying focused strictly on net contribution margin.",
    description:
      "We design and scale high-ROAS multi-channel campaigns across Meta (Facebook & Instagram), Google Search, Performance Max, and YouTube Ads with disciplined bid constraints and continuous creative testing.",
    deliverables: [
      "Broad targeting & ASC+ dynamic scaling architectures",
      "High-intent Google Search & PMax revenue capture",
      "Server-side Meta Conversions API (CAPI) & 1st-party attribution",
      "Capital reallocation based on net contribution margin"
    ],
    keyMetric: "5.2x",
    metricLabel: "Historical Portfolio ROAS",
  },
  {
    id: "cro-funnels",
    icon: Layers,
    title: "Conversion Funnels & CRO",
    headline: "Transforming ad traffic into high-ticket checkouts and lower CPA.",
    description:
      "Media buying only succeeds when the landing page converts. We engineer bespoke landing pages, mobile-optimized cart drawers, and frictionless checkout flows to expand conversion rates and Average Order Value.",
    deliverables: [
      "High-speed Headless / Next.js & Shopify landers",
      "A/B split testing on offer structures, bundles & pricing",
      "1-click checkout optimization and post-purchase upsells",
      "Friction analysis, heatmaps & user drop-off telemetry"
    ],
    keyMetric: "+43%",
    metricLabel: "Average CVR Lift",
  },
  {
    id: "creative-studio",
    icon: Video,
    title: "Direct-Response Creative Lab",
    headline: "Scroll-stopping direct-response creative loops built for algorithms.",
    description:
      "Creative is modern targeting. Our in-house production team scripts, shoots, and edits 15–25 bespoke ad creatives each month to eliminate ad fatigue and capture market demand.",
    deliverables: [
      "Direct-Response UGC video ads with high hook retention",
      "3D product animations & aesthetic lifestyle cuts",
      "Competitive whitespace teardowns & ad library gap analysis",
      "Weekly creative performance analytics and iterative cuts"
    ],
    keyMetric: "48%+",
    metricLabel: "Avg 3-Second Hook Retention",
  },
  {
    id: "seo-geo",
    icon: Search,
    title: "Search & Generative Engine Optimization",
    headline: "Establishing topical authority across Google and AI search engines.",
    description:
      "We prepare your brand for modern search behavior. Beyond traditional SERP rankings, we optimize your semantic entity footprint so your brand is recommended by AI engines (Perplexity, ChatGPT, Gemini).",
    deliverables: [
      "Generative Engine Optimization (GEO) brand entity authority",
      "Commercial high-intent keyword capture & topical clusters",
      "Technical Core Web Vitals optimization",
      "High-authority PR backlinks & contextual brand citations"
    ],
    keyMetric: "320%",
    metricLabel: "Average Organic Expansion",
  },
  {
    id: "retention",
    icon: MessageSquareCode,
    title: "Retention & Customer LTV",
    headline: "Compounding customer lifetime value through automated messaging.",
    description:
      "Acquiring customers is only half the formula. We build automated retention loops using WhatsApp flows and segmented email journeys to drive repeat purchases and increase retention margin.",
    deliverables: [
      "Automated WhatsApp cart recovery & COD verification sequences",
      "VIP customer loyalty loops & replenishment triggers",
      "Behavioral email sequences (Browse abandonment, Post-purchase)",
      "Win-back campaigns timed to product consumption cycles"
    ],
    keyMetric: "38%",
    metricLabel: "Average Repeat Order Rate",
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "1st-Party Tracking Architecture",
    headline: "Full-funnel attribution and contribution margin transparency.",
    description:
      "We eliminate data blindspots caused by browser privacy policies. By deploying server-side Google Tag Manager and direct cloud webhooks, we ensure every rupee of revenue is accurately attributed.",
    deliverables: [
      "Server-Side Google Tag Manager (sGTM) on dedicated cloud infrastructure",
      "Custom contribution margin & blended Marketing Efficiency Ratio (MER) views",
      "Cross-channel deduplication and multi-touch attribution modeling",
      "Weekly executive performance reports"
    ],
    keyMetric: "99.4%",
    metricLabel: "Attribution Data Fidelity",
  },
];

export default function Services() {
  const [selectedId, setSelectedId] = useState(services[0].id);
  const currentService = services.find((s) => s.id === selectedId) || services[0];
  const IconComponent = currentService.icon;

  return (
    <section id="services" className="py-20 md:py-24 relative bg-slate-50/50 dark:bg-[#0B0F1A]/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Clean Monochrome */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Capabilities & Focus Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Integrated growth engineering across the entire customer lifecycle.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            We operate as your dedicated revenue team — handling everything from creative production to media buying and technical data attribution.
          </p>
        </div>

        {/* Desktop Tab Switcher & Display */}
        <div className="mt-12 hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Service Selector Tabs (5 cols) */}
          <div className="col-span-5 space-y-2">
            {services.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all flex items-center justify-between border ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 shadow-sm text-slate-900 dark:text-white"
                      : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-900/40 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-brand-500" : "bg-slate-300 dark:bg-slate-700"}`} />
                    <span className="text-sm font-semibold tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-300 dark:text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card (7 cols) */}
          <div className="col-span-7 bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              {/* Minimal Metric Callout */}
              <div className="text-right">
                <div className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {currentService.keyMetric}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {currentService.metricLabel}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {currentService.headline}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {currentService.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentService.deliverables.map((d, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Tailored for D2C, Retail & B2B Portfolios</span>
              <a
                href="#audit-form"
                className="font-semibold text-slate-900 dark:text-white hover:underline flex items-center gap-1"
              >
                <span>Request Strategic Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Mobile & Tablet Card Grid View */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
          {services.map((service) => {
            const SIcon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
                    <SIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {service.keyMetric}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {service.headline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
