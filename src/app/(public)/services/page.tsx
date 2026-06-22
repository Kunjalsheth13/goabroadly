import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ServicesGrid from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive study abroad services including counseling, visa assistance, and scholarship guidance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Everything you need for a successful study abroad journey."
        centered
      />
      <ServicesGrid />
    </>
  );
}
