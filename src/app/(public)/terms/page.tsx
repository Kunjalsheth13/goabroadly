import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using GoAbroadly study abroad consultancy services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" centered />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>Acceptance of Terms</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              By using GoAbroadly services, you agree to these terms and conditions. Our services
              are provided on a best-effort basis and do not guarantee university admission or visa approval.
            </p>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>Service Scope</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We provide counseling, application assistance, and documentation support. Final decisions
              regarding admissions and visas rest with universities and immigration authorities.
            </p>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>Fees & Refunds</h2>
            <p>
              Service fees are communicated upfront. Refund policies vary by service package and
              are outlined in individual service agreements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
