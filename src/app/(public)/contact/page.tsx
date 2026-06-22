import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GoAbroadly for study abroad counseling and visa assistance.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you."
        centered
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
