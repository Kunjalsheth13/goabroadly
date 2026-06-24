"use client";

import { motion } from "framer-motion";
import styles from "./BubbleGlobe.module.css";

const COUNTRIES = [
  { code: "UK", flag: "GB", x: 15, y: 25, delay: 0 },
  { code: "CA", flag: "CA", x: 25, y: 55, delay: 0.5 },
  { code: "AU", flag: "AU", x: 70, y: 70, delay: 1 },
  { code: "US", flag: "US", x: 20, y: 75, delay: 1.5 },
  { code: "DE", flag: "DE", x: 55, y: 30, delay: 2 },
  { code: "FR", flag: "FR", x: 48, y: 45, delay: 2.5 },
  { code: "IE", flag: "IE", x: 40, y: 35, delay: 3 },
  { code: "NZ", flag: "NZ", x: 80, y: 55, delay: 3.5 },
];

export default function BubbleGlobe() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.globe}>
        <svg viewBox="0 0 400 400" className={styles.globeSvg}>
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        </svg>

        {COUNTRIES.map((country) => (
          <motion.div
            key={country.code}
            className={styles.bubble}
            style={{ left: `${country.x}%`, top: `${country.y}%` }}
            animate={{
              y: [0, -12, 0, 8, 0],
              x: [0, 6, 0, -4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: country.delay,
              ease: "easeInOut",
            }}
          >
            <img
              src={`https://flagcdn.com/w40/${country.flag.toLowerCase()}.png`}
              alt=""
              width={20}
              height={15}
              className={styles.flag}
              loading="lazy"
            />
            <span className={styles.code}>{country.code}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
