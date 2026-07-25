"use client";
import React, { useState } from "react";
import Image from "next/image";
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
  User
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import type { VisaPageData } from "@/constants/visa-types-data";
import { FaPlane } from "react-icons/fa6";

/**
 * NOTE ON ASSETS
 * ServicePageTemplate uses two static decorative background images
 * (herobg.png / overviewbg.png) that live under `@/assets/images/services`.
 * Visa pages don't have their own decorative backgrounds in VisaPageData,
 * so this template reuses the exact same service backgrounds so the look
 * is 100% identical. If you'd rather have visa-specific backgrounds, drop
 * two images at the paths below (same dimensions/aspect as the service
 * ones) and nothing else needs to change.
 */
import heroBg from "@/assets/images/services/herobg.png";
import overviewBg from "@/assets/images/services/overviewbg.png";
import eligibilityBg from "@/assets/images/visatypes/eligibilitybg.png";
import requireDocsBg from "@/assets/images/visatypes/requiredocsbg.png";
import dreamBg from "@/assets/images/visatypes/dreambg.png";
import dreamIcon from "@/assets/images/visatypes/dreamicon.png";
import { 
  FolderOpen,
  Shield, 
  Headphones, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus 
} from "lucide-react";
import TestimonialsSection from "../home/TestimonialsSection";

type Props = { data: VisaPageData };

export default function VisaPageTemplate({ data }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  const faqs = data.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  // Cycled icon set for the "requirements/eligibility/documents" cards
  // (VisaPageData only stores plain strings for these, unlike the service
  // page's `benefits` array which ships its own icon per item).
  const cardIcons = [ShieldCheck, ClipboardList, FileText, Stamp, CheckCircle2];

  return (
    <>
      <style>{`
/* ==========================================================================
   VisaPageTemplate styles (scoped via visa- prefix, embedded inline)
   Mirrors ServicePageTemplate 1:1 — same breakpoints, spacing, fonts, cards.
   Desktop  : > 1024px  (background images ON, fixed/stable sizing)
   Tablet   : 641px - 1024px (background images OFF)
   Mobile   : <= 640px  (background images OFF)
   ========================================================================== */

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
/* --------------------------------- HERO --------------------------------- */
.visa-hero {
  padding: 60px 0 80px;
  position: relative;
  background-color: #FAFAFC;
  background-image: var(--hero-bg);
  background-size: cover;
  background-position: center top;
}
.visa-hero-container {
  display: grid;
  grid-template-columns: 0.65fr 1.35fr; /* Gives maximum possible width to the image */
  align-items: center;
  gap: 40px; 
}

.visa-left {
  max-width: 500px; /* Tightened slightly to allow the image to expand further left */
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
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* Forces modern font */
  font-size: clamp(32px, 4vw, 52px);
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
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
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

.visa-right {
  position: relative;
  transform: translate(154px, -40px); /* Adjust these values: first is X (right), second is Y (up) */
}

.visa-image-outer {
  background: white;
  padding: 14px;
  border-radius: 32px;
  box-shadow: 0 24px 50px rgba(11, 43, 102, 0.08);
  position: relative;
}

.visa-image-wrapper {
  position: relative;
  width: 100%;
  height: 460px;
  border-radius: 24px;
  overflow: hidden;
}
.visa-floating-card {
  position: absolute;
  bottom: 32px;
  right: -32px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 24px 28px;
  box-shadow: 0 20px 40px rgba(11, 43, 102, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.6);
  width: auto;
  min-width: 290px;
  z-index: 10;
}

.vfc-title {
  font-size: 15px;
  color: #1E3A8A;
  margin-bottom: 12px;
  font-weight: 600;
}

.vfc-body {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.vfc-stats {
  display: flex;
  flex-direction: column;
}

.vfc-value {
  font-size: 46px;
  color: #0B2B66;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 4px;
  letter-spacing: -1px;
}

.vfc-sub {
  font-size: 14px;
  color: #64748B;
  font-weight: 500;
}

.vfc-graph {
  width: 110px;
  height: 45px;
  overflow: visible;
  margin-bottom: 6px;
}

/* ------------------------------- STATS BAR ----------------------------- */
.visa-stats-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 100px;
  padding: 24px 48px;
  margin-top: 60px;
  box-shadow: 0 12px 30px rgba(11, 43, 102, 0.04);
  border: 1px solid #F1F5F9;
  flex-wrap: wrap;
  gap: 20px;
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
  .visa-hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .visa-left {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .visa-subtitle {
    margin: 0 auto 36px;
  }
  .visa-buttons, .visa-social-proof {
    justify-content: center;
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
  .visa-floating-card {
    right: 24px;
  }
}

@media (max-width: 640px) {
  .visa-hero {
    padding: 40px 0 60px;
  }
  .visa-title {
    font-size: 32px;
  }
  .visa-buttons {
    flex-direction: column;
    width: 100%;
  }
  .visa-buttons > * {
    width: 100%;
    justify-content: center;
  }
  .visa-image-wrapper {
    height: 320px;
  }
  .visa-floating-card {
    display: none; /* Hide on very small screens to avoid overflow */
  }
  .visa-stats-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    border-radius: 16px;
    padding: 24px;
  }
}

/* ------------------------------ OVERVIEW -------------------------------- *//* ------------------------------ OVERVIEW -------------------------------- */

.visa-overview-card {
  position: relative;
  width: 100vw;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

@media (min-width: 1025px) {
  .visa-overview-card {
    background-image: linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), var(--overview-bg);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
}

.visa-overview-overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.08);
  z-index: 1;
}

.visa-overview-inner {
  display: grid;
  grid-template-columns: 160px 1fr;
  align-items: center;
  gap: 48px;
  height: 100%;
  padding-left: 40px;
  position: relative;
  z-index: 2;
}

.visa-overview-icon {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f8fbff, #edf4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6ecf8;
  box-shadow: 0 12px 30px rgba(8, 31, 92, 0.08);
  z-index: 2;
}

.visa-overview-content {
  max-width: 760px;
  z-index: 2;
}

.visa-overview-title {
  font-size: clamp(26px, 3.2vw, 42px);
  font-weight: 700;
  color: #081f5c;
  margin-bottom: 14px;
}

.visa-overview-underline {
  width: 78px;
  height: 5px;
  border-radius: 20px;
  background: #ff3b3b;
  margin-bottom: 24px;
}

.visa-overview-text {
  font-size: 17px;
  line-height: 1.9;
  color: #4b5563;
}

@media (max-width: 1024px) {
  .visa-overview-card {
    min-height: unset;
    padding: 56px 0;
  }
  .visa-overview-inner {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 24px;
    padding-left: 0;
  }
  .visa-overview-icon {
    width: 110px;
    height: 110px;
  }
  .visa-overview-underline {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 640px) {
  .visa-overview-card {
    padding: 40px 0;
  }
  .visa-overview-icon {
    width: 88px;
    height: 88px;
  }
  .visa-overview-text {
    font-size: 15px;
    line-height: 1.8;
  }
}

/* ------------------------------- SECTIONS -------------------------------- */

.visa-section {
  padding: 90px 0;
  background: #fff;
}

@media (max-width: 1024px) {
  .visa-section {
    padding: 64px 0;
  }
}

@media (max-width: 640px) {
  .visa-section {
    padding: 44px 0;
  }
}

.visa-section-head {
  text-align: center;
  margin-bottom: 55px;
}

@media (max-width: 640px) {
  .visa-section-head {
    margin-bottom: 34px;
  }
}

.visa-section-title {
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 700;
  color: #0f172a;
}

.visa-section-rule {
  width: 70px;
  height: 4px;
  background: #ef4444;
  margin: 14px auto 0;
  border-radius: 20px;
}

/* -------------------------------- CARD GRID (eligibility/requirements/documents) ------------------------------- */

.visa-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 220px));
  gap: 24px;
  justify-content: center;
  align-items: stretch;
  width: 100%;
}

@media (min-width: 1025px) {
  .visa-cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .visa-cards-grid.visa-cards-grid-wide {
    grid-template-columns: repeat(4, 1fr);
  }
  .visa-card {
    min-height: 200px;
    padding: 26px 16px 28px;
  }
  .visa-card-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 18px;
  }
  .visa-card-text {
    font-size: 15px;
    line-height: 1.6;
  }
}

.visa-card {
  background: #fff;
  border-radius: 18px;
  padding: 30px 24px 34px;
  width: 100%;
  margin: 0;
  text-align: center;
  border: 1px solid #edf1f7;
  box-shadow: 0 6px 18px rgba(8, 31, 92, 0.06);
  position: relative;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.visa-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 22px 40px rgba(8, 31, 92, 0.16);
}

.visa-card-icon {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background: #fdf2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: #ef4444;
  font-weight: 700;
  font-size: 15px;
  transition: transform 0.35s ease, background 0.35s ease;
}

.visa-card:hover .visa-card-icon {
  transform: scale(1.12) rotate(-4deg);
  background: #ffe3e3;
}

.visa-card-text {
  font-size: 15.5px;
  line-height: 1.75;
  color: #334155;
  font-weight: 600;
  flex: 1;
  display: flex;
  align-items: center;
}

.visa-card-accent {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.visa-card:hover .visa-card-accent {
  transform: scaleX(1);
}

.visa-card-accent-red {
  background: #ef4444;
}

.visa-card-accent-blue {
  background: #1e40af;
}

@media (max-width: 1024px) {
  .visa-cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  }
  .visa-card {
    min-height: 220px;
    padding: 30px 22px 34px;
  }
}

@media (max-width: 640px) {
  .visa-cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
  .visa-card {
    min-height: 200px;
    padding: 24px 18px 28px;
  }
  .visa-card-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
  }
  .visa-card-text {
    font-size: 13.5px;
    line-height: 1.6;
  }
}
/* ------------------------------- ELIGIBILITY NEW -------------------------------- */
/* ------------------------------- ELIGIBILITY NEW -------------------------------- */
/* ------------------------------- ELIGIBILITY NEW -------------------------------- */
/* ------------------------------- ELIGIBILITY NEW -------------------------------- */
/* ------------------------------- ELIGIBILITY NEW -------------------------------- */
.elig-wrapper {
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  /* Apply background to the full-width wrapper */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.elig-container {
  width: 100%;
  max-width: 1280px; /* Keeps the content aligned nicely */
  /* If you want the card to have a slight white transparency, use rgba. Otherwise, leave transparent */
  // background-color: rgba(255, 255, 255, 0.6); 
  // backdrop-filter: blur(8px); /* Optional: adds a nice glass effect over the background */
  // border-radius: 32px;
  padding: 64px 80px;
  // box-shadow: 0 12px 40px rgba(11, 43, 102, 0.06);
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
  .elig-grid {
    grid-template-columns: 1fr;
  }
  .elig-container {
    padding: 40px 24px;
    border-radius: 24px;
  }
}

/* ---------------------------- REQUIRED DOCUMENTS NEW --------------------------- */
/* ---------------------------- REQUIRED DOCUMENTS NEW --------------------------- */
/* ---------------------------- REQUIRED DOCUMENTS NEW --------------------------- */
.docs-wrapper {
  padding: 60px 24px; 
  display: flex;
  justify-content: center;
  background-size: 100% 100%; /* This stretches the image to full width and full height */
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

.docs-illustration {
  display: none; /* Hidden by default, easy to drop an image in if you have the 3D folder later */
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  font-size: 15px;
  font-weight: 700;
  color: #0B2B66;
  margin-bottom: 4px;
}

.docs-card-desc {
  font-size: 13.5px;
  color: #64748B;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .docs-illustration {
    display: block;
    max-width: 300px;
    margin-bottom: -20px;
  }
}

@media (max-width: 1024px) {
  .docs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .docs-grid {
    grid-template-columns: 1fr;
  }
  .docs-wrapper {
    padding: 60px 24px;
  }
}
/* -------------------------------- PROCESS NEW DESIGN (GLASSMORPHISM) -------------------------------- */
/* -------------------------------- PROCESS NEW DESIGN (GLASSMORPHISM) -------------------------------- */
.process-section {
  padding: 80px 24px;
  background: #ffffff; /* Changed back to pure white */
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
  /* Glassmorphism setup */
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
  color: rgba(15, 60, 148, 0.04); /* Light blue tint so it's visible against glass */
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
  /* ---------------------------- NEW COMPOSITE SECTION (WHY CHOOSE & FAQ) --------------------------- */
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

/* Why Choose Us Grid */
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

/* Stories & FAQ Split */
.sf-split {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 60px;
  align-items: flex-start;
}

/* Testimonials Carousel */
.stories-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0B2B66;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.nav-arrow:hover {
  background: #F8FAFC;
  color: #DC2626;
  border-color: #CBD5E1;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex: 1;
}

.story-card {
  background: #ffffff;
  border: 1px solid #F1F5F9;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(11, 43, 102, 0.02);
  display: flex;
  flex-direction: column;
  position: relative;
}

.story-quote-icon {
  color: #1E3A8A;
  opacity: 0.2;
  margin-bottom: 12px;
  font-size: 32px;
  line-height: 1;
  font-family: serif;
}

.story-text {
  font-size: 13px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 24px;
  flex: 1;
}

.story-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.story-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.story-meta h4 {
  font-size: 14px;
  font-weight: 700;
  color: #0B2B66;
  margin-bottom: 2px;
}

.story-meta p {
  font-size: 12px;
  color: #64748B;
  display: flex;
  align-items: center;
  gap: 6px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.dot {
  width: 24px;
  height: 4px;
  border-radius: 4px;
  background: #E2E8F0;
}
.dot.active { background: #DC2626; }
.dot:nth-child(2), .dot:nth-child(3) { width: 16px; background: #DBEAFE; }

/* FAQ Section */
.faq-col-header {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #0B2B66;
  margin-bottom: 24px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border: 1px solid #F1F5F9;
  border-radius: 8px;
  background: #ffffff;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.open {
  border-color: #DBEAFE;
  box-shadow: 0 4px 12px rgba(11, 43, 102, 0.03);
}

.faq-q {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #1E293B;
  user-select: none;
}

.faq-item.open .faq-q {
  color: #1E3A8A;
}

.faq-icon {
  color: #94A3B8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-item.open .faq-icon {
  color: #1E3A8A;
}

.faq-a {
  padding: 0 20px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  font-size: 13.5px;
  color: #64748B;
  line-height: 1.6;
}

.faq-item.open .faq-a {
  padding: 0 20px 16px;
  max-height: 200px;
  opacity: 1;
}

.view-all-faqs {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: 1px solid #0B2B66;
  color: #0B2B66;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  background: transparent;
  margin-top: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-all-faqs:hover {
  background: #0B2B66;
  color: #ffffff;
}

/* Responsive Overrides */
@media (max-width: 1024px) {
  .wcu-grid { grid-template-columns: repeat(3, 1fr); }
  .sf-split { grid-template-columns: 1fr; gap: 48px; }
  .stories-grid { grid-template-columns: repeat(2, 1fr); }
  .story-card:nth-child(3) { display: none; } /* Hide 3rd on tablet */
}

@media (max-width: 640px) {
  .comp-container { padding: 32px 20px; }
  .wcu-grid { grid-template-columns: 1fr 1fr; }
  .stories-grid { grid-template-columns: 1fr; }
  .story-card:nth-child(2) { display: none; } /* Hide 2nd on mobile */
  .nav-arrow { display: none; } /* Hide arrows on mobile to save space */
}
/* ---------------------------- DREAM REALITY CTA SECTION --------------------------- */
.dream-section {
  width: 100%;
  background-size: 100% 100%; /* Stretches the desktop image perfectly to the edges */
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 24px;
  overflow: hidden;
  position: relative;
  background-color: #041230; /* Deep blue fallback */
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
  color: #EF4444; /* Bright Red */
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
  /* 120px right baju khasedse, ane 50px niche (down) laavse */
  transform: translate(120px, 80px); 
}

@media (max-width: 1024px) {
  .dream-image {
    /* Tablet and mobile ma badhu reset thaine center aavi jase */
    transform: translate(0, 0); 
  }
  .dream-section {
    background-size: cover; /* Fallback to cover on tablets/mobile so it doesn't squish */
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
/* ------------------------------ ANIMATIONS -------------------------------- */
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

.visa-cards-grid > .visa-card:nth-child(1),
.visa-process-wrapper > .visa-process-card:nth-child(1) {
  animation-delay: 0.05s;
}
.visa-cards-grid > .visa-card:nth-child(2),
.visa-process-wrapper > .visa-process-card:nth-child(3) {
  animation-delay: 0.15s;
}
.visa-cards-grid > .visa-card:nth-child(3),
.visa-process-wrapper > .visa-process-card:nth-child(5) {
  animation-delay: 0.25s;
}
.visa-cards-grid > .visa-card:nth-child(4),
.visa-process-wrapper > .visa-process-card:nth-child(7) {
  animation-delay: 0.35s;
}
.visa-cards-grid > .visa-card:nth-child(5),
.visa-process-wrapper > .visa-process-card:nth-child(9) {
  animation-delay: 0.45s;
}
.visa-cards-grid > .visa-card:nth-child(6) {
  animation-delay: 0.55s;
}
`}</style>

      {/* HERO — same split layout + full-bleed decorative background as ServicePageTemplate */}
    {/* HERO */}
      <section
        className="visa-hero"
        // style={{ ["--hero-bg" as string]: `url(${heroBg.src})` } as React.CSSProperties}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="visa-hero-container">
            <FadeIn>
              <div className="visa-left">
                <span className="visa-badge">
                  <FaPlane style={{ transform: "rotate(-45deg)" }} /> YOUR JOURNEY. OUR EXPERTISE.
                </span>
<h1 className="visa-title">
                  <span className="visa-title-highlight" style={{ color: '#EF4444', display: 'block', marginBottom: '8px' }}>
                    {data.title}
                  </span>
                  Your Gateway to <br />
                  Global Education
                </h1>

                <p className="visa-subtitle">{data.heroSubtitle}</p>

                <div className="visa-buttons" style={{ display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'nowrap', alignItems: 'center' }}>
                  <a 
                    href="/free-assessment" 
                    style={{ 
                      backgroundColor: '#EF4444', 
                      color: '#ffffff', 
                      borderRadius: '50px', 
                      display: 'inline-flex', 
                      alignItems: 'center',
                      justifyContent: 'center', 
                      gap: '10px', 
                      padding: '14px 32px',
                      border: 'none',
                      whiteSpace: 'nowrap',
                      fontWeight: '600',
                      fontSize: '16px',
                      textDecoration: 'none'
                    }}
                  >
                    Apply Now <ArrowRight size={18} />
                  </a>

                  <a 
                    href="#faq" 
                    style={{ 
                      backgroundColor: '#ffffff', 
                      color: '#0B2B66', 
                      border: '1px solid #E2E8F0', 
                      borderRadius: '50px', 
                      display: 'inline-flex', 
                      alignItems: 'center',
                      justifyContent: 'center', 
                      gap: '10px', 
                      padding: '14px 32px',
                      whiteSpace: 'nowrap',
                      fontWeight: '600',
                      fontSize: '16px',
                      textDecoration: 'none'
                    }}
                  >
                    Free Assessment <ArrowRight size={18} />
                  </a>
                </div>             
                   <div className="visa-social-proof">
                  <div className="visa-avatars">
                    {/* Using unplash placeholder faces for the social proof overlap */}
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Student" />
                  </div>
                  <p>Trusted by <strong>25,000+</strong> students worldwide</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="visa-right">
                <div className="visa-image-outer">
                  <div className="visa-image-wrapper">
                    <Image
                      src={data.heroImage}
                      alt={data.title}
                      fill
                      priority
                      sizes="(max-width:1024px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  
                 {/* Floating Card: Visa Success Rate */}
                  <div className="visa-floating-card">
                    <p className="vfc-title">Visa Success Rate</p>
                    <div className="vfc-body">
                      <div className="vfc-stats">
                        <p className="vfc-value">98%</p>
                        <p className="vfc-sub">and growing</p>
                      </div>
                      <svg className="vfc-graph" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#EF4444" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M 0 40 L 15 30 L 25 35 L 40 20 L 50 26 L 65 12 L 75 18 L 95 4 L 95 50 L 0 50 Z" fill="url(#graphGrad)" />
                        <path d="M 0 40 L 15 30 L 25 35 L 40 20 L 50 26 L 65 12 L 75 18 L 95 4" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="95" cy="4" r="4" fill="#EF4444"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Stats Bar */}
          <FadeIn delay={0.4}>
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
        </div>
      </section>

      {/* OVERVIEW
      <section style={{ position: "relative", overflow: "hidden" }}>
        <FadeIn>
          <div
            className="visa-overview-card"
            style={{ ["--overview-bg" as string]: `url(${overviewBg.src})` } as React.CSSProperties}
          >
            <div className="visa-overview-overlay" />

            <div className="container visa-overview-inner">
              <div className="visa-overview-icon">
                <FileText size={56} color="#18489d" strokeWidth={1.6} />
              </div>

              <div className="visa-overview-content">
                <h2 className="visa-overview-title">Visa Overview</h2>

                <div className="visa-overview-underline" />

                <p className="visa-overview-text">{data.overview}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section> */}

      {/* ELIGIBILITY */}
  {/* ELIGIBILITY - NEW DESIGN */}
{/* ELIGIBILITY - NEW DESIGN */}
      {/* ELIGIBILITY - NEW DESIGN */}
     {/* ELIGIBILITY - NEW DESIGN */}
    {/* ELIGIBILITY - NEW DESIGN */}
      <section 
        className="elig-wrapper"
        style={{ backgroundImage: `url(${eligibilityBg.src})` }}
      >
        {/* Removed the hardcoded width: 2800px div, letting the container handle max-width naturally */}
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
          <FadeIn>
            <div className="elig-container">
              <div className="elig-header">
                <span className="elig-badge">
                  <GraduationCap size={16} /> ELIGIBILITY CRITERIA
                </span>
                <h2 className="elig-title">
                  Eligibility <span>Criteria</span>
                </h2>
                <div className="elig-underline" />
                <p className="elig-subtitle">
                  Ensure you meet the essential requirements to simplify your visa process and improve your chances of success.
                </p>
              </div>

       <div className="elig-grid">
                {data.eligibility.map((item, index) => {
                  const icons = [GraduationCap, ClipboardList, Globe, Wallet, ShieldCheck, User, FileText];
                  const Icon = icons[index % icons.length];

                  return (
                    <div key={index} className="elig-card">
                      <div className="elig-card-icon-wrap">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <div className="elig-card-content">
                        {/* Now fetching the dynamic title directly from our updated data */}
                        <h3 className="elig-card-title">{item.title}</h3>
                        
                        {/* Now fetching the dynamic description directly from our updated data */}
                        <p className="elig-card-desc">{item.description}</p>
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

      {/* REQUIREMENTS */}
      {/* <section className="visa-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <FadeIn>
            <div className="visa-section-head">
              <h2 className="visa-section-title">Requirements</h2>
              <div className="visa-section-rule" />
            </div>

            <div className="visa-cards-grid">
              {data.requirements.map((item, index) => {
                const Icon = cardIcons[index % cardIcons.length];
                return (
                  <div key={item} className="visa-card">
                    <div className="visa-card-icon">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                    <p className="visa-card-text">{item}</p>
                    <div
                      className={`visa-card-accent ${
                        index % 2 === 0 ? "visa-card-accent-blue" : "visa-card-accent-red"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section> */}

    {/* REQUIRED DOCUMENTS - NEW DESIGN */}
      <section
        className="docs-wrapper"
        style={{ backgroundImage: `url(${requireDocsBg.src})` }}
      >
        <div className="docs-container">
          <FadeIn>
            <div className="docs-top-row">
              <div className="docs-header">
                <span className="docs-badge">
                  <FolderOpen size={16} /> REQUIRED DOCUMENTS
                </span>
                <h2 className="docs-title">
                  Required <span>Documents</span>
                </h2>
                <div className="docs-underline" />
                <p className="docs-subtitle">
                  Please have the following documents ready to ensure a smooth and hassle-free visa application process.
                </p>
              </div>
              {/* Optional: Add 3D folder image here if you have it */}
              <div className="docs-illustration">
                 {/* <img src="/assets/images/visatypes/folder-3d.png" alt="Documents Folder" style={{ width: "100%", height: "auto" }} /> */}
              </div>
            </div>

            <div className="docs-grid">
              {data.documents.map((item, index) => {
                const icons = [FileText, GraduationCap, Stamp, Wallet, User, ShieldCheck, FaPlane, ClipboardList];
                const Icon = icons[index % icons.length];

                return (
                  <div key={index} className="docs-card">
                    <div className="docs-icon-wrap">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <div className="docs-card-content">
                      <h3 className="docs-card-title">{item.title}</h3>
                      <p className="docs-card-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS */}
   {/* PROCESS - NEW DESIGN */}
      <section className="process-section">
        <div className="process-container">
          <FadeIn>
            <div className="process-header">
              <span className="process-badge">
                <Stamp size={16} /> STEP-BY-STEP
              </span>
              <h2 className="process-title">
                Application <span>Process</span>
              </h2>
              <div className="process-underline" />
              <p className="process-subtitle">
                Follow these simple steps to ensure a smooth and successful visa application journey from start to finish.
              </p>
            </div>

            <div className="process-wrapper">
              {data.process.map((item, index) => {
                // Cycle through relevant icons for the steps
                const processIcons = [ClipboardList, User, FileText, Stamp, CheckCircle2];
                const Icon = processIcons[index % processIcons.length];
                
                // Alternate between blue and red accents just like the previous design
                const isEven = index % 2 !== 0;

                return (
                  <>
                    <div key={item.step} className="process-card">
                      <div className="process-step-number">
                        {String(item.step).padStart(2, "0")}
                      </div>
                      
                      <div 
                        className="process-icon-wrap" 
                        style={isEven ? { background: '#FEF2F2', color: '#DC2626' } : {}}
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                      
                      <h3 className="process-card-title">{item.title}</h3>
                      <p className="process-card-desc">{item.description}</p>
                    </div>

                    {index !== data.process.length - 1 && (
                      <div className="process-arrow" key={`arrow-${item.step}`}>
                        <ArrowRight size={24} strokeWidth={1.5} />
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
{/* ---------------- NEW COMPOSITE SECTION ---------------- */}
      <section className="comp-section">
        
        {/* WHY CHOOSE US PANEL */}
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
<TestimonialsSection/>
{/* DREAM REALITY SECTION (Replaces Old CTASection) */}
      <section 
        className="dream-section"
        style={{ backgroundImage: `url(${dreamBg.src})` }}
      >
        <div className="dream-container">
          <FadeIn>
            <div className="dream-content">
              <h2 className="dream-title">
                Let's Make Your <br />
                <span>{data.category === "Study" ? "Study Abroad" : data.category === "Work" ? "Work Abroad" : "Migration"}</span> <br />
                Dream a Reality!
              </h2>
              <div className="dream-rule" />
              <p className="dream-subtitle">
                Book your free consultation today and take the first step towards a successful future.
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
                src={dreamIcon.src} 
                alt="Passport and Ticket" 
                width={600} 
                height={600} 
                className="dream-image"
              />
            </div>
          </FadeIn>
        </div>
      </section>
      {/* <CTASection /> */}
      <FAQSection items={faqs} title={`${data.title} FAQ`} />

      <CTASection />
    </>
  );
}