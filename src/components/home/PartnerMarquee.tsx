"use client";

import { Building2 } from "lucide-react";
import { partnerUniversities } from "@/constants/content";
import styles from "./PartnerMarquee.module.css";

export default function PartnerMarquee() {
  const items = [
    ...partnerUniversities,
    ...partnerUniversities,
    ...partnerUniversities,
  ];

  return (
    <section
      className={styles.section}
      aria-label="Partner Universities"
    >
      <div className="container">
        <p className={styles.label}>
          Trusted Partner Universities
        </p>

        <div className={styles.trackWrap}>
          <div className={styles.track}>
            {items.map((uni, index) => (
              <div
                key={`${uni}-${index}`}
                className={styles.item}
              >
                <Building2
                  size={18}
                  className={styles.icon}
                />
                <span>{uni}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}