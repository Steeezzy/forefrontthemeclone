import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import FounderNote from "@/components/sections/founder-note";
import Benefits from "@/components/sections/benefits";
import Services from "@/components/sections/services";
import FeaturesGrid from "@/components/sections/features-grid";
import ProcessSteps from "@/components/sections/process-steps";
import SuccessStories from "@/components/sections/success-stories";
import Integrations from "@/components/sections/integrations";
import TestimonialSection from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";
import FAQSection from "@/components/sections/faq";
import ComparisonSection from "@/components/sections/comparison";
import TeamSection from "@/components/sections/team";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <Navbar />
      <HeroSection />
      <FounderNote />
      <Benefits />
      <Services />
      <FeaturesGrid />
      <ProcessSteps />
      <SuccessStories />
      <Integrations />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <ComparisonSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
