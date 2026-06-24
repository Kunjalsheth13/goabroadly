"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BadgeCheck } from "lucide-react";
import Button from "@/components/common/Button";
import BubbleGlobe from "./BubbleGlobe";
import FlowingBanner from "./FlowingBanner";
import styles from "./HeroSection.module.css";

const leftCards = [
  { label: "UK Student Visa", status: "Approved", flag: "gb" },
  { label: "Sheffield Hallam", sub: "Offer Letter", status: "Confirmed", flag: "gb" },
  { label: "Consultation Fee", status: "0", isFee: true },
];

const rightCards = [
  { label: "98%", sub: "VISA SUCCESS", isStat: true },
  { label: "Middlesex University", sub: "Offer Letter", status: "Confirmed", flag: "gb" },
  { label: "Sheffield Hallam", sub: "MSc Marketing", status: "Approved", flag: "gb" },
];

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.bgGradient} aria-hidden="true" />

        <div className={`container ${styles.inner}`}>
          {/* Left floating cards */}
          <div className={styles.leftCards} aria-hidden="true">
            {leftCards.map((card, i) => (
              <motion.div
                key={card.label}
                className={`${styles.floatCard} ${card.isFee ? styles.feeCard : ""}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              >
                {card.isFee ? (
                  <>
                    <span className={styles.feeAmount}>0</span>
                    <span className={styles.feeLabel}>CONSULTANCY FEE</span>
                  </>
                ) : (
                  <>
                    <div className={styles.cardHeader}>
                      {card.flag && (
                        <img
                          src={`https://flagcdn.com/w40/${card.flag}.png`}
                          alt=""
                          width={20}
                          height={15}
                          className={styles.flag}
                          loading="lazy"
                        />
                      )}
                      <span className={styles.cardLabel}>{card.label}</span>
                    </div>
                    {card.sub && <span className={styles.cardSub}>{card.sub}</span>}
                    {card.status && (
                      <span className={`${styles.badge} ${card.status === "Approved" ? styles.badgeGreen : styles.badgeTeal}`}>
                        <CheckCircle2 size={12} aria-hidden="true" />
                        {card.status}
                      </span>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Center content */}
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={styles.eyebrow}>
                <BadgeCheck size={14} aria-hidden="true" />
                No. 1 UK Visa Consultancy
              </span>

              <h1 className={styles.title}>
                Your future
                <br />
                is abroad.
              </h1>

              <p className={styles.subtitle}>
                Expert visa guidance, zero consultancy fees, and advice that actually
                gets you there. Specialising in UK study visas from Ahmedabad.
              </p>

              <div className={styles.actions}>
                <Button href="/contact" size="lg">Book Free Consultation</Button>
                <Button href="/visa-types/student-visa" variant="outline" size="lg">
                  Visa Guide
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right floating cards + globe */}
          <div className={styles.rightArea}>
            <BubbleGlobe />
            <div className={styles.rightCards} aria-hidden="true">
              {rightCards.map((card, i) => (
                <motion.div
                  key={card.label + i}
                  className={`${styles.floatCard} ${card.isStat ? styles.statCard : ""}`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                >
                  {card.isStat ? (
                    <>
                      <span className={styles.statValue}>{card.label}</span>
                      <span className={styles.statLabel}>{card.sub}</span>
                    </>
                  ) : (
                    <>
                      <div className={styles.cardHeader}>
                        {card.flag && (
                          <img
                            src={`https://flagcdn.com/w40/${card.flag}.png`}
                            alt=""
                            width={20}
                            height={15}
                            className={styles.flag}
                            loading="lazy"
                          />
                        )}
                        <span className={styles.cardLabel}>{card.label}</span>
                      </div>
                      {card.sub && <span className={styles.cardSub}>{card.sub}</span>}
                      {card.status && (
                        <span className={`${styles.badge} ${card.status === "Approved" ? styles.badgeGreen : styles.badgeTeal}`}>
                          <CheckCircle2 size={12} aria-hidden="true" />
                          {card.status}
                        </span>
                      )}
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className={styles.statsBar}>
          <div className={`container ${styles.statsInner}`}>
            <span>98% Visa Success Rate</span>
            <span className={styles.statsDot} aria-hidden="true" />
            <span>35+ Partner Universities</span>
            <span className={styles.statsDot} aria-hidden="true" />
            <span>0 Consultancy Fees</span>
          </div>
        </div>
      </section>

      <FlowingBanner />
    </>
  );
}
