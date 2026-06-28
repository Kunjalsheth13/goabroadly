"use client";

import {
  Plane,
  Ticket,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";

import freeFlightBg from "@/assets/images/freeflightbg.png";

import styles from "./FlightSection.module.css";

const benefits = [
  {
    icon: Ticket,
    title: "100% Free Flight Ticket",
    desc: "No hidden charges. Absolutely free for every student we place.",
  },
  {
    icon: Briefcase,
    title: "All Major Destinations",
    desc: "Fly to your dream country with top airlines & best routes.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Travel",
    desc: "We ensure a smooth, safe and comfortable journey for you.",
  },
];

export default function FlightSection() {
  return (
    <section className={styles.section} aria-labelledby="flight-title">
      <FadeIn>
        <div className={styles.fullWidth}>
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(${freeFlightBg.src})`,
            }}
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

                {/* <div className={styles.features}>
                  {benefits.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className={styles.feature}>
                        <div className={styles.iconWrapper}>
                          <Icon size={20} />
                        </div>

                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}