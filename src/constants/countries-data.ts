export type FAQ = { question: string; answer: string };

export type CountryPageData = {
  slug: string;
  name: string;
  heroImage: string;
  heroSubtitle: string;
  overview: string;
  whyStudy: string[];
  visaInfo: string;
  universities: string[];
  careers: string[];
  faqs: FAQ[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

function buildCountry(
  slug: string,
  name: string,
  imageId: string,
  highlights: string[]
): CountryPageData {
  return {
    slug,
    name,
    heroImage: unsplash(imageId),
    heroSubtitle: `Discover world-class education, career pathways, and visa support for studying in ${name}.`,
    overview: `${name} stands among the most sought-after destinations for international students seeking quality education, global exposure, and long-term career growth. With internationally recognised degrees, diverse multicultural campuses, and robust post-study work options, ${name} offers a compelling proposition for ambitious students from India and across the world. GoAbroadly provides end-to-end guidance — from university shortlisting and application strategy to visa documentation and pre-departure orientation — ensuring your journey to ${name} is smooth, transparent, and successful. Our counsellors specialise in matching your academic profile, budget, and career goals with the right institutions and programs. Whether you are pursuing undergraduate studies, a master's degree, or professional qualifications, we help you navigate admissions timelines, English language requirements, financial documentation, and visa interviews with confidence.`,
    whyStudy: [
      `Globally ranked universities and research-intensive institutions across ${name}.`,
      `Strong industry connections with internship and graduate employment opportunities.`,
      `Multicultural student communities that enrich personal and professional development.`,
      `Clear visa pathways with structured documentation requirements and post-study options.`,
      `High quality of life, safety standards, and student support services on campus.`,
      ...highlights,
    ],
    visaInfo: `Student visa requirements for ${name} typically include a valid passport, confirmed admission from a recognised institution, proof of financial capacity, English language proficiency scores, and comprehensive supporting documents. Processing times vary by intake season and individual circumstances. GoAbroadly prepares your complete visa file — including Statement of Purpose review, financial evidence structuring, and mock interview sessions — to maximise approval chances. We track policy updates and embassy guidelines so your application reflects current requirements. Our 98% visa success rate includes students applying to ${name} across multiple intakes each year.`,
    universities: [
      `Leading public and private universities across major cities in ${name}`,
      `Specialised institutions for business, engineering, healthcare, and creative arts`,
      `Pathway and foundation programs for students needing academic preparation`,
      `Research universities with strong graduate employability outcomes`,
    ],
    careers: [
      `Graduate roles in technology, finance, healthcare, and engineering sectors`,
      `Post-study work permits enabling professional experience after graduation`,
      `Industry-linked programs with placement and internship components`,
      `Global alumni networks supporting international career mobility`,
    ],
    faqs: [
      {
        question: `What are the main intakes for studying in ${name}?`,
        answer: `Most institutions in ${name} offer primary intakes in September/October and January/February, with some programs available in additional terms. We recommend starting preparation 8–12 months before your target intake.`,
      },
      {
        question: `How much does it cost to study in ${name}?`,
        answer: `Tuition fees and living costs vary by city and program level. During your free assessment, we provide a personalised budget breakdown including tuition, accommodation, insurance, and visa fees.`,
      },
      {
        question: `Can GoAbroadly help with visa rejection cases for ${name}?`,
        answer: `Yes. We analyse previous refusal reasons, strengthen documentation, and develop a strategic reapplication plan tailored to ${name} embassy requirements.`,
      },
    ],
  };
}

export const countriesData: CountryPageData[] = [
  buildCountry("uk", "United Kingdom", "photo-1513635269975-59663e0ac1ad", [
    "Graduate Route visa allowing up to two years post-study work.",
    "Home to Russell Group universities and world-leading research.",
  ]),
  buildCountry("germany", "Germany", "photo-1467269209814-0929d798b83f", [
    "Many public universities charge minimal or no tuition fees.",
    "Strong engineering and manufacturing industry connections.",
  ]),
  buildCountry("france", "France", "photo-1502602898657-3e91760cbb34", [
    "Prestigious grandes écoles and affordable public universities.",
    "Central location offering travel access across Europe.",
  ]),
  buildCountry("ireland", "Ireland", "photo-1590099060116-2b47c687e27a", [
    "English-speaking EU hub with major tech company headquarters.",
    "Third Level Graduate Scheme for post-study employment.",
  ]),
  buildCountry("netherlands", "Netherlands", "photo-1534351590316-856c2190d2b7", [
    "Wide range of English-taught bachelor's and master's programs.",
    "Orientation Year permit for graduates seeking employment.",
  ]),
  buildCountry("sweden", "Sweden", "photo-1509356843151-3e7d96225e93", [
    "Innovation-driven economy with sustainability focus.",
    "High English proficiency across universities and society.",
  ]),
  buildCountry("canada", "Canada", "photo-1501785888041-af3ef285b470", [
    "Post-Graduation Work Permit up to three years.",
    "Clear pathways to permanent residency for graduates.",
  ]),
  buildCountry("usa", "United States", "photo-1496442226666-8d4d0e62e6e9", [
    "World-leading research universities and diverse program options.",
    "Optional Practical Training for professional experience.",
  ]),
  buildCountry("australia", "Australia", "photo-1506973035872-a4ec16b8e8d9", [
    "Temporary Graduate visa for post-study work rights.",
    "High living standards and strong graduate outcomes.",
  ]),
  buildCountry("new-zealand", "New Zealand", "photo-1469521669690-753a208814e5", [
    "Post-study work visa options for eligible graduates.",
    "Safe, welcoming environment with practical education focus.",
  ]),
  buildCountry("singapore", "Singapore", "photo-1525621488876-890f85be049c", [
    "Asia's leading education hub with global university partnerships.",
    "Strong finance, technology, and logistics career sectors.",
  ]),
  buildCountry("dubai", "Dubai", "photo-1512453979798-5ea266f8880c", [
    "International branch campuses of UK and Australian universities.",
    "Growing business hub with tax-free income opportunities.",
  ]),
];

export function getCountryBySlug(slug: string): CountryPageData | undefined {
  return countriesData.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countriesData.map((c) => c.slug);
}
