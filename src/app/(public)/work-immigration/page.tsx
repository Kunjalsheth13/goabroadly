import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Work & Immigration",
  description: "Post-study work permits and permanent residency guidance for international students.",
};

export default function WorkImmigrationPage() {
  return (
    <>
      <PageHero
        title="Work & Immigration"
        subtitle="Navigate post-study work permits and permanent residency pathways."
        centered
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
              Many countries offer post-study work visas that allow you to gain international
              work experience after graduation. We guide you through work permit applications,
              employer sponsorship, and pathways to permanent residency.
            </p>
            <Button href="/contact" size="lg">Consult an Expert</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
