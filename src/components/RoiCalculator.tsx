"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

interface IndustryPreset {
  name: string;
  defaultAov: number;
  expectedRoas: number;
  description: string;
}

const industryPresets: Record<string, IndustryPreset> = {
  d2c: {
    name: "D2C E-Commerce",
    defaultAov: 2499,
    expectedRoas: 5.2,
    description: "Apparel, Personal Care, Nutrition & Lifestyle",
  },
  luxury: {
    name: "Luxury & Heritage Retail",
    defaultAov: 14500,
    expectedRoas: 6.4,
    description: "Fine Jewellery, Handloom & High-AOV Goods",
  },
  leadgen: {
    name: "B2B SaaS & Tech",
    defaultAov: 35000,
    expectedRoas: 4.6,
    description: "Enterprise Pipeline, High-Ticket Consultancies",
  },
  services: {
    name: "Clinics & Aesthetics",
    defaultAov: 8500,
    expectedRoas: 4.8,
    description: "Aesthetic Healthcare & Premium Practices",
  },
};

export default function RoiCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("d2c");
  const [adSpend, setAdSpend] = useState<number>(300000);
  const [customRoas, setCustomRoas] = useState<number>(5.2);
  const [aov, setAov] = useState<number>(2499);

  const handleIndustryChange = (key: string) => {
    setSelectedIndustry(key);
    const preset = industryPresets[key];
    setAov(preset.defaultAov);
    setCustomRoas(preset.expectedRoas);
  };

  const projectedRevenue = Math.round(adSpend * customRoas);
  const estimatedOrders = aov > 0 ? Math.round(projectedRevenue / aov) : 0;
  const grossProfitSpread = Math.round(projectedRevenue - adSpend);
  const annualizedRunRate = Math.round(projectedRevenue * 12);

  const spendPresets = [
    { label: "₹1 Lakh", value: 100000 },
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
    <section id="calculator" className="hidden lg:block py-16 md:py-24 relative bg-slate-50/50 dark:bg-[#0B0F1A]/50 border-b border-slate-200 dark:border-slate-800">
      {/* Corner crosshairs at section boundary */}
      <span className="hidden sm:block absolute -top-2.5 -left-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>
      <span className="hidden sm:block absolute -top-2.5 -right-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Unit Economics & Modeling
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Model your ad capital returns with CFStudio benchmarks.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Adjust monthly ad capital and average deal size to preview gross revenue and acquisition volume.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
            
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Category Presets */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Business Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(industryPresets).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleIndustryChange(key)}
                      className={`p-3 rounded-lg text-left border text-xs transition-all ${
                        selectedIndustry === key
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900 dark:border-white font-semibold"
                          : "bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      <div className="font-bold">{item.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{item.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Ad Spend */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Monthly Ad Capital Allocation
                  </label>
                  <span className="text-base font-display font-bold text-slate-900 dark:text-white">
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
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-900 dark:accent-white"
                />

                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-slate-400 mr-1">Presets:</span>
                  {spendPresets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setAdSpend(preset.value)}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                        adSpend === preset.value
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders: Target ROAS & AOV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Target Blended ROAS
                    </label>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {customRoas.toFixed(1)}x
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2.0}
                    max={8.0}
                    step={0.1}
                    value={customRoas}
                    onChange={(e) => setCustomRoas(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-900 dark:accent-white"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>2.0x Baseline</span>
                    <span>5.2x Portfolio Avg</span>
                    <span>8.0x Scale</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Average Order Value (AOV)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={aov}
                      onChange={(e) => setAov(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-slate-500"
                    />
                    <span className="absolute right-3 top-2 text-xs text-slate-400 font-medium">INR</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Output Showcase (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-950 text-white flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Projected Output
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {customRoas.toFixed(1)}X MULTIPLE
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                    Estimated Gross Monthly Revenue
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white mt-1 tracking-tight">
                    {formatCurrency(projectedRevenue)}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Net Contribution Spread: <span className="text-emerald-400 font-semibold">+{formatCurrency(grossProfitSpread)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">New Customer Vol.</span>
                    <span className="text-lg font-display font-bold text-white mt-0.5 block">
                      ~{estimatedOrders.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Annualized Run-Rate</span>
                    <span className="text-sm font-display font-bold text-white mt-0.5 block">
                      {formatCurrency(annualizedRunRate)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#audit-form"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-950 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Incorporate Model Into Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </a>
                <span className="text-[10px] text-slate-500 text-center block mt-2">
                  Benchmarks calculated from CFStudio active portfolio cohorts.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
