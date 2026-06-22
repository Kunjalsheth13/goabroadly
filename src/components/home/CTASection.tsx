"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/common/Button";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.bgOrb} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />

      <div className="container">
        <FadeIn>
          <div className={styles.card}>
            <span className={styles.eyebrow}>
              <Sparkles size={16} aria-hidden="true" />
              Begin Your Journey
            </span>
            <h2 id="cta-title" className={styles.title}>
              Ready to Start Your Global Education Journey?
            </h2>
            <p className={styles.description}>
              Take the first step toward your dream university. Get a free
              profile assessment and personalized roadmap from our expert
              counselors today.
            </p>
            <div className={styles.actions}>
              <Button href="/free-assessment" size="lg" className={styles.primaryBtn}>
                Get Free Assessment
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="light" size="lg">
                Speak to a Counselor
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
