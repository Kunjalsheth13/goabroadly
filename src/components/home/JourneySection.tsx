"use client";

import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

import bgImage from "@/assets/images/endtoendsupportbg.png";

import icon1 from "@/assets/images/endtoendsupport1.png";
import icon2 from "@/assets/images/endtoendsupport2.png";
import icon3 from "@/assets/images/endtoendsupport3.png";
import icon4 from "@/assets/images/endtoendsupport4.png";
import icon5 from "@/assets/images/endtoendsupport5.png";
import icon6 from "@/assets/images/endtoendsupport6.png";

import styles from "./JourneySection.module.css";

const services = [
  {
    id: "01",
    image: icon1,
    title: "Profile Evaluation",
    description:
      "We assess your academic background, goals & eligibility to create the best plan.",
  },
  {
    id: "02",
    image: icon2,
    title: "University Shortlisting",
    description:
      "Get a curated list of top universities that match your profile and aspirations.",
  },
  {
    id: "03",
    image: icon3,
    title: "SOP & LOR",
    description:
      "Expert guidance for compelling SOPs and strong LORs that make you stand out.",
  },
  {
    id: "04",
    image: icon4,
    title: "Visa Filing",
    description:
      "Hassle-free documentation and visa filing with 100% accuracy and transparency.",
  },
  {
    id: "05",
    image: icon5,
    title: "IELTS & PTE Training",
    description:
      "Achieve your target band score with expert trainers and personalized coaching.",
  },
  {
    id: "06",
    image: icon6,
    title: "Loan Assistance",
    description:
      "Get guidance for education loans with easy processes and best loan options.",
  },
];

export default function JourneySection() {
  return (
    <section className={styles.section}>
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className={styles.background}
      />

      <div className="container">
        <FadeIn>
          <div className={styles.header}>
            <div className={styles.badge}>
              <ShieldCheck size={16} />
              End-To-End Support
            </div>

            <h2 className={styles.title}>
              Complete <span>Study Abroad</span> Support
            </h2>

            <p className={styles.subtitle}>
              From shortlisting the right university to visa approval,
              we’re with you at every step of your journey.
            </p>

            <div className={styles.line} />
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {services.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.number}>{item.id}</div>

              <Image
                src={item.image}
                alt={item.title}
                className={styles.icon}
              />

              <h3>{item.title}</h3>

              <p>{item.description}</p>

             <button className={styles.button}>
  <span>Learn More</span>
  <ArrowRight size={14} />
</button>
            </div>
          ))}
        </div>

        <div className={styles.footerText}>
          Your Dream. Our Guidance. Your Future.
        </div>
      </div>
    </section>
  );
}