"use client";

import { Plane } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import freeFlightBg from "@/assets/images/freeflightbg.png";
import freeFlightMobileBg from "@/assets/images/freeflightmobilebg.png";
import styles from "./FlightSection.module.css";

export default function FlightSection() {
  return (
    <section className={styles.section} aria-labelledby="flight-title">
      <FadeIn>
        <div className={styles.fullWidth}>
          <div
            className={`${styles.card} ${styles.cardDesktop}`}
            style={{ backgroundImage: `url(${freeFlightBg.src})` }}
          >
            <div className={styles.content}>
              <div className={styles.left}>
                <span className={styles.badge}>
                  <Plane size={14} />
                  Exclusive Benefit
                </span>
                <h2 id="flight-title" className={styles.title}>
                  Every Student
                  <br />
                  We Place Gets a
                  <br />
                  <span>Free Flight Ticket!</span>
                </h2>
                <p className={styles.description}>
                  Your dream destination is now closer than ever.
                  <br />
                  We not only help you reach your goals,
                  <br />
                  we take you there.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile card with separate background */}
          <div
            className={`${styles.card} ${styles.cardMobile}`}
            style={{ backgroundImage: `url(${freeFlightMobileBg.src})` }}
          >
            <div className={styles.contentMobile}>
              <span className={styles.badge}>
                <Plane size={14} />
                Exclusive Benefit
              </span>
              <h2 className={styles.title}>
                Every Student
                <br />
                We Place Gets a
                <br />
                <span>Free Flight Ticket!</span>
              </h2>
              <p className={styles.description}>
                Your dream destination is now closer than ever.
                We not only help you reach your goals,
                we take you there.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}