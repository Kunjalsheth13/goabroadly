import { processSteps } from "@/constants/content";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./ProcessTimeline.module.css";

export default function ProcessTimeline() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <FadeIn>
          <h2 id="process-title" className="sectionTitle" style={{ textAlign: "center" }}>Our Process</h2>
          <p className="sectionSubtitle" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
            A simple, proven 5-step journey to your dream university.
          </p>
        </FadeIn>
        <div className={styles.timeline} role="list">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <div className={styles.step} role="listitem">
                <div className={styles.number} aria-label={`Step ${step.step}`}>{step.step}</div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
