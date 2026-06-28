"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Globe,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  FileText,
  BookOpen,
  Wallet,
  Building2,
  UserCheck,
  Headphones,
  MessageCircle,
  Star,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import logo from "@/assets/images/logo.png";

import styles from "./Footer.module.css";

const quickLinks = [
  "Home",
  "About Us",
  "Countries",
  "Universities",
  "Courses",
  "Study Abroad Process",
  "Student Reviews",
  "Blog",
  "Contact Us",
];

const destinations = [
  "USA",
  "Canada",
  "UK",
  "Australia",
  "Germany",
  "New Zealand",
  "Ireland",
  "Singapore",
];

const services = [
  {
    icon: UserCheck,
    label: "Profile Evaluation",
  },
  {
    icon: Building2,
    label: "University Shortlisting",
  },
  {
    icon: FileText,
    label: "SOP & LOR Guidance",
  },
  {
    icon: GraduationCap,
    label: "Visa Filing",
  },
  {
    icon: BookOpen,
    label: "IELTS & PTE Training",
  },
  {
    icon: Wallet,
    label: "Loan Assistance",
  },
];

const stats = [
  {
    icon: GraduationCap,
    value: "25,000+",
    label: "Happy Students Globally",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Top Universities Worldwide",
  },
  {
    icon: Globe,
    value: "98%",
    label: "Visa Success Rate",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Dedicated Student Support",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topGrid}>
          {/* LEFT */}
          <div className={styles.brandColumn}>
            <Image src={logo} alt="GoAbroadly" className={styles.logo} priority />

            <h3 className={styles.tagline}>
  <span className={styles.taglineBlue}>Study Abroad,</span>{" "}
  <span className={styles.taglineRed}>Simplified.</span>
</h3>

            <p className={styles.description}>
              We help students achieve their global education dreams by providing
              end-to-end support for admissions, visas, and beyond.
            </p>

            <div className={styles.googleBox}>
              <div className={styles.googleIcon}>G</div>

              <div>
                <div className={styles.rating}>
                  4.9/5
                  <span>
                    <Star size={16} fill="#FDBA12" />
                    <Star size={16} fill="#FDBA12" />
                    <Star size={16} fill="#FDBA12" />
                    <Star size={16} fill="#FDBA12" />
                    <Star size={16} fill="#FDBA12" />
                  </span>
                </div>

                <p>From 2,000+ Happy Students</p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className={styles.heading}>Quick Links</h4>

            <ul className={styles.list}>
              {quickLinks.map((item) => (
                <li key={item}>
                  <ChevronRight size={14} />
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div>
            <h4 className={styles.heading}>Popular Destinations</h4>

            <ul className={styles.list}>
              {destinations.map((item) => (
                <li key={item}>
                  <Globe size={14} />
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className={styles.heading}>Our Services</h4>

            <ul className={styles.list}>
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <Icon size={15} />
                    <Link href="/">{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className={styles.heading}>Get in Touch</h4>

            <div className={styles.contactItem}>
              <Phone size={18} />
              <div>
                <strong>+91 63543 94156</strong>
                <span>Mon - Sat | 10AM - 7PM</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail size={18} />
              <div>
                <strong>saurabh@goabroadly.in</strong>
                <span>We reply within 24 hours</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <MapPin size={18} />
              <div>
                <strong>
                  304, Shilp Epitome,
                  <br />
                  Sindhubhavan Road,
                  <br />
                  Bodakdev, Ahmedabad - 380059
                </strong>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Globe size={18} />
              <div>
                <strong>www.goabroadly.in</strong>
              </div>
            </div>
          </div>
        </div>
        {/* STATS */}
        <div className={styles.statsSection}>
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Icon size={28} />
                </div>

                <div>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM */}
      {/* BOTTOM */}
<div className={styles.bottomGrid}>
  {/* Stay Updated */}
  <div>
    <h4 className={styles.heading}>Stay Updated</h4>

    <p className={styles.smallText}>
      Subscribe to our newsletter for the latest updates, tips, and
      opportunities.
    </p>

    <div className={styles.subscribeBox}>
      <input placeholder="Enter your email address" />
      <button>Subscribe</button>
    </div>
  </div>

  {/* Follow Us */}
  <div>
    <h4 className={styles.heading}>Follow Us</h4>

    <div className={styles.socials}>
      <a href="#">
        <FaFacebookF size={18} />
      </a>

      <a href="#">
        <FaInstagram size={18} />
      </a>

      <a href="#">
        <FaYoutube size={18} />
      </a>

      <a href="#">
        <FaLinkedinIn size={18} />
      </a>

      <a href="#">
        <MessageCircle size={18} />
      </a>
    </div>
  </div>

  {/* Affiliations */}
  <div>
    <h4 className={styles.heading}>Our Affiliations</h4>

    <div className={styles.affiliations}>
      <img src="https://picsum.photos/160/70?1" alt="" />
      <img src="https://picsum.photos/160/70?2" alt="" />
      <img src="https://picsum.photos/160/70?3" alt="" />
      <img src="https://picsum.photos/160/70?4" alt="" />
    </div>
  </div>
</div>

{/* COPYRIGHT */}
<div className={styles.copyright}>
  <Image
    src={logo}
    alt="GoAbroadly"
    className={styles.bottomLogo}
  />

  <span className={styles.copyrightText}>
    © 2024 GoAbroadly.in | All Rights Reserved.
  </span>

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
