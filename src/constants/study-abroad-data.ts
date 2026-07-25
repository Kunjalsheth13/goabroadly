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

export const studyAbroadData: StudyAbroadPageData[] = [
  {
    slug: "uk",
    country: "United Kingdom",
    heroImage: unsplash("photo-1513635269975-59663e0ac1ad"),
    flagImage: "https://flagcdn.com/w160/gb.png",
    visaTypes: ["Study", "Work", "Visit", "Settle"],
    heroSubtitle:
      "Your complete guide to studying in the UK — one-year master's degrees, city options, costs, and the Graduate Route visa.",
    overview:
      "The UK draws Indian students with its one-year master's programs, letting you earn a globally recognised degree and enter the job market faster than most other destinations. Beyond the well-known Russell Group names, a strong tier of modern universities — Middlesex, Coventry, Sheffield Hallam, and others — offers career-focused programs at more accessible fees, often with generous scholarships for Indian applicants. GoAbroadly works with students across every budget bracket, matching your grades, IELTS score, and career goals to universities where you're genuinely competitive, then managing the UCAS or direct application process through to your CAS confirmation.",
    topUniversities: [
      "Middlesex University",
      "Sheffield Hallam University",
      "Coventry University",
      "University of Greenwich",
      "De Montfort University",
      "Anglia Ruskin University",
    ],
    tuitionFees:
      "Tuition at UK universities for international students generally ranges from £13,000–£22,000 per year for postgraduate programs, with modern universities like Middlesex and Coventry typically at the lower end and Russell Group institutions higher. Living costs vary sharply by city — London requires the largest budget, while cities like Coventry, Sheffield, and Leicester are considerably more affordable. GoAbroadly builds a full cost breakdown covering tuition, accommodation, the Immigration Health Surcharge, and monthly living expenses specific to your chosen city, so there are no surprises once you land.",
    scholarships: [
      "Vice-Chancellor's and merit scholarships worth up to £5,000 at partner universities",
      "Early application fee waivers and tuition discounts at several modern universities",
      "Chevening and Commonwealth scholarships for outstanding postgraduate applicants",
      "Alumni discounts for students progressing from undergraduate to postgraduate study",
      "Country- or region-specific bursaries offered to Indian applicants at select institutions",
    ],
    studentLife:
      "UK campuses are known for their active students' unions, society culture, and strong international student support offices that run dedicated orientation weeks for new arrivals. Cities like Coventry, Sheffield, and Leicester offer a lower cost of living than London while still providing excellent transport links and large South Asian communities, making the transition easier for Indian students. Part-time work of up to 20 hours a week during term is permitted on a Student Visa, and most universities run on-campus job boards to help students find flexible work. GoAbroadly's post-landing support covers accommodation booking, bank account setup, and local orientation once you arrive.",
    visaProcess:
      "The UK Student Visa process centres on your Confirmation of Acceptance for Studies (CAS), which your university issues once you accept your offer and pay any required deposit. You'll need to show funds held for 28 consecutive days covering tuition and living costs, pay the Immigration Health Surcharge, and in some STEM courses obtain ATAS clearance. GoAbroadly manages your CAS-linked financial evidence, checks ATAS requirements early where relevant, and prepares you for any credibility interview UKVI may request, aiming for a smooth decision within the typical 3–8 week window.",
    faqs: [
      {
        question: "What IELTS score do I need to study in the UK?",
        answer:
          "Most universities require an overall IELTS score of 6.0–6.5 for undergraduate and 6.5–7.0 for postgraduate programs, though some modern universities accept lower bands with individual component minimums. We assess your target score during your free consultation.",
      },
      {
        question: "When should I start applying to study in the UK?",
        answer:
          "For the September intake, we recommend starting 9–12 months in advance to allow time for IELTS preparation, university applications, offer acceptance, and CAS-based visa processing.",
      },
      {
        question: "Can I work while studying in the UK?",
        answer:
          "Yes, Student Visa holders can typically work up to 20 hours per week during term time and full-time during scheduled breaks, subject to your specific visa conditions.",
      },
    ],
  },
  {
    slug: "canada",
    country: "Canada",
    heroImage: unsplash("photo-1501785888041-af3ef285b470"),
    flagImage: "https://flagcdn.com/w160/ca.png",
    visaTypes: ["Study", "Work", "PR", "Visit"],
    heroSubtitle:
      "Your complete guide to studying in Canada — top universities, colleges, PGWP eligibility, and the path to permanent residency.",
    overview:
      "Canada remains the top choice for Indian students largely because of its clear, structured route from study to Post-Graduation Work Permit to permanent residency — a pathway few other countries offer with this much predictability. Options range from research-intensive universities like Toronto and UBC to career-focused colleges like Seneca and Humber, giving students at every budget level a viable route to a Canadian credential. GoAbroadly helps you choose between the university and college pathway based on your PGWP eligibility, budget, and long-term PR goals, then manages your Designated Learning Institution application and Study Permit file end-to-end.",
    topUniversities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Waterloo",
      "Seneca College",
      "Humber College",
    ],
    tuitionFees:
      "Tuition for international students in Canada typically ranges from CAD 15,000–35,000 per year at universities, while diploma programs at colleges like Seneca and Humber are generally more affordable, often CAD 13,000–20,000 per year. Living costs depend heavily on the province — Toronto and Vancouver carry the highest costs, while cities in Atlantic Canada or smaller Ontario towns are considerably cheaper. GoAbroadly prepares a full budget covering tuition, the GIC or financial evidence required for your Study Permit, and monthly living expenses tailored to your chosen city.",
    scholarships: [
      "Entrance scholarships for high-achieving international students at partner universities",
      "College-specific bursaries for diploma and postgraduate certificate programs",
      "Merit-based renewable scholarships tied to maintaining a minimum GPA",
      "Research assistantships and graduate funding at research-intensive universities",
      "Co-op program earnings that offset tuition and living costs during study",
    ],
    studentLife:
      "Canadian campuses are known for their multicultural student body and structured international student offices offering orientation, academic advising, and career services from day one. Cities like Toronto, Vancouver, and Montreal have large, established Indian communities, making the cultural transition easier, while smaller cities offer a quieter, more affordable alternative. Students can work up to 24 hours per week off-campus during term under current Study Permit rules, and co-op programs at many colleges build paid work terms directly into the curriculum. GoAbroadly's post-landing support covers accommodation, SIN registration, and settling-in guidance once you arrive.",
    visaProcess:
      "A Canada Study Permit requires an acceptance letter from a Designated Learning Institution, proof of funds — either through the Student Direct Stream's GIC requirement or standard financial evidence — a clean medical exam where applicable, and biometrics. The Student Direct Stream offers significantly faster processing for eligible Indian applicants meeting language and financial thresholds. GoAbroadly determines your SDS eligibility upfront, arranges your GIC through an approved bank, and compiles a complete Study Permit application designed to minimise processing delays.",
    faqs: [
      {
        question: "What IELTS score do I need to study in Canada?",
        answer:
          "Universities typically require an overall IELTS score of 6.5, while colleges often accept 6.0, with specific band requirements varying by program. We confirm the exact requirement for your shortlisted institutions during consultation.",
      },
      {
        question: "When should I start applying to study in Canada?",
        answer:
          "We recommend starting 8–10 months before your target intake (Fall, Winter, or Summer) to allow time for admissions, GIC setup, and Study Permit processing, especially outside the faster SDS stream.",
      },
      {
        question: "Can studying in Canada lead to permanent residency?",
        answer:
          "Yes, most students use their Canadian credential and subsequent PGWP work experience to qualify for permanent residency via Express Entry or a Provincial Nominee Program, and we help plan this pathway from your initial university selection.",
      },
    ],
  },
  {
    slug: "australia",
    country: "Australia",
    heroImage: unsplash("photo-1506973035872-a4ec16b8e8d9"),
    flagImage: "https://flagcdn.com/w160/au.png",
    visaTypes: ["Study", "Work", "Visit", "PR"],
    heroSubtitle:
      "Your complete guide to studying in Australia — Group of Eight universities, city living costs, and the Temporary Graduate visa.",
    overview:
      "Australia offers Indian students a strong mix of globally ranked Group of Eight universities and career-focused institutions like RMIT, Deakin, and Griffith, spread across vibrant, high quality-of-life cities such as Melbourne, Sydney, and Brisbane. Its points-tested skilled migration system gives graduates in in-demand occupations a defined route to permanent residency once they've completed their studies and gained relevant work experience. GoAbroadly helps students craft the Genuine Student statement central to every Australian visa application, choose between metro and regional study locations, and understand how each choice affects post-study work rights.",
    topUniversities: [
      "University of Melbourne",
      "University of Sydney",
      "Monash University",
      "RMIT University",
      "Deakin University",
      "Griffith University",
    ],
    tuitionFees:
      "Tuition fees in Australia typically range from AUD 20,000–45,000 per year, with Group of Eight universities generally at the higher end and institutions like Griffith and Deakin offering more moderate fees for comparable program quality. Living costs are highest in Sydney and Melbourne, while Brisbane, Adelaide, and regional centres are noticeably more affordable. GoAbroadly provides a complete, personalised cost breakdown including tuition, Overseas Student Health Cover, and monthly living expenses specific to your chosen city or region.",
    scholarships: [
      "Vice-Chancellor's International Scholarships offering partial tuition fee reductions",
      "Destination Australia scholarships for students studying at regional campuses",
      "Merit-based scholarships tied to strong academic transcripts and English scores",
      "Alumni tuition discounts for students continuing from undergraduate to postgraduate study",
      "Faculty-specific scholarships in engineering, business, and health sciences",
    ],
    studentLife:
      "Australian universities invest heavily in international student support, with dedicated orientation programs, academic mentoring, and career services available from your first week on campus. Melbourne and Sydney offer large, established Indian communities and extensive public transport, while regional cities provide a quieter pace of life along with extended post-study work rights as an incentive. Students can work up to 48 hours per fortnight during term under current Student Visa conditions, helping offset living costs while gaining local experience. GoAbroadly's post-landing support includes accommodation guidance, Medicare-equivalent OSHC activation, and local orientation once you land.",
    visaProcess:
      "The Australian Student Visa (subclass 500) requires a Confirmation of Enrolment (CoE), a Genuine Student statement explaining your study rationale and circumstances, proof of financial capacity, Overseas Student Health Cover, and English proficiency test results. The Genuine Student statement carries significant weight in the Department of Home Affairs' assessment, making a well-articulated, individualised statement essential. GoAbroadly works directly with you to draft this statement and compiles CoE-aligned financial documentation that meets current visa standards.",
    faqs: [
      {
        question: "What IELTS score do I need to study in Australia?",
        answer:
          "Most bachelor's programs require an overall IELTS score of 6.0–6.5, while postgraduate and Group of Eight programs often require 6.5–7.0. We recommend a target score based on your shortlisted universities during your free consultation.",
      },
      {
        question: "When should I start applying to study in Australia?",
        answer:
          "For the February/March intake, we recommend starting 8–10 months in advance, allowing time for university applications, English testing, and Genuine Student statement preparation before visa lodgement.",
      },
      {
        question: "Can I work while studying in Australia?",
        answer:
          "Yes, Student Visa holders can currently work up to 48 hours per fortnight during term and unlimited hours during scheduled course breaks, subject to visa conditions in place at the time of your study.",
      },
    ],
  },
  {
    slug: "usa",
    country: "USA",
    heroImage: unsplash("photo-1496442226666-8d4d0e62e6e9"),
    flagImage: "https://flagcdn.com/w160/us.png",
    visaTypes: ["Study", "Work", "Visit", "Settle"],
    heroSubtitle:
      "Your complete guide to studying in the USA — university selection, funding, the F-1 visa interview, and OPT.",
    overview:
      "The USA offers the widest range of university choices in the world, from large public research universities like Arizona State and Kent State to career-focused institutions like Northeastern and Pace, giving students at every academic and financial profile a viable pathway to an American degree. Optional Practical Training — extendable to 36 months for STEM graduates — gives students meaningful time to gain US work experience after graduation. GoAbroadly helps students navigate this vast landscape strategically, matching your GRE/GMAT scores and budget to universities where you're genuinely competitive, then preparing the SEVIS, I-20, and F-1 interview documentation that determines your visa outcome.",
    topUniversities: [
      "Arizona State University",
      "Northeastern University",
      "Pace University",
      "University of South Florida",
      "California State University",
      "Kent State University",
    ],
    tuitionFees:
      "Tuition in the USA varies widely, with public universities like Arizona State and Kent State typically ranging from USD 18,000–28,000 per year for international students, while private institutions like Northeastern and Pace can range from USD 35,000–55,000 annually. Living costs depend heavily on the city and campus location, with coastal and major metro areas costing significantly more than the Midwest or Southern states. GoAbroadly prepares a realistic, personalised budget covering tuition, SEVIS fee, health insurance, and monthly living costs specific to your chosen university.",
    scholarships: [
      "Merit-based scholarships and tuition waivers offered directly by many public universities",
      "Graduate assistantships combining tuition remission with a modest stipend",
      "Departmental scholarships for strong applicants in STEM and business programs",
      "Need-based aid available at select private institutions for international students",
      "External scholarships from organisations supporting Indian students studying in the US",
    ],
    studentLife:
      "US campuses offer extensive student services, from International Student and Scholar Services (ISSS) offices handling visa compliance to career centres running dedicated recruitment events with major employers. Cities and campus towns vary enormously — Boston and Tampa offer vibrant, diverse student communities, while university towns around Kent State or Cal State campuses provide a quieter, more affordable college-town experience. On-campus work of up to 20 hours per week is generally permitted for F-1 students, and Curricular Practical Training (CPT) allows relevant internships during study for many programs. GoAbroadly's post-landing support covers housing, SSN/bank account setup, and orientation once you arrive.",
    visaProcess:
      "The F-1 Student Visa process begins with your I-20 form from a SEVP-certified institution, followed by payment of the SEVIS I-901 fee, DS-160 form completion, and a visa interview at a US Embassy or Consulate. The interview is decisive — officers assess your financial documentation, academic intent, and ties to India within a matter of minutes, and outcomes are typically given on the spot. GoAbroadly runs intensive mock interview sessions tailored to Indian consulate patterns, reviews your I-20 and financial evidence for consistency, and prepares you thoroughly before your appointment date.",
    faqs: [
      {
        question: "What IELTS or TOEFL score do I need to study in the USA?",
        answer:
          "Most universities accept IELTS 6.0–7.0 or TOEFL 80–100, with exact requirements varying by program and university tier. We help you identify target scores based on your shortlisted institutions.",
      },
      {
        question: "When should I start applying to study in the USA?",
        answer:
          "We recommend starting 10–12 months before your target Fall intake, given the need for standardised testing, application essays, admission decisions, and F-1 visa interview scheduling.",
      },
      {
        question: "Can I work while studying in the USA?",
        answer:
          "Yes, F-1 students can generally work up to 20 hours per week on-campus during term, with off-campus work options like CPT and OPT available under specific program and eligibility conditions.",
      },
    ],
  },
  {
    slug: "germany",
    country: "Germany",
    heroImage: unsplash("photo-1502602898657-3e91760cbb34"),
    flagImage: "https://flagcdn.com/w160/de.png",
    visaTypes: ["Study", "Work", "EU Blue Card"],
    heroSubtitle:
      "Your complete guide to studying in Germany — tuition-free public universities, blocked accounts, and the EU Blue Card.",
    overview:
      "Germany stands apart for its tuition-free or near-free public universities, making it one of the most cost-effective destinations for a globally recognised engineering or technology degree. Institutions like TU Munich and RWTH Aachen consistently rank among the world's best for engineering, while cities like Berlin and Stuttgart offer direct proximity to major automotive and industrial employers. GoAbroadly guides students through Germany's distinctive application system — uni-assist evaluations, APS certification, and blocked account setup — ensuring your file meets each university's specific and often rigorous documentation standards.",
    topUniversities: [
      "TU Munich",
      "RWTH Aachen",
      "University of Heidelberg",
      "Free University of Berlin",
      "University of Stuttgart",
      "TU Berlin",
    ],
    tuitionFees:
      "Most German public universities charge little to no tuition fees for international students, with only a modest semester contribution (typically €150–€350) covering administrative costs and a public transport pass. Living costs are the primary budget item, averaging €800–€1,100 per month depending on the city — Munich and Stuttgart are notably more expensive than Berlin or Aachen. GoAbroadly helps you plan your blocked account and monthly budget precisely to meet German consulate financial evidence requirements.",
    scholarships: [
      "DAAD scholarships covering tuition, stipend, and travel costs for qualifying students",
      "Deutschlandstipendium merit-based scholarships available at many universities",
      "University-specific scholarships for international master's students",
      "Erasmus+ funding for eligible exchange and joint-degree program participants",
      "Research assistantship positions at technical universities offering a modest stipend",
    ],
    studentLife:
      "German universities offer structured International Offices that assist with enrolment, health insurance registration, and city registration (Anmeldung) formalities every new student must complete. Cities like Munich and Berlin have large international and Indian student communities, while smaller university towns like Aachen offer a close-knit, campus-focused lifestyle. International students can work up to 140 full days or 280 half days per year without needing separate work permit approval, helping offset the otherwise low cost of living. GoAbroadly's post-landing support covers Anmeldung registration, health insurance setup, and local orientation once you arrive.",
    visaProcess:
      "The German National (Type D) Student Visa requires university admission confirmation, a blocked account demonstrating sufficient funds for roughly a year of living expenses, health insurance, and — for select courses or states — an APS certificate verifying your academic documents. Processing at German missions in India typically takes 6–12 weeks. GoAbroadly sets up your blocked account through approved providers, manages APS certification where required, and ensures full document translation and notarisation to consulate standards.",
    faqs: [
      {
        question: "What IELTS score do I need to study in Germany?",
        answer:
          "English-taught programs typically require IELTS 6.0–6.5, though requirements vary by university and course, with some programs instead requiring German language proficiency (B1/B2) for German-taught degrees.",
      },
      {
        question: "When should I start applying to study in Germany?",
        answer:
          "We recommend starting 10–12 months before your target intake, particularly for the winter semester, given the additional time needed for uni-assist processing, APS certification where required, and blocked account setup.",
      },
      {
        question: "Is a blocked account mandatory for the German student visa?",
        answer:
          "Yes, most applicants must open a blocked account demonstrating sufficient funds for one year of living expenses, unless covered by a DAAD scholarship or formal sponsorship — we coordinate this setup with approved providers.",
      },
    ],
  },
  {
    slug: "ireland",
    country: "Ireland",
    heroImage: unsplash("photo-1590089415225-401ed6f9db8e"),
    flagImage: "https://flagcdn.com/w160/ie.png",
    visaTypes: ["Study", "Work", "Visit", "PR"],
    heroSubtitle:
      "Your complete guide to studying in Ireland — Trinity, UCD, tuition costs, and the Third Level Graduate Programme.",
    overview:
      "Ireland offers Indian students an English-speaking EU base with direct proximity to the European headquarters of Google, Meta, and other major tech companies concentrated around Dublin. Institutions like Trinity College Dublin and UCD combine centuries of academic tradition with a genuinely welcoming, compact student experience, while regional universities like Galway and Maynooth offer strong programs at a lower cost of living. GoAbroadly helps students navigate Ireland's direct university application system, structure financial evidence to INIS standards, and plan the GNIB registration required immediately after arrival.",
    topUniversities: [
      "Trinity College Dublin",
      "University College Dublin",
      "Dublin City University",
      "University of Galway",
      "Maynooth University",
      "Technological University Dublin",
    ],
    tuitionFees:
      "Tuition fees for international students in Ireland typically range from €10,000–€25,000 per year depending on the course and institution, with Trinity and UCD generally at the higher end for specialised master's programs. Dublin carries by far the highest living costs nationally, while cities like Galway and Maynooth offer more affordable accommodation and daily expenses. GoAbroadly provides a full, personalised cost breakdown covering tuition, mandatory health insurance, and monthly living costs for your chosen city.",
    scholarships: [
      "Trinity International Scholarships for high-achieving postgraduate applicants",
      "UCD Global Excellence Scholarships offering partial tuition fee reductions",
      "Government of Ireland scholarships for select research and postgraduate programs",
      "University-specific bursaries for students progressing to postgraduate study",
      "Early application fee discounts offered by several regional institutions",
    ],
    studentLife:
      "Irish universities are known for their smaller class sizes and genuinely close student-faculty relationships compared to larger European systems, alongside dedicated international student offices supporting visa and settlement queries. Dublin offers a fast-growing Indian community and extensive public transport, while Galway and Maynooth provide a quieter, more affordable campus-town experience. Students can generally work up to 20 hours per week during term and full-time during scheduled breaks, helping offset Dublin's relatively high living costs. GoAbroadly's post-landing support covers GNIB registration, accommodation guidance, and local orientation once you land.",
    visaProcess:
      "Non-EU students require a 'D' Study Visa, needing an unconditional offer letter, proof of course fee payment, evidence of at least €10,000 (or as specified) in available funds, private medical insurance, and academic transcripts. After arrival, students must register with the Garda National Immigration Bureau (GNIB) for their Irish Residence Permit within the specified timeframe. GoAbroadly prepares your full financial evidence file to INIS standards and guides you through the post-arrival GNIB registration process step by step.",
    faqs: [
      {
        question: "What IELTS score do I need to study in Ireland?",
        answer:
          "Most institutions require an overall IELTS score of 6.0–6.5 for undergraduate and 6.5 for postgraduate programs, though specific requirements vary by university and course. We confirm your target score during consultation.",
      },
      {
        question: "When should I start applying to study in Ireland?",
        answer:
          "We recommend starting 8–10 months before your target September intake, allowing time for offer acceptance, financial evidence preparation, and 'D' Study Visa processing through INIS.",
      },
      {
        question: "Can I work while studying in Ireland?",
        answer:
          "Yes, non-EU Student Visa holders can typically work up to 20 hours per week during term and up to 40 hours per week during official college holiday periods.",
      },
    ],
  },
  {
    slug: "new-zealand",
    country: "New Zealand",
    heroImage: unsplash("photo-1683712922661-71b6f671ac25"),
    flagImage: "https://flagcdn.com/w160/nz.png",
    visaTypes: ["Study", "Work", "Visit", "PR"],
    heroSubtitle:
      "Your complete guide to studying in New Zealand — universities, living costs, and the Post-Study Work Visa.",
    overview:
      "New Zealand combines a genuinely safe, welcoming environment with a practical, hands-on approach to education, particularly strong in agriculture, engineering, and applied sciences. The University of Auckland and University of Otago anchor a small but high-quality higher education system, while institutions like AUT and Massey offer strong applied and technology-focused programs. GoAbroadly guides students through Immigration New Zealand's requirements — Offer of Place documentation, financial evidence, and genuine intent verification — ensuring a compliant, well-prepared Student Visa application.",
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "AUT University",
    ],
    tuitionFees:
      "Tuition fees in New Zealand typically range from NZD 22,000–35,000 per year depending on the course and institution, with Auckland and Wellington-based universities generally at the higher end. Living costs are generally lower than in Australia, though Auckland remains the most expensive city nationally. GoAbroadly provides a detailed, personalised cost breakdown covering tuition, mandatory medical/travel insurance, and monthly living expenses for your chosen city.",
    scholarships: [
      "University of Auckland International Excellence Scholarships for strong academic applicants",
      "New Zealand International Scholarships available for select postgraduate programs",
      "University-specific merit scholarships offered at Otago, Massey, and other institutions",
      "Faculty-specific scholarships in agriculture, engineering, and applied sciences",
      "Early enrolment tuition discounts offered by several New Zealand institutions",
    ],
    studentLife:
      "New Zealand universities emphasise close student-lecturer relationships and structured Pastoral Care Code support, ensuring international students have clear access to academic, welfare, and accommodation assistance throughout their studies. Auckland offers the largest and most established Indian community, while cities like Dunedin (home to Otago) and Palmerston North offer a quieter, more affordable university-town experience. Students can generally work up to 20 hours per week during term and full-time during scheduled breaks, helping manage living costs. GoAbroadly's post-landing support covers accommodation, local orientation, and settling-in guidance once you arrive.",
    visaProcess:
      "The New Zealand Student Visa requires an Offer of Place from an accredited institution, evidence of sufficient funds (currently around NZD 20,000 per year or as specified), a return air ticket or sufficient funds to purchase one, and medical/character clearances for longer courses. Immigration New Zealand also assesses genuine intent to study through supporting evidence in your application. GoAbroadly compiles a compliant financial and intent-based application, coordinating directly with your institution's international office throughout the process.",
    faqs: [
      {
        question: "What IELTS score do I need to study in New Zealand?",
        answer:
          "Most bachelor's and postgraduate programs require an overall IELTS score of 6.0–6.5, though specific requirements vary by institution and course level. We confirm your target score during your free consultation.",
      },
      {
        question: "When should I start applying to study in New Zealand?",
        answer:
          "We recommend starting 8–10 months before your target February/March intake, allowing time for offer acceptance, financial documentation, and Student Visa processing through Immigration New Zealand.",
      },
      {
        question: "Can I work while studying in New Zealand?",
        answer:
          "Yes, most Student Visa holders can work up to 20 hours per week during term and full-time during scheduled semester breaks, subject to the specific conditions attached to your visa.",
      },
    ],
  },
  {
    slug: "france",
    country: "France",
    heroImage: unsplash("photo-1502602898657-3e91760cbb34"),
    flagImage: "https://flagcdn.com/w160/fr.png",
    visaTypes: ["Study", "Work", "Visit"],
    heroSubtitle:
      "Your complete guide to studying in France — grandes écoles, affordable public universities, and the Campus France process.",
    overview:
      "France offers a distinctive dual pathway — prestigious grandes écoles like HEC Paris and Ecole Polytechnique for business and engineering, alongside affordable, government-subsidised public universities like Sorbonne University and University of Paris. This combination lets students choose between an elite, internationally branded credential or a rigorous, low-cost academic pathway depending on their goals and budget. GoAbroadly manages the mandatory Campus France registration and interview process for every applicant, helping you select the right pathway and build documentation that meets French consulate expectations.",
    topUniversities: [
      "Sorbonne University",
      "Sciences Po",
      "HEC Paris",
      "Ecole Polytechnique",
      "University of Paris",
      "ESSEC Business School",
    ],
    tuitionFees:
      "Tuition at French public universities remains heavily subsidised, often just a few hundred euros per year, while grandes écoles such as HEC Paris and ESSEC charge significantly higher fees reflecting their business-school positioning. Paris carries by far the highest living costs in the country, while other French cities offer notably more affordable accommodation and daily expenses. GoAbroadly provides a complete cost breakdown covering tuition, health insurance (Sécurité Sociale Étudiante), and monthly living costs specific to your chosen city.",
    scholarships: [
      "Eiffel Excellence Scholarships for outstanding master's and PhD applicants",
      "Grande école-specific scholarships offered by HEC, ESSEC, and similar institutions",
      "Region-specific scholarships tied to studying outside the Paris metropolitan area",
      "Erasmus+ funding for eligible exchange and joint-degree program participants",
      "University-specific bursaries for early applicants and strong academic profiles",
    ],
    studentLife:
      "French universities and grandes écoles offer dedicated international student offices to help with CROUS housing applications, Sécurité Sociale Étudiante registration, and OFII visa validation formalities. Paris offers an unmatched cultural and career environment but at a higher cost, while cities like Lyon and Toulouse provide excellent education with a noticeably lower cost of living. International students can work up to 964 hours per year (roughly 60% of full-time), which helps offset living costs while studying. GoAbroadly's post-landing support covers OFII validation, CROUS housing guidance, and local orientation once you arrive.",
    visaProcess:
      "Students must first complete Campus France registration and interview, followed by a Long-Stay Student Visa (VLS-TS) application requiring proof of admission, financial resources (typically around €7,380 for the year or a guarantor), accommodation proof, and health insurance. Upon arrival, the VLS-TS must be validated online with OFII within three months. GoAbroadly manages the full Campus France process, prepares candidates for the mandatory interview, and ensures OFII validation is completed correctly after arrival.",
    faqs: [
      {
        question: "What IELTS score do I need to study in France?",
        answer:
          "English-taught programs typically require IELTS 6.0–6.5, while French-taught programs instead require proof of French language proficiency (usually B2 level), depending on the institution and course.",
      },
      {
        question: "When should I start applying to study in France?",
        answer:
          "We recommend starting 10–12 months before your target September intake, given the additional time required for Campus France registration, interview scheduling, and VLS-TS visa processing.",
      },
      {
        question: "Is Campus France registration mandatory for all applicants?",
        answer:
          "Yes, Indian students applying to French higher education institutions must complete the Campus France procedure, including document submission and an interview, before the visa application can proceed.",
      },
    ],
  },
  {
    slug: "netherlands",
    country: "Netherlands",
    heroImage: unsplash("photo-1512470876302-972faa2aa9a4"),
    flagImage: "https://flagcdn.com/w160/nl.png",
    visaTypes: ["Study", "Work", "Visit"],
    heroSubtitle:
      "Your complete guide to studying in the Netherlands — English-taught programs, tuition costs, and the Orientation Year visa.",
    overview:
      "The Netherlands offers one of the largest selections of English-taught bachelor's and master's programs in continental Europe, spanning research universities like the University of Amsterdam and Utrecht University to applied technology leaders like TU Delft. Dutch universities are known for a practical, discussion-based teaching style with close collaboration between students and faculty, and the one-year Orientation Year visa gives graduates dedicated time to find qualifying work after their studies. GoAbroadly assists students through Studielink applications and university-led visa coordination, ensuring your financial documentation meets IND thresholds from the outset.",
    topUniversities: [
      "University of Amsterdam",
      "Delft University of Technology",
      "Erasmus University Rotterdam",
      "Utrecht University",
      "Leiden University",
      "Wageningen University",
    ],
    tuitionFees:
      "Tuition for non-EU students in the Netherlands typically ranges from €8,000–€20,000 per year depending on the program, with specialised master's programs at TU Delft and Erasmus generally at the higher end. Amsterdam carries the highest living costs nationally, while cities like Utrecht, Leiden, and Wageningen offer more moderate, student-friendly costs. GoAbroadly provides a full, personalised cost breakdown covering tuition, health insurance, and monthly living expenses for your chosen city.",
    scholarships: [
      "Holland Scholarship for non-EU students at participating Dutch universities",
      "University-specific Excellence Scholarships offering partial or full tuition coverage",
      "Erasmus Mundus joint master's scholarships for eligible programs",
      "Faculty-specific scholarships in engineering, business, and environmental sciences",
      "Early application tuition discounts offered at select institutions",
    ],
    studentLife:
      "Dutch universities are known for their practical, discussion-based teaching style, extensive English-language support services, and dedicated international student offices assisting with residence permit and municipal registration formalities. Amsterdam offers the largest international student community and vibrant city life, while Utrecht, Leiden, and Delft provide a quieter, cycling-friendly campus-town experience. International students can generally work up to 16 hours per week during term or full-time during summer months, helping offset living costs. GoAbroadly's post-landing support covers municipal (BRP) registration, accommodation guidance, and local orientation once you arrive.",
    visaProcess:
      "Most Dutch universities handle the residence permit (VVR) application on behalf of admitted students through the Nuffic-recognised sponsor system, requiring proof of admission, sufficient financial means as set by the IND, and valid health insurance. A short-stay MVV visa may also be required prior to travel depending on nationality. GoAbroadly coordinates with your chosen institution's international office to ensure the university-led visa process runs smoothly and your financial documentation meets IND thresholds.",
    faqs: [
      {
        question: "What IELTS score do I need to study in the Netherlands?",
        answer:
          "Most English-taught bachelor's and master's programs require an overall IELTS score of 6.0–6.5, though some competitive programs at TU Delft or Erasmus may require higher bands. We confirm your target score during consultation.",
      },
      {
        question: "When should I start applying to study in the Netherlands?",
        answer:
          "We recommend starting 8–10 months before your target September intake, allowing time for Studielink applications, offer acceptance, and university-led residence permit processing.",
      },
      {
        question: "Does the university handle my visa application in the Netherlands?",
        answer:
          "Yes, most Dutch institutions manage the residence permit application on your behalf once you accept your offer, though you remain responsible for providing accurate financial and personal documentation, which we help prepare.",
      },
    ],
  },
  {
    slug: "singapore",
    country: "Singapore",
    heroImage: unsplash("photo-1775306963755-8897be3967bb"),
    flagImage: "https://flagcdn.com/w160/sg.png",
    visaTypes: ["Study", "Work", "Visit"],
    heroSubtitle:
      "Your complete guide to studying in Singapore — NUS, NTU, tuition costs, and the Student's Pass process.",
    overview:
      "Singapore has established itself as Asia's leading education hub, home to globally top-ranked institutions like NUS and NTU alongside private institutions such as SIM Global Education and Kaplan Singapore that offer pathway and degree programs in partnership with international universities. Its role as a regional headquarters for finance, technology, and logistics companies gives students direct exposure to both Asian and Western business practices within a compact, highly efficient city-state. GoAbroadly helps students navigate Singapore's structured admissions process and the SOLAR-based Student's Pass application coordinated through their chosen institution.",
    topUniversities: [
      "National University of Singapore",
      "Nanyang Technological University",
      "Singapore Management University",
      "James Cook University Singapore",
      "SIM Global Education",
      "Kaplan Singapore",
    ],
    tuitionFees:
      "Tuition fees in Singapore vary by institution type, with NUS and NTU typically ranging from SGD 20,000–40,000 per year, while private institutions like SIM and Kaplan generally offer more moderate fees for partner-university degree programs. Living costs in Singapore are among the higher end in the region, though on-campus housing at NUS and NTU can help manage overall expenses. GoAbroadly provides a full, personalised cost breakdown covering tuition, health insurance, and monthly living expenses specific to your chosen institution.",
    scholarships: [
      "NUS and NTU merit scholarships covering partial to full tuition for top applicants",
      "ASEAN and international student scholarships offered at select public universities",
      "Private institution scholarships tied to partner-university degree pathways",
      "Faculty-specific scholarships in engineering, business, and computing programs",
      "Early application tuition discounts offered by several private institutions",
    ],
    studentLife:
      "Singapore's universities offer highly structured international student support, including dedicated hostel accommodation at NUS and NTU and orientation programs designed specifically for the large international student population. The city-state's efficient public transport, safety, and multicultural environment make daily student life notably smooth compared to larger, more spread-out destinations. International students can generally work up to 16 hours per week during term at approved institutions, subject to Student's Pass conditions. GoAbroadly's post-landing support covers accommodation, local orientation, and settling-in guidance once you arrive.",
    visaProcess:
      "International students require a Student's Pass, applied for through the Immigration and Checkpoints Authority (ICA) after receiving an offer from an approved institution. Requirements include the institution's electronic submission via SOLAR (Student's Pass On-Line Application & Registration), proof of financial capacity, and a valid passport, with most universities coordinating the SOLAR submission directly on the student's behalf. GoAbroadly ensures your institution's SOLAR application is submitted correctly and that your supporting financial documentation meets ICA standards.",
    faqs: [
      {
        question: "What IELTS score do I need to study in Singapore?",
        answer:
          "Most degree programs at NUS, NTU, and private institutions require an overall IELTS score of 6.0–6.5, though specific requirements vary by university and course level. We confirm your target score during consultation.",
      },
      {
        question: "When should I start applying to study in Singapore?",
        answer:
          "We recommend starting 8–10 months before your target August intake, allowing time for admissions, offer acceptance, and SOLAR-based Student's Pass processing coordinated by your institution.",
      },
      {
        question: "Does the university handle my Student's Pass application in Singapore?",
        answer:
          "Yes, most Singapore institutions submit the Student's Pass application through the SOLAR system on your behalf once you accept your offer, though accurate supporting documentation from you remains essential.",
      },
    ],
  },
];

export function getStudyAbroadBySlug(slug: string): StudyAbroadPageData | undefined {
  return studyAbroadData.find((s) => s.slug === slug);
}

export function getAllStudyAbroadSlugs(): string[] {
  return studyAbroadData.map((s) => s.slug);
}