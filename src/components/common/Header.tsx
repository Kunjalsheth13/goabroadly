"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { megaMenus, simpleNavLinks, languages } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import MegaMenu from "./MegaMenu";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topInner}`}>
          <div className={styles.topLeft}>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className={styles.topLink}
            >
              <Phone size={13} aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <span className={styles.topDivider} aria-hidden="true">
              |
            </span>
            <a href={`mailto:${siteConfig.email}`} className={styles.topLink}>
              <Mail size={13} aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
          <div className={styles.topRight}>
            <div className={styles.langWrap}>
              <button
                type="button"
                className={styles.langBtn}
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
                aria-label="Select language"
              >
                <Globe size={14} aria-hidden="true" />
                {language}
                <ChevronDown size={12} className={langOpen ? styles.chevronOpen : ""} />
              </button>
              {langOpen && (
                <div className={styles.langDropdown}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      className={`${styles.langOption} ${language === lang.code ? styles.langActive : ""}`}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link href="/free-assessment" className={styles.topCta}>
              FREE ASSESSMENT
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={styles.mainBar}>
        <div className={`container ${styles.mainInner}`}>
          <Link href="/" className={styles.logo} aria-label="GoAbroadly Home">
            <Image
              src={logo}
              alt="GoAbroadly"
              width={260}
              height={70}
              priority
              className={styles.logoImage}
            />
          </Link>

        <nav className={styles.nav} aria-label="Main navigation">
  <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}>Home</Link>
  <Link href="/about" className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}>About</Link>
  {megaMenus.map((menu) => (
    <MegaMenu
      key={menu.label}
      menu={menu}
      isOpen={openMenu === menu.label}
      onOpen={() => setOpenMenu(menu.label)}
      onClose={() => setOpenMenu(null)}
    />
  ))}
  <Link href="/blog" className={`${styles.navLink} ${pathname === "/blog" ? styles.active : ""}`}>Blog</Link>
  <Link href="/contact" className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ""}`}>Contact</Link>
</nav>
          <div className={styles.headerRight}>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className={styles.phoneLink}
            >
              <span className={styles.phoneIcon}>
                <Phone size={14} />
              </span>

              {siteConfig.phone}
            </a>

            <Link href="/free-assessment" className={styles.headerCta}>
              Book Free Consultation
            </Link>
          </div>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {megaMenus.map((menu) => (
            <MegaMenu
              key={menu.label}
              menu={menu}
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
              mobile
              mobileExpanded={mobileExpanded === menu.label}
              onMobileToggle={() =>
                setMobileExpanded(mobileExpanded === menu.label ? null : menu.label)
              }
            />
          ))}
          {simpleNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileNavLink}>
              {link.label}
            </Link>
          ))}
          <Link href="/free-assessment" className={styles.mobileCta}>
            FREE ASSESSMENT
          </Link>
        </nav>
      )}
    </header>
  );
}
