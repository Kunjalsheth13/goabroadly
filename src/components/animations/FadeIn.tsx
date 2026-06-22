"use client";

import { motion } from "framer-motion";
import styles from "./FadeIn.module.css";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
};

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInProps) {
  const offsets = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      className={`${styles.fadeIn} ${className}`}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
