"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Plane, MapPin } from "lucide-react";
import Button from "@/components/common/Button";
import FadeIn from "@/components/animations/FadeIn";
import { flightDestinations } from "@/constants/content";
import styles from "./FlightSection.module.css";

const AirplaneScene = dynamic(() => import("@/components/three/AirplaneScene"), {
  ssr: false,
  loading: () => <div className={styles.canvas} aria-hidden="true" />,
});

export default function FlightSection() {
  return (
    <section className={styles.section} aria-labelledby="flight-title">
      <div className={styles.skyGradient} aria-hidden="true" />
      <div className={styles.cloudLayer} aria-hidden="true" />

      <div className={styles.canvas} aria-hidden="true">
        <AirplaneScene />
      </div>

      <div className={`container ${styles.content}`}>
        <FadeIn>
          <div className={styles.inner}>
            <span className={styles.eyebrow}>
              <Plane size={16} aria-hidden="true" />
              Exclusive Student Benefit
            </span>
            <h2 id="flight-title" className={styles.title}>
              Free Flight Ticket For Every Approved Student
            </h2>
            <p className={styles.description}>
              When your visa is approved through GoAbroadly, we celebrate your
              achievement with a complimentary economy flight to your study
              destination. Your journey abroad starts with us — literally.
            </p>

            <div className={styles.destinations} aria-label="Flight destinations">
              {flightDestinations.map((dest) => (
                <span key={dest.code} className={styles.destination}>
                  <MapPin size={12} aria-hidden="true" />
                  <strong>{dest.code}</strong>
                  {dest.city}
                </span>
              ))}
            </div>

            <Button href="/free-assessment" size="lg" className={styles.cta}>
              Claim Your Free Flight
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </FadeIn>
      </div>

      <div className={styles.trailGlow} aria-hidden="true" />
    </section>
  );
}
