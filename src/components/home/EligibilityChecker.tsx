"use client";

import { useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { countries } from "@/constants/content";
import Button from "@/components/common/Button";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./EligibilityChecker.module.css";

export default function EligibilityChecker() {
  const [gpa, setGpa] = useState("");
  const [english, setEnglish] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const gpaNum = parseFloat(gpa);
    const englishNum = parseFloat(english);

    if (gpaNum >= 3.0 && englishNum >= 6.5 && country) {
      setResult("eligible");
    } else {
      setResult("needs-improvement");
    }
  };

  return (
    <section className="section" aria-labelledby="eligibility-title">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <span className="sectionEyebrow">Quick Check</span>
            <h2 id="eligibility-title" className="sectionTitle">
              Eligibility Checker
            </h2>
            <p className="sectionSubtitle">
              Get an instant assessment of your study abroad eligibility.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.wrapper}>
            <div className={styles.iconBadge} aria-hidden="true">
              <ClipboardCheck size={24} />
            </div>
          <form className={styles.form} onSubmit={handleCheck}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="gpa">GPA (out of 4.0)</label>
              <input
                id="gpa"
                type="number"
                step="0.1"
                min="0"
                max="4"
                className={styles.input}
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="english">IELTS Score</label>
              <input
                id="english"
                type="number"
                step="0.5"
                min="0"
                max="9"
                className={styles.input}
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="country">Preferred Country</label>
              <select
                id="country"
                className={styles.select}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                aria-required="true"
              >
                <option value="">Select country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <Button type="submit" fullWidth>Check Eligibility</Button>
          </form>

          {result === "eligible" && (
            <div className={`${styles.result} ${styles.eligible}`} role="status">
              <strong>Great news!</strong> You meet the basic eligibility criteria. Book a free consultation for personalized guidance.
            </div>
          )}
          {result === "needs-improvement" && (
            <div className={`${styles.result} ${styles.notEligible}`} role="status">
              You may need to improve your profile. Our counselors can help you create a strong application strategy.
            </div>
          )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
