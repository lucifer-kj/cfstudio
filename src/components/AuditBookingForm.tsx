"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, MessageSquare, Check, ShieldCheck, Clock } from "lucide-react";

export default function AuditBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brandName: "",
    websiteUrl: "",
    adSpend: "₹1.5 Lakhs - ₹5 Lakhs / month",
    goal: "Scale current ROAS without CAC spiking",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#0B0F1A", "#64748B", "#6366F1"],
      });
    }, 600);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi CFStudio Team, I would like to schedule a growth diagnostic for our brand.\n\n` +
      `Name: ${formData.name || "Founder"}\n` +
      `Brand: ${formData.brandName || "My Brand"}\n` +
      `Website: ${formData.websiteUrl || "N/A"}\n` +
      `Monthly Spend: ${formData.adSpend}\n` +
      `Focus: ${formData.goal}`
    );
    return `https://wa.me/919830000000?text=${text}`;
  };

  return (
    <section id="audit-form" className="py-14 sm:py-16 md:py-24 relative bg-white dark:bg-[#0B0F1A]">
      {/* Corner crosshairs at section boundary */}
      <span className="hidden sm:block absolute -top-2.5 -left-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>
      <span className="hidden sm:block absolute -top-2.5 -right-2 font-mono text-xs text-slate-400 select-none pointer-events-none">+</span>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="space-y-2 mb-8 text-center sm:text-left">
            <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
              [05 // DIAGNOSTIC SESSION]
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Request a 30-minute growth & unit economics diagnostic.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our lead growth team will review your ad accounts, pixel health, and landing page metrics to identify where you are leaking margin and where you can scale.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            
            {submitted ? (
              /* Success Screen */
              <div className="text-center py-8 px-2 space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                    Diagnostic Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    We have received details for <strong className="text-slate-900 dark:text-white">{formData.brandName || "your brand"}</strong>. Our team in Kolkata will review your funnel and deliver your teardown within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-[0.98] transition-all min-h-[48px]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline p-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="audit-name" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Full Name *
                    </label>
                    <input
                      id="audit-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Sayan Mukherjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 min-h-[48px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="audit-email" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Work Email *
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      inputMode="email"
                      required
                      autoComplete="email"
                      placeholder="e.g. sayan@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Row 2: WhatsApp Number & Brand Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="audit-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="audit-phone"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98300 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 min-h-[48px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="audit-brand" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Brand / Business Name *
                    </label>
                    <input
                      id="audit-brand"
                      type="text"
                      required
                      placeholder="e.g. Bengal Heritage Organics"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Row 3: Website URL & Monthly Ad Spend */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="audit-url" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Website / Online Store URL
                    </label>
                    <input
                      id="audit-url"
                      type="url"
                      inputMode="url"
                      placeholder="https://yourbrand.in"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 min-h-[48px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="audit-spend" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Current Monthly Ad Spend
                    </label>
                    <select
                      id="audit-spend"
                      value={formData.adSpend}
                      onChange={(e) => setFormData({ ...formData, adSpend: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-500 min-h-[48px]"
                    >
                      <option>Under ₹1 Lakh / month</option>
                      <option>₹1.5 Lakhs - ₹5 Lakhs / month</option>
                      <option>₹5 Lakhs - ₹15 Lakhs / month</option>
                      <option>₹15 Lakhs+ / month</option>
                      <option>Not actively running paid ads yet</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Primary Goal */}
                <div className="space-y-1.5">
                  <label htmlFor="audit-goal" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Primary Scaling Objective
                  </label>
                  <select
                    id="audit-goal"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-500 min-h-[48px]"
                  >
                    <option>Scale current ROAS without CAC spiking</option>
                    <option>Eliminate creative fatigue with high-hook direct response UGC</option>
                    <option>Optimize Shopify landing page & checkout conversions</option>
                    <option>Build full-funnel Meta & Google Ads architecture from scratch</option>
                    <option>Dominate local Kolkata or Pan-India high-ticket lead generation</option>
                  </select>
                </div>

                {/* Submit & WhatsApp buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-70 shadow-sm min-h-[48px] active:scale-[0.98]"
                  >
                    {loading ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Diagnostic Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-850 hover:bg-slate-50 text-xs font-semibold transition-all min-h-[48px] active:scale-[0.98]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Strict NDA Confidentiality</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24-Hour Diagnostic Teardown</span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
