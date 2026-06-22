"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/constants/content";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./WhyChooseUs.module.css";

const iconMap: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
};

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className={styles.bgAccent} aria-hidden="true" />
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <span className="sectionEyebrow">Our Advantage</span>
            <h2 id="why-title" className="sectionTitle">
              Why Choose GoAbroadly
            </h2>
            <p className="sectionSubtitle">
              We combine deep expertise, transparent processes, and personalized
              care to deliver exceptional outcomes.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;

            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <motion.article
                  className={styles.card}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.iconWrap}>
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
