"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Globe,
  Headphones,
  HandCoins,
  FileCheck,
  Star,
  Plane,
  MapPin,
  type LucideIcon,
} from "lucide-react";

import whyChooseBg from "@/assets/images/whychoosebg.png";
import { whyChooseUs } from "@/constants/content";
import FadeIn from "@/components/animations/FadeIn";

import styles from "./WhyChooseUs.module.css";

const iconMap: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  Globe,
  Headphones,
  HandCoins,
  FileCheck,
};

const iconColors = [
  styles.blue,
  styles.red,
  styles.red,
  styles.purple,
  styles.orange,
  styles.blue,
];

const lineColors = [
  styles.lineBlue,
  styles.lineRed,
  styles.lineRed,
  styles.linePurple,
  styles.lineOrange,
  styles.lineBlue,
];

export default function WhyChooseUs() {
  return (
    <section
      className={styles.section}
      aria-labelledby="why-title"
      style={{
        backgroundImage: `url(${whyChooseBg.src})`,
      }}
    >
      <div className="container">
        <FadeIn>
          <div className={styles.header}>
            <div className={styles.badge}>
              <Star size={14} fill="currentColor" />
              <span>Why Choose GoAbroadly</span>
            </div>

            <h2 id="why-title" className={styles.title}>
              Our Advantages, <span>Your Success</span>
            </h2>

            <p className={styles.subtitle}>
              We go beyond expectations to make your study abroad journey
              smooth, successful, and stress-free.
            </p>

            <div className={styles.line} />
          </div>
        </FadeIn>

        <Plane className={styles.leftPlane} />
        <MapPin className={styles.leftPin} />

        <Plane className={styles.rightPlane} />
        <MapPin className={styles.rightPin} />

        <div className={styles.grid}>
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];

            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <motion.article
                  className={styles.card}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`${styles.iconWrap} ${iconColors[i]}`}>
                    <Icon size={34} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
<span
  className={`${styles.cardLine} ${lineColors[i]}`}
/>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}