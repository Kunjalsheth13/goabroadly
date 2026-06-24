"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/constants/content";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./FAQSection.module.css";

type FAQItem = { question: string; answer: string };

type FAQSectionProps = {
  items?: FAQItem[];
  title?: string;
};

export default function FAQSection({ items, title }: FAQSectionProps = {}) {
  const faqs = items ?? faqItems;
  const sectionTitle = title ?? "Frequently Asked Questions";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className="container">
        <div className={styles.layout}>
          <FadeIn>
            <div className={styles.header}>
              <span className="sectionEyebrow">Got Questions?</span>
              <h2 id="faq-title" className="sectionTitle">
                {sectionTitle}
              </h2>
              <p className={styles.headerText}>
                Everything you need to know about studying abroad with GoAbroadly.
                Can&apos;t find your answer?{" "}
                <a href="/contact" className={styles.contactLink}>
                  Contact our team
                </a>
                .
              </p>
            </div>
          </FadeIn>

          <div className={styles.list} role="list">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <FadeIn key={item.question} delay={i * 0.05}>
                  <div className={styles.item} role="listitem">
                    <button
                      type="button"
                      className={`${styles.question} ${isOpen ? styles.questionOpen : ""}`}
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span>{item.question}</span>
                      <span className={styles.iconWrap} aria-hidden="true">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          className={styles.answerWrap}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className={styles.answer}>{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
