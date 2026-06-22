"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageCircle,
  ClipboardCheck,
  Building2,
  FileCheck,
  FileText,
  BadgeCheck,
  Stamp,
  Plane,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { journeySteps } from "@/constants/content";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./JourneySection.module.css";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardCheck,
  Building2,
  FileCheck,
  FileText,
  BadgeCheck,
  Stamp,
  Plane,
  MapPin,
};

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section className={styles.section} aria-labelledby="journey-title" ref={containerRef}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <span className="sectionEyebrow">Your Path Abroad</span>
            <h2 id="journey-title" className="sectionTitle">
              The Student Journey
            </h2>
            <p className="sectionSubtitle">
              Nine guided steps from your first consultation to thriving on campus
              abroad — with expert support at every milestone.
            </p>
          </div>
        </FadeIn>

        {!isMobile && (
          <div className={styles.progressTrack} aria-hidden="true">
            <div className={styles.progressLine} />
            <motion.div className={styles.progressFill} style={{ width: progressWidth }} />
          </div>
        )}

        <div
          className={`${styles.timeline} ${isMobile ? styles.timelineVertical : styles.timelineHorizontal}`}
          role="list"
        >
          {journeySteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? MessageCircle;
            const isActive = step.step <= activeStep;

            return (
              <FadeIn key={step.step} delay={i * 0.06}>
                <motion.button
                  type="button"
                  className={`${styles.step} ${isActive ? styles.stepActive : ""}`}
                  role="listitem"
                  onClick={() => setActiveStep(step.step)}
                  onMouseEnter={() => setActiveStep(step.step)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  aria-current={step.step === activeStep ? "step" : undefined}
                  aria-label={`Step ${step.step}: ${step.title}`}
                >
                  <div className={styles.stepConnector} aria-hidden="true" />
                  <div className={styles.stepIcon}>
                    <Icon size={20} aria-hidden="true" />
                    <span className={styles.stepNumber}>{step.step}</span>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </motion.button>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
