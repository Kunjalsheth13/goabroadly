import type { FAQ } from "./countries-data";

export type VisaPageData = {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  heroSubtitle: string;
  eligibility: string[];
  requirements: string[];
  documents: string[];
  process: { step: number; title: string; description: string }[];
  faqs: FAQ[];
  overview: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

function buildVisa(
  slug: string,
  title: string,
  category: string,
  imageId: string
): VisaPageData {
  return {
    slug,
    title,
    category,
    heroImage: unsplash(imageId),
    heroSubtitle: `Complete guide to ${title} — eligibility, requirements, documentation, and application process with expert GoAbroadly support.`,
    overview: `The ${title} enables qualified applicants to pursue their international goals with a structured, transparent application process. Whether you are planning to study, work, or relocate abroad, understanding eligibility criteria, documentation standards, and processing timelines is essential for a successful outcome. GoAbroadly specialises in preparing comprehensive visa applications with meticulous attention to detail — from initial eligibility assessment through document verification, application submission, and interview preparation. Our counsellors stay current with embassy policy changes and country-specific requirements, ensuring your file reflects the latest standards. With a 98% visa success rate across thousands of applications, we combine expertise with personalised guidance tailored to your unique profile and destination.`,
    eligibility: [
      `Valid passport with sufficient validity beyond intended stay period`,
      `Confirmation of admission, employment, or sponsorship as applicable`,
      `Demonstrated financial capacity to cover tuition, living costs, and travel`,
      `English language proficiency meeting destination country requirements`,
      `Clean immigration history with no undisclosed refusals or overstays`,
      `Genuine intent to comply with visa conditions and return if required`,
    ],
    requirements: [
      `Completed visa application form with accurate personal and travel details`,
      `Biometric appointment attendance at designated visa application centre`,
      `Comprehensive Statement of Purpose or cover letter explaining your plans`,
      `Academic transcripts, certificates, and professional credentials as applicable`,
      `Proof of accommodation arrangements or university housing confirmation`,
      `Health insurance or medical examination certificates where mandated`,
    ],
    documents: [
      `Passport bio-data pages and previous visa copies`,
      `Admission letter, CAS, or employer sponsorship documentation`,
      `Bank statements and financial affidavits covering required period`,
      `IELTS, PTE, TOEFL, or equivalent language test results`,
      `Academic certificates and mark sheets with official translations`,
      `Passport-size photographs meeting embassy specifications`,
    ],
    process: [
      { step: 1, title: "Free Assessment", description: "Evaluate your profile and confirm visa pathway eligibility with a certified counsellor." },
      { step: 2, title: "Document Preparation", description: "Compile, verify, and organise all required documents to embassy standards." },
      { step: 3, title: "Application Submission", description: "Complete online forms, pay visa fees, and book biometric appointment." },
      { step: 4, title: "Interview Coaching", description: "Mock interview sessions covering common questions and best practices." },
      { step: 5, title: "Decision & Approval", description: "Track application status and receive guidance on next steps after approval." },
    ],
    faqs: [
      {
        question: `How long does ${title} processing take?`,
        answer: `Processing times vary by country, season, and individual circumstances. Typical timelines range from 2–8 weeks. We provide realistic estimates during your consultation based on current embassy workloads.`,
      },
      {
        question: `What if my ${title} application is refused?`,
        answer: `We analyse refusal letters, identify gaps, strengthen documentation, and develop a strategic reapplication or appeal plan based on the specific grounds cited.`,
      },
      {
        question: `Does GoAbroadly charge consultancy fees for ${title}?`,
        answer: `We offer transparent pricing with zero hidden charges. Many of our core consultation services are complimentary — contact us for details specific to your case.`,
      },
    ],
  };
}

export const visaTypesData: VisaPageData[] = [
  buildVisa("student-visa", "Student Visa", "Study", "photo-1523050854058-8df90110c9f1"),
  buildVisa("research-visa", "Research Visa", "Study", "photo-1532094347810-2639575c62ab"),
  buildVisa("language-course-visa", "Language Course Visa", "Study", "photo-1546410531-bb4caa6b424d"),
  buildVisa("exchange-program-visa", "Exchange Program Visa", "Study", "photo-1523240795612-9a054b0db644"),
  buildVisa("skilled-worker-visa", "Skilled Worker Visa", "Work", "photo-1454165804606-c3d57bc86b40"),
  buildVisa("temporary-work-visa", "Temporary Work Visa", "Work", "photo-1507679799987-c73779587ccf"),
  buildVisa("business-visa", "Business Visa", "Work", "photo-1556761175-b413da4baf72"),
  buildVisa("self-employment-visa", "Self Employment Visa", "Work", "photo-1553877522-43269d4ea984"),
  buildVisa("permanent-residency", "Permanent Residency", "Immigration", "photo-1560518883-ce09059eeffa"),
  buildVisa("family-sponsorship", "Family Sponsorship", "Immigration", "photo-1511895426328-dc8714191300"),
  buildVisa("investor-visa", "Investor Visa", "Immigration", "photo-1611974789855-9c98a7a0363a"),
  buildVisa("visitor-visa", "Visitor Visa", "Immigration", "photo-1436491865339-9a109ede8c77"),
];

export function getVisaBySlug(slug: string): VisaPageData | undefined {
  return visaTypesData.find((v) => v.slug === slug);
}

export function getAllVisaSlugs(): string[] {
  return visaTypesData.map((v) => v.slug);
}
