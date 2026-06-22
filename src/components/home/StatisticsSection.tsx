import { statistics } from "@/constants/content";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./StatisticsSection.module.css";

export default function StatisticsSection() {
  return (
    <section className={styles.section} aria-label="Statistics">
      <div className="container">
        <div className={styles.grid}>
          {statistics.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.value}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
