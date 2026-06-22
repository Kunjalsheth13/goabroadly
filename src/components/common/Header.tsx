"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/content";
import Button from "./Button";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="GoAbroadly Home">
          Go<span className={styles.logoAccent}>Abroadly</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="/free-assessment" variant="outline" size="sm">
            Free Assessment
          </Button>
          <Button href="/contact" size="sm">
            Get Started
          </Button>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileNavLink}>
              {link.label}
            </Link>
          ))}
          <Button href="/free-assessment" fullWidth>
            Free Assessment
          </Button>
        </nav>
      )}
    </header>
  );
}
