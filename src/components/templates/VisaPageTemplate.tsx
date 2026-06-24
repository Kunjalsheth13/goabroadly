import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import type { VisaPageData } from "@/constants/visa-types-data";
import styles from "./DetailPage.module.css";

type Props = { data: VisaPageData };

export default function VisaPageTemplate({ data }: Props) {
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
            <span className={styles.eyebrow}>{data.category} Visa</span>
            <h1 className={styles.heroTitle}>{data.title}</h1>
            <p className={styles.heroSubtitle}>{data.heroSubtitle}</p>
            <Button href="/free-assessment" size="lg">Apply Now</Button>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.prose}>
              <p>{data.overview}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <FadeIn>
              <h2 className={styles.sectionTitle}>Eligibility</h2>
              <ul className={styles.list}>
                {data.eligibility.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className={styles.sectionTitle}>Requirements</h2>
              <ul className={styles.list}>
                {data.requirements.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Required Documents</h2>
            <ul className={styles.list}>
              {data.documents.map((doc) => (
                <li key={doc} className={styles.listItem}>
                  <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                  {doc}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Application Process</h2>
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

      <FAQSection items={faqs} title={`${data.title} FAQ`} />
      <CTASection />
    </>
  );
}
