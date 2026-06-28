import type { FAQ } from "./countries-data";

export type StudyAbroadPageData = {
  slug: string;
  country: string;
  heroImage: string;
  flagImage: string;
  visaTypes: string[];
  heroSubtitle: string;
  overview: string;
  topUniversities: string[];
  tuitionFees: string;
  scholarships: string[];
  studentLife: string;
  visaProcess: string;
  faqs: FAQ[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

function buildStudyAbroad(
  slug: string,
  country: string,
  imageId: string,
  flagImage: string,
  visaTypes: string[],
  uniExamples: string[]
): StudyAbroadPageData {
return {
  slug,
  country,
  heroImage: unsplash(imageId),
  flagImage,
  visaTypes,
    heroSubtitle: `Your complete guide to studying in ${country} — universities, costs, scholarships, and visa process.`,
    overview: `Studying in ${country} opens doors to globally recognised qualifications, diverse cultural experiences, and strong career prospects. International students choose ${country} for its academic excellence, research opportunities, and supportive campus environments. GoAbroadly provides comprehensive guidance for every stage — from selecting the right university and program to securing your student visa and preparing for departure. Our counsellors have placed thousands of students in ${country} across undergraduate, postgraduate, and professional pathways. With partnerships across leading institutions and deep knowledge of admission requirements, we maximise your chances of receiving offer letters from top-ranked universities. Whether you are pursuing business, engineering, healthcare, or creative arts, we tailor our approach to your academic profile, budget, and career ambitions.`,
    topUniversities: uniExamples,
    tuitionFees: `Tuition fees in ${country} vary significantly by institution type, program level, and city. Undergraduate programs typically range from moderate to premium depending on the university ranking and field of study. Postgraduate programs, especially MBA and specialised master's degrees, may carry higher fees but often offer strong return on investment through graduate employment outcomes. Living costs including accommodation, food, transport, and insurance should be budgeted separately — typically higher in major metropolitan areas. GoAbroadly provides a detailed, personalised cost breakdown during your free assessment, including tuition, living expenses, visa fees, and health insurance requirements specific to ${country}.`,
    scholarships: [
      `Merit-based scholarships for outstanding academic achievers`,
      `Need-based financial aid programs at select institutions`,
      `Government and external funding opportunities for international students`,
      `University-specific bursaries and early application discounts`,
      `Sports, arts, and leadership scholarships at participating campuses`,
    ],
    studentLife: `${country} offers a vibrant student experience with multicultural campuses, active student societies, and extensive support services for international students. From orientation programs and academic tutoring to career fairs and cultural events, universities invest heavily in student wellbeing and employability. Cities across ${country} provide safe, welcoming environments with excellent public transport, healthcare access, and recreational opportunities. Part-time work options during studies help students gain experience and manage living costs within visa regulations. GoAbroadly's post-landing support ensures a smooth transition — including accommodation guidance, bank account setup advice, and local orientation resources.`,
    visaProcess: `The student visa process for ${country} requires confirmed admission, proof of financial capacity, English language proficiency, and comprehensive supporting documentation. GoAbroadly manages your entire visa file — from CAS or equivalent confirmation through biometric appointment, application submission, and interview preparation. Our structured approach addresses common refusal triggers including financial documentation gaps, SOP weaknesses, and interview performance. With a 98% visa success rate, we have helped thousands of students successfully obtain their ${country} student visa and begin their international education journey.`,
    faqs: [
      {
        question: `What IELTS score do I need to study in ${country}?`,
        answer: `Requirements vary by university and program. Most institutions accept IELTS 6.0–7.0 or equivalent PTE/TOEFL scores. We assess your profile and recommend target scores during your free consultation.`,
      },
      {
        question: `When should I start applying to study in ${country}?`,
        answer: `We recommend starting 8–12 months before your target intake. This allows time for test preparation, university applications, offer acceptance, and visa processing.`,
      },
      {
        question: `Can I work while studying in ${country}?`,
        answer: `Most student visas permit limited part-time work during term and full-time during breaks. Specific hours and conditions vary — we explain the regulations applicable to your visa type during consultation.`,
      },
    ],
  };
}

export const studyAbroadData: StudyAbroadPageData[] = [
  buildStudyAbroad(
    "uk",
    "United Kingdom",
    "photo-1513635269975-59663e0ac1ad",
    "https://flagcdn.com/w160/gb.png",
    ["Study", "Work", "Visit", "Settle"],
    [
      "Middlesex University",
      "Sheffield Hallam University",
      "Coventry University",
      "University of Greenwich",
      "De Montfort University",
      "Anglia Ruskin University",
    ]
  ),

  buildStudyAbroad(
    "canada",
    "Canada",
    "photo-1501785888041-af3ef285b470",
    "https://flagcdn.com/w160/ca.png",
    ["Study", "Work", "PR", "Visit"],
    [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Waterloo",
      "Seneca College",
      "Humber College",
    ]
  ),

  buildStudyAbroad(
    "australia",
    "Australia",
    "photo-1506973035872-a4ec16b8e8d9",
    "https://flagcdn.com/w160/au.png",
    ["Study", "Work", "Visit", "PR"],
    [
      "University of Melbourne",
      "University of Sydney",
      "Monash University",
      "RMIT University",
      "Deakin University",
      "Griffith University",
    ]
  ),

  buildStudyAbroad(
    "usa",
    "USA",
    "photo-1496442226666-8d4d0e62e6e9",
    "https://flagcdn.com/w160/us.png",
    ["Study", "Work", "Visit", "Settle"],
    [
      "Arizona State University",
      "Northeastern University",
      "Pace University",
      "University of South Florida",
      "California State University",
      "Kent State University",
    ]
  ),

  buildStudyAbroad(
  "germany",
  "Germany",
  "photo-1502602898657-3e91760cbb34",
  "https://flagcdn.com/w160/de.png",
  ["Study", "Work", "EU Blue Card"],
  [
    "TU Munich",
    "RWTH Aachen",
    "University of Heidelberg",
    "Free University of Berlin",
    "University of Stuttgart",
    "TU Berlin",
  ]
),

  buildStudyAbroad(
    "ireland",
    "Ireland",
    "photo-1590089415225-401ed6f9db8e",
    "https://flagcdn.com/w160/ie.png",
    ["Study", "Work", "Visit", "PR"],
    [
      "Trinity College Dublin",
      "University College Dublin",
      "Dublin City University",
      "University of Galway",
      "Maynooth University",
      "Technological University Dublin",
    ]
  ),

  buildStudyAbroad(
    "new-zealand",
    "New Zealand",
    "photo-1683712922661-71b6f671ac25",
    "https://flagcdn.com/w160/nz.png",
    ["Study", "Work", "Visit", "PR"],
    [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "AUT University",
    ]
  ),

  buildStudyAbroad(
    "france",
    "France",
    "photo-1502602898657-3e91760cbb34",
    "https://flagcdn.com/w160/fr.png",
    ["Study", "Work", "Visit"],
    [
      "Sorbonne University",
      "Sciences Po",
      "HEC Paris",
      "Ecole Polytechnique",
      "University of Paris",
      "ESSEC Business School",
    ]
  ),

  buildStudyAbroad(
    "netherlands",
    "Netherlands",
    "photo-1512470876302-972faa2aa9a4",
    "https://flagcdn.com/w160/nl.png",
    ["Study", "Work", "Visit"],
    [
      "University of Amsterdam",
      "Delft University of Technology",
      "Erasmus University Rotterdam",
      "Utrecht University",
      "Leiden University",
      "Wageningen University",
    ]
  ),

  buildStudyAbroad(
    "singapore",
    "Singapore",
    "photo-1775306963755-8897be3967bb",
    "https://flagcdn.com/w160/sg.png",
    ["Study", "Work", "Visit"],
    [
      "National University of Singapore",
      "Nanyang Technological University",
      "Singapore Management University",
      "James Cook University Singapore",
      "SIM Global Education",
      "Kaplan Singapore",
    ]
  ),
];

export function getStudyAbroadBySlug(slug: string): StudyAbroadPageData | undefined {
  return studyAbroadData.find((s) => s.slug === slug);
}

export function getAllStudyAbroadSlugs(): string[] {
  return studyAbroadData.map((s) => s.slug);
}
