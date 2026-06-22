import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how GoAbroadly uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Cookie Policy" centered />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>What Are Cookies</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Cookies are small text files stored on your device when you visit our website.
              They help us improve your experience and analyze site usage.
            </p>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>How We Use Cookies</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We use essential cookies for site functionality and analytics cookies to understand
              how visitors interact with our website. You can control cookie preferences through
              your browser settings.
            </p>
            <h2 style={{ marginBottom: "1rem", color: "var(--color-text-primary)" }}>Managing Cookies</h2>
            <p>
              Most browsers allow you to refuse or delete cookies. Note that disabling cookies
              may affect certain website features.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
