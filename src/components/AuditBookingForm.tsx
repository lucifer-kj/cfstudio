"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Send, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  ArrowRight,
  PhoneCall
} from "lucide-react";

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

    // Simulate audit generation & submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#818CF8", "#10B981"],
      });
    }, 800);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi CFStudio Team, I would like to schedule a Growth Audit for my brand.\n\n` +
      `*Name:* ${formData.name || "Founder"}\n` +
      `*Brand:* ${formData.brandName || "My Brand"}\n` +
      `*Website:* ${formData.websiteUrl || "N/A"}\n` +
      `*Monthly Spend:* ${formData.adSpend}\n` +
      `*Primary Focus:* ${formData.goal}`
    );
    return `https://wa.me/919830000000?text=${text}`;
  };

  return (
    <section id="audit-form" className="py-20 md:py-28 relative bg-white dark:bg-[#0B0F1A] border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              100% Free • No Pitch Slap • Zero Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get Your Custom <span className="gradient-text">30-Min Growth Forensic Audit</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our growth strategists will inspect your ad accounts, pixel health, and landing page funnels to pinpoint where you’re losing margin and how to 3x your ROAS.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-50 dark:bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            {submitted ? (
              /* Success Screen */
              <div className="text-center py-12 px-4 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-800 shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                    Audit Application Confirmed!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formData.name || "there"}</strong>! Our Kolkata strategy desk has received your details for <strong className="text-brand-600 dark:text-brand-400">{formData.brandName || "your brand"}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 max-w-md mx-auto text-xs text-slate-600 dark:text-slate-300 space-y-2 text-left">
                  <div className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">What Happens Next:</div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 font-bold flex items-center justify-center text-[11px]">1</span>
                    <span>We perform initial funnel teardown within 4 to 12 hours.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 font-bold flex items-center justify-center text-[11px]">2</span>
                    <span>We send you a private Loom breakdown & calendar invite.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat With Strategist on WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
                  >
                    Submit another response
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sayan Mukherjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sayan@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: WhatsApp Number & Brand Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98300 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                      Brand / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bengal Heritage Organics"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Website URL & Monthly Ad Spend */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                      Website / Instagram Store URL
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. https://yourbrand.in"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                      Current Monthly Ad Spend
                    </label>
                    <select
                      value={formData.adSpend}
                      onChange={(e) => setFormData({ ...formData, adSpend: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    >
                      <option>Under ₹1 Lakh / month</option>
                      <option>₹1.5 Lakhs - ₹5 Lakhs / month</option>
                      <option>₹5 Lakhs - ₹15 Lakhs / month</option>
                      <option>₹15 Lakhs - ₹50 Lakhs+ / month</option>
                      <option>Not actively spending on ads yet</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Primary Goal */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                    What is your #1 growth bottleneck right now?
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  >
                    <option>Scale current ROAS without CAC spiking</option>
                    <option>Stop ad fatigue with fresh viral UGC creatives</option>
                    <option>Fix checkout funnel drop-offs and improve conversion rate</option>
                    <option>Build high-volume Meta Ads & Google PMax architecture from scratch</option>
                    <option>Dominating Local Kolkata / Pan-India High-Ticket Leads</option>
                  </select>
                </div>

                {/* Submit & WhatsApp buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-base shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Analyzing Brand Inputs...</span>
                    ) : (
                      <>
                        <span>Submit Free Audit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 hover:bg-emerald-100/60 text-sm font-semibold transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

                {/* Privacy & Guarantee note */}
                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Strict NDA & Data Confidentiality</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-brand-500" />
                    <span>Turnaround under 24 Hours</span>
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
