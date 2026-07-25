  import Image from "next/image";
  import heroBg from "@/assets/images/services/herobg.png";
  import overviewBg from "@/assets/images/services/overviewbg.png";
  import overviewIcon from "@/assets/images/services/service-overview-icon.png";
  import { CheckCircle2 } from "lucide-react";
  import FadeIn from "@/components/animations/FadeIn";
  import Button from "@/components/common/Button";
  import FAQSection from "@/components/home/FAQSection";
  import CTASection from "@/components/home/CTASection";
  import { type ServicePageData } from "@/constants/services-data";
  import { FaPlane } from "react-icons/fa6";
  import benefit1 from "@/assets/images/services/benefit1.png";
  import benefit2 from "@/assets/images/services/benefit2.png";
  import benefit3 from "@/assets/images/services/benefit3.png";
  import benefit4 from "@/assets/images/services/benefit4.png";
  import benefit5 from "@/assets/images/services/benefit5.png";
  import benefit6 from "@/assets/images/services/benefit6.png";

  import whyIcon1 from "@/assets/images/services/whyicon1.png";
  import whyIcon2 from "@/assets/images/services/whyicon2.png";
  import whyIcon3 from "@/assets/images/services/whyicon3.png";
  import whyIcon4 from "@/assets/images/services/whyicon4.png";
  import whyIcon5 from "@/assets/images/services/whyicon5.png";
  import whyIcon6 from "@/assets/images/services/whyicon6.png";
  type Props = { data: ServicePageData };

  export default function ServicePageTemplate({ data }: Props) {
  const faqs = data.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const whyIcons = [
    whyIcon1,
    whyIcon2,
    whyIcon3,
    whyIcon4,
    whyIcon5,
    whyIcon6,
  ];

    return (
      <>
        <style>{`
  /* ==========================================================================
    ServicePageTemplate styles (scoped via svc- prefix, embedded inline)
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

  .svc-hero {
    padding: 0 0 0;
    position: relative;
    overflow: hidden;
    margin-bottom: -70px;

    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
  }

  /* image only shows on real desktop widths, using the fixed 100% / 100%
    sizing the design was built for so it never stretches / restacks
    against the overview section behind it */
  @media (min-width: 1025px) {
    .svc-hero {
      background-image: var(--hero-bg);
      background-size: 100% 100%;
      background-color: transparent;
    }
  }

  .svc-hero-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    align-items: center;
    gap: 40px;
  
  }

  .svc-left {
    max-width: 560px;
  }

  .svc-badge {
    display: inline-flex;
    padding: 8px 18px;
    border-radius: 999px;
    background: #edf5ff;
    color: #18489d;
    font-weight: 600;
    margin-bottom: 24px;
    font-size: 14px;
  }

  .svc-title {
    font-size: clamp(30px, 4.4vw, 58px);
    line-height: 1.12;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 22px;
  }

  .svc-subtitle {
    font-size: clamp(15px, 1.6vw, 18px);
    color: #475569;
    line-height: 1.8;
    margin-bottom: 30px;
  }

  @media (min-width: 1025px) {
    .svc-subtitle {
      margin-bottom: 38px;
    }
  }

  .svc-buttons {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }

  .svc-buttons-mobile {
    display: none;
  }
  .svc-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .svc-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 760px;
  }

  /* ------------------------------- TABLET HERO ----------------------------- */
  @media (max-width: 1024px) {
    .svc-hero {
      padding: 32px 0 0;
      margin-bottom: -40px;
    }
    .svc-hero-container {
      grid-template-columns: 1fr;
      gap: 28px;
      text-align: center;
    }
    .svc-left {
      max-width: 100%;
    }
    .svc-buttons {
      justify-content: center;
    }
    .svc-right {
      justify-content: center;
    }
    .svc-image-wrapper {
      height: 460px;
      max-width: 560px;
    }
  }

  /* ------------------------------- MOBILE HERO ----------------------------- */
  @media (max-width: 640px) {
    .svc-hero {
      padding: 24px 0 0;
      margin-bottom: -28px;
    }

    .svc-hero-container {
      gap: 20px;
    }

    .svc-badge {
      padding: 6px 14px;
      font-size: 12px;
      margin-bottom: 16px;
    }

    .svc-subtitle {
      margin-bottom: 24px;
    }

    .svc-image-wrapper {
      height: 300px;
    }

    .svc-buttons {
      width: 100%;
      flex-direction: column;
      gap: 12px;
    }

    /* Hide desktop buttons on mobile */
    .svc-buttons-desktop {
      display: none;
    }

    /* Show buttons below image */
    .svc-buttons-mobile {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 12px;
      margin-top: 20px;
    }

    .svc-right {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  /* ------------------------------ OVERVIEW -------------------------------- */

  .svc-overview-card {
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
    .svc-overview-card {
      background-image: linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), var(--overview-bg);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
  }

  .svc-overview-overlay {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    background: rgba(255, 255, 255, 0.08);
    z-index: 1;
  }

  .svc-overview-inner {
    display: grid;
    grid-template-columns: 160px 1fr;
    align-items: center;
    gap: 48px;
    height: 100%;
    padding-left: 40px;
    position: relative;
    z-index: 2;
  }

  .svc-overview-icon {
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

  .svc-overview-content {
    max-width: 760px;
    z-index: 2;
  }

  .svc-overview-title {
    font-size: clamp(26px, 3.2vw, 42px);
    font-weight: 700;
    color: #081f5c;
    margin-bottom: 14px;
  }

  .svc-overview-underline {
    width: 78px;
    height: 5px;
    border-radius: 20px;
    background: #ff3b3b;
    margin-bottom: 24px;
  }

  .svc-overview-text {
    font-size: 17px;
    line-height: 1.9;
    color: #4b5563;
  }

  @media (max-width: 1024px) {
    .svc-overview-card {
      min-height: unset;
      padding: 56px 0;
    }
    .svc-overview-inner {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
      gap: 24px;
      padding-left: 0;
    }
    .svc-overview-icon {
      width: 110px;
      height: 110px;
    }
    .svc-overview-underline {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 640px) {
    .svc-overview-card {
      padding: 40px 0;
    }
    .svc-overview-icon {
      width: 88px;
      height: 88px;
    }
    .svc-overview-text {
      font-size: 15px;
      line-height: 1.8;
    }
  }

  /* ------------------------------- SECTIONS -------------------------------- */

  .svc-section {
    padding: 90px 0;
    background: #fff;
  }

  @media (max-width: 1024px) {
    .svc-section {
      padding: 64px 0;
    }
  }

  @media (max-width: 640px) {
    .svc-section {
      padding: 44px 0;
    }
  }

  .svc-section-head {
    text-align: center;
    margin-bottom: 55px;
  }

  @media (max-width: 640px) {
    .svc-section-head {
      margin-bottom: 34px;
    }
  }

  .svc-section-title {
    font-size: clamp(24px, 3vw, 34px);
    font-weight: 700;
    color: #0f172a;
  }

  .svc-section-rule {
    width: 70px;
    height: 4px;
    background: #ef4444;
    margin: 14px auto 0;
    border-radius: 20px;
  }

  /* -------------------------------- BENEFITS ------------------------------- */

  .svc-benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 220px));
    gap: 24px;
    justify-content: center;
    align-items: stretch;
    width: 100%;
  }

  /* Desktop: force a single row of 6 cards, like the reference design.
    Cards flex to fill the row instead of wrapping to a second line. */
  @media (min-width: 1025px) {
    .svc-benefits-grid {
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
    }
    .svc-benefit-card {
      min-height: 250px;
      padding: 26px 16px 28px;
    }
    .svc-benefit-icon {
      width: 64px;
      height: 64px;
      margin-bottom: 18px;
    }
    .svc-benefit-title {
      font-size: 15px;
      min-height: unset;
      margin-bottom: 10px;
    }
    .svc-benefit-description {
      font-size: 13px;
      line-height: 1.6;
    }
  }

  .svc-benefit-card {
    background: #fff;
    border-radius: 18px;
    padding: 36px 28px 42px;
    width: 100%;
    margin: 0;
    text-align: center;
    border: 1px solid #edf1f7;
    box-shadow: 0 6px 18px rgba(8, 31, 92, 0.06);
    position: relative;
    overflow: hidden;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    cursor: pointer;
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
  }

  .svc-benefit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 22px 40px rgba(8, 31, 92, 0.16);
  }

  .svc-benefit-icon {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: #fdf2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    color: #1d4ed8;
    font-weight: 700;
    font-size: 15px;
    transition: transform 0.35s ease, background 0.35s ease;
  }

  .svc-benefit-card:hover .svc-benefit-icon {
    transform: scale(1.12) rotate(-4deg);
    background: #ffe3e3;
  }

  .svc-benefit-title {
    font-size: 18px;
    font-weight: 700;
    color: #081f5c;
    line-height: 1.45;
    margin-bottom: 16px;
    white-space: normal;
    overflow-wrap: break-word;
    min-height: 56px;
  }

  .svc-benefit-description {
    font-size: 15px;
    line-height: 1.8;
    color: #64748b;
    flex: 1;
  }

  .svc-benefit-card-accent {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  .svc-benefit-card:hover .svc-benefit-card-accent {
    transform: scaleX(1);
  }

  .svc-benefit-card-red {
    background: #ef4444;
  }

  .svc-benefit-card-blue {
    background: #1e40af;
  }

  @media (max-width: 1024px) {
    .svc-benefits-grid {
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    }
    .svc-benefit-card {
      min-height: 290px;
      padding: 30px 22px 34px;
    }
  }

  @media (max-width: 640px) {
    .svc-benefits-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
    }
    .svc-benefit-card {
      min-height: 240px;
      padding: 24px 18px 28px;
    }
    .svc-benefit-icon {
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
    }
    .svc-benefit-title {
      font-size: 16px;
      min-height: unset;
      margin-bottom: 10px;
    }
    .svc-benefit-description {
      font-size: 13.5px;
      line-height: 1.6;
    }
  }

  /* -------------------------------- PROCESS -------------------------------- */

  .svc-process-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 0;
    width: 100%;
  }

  /* Desktop: keep every process card + arrow on a single row, like the
    reference design — cards shrink to fit instead of wrapping. */
  /* Laptop View (1025px - 1440px) */
  @media (min-width: 1025px) and (max-width: 1440px) {
    .svc-process-wrapper {
      flex-wrap: nowrap;
      gap: 6px;
    }

    .svc-process-card {
      flex: 1 1 240px;
      max-width: 250px;
      min-width: 240px;
      margin: 0;
      padding: 42px 24px 26px;
    }

    .svc-arrow {
      flex: 0 0 30px;
    }

    .svc-process-icon-wrapper {
      width: 100%;
      height: 140px;
    }
  }

  /* Large Desktop */
  @media (min-width: 1441px) {
    .svc-process-wrapper {
      flex-wrap: nowrap;
    }

    .svc-process-card {
      flex: 1 1 0;
      width: auto;
      min-width: 0;
      margin: 6px;
    }

    .svc-arrow {
      flex: 0 0 auto;
    }

    .svc-process-icon-wrapper {
      width: 100%;
      height: 140px;
    }
  }

  .svc-process-card {
    width: 235px;
    min-height: 460px;
    background: #fff;
    border: 1px solid #eef2fa;
    border-radius: 22px;
    box-shadow: 0 12px 28px rgba(15, 43, 102, 0.08);
    padding: 42px 22px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    margin: 10px;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
  }

  /* Laptop View */
  @media (min-width:1025px) and (max-width:1440px){

    .svc-process-wrapper{
      flex-wrap:nowrap;
      gap:12px;
    }

    .svc-process-card{
      width:260px;
      min-width:260px;
      max-width:260px;
      margin:0;
      padding:42px 24px 24px;
    }

    .svc-arrow{
      width:28px;
    }
  }

  .svc-process-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 24px 44px rgba(15, 43, 102, 0.16);
  }

  .svc-process-number {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  .svc-process-icon-wrapper {
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    transition: transform 0.35s ease;
  }

  .svc-process-card:hover .svc-process-icon-wrapper {
    transform: scale(1.08);
  }

  .svc-process-title {
    font-size: 21px;
    font-weight: 700;
    color: #15397c;
    line-height: 1.25;
    min-height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  .svc-process-desc {
    font-size: 15px;
    color: #6b7280;
    line-height: 1.8;
    min-height: 110px;
    margin-bottom: 18px;
    flex: 1;
    display: flex;
    align-items: flex-start;
  }
  .svc-process-point {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-bottom: 14px;
    color: #183b8c;
    font-size: 15px;
    font-weight: 500;
    min-height: 22px;
    text-align: left;
  }

  .svc-arrow {
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .svc-arrow-icon {
    transition: transform 0.3s ease;
  }

  @media (max-width: 1024px) {
    .svc-process-card {
      width: 260px;
      min-height: 420px;
    }
    .svc-arrow {
      width: 100%;
      margin: -6px 0;
    }
    .svc-arrow-icon {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 640px) {
    .svc-process-wrapper {
      flex-direction: column;
      align-items: center;
    }
    .svc-process-card {
      width: 100%;
      max-width: 320px;
      min-height: unset;
      padding: 34px 20px 22px;
    }
    .svc-process-icon-wrapper {
      width: 96px;
      height: 96px;
      margin-bottom: 12px;
    }
    .svc-process-title {
      font-size: 18px;
      min-height: unset;
      margin-bottom: 10px;
    }
    .svc-process-desc {
      font-size: 14px;
      min-height: unset;
      margin-bottom: 14px;
    }
    .svc-arrow {
      width: auto;
      margin: 2px 0;
    }
  }

  /* ------------------------------- WHY CHOOSE ------------------------------ */

  .svc-why-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    width: 100%;
  }

  .svc-why-card {
    background: #fff;
    border: 1px solid #edf1f7;
    border-radius: 20px;
    padding: 22px 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    min-height: 155px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(15, 43, 102, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
  }

  .svc-why-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 36px rgba(15, 43, 102, 0.14);
  }

  .svc-why-icon-circle {
    width: 78px;
    height: 78px;
    min-width: 78px;
    border-radius: 50%;
    background: #fff5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.35s ease;
  }

  .svc-why-card:hover .svc-why-icon-circle {
    transform: scale(1.1) rotate(-4deg);
  }

  .svc-why-body {
    flex: 1;
  }

  .svc-why-title {
    font-size: 22px;
    font-weight: 700;
    color: #143c8b;
    margin-bottom: 8px;
    line-height: 1.25;
  }

  .svc-why-description {
    font-size: 15px;
    line-height: 1.7;
    color: #5f6c80;
  }

  .svc-why-accent {
    width: 38px;
    height: 4px;
    border-radius: 20px;
    margin-top: 14px;
    transition: width 0.35s ease;
  }

  .svc-why-card:hover .svc-why-accent {
    width: 60px;
  }

  @media (max-width: 1024px) {
    .svc-why-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .svc-why-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .svc-why-card {
      flex-direction: column;
      text-align: center;
      padding: 26px 20px;
      min-height: unset;
    }
    .svc-why-accent {
      margin-left: auto;
      margin-right: auto;
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

  /* staggered onboarding-style entrance for repeated cards */
  .svc-benefits-grid > .svc-benefit-card:nth-child(1),
  .svc-process-wrapper > .svc-process-card:nth-child(1),
  .svc-why-grid > .svc-why-card:nth-child(1) {
    animation-delay: 0.05s;
  }
  .svc-benefits-grid > .svc-benefit-card:nth-child(2),
  .svc-process-wrapper > .svc-process-card:nth-child(3),
  .svc-why-grid > .svc-why-card:nth-child(2) {
    animation-delay: 0.15s;
  }
  .svc-benefits-grid > .svc-benefit-card:nth-child(3),
  .svc-process-wrapper > .svc-process-card:nth-child(5),
  .svc-why-grid > .svc-why-card:nth-child(3) {
    animation-delay: 0.25s;
  }
  .svc-benefits-grid > .svc-benefit-card:nth-child(4),
  .svc-process-wrapper > .svc-process-card:nth-child(7) {
    animation-delay: 0.35s;
  }
  .svc-benefits-grid > .svc-benefit-card:nth-child(5),
  .svc-process-wrapper > .svc-process-card:nth-child(9) {
    animation-delay: 0.45s;
  }
  .svc-benefits-grid > .svc-benefit-card:nth-child(6) {
    animation-delay: 0.55s;
  }

  `}</style>

        {/* background images are passed in as CSS custom properties so the
            embedded <style> block above can decide, per breakpoint, whether
            to render them. Desktop (>1024px) shows them, tablet/mobile strip them out. */}
        <section
          className="svc-hero"
          style={{ ["--hero-bg" as string]: `url(${heroBg.src})` } as React.CSSProperties}
        >
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="svc-hero-container">
          <FadeIn>
    <div className="svc-left">
      <span className="svc-badge">{data.heroBadge}</span>

      <h1 className="svc-title">{data.title}</h1>

      <p className="svc-subtitle">{data.heroSubtitle}</p>

      {/* Desktop & Tablet Buttons */}
      <div className="svc-buttons svc-buttons-desktop">
        <Button href={data.heroPrimaryLink} size="lg">
          {data.heroPrimaryButton}
        </Button>

        <Button
          href={data.heroSecondaryLink}
          variant="outline"
          size="lg"
        >
          {data.heroSecondaryButton}
        </Button>
      </div>
    </div>
  </FadeIn>

      <FadeIn>
    <div className="svc-right">
      <div className="svc-image-wrapper">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          priority
          sizes="(max-width:768px) 100vw, 50vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
            transform: "scale(1.08)",
          }}
        />
      </div>

      {/* Mobile Buttons */}
      <div className="svc-buttons svc-buttons-mobile">
        <Button href={data.heroPrimaryLink} size="lg">
          {data.heroPrimaryButton}
        </Button>

        <Button
          href={data.heroSecondaryLink}
          variant="outline"
          size="lg"
        >
          {data.heroSecondaryButton}
        </Button>
      </div>
    </div>
  </FadeIn>
            </div>
          </div>
        </section>

        <section style={{ position: "relative", overflow: "hidden" }}>
          <FadeIn>
            <div
              className="svc-overview-card"
              style={{ ["--overview-bg" as string]: `url(${overviewBg.src})` } as React.CSSProperties}
            >
              <div className="svc-overview-overlay" />

              <div className="container svc-overview-inner">
                <div className="svc-overview-icon">
                  <Image src={overviewIcon} alt="Overview" width={140} height={140} />
                </div>

                <div className="svc-overview-content">
                  <h2 className="svc-overview-title">Service Overview</h2>

                  <div className="svc-overview-underline" />

                  <p className="svc-overview-text">{data.overview}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="svc-section">
          <div className="container">
            <FadeIn>
              <div className="svc-section-head">
                <h2 className="svc-section-title">Benefits</h2>
                <div className="svc-section-rule" />
              </div>

              <div className="svc-benefits-grid">
                {data.benefits.map((benefit, index) => {
    const benefitIcons = [
      benefit1,
      benefit2,
      benefit3,
      benefit4,
      benefit5,
      benefit6,
    ];

    return (
                  <div key={benefit.title} className="svc-benefit-card">
                  <div className="svc-benefit-icon">
    <Image
      src={benefitIcons[index]}
    alt={benefit.title}
      width={52}
      height={52}
      style={{
        width: "52px",
        height: "52px",
        objectFit: "contain",
      }}
    />
  </div>
                    <h3 className="svc-benefit-title">
    {benefit.title}
  </h3>

                  <p className="svc-benefit-description">
    {benefit.description}
  </p>

                    <div
                      className={`svc-benefit-card-accent ${
                        index % 2 === 0 ? "svc-benefit-card-red" : "svc-benefit-card-blue"
                      }`}
                    />
                  </div>
              );
  })}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="svc-section">
          <div className="container">
            <FadeIn>
              <div className="svc-section-head">
                <h2 className="svc-section-title">Our Process</h2>
              </div>

              <div className="svc-process-wrapper">
                {data.process.map((item, index) => (
                  <>
                    <div key={item.step} className="svc-process-card">
                      <div
                        className="svc-process-number"
                        style={{
                          background: item.step % 2 === 0 ? "#0F3C94" : "#EF4444",
                        }}
                      >
                        {String(item.step).padStart(2, "0")}
                      </div>

                      <div className="svc-process-icon-wrapper">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={92}
                          height={92}
                          style={{
                            width: "92px",
                            height: "92px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      <h3 className="svc-process-title">{item.title}</h3>

                      <p className="svc-process-desc">{item.description}</p>

                      <div
    style={{
      marginTop: "auto",
      width: "100%",
    }}
  >
                        {item.points.map((point, i) => (
                          <div key={i} className="svc-process-point">
                            <CheckCircle2
                              size={17}
                              fill={item.step % 2 === 0 ? "#123D98" : "#EF4444"}
                              color="#fff"
                              strokeWidth={2}
                            />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                    {index !== data.process.length - 1 && (
                      <div className="svc-arrow">
                        <FaPlane
                          size={20}
                          color="#EF4444"
                          className="svc-arrow-icon"
                          style={{
                            filter: "drop-shadow(0 2px 4px rgba(239,68,68,.25))",
                          }}
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="svc-section">
          <div className="container">
            <FadeIn>
              <div className="svc-section-head">
                <h2 className="svc-section-title">Why Choose Us</h2>
                <div className="svc-section-rule" />
              </div>

              <div className="svc-why-grid">
                {data.whyChooseUs.map((item, index) => (
                  <div key={index} className="svc-why-card">
                    <div className="svc-why-icon-circle">
                      <Image
                      src={whyIcons[index]}
                        alt={item.title}
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <div className="svc-why-body">
                      <h3 className="svc-why-title">{item.title}</h3>

                      <p className="svc-why-description">{item.description}</p>

                      <div
                        className="svc-why-accent"
                        style={{
                          background: index % 2 === 0 ? "#EF4444" : "#163D95",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <FAQSection items={faqs} title={`${data.title} FAQ`} />

        <CTASection />
      </>
    );
  }