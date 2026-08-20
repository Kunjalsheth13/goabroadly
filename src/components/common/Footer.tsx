"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import logo from "@/assets/images/logo.png";

import styles from "./Footer.module.css";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Countries", href: "/countries" },
  { name: "Universities", href: "/study-abroad" },
  { name: "Courses", href: "/study-abroad" },
  { name: "Study Abroad Process", href: "/study-abroad" },
  { name: "Student Reviews", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const destinations = [
  { name: "USA", href: "/countries/usa" },
  { name: "Canada", href: "/countries/canada" },
  { name: "UK", href: "/countries/uk" },
  { name: "Australia", href: "/countries/australia" },
  { name: "Germany", href: "/countries/germany" },
  { name: "New Zealand", href: "/countries/new-zealand" },
  { name: "Ireland", href: "/countries/ireland" },
  { name: "Singapore", href: "/countries/singapore" },
];

const services = [
  { name: "Profile Evaluation", href: "/services" },
  { name: "University Shortlisting", href: "/services" },
  { name: "SOP & LOR Guidance", href: "/services" },
  { name: "Visa Filing", href: "/visa-types" },
  { name: "IELTS & PTE Training", href: "/services" },
  { name: "Loan Assistance", href: "/services" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ── TOP: BRAND + LINK GRID ─────────────────────────── */}
        <div className={styles.topGrid}>
          {/* BRAND */}
          <div className={styles.brandColumn}>
            <Image src={logo} alt="GoAbroadly" className={styles.logo} priority />

            <p className={styles.description}>
              End-to-end support for admissions, visas, and everything in
              between — helping 25,000+ students reach top universities
              worldwide.
            </p>

            <div className={styles.googleBox}>
              <div className={styles.googleIcon}>G</div>
              <div>
                <div className={styles.rating}>
                  4.9
                  <span>
                    <Star size={12} fill="#F59E0B" />
                    <Star size={12} fill="#F59E0B" />
                    <Star size={12} fill="#F59E0B" />
                    <Star size={12} fill="#F59E0B" />
                    <Star size={12} fill="#F59E0B" />
                  </span>
                </div>
                <p>2,000+ Google Reviews</p>
              </div>
            </div>

            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><FaFacebookF size={14} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={14} /></a>
              <a href="#" aria-label="YouTube"><FaYoutube size={14} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={14} /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.linkColumn}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              {quickLinks.map((item) => (
                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div className={styles.linkColumn}>
            <h4 className={styles.heading}>Destinations</h4>
            <ul className={styles.list}>
              {destinations.map((item) => (
                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className={styles.linkColumn}>
            <h4 className={styles.heading}>Our Services</h4>
            <ul className={styles.list}>
              {services.map((item) => (
                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* CONTACT / NEWSLETTER */}
          <div className={styles.contactColumn}>
            <h4 className={styles.heading}>Get in Touch</h4>

            <div className={styles.contactItem}>
              <Phone size={15} />
              <span>+91 63543 94156</span>
            </div>

            <div className={styles.contactItem}>
              <Mail size={15} />
              <span>saurabh@goabroadly.in</span>
            </div>

            <div className={styles.contactItem}>
              <MapPin size={15} />
              <span>
                304, Shilp Epitome, Sindhubhavan Road, Bodakdev,
                Ahmedabad - 380059
              </span>
            </div>

            <p className={styles.newsletterLabel}>Subscribe for updates</p>
            <div className={styles.subscribeBox}>
              <input placeholder="Your email address" />
              <button aria-label="Subscribe">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ──────────────────────────────────────── */}
        <div className={styles.bottomBar}>
          <span className={styles.copyrightText}>
            © 2024 GoAbroadly.in — All Rights Reserved.
          </span>

          <div className={styles.affiliations}>
            <img src="https://picsum.photos/160/70?1" alt="" />
            <img src="https://picsum.photos/160/70?2" alt="" />
            <img src="https://picsum.photos/160/70?3" alt="" />
            <img src="https://picsum.photos/160/70?4" alt="" />
          </div>

          <div className={styles.legalLinks}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Refund Policy</Link>
            <Link href="/">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}