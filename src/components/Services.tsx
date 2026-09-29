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
  badge: string;
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
    title: "Performance Paid Ads",
    badge: "Meta & Google Certified",
    headline: "Algorithmic Media Buying That Out-Scales The Competition",
    description:
      "We build multi-layered acquisition funnels across Meta (Facebook & Instagram), Google Search, Performance Max, and YouTube Ads with relentless bid management and creative diversification.",
    deliverables: [
      "Broad & ASC+ Dynamic Scaling architectures",
      "High-intent Google Search & PMax revenue capture",
      "Server-side Meta Conversions API (CAPI) & 1st-party tracking",
      "Daily budget re-allocation based on net contribution margin"
    ],
    keyMetric: "5.2x",
    metricLabel: "Average Blended ROAS",
  },
  {
    id: "cro-funnels",
    icon: Layers,
    title: "Conversion Rate Optimization & Funnels",
    badge: "Shopify & Web Specialists",
    headline: "Turning Expensive Ad Clicks into High-Ticket Purchases",
    description:
      "Driving traffic is only 30% of the battle. We redesign and re-architect your landing pages, cart drawer, and checkout experience to skyrocket conversion rates and Average Order Value (AOV).",
    deliverables: [
      "Custom high-speed Headless / Next.js & Shopify landing pages",
      "A/B split testing on offer hooks, pricing matrices & bundles",
      "Frictionless 1-click checkout and Post-Purchase upsells",
      "Mobile UX heatmaps & drop-off session recordings"
    ],
    keyMetric: "+43%",
    metricLabel: "Avg CVR Increase in 60 Days",
  },
  {
    id: "creative-studio",
    icon: Video,
    title: "Viral UGC & Creative Studio",
    badge: "In-House Production",
    headline: "Scroll-Stopping Creative Loops Built For Algorithmic Feeds",
    description:
      "In modern paid advertising, creative IS the targeting. Our in-house creative lab scripts, shoots, and edits 20+ bespoke ad creatives every month to prevent ad fatigue and capture market share.",
    deliverables: [
      "Direct-Response UGC video ads with hook rates > 45%",
      "3D product visualizer renders & aesthetic lifestyle cuts",
      "Interactive social carousel sets & dynamic feed banners",
      "Weekly creative tear-down & iterative testing sprints"
    ],
    keyMetric: "48%+",
    metricLabel: "Average 3-Second Hook Rate",
  },
  {
    id: "seo-geo",
    icon: Search,
    title: "SEO & Generative Engine Optimization",
    badge: "AI Search Ready",
    headline: "Dominate Google Organic and ChatGPT/Perplexity Search",
    description:
      "We future-proof your brand for the new era of search. Beyond classical keyword ranking, we optimize your brand's semantic footprint for AI search engines (Perplexity, ChatGPT, Gemini, Google SGE).",
    deliverables: [
      "Generative Engine Optimization (GEO) brand entity authority",
      "High-intent commercial keyword rankings & topical clusters",
      "Technical Core Web Vitals optimization (100/100 PageSpeed)",
      "High-authority PR backlinks & Kolkata / Pan-India citations"
    ],
    keyMetric: "320%",
    metricLabel: "Organic Traffic Growth",
  },
  {
    id: "retention",
    icon: MessageSquareCode,
    title: "Retention & WhatsApp Automation",
    badge: "Direct-to-Consumer Growth",
    headline: "Compounding Customer Lifetime Value (LTV)",
    description:
      "First orders break even; repeated orders generate pure net profit. We build intelligent retention loops using automated WhatsApp broadcasts, conversational AI agents, and Klaviyo email flows.",
    deliverables: [
      "Automated WhatsApp abandoned cart & COD verification flows",
      "VIP customer loyalty loops & replenishment triggers",
      "Hyper-segmented Klaviyo email sequences (Browse, Post-purchase)",
      "Predictive churn prevention & win-back campaigns"
    ],
    keyMetric: "38%",
    metricLabel: "Repeat Purchase Rate",
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "1st-Party Tracking & Data Architecture",
    badge: "Precision Attribution",
    headline: "Zero Blindspots. 100% Contribution Margin Visibility",
    description:
      "With iOS privacy updates and cookie deprecation, standard pixel tracking fails. We configure server-side tracking, Google Tag Manager servers, and custom contribution margin dashboards.",
    deliverables: [
      "Custom Server-Side Google Tag Manager (sGTM) on AWS/GCP",
      "Real-time Contribution Margin & blended MER dashboards",
      "Triple-Whale / Northbeam style multi-touch attribution",
      "Automated weekly executive reporting & ROI audit"
    ],
    keyMetric: "99.4%",
    metricLabel: "Attribution Data Accuracy",
  },
];

export default function Services() {
  const [selectedId, setSelectedId] = useState(services[0].id);
  const currentService = services.find((s) => s.id === selectedId) || services[0];
  const IconComponent = currentService.icon;

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0B0F1A]/50 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/70 border border-brand-300 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
            Our Full-Funnel Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Growth Services Built to <span className="gradient-text">Print Profit</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We don’t do piecemeal gigs. We operate as your dedicated fractional CMO and revenue engineering squad.
          </p>
        </div>

        {/* Desktop Interactive Tab Switcher & Display */}
        <div className="mt-14 hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Service Selector Tabs (5 cols) */}
          <div className="col-span-5 space-y-2.5">
            {services.map((item) => {
              const ItemIcon = item.icon;
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 shadow-md border-l-4 border-brand-600 dark:border-brand-500 border-y border-r border-slate-200 dark:border-slate-800"
                      : "bg-transparent hover:bg-white/60 dark:hover:bg-slate-900/40 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-brand-500 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-brand-50 dark:group-hover:bg-brand-950 group-hover:text-brand-600"
                      }`}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-display font-bold text-sm ${isSelected ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        {item.badge}
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-brand-600 dark:text-brand-400 translate-x-0.5 -translate-y-0.5"
                        : "text-slate-300 dark:text-slate-600 group-hover:text-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card (7 cols) */}
          <div className="col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl -z-10" />

            <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider block">
                    {currentService.badge}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              {/* Highlight Metric Pill */}
              <div className="text-right">
                <div className="text-2xl font-display font-black text-brand-600 dark:text-brand-400">
                  {currentService.keyMetric}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {currentService.metricLabel}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                {currentService.headline}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {currentService.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                What’s Delivered In Every Sprint:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentService.deliverables.map((d, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 flex items-center justify-between">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Customized for D2C, B2B & High-Ticket Brands
              </div>
              <a
                href="#audit-form"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
              >
                <span>Request Custom Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Mobile & Tablet Card Grid View */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {services.map((service) => {
            const SIcon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
                    <SIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    {service.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {service.headline}
                  </p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                  {service.description}
                </p>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-brand-600 dark:text-brand-400">
                      {service.keyMetric}
                    </span>
                    <span className="text-[11px] text-slate-400 block -mt-1">{service.metricLabel}</span>
                  </div>
                  <a
                    href="#audit-form"
                    className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1"
                  >
                    <span>Audit Strategy</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
