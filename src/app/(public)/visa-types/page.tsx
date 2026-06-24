import type { Metadata } from "next";
import Link from "next/link";
import { visaTypesData } from "@/constants/visa-types-data";
import PageHero from "@/components/common/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import CTASection from "@/components/home/CTASection";
import { siteConfig } from "@/constants/site";
import styles from "../listing.module.css";

export const metadata: Metadata = {
  title: "Visa Types",
  description: "Explore student, work, and immigration visa types with expert GoAbroadly guidance.",
};

export default function VisaTypesPage() {
  const grouped = visaTypesData.reduce<Record<string, typeof visaTypesData>>(
    (acc, visa) => {
      if (!acc[visa.category]) acc[visa.category] = [];
      acc[visa.category].push(visa);
      return acc;
    },
    {}
  );

  return (
    <>
      <PageHero
        title="Visa Types"
        subtitle="Comprehensive visa guidance for study, work, and immigration pathways worldwide."
        centered
      />
      <section className="section">
        <div className="container">
          {Object.entries(grouped).map(([category, visas]) => (
            <FadeIn key={category}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.grid}>
                {visas.map((visa) => (
                  <Link key={visa.slug} href={`/visa-types/${visa.slug}`} className={styles.card}>
                    <h3 className={styles.cardTitle}>{visa.title}</h3>
                    <p className={styles.cardDesc}>{visa.heroSubtitle.slice(0, 120)}...</p>
                    <span className={styles.cardLink}>Learn more</span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
