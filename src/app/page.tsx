import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GrowthEngine from "@/components/GrowthEngine";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import AuditBookingForm from "@/components/AuditBookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F1A] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <GrowthEngine />
      <RoiCalculator />
      <CaseStudies />
      <Testimonials />
      <AuditBookingForm />
      <Footer />
    </main>
  );
}
