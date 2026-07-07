import type { FAQ } from "./countries-data";
import type { StaticImageData } from "next/image";
import process1 from "@/assets/images/services/icon1.png";
import process2 from "@/assets/images/services/icon2.png";
import process3 from "@/assets/images/services/icon3.png";
import process4 from "@/assets/images/services/icon4.png";
import process5 from "@/assets/images/services/icon5.png";
import visaConsultationImage from "@/assets/images/services/visaconsultation.png";
import whyIcon1 from "@/assets/images/services/whyicon1.png";
import whyIcon2 from "@/assets/images/services/whyicon2.png";
import whyIcon3 from "@/assets/images/services/whyicon3.png";
import whyIcon4 from "@/assets/images/services/whyicon4.png";
import whyIcon5 from "@/assets/images/services/whyicon5.png";
import whyIcon6 from "@/assets/images/services/whyicon6.png";
export type ServicePageData = {
  slug: string;

  // Hero Section
  title: string;
  heroBadge: string;
  heroImage: string | StaticImageData;
  heroSubtitle: string;

  heroPrimaryButton: string;
  heroPrimaryLink: string;

  heroSecondaryButton: string;
  heroSecondaryLink: string;

  // Content
  overview: string;
  benefits: string[];
process: {
  step: number;
  icon: StaticImageData;
  title: string;
  description: string;
  points: string[];
}[];
  whyChooseUs: string[];
  faqs: FAQ[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

function buildService(
  slug: string,
  title: string,
  heroImage: string | StaticImageData,
  heroPrimaryButton: string,
  heroSecondaryButton: string
): ServicePageData {
  return {
    slug,

    title,

    heroBadge: `Professional ${title}`,

   heroImage:
  typeof heroImage === "string" &&
  heroImage.startsWith("photo-")
    ? unsplash(heroImage)
    : heroImage,

    heroSubtitle: `Professional ${title.toLowerCase()} with personalised guidance from GoAbroadly's certified international education experts.`,
heroPrimaryButton,
heroPrimaryLink: "/contact",

heroSecondaryButton,
heroSecondaryLink: "/services",
    overview: `${title} is a cornerstone of our comprehensive study abroad support, designed to give students a decisive advantage in competitive international admissions and visa processes. Our team combines deep destination knowledge with practical, hands-on assistance — ensuring every document, application, and decision aligns with your long-term academic and career objectives. From initial consultation through successful outcome, we maintain transparent communication, realistic timelines, and meticulous quality standards. Whether you are applying to universities in the UK, Canada, Australia, or beyond, our ${title.toLowerCase()} service adapts to your profile, budget, and target intake. With thousands of successful placements and a 98% visa success rate, GoAbroadly is the trusted partner for students who demand results without compromise.`,
    benefits: [
      `Personalised strategy tailored to your academic profile and career goals`,
      `Expert review by counsellors with years of international education experience`,
      `Transparent process with clear milestones and realistic timelines`,
      `Access to 35+ partner universities and established institutional relationships`,
      `Zero hidden fees with complimentary initial assessment and consultation`,
      `End-to-end support from application through visa approval and departure`,
    ],
    process: [
  {
    step: 1,
    icon: process1,
    title: "Initial Consultation",
    description:
      "Discuss your goals, assess eligibility, and define a personalised action plan.",
    points: [
      "Free Assessment",
      "Goal Discussion",
    ],
  },
  {
    step: 2,
    icon: process2,
    title: "Profile Analysis",
    description:
      "Comprehensive review of academics, finances, and destination preferences.",
    points: [
      "Document Review",
      "Gap Analysis",
    ],
  },
  {
    step: 3,
    icon: process3,
    title: "Service Delivery",
    description:
      "We handle your application process with precision and regular updates.",
    points: [
      "Application Filing",
      "Documentation",
    ],
  },
  {
    step: 4,
    icon: process4,
    title: "Review & Refinement",
    description:
      "Iterative feedback to ensure every detail meets the highest standards.",
    points: [
      "Quality Check",
      "Refinements",
    ],
  },
  {
    step: 5,
    icon: process5,
    title: "Outcome Support",
    description:
      "Visa submission guidance and post-arrival support for a smooth journey.",
    points: [
      "Visa Approval",
      "Post Support",
    ],
  },
],
    whyChooseUs: [
      "ICEF certified counsellors with proven international placement track record",
      "Specialisation in UK study visas with deep embassy process knowledge",
      "98% visa success rate across thousands of student applications",
      "Complimentary flight ticket for every approved student through GoAbroadly",
      "Dedicated Ahmedabad office with in-person and virtual consultation options",
    ],
    faqs: [
      {
        question: `How do I get started with ${title}?`,
        answer: `Book a free assessment through our website or call us directly. A counsellor will evaluate your profile and outline the specific scope of ${title.toLowerCase()} for your situation.`,
      },
      {
        question: `What is the typical timeline for ${title}?`,
        answer: `Timelines depend on your target intake and destination. Most students begin preparation 8–12 months before departure. We create a personalised schedule during your consultation.`,
      },
      {
        question: `Are there any hidden charges?`,
        answer: `No. We believe in complete transparency. All fees and inclusions are discussed upfront during your free assessment before any commitment.`,
      },
    ],
  };
}
export const whyChooseCards = [
  {
    icon: whyIcon1,
    title: "ICEF Certified Experts",
    description:
      "Our counsellors are ICEF certified with proven international placement track record.",
  },
  {
    icon: whyIcon2,
    title: "Visa Process Specialists",
    description:
      "In-depth knowledge of embassy procedures and documentation requirements.",
  },
  {
    icon: whyIcon3,
    title: "98% Visa Success Rate",
    description:
      "Consistent high success rate across thousands of student visa applications.",
  },
  {
    icon: whyIcon4,
    title: "Free Flight Ticket",
    description:
      "Enjoy a 100% free flight ticket for every student who gets their visa approved.",
  },
  {
    icon: whyIcon5,
    title: "Dedicated Support",
    description:
      "24/7 support from our dedicated team until you reach your dream destination.",
  },
  {
    icon: whyIcon6,
    title: "Local Presence",
    description:
      "Ahmedabad-based office with in-person and virtual consultation options available.",
  },
];
export const servicesData: ServicePageData[] = [
 buildService(
  "visa-consultation",
  "Visa Consultation",
  visaConsultationImage,
  "Book Visa Consultation",
  "Explore Visa Services"
),

  buildService(
    "university-admission",
    "University Admission",
    "photo-1523050854058-8df90110c9f1",
    "Apply to Universities",
    "Browse Universities"
  ),

  buildService(
    "sop-writing",
    "SOP Writing",
    "photo-1455398545745-14ebd6582142",
    "Get Your SOP Written",
    "View SOP Samples"
  ),

  buildService(
    "education-loan-assistance",
    "Education Loan Assistance",
    "photo-1554224155-6726b3ff858f",
    "Check Loan Eligibility",
    "Explore Loan Options"
  ),

  buildService(
    "scholarship-guidance",
    "Scholarship Guidance",
    "photo-1523240795612-9a054b0db644",
    "Find Scholarships",
    "Explore Scholarships"
  ),

  buildService(
    "application-assistance",
    "Application Assistance",
    "photo-1434030216411-0b793f4b4173",
    "Start Your Application",
    "View Application Process"
  ),

  buildService(
    "interview-preparation",
    "Interview Preparation",
    "photo-1517245386807-bb43f82c33c4",
    "Book Mock Interview",
    "Interview Tips"
  ),

  buildService(
    "visa-filing",
    "Visa Filing",
    "photo-1586281380349-632531db7ed4",
    "Start Visa Filing",
    "Visa Filing Guide"
  ),

  buildService(
    "document-verification",
    "Document Verification",
    "photo-1450101499163-c8848c66ca85",
    "Verify Documents",
    "Required Documents"
  ),

  buildService(
    "accommodation-support",
    "Accommodation Support",
    "photo-1522708323590-d24dbb6b0267",
    "Find Accommodation",
    "Housing Options"
  ),

  buildService(
    "travel-assistance",
    "Travel Assistance",
    "photo-1436491865339-9a109ede8c77",
    "Plan Your Travel",
    "Travel Checklist"
  ),

  buildService(
    "post-landing-services",
    "Post Landing Services",
    "photo-1488646953014-85c44e719cc0",
    "Get Post-Arrival Support",
    "Explore Settlement Services"
  ),
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
