import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import type { StudyAbroadPageData } from "@/constants/study-abroad-data";
import styles from "./DetailPage.module.css";

type Props = { data: StudyAbroadPageData };

export default function StudyAbroadPageTemplate({ data }: Props) {
  const faqs = data.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={data.heroImage}
          alt={`Study in ${data.country}`}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <FadeIn>
            <span className={styles.eyebrow}>Study Abroad</span>
            <h1 className={styles.heroTitle}>Study in {data.country}</h1>
            <p className={styles.heroSubtitle}>{data.heroSubtitle}</p>
            <Button href="/free-assessment" size="lg">Book Free Consultation</Button>
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
          <FadeIn>
            <h2 className={styles.sectionTitle}>Top Universities</h2>
            <ul className={styles.list}>
              {data.topUniversities.map((u) => (
                <li key={u} className={styles.listItem}>
                  <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                  {u}
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
              <h2 className={styles.sectionTitle}>Tuition Fees</h2>
              <p>{data.tuitionFees}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <FadeIn>
              <h2 className={styles.sectionTitle}>Scholarships</h2>
              <ul className={styles.list}>
                {data.scholarships.map((s) => (
                  <li key={s} className={styles.listItem}>
                    <CheckCircle2 size={18} className={styles.listIcon} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className={styles.prose}>
                <h2 className={styles.sectionTitle}>Student Life</h2>
                <p>{data.studentLife}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.prose}>
              <h2 className={styles.sectionTitle}>Visa Process</h2>
              <p>{data.visaProcess}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection items={faqs} title={`Study in ${data.country} FAQ`} />
      <CTASection />
    </>
  );
}
