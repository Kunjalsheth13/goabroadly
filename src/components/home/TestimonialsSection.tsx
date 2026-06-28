"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Quote,
  GraduationCap,
  BadgeCheck,
  Smile,
  FileText,
} from "lucide-react";

import sectionBg from "@/assets/images/studydestinationbg.png";
import cardBg from "@/assets/images/testinomialcardbg.png";

import styles from "./TestimonialsSection.module.css";

type TestimonialItem = {
  id?: string;
  name: string;
  country: string;
  university?: string;
  program?: string;
  testimonial?: string;
  quote?: string;
  image: string;
};

export default function TestimonialsSection() {
  const [items, setItems] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (items.length <= 3) return;

    const timer = setInterval(() => {
      setItems((prev) => [...prev.slice(1), prev[0]]);
    }, 4000);

    return () => clearInterval(timer);
  }, [items]);

  return (
    <section className={styles.section}>
     <div className={styles.bgWrapper}>
  <Image
    src={sectionBg}
    alt=""
    priority
    className={styles.sectionBg}
  />
</div>

      <div className="container">
        <div className={styles.heading}>
          <div className={styles.badge}>
            <Quote size={16} fill="currentColor" />
            Student Success Stories
          </div>

          <h2>
            What Our <span>Students</span> Say
          </h2>

          <p>
            Real stories from real students who turned their study abroad dreams
            into reality with <strong>GoAbroadly.</strong>
          </p>

          <div className={styles.line} />
        </div>

        <div className={styles.cards}>
          {items.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              layout
              className={styles.card}
            >
              <Image
                src={cardBg}
                alt=""
                fill
                className={styles.cardBg}
              />

              {/* <div className={styles.stars}>★★★★★</div> */}

              {/* <Quote className={styles.quoteIcon} /> */}

              <p className={styles.text}>
                {item.testimonial || item.quote}
              </p>

              <div className={styles.user}>
                <div className={styles.avatar}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                  />
                </div>

                <div>
                  <h4>{item.name}</h4>

                  {item.program && (
                    <span>{item.program}</span>
                  )}

                  {item.university && (
                    <p>{item.university}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.dots}>
          {items.map((_, i) => (
            <span
              key={i}
              className={i === 0 ? styles.activeDot : ""}
            />
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <GraduationCap />
            <div>
              <h3>25,000+</h3>
              <p>Happy Students</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.statItem}>
            <FileText />
            <div>
              <h3>35,000+</h3>
              <p>Visas Processed</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.statItem}>
            <BadgeCheck />
            <div>
              <h3>98%</h3>
              <p>Visa Success Rate</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.statItem}>
            <Smile />
            <div>
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}