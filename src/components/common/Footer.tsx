import Link from "next/link";
import { footerLinks } from "@/constants/content";
import { siteConfig } from "@/constants/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              Go<span className={styles.brandAccent}>Abroadly</span>
            </div>
            <p className={styles.description}>{siteConfig.description}</p>
            <div className={styles.contactInfo}>
              <span>{siteConfig.email}</span>
              <span>{siteConfig.phone}</span>
            </div>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.linkList}>
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.linkList}>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} GoAbroadly. All rights reserved.</span>
          <span>Your Gateway to Global Education</span>
        </div>
      </div>
    </footer>
  );
}
