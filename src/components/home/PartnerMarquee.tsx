import { Building2 } from "lucide-react";
import { partnerUniversities } from "@/constants/content";
import styles from "./PartnerMarquee.module.css";

export default function PartnerMarquee() {
  const items = [...partnerUniversities, ...partnerUniversities];

  return (
    <section className={styles.section} aria-label="Partner universities">
      <p className={styles.label}>Trusted Partner Universities</p>
      <div className={styles.trackWrap}>
        <div className={styles.track} role="list">
          {items.map((uni, i) => (
            <div key={`${uni}-${i}`} className={styles.item} role="listitem">
              <Building2 size={18} className={styles.icon} aria-hidden="true" />
              {uni}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
