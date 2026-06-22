"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/constants/content";
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
          {destinations.map((dest, i) => (
            <FadeIn key={dest.country} delay={i * 0.08}>
              <motion.article
                className={styles.card}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={dest.image}
                    alt={`${dest.country} — international students and campus life`}
                    fill
                    sizes="(max-width: 568px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwEPwAB//9k="
                  />
                  <div className={styles.overlay} />
                </div>

                <div className={styles.content}>
                  <span className={styles.code}>{dest.code}</span>
                  <h3 className={styles.country}>{dest.country}</h3>
                  <p className={styles.universities}>
                    <MapPin size={14} aria-hidden="true" />
                    {dest.universities} Partner Universities
                  </p>
                  <p className={styles.description}>{dest.description}</p>

                  <Link
                    href="/countries"
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
