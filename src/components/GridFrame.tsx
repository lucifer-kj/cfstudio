"use client";

import React from "react";

export default function GridFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen designer-grid px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-all duration-300">
      {/* Outer Boundary Frame Lines with subtle 1px border and side breathing gutters */}
      <div className="max-w-6xl mx-auto border-x border-slate-200 dark:border-slate-800 relative bg-white/85 dark:bg-[#0B0F1A]/85 shadow-sm">
        
        {/* Subtle Architectural Column Guides (4-zone layout for desktop) */}
        <div className="hidden lg:grid grid-cols-4 absolute inset-0 pointer-events-none -z-0 divide-x divide-slate-200/40 dark:divide-slate-800/40" />

        {/* Corner Crosshairs at Top Corners */}
        <span className="absolute -top-2.5 -left-2 font-mono text-xs text-slate-400 dark:text-slate-600 select-none z-30 pointer-events-none">
          +
        </span>
        <span className="absolute -top-2.5 -right-2 font-mono text-xs text-slate-400 dark:text-slate-600 select-none z-30 pointer-events-none">
          +
        </span>

        {/* Content Container */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Corner Crosshairs at Bottom Corners */}
        <span className="absolute -bottom-2.5 -left-2 font-mono text-xs text-slate-400 dark:text-slate-600 select-none z-30 pointer-events-none">
          +
        </span>
        <span className="absolute -bottom-2.5 -right-2 font-mono text-xs text-slate-400 dark:text-slate-600 select-none z-30 pointer-events-none">
          +
        </span>

      </div>
    </div>
  );
}
