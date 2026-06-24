"use client";

import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  PenLine,
  Banknote,
  Award,
  ClipboardList,
  Mic,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/constants/services-data";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./ServicesGrid.module.css";

const iconMap: Record<string, LucideIcon> = {
  "visa-consultation": Globe,
  "university-admission": GraduationCap,
  "sop-writing": PenLine,
  "education-loan-assistance": Banknote,
  "scholarship-guidance": Award,
  "application-assistance": ClipboardList,
  "interview-preparation": Mic,
  "visa-filing": FileText,
  "document-verification": ShieldCheck,
};

export default function ServicesGrid() {
  const featured = servicesData.slice(0, 6);

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
          {featured.map((service, i) => {
            const Icon = iconMap[service.slug] ?? Globe;

            return (
              <FadeIn key={service.slug} delay={i * 0.07}>
                <motion.article
                  className={styles.card}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.iconWrap}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.overview.slice(0, 120)}...</p>
                  <Link href={`/services/${service.slug}`} className={styles.link}>
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
