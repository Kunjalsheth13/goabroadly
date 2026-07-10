import type { FAQ } from "./countries-data";
import type { StaticImageData } from "next/image";
import process1 from "@/assets/images/services/icon1.png";
import process2 from "@/assets/images/services/icon2.png";
import process3 from "@/assets/images/services/icon3.png";
import process4 from "@/assets/images/services/icon4.png";
import process5 from "@/assets/images/services/icon5.png";
import visaConsultationImage from "@/assets/images/services/visaconsultation.png";
import universityadmission from "@/assets/images/services/universityadmission.png";
import sopwriting from "@/assets/images/services/sopwriting.png";
import applicationassistant from "@/assets/images/services/applicationassistant.png";
import acomodation from "@/assets/images/services/acomodation.png";
// import uniadmission from "@/assets/images/services/uniadmission.png";
import postlanding from "@/assets/images/services/postlanding.png";
import travelassistance from "@/assets/images/services/travelassis.png";
import interviewpreparation from "@/assets/images/services/interviewprep.png";
import visafiling from "@/assets/images/services/visafill.png";
import documentverification from "@/assets/images/services/documentverify.png";
import scholarshipguide from "@/assets/images/services/scholarshipguid.png";
import educationloan from "@/assets/images/services/edulaon.png";
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
benefits: {
  title: string;
  description: string;
}[];
process: {
  step: number;
  icon: StaticImageData;
  title: string;
  description: string;
  points: string[];
}[];
  whyChooseUs: {
  title: string;
  description: string;
}[];
  faqs: FAQ[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

function buildService(
  slug: string,
  title: string,
  heroImage: string | StaticImageData,
  heroPrimaryButton: string,
  heroSecondaryButton: string,

  overview: string,

  benefits: {
    title: string;
    description: string;
  }[],

  process: {
    step: number;
    icon: StaticImageData;
    title: string;
    description: string;
    points: string[];
  }[],

  whyChooseUs: {
    title: string;
    description: string;
  }[],

  faqs: FAQ[]
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

  heroSubtitle: `Professional ${title.toLowerCase()} with personalised guidance from GoAbroadly's certified international education experts. From your initial consultation to successful visa approval, our experienced team provides strategic guidance, complete documentation support, and end-to-end assistance to ensure a smooth and stress-free international journey.`,
heroPrimaryButton,
heroPrimaryLink: "/contact",

heroSecondaryButton,
heroSecondaryLink: "/services",
   overview,
   benefits,
process,
whyChooseUs,
 faqs, };
}
export const servicesData: ServicePageData[] = [
buildService(
  "visa-consultation",
  "Visa Consultation",
  visaConsultationImage,
  "Book Visa Consultation",
  "Explore Visa Services",

`Our University Admission service provides comprehensive support for students who aspire to study at leading universities across the world. We carefully evaluate your academic profile, career aspirations, preferred destination, and financial considerations to recommend universities and programs that best match your goals. Our experienced counsellors assist with university shortlisting, course selection, admission planning, application preparation, document review, and communication with institutions throughout the admission cycle. By ensuring every application is accurate, complete, and strategically prepared, we help maximize your opportunities to receive admission offers from globally recognized universities while making the entire admission process smooth, transparent, and stress-free.`,

  [
    {
      title: "Personalized Visa Guidance",
      description:
        "Receive one-on-one counselling based on your study destination, academic profile, and visa requirements.",
    },
    {
      title: "Eligibility Assessment",
      description:
        "Understand your chances of visa approval through detailed profile evaluation before applying.",
    },
    {
      title: "Document Planning",
      description:
        "Get a complete checklist and expert guidance for preparing accurate visa documents.",
    },
    {
      title: "Financial Guidance",
      description:
        "Learn the financial requirements, proof of funds, and supporting documents needed for your visa.",
    },
    {
      title: "Latest Immigration Updates",
      description:
        "Stay informed about changing visa policies, embassy rules, and country-specific requirements.",
    },
    {
      title: "Higher Visa Success",
      description:
        "Reduce application mistakes and improve your chances of visa approval with professional support.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Profile Assessment",
      description: "Evaluate your academic profile and visa eligibility.",
      points: [
        "Eligibility Check",
        "Destination Selection",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Document Planning",
      description: "Prepare all required visa documents correctly.",
      points: [
        "Document Checklist",
        "Financial Review",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Application Support",
      description: "Complete your visa application with expert assistance.",
      points: [
        "Form Filling",
        "Application Review",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Interview Preparation",
      description: "Prepare confidently for embassy interviews if required.",
      points: [
        "Mock Interview",
        "Expert Tips",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Visa Approval",
      description: "Track your application until your visa is successfully approved.",
      points: [
        "Status Tracking",
        "Travel Guidance",
      ],
    },
  ],

  [
    {
      title: "Certified Visa Experts",
      description:
        "Experienced counsellors with in-depth knowledge of international student visas.",
    },
    {
      title: "High Success Rate",
      description:
        "Thousands of successful visa approvals across multiple study destinations.",
    },
    {
      title: "Transparent Process",
      description:
        "Complete clarity on documentation, timelines, and application progress.",
    },
    {
      title: "End-to-End Assistance",
      description:
        "Support from profile evaluation until visa approval and departure.",
    },
    {
      title: "Latest Embassy Updates",
      description:
        "Stay updated with changing immigration and embassy regulations.",
    },
    {
      title: "Dedicated Student Support",
      description:
        "Our team remains available to answer your questions throughout your visa journey.",
    },
  ],

  [
    {
      question: "Who needs a visa consultation?",
      answer:
        "Any student planning to study abroad can benefit from professional visa consultation to understand requirements and avoid application mistakes.",
    },
    {
      question: "Will you help prepare my visa documents?",
      answer:
        "Yes. We guide you in preparing, reviewing, and organizing all required visa documents before submission.",
    },
    {
      question: "Do you provide interview preparation?",
      answer:
        "Yes. We conduct mock interviews and provide expert guidance for embassy interview preparation.",
    },
  ]
),

buildService(
  "university-admission",
  "University Admission",
  universityadmission,
  "Apply to Universities",
  "Browse Universities",

  `Our University Admission service helps students identify the right universities, select suitable programs, prepare strong applications, and maximize their chances of receiving admission offers from top international institutions.`,

  [
    {
      title: "University Shortlisting",
      description:
        "Get personalized university recommendations based on your academic profile, budget, career goals, and preferred study destination.",
    },
    {
      title: "Course Selection",
      description:
        "Choose the most suitable program that aligns with your interests, qualifications, and long-term career aspirations.",
    },
    {
      title: "Application Strategy",
      description:
        "Develop a strong application plan with proper timelines, university priorities, and submission schedules.",
    },
    {
      title: "Admission Guidance",
      description:
        "Receive complete support throughout the admission process, ensuring all university requirements are fulfilled.",
    },
    {
      title: "Offer Letter Assistance",
      description:
        "Understand admission offers, acceptance procedures, tuition deposits, and next steps after receiving admission.",
    },
    {
      title: "End-to-End Support",
      description:
        "From university selection to securing your admission, our experts remain with you throughout the journey.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Profile Evaluation",
      description:
        "Review your academic background, goals, and preferred countries.",
      points: [
        "Academic Assessment",
        "Career Discussion",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "University Selection",
      description:
        "Shortlist universities and programs that best match your profile.",
      points: [
        "University List",
        "Course Selection",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Application Preparation",
      description:
        "Prepare and submit complete university applications with accuracy.",
      points: [
        "Document Review",
        "Application Submission",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Admission Follow-up",
      description:
        "Track application progress and communicate with universities when required.",
      points: [
        "Application Tracking",
        "University Communication",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Admission Confirmation",
      description:
        "Accept your offer letter and prepare for the next stages of your study abroad journey.",
      points: [
        "Offer Acceptance",
        "Next-Step Guidance",
      ],
    },
  ],

  [
    {
      title: "Experienced Admission Experts",
      description:
        "Our experienced counsellors help students secure admissions in globally recognized universities.",
    },
    {
      title: "Global University Network",
      description:
        "Access a wide network of trusted universities across the UK, Canada, Australia, Europe, and more.",
    },
    {
      title: "Personalized Admission Planning",
      description:
        "Every admission strategy is customized according to your academic strengths and future goals.",
    },
    {
      title: "Accurate Documentation",
      description:
        "We carefully review every application to minimize errors and improve admission success.",
    },
    {
      title: "Transparent Counselling",
      description:
        "Receive honest guidance, realistic university recommendations, and complete admission transparency.",
    },
    {
      title: "Complete Admission Support",
      description:
        "From selecting universities to receiving your admission letter, we support you at every stage.",
    },
  ],

  [
    {
      question: "How do I choose the right university?",
      answer:
        "Our counsellors evaluate your academic background, career goals, budget, and destination preferences to recommend the best universities.",
    },
    {
      question: "Can you help me apply to multiple universities?",
      answer:
        "Yes. We assist students with applications to multiple universities to maximize admission opportunities.",
    },
    {
      question: "Do you review my application before submission?",
      answer:
        "Absolutely. Every application is carefully reviewed for accuracy, completeness, and university-specific requirements before submission.",
    },
  ]
),

 buildService(
  "sop-writing",
  "SOP Writing",
  sopwriting,
  "Get Your SOP Written",
  "View SOP Samples",

 `Our SOP Writing service helps students develop powerful, personalized, and professionally written Statements of Purpose that leave a lasting impression on university admission committees. Every SOP is carefully crafted after understanding your academic background, professional experience, achievements, career objectives, and future aspirations. Instead of using generic templates, we create original content tailored to the specific university and course requirements while highlighting your strengths and motivation for pursuing higher education abroad. Through multiple quality reviews and expert refinement, we ensure your SOP reflects your personality, demonstrates your potential, and significantly strengthens your university application.`,

  [
    {
      title: "Personalized SOP",
      description:
        "Every Statement of Purpose is uniquely crafted based on your academic background, achievements, and career goals.",
    },
    {
      title: "Professional Writers",
      description:
        "Our experienced SOP specialists create impactful content that meets international university expectations.",
    },
    {
      title: "University-Specific Content",
      description:
        "Each SOP is customized according to the requirements and expectations of your target university and program.",
    },
    {
      title: "Multiple Revisions",
      description:
        "Receive detailed revisions and improvements to ensure your SOP is polished and submission-ready.",
    },
    {
      title: "Plagiarism-Free Writing",
      description:
        "Every SOP is written from scratch, ensuring 100% originality and authenticity.",
    },
    {
      title: "Higher Admission Success",
      description:
        "A professionally written SOP increases your chances of securing admission to your dream university.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Profile Discussion",
      description:
        "Understand your academic journey, achievements, and career objectives.",
      points: [
        "Student Consultation",
        "Career Goals",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Information Collection",
      description:
        "Gather academic records, work experience, achievements, and future aspirations.",
      points: [
        "Profile Review",
        "Key Highlights",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "SOP Drafting",
      description:
        "Prepare a professional first draft tailored to your selected university and course.",
      points: [
        "Custom Writing",
        "University Focus",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Review & Revisions",
      description:
        "Refine the SOP through expert review and student feedback.",
      points: [
        "Content Improvement",
        "Grammar Check",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Final Delivery",
      description:
        "Deliver a polished, plagiarism-free SOP ready for university submission.",
      points: [
        "Final Review",
        "Ready to Submit",
      ],
    },
  ],

  [
    {
      title: "Professional SOP Experts",
      description:
        "Experienced writers who understand what international universities expect from applicants.",
    },
    {
      title: "100% Original Content",
      description:
        "Every Statement of Purpose is written from scratch without plagiarism or AI-generated templates.",
    },
    {
      title: "University-Specific Approach",
      description:
        "We customize every SOP according to the university, course, and admission requirements.",
    },
    {
      title: "Unlimited Guidance",
      description:
        "Receive expert suggestions and revisions until your SOP meets the highest standards.",
    },
    {
      title: "Strong Storytelling",
      description:
        "We highlight your strengths, achievements, and ambitions in a compelling and authentic way.",
    },
    {
      title: "Higher Admission Potential",
      description:
        "A professionally structured SOP helps create a strong impression on admission committees.",
    },
  ],

  [
    {
      question: "Why is an SOP important for university admission?",
      answer:
        "A Statement of Purpose allows universities to understand your academic background, career goals, motivation, and suitability for their program.",
    },
    {
      question: "Will my SOP be unique?",
      answer:
        "Yes. Every SOP is written from scratch based on your personal profile, achievements, and university requirements.",
    },
    {
      question: "Can I request revisions?",
      answer:
        "Absolutely. We provide revisions and refinements to ensure your SOP is polished and ready for submission.",
    },
  ]
),

buildService(
  "education-loan-assistance",
  "Education Loan Assistance",
  educationloan,
  "Check Loan Eligibility",
  "Explore Loan Options",

  `Our Education Loan Assistance service helps students secure the financial support they need to pursue higher education abroad with confidence. We work closely with leading banks and financial institutions to help students identify suitable education loan options based on their academic profile, financial background, and study destination. Our experts provide complete guidance throughout the process, including loan eligibility assessment, lender comparison, documentation support, application preparation, and loan approval assistance. By simplifying complex financial procedures and ensuring all documentation is accurate and complete, we help students obtain education loans efficiently, allowing them to focus on achieving their academic and career goals without unnecessary financial stress.`,
  [
    {
      title: "Loan Eligibility Assessment",
      description:
        "Evaluate your financial profile and determine your eligibility for education loans from leading banks and financial institutions.",
    },
    {
      title: "Best Loan Options",
      description:
        "Compare multiple education loan providers and choose the most suitable option based on interest rates and repayment terms.",
    },
    {
      title: "Documentation Support",
      description:
        "Receive complete assistance in preparing and organizing all required financial and academic documents for loan approval.",
    },
    {
      title: "Faster Loan Processing",
      description:
        "Our experts coordinate with lending partners to help speed up your education loan application process.",
    },
    {
      title: "Financial Planning",
      description:
        "Understand tuition fees, living expenses, repayment options, and overall financial planning before studying abroad.",
    },
    {
      title: "End-to-End Loan Assistance",
      description:
        "From eligibility assessment to loan disbursement, our team provides continuous support throughout your funding journey.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Financial Assessment",
      description:
        "Evaluate your financial profile and understand your loan eligibility.",
      points: [
        "Eligibility Check",
        "Financial Review",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Loan Comparison",
      description:
        "Compare education loan options from trusted banks and financial institutions.",
      points: [
        "Interest Rates",
        "Loan Options",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Document Preparation",
      description:
        "Prepare and verify all required financial and academic documents.",
      points: [
        "Document Review",
        "Application Support",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Loan Application",
      description:
        "Submit your education loan application with complete expert assistance.",
      points: [
        "Application Filing",
        "Bank Coordination",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Loan Approval",
      description:
        "Track your application until approval and loan disbursement.",
      points: [
        "Approval Support",
        "Loan Disbursement",
      ],
    },
  ],

  [
    {
      title: "Trusted Financial Partners",
      description:
        "We work with leading banks and financial institutions to help students access reliable education loan options.",
    },
    {
      title: "Expert Financial Guidance",
      description:
        "Our experienced counsellors simplify the education loan process with personalized financial advice.",
    },
    {
      title: "Transparent Loan Assistance",
      description:
        "Receive complete clarity on eligibility, interest rates, repayment terms, and documentation requirements.",
    },
    {
      title: "Complete Documentation Support",
      description:
        "We assist you in preparing accurate documentation to improve the chances of loan approval.",
    },
    {
      title: "Quick Processing",
      description:
        "Our streamlined approach helps reduce delays and ensures faster loan application processing.",
    },
    {
      title: "End-to-End Support",
      description:
        "From financial planning to loan disbursement, our dedicated team supports you throughout the process.",
    },
  ],

  [
    {
      question: "Who can apply for an education loan?",
      answer:
        "Students who have secured admission to recognized international universities and meet the lender's eligibility criteria can apply for an education loan.",
    },
    {
      question: "Do you help compare multiple loan providers?",
      answer:
        "Yes. We help you evaluate and compare loan options from multiple banks and financial institutions to find the most suitable solution.",
    },
    {
      question: "Will you assist with loan documentation?",
      answer:
        "Absolutely. We provide complete guidance in preparing, reviewing, and submitting all required documents for your education loan application.",
    },
  ]
),
buildService(
  "scholarship-guidance",
  "Scholarship Guidance",
  scholarshipguide,
  "Find Scholarships",
  "Explore Scholarships",

`Our Scholarship Guidance service helps students explore valuable funding opportunities that make studying abroad more affordable and accessible. Our experienced counsellors identify scholarships that match your academic achievements, financial profile, leadership qualities, extracurricular activities, and chosen study destination. We provide expert guidance throughout the scholarship journey, including eligibility assessment, scholarship shortlisting, application planning, essay preparation, documentation review, and submission support. By helping students present strong and competitive scholarship applications, we maximize their chances of securing partial or full financial assistance from universities, governments, and international organizations worldwide.`,

  [
    {
      title: "Scholarship Eligibility Assessment",
      description:
        "Evaluate your academic achievements, financial background, and extracurricular profile to identify scholarships you're eligible for.",
    },
    {
      title: "Personalized Scholarship Search",
      description:
        "Discover scholarships offered by universities, governments, and private organizations that match your profile and study destination.",
    },
    {
      title: "Application Assistance",
      description:
        "Receive complete guidance in preparing scholarship applications, essays, and supporting documents.",
    },
    {
      title: "Merit & Need-Based Opportunities",
      description:
        "Explore a wide range of scholarships based on academic excellence, financial need, leadership, and special achievements.",
    },
    {
      title: "Higher Funding Opportunities",
      description:
        "Increase your chances of securing partial or full scholarships with expert planning and professional guidance.",
    },
    {
      title: "End-to-End Scholarship Support",
      description:
        "From identifying opportunities to submitting successful applications, our experts support you throughout the scholarship journey.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Profile Assessment",
      description:
        "Evaluate your academic achievements, financial background, and career goals.",
      points: [
        "Academic Review",
        "Eligibility Check",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Scholarship Search",
      description:
        "Identify suitable scholarships based on your profile and destination.",
      points: [
        "University Scholarships",
        "Government Funding",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Application Preparation",
      description:
        "Prepare scholarship essays, recommendation letters, and supporting documents.",
      points: [
        "Essay Guidance",
        "Document Review",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Application Submission",
      description:
        "Submit scholarship applications accurately before the deadlines.",
      points: [
        "Submission Support",
        "Deadline Tracking",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Scholarship Success",
      description:
        "Track your application status and receive guidance after scholarship approval.",
      points: [
        "Result Updates",
        "Funding Guidance",
      ],
    },
  ],

  [
    {
      title: "Scholarship Experts",
      description:
        "Our experienced counsellors help students identify and apply for the best scholarship opportunities worldwide.",
    },
    {
      title: "Extensive Scholarship Database",
      description:
        "Access scholarships from universities, governments, and international organizations across multiple countries.",
    },
    {
      title: "Personalized Funding Strategy",
      description:
        "Receive scholarship recommendations tailored to your academic profile, achievements, and financial needs.",
    },
    {
      title: "Professional Application Support",
      description:
        "We assist with essays, documentation, and application preparation to improve scholarship success.",
    },
    {
      title: "Transparent Guidance",
      description:
        "Receive honest advice on eligibility, funding opportunities, and realistic scholarship expectations.",
    },
    {
      title: "Complete End-to-End Assistance",
      description:
        "From scholarship search to successful application submission, we support you throughout the funding process.",
    },
  ],

  [
    {
      question: "Who can apply for scholarships?",
      answer:
        "Scholarships are available for students based on academic performance, financial need, leadership qualities, extracurricular achievements, and university-specific eligibility criteria.",
    },
    {
      question: "Do you help with scholarship applications?",
      answer:
        "Yes. We assist students with scholarship selection, application preparation, essays, supporting documents, and submission.",
    },
    {
      question: "Can I apply for multiple scholarships?",
      answer:
        "Absolutely. We help identify multiple scholarship opportunities to maximize your chances of receiving financial assistance for your studies abroad.",
    },
  ]
),

  buildService(
  "application-assistance",
  "Application Assistance",
  applicationassistant,
  "Start Your Application",
  "View Application Process",

`Our Application Assistance service provides complete support throughout the university application process, ensuring every application is prepared with accuracy, professionalism, and attention to detail. From reviewing academic qualifications and organizing supporting documents to completing application forms and monitoring important deadlines, our experienced team manages every stage efficiently. We also communicate with universities whenever necessary, review each application thoroughly before submission, and ensure compliance with institution-specific requirements. Our goal is to reduce application errors, improve admission opportunities, and provide students with a seamless application experience from start to finish.`,

  [
    {
      title: "Complete Application Support",
      description:
        "Receive step-by-step guidance throughout the university application process, from start to final submission.",
    },
    {
      title: "Accurate Documentation",
      description:
        "Ensure all required academic, financial, and personal documents are properly prepared and organized.",
    },
    {
      title: "University-Specific Applications",
      description:
        "Every application is tailored according to the admission requirements of your selected universities.",
    },
    {
      title: "Deadline Management",
      description:
        "Never miss important application deadlines with our organized planning and timely submission support.",
    },
    {
      title: "Error-Free Submission",
      description:
        "Our experts carefully review every application to eliminate mistakes and improve acceptance chances.",
    },
    {
      title: "Dedicated Admission Support",
      description:
        "From application creation to university communication, our team provides complete assistance throughout the process.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Profile Evaluation",
      description:
        "Assess your academic qualifications and admission requirements.",
      points: [
        "Academic Review",
        "Eligibility Check",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Document Preparation",
      description:
        "Collect and organize all required documents for university applications.",
      points: [
        "Document Checklist",
        "Verification",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Application Completion",
      description:
        "Fill out university application forms accurately with expert guidance.",
      points: [
        "Form Completion",
        "Application Review",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Submission Process",
      description:
        "Submit applications before deadlines and ensure successful delivery.",
      points: [
        "Timely Submission",
        "Application Tracking",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Admission Follow-up",
      description:
        "Track application status and communicate with universities until admission decisions are received.",
      points: [
        "Status Updates",
        "University Communication",
      ],
    },
  ],

  [
    {
      title: "Experienced Admission Consultants",
      description:
        "Our experts have extensive experience in preparing successful university applications across multiple countries.",
    },
    {
      title: "Personalized Application Strategy",
      description:
        "Every application is customized according to your academic profile, career goals, and chosen universities.",
    },
    {
      title: "Accurate Documentation",
      description:
        "We carefully review every document and application to ensure accuracy and compliance with university requirements.",
    },
    {
      title: "Transparent Process",
      description:
        "Receive regular updates and complete transparency throughout your application journey.",
    },
    {
      title: "On-Time Submission",
      description:
        "We help you manage important deadlines and ensure applications are submitted without delays.",
    },
    {
      title: "End-to-End Application Assistance",
      description:
        "From selecting universities to receiving admission decisions, we support you throughout the entire application process.",
    },
  ],

  [
    {
      question: "What does Application Assistance include?",
      answer:
        "Our service includes profile evaluation, document preparation, application completion, submission support, and continuous follow-up with universities.",
    },
    {
      question: "Can you help with multiple university applications?",
      answer:
        "Yes. We assist students in preparing and submitting applications to multiple universities based on their admission strategy.",
    },
    {
      question: "Will my application be reviewed before submission?",
      answer:
        "Absolutely. Every application undergoes a detailed quality review to ensure accuracy, completeness, and compliance with university requirements before submission.",
    },
  ]
),

buildService(
  "interview-preparation",
  "Interview Preparation",
  interviewpreparation,
  "Book Mock Interview",
  "Interview Tips",

`Our Interview Preparation service is designed to help students perform confidently during university admission interviews, embassy interviews, and student visa interviews. Through personalized coaching sessions, realistic mock interviews, and detailed performance evaluations, we prepare students to answer questions with confidence, clarity, and professionalism. Our experts focus on improving communication skills, body language, presentation, and overall interview techniques while providing practical tips based on current university and embassy expectations. With continuous practice and constructive feedback, students become better prepared to leave a positive impression and significantly improve their interview success rate.`,

  [
    {
      title: "Personalized Mock Interviews",
      description:
        "Practice real interview scenarios tailored to your chosen university, course, or visa application with expert guidance.",
    },
    {
      title: "Confidence Building",
      description:
        "Improve your communication skills, body language, and self-confidence to perform effectively during interviews.",
    },
    {
      title: "Expert Feedback",
      description:
        "Receive detailed feedback on your answers, presentation, and overall interview performance for continuous improvement.",
    },
    {
      title: "University & Visa Interview Support",
      description:
        "Prepare for university admission interviews as well as embassy and student visa interviews with confidence.",
    },
    {
      title: "Frequently Asked Questions",
      description:
        "Learn how to answer the most commonly asked interview questions professionally and confidently.",
    },
    {
      title: "Higher Interview Success",
      description:
        "Reduce nervousness and maximize your chances of clearing interviews through structured preparation and expert coaching.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Profile Assessment",
      description:
        "Understand your academic background, goals, and interview requirements.",
      points: [
        "Profile Review",
        "Interview Planning",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Interview Guidance",
      description:
        "Learn interview structure, expected questions, and best practices.",
      points: [
        "Question Analysis",
        "Expert Guidance",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Mock Interview",
      description:
        "Participate in realistic mock interviews conducted by experienced counsellors.",
      points: [
        "Real-Time Practice",
        "Performance Review",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Feedback & Improvement",
      description:
        "Receive personalized feedback and improve your communication, confidence, and responses.",
      points: [
        "Detailed Feedback",
        "Confidence Building",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Final Preparation",
      description:
        "Complete your final preparation with expert tips before your actual interview.",
      points: [
        "Final Review",
        "Interview Success",
      ],
    },
  ],

  [
    {
      title: "Experienced Interview Coaches",
      description:
        "Our experts have extensive experience preparing students for university and visa interviews across multiple countries.",
    },
    {
      title: "Real Interview Simulations",
      description:
        "Practice with realistic interview scenarios that closely match actual university and embassy interviews.",
    },
    {
      title: "Personalized Coaching",
      description:
        "Receive one-on-one interview preparation tailored to your academic background and study destination.",
    },
    {
      title: "Communication Enhancement",
      description:
        "Improve your speaking skills, confidence, body language, and professional presentation.",
    },
    {
      title: "Comprehensive Feedback",
      description:
        "Identify strengths and areas for improvement through detailed performance evaluations after every mock interview.",
    },
    {
      title: "Higher Interview Success Rate",
      description:
        "Our structured interview preparation significantly improves students' confidence and success in university and visa interviews.",
    },
  ],

  [
    {
      question: "Why is interview preparation important?",
      answer:
        "Interview preparation helps you communicate confidently, answer questions effectively, and create a positive impression during university and visa interviews.",
    },
    {
      question: "Do you conduct mock interviews?",
      answer:
        "Yes. We conduct realistic mock interviews with personalized feedback to help you improve your performance before the actual interview.",
    },
    {
      question: "Can you prepare me for both university and visa interviews?",
      answer:
        "Absolutely. Our Interview Preparation service covers university admission interviews, embassy interviews, and student visa interviews with customized coaching.",
    },
  ]
),

 buildService(
  "visa-filing",
  "Visa Filing",
  visafiling,
  "Start Visa Filing",
  "Visa Filing Guide",

`Our Visa Filing service provides complete assistance in preparing and submitting your student visa application with accuracy and confidence. Our experienced visa specialists carefully review your academic profile, supporting documents, financial records, and application details to ensure compliance with the latest embassy and immigration regulations. We assist with application form completion, document verification, quality checks, submission guidance, and application tracking while keeping you informed throughout the process. By eliminating common errors and ensuring every requirement is fulfilled correctly, we help improve your chances of a successful visa outcome and make the entire filing process simple, transparent, and stress-free.`,

  [
    {
      title: "Accurate Visa Application",
      description:
        "We carefully prepare and review your visa application to ensure all information is accurate and complete.",
    },
    {
      title: "Complete Documentation Support",
      description:
        "Receive expert assistance in organizing and verifying all mandatory documents required for your student visa application.",
    },
    {
      title: "Embassy Compliance",
      description:
        "Our team ensures your application meets the latest embassy guidelines and country-specific visa requirements.",
    },
    {
      title: "Error-Free Submission",
      description:
        "Avoid common application mistakes with multiple quality checks before your visa application is submitted.",
    },
    {
      title: "Application Tracking",
      description:
        "Stay updated throughout the visa processing period with regular application status updates and guidance.",
    },
    {
      title: "End-to-End Filing Support",
      description:
        "From preparing your application until successful submission, our experts provide complete visa filing assistance.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Profile Review",
      description:
        "Review your academic profile and confirm visa eligibility before filing.",
      points: [
        "Eligibility Check",
        "Application Planning",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Document Collection",
      description:
        "Gather and verify all mandatory academic, financial, and personal documents.",
      points: [
        "Document Checklist",
        "Verification",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Visa Application",
      description:
        "Complete your visa application accurately with expert guidance.",
      points: [
        "Application Form",
        "Quality Review",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Application Submission",
      description:
        "Submit your visa application according to embassy procedures and timelines.",
      points: [
        "Embassy Submission",
        "Application Confirmation",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Visa Processing",
      description:
        "Track your visa application and provide support until the final decision is received.",
      points: [
        "Status Tracking",
        "Approval Guidance",
      ],
    },
  ],

  [
    {
      title: "Experienced Visa Specialists",
      description:
        "Our visa experts understand embassy procedures and ensure every application meets the latest immigration requirements.",
    },
    {
      title: "Accurate Documentation",
      description:
        "We thoroughly review every document to minimize errors and reduce the chances of visa delays or rejection.",
    },
    {
      title: "Transparent Filing Process",
      description:
        "Receive clear guidance, regular updates, and complete transparency throughout your visa filing journey.",
    },
    {
      title: "Latest Immigration Knowledge",
      description:
        "Stay compliant with changing visa policies, documentation requirements, and embassy regulations.",
    },
    {
      title: "High Visa Success Rate",
      description:
        "Our structured filing process and expert guidance help maximize the chances of successful visa approval.",
    },
    {
      title: "Complete End-to-End Assistance",
      description:
        "From document preparation to visa submission and approval updates, we support you throughout the entire process.",
    },
  ],

  [
    {
      question: "What is included in the Visa Filing service?",
      answer:
        "Our Visa Filing service includes application preparation, document verification, form completion, embassy submission guidance, and continuous application tracking until the visa decision.",
    },
    {
      question: "Will you review my visa application before submission?",
      answer:
        "Yes. Every visa application undergoes multiple quality checks to ensure it is complete, accurate, and compliant with embassy requirements.",
    },
    {
      question: "Can you help if embassy requirements change?",
      answer:
        "Absolutely. Our team stays updated with the latest immigration policies and embassy guidelines to ensure your application remains compliant throughout the process.",
    },
  ]
),

 buildService(
  "document-verification",
  "Document Verification",
  documentverification,
  "Verify Documents",
  "Required Documents",

`Our Document Verification service ensures that every document required for your university admission and student visa application is accurate, complete, and fully compliant with institutional and immigration requirements. Our experts carefully examine academic transcripts, certificates, passports, financial statements, identity documents, recommendation letters, Statements of Purpose, and other supporting paperwork to identify missing information, inconsistencies, or formatting issues before submission. Through detailed quality checks and professional guidance, we help students avoid unnecessary delays, reduce the risk of document-related rejections, and submit a well-organized application package with complete confidence.`,

  [
    {
      title: "Comprehensive Document Review",
      description:
        "Every required document is carefully checked for completeness, accuracy, and compliance with university and visa requirements.",
    },
    {
      title: "Error Detection",
      description:
        "Identify and correct missing information, inconsistencies, and formatting issues before submission.",
    },
    {
      title: "University & Embassy Compliance",
      description:
        "Ensure all documents meet the latest university admission and embassy documentation standards.",
    },
    {
      title: "Certified Guidance",
      description:
        "Receive professional advice on document preparation, notarization, translations, and supporting evidence.",
    },
    {
      title: "Reduced Application Delays",
      description:
        "Proper document verification minimizes the risk of application rejection, delays, or additional document requests.",
    },
    {
      title: "Submission-Ready Documentation",
      description:
        "We ensure your complete document set is organized, verified, and ready for successful submission.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Document Collection",
      description:
        "Collect all required academic, financial, identity, and supporting documents.",
      points: [
        "Document Checklist",
        "Requirement Review",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Verification Process",
      description:
        "Review each document for accuracy, completeness, and authenticity.",
      points: [
        "Quality Check",
        "Error Identification",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Corrections & Updates",
      description:
        "Guide you in correcting errors and obtaining any missing or updated documents.",
      points: [
        "Correction Support",
        "Document Updates",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Final Validation",
      description:
        "Perform a final review to ensure every document meets submission requirements.",
      points: [
        "Compliance Check",
        "Final Approval",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Submission Ready",
      description:
        "Deliver a fully verified and organized document package ready for university or visa submission.",
      points: [
        "Ready to Submit",
        "Expert Support",
      ],
    },
  ],

  [
    {
      title: "Experienced Verification Experts",
      description:
        "Our specialists understand university and embassy documentation requirements across multiple study destinations.",
    },
    {
      title: "Accurate Quality Checks",
      description:
        "Every document undergoes detailed verification to eliminate errors before submission.",
    },
    {
      title: "Latest Compliance Standards",
      description:
        "We stay updated with changing documentation requirements to ensure complete compliance.",
    },
    {
      title: "Personalized Support",
      description:
        "Receive one-to-one guidance for preparing, correcting, and organizing all required documents.",
    },
    {
      title: "Reduced Rejection Risk",
      description:
        "Thorough verification helps minimize document-related application delays and rejections.",
    },
    {
      title: "Complete Documentation Assistance",
      description:
        "From initial review to final validation, we provide end-to-end document verification support.",
    },
  ],

  [
    {
      question: "Why is document verification important?",
      answer:
        "Document verification ensures that all required documents are accurate, complete, and compliant with university and embassy requirements, reducing the risk of delays or rejection.",
    },
    {
      question: "Which documents do you verify?",
      answer:
        "We verify academic transcripts, certificates, passports, financial documents, identity proofs, recommendation letters, SOPs, and other supporting documents required for admission and visa applications.",
    },
    {
      question: "Can you help if my documents contain errors?",
      answer:
        "Yes. Our experts identify issues, explain the required corrections, and guide you through updating your documents before submission.",
    },
  ]
),

  buildService(
  "accommodation-support",
  "Accommodation Support",
  acomodation,
  "Find Accommodation",
  "Housing Options",

`Our Accommodation Support service helps international students find secure, comfortable, and affordable housing that suits their lifestyle, budget, and university location. We guide students through every stage of the accommodation process, including understanding different housing options, comparing properties, selecting trusted providers, reviewing rental agreements, and completing bookings before departure. Whether you prefer university residences, shared apartments, or private accommodation, our team ensures you have reliable housing arranged before arriving in your destination country, making your transition smoother and allowing you to settle into student life with confidence.`,

  [
    {
      title: "Verified Accommodation Options",
      description:
        "Explore trusted student accommodations, university residences, shared apartments, and private housing options.",
    },
    {
      title: "Budget-Friendly Solutions",
      description:
        "Find accommodation that matches your budget while ensuring comfort, safety, and convenience.",
    },
    {
      title: "Location Guidance",
      description:
        "Choose housing close to your university with easy access to transportation, shopping, and essential services.",
    },
    {
      title: "Booking Assistance",
      description:
        "Receive expert guidance throughout the accommodation booking process to avoid common mistakes and scams.",
    },
    {
      title: "Safe & Comfortable Living",
      description:
        "We help you secure accommodation that offers a safe environment and essential student-friendly amenities.",
    },
    {
      title: "Stress-Free Relocation",
      description:
        "Move abroad with confidence knowing your accommodation has been arranged before your arrival.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Requirement Assessment",
      description:
        "Understand your budget, preferred location, and accommodation preferences.",
      points: [
        "Budget Planning",
        "Location Preference",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Accommodation Search",
      description:
        "Identify suitable accommodation options based on your university and lifestyle needs.",
      points: [
        "Property Search",
        "Verified Listings",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Option Comparison",
      description:
        "Compare available accommodations based on cost, facilities, and distance from the university.",
      points: [
        "Price Comparison",
        "Facility Review",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Booking Assistance",
      description:
        "Guide you through booking procedures, agreements, and payment requirements.",
      points: [
        "Booking Support",
        "Agreement Review",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Move-In Support",
      description:
        "Receive assistance before arrival to ensure a smooth move into your new accommodation.",
      points: [
        "Arrival Planning",
        "Settlement Guidance",
      ],
    },
  ],

  [
    {
      title: "Trusted Housing Partners",
      description:
        "We work with reliable accommodation providers to offer safe and verified housing options for international students.",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Accommodation suggestions are tailored to your university, budget, and personal preferences.",
    },
    {
      title: "Affordable Living Options",
      description:
        "We help students find quality accommodation without exceeding their planned budget.",
    },
    {
      title: "Safe & Secure Housing",
      description:
        "Every recommended accommodation is selected with student safety, comfort, and convenience in mind.",
    },
    {
      title: "Complete Booking Guidance",
      description:
        "Our experts assist with the booking process, rental agreements, and important accommodation formalities.",
    },
    {
      title: "End-to-End Accommodation Support",
      description:
        "From searching for accommodation to settling into your new home abroad, we provide continuous assistance.",
    },
  ],

  [
    {
      question: "When should I book my accommodation?",
      answer:
        "We recommend securing your accommodation immediately after receiving your university admission or visa approval to ensure the best availability and pricing.",
    },
    {
      question: "Can you help me find accommodation near my university?",
      answer:
        "Yes. We help students find verified accommodation options located close to their university and suitable for their budget and lifestyle.",
    },
    {
      question: "Do you assist with accommodation booking?",
      answer:
        "Absolutely. We provide complete guidance throughout the accommodation booking process, including documentation, agreements, and move-in preparation.",
    },
  ]
),

 buildService(
  "travel-assistance",
  "Travel Assistance",
  travelassistance,
  "Plan Your Travel",
  "Travel Checklist",

 `Our Travel Assistance service is designed to ensure every student enjoys a safe, organized, and hassle-free journey to their study destination. We provide expert guidance on flight selection, travel scheduling, baggage preparation, airport procedures, travel insurance, immigration requirements, and essential travel documentation. Our experienced advisors help students prepare comprehensive pre-departure checklists while offering practical travel tips that minimize last-minute challenges. From planning your departure until you safely reach your destination, we remain committed to making your international travel experience comfortable, convenient, and stress-free.`,

  [
    {
      title: "Flight Booking Guidance",
      description:
        "Receive expert assistance in selecting the most suitable and cost-effective flights for your study destination.",
    },
    {
      title: "Travel Planning",
      description:
        "Plan your departure dates, transit routes, and arrival schedule to ensure a smooth international journey.",
    },
    {
      title: "Travel Documentation",
      description:
        "Ensure you carry all essential travel documents, including passport, visa, university letters, insurance, and other required paperwork.",
    },
    {
      title: "Travel Insurance Support",
      description:
        "Get guidance in selecting suitable travel and health insurance plans that meet university and immigration requirements.",
    },
    {
      title: "Pre-Departure Checklist",
      description:
        "Receive a comprehensive checklist covering luggage, finances, travel essentials, and arrival preparations.",
    },
    {
      title: "Stress-Free Travel Experience",
      description:
        "Travel confidently with expert support and practical guidance before, during, and after your departure.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Travel Planning",
      description:
        "Understand your travel timeline and prepare a complete departure plan.",
      points: [
        "Departure Planning",
        "Travel Schedule",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Flight Selection",
      description:
        "Choose the best flight options based on your destination, budget, and convenience.",
      points: [
        "Flight Booking",
        "Route Selection",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Travel Documentation",
      description:
        "Verify passports, visas, insurance, tickets, and all essential travel documents.",
      points: [
        "Document Check",
        "Travel File",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "Pre-Departure Guidance",
      description:
        "Prepare your luggage, understand airport procedures, and complete your travel checklist.",
      points: [
        "Packing Tips",
        "Airport Guidance",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Departure Support",
      description:
        "Receive final travel guidance to ensure a safe, comfortable, and hassle-free journey.",
      points: [
        "Travel Assistance",
        "Journey Support",
      ],
    },
  ],

  [
    {
      title: "Experienced Travel Advisors",
      description:
        "Our experts help students plan international travel efficiently while avoiding common travel-related issues.",
    },
    {
      title: "Personalized Travel Planning",
      description:
        "Travel recommendations are customized according to your destination, university schedule, and personal preferences.",
    },
    {
      title: "Complete Travel Guidance",
      description:
        "Receive expert advice on flights, baggage, airport procedures, documentation, and travel insurance.",
    },
    {
      title: "Reliable Travel Support",
      description:
        "Our team helps you stay prepared for every stage of your international journey with practical guidance.",
    },
    {
      title: "Safe & Comfortable Journey",
      description:
        "We ensure students are fully prepared for a smooth and stress-free travel experience abroad.",
    },
    {
      title: "End-to-End Travel Assistance",
      description:
        "From planning your journey to arriving safely at your destination, we provide complete travel support.",
    },
  ],

  [
    {
      question: "When should I book my flight?",
      answer:
        "We recommend booking your flight immediately after receiving your student visa to secure better fares and preferred travel dates.",
    },
    {
      question: "Do you help with travel insurance?",
      answer:
        "Yes. We guide students in selecting suitable travel and health insurance plans that meet university and immigration requirements.",
    },
    {
      question: "Will I receive a pre-departure checklist?",
      answer:
        "Absolutely. We provide a detailed pre-departure checklist covering travel documents, luggage, finances, airport procedures, and arrival preparation.",
    },
  ]
),

 buildService(
  "post-landing-services",
  "Post Landing Services",
  postlanding,
  "Get Post-Arrival Support",
  "Explore Settlement Services",

`Our Post Landing Services are designed to help students settle comfortably and confidently after arriving in their study destination. We provide comprehensive assistance with airport pickup coordination, accommodation check-in, local registrations, bank account opening, SIM card activation, public transportation guidance, healthcare information, and everyday essentials required for student life abroad. Our dedicated support team also offers local orientation and practical advice to help students quickly adapt to their new environment, ensuring a smooth transition from arrival to successfully beginning their academic journey with confidence and peace of mind.`,

  [
    {
      title: "Airport Pickup Assistance",
      description:
        "Enjoy a hassle-free arrival with guidance and support for airport pickup and transportation to your accommodation.",
    },
    {
      title: "Accommodation Settlement",
      description:
        "Receive assistance with check-in, understanding accommodation rules, and settling comfortably into your new home.",
    },
    {
      title: "Bank Account & SIM Support",
      description:
        "Get guidance on opening a local bank account, obtaining a SIM card, and activating essential communication services.",
    },
    {
      title: "Local Registration Guidance",
      description:
        "Complete mandatory registrations, university formalities, and local documentation with expert assistance.",
    },
    {
      title: "City & Lifestyle Orientation",
      description:
        "Learn about public transportation, nearby facilities, shopping, healthcare, and essential local services.",
    },
    {
      title: "Smooth Student Transition",
      description:
        "Our dedicated team helps you adapt quickly so you can focus on your studies and enjoy your new environment.",
    },
  ],

  [
    {
      step: 1,
      icon: process1,
      title: "Arrival Planning",
      description:
        "Prepare your arrival schedule and coordinate airport pickup or transportation.",
      points: [
        "Travel Coordination",
        "Arrival Support",
      ],
    },
    {
      step: 2,
      icon: process2,
      title: "Accommodation Check-In",
      description:
        "Assist you in moving into your accommodation and understanding local housing procedures.",
      points: [
        "Accommodation Setup",
        "Move-In Assistance",
      ],
    },
    {
      step: 3,
      icon: process3,
      title: "Essential Services",
      description:
        "Help you obtain a local SIM card, open a bank account, and complete important registrations.",
      points: [
        "Bank Account",
        "SIM Activation",
      ],
    },
    {
      step: 4,
      icon: process4,
      title: "City Orientation",
      description:
        "Introduce you to transportation, shopping, healthcare, and important local facilities.",
      points: [
        "Local Guidance",
        "Student Orientation",
      ],
    },
    {
      step: 5,
      icon: process5,
      title: "Ongoing Support",
      description:
        "Continue supporting you during your initial weeks abroad to ensure a comfortable transition.",
      points: [
        "Student Assistance",
        "Settlement Support",
      ],
    },
  ],

  [
    {
      title: "Dedicated Settlement Experts",
      description:
        "Our experienced team helps students settle comfortably into their new country after arrival.",
    },
    {
      title: "Complete Arrival Assistance",
      description:
        "From airport pickup to accommodation and local setup, we provide comprehensive post-arrival support.",
    },
    {
      title: "Local Knowledge & Guidance",
      description:
        "Receive practical advice about transportation, banking, healthcare, shopping, and student life.",
    },
    {
      title: "Personalized Student Support",
      description:
        "Every student receives customized guidance based on their destination, university, and personal needs.",
    },
    {
      title: "Stress-Free Transition",
      description:
        "We simplify the settlement process so you can adapt quickly and begin your academic journey with confidence.",
    },
    {
      title: "Continuous Assistance",
      description:
        "Our support doesn't end after arrival—we're available to help you during your initial settlement period abroad.",
    },
  ],

  [
    {
      question: "What are Post Landing Services?",
      answer:
        "Post Landing Services provide assistance after you arrive in your study destination, including airport pickup guidance, accommodation support, local registration, banking, SIM cards, transportation, and settlement assistance.",
    },
    {
      question: "Will you help me open a bank account and get a SIM card?",
      answer:
        "Yes. We guide students through opening a local bank account, obtaining a SIM card, and completing other essential setup procedures after arrival.",
    },
    {
      question: "How long do you provide post-arrival support?",
      answer:
        "Our team provides continued guidance during your initial settlement period to help you adapt comfortably to your new country, university, and lifestyle.",
    },
  ]
),
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
