"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, TrendingUp, Sparkles, ShieldCheck, Zap, BarChart3, CheckCircle2, Play } from "lucide-react";

export default function Hero() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Profitable Ad Spend Managed", value: "₹14.8Cr+", sub: "Across Meta, Google & TikTok" },
    { label: "Average Client ROAS", value: "4.92x", sub: "Calculated across 85+ active brands" },
    { label: "E-Commerce Revenue Scaled", value: "₹68.5Cr+", sub: "Direct attributable sales" },
    { label: "Client Retainer Retention", value: "94.2%", sub: "Long-term compounding growth" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [metrics.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-background">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/60 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              <span className="text-xs font-semibold text-brand-700 dark:text-brand-300 tracking-wide uppercase">
                Kolkata HQ • Performance Marketing That Works
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Stop Burning Cash on Ads. <br />
              <span className="gradient-text">We Engineer Predictable ROAS.</span>
            </h1>

            {/* Subhead description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              CFStudio pairs high-velocity creative testing, proprietary algorithmic media buying, and obsession with unit economics to turn your ad spend into compounding profit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#audit-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-base font-semibold shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all group"
              >
                <span>Claim Free 30-Min Growth Audit</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-brand-500/50 text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 text-base font-semibold shadow-sm transition-all"
              >
                <TrendingUp className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <span>Calculate Your ROI</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>No Vanity Metrics Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Custom Creative Loops</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>Month-to-Month Transparency</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Growth Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Glow backdrop behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />

            <div className="glass-panel rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden border border-slate-200/90 dark:border-slate-800">
              
              {/* Header of Card */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      CFStudio Growth Engine
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Live Campaign Performance Feed</p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  Active Sprint
                </span>
              </div>

              {/* Key Metric Highlights */}
              <div className="grid grid-cols-2 gap-4 py-5">
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Blended ROAS</span>
                  <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white mt-1 flex items-baseline gap-1.5">
                    5.42x
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center">
                      +41%
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">Previous month: 3.84x</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Attributed Sales</span>
                  <div className="text-2xl sm:text-3xl font-display font-black text-brand-600 dark:text-brand-400 mt-1">
                    ₹34.8L
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">Ad spend: ₹6.42L</span>
                </div>
              </div>

              {/* Live Activity Stream */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Algorithmic Actions (Last 24h)
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                      <span className="font-medium text-slate-800 dark:text-slate-200">Creative #04 Hook A/B Test</span>
                    </div>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Winning (+68% CTR)</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span className="font-medium text-slate-800 dark:text-slate-200">ASC+ Budget Scaling</span>
                    </div>
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Scaled to ₹25k/day</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="font-medium text-slate-800 dark:text-slate-200">Checkout Drop-Off Optimization</span>
                    </div>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">+19% CVR</span>
                  </div>
                </div>
              </div>

              {/* Bottom live ticker */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">CFStudio Brand Board Verified</span>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real-Time Analytics Feed</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Impact Metrics Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {metrics.map((item, idx) => (
              <div
                key={item.label}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  activeMetric === idx
                    ? "bg-brand-50/70 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/60 shadow-sm"
                    : "border border-transparent"
                }`}
              >
                <div className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-brand-600 dark:text-brand-400 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
