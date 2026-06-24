import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import type { CountryPageData } from "@/constants/countries-data";
import styles from "./DetailPage.module.css";

type Props = { data: CountryPageData };

export default function CountryPageTemplate({ data }: Props) {
  const faqs = data.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={data.heroImage}
          alt={`Study in ${data.name}`}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <FadeIn>
            <span className={styles.eyebrow}>Study Destination</span>
            <h1 className={styles.heroTitle}>{data.name}</h1>
            <p className={styles.heroSubtitle}>{data.heroSubtitle}</p>
            <Button href="/free-assessment" size="lg">Book Free Consultation</Button>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.prose}>
              <h2 className={styles.sectionTitle}>Country Overview</h2>
              <p>{data.overview}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Why Study Here</h2>
            <ul className={styles.list}>
              {data.whyStudy.map((item) => (
                <li key={item} className={styles.listItem}>
                  <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.prose}>
              <h2 className={styles.sectionTitle}>Visa Information</h2>
              <p>{data.visaInfo}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <FadeIn>
              <h2 className={styles.sectionTitle}>Universities</h2>
              <ul className={styles.list}>
                {data.universities.map((u) => (
                  <li key={u} className={styles.listItem}>
                    <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                    {u}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className={styles.sectionTitle}>Career Opportunities</h2>
              <ul className={styles.list}>
                {data.careers.map((c) => (
                  <li key={c} className={styles.listItem}>
                    <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} title={`${data.name} FAQ`} />
      <CTASection />
    </>
  );
}
