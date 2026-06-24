"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials as fallbackTestimonials } from "@/constants/content";
import FadeIn from "@/components/animations/FadeIn";
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
  const [items, setItems] = useState<TestimonialItem[]>(
    fallbackTestimonials.map((t) => ({
      name: t.name,
      country: t.country,
      university: t.program,
      quote: t.quote,
      image: t.image,
    }))
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setItems(
            data.map((t: TestimonialItem) => ({
              id: t.id,
              name: t.name,
              country: t.country,
              university: t.university,
              quote: t.testimonial,
              image: t.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const prev = () => setActive((a) => (a === 0 ? items.length - 1 : a - 1));
  const next = () => setActive((a) => (a === items.length - 1 ? 0 : a + 1));

  const current = items[active];
  if (!current) return null;

  const quoteText = current.quote || current.testimonial || "";
  const programText = current.university || current.program || "";

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <span className="sectionEyebrow">Success Stories</span>
            <h2 id="testimonials-title" className="sectionTitle">
              Student Testimonials
            </h2>
            <p className="sectionSubtitle">
              Real stories from students who transformed their futures with GoAbroadly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className={styles.showcase}>
            <div className={styles.mainCard}>
              <Quote className={styles.quoteIcon} size={40} aria-hidden="true" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id || current.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={styles.slideContent}
                >
                  <blockquote className={styles.quote}>
                    &ldquo;{quoteText}&rdquo;
                  </blockquote>

                  <footer className={styles.author}>
                    <div className={styles.avatar}>
                      <Image
                        src={current.image}
                        alt={current.name}
                        fill
                        sizes="56px"
                        className={styles.avatarImage}
                      />
                    </div>
                    <div>
                      <cite className={styles.name}>{current.name}</cite>
                      <p className={styles.program}>{programText}</p>
                      <p className={styles.country}>{current.country}</p>
                    </div>
                  </footer>
                </motion.div>
              </AnimatePresence>

              <div className={styles.controls}>
                <button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous testimonial">
                  <ChevronLeft size={20} />
                </button>
                <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
                  {items.map((t, i) => (
                    <button
                      key={t.id || t.name}
                      type="button"
                      role="tab"
                      className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                      onClick={() => setActive(i)}
                      aria-selected={i === active}
                      aria-label={`View testimonial from ${t.name}`}
                    />
                  ))}
                </div>
                <button type="button" className={styles.navBtn} onClick={next} aria-label="Next testimonial">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className={styles.sideCards} aria-hidden="true">
              {items.map((t, i) => (
                <button
                  key={t.id || t.name}
                  type="button"
                  className={`${styles.sideCard} ${i === active ? styles.sideCardActive : ""}`}
                  onClick={() => setActive(i)}
                  tabIndex={-1}
                >
                  <div className={styles.sideAvatar}>
                    <Image src={t.image} alt="" fill sizes="40px" className={styles.avatarImage} />
                  </div>
                  <span className={styles.sideName}>{t.name}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
