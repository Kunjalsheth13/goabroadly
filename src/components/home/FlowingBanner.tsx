"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import styles from "./FlowingBanner.module.css";

const TEXT = "FREE FLIGHT TICKET FOR EVERY APPROVED STUDENT";

export default function FlowingBanner() {
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className={styles.item}>
      <Plane size={16} className={styles.planeIcon} aria-hidden="true" />
      {TEXT}
      <span className={styles.dot} aria-hidden="true" />
    </span>
  ));

  return (
    <div className={styles.banner} aria-hidden="true">
      <div className={styles.track}>
        {items}
        {items}
      </div>
    </div>
  );
}
