import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GrowthEngine from "@/components/GrowthEngine";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import AuditBookingForm from "@/components/AuditBookingForm";
import Footer from "@/components/Footer";
import GridFrame from "@/components/GridFrame";
import MobileActionDock from "@/components/MobileActionDock";

export default function Home() {
  return (
    <GridFrame>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <Hero />
        <Services />
        <GrowthEngine />
        <RoiCalculator />
        <CaseStudies />
        <Testimonials />
        <AuditBookingForm />
      </main>
      <Footer />
      <MobileActionDock />
    </GridFrame>
  );
}
