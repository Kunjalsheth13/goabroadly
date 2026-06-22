"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Plane,
  Award,
  BookOpen,
  Building2,
  Globe,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/constants/content";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./ServicesGrid.module.css";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Plane,
  Award,
  BookOpen,
  Building2,
  Globe,
};

export default function ServicesGrid() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <span className="sectionEyebrow">What We Offer</span>
            <h2 id="services-title" className="sectionTitle">
              Comprehensive Services
            </h2>
            <p className="sectionSubtitle">
              End-to-end support crafted for ambitious students pursuing education
              at the world&apos;s finest institutions.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? GraduationCap;

            return (
              <FadeIn key={service.title} delay={i * 0.07}>
                <motion.article
                  className={styles.card}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.iconWrap}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                  <Link href="/services" className={styles.link}>
                    Learn more
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                  <div className={styles.cardGlow} aria-hidden="true" />
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
