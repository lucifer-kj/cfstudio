"use client";

import React, { useState, useRef } from "react";

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
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveMobileIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
    }
  };

  const scrollToMobileIndex = (index: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const itemWidth = container.clientWidth * 0.85;
    container.scrollTo({ left: index * itemWidth, behavior: "smooth" });
    setActiveMobileIndex(index);
  };

  return (
    <section id="testimonials" className="py-14 sm:py-16 md:py-24 relative bg-slate-50/50 dark:bg-[#0B0F1A]/50 border-b border-slate-200 dark:border-slate-800">
      
      {/* Corner crosshairs at section boundary */}
      <span className="hidden sm:block absolute -top-2.5 -left-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>
      <span className="hidden sm:block absolute -top-2.5 -right-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
            [04 // REPUTATION]
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Client perspectives on performance and capital execution.
          </h2>
        </div>

        {/* MOBILE SPECIFIC: Fingertip Swipeable Carousel with Interactive Pagination (md:hidden) */}
        <div className="md:hidden mt-6">
          <div 
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-3.5 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory scrollbar-none touch-pan-x"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-[85vw] shrink-0 snap-center bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono font-medium text-slate-500">
                    <span>RECORD #0{index + 1}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{item.metric}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
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

          {/* Accessible Touch Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-2" role="tablist" aria-label="Testimonials pagination">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToMobileIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
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

        {/* DESKTOP SPECIFIC: Clean 3-Col Grid (hidden md:grid) - 100% UNTOUCHED */}
        <div className="mt-8 hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono font-medium text-slate-500">
                  <span>RECORD #0{index + 1}</span>
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
        <div className="mt-8 p-4 sm:p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
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
