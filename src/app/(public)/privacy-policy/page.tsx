import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GoAbroadly privacy policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" centered />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>Information We Collect</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We collect personal information you provide when filling out forms, including your
              name, email, phone number, and study preferences. This information is used solely to
              provide our consultancy services.
            </p>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>How We Use Your Data</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Your data is used to respond to inquiries, provide counseling services, and improve
              our offerings. We do not sell your personal information to third parties.
            </p>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information.
              For questions, contact us at hello@goabroadly.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
