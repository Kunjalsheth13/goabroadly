import type { Metadata } from "next";
import Link from "next/link";
import { studyAbroadData } from "@/constants/study-abroad-data";
import PageHero from "@/components/common/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import CTASection from "@/components/home/CTASection";
import styles from "../listing.module.css";

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
        <div className="container">
          <div className={styles.grid}>
            {studyAbroadData.map((dest) => (
              <FadeIn key={dest.slug}>
                <Link href={`/study-abroad/${dest.slug}`} className={styles.card}>
                  <h3 className={styles.cardTitle}>Study in {dest.country}</h3>
                  <p className={styles.cardDesc}>{dest.heroSubtitle.slice(0, 120)}...</p>
                  <span className={styles.cardLink}>Explore guide</span>
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
