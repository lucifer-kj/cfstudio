"use client";

import React from "react";
import { Star, Quote, CheckCircle, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before CFStudio, we tried three different agencies across Delhi and Mumbai. None of them understood unit economics or why our ROAS plummeted past ₹5L/month spend. CFStudio rebuilt our creative hooks from scratch and unlocked a stable 5.2x ROAS even while scaling spend 4x.",
    author: "Rohan Mukherjee",
    role: "Founder & CEO",
    brand: "Aura Pure Nutrition",
    location: "Kolkata / Pan-India",
    rating: 5,
    metric: "4.2x Spend Scale",
  },
  {
    quote:
      "Their deep forensic audit on Day 1 was an eye-opener. They discovered our checkout had a 42% drop-off on mobile UPI payments! Fixing that and launching their UGC video matrix immediately added ₹14 Lakhs to our bottom line in month two.",
    author: "Deboshree Sen",
    role: "Managing Director",
    brand: "Bengal Heritage Weaves",
    location: "Park Street, Kolkata",
    rating: 5,
    metric: "₹38L/mo Revenue",
  },
  {
    quote:
      "We get bombarded by marketing agencies daily. What made CFStudio stand out was zero bullshit. No vanity impressions or reach graphs. They report in contribution margin and actual booked consultations.",
    author: "Dr. Anirban Roy",
    role: "Co-Founder",
    brand: "Zenith Aesthetic Clinics",
    location: "Salt Lake Sector V, Kolkata",
    rating: 5,
    metric: "640+ Monthly Bookings",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0B0F1A]/50 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
            Verified Partner Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Founders Say About Working With <span className="gradient-text">CFStudio</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real feedback from brand founders, marketing directors, and retail leaders we scale every single day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between relative group hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Top Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {item.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-brand-200 dark:text-brand-900/60" />

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-display font-bold flex items-center justify-center text-sm border border-brand-200 dark:border-brand-800">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    {item.author}
                    <CheckCircle className="w-3.5 h-3.5 text-brand-500 fill-brand-100 dark:fill-brand-950" />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role}, <strong className="text-slate-700 dark:text-slate-300">{item.brand}</strong>
                  </div>
                  <div className="text-[10px] text-slate-400">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="space-y-0.5">
            <div className="text-xl font-display font-black text-slate-900 dark:text-white">100%</div>
            <div className="text-xs text-slate-500">Transparent Ad Accounts</div>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
          <div className="space-y-0.5">
            <div className="text-xl font-display font-black text-slate-900 dark:text-white">Zero</div>
            <div className="text-xs text-slate-500">Hidden Retainer Markups</div>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
          <div className="space-y-0.5">
            <div className="text-xl font-display font-black text-slate-900 dark:text-white">Weekly</div>
            <div className="text-xs text-slate-500">Executive Sprint Calls</div>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
          <div className="space-y-0.5">
            <div className="text-xl font-display font-black text-slate-900 dark:text-white">24/7</div>
            <div className="text-xs text-slate-500">Dedicated Slack & WhatsApp Ops</div>
          </div>
        </div>

      </div>
    </section>
  );
}
