import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Study Abroad",
  description: "Start your study abroad journey with expert guidance from GoAbroadly.",
};

export default function StudyAbroadPage() {
  return (
    <>
      <PageHero
        title="Study Abroad"
        subtitle="Transform your future with a world-class international education."
        centered
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
              Studying abroad opens doors to exceptional academic programs, cultural experiences,
              and global career opportunities. Our counselors help you identify the right country,
              university, and program based on your academic profile, budget, and career goals.
            </p>
            <Button href="/free-assessment" size="lg">Get Free Assessment</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
