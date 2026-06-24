"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { NavMenuConfig } from "@/constants/navigation";
import styles from "./MegaMenu.module.css";

type MegaMenuProps = {
  menu: NavMenuConfig;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  mobile?: boolean;
  mobileExpanded?: boolean;
  onMobileToggle?: () => void;
};

export default function MegaMenu({
  menu,
  isOpen,
  onOpen,
  onClose,
  mobile,
  mobileExpanded,
  onMobileToggle,
}: MegaMenuProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (mobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  };

  const handleLeave = () => {
    if (mobile) return;
    timeoutRef.current = setTimeout(onClose, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (mobile) {
    return (
      <div className={styles.mobileItem}>
        <button
          type="button"
          className={styles.mobileTrigger}
          onClick={onMobileToggle}
          aria-expanded={mobileExpanded}
        >
          {menu.label}
          <ChevronDown
            size={16}
            className={`${styles.chevron} ${mobileExpanded ? styles.chevronOpen : ""}`}
          />
        </button>
        <AnimatePresence>
          {mobileExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={styles.mobilePanel}
            >
              {menu.columns.map((col) => (
                <div key={col.title} className={styles.mobileColumn}>
                  <span className={styles.columnTitle}>{col.title}</span>
                  {col.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileLink}
                      >
                        <Icon size={16} aria-hidden="true" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link href={menu.href} className={`${styles.trigger} ${isOpen ? styles.triggerActive : ""}`}>
        {menu.label}
        <ChevronDown
          size={14}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.dropdown}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className={styles.dropdownInner}>
              {menu.columns.map((col) => (
                <div key={col.title} className={styles.column}>
                  <span className={styles.columnTitle}>{col.title}</span>
                  <ul className={styles.list}>
                    {col.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.href}>
                          <Link href={item.href} className={styles.link}>
                            <span className={styles.linkIcon}>
                              <Icon size={16} aria-hidden="true" />
                            </span>
                            <span className={styles.linkText}>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
