import type { Metadata } from "next";
import Link from "next/link";
import { countriesData } from "@/constants/countries-data";
import PageHero from "@/components/common/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import CTASection from "@/components/home/CTASection";
import styles from "../listing.module.css";

export const metadata: Metadata = {
  title: "Countries",
  description: "Explore study abroad destinations including UK, Canada, Australia, Germany, and more.",
};

export default function CountriesPage() {
  return (
    <>
      <PageHero
        title="Study Destinations"
        subtitle="Discover the best countries for your international education."
        centered
      />
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {countriesData.map((country) => (
              <FadeIn key={country.slug}>
                <Link href={`/countries/${country.slug}`} className={styles.card}>
                  <h3 className={styles.cardTitle}>{country.name}</h3>
                  <p className={styles.cardDesc}>{country.heroSubtitle}</p>
                  <span className={styles.cardLink}>Explore {country.name}</span>
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
