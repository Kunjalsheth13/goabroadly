"use client";

import { ArrowRight, Gift, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaPlane } from "react-icons/fa6";
import styles from "./CTASection.module.css";
import ctaBg from "@/assets/images/ctabg.png";

export default function CTASection() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${ctaBg.src})`,
      }}
    >
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>
           <div className={styles.badgeIcon}>
  <FaPlane size={25} />
</div>

            <span>BEGIN YOUR JOURNEY</span>
          </div>

        <h2 className={styles.title}>
  <span className={styles.line1}>
    Ready to Start Your
  </span>

  <span className={styles.line2}>
    <span className={styles.redText}>
      Global Education
    </span>{" "}
    Journey?
  </span>
</h2>

        <div className={styles.divider}>
  <span />
  <FaPlane className={styles.dividerPlane} />
  <span />
</div>

          <p className={styles.description}>
            Take the first step toward your dream university.
            <br />
            Get a free profile assessment and personalized roadmap
            <br />
            from our expert counselors today.
          </p>

          <div className={styles.actions}>
            <a href="/free-assessment" className={styles.primaryBtn}>
              <div className={styles.btnIcon}>
                <Gift size={22} />
              </div>

              <span>Get Free Assessment</span>

              <ArrowRight size={24} />
            </a>

            <a href="/contact" className={styles.secondaryBtn}>
              <div className={styles.btnIconSecondary}>
                <Phone size={20} />
              </div>

              <span>Speak to a Counselor</span>

              <ArrowRight size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}