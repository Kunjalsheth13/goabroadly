import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ConsultationForm from "@/components/forms/ConsultationForm";
import EligibilityChecker from "@/components/home/EligibilityChecker";

export const metadata: Metadata = {
  title: "Free Assessment",
  description: "Get a free study abroad assessment and personalized roadmap from GoAbroadly experts.",
};

export default function FreeAssessmentPage() {
  return (
    <>
      <PageHero
        title="Free Assessment"
        subtitle="Discover your study abroad options with a personalized evaluation."
        centered
      />
      <EligibilityChecker />
      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 className="sectionTitle" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Book a Free Consultation
          </h2>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
