"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, IndianRupee, ArrowRight, Sparkles, Check, HelpCircle } from "lucide-react";

interface IndustryPreset {
  name: string;
  defaultAov: number;
  expectedRoas: number;
  description: string;
}

const industryPresets: Record<string, IndustryPreset> = {
  d2c: {
    name: "D2C E-Commerce & Retail",
    defaultAov: 2499,
    expectedRoas: 5.2,
    description: "Apparel, Beauty, Nutrition, Footwear & Consumer Brands",
  },
  luxury: {
    name: "Luxury & Jewellery",
    defaultAov: 14500,
    expectedRoas: 6.4,
    description: "Fine Jewellery, Premium Home Decor & High-AOV Goods",
  },
  leadgen: {
    name: "B2B SaaS & Enterprise Leads",
    defaultAov: 35000,
    expectedRoas: 4.6,
    description: "High-Ticket Client Acquisition, Real Estate & Tech Consultancies",
  },
  services: {
    name: "Healthcare, Clinics & Education",
    defaultAov: 8500,
    expectedRoas: 4.8,
    description: "Aesthetic Clinics, EdTech & Premium Service Providers",
  },
};

export default function RoiCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("d2c");
  const [adSpend, setAdSpend] = useState<number>(300000); // 3 Lakhs default
  const [customRoas, setCustomRoas] = useState<number>(5.2);
  const [aov, setAov] = useState<number>(2499);

  const handleIndustryChange = (key: string) => {
    setSelectedIndustry(key);
    const preset = industryPresets[key];
    setAov(preset.defaultAov);
    setCustomRoas(preset.expectedRoas);
  };

  // Calculations
  const projectedRevenue = Math.round(adSpend * customRoas);
  const estimatedOrders = aov > 0 ? Math.round(projectedRevenue / aov) : 0;
  const grossProfitSpread = Math.round(projectedRevenue - adSpend);
  const annualizedRunRate = Math.round(projectedRevenue * 12);

  const spendPresets = [
    { label: "₹75,000", value: 75000 },
    { label: "₹1.5 Lakh", value: 150000 },
    { label: "₹3 Lakhs", value: 300000 },
    { label: "₹8 Lakhs", value: 800000 },
    { label: "₹20 Lakhs", value: 2000000 },
  ];

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative bg-slate-50/70 dark:bg-[#0B0F1A]/70 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Interactive Projection Tool
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            See What Your Revenue Looks Like at <span className="gradient-text">CFStudio Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Plug in your monthly advertising budget and discover what our performance architecture can yield for your business.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-14 max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* 1. Industry Category */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  1. Select Your Business Category
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {Object.entries(industryPresets).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleIndustryChange(key)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-semibold ${
                        selectedIndustry === key
                          ? "bg-brand-50 dark:bg-brand-950/80 border-brand-500 text-brand-700 dark:text-brand-300 shadow-sm"
                          : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-bold">{item.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{item.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Monthly Ad Spend Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    2. Planned Monthly Ad Budget
                  </label>
                  <span className="text-lg font-display font-black text-brand-600 dark:text-brand-400">
                    {formatCurrency(adSpend)}
                  </span>
                </div>

                <input
                  type="range"
                  min={30000}
                  max={3000000}
                  step={20000}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />

                {/* Quick Presets */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-slate-400 mr-1 font-medium">Quick select:</span>
                  {spendPresets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setAdSpend(preset.value)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        adSpend === preset.value
                          ? "bg-brand-600 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Expected ROAS & AOV Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Target ROAS Multiple
                    </label>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {customRoas.toFixed(1)}x
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2.0}
                    max={9.0}
                    step={0.1}
                    value={customRoas}
                    onChange={(e) => setCustomRoas(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>2.0x (Baseline)</span>
                    <span>5.2x (CF Avg)</span>
                    <span>9.0x (Hyper-Scale)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Avg Order / Deal Value (AOV)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={aov}
                      onChange={(e) => setAov(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium">INR</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Used to compute order velocity</span>
                </div>
              </div>

            </div>

            {/* Right Output Showcase (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-950 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl border border-brand-700/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-brand-800/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-200">
                      Projected Outcomes
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-800/80 text-brand-300">
                    Monthly Run
                  </span>
                </div>

                {/* Primary Metric */}
                <div>
                  <span className="text-xs text-brand-300 uppercase tracking-wider font-semibold block">
                    Estimated Gross Monthly Revenue
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-black text-white mt-1 tracking-tight">
                    {formatCurrency(projectedRevenue)}
                  </div>
                  <div className="text-xs text-brand-300/80 mt-1">
                    Based on {customRoas.toFixed(1)}x target blended ROAS
                  </div>
                </div>

                {/* Secondary Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 block font-medium">Net Ad Margin</span>
                    <span className="text-base sm:text-lg font-display font-bold text-emerald-400">
                      +{formatCurrency(grossProfitSpread)}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 block font-medium">New Customers</span>
                    <span className="text-base sm:text-lg font-display font-bold text-white">
                      ~{estimatedOrders.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Annualized Run Rate */}
                <div className="p-3.5 rounded-xl bg-brand-950/60 border border-brand-500/30">
                  <div className="text-xs text-brand-300 font-semibold flex items-center justify-between">
                    <span>Annualized Growth Run-Rate:</span>
                    <span className="text-sm font-bold text-white">{formatCurrency(annualizedRunRate)}/yr</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 relative z-10">
                <a
                  href="#audit-form"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-brand-950 hover:bg-brand-50 text-sm font-bold shadow-lg transition-all"
                >
                  <span>Lock In This Forecast With CFStudio</span>
                  <ArrowRight className="w-4 h-4 text-brand-700" />
                </a>
                <span className="text-[10px] text-slate-400 text-center block mt-2">
                  *Projections derived from CFStudio historical cohort averages across 2024-2026.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
