import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/constants/services-data";
import PageHero from "@/components/common/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import CTASection from "@/components/home/CTASection";
import styles from "../listing.module.css";

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
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {servicesData.map((service) => (
              <FadeIn key={service.slug}>
                <Link href={`/services/${service.slug}`} className={styles.card}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.heroSubtitle.slice(0, 120)}...</p>
                  <span className={styles.cardLink}>Learn more</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
