"use client";

import { motion } from "framer-motion";
import {
  
  ShieldCheck,
  ArrowRight,
  Target,
  Clock3,
  Handshake,
} from "lucide-react";
import {
  FaGlobeAmericas,
  FaUniversity,
  FaMoneyBillWave,
  FaClipboardList,
} from "react-icons/fa";

import { PiCertificateFill } from "react-icons/pi";
import { RiQuillPenFill } from "react-icons/ri";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { servicesData } from "@/constants/services-data";

import servicesBg from "@/assets/images/servicesbg.png";

import styles from "./ServicesGrid.module.css";

const iconMap: Record<string, any> = {
  "visa-consultation": FaGlobeAmericas,
  "university-admission": FaUniversity,
  "sop-writing": RiQuillPenFill,
  "education-loan-assistance": FaMoneyBillWave,
  "scholarship-guidance": PiCertificateFill,
  "application-assistance": FaClipboardList,
};

const bottomFeatures: {
  icon: any;
  title: string;
  desc: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "Expert Guidance",
    desc: "From experienced counselors",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    desc: "Solutions tailored to your goals",
  },
  {
    icon: Clock3,
    title: "End-to-End Support",
    desc: "We're with you at every step",
  },
  {
    icon: Handshake,
    title: "High Success Rate",
    desc: "Proven track record of student success",
  },
  {
  icon: FaGlobeAmericas,
  title: "Global Network",
  desc: "Strong connections worldwide",
},
];

export default function ServicesGrid() {
  const featured = servicesData.slice(0, 6);

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${servicesBg.src})`,
      }}
    >
      <div className="container">
        <FadeIn>
          <div className={styles.header}>
  <div className={styles.eyebrowWrap}>
    <span className={styles.plane}>✈</span>

    <div className={styles.eyebrow}>
      <span className={styles.line} />
      <span className={styles.eyebrowText}>What We Offer</span>
      <span className={styles.line} />
    </div>
  </div>

  <h2 className={styles.title}>
    Comprehensive <span>Services</span>
  </h2>

            <p className={styles.subtitle}>
              End-to-end support crafted for ambitious students pursuing
              education at the world's finest institutions.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {featured.map((service, index) => {
          const Icon =
  iconMap[service.slug as keyof typeof iconMap] || FaGlobeAmericas;

            return (
              <FadeIn key={service.slug} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className={styles.card}
                >
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.iconWrap}>
  <Icon size={24} />
</div>
                  <h3>{service.title}</h3>

                  <p>
                    {service.overview.slice(0, 120)}
                    ...
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className={styles.link}
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>

        <div className={styles.bottomBar}>
          {bottomFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Icon size={22} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

                {index !== bottomFeatures.length - 1 && (
                  <div className={styles.divider} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}