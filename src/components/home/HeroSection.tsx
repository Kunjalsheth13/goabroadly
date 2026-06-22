"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe2,
  Sparkles,
} from "lucide-react";
import Button from "@/components/common/Button";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import {
  heroStats,
  heroTrustBadges,
  heroVisaCards,
  heroOfferCards,
} from "@/constants/content";
import styles from "./HeroSection.module.css";

const GlobeScene = dynamic(() => import("@/components/three/GlobeScene"), {
  ssr: false,
  loading: () => <div className={styles.canvasWrap} aria-hidden="true" />,
});

export default function HeroSection() {
  const [particleCount, setParticleCount] = useState(160);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setParticleCount(isReduced ? 40 : isMobile ? 60 : 160);
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.badge}>
              <Sparkles size={14} aria-hidden="true" />
              Trusted by 5,000+ International Students
            </span>

            <h1 className={styles.title}>
              Your Gateway to{" "}
              <span className={styles.titleAccent}>Global Education</span>
            </h1>

            <p className={styles.subtitle}>
              Premium study abroad consultancy helping ambitious students secure
              admissions at world-class universities, navigate visas with confidence,
              and launch international careers.
            </p>

            <div className={styles.actions}>
              <Button href="/free-assessment" size="lg" className={styles.primaryBtn}>
                Start Free Assessment
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="light" size="lg">
                Book Consultation
              </Button>
            </div>

            <div className={styles.trustBadges}>
              {heroTrustBadges.map((badge) => (
                <span key={badge} className={styles.trustBadge}>
                  <BadgeCheck size={14} aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>

            <div className={styles.stats} aria-label="Key statistics">
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={styles.visual}>
          <div className={styles.canvasWrap} aria-hidden="true">
            <GlobeScene particleCount={particleCount} />
          </div>

          <div className={styles.floatingCards}>
            {heroVisaCards.map((card, i) => (
              <motion.div
                key={card.label}
                className={styles.visaCard}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className={styles.visaHeader}>
                  <Globe2 size={16} aria-hidden="true" />
                  <span className={styles.visaStatus}>
                    <CheckCircle2 size={12} aria-hidden="true" />
                    {card.status}
                  </span>
                </div>
                <div className={styles.visaLabel}>{card.label}</div>
                <div className={styles.visaCountry}>{card.country}</div>
              </motion.div>
            ))}

            {heroOfferCards.map((offer, i) => (
              <motion.div
                key={offer.university}
                className={styles.offerCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.7 }}
              >
                <span className={styles.offerStatus}>{offer.status}</span>
                <div className={styles.offerUniversity}>{offer.university}</div>
                <div className={styles.offerProgram}>{offer.program}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
