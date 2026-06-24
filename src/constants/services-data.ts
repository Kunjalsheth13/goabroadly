import type { FAQ } from "./countries-data";

export type ServicePageData = {
  slug: string;
  title: string;
  heroImage: string;
  heroSubtitle: string;
  overview: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  whyChooseUs: string[];
  faqs: FAQ[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

function buildService(slug: string, title: string, imageId: string): ServicePageData {
  return {
    slug,
    title,
    heroImage: unsplash(imageId),
    heroSubtitle: `Professional ${title.toLowerCase()} with personalised guidance from GoAbroadly's certified international education experts.`,
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
      { step: 1, title: "Initial Consultation", description: "Discuss your goals, assess eligibility, and define a personalised action plan." },
      { step: 2, title: "Profile Analysis", description: "Comprehensive review of academics, finances, and destination preferences." },
      { step: 3, title: "Service Delivery", description: "Execute the agreed scope with regular updates and quality checkpoints." },
      { step: 4, title: "Review & Refinement", description: "Iterative feedback cycles ensuring every deliverable meets the highest standards." },
      { step: 5, title: "Outcome Support", description: "Guidance on next steps, follow-up actions, and ongoing assistance as needed." },
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

export const servicesData: ServicePageData[] = [
  buildService("visa-consultation", "Visa Consultation", "photo-1436491865339-9a109ede8c77"),
  buildService("university-admission", "University Admission", "photo-1523050854058-8df90110c9f1"),
  buildService("sop-writing", "SOP Writing", "photo-1455398545745-14ebd6582142"),
  buildService("education-loan-assistance", "Education Loan Assistance", "photo-1554224155-6726b3ff858f"),
  buildService("scholarship-guidance", "Scholarship Guidance", "photo-1523240795612-9a054b0db644"),
  buildService("application-assistance", "Application Assistance", "photo-1434030216411-0b793f4b4173"),
  buildService("interview-preparation", "Interview Preparation", "photo-1517245386807-bb43f82c33c4"),
  buildService("visa-filing", "Visa Filing", "photo-1586281380349-632531db7ed4"),
  buildService("document-verification", "Document Verification", "photo-1450101499163-c8848c66ca85"),
  buildService("accommodation-support", "Accommodation Support", "photo-1522708323590-d24dbb6b0267"),
  buildService("travel-assistance", "Travel Assistance", "photo-1436491865339-9a109ede8c77"),
  buildService("post-landing-services", "Post Landing Services", "photo-1488646953014-85c44e719cc0"),
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
