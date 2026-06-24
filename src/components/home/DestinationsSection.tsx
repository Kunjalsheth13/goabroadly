"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock, DollarSign } from "lucide-react";
import { studyAbroadData } from "@/constants/study-abroad-data";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./DestinationsSection.module.css";

export default function DestinationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="destinations-title">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <span className="sectionEyebrow">Explore the World</span>
            <h2 id="destinations-title" className="sectionTitle">
              Study Destinations
            </h2>
            <p className="sectionSubtitle">
              Discover premier education hubs where your ambitions meet
              world-class opportunity.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {studyAbroadData.map((dest, i) => (
            <FadeIn key={dest.slug} delay={i * 0.06}>
              <motion.article
                className={styles.card}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={dest.heroImage}
                    alt={`Study in ${dest.country}`}
                    fill
                    sizes="(max-width: 568px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.overlay} />
                  <h3 className={styles.countryOverlay}>{dest.country}</h3>
                </div>

                <div className={styles.content}>
                  <div className={styles.stats}>
                    <span className={styles.stat}>
                      <GraduationCap size={14} aria-hidden="true" />
                      {dest.topUniversities.length}+ Universities
                    </span>
                    <span className={styles.stat}>
                      <Clock size={14} aria-hidden="true" />
                      1-2 Year Programs
                    </span>
                    <span className={styles.stat}>
                      <DollarSign size={14} aria-hidden="true" />
                      Scholarships Available
                    </span>
                  </div>

                  <Link
                    href={`/study-abroad/${dest.slug}`}
                    className={`${styles.exploreLink} ${hoveredIndex === i ? styles.exploreLinkVisible : ""}`}
                  >
                    Explore {dest.country}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
