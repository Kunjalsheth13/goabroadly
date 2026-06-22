import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about GoAbroadly — your trusted study abroad consultancy with 15+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About GoAbroadly"
        subtitle="Empowering students to achieve their global education dreams since 2010."
        centered
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <FadeIn>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
              GoAbroadly is a leading study abroad consultancy dedicated to helping students
              navigate the complex journey of international education. With over 15 years of
              experience and partnerships with 200+ universities worldwide, we provide end-to-end
              support from university selection to visa approval.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
              Our team of certified counselors brings deep expertise in admissions, scholarships,
              and immigration pathways. We believe every student deserves access to world-class
              education, and we work tirelessly to make that dream a reality.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
