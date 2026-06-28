"use client";

import { useState, useEffect } from "react";
import {
  GraduationCap,
  Headphones,
  FilePen,
  ShieldCheck,
  Users,
  Building2,
  FileCheck,
  Headset,
  ChevronDown,
  Shield,
  ChartNoAxesColumnIncreasing,
  ScrollText,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import eligibilityBg from "@/assets/images/eligibilitybg.png";

import styles from "./EligibilityChecker.module.css";

export default function EligibilityChecker() {
  const [qualification, setQualification] = useState("");
  const [ielts, setIelts] = useState("");
  const [offer, setOffer] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className={styles.section}
      style={!isMobile ? { backgroundImage: `url(${eligibilityBg.src})` } : undefined}
    >
      <div className="container">
        <FadeIn>
          <div className={styles.wrapper}>
            {/* LEFT SIDE */}
            <div className={styles.left}>
              <div className={styles.badge}>
                <GraduationCap size={16} />
                <span>Visa Eligibility Checker</span>
              </div>

              <h2 className={styles.title}>
                Am I Ready for
                <br />
                <span>UK Student Visa?</span>
              </h2>

              <div className={styles.redLine} />

              <p className={styles.description}>
                Check your eligibility in just a few steps and take the first step towards
                your study abroad dream.
              </p>

              <div className={styles.featuresCard}>
                <div className={styles.feature}>
                  <div className={styles.iconCircle}>
                    <ScrollText size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4>Quick & Easy</h4>
                    <p>Get result in less than a minute</p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.iconCircle}>
                    <Shield size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4>100% Free</h4>
                    <p>No hidden charges. Completely free to check.</p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.iconCircle}>
                    <ShieldCheck size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4>Secure & Private</h4>
                    <p>Your information is safe with us.</p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.iconCircle}>
                    <ChartNoAxesColumnIncreasing size={24} />
                  </div>
                  <div>
                    <h4>Expert Guidance</h4>
                    <p>We're here to help you at every step.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.card}>
              <div className={styles.flag}>
                <img src="https://flagcdn.com/w80/gb.png" alt="United Kingdom" />
              </div>

              <h3 className={styles.cardTitle}>
                <span />
                Check Your Eligibility
                <span />
              </h3>

              <div className={styles.field}>
                <label>Qualifications of Student</label>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <GraduationCap size={24} />
                  </div>
                  <select
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  >
                    <option>Select your highest qualification</option>
                    <option>12th Pass</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                  </select>
                  <ChevronDown size={18} />
                </div>
              </div>

              <div className={styles.field}>
                <label>IELTS Overall Band</label>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <Headphones size={24} />
                  </div>
                  <select value={ielts} onChange={(e) => setIelts(e.target.value)}>
                    <option>Select your IELTS band</option>
                    <option>5.5</option>
                    <option>6.0</option>
                    <option>6.5</option>
                    <option>7.0+</option>
                  </select>
                  <ChevronDown size={18} />
                </div>
              </div>

              <div className={styles.field}>
                <label>University Offer</label>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <FilePen size={24} />
                  </div>
                  <select value={offer} onChange={(e) => setOffer(e.target.value)}>
                    <option>Do you have a university offer?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <ChevronDown size={18} />
                </div>
              </div>

              <button className={styles.checkBtn}>
                <ShieldCheck size={22} />
                Check Eligibility
              </button>

              <div className={styles.securityText}>
                <ShieldCheck size={14} />
                We don't store your data. Completely safe & secure.
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Users size={34} />
              <div>
                <h3>25,000+</h3>
                <p>Students Guided</p>
              </div>
            </div>

            <div className={styles.stat}>
              <Building2 size={34} />
              <div>
                <h3>500+</h3>
                <p>Universities Tie-ups</p>
              </div>
            </div>

            <div className={styles.stat}>
              <FileCheck size={34} />
              <div>
                <h3>98%</h3>
                <p>Visa Success Rate</p>
              </div>
            </div>

            <div className={styles.stat}>
              <Headset size={34} />
              <div>
                <h3>24/7</h3>
                <p>Expert Assistance</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}