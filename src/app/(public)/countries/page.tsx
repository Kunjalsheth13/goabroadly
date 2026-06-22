import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import DestinationsSection from "@/components/home/DestinationsSection";

export const metadata: Metadata = {
  title: "Countries",
  description: "Explore study abroad destinations including UK, Canada, Australia, Germany, and more.",
};

export default function CountriesPage() {
  return (
    <>
      <PageHero
        title="Study Destinations"
        subtitle="Discover the best countries for your international education."
        centered
      />
      <DestinationsSection />
    </>
  );
}
