"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Headphones,
  CircleHelp,
} from "lucide-react";

import faqGirl from "@/assets/images/faqs.png";
import { faqItems } from "@/constants/content";

import FadeIn from "@/components/animations/FadeIn";
import styles from "./FAQSection.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items?: FAQItem[];
  title?: string;
};

export default function FAQSection({
  items,
  title,
}: FAQSectionProps = {}) {
  const faqs = items ?? faqItems;
  const sectionTitle = title ?? "Frequently Asked Questions";

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className="container">
        <FadeIn>
          <div className={styles.heading}>
           <span className={styles.badge}>
  <span className={styles.badgeIcon}>
    <CircleHelp size={18} strokeWidth={2.5} />
  </span>

  Got Questions?
</span>

            <h2 className={styles.title}>
              Frequently Asked <span>Questions</span>
            </h2>

            <p className={styles.subtitle}>
              Everything you need to know about studying abroad with
              GoAbroadly.
            </p>

            <p className={styles.contactText}>
              Can't find your answer?
              <a href="/contact"> Contact our team.</a>
            </p>

            <div className={styles.divider}>
              <span />
              <i />
              <span />
            </div>
          </div>
        </FadeIn>

        <div className={styles.wrapper}>
          {/* LEFT */}
          <FadeIn>
            <div className={styles.leftSide}>
              <Image
                src={faqGirl}
                alt="Student"
                className={styles.student}
                priority
              />

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <Headphones size={24} />
                </div>

                <div>
                  <h4>Still have questions?</h4>
                  <p>Our experts are here to help!</p>

                  <a href="/contact">
                    Contact our team →
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT */}
          <div className={styles.list}>
            {faqs.map((item, index) => {
              const open = openIndex === index;

              return (
                <FadeIn key={item.question} delay={index * 0.05}>
                  <div
                    className={styles.item}
                    onMouseEnter={() => {
                      if (window.innerWidth > 1024) {
                        setOpenIndex(index);
                      }
                    }}
                  >
                    <button
                      className={styles.question}
                      onClick={() =>
                        setOpenIndex(open ? null : index)
                      }
                    >
                      <span
                        className={`${styles.iconBox} ${
                          open ? styles.openIcon : ""
                        }`}
                      >
                        {open ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </span>

                      <span className={styles.questionText}>
                        {item.question}
                      </span>
                    </button>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className={styles.answerWrap}
                        >
                          <p>{item.answer}</p>
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