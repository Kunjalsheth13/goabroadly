import { Suspense } from "react";
import HeroSection from "@/components/home/HeroSection";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import StatisticsSection from "@/components/home/StatisticsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import EligibilityChecker from "@/components/home/EligibilityChecker";
import DestinationsSection from "@/components/home/DestinationsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import JourneySection from "@/components/home/JourneySection";
import FlightSection from "@/components/home/FlightSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreview from "@/components/home/BlogPreview";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerMarquee />
      <StatisticsSection />
      <ServicesGrid />
      <EligibilityChecker />
      <DestinationsSection />
      <WhyChooseUs />
      <JourneySection />
      <FlightSection />
      <TestimonialsSection />
      <Suspense fallback={null}>
        <BlogPreview />
      </Suspense>
      <FAQSection />
      <CTASection />
    </>
  );
}
