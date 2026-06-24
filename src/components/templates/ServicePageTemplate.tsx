import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import type { ServicePageData } from "@/constants/services-data";
import styles from "./DetailPage.module.css";

type Props = { data: ServicePageData };

export default function ServicePageTemplate({ data }: Props) {
  const faqs = data.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <FadeIn>
            <span className={styles.eyebrow}>Our Services</span>
            <h1 className={styles.heroTitle}>{data.title}</h1>
            <p className={styles.heroSubtitle}>{data.heroSubtitle}</p>
            <Button href="/contact" size="lg">Get Started</Button>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.prose}>
              <h2 className={styles.sectionTitle}>Service Overview</h2>
              <p>{data.overview}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Benefits</h2>
            <ul className={styles.list}>
              {data.benefits.map((b) => (
                <li key={b} className={styles.listItem}>
                  <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <div className={styles.steps}>
              {data.process.map((step) => (
                <div key={step.step} className={styles.step}>
                  <span className={styles.stepNum}>{step.step}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Why Choose Us</h2>
            <ul className={styles.list}>
              {data.whyChooseUs.map((w) => (
                <li key={w} className={styles.listItem}>
                  <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <FAQSection items={faqs} title={`${data.title} FAQ`} />
      <CTASection />
    </>
  );
}
