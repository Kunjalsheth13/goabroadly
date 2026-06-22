"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/constants/content";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const current = testimonials[active];

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
              Real stories from students who transformed their futures with
              GoAbroadly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className={styles.showcase}>
            <div className={styles.mainCard}>
              <Quote className={styles.quoteIcon} size={40} aria-hidden="true" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={styles.slideContent}
                >
                  <div className={styles.stars} aria-label={`${current.rating} out of 5 stars`}>
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className={styles.quote}>
                    &ldquo;{current.quote}&rdquo;
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
                      <p className={styles.program}>{current.program}</p>
                      <p className={styles.country}>{current.country}</p>
                    </div>
                  </footer>
                </motion.div>
              </AnimatePresence>

              <div className={styles.controls}>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={prev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      role="tab"
                      className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                      onClick={() => setActive(i)}
                      aria-selected={i === active}
                      aria-label={`View testimonial from ${t.name}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className={styles.sideCards} aria-hidden="true">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
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
