"use client";

import Image from "next/image";
import styles from "./PartnerMarquee.module.css";

const universities = [
  {
    name: "Middlesex University",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&q=80&auto=format&fit=crop",
  },
  {
    name: "Sheffield Hallam",
    logo: "https://images.unsplash.com/photo-1541339907193-e15606d4aab4?w=120&h=60&q=80&auto=format&fit=crop",
  },
  {
    name: "Coventry University",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&h=60&q=80&auto=format&fit=crop",
  },
  {
    name: "University of Greenwich",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=120&h=60&q=80&auto=format&fit=crop",
  },
  {
    name: "De Montfort University",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=120&h=60&q=80&auto=format&fit=crop",
  },
  {
    name: "Anglia Ruskin University",
    logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=120&h=60&q=80&auto=format&fit=crop",
  },
  {
    name: "University of East London",
    logo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=120&h=60&q=80&auto=format&fit=crop",
  },
  {
    name: "Ulster University",
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0f?w=120&h=60&q=80&auto=format&fit=crop",
  },
] as const;

export default function PartnerMarquee() {
  const items = [...universities, ...universities, ...universities];

  return (
    <section className={styles.section} aria-label="Partner Universities">
      <div className="container">
        <p className={styles.label}>Trusted Partner Universities</p>
      </div>
      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {items.map((uni, index) => (
            <div key={`${uni.name}-${index}`} className={styles.item}>
              <div className={styles.logoWrap}>
                <Image
                  src={uni.logo}
                  alt={uni.name}
                  width={80}
                  height={40}
                  className={styles.logo}
                  loading="lazy"
                />
              </div>
              <span className={styles.name}>{uni.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
