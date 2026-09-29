"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "Before CFStudio, our blended ROAS collapsed the moment ad spend scaled past ₹5L/month. CFStudio restructured our entire Meta account architecture and rebuilt our video creative angles. We scaled 4x in spend while keeping our ROAS above 5.0x.",
    author: "Rohan Mukherjee",
    role: "Founder & CEO",
    brand: "Aura Pure Nutrition",
    location: "Kolkata / Pan-India",
    metric: "4.2x Spend Scale",
  },
  {
    quote:
      "Their initial forensic audit pinpointed that our Shopify store suffered a 40%+ drop-off on mobile checkout. Fixing the checkout and deploying their UGC video loop added ₹14 Lakhs in net revenue in month two.",
    author: "Deboshree Sen",
    role: "Managing Director",
    brand: "Bengal Heritage Weaves",
    location: "Park Street, Kolkata",
    metric: "₹38L/mo Revenue",
  },
  {
    quote:
      "Unlike previous agencies that reported on vanity clicks and reach, CFStudio reports directly in contribution margin and actual booked consultations. They operate like internal business partners.",
    author: "Dr. Anirban Roy",
    role: "Co-Founder",
    brand: "Zenith Aesthetic Clinics",
    location: "Salt Lake Sector V, Kolkata",
    metric: "640+ Monthly Bookings",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 relative bg-slate-50/50 dark:bg-[#0B0F1A]/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Partner Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Client perspectives on performance and capital execution.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono font-medium text-slate-500">
                  <span>VERIFIED RECORD</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{item.metric}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  {item.author}
                </div>
                <div className="text-xs text-slate-500">
                  {item.role}, <strong className="text-slate-700 dark:text-slate-300 font-medium">{item.brand}</strong>
                </div>
                <div className="text-[10px] text-slate-400">{item.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Standard Grid */}
        <div className="mt-10 p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-base">100%</div>
            <div className="text-slate-500 mt-0.5">Transparent Ad Accounts</div>
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-base">Zero</div>
            <div className="text-slate-500 mt-0.5">Hidden Retainer Markups</div>
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-base">Weekly</div>
            <div className="text-slate-500 mt-0.5">Executive Review Sprints</div>
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-base">Direct</div>
            <div className="text-slate-500 mt-0.5">Slack & WhatsApp Strategy Pod</div>
          </div>
        </div>

      </div>
    </section>
  );
}
