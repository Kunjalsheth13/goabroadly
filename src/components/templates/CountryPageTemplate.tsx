"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ClipboardList,
  FileText,
  ShieldCheck,
  Stamp,
  ArrowRight,
  Users,
  Globe,
  Award,
  GraduationCap,
  Wallet,
  User,
  FolderOpen,
  Shield,
  Headphones,
  Clock,
  Briefcase
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "../home/TestimonialsSection";

// Fallback backgrounds if specific country images are missing
import heroBgFallback from "@/assets/images/services/herobg.png";
import eligibilityBg from "@/assets/images/visatypes/eligibilitybg.png";
import requireDocsBg from "@/assets/images/visatypes/requiredocsbg.png";
import dreamBg from "@/assets/images/visatypes/dreambg.png";
import dreamIcon from "@/assets/images/visatypes/dreamicon.png";

// --- TYPES & DATA ---
export type FAQ = { question: string; answer: string };

export type CountryPageData = {
  slug: string;
  name: string;
  heroImage: string; // Kept for backwards compatibility, but not used in the new hero
  heroSubtitle: string;
  overview: string;
  whyStudy: string[];
  visaInfo: string;
  universities: string[];
  careers: string[];
  faqs: FAQ[];
};

type Props = { data: CountryPageData };

// --- COMPONENT ---
export default function CountryPageTemplate({ data }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = data.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  // Dynamically load the exact country images based on folder structure
  // Using try/catch ensures it doesn't break if an image is missing
  let desktopBgSrc = heroBgFallback;
  let mobileBgSrc = heroBgFallback;

  try {
    desktopBgSrc = require(`@/assets/images/countries/${data.slug}desktop.png`).default || require(`@/assets/images/countries/${data.slug}desktop.png`);
    mobileBgSrc = require(`@/assets/images/countries/${data.slug}mobile.png`).default || require(`@/assets/images/countries/${data.slug}mobile.png`);
  } catch (err) {
    console.warn(`Images for ${data.slug} not found, using fallbacks.`);
  }

  return (
    <>
      <style>{`
/* ==========================================================================
   CountryPageTemplate Styles
   ========================================================================== */

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* --------------------------------- HERO NEW DESIGN --------------------------------- */
.visa-hero {
  position: relative;
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center; /* Center text vertically on desktop */
  padding: 100px 0;
  overflow: hidden;
  background-color: #FAFAFC;
}

/* Background image containers */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.hero-bg-img {
  object-fit: cover;
  object-position: center;
}
.hero-bg-desktop { display: block; }
.hero-bg-mobile { display: none; }

/* Content wrapper above background */
.visa-hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.visa-left {
  max-width: 600px;
}

.visa-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 6px;
  background: #FEE2E2;
  color: #DC2626;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
  border: 1px solid #FECACA;
}

.visa-title {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(36px, 4.5vw, 60px);
  line-height: 1.15;
  font-weight: 800;
  color: #0B2B66;
  margin-bottom: 20px;
}

.visa-title-highlight {
  color: #DC2626;
  display: block;
  margin-bottom: 4px;
}

.visa-subtitle {
  font-size: 18px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 36px;
  max-width: 90%;
}

.visa-buttons {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;
}

.btn-hero-primary {
  background-color: #EF4444;
  color: #ffffff;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  border: none;
  white-space: nowrap;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}

.btn-hero-secondary {
  background-color: #ffffff;
  color: #0B2B66;
  border: 1px solid #E2E8F0;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}
.visa-social-proof {
  display: flex;
  align-items: center;
  gap: 16px;
}

.visa-avatars {
  display: flex;
}

.visa-avatars img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: -14px;
  object-fit: cover;
}

.visa-avatars img:first-child {
  margin-left: 0;
}

.visa-social-proof p {
  font-size: 14px;
  color: #475569;
}

.visa-social-proof strong {
  color: #DC2626;
}

/* ------------------------------- STATS BAR ----------------------------- */
.stats-section {
  position: relative;
  z-index: 10;
  margin-top: -60px; /* Pulls it up to overlap the bottom of the hero slightly */
  padding: 0 24px;
}

.visa-stats-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 100px;
  padding: 24px 48px;
  box-shadow: 0 12px 30px rgba(11, 43, 102, 0.08);
  border: 1px solid #F1F5F9;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
}

.visa-stat {
  display: flex;
  align-items: center;
  gap: 16px;
}

.visa-stat-icon {
  color: #0B2B66;
  width: 32px;
  height: 32px;
}

.visa-stat-text {
  display: flex;
  flex-direction: column;
}

.visa-stat-text strong {
  font-size: 22px;
  font-weight: 800;
  color: #0F172A;
  line-height: 1.2;
}

.visa-stat-text span {
  font-size: 14px;
  color: #64748B;
  font-weight: 500;
}

.visa-stat-divider {
  width: 1px;
  height: 48px;
  background: #E2E8F0;
}

/* Responsive Overrides */
@media (max-width: 1024px) {
  .visa-hero {
    min-height: auto; 
    align-items: flex-start; /* Move text up */
    padding-top: 80px;
    padding-bottom: 220px; /* Ensure space at the bottom for graphics */
  }
  .hero-bg-desktop { display: none; }
  .hero-bg-mobile { display: block; }
  
  .visa-left {
    max-width: 100%;
  }
  .visa-buttons, .visa-social-proof {
    justify-content: flex-start;
  }
  
  .visa-stats-bar {
    border-radius: 24px;
    padding: 32px;
    justify-content: center;
    gap: 40px;
  }
  .visa-stat-divider {
    display: none;
  }
}

@media (max-width: 640px) {
  .visa-hero {
    padding-top: 30px; /* Pulled text significantly up */
    padding-bottom: 240px; /* Deep padding at bottom to clear the flag/monuments completely */
  }
  .visa-title {
    font-size: 36px;
    margin-bottom: 12px; /* Tightened spacing */
  }
  .visa-subtitle {
    font-size: 16px;
    margin-bottom: 24px; /* Tightened spacing */
  }
 .visa-buttons {
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    gap: 8px;
    margin-bottom: 24px;
  }
  .btn-hero-primary, .btn-hero-secondary {
    flex: 1; /* Makes them exactly 50% width */
    padding: 12px 14px;
    font-size: 13.5px;
    gap: 6px;
  }
  .btn-hero-primary svg, .btn-hero-secondary svg {
    width: 14px;
    height: 14px;
  }
  .visa-stats-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    border-radius: 16px;
    padding: 24px;
  }
}

/* ------------------------------- CONTENT BLOCKS -------------------------------- */
.content-section {
  padding: 80px 24px;
  background: #ffffff;
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
}

.content-title {
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 800;
  color: #0B2B66;
  margin-bottom: 24px;
}

.content-text {
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 32px;
}

/* ------------------------------- ELIGIBILITY NEW (WHY STUDY) -------------------------------- */
.elig-wrapper {
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.elig-container {
  width: 100%;
  max-width: 1280px;
  padding: 64px 80px;
  position: relative;
  overflow: hidden;
}
.elig-header {
  max-width: 540px;
  margin-bottom: 48px;
  position: relative;
  z-index: 2;
}
.elig-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: #EFF6FF;
  color: #1E3A8A;
  border-radius: 100px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.elig-title {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(32px, 4vw, 46px);
  font-weight: 800;
  color: #0B2B66;
  margin-bottom: 16px;
  line-height: 1.2;
}
.elig-title span {
  color: #DC2626;
}
.elig-underline {
  width: 48px;
  height: 4px;
  background: #DC2626;
  margin-bottom: 24px;
  border-radius: 4px;
}
.elig-subtitle {
  font-size: 16px;
  color: #475569;
  line-height: 1.6;
}
.elig-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  position: relative;
  z-index: 2;
}
.elig-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(11, 43, 102, 0.04);
  border: 1px solid #F1F5F9;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.elig-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(11, 43, 102, 0.08);
}
.elig-card-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: #EFF6FF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1E3A8A;
  flex-shrink: 0;
}
.elig-card-content {
  flex: 1;
}
.elig-card-title {
  font-size: 16px;
  font-weight: 700;
  color: #0B2B66;
  margin-bottom: 8px;
  padding-right: 24px;
}
.elig-card-desc {
  font-size: 13.5px;
  color: #64748B;
  line-height: 1.6;
}
.elig-card-check {
  position: absolute;
  top: 20px;
  right: 20px;
}

@media (max-width: 1024px) {
  .elig-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .elig-container {
    padding: 48px 40px;
  }
}
@media (max-width: 640px) {
  .elig-wrapper {
    background-image: none !important;
  }
  .elig-grid {
    grid-template-columns: 1fr;
  }
  .elig-container {
    padding: 40px 24px;
    border-radius: 24px;
  }
}

/* ---------------------------- REQUIRED DOCUMENTS NEW (UNIVERSITIES) --------------------------- */
.docs-wrapper {
  padding: 60px 24px; 
  display: flex;
  justify-content: center;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  background-color: #FAFAFC;
  min-height: 600px; 
}
.docs-container {
  width: 100%;
  max-width: 1280px;
  position: relative;
}

.docs-top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
}

.docs-header {
  max-width: 540px;
  position: relative;
  z-index: 2;
}

.docs-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: #FEF2F2;
  color: #DC2626;
  border-radius: 100px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
  border: 1px solid #FEE2E2;
}

.docs-title {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(32px, 4vw, 46px);
  font-weight: 800;
  color: #0B2B66;
  margin-bottom: 16px;
  line-height: 1.2;
}

.docs-title span {
  color: #DC2626;
}

.docs-underline {
  width: 48px;
  height: 4px;
  background: #DC2626;
  margin-bottom: 24px;
  border-radius: 4px;
}

.docs-subtitle {
  font-size: 16px;
  color: #475569;
  line-height: 1.6;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  position: relative;
  z-index: 2;
}

.docs-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.04);
  border: 1px solid #FEF2F2;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.docs-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(220, 38, 38, 0.08);
}

.docs-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #FEF2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #DC2626;
  flex-shrink: 0;
}

.docs-card-content {
  flex: 1;
}

.docs-card-title {
  font-size: 16px;
  font-weight: 700;
  color: #0B2B66;
  margin-bottom: 4px;
}

.docs-card-desc {
  font-size: 14px;
  color: #64748B;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .docs-wrapper {
    background-image: none !important;
    padding: 60px 24px;
  }
  .docs-grid {
    grid-template-columns: 1fr;
  }
}

/* -------------------------------- PROCESS NEW DESIGN (CAREERS) -------------------------------- */
.process-section {
  padding: 80px 24px;
  background: #ffffff; 
  display: flex;
  justify-content: center;
  width: 100%;
}

.process-container {
  width: 100%;
  max-width: 1280px;
}

.process-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
}

.process-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: #EFF6FF;
  color: #1E3A8A;
  border-radius: 100px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.process-title {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(32px, 4vw, 46px);
  font-weight: 800;
  color: #0B2B66;
  margin-bottom: 16px;
  line-height: 1.2;
}

.process-title span {
  color: #DC2626;
}

.process-underline {
  width: 48px;
  height: 4px;
  background: #DC2626;
  margin-bottom: 24px;
  border-radius: 4px;
}

.process-subtitle {
  font-size: 16px;
  color: #475569;
  line-height: 1.6;
  max-width: 600px;
}

.process-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  width: 100%;
}

.process-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.7) 0%, rgba(241, 245, 249, 0.3) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(11, 43, 102, 0.05);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 1 200px;
  max-width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.process-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 50px rgba(11, 43, 102, 0.08);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.5) 100%);
}

.process-step-number {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 80px;
  font-weight: 800;
  color: rgba(15, 60, 148, 0.04);
  line-height: 1;
  z-index: 1;
  transition: color 0.3s ease, transform 0.3s ease;
}

.process-card:hover .process-step-number {
  color: rgba(15, 60, 148, 0.07);
  transform: scale(1.05);
}
.process-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #EFF6FF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1E3A8A;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
}

.process-card-title {
  font-size: 18px;
  font-weight: 700;
  color: #0B2B66;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
}

.process-card-desc {
  font-size: 14px;
  color: #64748B;
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

.process-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #CBD5E1;
  padding: 0 4px;
}

@media (max-width: 1024px) {
  .process-wrapper {
    gap: 24px;
  }
  .process-card {
    max-width: 45%;
    flex: 1 1 40%;
  }
  .process-arrow {
    display: none;
  }
}

@media (max-width: 640px) {
  .process-section {
    padding: 60px 24px;
  }
  .process-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .process-card {
    max-width: 100%;
    width: 100%;
  }
}

/* ---------------------------- NEW COMPOSITE SECTION (WHY CHOOSE) --------------------------- */
.comp-section {
  padding: 60px 24px 80px;
  background-color: #F8FAFC;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.comp-container {
  width: 100%;
  max-width: 1320px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(11, 43, 102, 0.04);
  padding: 48px;
  position: relative;
  border: 1px solid #F1F5F9;
}

.comp-header {
  text-align: center;
  margin-bottom: 40px;
}

.comp-title {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 800;
  color: #0B2B66;
  margin-bottom: 12px;
}

.comp-underline {
  width: 40px;
  height: 3px;
  background: #DC2626;
  margin: 0 auto;
  border-radius: 4px;
}

.wcu-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.wcu-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px 16px;
  text-align: center;
  border: 1px solid #F1F5F9;
  box-shadow: 0 4px 12px rgba(11, 43, 102, 0.02);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wcu-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(11, 43, 102, 0.06);
}

.wcu-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.wcu-icon-blue { background: #EFF6FF; color: #1E3A8A; }
.wcu-icon-red { background: #FEF2F2; color: #DC2626; }

.wcu-card-title {
  font-size: 15px;
  font-weight: 700;
  color: #0B2B66;
  margin-bottom: 12px;
  line-height: 1.3;
}

.wcu-card-desc {
  font-size: 12.5px;
  color: #64748B;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .wcu-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 640px) {
  .comp-container { padding: 32px 20px; }
  .wcu-grid { grid-template-columns: 1fr 1fr; }
}

/* ---------------------------- DREAM REALITY CTA SECTION --------------------------- */
.dream-section {
  width: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 24px;
  overflow: hidden;
  position: relative;
  background-color: #041230;
}

.dream-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.dream-content {
  max-width: 580px;
  position: relative;
  z-index: 2;
}

.dream-title {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 20px;
}

.dream-title span {
  color: #EF4444; 
}

.dream-rule {
  width: 60px;
  height: 4px;
  background: #EF4444;
  border-radius: 4px;
  margin-bottom: 24px;
}

.dream-subtitle {
  font-size: 18px;
  color: #E2E8F0;
  line-height: 1.6;
  margin-bottom: 40px;
}

.dream-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(90deg, #DC2626 0%, #EF4444 100%);
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 36px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.4), inset 0 2px 4px rgba(255,255,255,0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dream-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 40px rgba(220, 38, 38, 0.6), inset 0 2px 4px rgba(255,255,255,0.4);
}

.dream-social {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 48px;
}

.dream-avatars {
  display: flex;
  align-items: center;
}

.dream-avatars img, .dream-avatar-plus {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #061A40; 
  margin-left: -16px;
  object-fit: cover;
}

.dream-avatars img:first-child {
  margin-left: 0;
}

.dream-avatar-plus {
  background: #2563EB;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  z-index: 1;
}

.dream-social-text {
  font-size: 15px;
  color: #CBD5E1;
  line-height: 1.4;
}

.dream-social-text strong {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}

.dream-image-col {
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
}

.dream-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
  transform: translate(120px, 80px); 
}

@media (max-width: 1024px) {
  .dream-image {
    transform: translate(0, 0); 
  }
  .dream-section {
    background-size: cover; 
  }
  .dream-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 48px;
  }
  .dream-content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dream-image-col {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .dream-section {
    padding: 60px 24px;
  }
  .dream-title {
    font-size: 32px;
  }
  .dream-btn {
    width: 100%;
    justify-content: center;
  }
  .dream-social {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
}

/* ------------------------------ ANIMATIONS -------------------------------- */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
      `}</style>

      {/* HERO SECTION */}
      <section className="visa-hero">
        
        {/* Desktop Background Image (Hidden on Mobile) */}
        <div className="hero-bg hero-bg-desktop">
          <Image 
            src={desktopBgSrc} 
            alt={`${data.name} Desktop Background`} 
            fill 
            priority 
            quality={90}
            className="hero-bg-img"
          />
        </div>

        {/* Mobile Background Image (Hidden on Desktop) */}
        <div className="hero-bg hero-bg-mobile">
          <Image 
            src={mobileBgSrc} 
            alt={`${data.name} Mobile Background`} 
            fill 
            priority 
            quality={90}
            className="hero-bg-img"
          />
        </div>

        {/* Hero Content Wrapper */}
        <div className="container visa-hero-container">
          <FadeIn>
            <div className="visa-left">
              <span className="visa-badge">
                <Globe size={16} /> STUDY DESTINATION
              </span>
              
              <h1 className="visa-title">
                <span className="visa-title-highlight" style={{ color: '#EF4444', display: 'block', marginBottom: '8px' }}>
                  {data.name}
                </span>
                Your Gateway to <br />
                Global Education
              </h1>

              <p className="visa-subtitle">{data.heroSubtitle}</p>

           <div className="visa-buttons">
                <a href="/free-assessment" className="btn-hero-primary">
                  Apply Now <ArrowRight size={18} />
                </a>
                <a href="#faq" className="btn-hero-secondary">
                  Free Assessment <ArrowRight size={18} />
                </a>
              </div>       
              
              <div className="visa-social-proof">
                <div className="visa-avatars">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Student" />
                </div>
                <p>Trusted by <strong>25,000+</strong> students worldwide</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS BAR (Placed slightly overlapping below the Hero so it doesn't cover the flag in background) */}
      <section className="stats-section">
        <FadeIn delay={0.2}>
          <div className="visa-stats-bar">
            <div className="visa-stat">
              <Users className="visa-stat-icon" />
              <div className="visa-stat-text">
                <strong>25,000+</strong>
                <span>Happy Students</span>
              </div>
            </div>
            <div className="visa-stat-divider" />
            <div className="visa-stat">
              <ShieldCheck className="visa-stat-icon" />
              <div className="visa-stat-text">
                <strong>98%</strong>
                <span>Visa Success Rate</span>
              </div>
            </div>
            <div className="visa-stat-divider" />
            <div className="visa-stat">
              <Globe className="visa-stat-icon" />
              <div className="visa-stat-text">
                <strong>20+</strong>
                <span>Countries</span>
              </div>
            </div>
            <div className="visa-stat-divider" />
            <div className="visa-stat">
              <Award className="visa-stat-icon" />
              <div className="visa-stat-text">
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* OVERVIEW & VISA INFO */}
      <section className="content-section" style={{ paddingTop: '100px' }}>
        <div className="content-container">
          <FadeIn>
             <h2 className="content-title">Destination Overview</h2>
             <p className="content-text">{data.overview}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
             <h2 className="content-title" style={{ marginTop: '48px' }}>Visa Information</h2>
             <p className="content-text">{data.visaInfo}</p>
          </FadeIn>
        </div>
      </section>

      {/* WHY STUDY */}
      <section 
        className="elig-wrapper"
        style={{ backgroundImage: `url(${eligibilityBg?.src || ""})` }}
      >
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div className="elig-container">
              <div className="elig-header">
                <span className="elig-badge">
                  <GraduationCap size={16} /> WHY STUDY HERE
                </span>
                <h2 className="elig-title">
                  Why Study in <span>{data.name}</span>
                </h2>
                <div className="elig-underline" />
                <p className="elig-subtitle">
                  Discover the top reasons why {data.name} is a premier destination for international students worldwide.
                </p>
              </div>

              <div className="elig-grid">
                {data.whyStudy.map((item, index) => {
                  const icons = [GraduationCap, ClipboardList, Globe, Wallet, ShieldCheck, User, FileText];
                  const Icon = icons[index % icons.length];

                  return (
                    <div key={index} className="elig-card">
                      <div className="elig-card-icon-wrap">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <div className="elig-card-content">
                        <h3 className="elig-card-title">Advantage {index + 1}</h3>
                        <p className="elig-card-desc">{item}</p>
                      </div>
                      <div className="elig-card-check">
                        <CheckCircle2 size={22} fill="#1D4ED8" color="#ffffff" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section
        className="docs-wrapper"
        style={{ backgroundImage: `url(${requireDocsBg?.src || ""})` }}
      >
        <div className="docs-container">
          <FadeIn>
            <div className="docs-top-row">
              <div className="docs-header">
                <span className="docs-badge">
                  <Award size={16} /> TOP INSTITUTIONS
                </span>
                <h2 className="docs-title">
                  Renowned <span>Universities</span>
                </h2>
                <div className="docs-underline" />
                <p className="docs-subtitle">
                  Explore globally recognized universities offering world-class education, research opportunities, and vibrant campuses.
                </p>
              </div>
            </div>

            <div className="docs-grid">
              {data.universities.map((item, index) => {
                const icons = [Award, GraduationCap, Stamp, ShieldCheck];
                const Icon = icons[index % icons.length];
                
                const splitItem = item.split(" — ");
                const title = splitItem[0];
                const desc = splitItem[1] || item;

                return (
                  <div key={index} className="docs-card">
                    <div className="docs-icon-wrap">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <div className="docs-card-content">
                      <h3 className="docs-card-title">{title}</h3>
                      <p className="docs-card-desc">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="process-section">
        <div className="process-container">
          <FadeIn>
            <div className="process-header">
              <span className="process-badge">
                <Briefcase size={16} /> CAREER PATHWAYS
              </span>
              <h2 className="process-title">
                Career <span>Opportunities</span>
              </h2>
              <div className="process-underline" />
              <p className="process-subtitle">
                Unlock incredible global work opportunities, post-study work rights, and long-term career growth in {data.name}.
              </p>
            </div>

            <div className="process-wrapper">
              {data.careers.map((item, index) => {
                const processIcons = [Briefcase, Globe, ShieldCheck, User];
                const Icon = processIcons[index % processIcons.length];
                const isEven = index % 2 !== 0;

                return (
                  <React.Fragment key={index}>
                    <div className="process-card">
                      <div className="process-step-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      
                      <div 
                        className="process-icon-wrap" 
                        style={isEven ? { background: '#FEF2F2', color: '#DC2626' } : {}}
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                      
                      <h3 className="process-card-title">Opportunity {index + 1}</h3>
                      <p className="process-card-desc">{item}</p>
                    </div>

                    {index !== data.careers.length - 1 && (
                      <div className="process-arrow">
                        <ArrowRight size={24} strokeWidth={1.5} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMPOSITE SECTION (WHY CHOOSE) */}
      <section className="comp-section">
        <div className="comp-container">
          <div className="comp-header">
            <h2 className="comp-title">Why Choose GoAbroadly?</h2>
            <div className="comp-underline" />
          </div>
          
          <div className="wcu-grid">
            <div className="wcu-card">
              <div className="wcu-icon-wrap wcu-icon-blue"><ShieldCheck size={28} strokeWidth={1.5} /></div>
              <h3 className="wcu-card-title">ICEF Certified Experts</h3>
              <p className="wcu-card-desc">Our counselors are ICEF certified with proven international placement track record.</p>
            </div>
            <div className="wcu-card">
              <div className="wcu-icon-wrap wcu-icon-blue"><Shield size={28} strokeWidth={1.5} /></div>
              <h3 className="wcu-card-title">Transparent Process</h3>
              <p className="wcu-card-desc">100% transparency in every step with regular updates and clear communication.</p>
            </div>
            <div className="wcu-card">
              <div className="wcu-icon-wrap wcu-icon-blue"><Award size={28} strokeWidth={1.5} /></div>
              <h3 className="wcu-card-title">98% Visa Success Rate</h3>
              <p className="wcu-card-desc">Consistent high success rate across thousands of student visa applications.</p>
            </div>
            <div className="wcu-card">
              <div className="wcu-icon-wrap wcu-icon-red"><Headphones size={28} strokeWidth={1.5} /></div>
              <h3 className="wcu-card-title">Free Consultation</h3>
              <p className="wcu-card-desc">Get free profile evaluation and expert advice with no hidden costs.</p>
            </div>
            <div className="wcu-card">
              <div className="wcu-icon-wrap wcu-icon-blue"><Clock size={28} strokeWidth={1.5} /></div>
              <h3 className="wcu-card-title">Dedicated Support 24/7</h3>
              <p className="wcu-card-desc">Round-the-clock support from our dedicated team whenever you need us.</p>
            </div>
            <div className="wcu-card">
              <div className="wcu-icon-wrap wcu-icon-blue"><Globe size={28} strokeWidth={1.5} /></div>
              <h3 className="wcu-card-title">Global Presence</h3>
              <p className="wcu-card-desc">Offices in multiple countries to support you locally wherever you are.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* DREAM REALITY CTA SECTION */}
      <section 
        className="dream-section"
        style={{ backgroundImage: `url(${dreamBg?.src || ""})` }}
      >
        <div className="dream-container">
          <FadeIn>
            <div className="dream-content">
              <h2 className="dream-title">
                Let's Make Your <br />
                <span>Study Abroad</span> <br />
                Dream a Reality!
              </h2>
              <div className="dream-rule" />
              <p className="dream-subtitle">
                Book your free consultation today and take the first step towards a successful future in {data.name}.
              </p>

              <a href="/free-assessment" className="dream-btn">
                Book Free Consultation <ArrowRight size={20} />
              </a>

              <div className="dream-social">
                <div className="dream-avatars">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Student" />
                  <div className="dream-avatar-plus">+2K</div>
                </div>
                <div className="dream-social-text">
                  <strong>Join 25,000+</strong><br />
                  happy students worldwide
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="dream-image-col">
              <Image 
                src={dreamIcon?.src || ""} 
                alt="Passport and Ticket" 
                width={600} 
                height={600} 
                className="dream-image"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection items={faqs} title={`${data.name} FAQ`} />
      <CTASection />
    </>
  );
}

// --- CONSTANTS DATA EXPORTS ---

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

export const countriesData: CountryPageData[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    heroImage: unsplash("photo-1513635269975-59663e0ac1ad"),
    heroSubtitle:
      "Study at world-renowned universities and unlock the two-year Graduate Route work visa in the United Kingdom.",
    overview:
      "The United Kingdom remains one of the top choices for Indian students thanks to its centuries-old academic tradition, compact one-year master's programs, and globally recognised degrees. From the historic quads of Oxford and Cambridge to the industry-facing campuses of London and Manchester, the UK offers a system that rewards focus and ambition — most postgraduate courses run just twelve months, letting students enter the workforce sooner without compromising on quality. GoAbroadly's UK specialists help you navigate UCAS and direct university applications, choose between Russell Group and modern universities, and build a Statement of Purpose that stands out in a competitive admissions cycle. We also guide you through the Confirmation of Acceptance for Studies (CAS) process and the specific financial evidence rules set by UK Visas and Immigration.",
    whyStudy: [
      "One-year master's programs that reduce overall course fees and time to graduation",
      "Home to Oxford, Cambridge, Imperial College London, and other Russell Group institutions",
      "Two-year Graduate Route visa allowing post-study work without employer sponsorship",
      "Compact geography with easy access to the rest of Europe for travel and internships",
      "Large, established Indian student community across major university cities",
      "NHS healthcare access for international students through the Immigration Health Surcharge",
    ],
    visaInfo:
      "The UK Student Visa (previously Tier 4) requires a Confirmation of Acceptance for Studies (CAS) from a licensed sponsor institution, proof of funds held for 28 consecutive days covering tuition and living costs, and a valid Academic Technology Approval Scheme (ATAS) certificate for certain STEM courses. Applicants must also pay the Immigration Health Surcharge upfront. Processing typically takes 3–8 weeks. GoAbroadly prepares your CAS-linked financial documentation, checks ATAS requirements early for technical courses, and runs mock credibility interviews so you're ready for any additional scrutiny from UKVI.",
    universities: [
      "University of Oxford and University of Cambridge — collegiate, research-intensive education",
      "Imperial College London and UCL — global leaders in STEM and medicine",
      "University of Manchester and University of Edinburgh — strong industry and research links",
      "Modern universities such as Coventry and Northumbria — offering career-focused, affordable programs",
    ],
    careers: [
      "Graduate Route visa granting two years (three for PhD holders) of unrestricted post-study work",
      "Strong finance, consulting, and technology hiring in London and other major cities",
      "Placement years and sandwich courses built into many undergraduate degree structures",
      "Skilled Worker visa sponsorship pathway for graduates securing eligible job offers",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in the United Kingdom?",
        answer:
          "UK universities primarily admit students in September, with a smaller January intake at select institutions. Applications for competitive courses and scholarships should ideally begin 9–12 months in advance.",
      },
      {
        question: "How much does it cost to study in the United Kingdom?",
        answer:
          "Tuition for international students typically ranges from £13,000–£25,000 per year depending on the course and city, with London generally more expensive for living costs. We provide a detailed budget breakdown during your free assessment.",
      },
      {
        question: "Can GoAbroadly help with UK visa rejection cases?",
        answer:
          "Yes. We review UKVI refusal notices, address specific credibility or financial evidence gaps cited, and rebuild your CAS-linked application before reapplying.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    heroImage: unsplash("photo-1467269209814-0929d798b83f"),
    heroSubtitle:
      "Access tuition-free public universities and Europe's strongest engineering economy by studying in Germany.",
    overview:
      "Germany has become a magnet for engineering, technology, and research-focused students, largely because most public universities charge little to no tuition fees — even for international students. Combined with a powerful industrial base led by companies like Siemens, BMW, and SAP, Germany offers a rare mix of academic affordability and career opportunity. English-taught master's programs, particularly in engineering and computer science, have expanded rapidly across institutions such as TU Munich and RWTH Aachen. GoAbroadly guides students through Germany's distinctive application landscape, including uni-assist evaluations, blocked account setup, and APS certification where required, ensuring your file meets each university's specific documentation standards.",
    whyStudy: [
      "Public universities with little to no tuition fees, even for international students",
      "World-class engineering, automotive, and manufacturing industry ecosystem",
      "18-month post-study job-seeker residence permit after graduation",
      "Growing number of English-taught bachelor's and master's programs",
      "Central European location with strong Erasmus and exchange partnerships",
      "Low cost of living compared to other major Western European study destinations",
    ],
    visaInfo:
      "The German National (Type D) Student Visa requires university admission confirmation, proof of financial resources via a blocked account (currently covering roughly a year of living expenses), health insurance, and — for select states or courses — an APS certificate verifying academic documents. Processing at German missions in India can take 6–12 weeks depending on the consulate. GoAbroadly assists with blocked account setup through approved providers, APS certification where mandated, and full document translation and notarisation to German consulate standards.",
    universities: [
      "Technical University of Munich and RWTH Aachen — top-ranked for engineering and technology",
      "Ludwig Maximilian University of Munich and Heidelberg University — strong research and sciences",
      "University of Mannheim — leading business and economics programs",
      "Fachhochschulen (Universities of Applied Sciences) — offering practice-oriented, industry-linked degrees",
    ],
    careers: [
      "18-month residence permit to search for qualified employment after graduation",
      "High demand for engineers, IT professionals, and skilled tradespeople across German industry",
      "EU Blue Card pathway for graduates securing qualifying job offers",
      "Strong dual-study (Duales Studium) programs combining coursework with paid work placements",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in Germany?",
        answer:
          "German universities generally follow two intakes: the winter semester starting in October and the summer semester starting in April, though winter offers a wider range of program options.",
      },
      {
        question: "How much does it cost to study in Germany?",
        answer:
          "Public university tuition is often minimal or free, though a semester contribution fee (typically €150–€350) applies. Living costs average €800–€1,000 per month depending on the city, which we detail in your personalised budget plan.",
      },
      {
        question: "Is a blocked account mandatory for the German student visa?",
        answer:
          "Yes, most applicants must open a blocked account demonstrating sufficient funds for one year of living expenses, unless covered by a scholarship or formal sponsorship. We coordinate this setup with approved providers.",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    heroImage: unsplash("photo-1502602898657-3e91760cbb34"),
    heroSubtitle:
      "Study at prestigious grandes écoles and affordable public universities in the heart of Europe.",
    overview:
      "France pairs an elite academic tradition — anchored by its grandes écoles in business and engineering — with some of the most affordable public university tuition in Western Europe. Institutions like HEC Paris, INSEAD, and Sciences Po sit alongside a wide network of public universities offering rigorous, government-subsidised education across every discipline. France's Campus France procedure adds a structured layer to the application process that international students must navigate carefully. GoAbroadly manages your Campus France registration and interview preparation, helps you select between grande école and university pathways, and builds financial and academic documentation aligned with French consulate expectations.",
    whyStudy: [
      "Globally ranked grandes écoles in business and engineering alongside affordable public universities",
      "Government-subsidised tuition keeping costs low even at public institutions",
      "Growing number of English-taught master's programs in business and technology",
      "Two-year APS (Autorisation Provisoire de Séjour) post-study work authorisation",
      "Central location with easy travel access across the European Union",
      "Rich cultural, culinary, and artistic environment enhancing the student experience",
    ],
    visaInfo:
      "Students must first complete Campus France registration and interview, followed by a Long-Stay Student Visa (VLS-TS) application requiring proof of admission, financial resources (typically around €7,380 for the year or a guarantor), accommodation proof, and health insurance. Upon arrival, the VLS-TS must be validated online with OFII within three months. GoAbroadly manages the full Campus France process, prepares candidates for the mandatory interview, and ensures OFII validation is completed correctly after arrival.",
    universities: [
      "HEC Paris and INSEAD — globally top-ranked business schools",
      "Sciences Po — leading institution for political science and international affairs",
      "Sorbonne University and Université PSL — comprehensive research universities",
      "École Polytechnique and CentraleSupélec — elite engineering grandes écoles",
    ],
    careers: [
      "APS post-study residence permit allowing up to two years to seek qualifying employment",
      "Strong hiring in luxury goods, aerospace, finance, and fashion industries",
      "Talent Passport visa route for skilled graduates and entrepreneurs",
      "Extensive alumni networks from grandes écoles supporting career placement in Europe",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in France?",
        answer:
          "Most French institutions admit students for the September intake, with a smaller January intake available at select business schools and English-taught programs.",
      },
      {
        question: "How much does it cost to study in France?",
        answer:
          "Public university tuition is heavily subsidised, often just a few hundred euros a year, while grandes écoles charge higher fees. Living costs vary by city, with Paris being the most expensive — we outline this fully in your budget assessment.",
      },
      {
        question: "Is Campus France registration mandatory for all applicants?",
        answer:
          "Yes, Indian students applying to French higher education institutions must complete the Campus France procedure, including document submission and an interview, before the visa application can proceed.",
      },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    heroImage: unsplash("photo-1590099060116-2b47c687e27a"),
    heroSubtitle:
      "Study in an English-speaking EU hub that's home to the European headquarters of major global tech companies.",
    overview:
      "Ireland has emerged as a fast-growing study destination, combining English-language instruction, EU membership, and the presence of European headquarters for companies like Google, Meta, Apple, and Pfizer. Dublin's tech and pharmaceutical corridor gives graduates direct proximity to major employers, while the Third Level Graduate Programme offers a generous runway to convert study into work experience. Irish universities are known for smaller class sizes and close student-faculty interaction compared to some larger European systems. GoAbroadly helps students navigate direct university applications, financial documentation for the Irish Naturalisation and Immigration Service (INIS), and pre-departure preparation tailored to Ireland's specific visa checklist.",
    whyStudy: [
      "English-speaking EU member state, easing both study and post-graduation integration",
      "European headquarters of Google, Meta, Apple, and other major multinationals based in Dublin",
      "Third Level Graduate Programme offering up to two years of post-study work",
      "Smaller class sizes with strong student-faculty engagement at most institutions",
      "Growing tech, pharmaceutical, and financial services job market",
      "Gateway to the EU with visa-free travel access across the Schengen area for short stays",
    ],
    visaInfo:
      "Non-EU students require a 'D' Study Visa, needing an unconditional offer letter, proof of course fee payment, evidence of at least €10,000 (or as specified) in available funds, private medical insurance, and academic transcripts. After arrival, students must register with the Garda National Immigration Bureau (GNIB) for their Irish Residence Permit. GoAbroadly prepares your full financial evidence file to INIS standards and guides you through the post-arrival GNIB registration process.",
    universities: [
      "Trinity College Dublin — Ireland's oldest and most internationally ranked university",
      "University College Dublin — strong business, engineering, and science programs",
      "University College Cork and National University of Ireland, Galway — leading regional research universities",
      "Technological University Dublin — practice-oriented programs with strong industry links",
    ],
    careers: [
      "Third Level Graduate Programme granting up to 24 months of post-study work rights",
      "High demand for talent in tech, pharmaceuticals, and financial services around Dublin",
      "Critical Skills Employment Permit pathway for graduates in in-demand occupations",
      "Direct proximity to European headquarters of major global employers",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in Ireland?",
        answer:
          "Irish universities primarily admit students in September, with limited January intakes available for select postgraduate programs.",
      },
      {
        question: "How much does it cost to study in Ireland?",
        answer:
          "Tuition fees typically range from €10,000–€25,000 per year depending on the course, with Dublin carrying the highest living costs nationally. We provide a full cost breakdown during your assessment.",
      },
      {
        question: "Do I need to register with GNIB after arriving in Ireland?",
        answer:
          "Yes, all non-EU students must register with the Garda National Immigration Bureau within the specified timeframe after arrival to obtain their Irish Residence Permit, and we guide you through this step.",
      },
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    heroImage: unsplash("photo-1534351590316-856c2190d2b7"),
    heroSubtitle:
      "Choose from hundreds of English-taught programs and a dedicated Orientation Year visa in the Netherlands.",
    overview:
      "The Netherlands offers one of the largest selections of English-taught bachelor's and master's programs in continental Europe, making it an accessible option for students who want a European education without needing to learn a new language first. Dutch universities are known for their practical, discussion-based teaching style and strong ties to industries in logistics, agri-tech, water management, and finance. The country's Orientation Year visa gives graduates a full year to find qualifying work after their studies. GoAbroadly assists students with Studielink applications, Nuffic-recognised institution selection, and IND-compliant financial documentation for a smooth visa process.",
    whyStudy: [
      "One of Europe's largest offerings of English-taught bachelor's and master's programs",
      "Practical, discussion-based teaching style with close industry collaboration",
      "One-year Orientation Year (Zoekjaar) visa for graduates seeking employment",
      "Strong specialisations in logistics, agri-tech, water management, and finance",
      "High English proficiency across Dutch society, easing day-to-day student life",
      "Excellent cycling infrastructure and compact, well-connected cities",
    ],
    visaInfo:
      "Most Dutch universities handle the residence permit (VVR) application on behalf of admitted students through the Institute of Applied Science (Nuffic) recognition system, requiring proof of admission, sufficient financial means as set by the IND, and valid health insurance. A short-stay MVV visa may also be required prior to travel depending on nationality. GoAbroadly coordinates with your chosen institution's international office to ensure the university-led visa process runs smoothly and your financial documentation meets IND thresholds.",
    universities: [
      "University of Amsterdam and Utrecht University — top-ranked comprehensive research universities",
      "Delft University of Technology — globally recognised for engineering and technology",
      "Erasmus University Rotterdam — leading business, economics, and public administration programs",
      "Universities of Applied Sciences (HBO institutions) — offering career-focused, practical degrees",
    ],
    careers: [
      "Orientation Year permit giving graduates 12 months to find qualifying employment",
      "Strong job market in logistics, agri-tech, finance, and creative industries",
      "Highly Skilled Migrant visa pathway for graduates with qualifying job offers",
      "Extensive network of multinational headquarters based in Amsterdam and Rotterdam",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in the Netherlands?",
        answer:
          "Dutch universities primarily admit students for the September intake, with a smaller February intake available at select institutions and programs.",
      },
      {
        question: "How much does it cost to study in the Netherlands?",
        answer:
          "Tuition for non-EU students typically ranges from €8,000–€20,000 per year depending on the program, with moderate living costs compared to other Western European destinations. We detail this in your personalised assessment.",
      },
      {
        question: "Does the university handle my visa application in the Netherlands?",
        answer:
          "Yes, most Dutch institutions manage the residence permit application on your behalf once you accept your offer, though you remain responsible for providing accurate financial and personal documentation, which we help prepare.",
      },
    ],
  },
  {
    slug: "sweden",
    name: "Sweden",
    heroImage: unsplash("photo-1509356843151-3e7d96225e93"),
    heroSubtitle:
      "Join an innovation-driven education system with a strong sustainability focus and high English proficiency.",
    overview:
      "Sweden has built its reputation on innovation, sustainability, and a flat, collaborative approach to education that encourages independent thinking. Home to global brands like Spotify, Ericsson, and IKEA, the country offers strong pathways into technology, design, and engineering careers. Nearly all Swedes speak fluent English, making daily life and academic collaboration seamless for international students even before they pick up any Swedish. GoAbroadly helps students navigate Sweden's centralised admissions system via universityadmissions.se, prepares the required financial documentation for the Swedish Migration Agency, and advises on scholarship opportunities that can offset tuition costs for non-EU applicants.",
    whyStudy: [
      "Innovation-driven economy with a strong sustainability and design focus",
      "Home to global companies such as Spotify, Ericsson, IKEA, and Volvo",
      "Near-universal English proficiency simplifying daily student life",
      "Collaborative, discussion-based teaching style encouraging independent thought",
      "Scholarship opportunities specifically available for non-EU students",
      "Safe, well-organised cities with strong public infrastructure and quality of life",
    ],
    visaInfo:
      "Non-EU students need a Swedish Residence Permit for Studies, applied for through the Swedish Migration Agency, requiring proof of admission, financial means covering approximately SEK 10,000+ per month for the duration of study, and comprehensive health insurance. Processing typically takes several weeks to a few months depending on the applicant's country. GoAbroadly ensures your financial evidence meets the Migration Agency's monthly threshold requirements and tracks your application status throughout processing.",
    universities: [
      "KTH Royal Institute of Technology — Sweden's leading technical university",
      "Lund University and Stockholm University — top-ranked comprehensive research institutions",
      "Chalmers University of Technology — strong engineering and applied sciences programs",
      "Stockholm School of Economics — highly regarded for business and finance",
    ],
    careers: [
      "Post-study residence permit allowing up to 12 months to seek employment after graduation",
      "Strong hiring in technology, telecommunications, design, and sustainability sectors",
      "Direct access to Nordic job markets and Scandinavian multinational employers",
      "Work permit conversion pathway for graduates securing a qualifying job offer",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in Sweden?",
        answer:
          "Swedish universities primarily admit students for the autumn intake beginning in August/September, with a smaller spring intake in January at select institutions.",
      },
      {
        question: "How much does it cost to study in Sweden?",
        answer:
          "Tuition for non-EU students ranges from SEK 80,000–140,000 per year depending on the program, though scholarships can significantly reduce this cost. We outline available options during your assessment.",
      },
      {
        question: "Are scholarships available for Indian students in Sweden?",
        answer:
          "Yes, several Swedish universities and the Swedish Institute offer scholarships specifically for non-EU students, including applicants from India. We help identify and apply for options matching your profile.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    heroImage: unsplash("photo-1501785888041-af3ef285b470"),
    heroSubtitle:
      "Study in Canada and access a Post-Graduation Work Permit of up to three years with a clear path to permanent residency.",
    overview:
      "Canada has become the top overseas study destination for Indian students, driven by its uniquely generous Post-Graduation Work Permit (PGWP) and well-defined pathways from study to permanent residency through Express Entry and provincial nominee programs. Canadian institutions combine North American teaching standards with a notably welcoming, multicultural environment across cities like Toronto, Vancouver, and Montreal. GoAbroadly guides students through Designated Learning Institution (DLI) selection, Study Permit documentation via the Student Direct Stream or standard stream, and long-term settlement planning — helping thousands of students turn a Canadian degree into permanent residency.",
    whyStudy: [
      "Post-Graduation Work Permit of up to three years, among the most generous globally",
      "Clear, structured pathways to permanent residency through Express Entry and PNPs",
      "Multicultural, welcoming society with a large and established Indian community",
      "Wide range of co-op and applied programs integrating paid work into the curriculum",
      "Globally recognised degrees from institutions across every province and territory",
      "Comparatively lower tuition costs than the US for similar quality of education",
    ],
    visaInfo:
      "A Canada Study Permit requires an acceptance letter from a Designated Learning Institution (DLI), proof of funds (via the Student Direct Stream's GIC requirement or standard financial evidence), a clean medical exam, and biometrics. The Student Direct Stream offers faster processing for eligible applicants from India who meet language and financial thresholds. GoAbroadly determines your SDS eligibility, sets up the required Guaranteed Investment Certificate (GIC), and compiles a complete Study Permit file to minimise processing delays.",
    universities: [
      "University of Toronto and University of British Columbia — globally top-ranked research universities",
      "McGill University — renowned for medicine, law, and the arts in Montreal",
      "University of Waterloo — leading co-op programs in engineering and computer science",
      "Conestoga College and Seneca Polytechnic — strong applied, career-focused diploma programs",
    ],
    careers: [
      "Post-Graduation Work Permit valid for up to three years depending on program length",
      "Express Entry and Provincial Nominee Program pathways to permanent residency",
      "High demand for skilled workers in technology, healthcare, and skilled trades",
      "Co-op and internship programs embedded directly into many diploma and degree curricula",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in Canada?",
        answer:
          "Canadian institutions offer three main intakes — Fall (September), Winter (January), and Summer (May) — with Fall being the largest and most competitive for popular programs.",
      },
      {
        question: "How much does it cost to study in Canada?",
        answer:
          "Tuition typically ranges from CAD 15,000–35,000 per year depending on the program and institution, with living costs varying by province. We provide a full personalised budget during your assessment.",
      },
      {
        question: "Can studying in Canada lead to permanent residency?",
        answer:
          "Yes, many students use their Canadian degree and subsequent PGWP work experience to qualify for permanent residency through Express Entry or a Provincial Nominee Program, and we help plan this pathway from the outset.",
      },
    ],
  },
  {
    slug: "usa",
    name: "United States",
    heroImage: unsplash("photo-1496442226666-8d4d0e62e6e9"),
    heroSubtitle:
      "Access the world's largest higher education system and Optional Practical Training in the United States.",
    overview:
      "The United States remains home to the largest concentration of top-ranked universities in the world, offering unmatched breadth in research funding, program specialisations, and campus resources. From Ivy League institutions to large public research universities and specialised STEM-focused colleges, the sheer scale of choice allows students to find a precise fit for their academic and career goals. Optional Practical Training (OPT), extended to 36 months for STEM graduates, gives students meaningful runway to gain US work experience. GoAbroadly supports students through the demanding US application process — SAT/GRE/GMAT strategy, SEVIS registration, I-20 documentation, and F-1 visa interview preparation at the US Embassy or Consulate.",
    whyStudy: [
      "Largest and most diverse higher education system with unmatched program breadth",
      "Home to the majority of the world's top-ranked universities and research institutions",
      "Optional Practical Training extendable to 36 months for eligible STEM graduates",
      "Extensive scholarship, assistantship, and research funding opportunities at graduate level",
      "Strong entrepreneurial ecosystem, particularly in technology and venture-backed sectors",
      "Large, well-established Indian student and professional community nationwide",
    ],
    visaInfo:
      "The F-1 Student Visa requires an I-20 form from a SEVP-certified institution, payment of the SEVIS I-901 fee, proof of sufficient financial resources for the first year of study, and a successful visa interview at a US Embassy or Consulate demonstrating strong home-country ties and genuine study intent. Visa interview outcomes are decided on the spot, making preparation critical. GoAbroadly runs intensive mock interview sessions, reviews I-20 and financial documentation for consistency, and prepares students for the specific interview style of Indian consulate locations.",
    universities: [
      "Ivy League institutions such as Harvard, Yale, and Columbia — globally elite, research-intensive",
      "Massachusetts Institute of Technology and Stanford University — world leaders in STEM and innovation",
      "University of California system — top-ranked public research universities across multiple campuses",
      "Specialised STEM-focused universities — offering strong graduate assistantship and funding opportunities",
    ],
    careers: [
      "Optional Practical Training (OPT) offering 12 months of work authorisation, extendable to 36 months for STEM fields",
      "Access to the world's largest technology, finance, and consulting job markets",
      "H-1B specialty occupation visa pathway for graduates securing employer sponsorship",
      "Strong graduate assistantship and research funding opportunities offsetting tuition costs",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in the United States?",
        answer:
          "US universities primarily admit students for the Fall intake (August/September), with a smaller Spring intake (January) available at many institutions for select programs.",
      },
      {
        question: "How much does it cost to study in the United States?",
        answer:
          "Tuition varies enormously by institution type, ranging from around USD 20,000 at public universities to over USD 60,000 at private institutions annually. We build a personalised, realistic budget during your assessment.",
      },
      {
        question: "How important is the F-1 visa interview for US applications?",
        answer:
          "Extremely important — the F-1 visa interview outcome is typically decided on the spot by the consular officer, making thorough preparation on financial and academic intent essential. We conduct multiple mock interview rounds ahead of your appointment.",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    heroImage: unsplash("photo-1506973035872-a4ec16b8e8d9"),
    heroSubtitle:
      "Study in Australia and access the Temporary Graduate visa with strong outcomes across every major city.",
    overview:
      "Australia combines globally ranked universities with a Temporary Graduate visa system that gives students dedicated time to gain local work experience after their studies, with duration varying by qualification level and study location. Cities like Sydney, Melbourne, Brisbane, and Adelaide offer high living standards, strong graduate employment outcomes, and increasingly, regional study incentives that extend post-study work rights further. Australia's points-based skilled migration system also gives graduates a well-defined route toward permanent residency in in-demand occupations. GoAbroadly helps students navigate the Genuine Temporary Entrant (now Genuine Student) requirement, GTE/GS statement writing, and Confirmation of Enrolment (CoE) documentation central to a successful student visa outcome.",
    whyStudy: [
      "Temporary Graduate visa offering dedicated post-study work rights, extended further for regional study",
      "Home to Group of Eight universities with strong global rankings and research output",
      "Points-based skilled migration system offering a defined path to permanent residency",
      "High quality of life consistently ranked among the world's most liveable cities",
      "Strong industry placement and work-integrated learning components in many degrees",
      "Large, well-established Indian student community across every major Australian city",
    ],
    visaInfo:
      "The Australian Student Visa (subclass 500) requires a Confirmation of Enrolment (CoE) from a registered institution, a Genuine Student (GS) statement explaining your study intent and circumstances, proof of financial capacity covering tuition and living costs, Overseas Student Health Cover (OSHC), and English proficiency test results. The GS requirement places significant weight on a well-articulated, individualised statement. GoAbroadly works closely with students to draft a strong, authentic GS statement and compiles CoE-aligned financial evidence that meets Department of Home Affairs standards.",
    universities: [
      "University of Melbourne and University of Sydney — top-ranked Group of Eight institutions",
      "Australian National University — Australia's highest-ranked university for research",
      "University of New South Wales — strong engineering, business, and technology programs",
      "Monash University and University of Queensland — comprehensive research universities with global partnerships",
    ],
    careers: [
      "Temporary Graduate visa (subclass 485) offering post-study work rights that vary by qualification and study location",
      "Points-tested skilled migration pathway for graduates in occupations on the relevant skills list",
      "Strong hiring in mining, healthcare, engineering, and financial services sectors",
      "Regional study incentives offering extended post-study work rights outside major capital cities",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in Australia?",
        answer:
          "Australian universities primarily offer two intakes — February/March and July — with some institutions also offering a smaller November intake for select courses.",
      },
      {
        question: "How much does it cost to study in Australia?",
        answer:
          "Tuition fees typically range from AUD 20,000–45,000 per year depending on the course and institution, with living costs varying by city. We provide a complete, personalised budget during your assessment.",
      },
      {
        question: "What is the Genuine Student requirement for the Australian visa?",
        answer:
          "The Genuine Student (GS) requirement asks applicants to demonstrate authentic study intent through a written statement addressing their circumstances, course choice, and post-study plans — we help you draft a compelling, honest GS statement.",
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    heroImage: unsplash("photo-1469521669690-753a208814e5"),
    heroSubtitle:
      "Study in a safe, welcoming country known for practical education and generous post-study work visa options.",
    overview:
      "New Zealand offers a distinctly practical, hands-on approach to education, with strong emphasis on applied learning across agriculture, hospitality, engineering, and IT. Its compact size means students benefit from close relationships with lecturers and a genuinely welcoming, safe environment consistently ranked among the world's most peaceful countries. The Post-Study Work Visa provides graduates dedicated time to gain New Zealand work experience, with pathways toward residency for those in skilled roles. GoAbroadly helps students navigate Immigration New Zealand's (INZ) requirements, from Offer of Place documentation to financial evidence and the Pastoral Care Code compliance that New Zealand institutions must meet for international students.",
    whyStudy: [
      "Practical, hands-on education style with strong applied and industry-linked programs",
      "Consistently ranked among the world's safest and most welcoming countries",
      "Post-Study Work Visa providing dedicated time to gain local work experience",
      "Compact class sizes with close student-lecturer relationships at most institutions",
      "Strong specialisations in agriculture, hospitality, engineering, and information technology",
      "Pastoral Care Code ensuring structured support systems for international students",
    ],
    visaInfo:
      "The New Zealand Student Visa requires an Offer of Place from an accredited institution, evidence of sufficient funds (currently around NZD 20,000 per year or as specified), a return air ticket or sufficient funds to purchase one, and medical/character clearances for longer courses. Immigration New Zealand also verifies genuine intent to study through supporting evidence. GoAbroadly compiles a compliant financial and intent-based application, coordinating directly with your institution's international office throughout the process.",
    universities: [
      "University of Auckland — New Zealand's highest-ranked and largest university",
      "University of Otago — New Zealand's oldest university, strong in health sciences",
      "Victoria University of Wellington — leading programs in law, humanities, and public policy",
      "Auckland University of Technology — practice-oriented programs with strong industry links",
    ],
    careers: [
      "Post-Study Work Visa allowing graduates to gain local work experience after completing their course",
      "Skilled migrant pathway for graduates in occupations aligned with New Zealand's skills shortage list",
      "Strong demand in agriculture, hospitality management, engineering, and IT sectors",
      "Practical, industry-linked degree structures improving graduate employability",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in New Zealand?",
        answer:
          "New Zealand universities primarily admit students in the February/March intake, with a secondary July intake available at several institutions for select programs.",
      },
      {
        question: "How much does it cost to study in New Zealand?",
        answer:
          "Tuition typically ranges from NZD 22,000–35,000 per year depending on the course, with living costs generally lower than Australia. We outline a full budget plan during your free assessment.",
      },
      {
        question: "Does New Zealand offer a post-study work visa?",
        answer:
          "Yes, eligible graduates can apply for a Post-Study Work Visa that provides time to gain local work experience, with conditions depending on qualification level and study location — we confirm the specifics for your chosen course.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    heroImage: unsplash("photo-1525621488876-890f85be049c"),
    heroSubtitle:
      "Study at Asia's leading education hub with strong global university partnerships and career pathways.",
    overview:
      "Singapore has positioned itself as Asia's premier education hub, combining rigorous academic standards with deep partnerships between local institutions and top global universities. Its strategic location, political stability, and role as a regional headquarters for finance, technology, and logistics companies make it an attractive base for students seeking exposure to both Asian and Western business practices. The compact city-state offers a uniquely efficient, safe, and multicultural environment for international students. GoAbroadly helps students navigate Singapore's Student's Pass application through the Immigration and Checkpoints Authority (ICA), institution-specific admission requirements, and financial documentation tailored to Singapore's structured visa system.",
    whyStudy: [
      "Asia's leading education hub with deep partnerships between local and global universities",
      "Strategic base for regional headquarters in finance, technology, and logistics",
      "Politically stable, safe, and highly efficient multicultural environment",
      "Strong emphasis on research commercialisation and industry collaboration",
      "Compact city-state offering easy access to the broader Southeast Asian region",
      "High English proficiency across academic and professional settings",
    ],
    visaInfo:
      "International students require a Student's Pass, applied for through the Immigration and Checkpoints Authority (ICA) after receiving an offer from an approved institution. Requirements include the institution's electronic submission via SOLAR (Student's Pass On-Line Application & Registration), proof of financial capacity, and a valid passport. Most universities coordinate the SOLAR submission directly on the student's behalf. GoAbroadly ensures your institution's SOLAR application is submitted correctly and that your supporting financial documentation meets ICA standards.",
    universities: [
      "National University of Singapore (NUS) — Asia's top-ranked comprehensive research university",
      "Nanyang Technological University (NTU) — globally leading in engineering and technology",
      "Singapore Management University — strong business, law, and social sciences programs",
      "Singapore Institute of Technology — applied degrees developed with international university partners",
    ],
    careers: [
      "Strong regional headquarters presence for finance, technology, and logistics multinationals",
      "Work pass pathways, including the Employment Pass, for graduates securing qualifying roles",
      "Direct exposure to both Southeast Asian and global business networks",
      "High employability driven by close university-industry research collaboration",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in Singapore?",
        answer:
          "Most Singapore universities follow a primary August intake, with some polytechnic and private institution programs offering additional intakes throughout the year.",
      },
      {
        question: "How much does it cost to study in Singapore?",
        answer:
          "Tuition fees vary by institution type, typically ranging from SGD 20,000–40,000 per year, with living costs among the higher end in the region. We provide a detailed cost breakdown during your assessment.",
      },
      {
        question: "Does the university handle my Student's Pass application in Singapore?",
        answer:
          "Yes, most Singapore institutions submit the Student's Pass application through the SOLAR system on your behalf once you accept your offer, though accurate supporting documentation from you remains essential.",
      },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    heroImage: unsplash("photo-1512453979798-5ea266f8880c"),
    heroSubtitle:
      "Study at international branch campuses in Dubai and access tax-free income in a fast-growing global business hub.",
    overview:
      "Dubai has rapidly grown into a distinctive study destination through its network of international branch campuses, allowing students to earn UK, Australian, or US-accredited degrees without leaving the region — often at a lower overall cost than studying at the home campus abroad. As a global business, logistics, and tourism hub, Dubai offers immediate exposure to multinational companies alongside a genuinely multicultural, English-speaking environment. The absence of personal income tax adds further appeal for students planning to build a career in the UAE after graduation. GoAbroadly guides students through UAE entry permit and student visa sponsorship processes, branch campus selection, and the specific documentation required by Dubai's education free zones such as Dubai International Academic City.",
    whyStudy: [
      "International branch campuses of UK, Australian, and US universities offering globally accredited degrees",
      "Zero personal income tax, enhancing take-home earnings during and after study",
      "Global hub for business, logistics, tourism, and finance with strong multinational presence",
      "Genuinely multicultural, English-speaking environment with residents from over 200 nationalities",
      "Modern, safe, and well-connected city infrastructure across Dubai's education free zones",
      "Shorter, more affordable pathway to a foreign-accredited degree compared to studying overseas",
    ],
    visaInfo:
      "International students typically receive a UAE Student Visa sponsored by their educational institution, requiring proof of admission, a valid passport, medical fitness test results, and passport-sized photographs meeting UAE specifications. Some students may alternatively be sponsored by a parent or relative residing in the UAE. Processing is generally faster than many Western destinations, often completed within a few weeks. GoAbroadly coordinates directly with your chosen institution's sponsorship office and ensures your medical and documentation requirements are completed efficiently ahead of enrolment.",
    universities: [
      "Middlesex University Dubai and Heriot-Watt University Dubai — established UK branch campuses",
      "University of Wollongong in Dubai — accredited Australian branch campus with strong business programs",
      "American University in Dubai — US-style liberal arts and professional education",
      "Dubai International Academic City — dedicated education free zone hosting multiple international institutions",
    ],
    careers: [
      "Zero personal income tax significantly boosting effective take-home salary after graduation",
      "Direct access to multinational headquarters across logistics, finance, tourism, and real estate",
      "Employment visa sponsorship pathways for graduates securing UAE-based job offers",
      "Strong internship culture connecting branch campus students with regional employers",
    ],
    faqs: [
      {
        question: "What are the main intakes for studying in Dubai?",
        answer:
          "Most Dubai branch campuses follow the same academic calendar as their home institution, typically offering September and January intakes, with some also offering a May intake for select programs.",
      },
      {
        question: "How much does it cost to study in Dubai?",
        answer:
          "Tuition fees are often lower than the home campus abroad, typically ranging from AED 40,000–90,000 per year depending on the program, with moderate living costs. We provide a full personalised budget during your assessment.",
      },
      {
        question: "Are degrees from Dubai branch campuses recognised internationally?",
        answer:
          "Yes, branch campuses in Dubai typically award the same accredited degree as their home institution in the UK, Australia, or the US, recognised globally in the same way as the original campus qualification.",
      },
    ],
  },
];

export function getCountryBySlug(slug: string): CountryPageData | undefined {
  return countriesData.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countriesData.map((c) => c.slug);
}