"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function MobileActionDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past the first 250px
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside 
      aria-label="Quick mobile actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-4 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        
        {/* Instant WhatsApp Quick Button */}
        <a
          href="https://wa.me/919830000000?text=Hi%20CFStudio%2C%20I'd%20like%20to%20discuss%20our%20brand%20marketing%20strategy."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider active:scale-[0.97] transition-all min-h-[44px]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="truncate">WhatsApp Strategy</span>
        </a>

        {/* Primary Audit Trigger Button */}
        <a
          href="#audit-form"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider active:scale-[0.97] transition-all min-h-[44px] shadow-sm"
        >
          <span className="truncate">Book Audit</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </a>

      </div>
    </aside>
  );
}
