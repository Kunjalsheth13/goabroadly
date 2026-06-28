"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { colors } from "@/constants/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {
  Users,
  Globe,
  FileCheck2,
  ThumbsUp,
  BadgeCheck,
} from "lucide-react";
import bgImage from "@/assets/images/studydestinationbg.png";
import { studyAbroadData } from "@/constants/study-abroad-data";

import styles from "./DestinationsSection.module.css";
export default function DestinationsSection() {
  return (
   <section
  className={styles.section}
  style={{
    backgroundImage: `url(${bgImage.src})`,
  }}
>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
  <Plane
    size={16}
    fill={colors.danger}
    color={colors.danger}
    strokeWidth={2}
  />
  Top Destinations
</span>

         <h2 className={styles.title}>
  Popular Visa <span>Destinations</span>
</h2>

<p className={styles.subtitle}>
  Explore the best countries to study, work, visit, and settle abroad with expert guidance.
</p>
        </div>

    <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  loop
  breakpoints={{
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
  }}
>
          {studyAbroadData.map((country) => (
            <SwiperSlide key={country.slug}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={country.heroImage}
                    alt={country.country}
                    fill
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <div className={styles.flagWrapper}>
                    <Image
                      src={country.flagImage}
                      alt={country.country}
                      width={56}
                      height={56}
                      className={styles.flag}
                    />
                  </div>

                  <h3>{country.country}</h3>

                  <div className={styles.tags}>
                    {country.visaTypes.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className={styles.line} />

                  <Link
                    href={`/study-abroad/${country.slug}`}
                    className={styles.button}
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       <div className={styles.stats}>
  <div className={styles.statItem}>
    <div
      className={styles.icon}
      style={{ background: colors.primary }}
    >
      <Users size={38} color="#fff" />
    </div>

    <div>
      <strong>25,000+</strong>
      <span>Happy Clients</span>
    </div>
  </div>

  <div className={styles.statItem}>
    <div
      className={styles.icon}
      style={{ background: colors.danger }}
    >
      <Globe size={38} color="#fff" />
    </div>

    <div>
      <strong>20+</strong>
      <span>Countries</span>
    </div>
  </div>

  <div className={styles.statItem}>
    <div
      className={styles.icon}
      style={{ background: colors.primary }}
    >
      <FileCheck2 size={38} color="#fff" />
    </div>

    <div>
      <strong>35,000+</strong>
      <span>Visas Processed</span>
    </div>
  </div>

  <div className={styles.statItem}>
    <div
      className={styles.icon}
      style={{ background: colors.danger }}
    >
      <ThumbsUp size={38} color="#fff" />
    </div>

    <div>
      <strong>98%</strong>
      <span>Success Rate</span>
    </div>
  </div>

  <div className={styles.statItem}>
    <div
      className={styles.icon}
      style={{ background: colors.primary }}
    >
      <BadgeCheck size={38} color="#fff" />
    </div>

    <div>
      <strong>10+</strong>
      <span>Years of Experience</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}