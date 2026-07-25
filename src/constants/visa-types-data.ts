// // import type { FAQ } from "./countries-data";

// // // Import all local images based on your folder structure
// // import studentVisaImg from "@/assets/images/visatypes/studentvisa.png";
// // import researchVisaImg from "@/assets/images/visatypes/researchvisa.png";
// // import languageCourseVisaImg from "@/assets/images/visatypes/languagecoursevisa.png";
// // import exchangeProgramVisaImg from "@/assets/images/visatypes/exchangeprogramvisa.png";
// // import skilledWorkerVisaImg from "@/assets/images/visatypes/skilledworkervisa.png";
// // import temporaryVisaImg from "@/assets/images/visatypes/temporaryvisa.png";
// // import businessVisaImg from "@/assets/images/visatypes/businessvisa.png";
// // import selfEmploymentVisaImg from "@/assets/images/visatypes/selfemploymentvisa.png";
// // import permanentResidencyVisaImg from "@/assets/images/visatypes/permanentresidencyvisa.png";
// // import familySponsorshipVisaImg from "@/assets/images/visatypes/familysponsorshipvisa.png";
// // import investorVisaImg from "@/assets/images/visatypes/investorvisa.png";
// // import visitorVisaImg from "@/assets/images/visatypes/visitorvisa.png";

// // export type VisaPageData = {
// //   slug: string;
// //   title: string;
// //   category: string;
// //   heroImage: string;
// //   heroSubtitle: string;
// //   eligibility: string[];
// //   requirements: string[];
// //   documents: string[];
// //   process: { step: number; title: string; description: string }[];
// //   faqs: FAQ[];
// //   overview: string;
// // };

// // export const visaTypesData: VisaPageData[] = [
// //   // ---------------------------------------------------------------------
// //   // STUDY VISAS
// //   // ---------------------------------------------------------------------
// //   {
// //     slug: "student-visa",
// //     title: "Student Visa",
// //     category: "Study",
// //     heroImage: studentVisaImg.src,
// //     heroSubtitle:
// //       "Your complete pathway to studying abroad — from university admission to visa approval, with expert GoAbroadly guidance at every step.",
// //     overview:
// //       "A Student Visa allows you to pursue a full-time diploma, undergraduate, or postgraduate program at a recognised institution abroad. It is the most common route for Indian students seeking international education and typically requires proof of admission, financial sufficiency, and genuine study intent. GoAbroadly works closely with students from the moment they shortlist universities through to visa lodgement, helping build a strong Statement of Purpose, arrange financial documentation, and prepare for visa interviews. With country-specific expertise across the US, UK, Canada, Australia, and Europe, our counsellors ensure your application reflects current embassy expectations and maximises your chances of approval on the first attempt.",
// //     eligibility: [
// //       "Unconditional offer letter or CAS/I-20 from a recognised university or college",
// //       "Minimum academic scores as prescribed by the institution and destination country",
// //       "Proof of English language proficiency (IELTS/TOEFL/PTE/Duolingo as accepted)",
// //       "Sufficient funds to cover one year's tuition and living expenses (or as mandated)",
// //       "No adverse immigration history, including prior visa refusals or overstays",
// //       "Genuine Student intent supported by a coherent academic and career progression",
// //     ],
// //     requirements: [
// //       "Completed online visa application form specific to the destination country",
// //       "Valid passport with at least 6 months validity beyond the course duration",
// //       "Tuition fee payment receipt or confirmation of deposit as required",
// //       "Statement of Purpose outlining academic background and study rationale",
// //       "Proof of accommodation or on-campus housing confirmation",
// //       "Medical examination or health insurance as mandated by the visa category",
// //     ],
// //     documents: [
// //       "Passport bio-data page and copies of any previous visas",
// //       "University offer letter, CAS, I-20, or equivalent enrolment confirmation",
// //       "Academic transcripts, degree certificates, and mark sheets",
// //       "IELTS/TOEFL/PTE score report meeting the minimum threshold",
// //       "Bank statements, education loan sanction letter, or sponsor affidavit",
// //       "Passport-size photographs as per destination country specifications",
// //     ],
// //     process: [
// //       { step: 1, title: "University Shortlisting", description: "Identify suitable universities and courses based on your academic profile and career goals." },
// //       { step: 2, title: "Admission Support", description: "Assist with application forms, SOPs, LORs, and secure your offer letter or CAS." },
// //       { step: 3, title: "Financial Documentation", description: "Arrange loan sanctions, bank statements, or sponsor affidavits meeting embassy thresholds." },
// //       { step: 4, title: "Visa Filing", description: "Complete the visa application, pay fees, and schedule your biometric appointment." },
// //       { step: 5, title: "Interview Preparation", description: "Mock interviews and document review to help you walk in fully prepared." },
// //     ],
// //     faqs: [
// //       {
// //         question: "Can I work part-time on a Student Visa?",
// //         answer:
// //           "Most destination countries permit international students to work part-time (typically 20 hours per week during term and full-time during breaks), though rules vary by country. We'll confirm the exact entitlement for your chosen destination.",
// //       },
// //       {
// //         question: "How much bank balance is required for a Student Visa?",
// //         answer:
// //           "This depends on the destination country and course duration — generally covering one year's tuition plus living expenses. We calculate the exact figure during your free assessment based on current embassy guidelines.",
// //       },
// //       {
// //         question: "Can I bring my spouse or children on a Student Visa?",
// //         answer:
// //           "Several countries allow dependents to accompany students on a separate dependent visa, subject to program level and duration. We'll advise whether your chosen destination and course qualify.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "research-visa",
// //     title: "Research Visa",
// //     category: "Study",
// //     heroImage: researchVisaImg.src,
// //     heroSubtitle:
// //       "Purpose-built visa guidance for PhD candidates, postdoctoral fellows, and research scholars pursuing academic work abroad.",
// //     overview:
// //       "A Research Visa is designed for scholars undertaking a PhD, postdoctoral fellowship, or sponsored research project at a university, laboratory, or research institution abroad. Unlike a standard student visa, this category often requires a hosting agreement with the research institution and proof of a defined research proposal or supervisor sponsorship. GoAbroadly supports researchers in compiling their host agreements, funding documentation, and academic credentials into a compelling application. We work with candidates across STEM, social sciences, and humanities disciplines, ensuring your research intent and institutional affiliation are clearly and correctly presented to the visa authority.",
// //     eligibility: [
// //       "Confirmed research position, PhD enrolment, or postdoctoral offer from a host institution",
// //       "Relevant postgraduate qualification aligned with the proposed research area",
// //       "Signed hosting agreement or supervisor sponsorship letter where applicable",
// //       "Proof of funding — scholarship, grant, fellowship, or self-financing",
// //       "English or local language proficiency as required by the host institution",
// //       "Clean academic and immigration record with no unresolved visa issues",
// //     ],
// //     requirements: [
// //       "Hosting agreement or letter of invitation from the research institution",
// //       "Detailed research proposal or thesis outline endorsed by your supervisor",
// //       "Proof of funding source covering the full research duration",
// //       "Academic transcripts and postgraduate degree certificates",
// //       "CV highlighting prior research experience and publications",
// //       "Health insurance valid for the duration of the research stay",
// //     ],
// //     documents: [
// //       "Passport bio-data page and previous visa history",
// //       "Hosting agreement, supervisor letter, or fellowship confirmation",
// //       "Research proposal, thesis summary, or project description",
// //       "Funding proof — grant letter, scholarship award, or bank statements",
// //       "Academic certificates, transcripts, and published papers (if any)",
// //       "Passport-size photographs per host country specifications",
// //     ],
// //     process: [
// //       { step: 1, title: "Host Institution Coordination", description: "Confirm your hosting agreement, supervisor details, and research scope with the institution." },
// //       { step: 2, title: "Funding Documentation", description: "Compile scholarship, grant, or self-funding proof that meets the visa office's thresholds." },
// //       { step: 3, title: "Application Filing", description: "Submit the research visa application with your proposal, credentials, and hosting documents." },
// //       { step: 4, title: "Interview & Verification", description: "Prepare for any institutional or consular verification calls specific to research visas." },
// //       { step: 5, title: "Approval & Onboarding", description: "Receive your visa decision and guidance on registering with the host institution on arrival." },
// //     ],
// //     faqs: [
// //       {
// //         question: "Do I need a separate visa for a short research visit versus a full PhD?",
// //         answer:
// //           "Yes, short-term research visits are often covered under a different sub-category or business/visitor route, while multi-year PhD or postdoctoral research typically requires a long-term research or student visa. We'll identify the correct category for your stay.",
// //       },
// //       {
// //         question: "Can my family accompany me on a Research Visa?",
// //         answer:
// //           "Many countries permit spouses and children to join researchers on dependent visas, often with work rights for the accompanying spouse. Eligibility depends on the destination and length of your research assignment.",
// //       },
// //       {
// //         question: "Is a hosting agreement mandatory for all Research Visas?",
// //         answer:
// //           "Most research visa categories require a formal hosting agreement or supervisor sponsorship confirming the institution's commitment to your project. We help you liaise with the institution to obtain this correctly.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "language-course-visa",
// //     title: "Language Course Visa",
// //     category: "Study",
// //     heroImage: languageCourseVisaImg.src,
// //     heroSubtitle:
// //       "Short-term study visa support for language immersion programs, helping you build fluency and open doors to further study or work abroad.",
// //     overview:
// //       "A Language Course Visa allows applicants to enrol in an intensive language program abroad, typically ranging from a few weeks to under a year. It's a popular route for students preparing for further academic study, professionals building international communication skills, or those meeting a language prerequisite for future work or immigration pathways. GoAbroadly helps applicants select accredited language schools, prepare the shorter but still detailed documentation this category demands, and present a credible short-term study plan that satisfies consular officers of genuine, time-bound intent.",
// //     eligibility: [
// //       "Enrolment confirmation from an accredited language school or institute",
// //       "Course duration within the limits prescribed for this visa category",
// //       "Proof of funds to cover course fees and living costs for the enrolled period",
// //       "Clear intent to return home or transition to a further study visa on completion",
// //       "Basic academic background suitable for the chosen course level",
// //       "No history of visa refusals that would affect credibility of short-term intent",
// //     ],
// //     requirements: [
// //       "Language school enrolment letter with confirmed start and end dates",
// //       "Proof of course fee payment or deposit as required by the institute",
// //       "Evidence of accommodation for the duration of the course",
// //       "Bank statements or sponsor letter covering course and living expenses",
// //       "Cover letter explaining your reason for undertaking the language course",
// //       "Return travel intent or onward study/work plan where applicable",
// //     ],
// //     documents: [
// //       "Passport bio-data page and any prior visa copies",
// //       "Language school enrolment confirmation and fee receipt",
// //       "Bank statements or sponsorship affidavit for the course period",
// //       "Proof of accommodation booking or homestay confirmation",
// //       "Educational certificates relevant to the course level",
// //       "Passport-size photographs per embassy specifications",
// //     ],
// //     process: [
// //       { step: 1, title: "School Selection", description: "Choose an accredited language institute matching your proficiency goals and budget." },
// //       { step: 2, title: "Enrolment & Fee Payment", description: "Secure your enrolment letter and process the required course fee payment." },
// //       { step: 3, title: "Document Compilation", description: "Prepare financial, accommodation, and intent documentation for the short-term visa." },
// //       { step: 4, title: "Visa Submission", description: "File the application with the language course enrolment as the core supporting document." },
// //       { step: 5, title: "Pre-Departure Briefing", description: "Guidance on arrival formalities, accommodation check-in, and course commencement." },
// //     ],
// //     faqs: [
// //       {
// //         question: "Can a Language Course Visa lead to a longer study visa later?",
// //         answer:
// //           "Yes, many students use a language course as a stepping stone before enrolling in a degree program, provided they later meet the separate academic and financial requirements for a full student visa.",
// //       },
// //       {
// //         question: "Is part-time work allowed on a Language Course Visa?",
// //         answer:
// //           "Work rights on this visa category are usually limited or not permitted at all, as it is intended for short-term study. We'll clarify the exact conditions for your destination country.",
// //       },
// //       {
// //         question: "How short can a Language Course Visa program be?",
// //         answer:
// //           "Programs can range from a few weeks to several months depending on the country and institute, though very short stays may fall under a visitor visa instead. We'll help determine the correct category based on your course length.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "exchange-program-visa",
// //     title: "Exchange Program Visa",
// //     category: "Study",
// //     heroImage: exchangeProgramVisaImg.src,
// //     heroSubtitle:
// //       "Dedicated visa support for semester and year-long exchange programs between your home university and an international partner institution.",
// //     overview:
// //       "An Exchange Program Visa is intended for students undertaking a semester or academic year abroad as part of a formal partnership between their home university and a host institution. This category relies heavily on documentation from both institutions confirming the exchange arrangement, credit transfer, and expected return to complete the degree at home. GoAbroadly assists exchange students in coordinating paperwork between both universities, ensuring the visa application clearly demonstrates the temporary, credit-linked nature of the stay and a firm intention to resume studies at the home institution afterward.",
// //     eligibility: [
// //       "Nomination or confirmation letter from your home university's exchange office",
// //       "Acceptance letter from the partner host institution abroad",
// //       "Good academic standing at your home university with credits in good order",
// //       "Proof of funds covering the exchange semester or year",
// //       "Confirmed intent to return and complete your degree at the home institution",
// //       "Compliance with any minimum GPA or language requirements set by the host",
// //     ],
// //     requirements: [
// //       "Exchange nomination letter and host university acceptance letter",
// //       "Learning agreement or credit transfer confirmation between both institutions",
// //       "Proof of enrolment status at the home university during the exchange period",
// //       "Bank statements or scholarship confirmation covering the exchange duration",
// //       "Accommodation arrangement at the host university or nearby housing",
// //       "Health insurance valid for the exchange period as required",
// //     ],
// //     documents: [
// //       "Passport bio-data page and previous visa copies",
// //       "Exchange nomination letter from the home university",
// //       "Acceptance and learning agreement from the host institution",
// //       "Bank statements, scholarship letter, or sponsor affidavit",
// //       "Proof of enrolment/good standing at the home university",
// //       "Passport-size photographs per host country specifications",
// //     ],
// //     process: [
// //       { step: 1, title: "Exchange Nomination", description: "Confirm your nomination through the home university's international office." },
// //       { step: 2, title: "Host Acceptance & Learning Agreement", description: "Finalise the learning agreement outlining credits and courses at the host institution." },
// //       { step: 3, title: "Financial & Insurance Documentation", description: "Compile proof of funds and mandatory health insurance for the exchange period." },
// //       { step: 4, title: "Visa Filing", description: "Submit the exchange visa application with both institutions' confirmation letters." },
// //       { step: 5, title: "Pre-Departure Support", description: "Guidance on housing, orientation dates, and credit transfer logistics on return." },
// //     ],
// //     faqs: [
// //       {
// //         question: "Do exchange students need a separate visa from regular students?",
// //         answer:
// //           "Some countries have a distinct exchange visa sub-category with simplified requirements, while others process exchange students under the standard student visa. We'll confirm the correct route for your host country.",
// //       },
// //       {
// //         question: "What happens to my visa status if the exchange program is extended?",
// //         answer:
// //           "Extensions typically require updated documentation from both universities and a formal visa extension application before your current visa expires. We can guide you through this if it becomes necessary.",
// //       },
// //       {
// //         question: "Will my exchange semester credits be recognised at my home university?",
// //         answer:
// //           "This depends on the learning agreement signed before departure, which should specify how credits transfer. This is coordinated between the universities rather than the visa office, but we ensure your documentation aligns.",
// //       },
// //     ],
// //   },

// //   // ---------------------------------------------------------------------
// //   // WORK VISAS
// //   // ---------------------------------------------------------------------
// //   {
// //     slug: "skilled-worker-visa",
// //     title: "Skilled Worker Visa",
// //     category: "Work",
// //     heroImage: skilledWorkerVisaImg.src,
// //     heroSubtitle:
// //       "Employer-sponsored and points-based visa pathways for skilled professionals seeking long-term work opportunities abroad.",
// //     overview:
// //       "A Skilled Worker Visa enables qualified professionals to take up employment abroad, typically through employer sponsorship or a points-based immigration system that assesses factors like occupation, qualifications, work experience, and language ability. This category often serves as a pathway toward permanent residency in countries such as Canada, Australia, and the UK. GoAbroadly guides skilled professionals through occupation list matching, credential assessments, and employer sponsorship coordination, helping you present a competitive profile that meets both immigration point thresholds and employer compliance requirements.",
// //     eligibility: [
// //       "Occupation listed on the relevant skilled occupation or shortage list",
// //       "Recognised qualification and relevant work experience in the nominated field",
// //       "Positive skills assessment from the designated assessing authority (where required)",
// //       "Minimum points score under the applicable points-based system, if relevant",
// //       "English or local language proficiency meeting the prescribed threshold",
// //       "Valid job offer or employer sponsorship where the pathway requires it",
// //     ],
// //     requirements: [
// //       "Skills assessment report from the recognised assessing body",
// //       "Employer sponsorship letter or Certificate of Sponsorship where applicable",
// //       "Proof of relevant work experience through reference letters and payslips",
// //       "Language test results (IELTS/PTE or equivalent) meeting minimum bands",
// //       "Educational credential assessment confirming equivalency to local standards",
// //       "Police clearance certificates from all countries of residence",
// //     ],
// //     documents: [
// //       "Passport bio-data page and employment history summary",
// //       "Skills assessment outcome letter for the nominated occupation",
// //       "Employer sponsorship or Certificate of Sponsorship documentation",
// //       "Reference letters, payslips, and relieving letters from past employers",
// //       "Language test scorecard and educational credential assessment",
// //       "Police clearance certificates and medical examination reports",
// //     ],
// //     process: [
// //       { step: 1, title: "Occupation & Points Assessment", description: "Match your profile against occupation lists and calculate your points-based eligibility." },
// //       { step: 2, title: "Skills Assessment", description: "Obtain a positive skills assessment from the relevant assessing authority for your occupation." },
// //       { step: 3, title: "Expression of Interest / Sponsorship", description: "Lodge an expression of interest or secure employer sponsorship as applicable." },
// //       { step: 4, title: "Visa Application", description: "File the visa application with skills, language, and character documentation." },
// //       { step: 5, title: "Decision & Relocation Support", description: "Track your application and receive guidance on relocation once approved." },
// //     ],
// //     faqs: [
// //       {
// //         question: "Do I need a job offer for a Skilled Worker Visa?",
// //         answer:
// //           "It depends on the country — some pathways require employer sponsorship, while others (like points-based independent visas) allow qualified applicants to apply without a confirmed job offer. We'll identify which route fits your profile.",
// //       },
// //       {
// //         question: "Can a Skilled Worker Visa lead to permanent residency?",
// //         answer:
// //           "In many countries, skilled worker visas are explicitly designed as a pathway to permanent residency after meeting residency, employment, or points thresholds over time.",
// //       },
// //       {
// //         question: "How long does the skills assessment process take?",
// //         answer:
// //           "Skills assessments typically take 4–12 weeks depending on the assessing authority and occupation, though this can vary. We help you initiate this early to avoid delays in your overall application.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "temporary-work-visa",
// //     title: "Temporary Work Visa",
// //     category: "Work",
// //     heroImage: temporaryVisaImg.src,
// //     heroSubtitle:
// //       "Fast, compliant visa support for seasonal, contract, and short-term overseas employment opportunities.",
// //     overview:
// //       "A Temporary Work Visa allows individuals to take up employment abroad for a defined, limited period — commonly used for seasonal work, fixed-term contracts, intra-company transfers, or project-based assignments. Unlike skilled worker pathways aimed at long-term settlement, this category prioritises a clear end date and confirmed employer relationship. GoAbroadly assists applicants in verifying employer legitimacy, compiling contract documentation, and ensuring the visa application clearly reflects the temporary, non-immigrant nature of the assignment to meet consular expectations.",
// //     eligibility: [
// //       "Confirmed job offer or contract with a defined start and end date",
// //       "Employer registered and authorised to hire foreign workers in the destination country",
// //       "Relevant skills or experience matching the role being offered",
// //       "Proof of intent to return home or move on at the end of the contract period",
// //       "Compliance with any quota, seasonal window, or sector-specific conditions",
// //       "No adverse immigration history affecting temporary visa eligibility",
// //     ],
// //     requirements: [
// //       "Signed employment contract specifying role, duration, and remuneration",
// //       "Employer's work permit application or labour market approval where required",
// //       "Proof of relevant qualifications or experience for the offered role",
// //       "Accommodation arrangements for the work assignment period",
// //       "Medical fitness certificate where mandated by the job sector",
// //       "Return travel plan or onward assignment confirmation",
// //     ],
// //     documents: [
// //       "Passport bio-data page and prior employment/visa history",
// //       "Signed employment contract or letter of offer",
// //       "Employer's sponsorship or labour approval documentation",
// //       "Qualification certificates or trade licences relevant to the role",
// //       "Medical examination reports where required by the sector",
// //       "Passport-size photographs per destination country rules",
// //     ],
// //     process: [
// //       { step: 1, title: "Employer Verification", description: "Confirm the employer's authorisation to sponsor temporary foreign workers." },
// //       { step: 2, title: "Contract Finalisation", description: "Secure a signed employment contract detailing role, duration, and terms." },
// //       { step: 3, title: "Work Permit Coordination", description: "Support the employer's labour approval or work permit filing where required." },
// //       { step: 4, title: "Visa Application", description: "Submit your temporary work visa application with contract and role documentation." },
// //       { step: 5, title: "Deployment Readiness", description: "Pre-departure briefing on accommodation, local compliance, and contract terms." },
// //     ],
// //     faqs: [
// //       {
// //         question: "Can a Temporary Work Visa be extended or converted?",
// //         answer:
// //           "Some countries allow extensions within set limits, and certain temporary categories can be converted to longer-term work visas if the role and employer support it. We'll advise on the specific rules for your destination.",
// //       },
// //       {
// //         question: "Can my family join me on a Temporary Work Visa?",
// //         answer:
// //           "Dependent eligibility varies widely by country and visa duration — shorter assignments often don't permit dependents, while longer contract visas may allow accompanying family members.",
// //       },
// //       {
// //         question: "What happens if my contract ends early?",
// //         answer:
// //           "Most temporary work visas are tied to the employment contract, so early termination typically requires you to leave within a specified grace period unless you secure another sponsored role.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "business-visa",
// //     title: "Business Visa",
// //     category: "Work",
// //     heroImage: businessVisaImg.src,
// //     heroSubtitle:
// //       "Streamlined visa support for business meetings, conferences, negotiations, and short-term corporate travel abroad.",
// //     overview:
// //       "A Business Visa is designed for professionals travelling abroad for meetings, conferences, contract negotiations, trade fairs, or short corporate assignments — without taking up local employment. It typically requires an invitation from the host company alongside proof of your existing employment and income back home. GoAbroadly assists frequent business travellers and corporate teams in preparing invitation letters, itineraries, and financial documentation efficiently, minimising delays for time-sensitive business commitments while ensuring full compliance with the destination's business visa conditions.",
// //     eligibility: [
// //       "Invitation letter from the host company or event organiser abroad",
// //       "Current employment with a company that supports the business trip purpose",
// //       "Sufficient funds to cover the duration of the business visit",
// //       "Clear itinerary demonstrating the specific business purpose of travel",
// //       "No intent to take up local employment or remuneration abroad",
// //       "Strong ties to home country supporting return after the visit",
// //     ],
// //     requirements: [
// //       "Invitation letter from the host organisation detailing the business purpose",
// //       "Covering letter from your employer confirming the trip and your role",
// //       "Proof of business relationship, such as prior correspondence or contracts",
// //       "Bank statements or company financial documents covering trip expenses",
// //       "Travel and accommodation itinerary for the visit duration",
// //       "Return flight booking or onward travel confirmation",
// //     ],
// //     documents: [
// //       "Passport bio-data page and previous visa copies",
// //       "Business invitation letter and employer covering letter",
// //       "Company registration or incorporation documents where applicable",
// //       "Bank statements covering the trip duration and expenses",
// //       "Hotel booking or accommodation confirmation",
// //       "Passport-size photographs per embassy specifications",
// //     ],
// //     process: [
// //       { step: 1, title: "Purpose & Invitation Confirmation", description: "Secure a valid invitation letter clearly stating the business purpose and duration." },
// //       { step: 2, title: "Employer Documentation", description: "Compile your employer's covering letter and proof of your role and income." },
// //       { step: 3, title: "Itinerary Planning", description: "Finalise travel dates, accommodation, and meeting schedule for the visa file." },
// //       { step: 4, title: "Application Filing", description: "Submit the business visa application with all supporting corporate documentation." },
// //       { step: 5, title: "Travel Readiness", description: "Final checklist and briefing ahead of departure for your business engagements." },
// //     ],
// //     faqs: [
// //       {
// //         question: "Can I get paid by a company abroad on a Business Visa?",
// //         answer:
// //           "No, a Business Visa does not permit local employment or remuneration from a foreign company — it is strictly for meetings, negotiations, and similar business activities while remaining paid by your home employer.",
// //       },
// //       {
// //         question: "How long can I stay abroad on a Business Visa?",
// //         answer:
// //           "Stay durations vary by country, typically ranging from a few days up to 90 days per visit, with some visas allowing multiple entries over a longer validity period.",
// //       },
// //       {
// //         question: "Is a Business Visa the same as a work visa?",
// //         answer:
// //           "No, a Business Visa covers short-term business activities without local employment, while a work visa is required if you intend to take up a job or be paid by an entity in the destination country.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "self-employment-visa",
// //     title: "Self Employment Visa",
// //     category: "Work",
// //     heroImage: selfEmploymentVisaImg.src,
// //     heroSubtitle:
// //       "Visa pathways for entrepreneurs, freelancers, and independent professionals looking to establish their own venture abroad.",
// //     overview:
// //       "A Self Employment Visa is designed for entrepreneurs, freelancers, and independent professionals who wish to establish or operate their own business abroad rather than work for a sponsoring employer. This category generally requires a viable business plan, proof of relevant experience, and evidence of sufficient capital to sustain the venture. GoAbroadly helps applicants build a credible business case, structure their financial documentation, and navigate country-specific self-employment or entrepreneur visa criteria, from freelancer permits to startup-founder residency routes.",
// //     eligibility: [
// //       "Viable business plan demonstrating market need and sustainability",
// //       "Relevant professional experience or qualifications in the proposed field",
// //       "Proof of sufficient capital to establish and sustain the business",
// //       "Compliance with any minimum investment or turnover thresholds where applicable",
// //       "No conflicting local employment that would breach visa conditions",
// //       "Registration intent with local business or tax authorities on arrival",
// //     ],
// //     requirements: [
// //       "Detailed business plan with market analysis and financial projections",
// //       "Proof of capital — bank statements, investment funds, or business loan approval",
// //       "Professional portfolio or client contracts evidencing freelance/business track record",
// //       "Educational or professional certifications relevant to the business activity",
// //       "Local business registration intent or pre-registration documentation",
// //       "Health insurance and accommodation arrangements for the visa period",
// //     ],
// //     documents: [
// //       "Passport bio-data page and prior visa/business history",
// //       "Business plan with projected revenue and operational structure",
// //       "Bank statements or proof of investment capital",
// //       "Client contracts, portfolio, or freelance income history",
// //       "Professional certifications or trade licences relevant to the business",
// //       "Passport-size photographs per destination country rules",
// //     ],
// //     process: [
// //       { step: 1, title: "Business Plan Development", description: "Build a market-ready business plan aligned with the destination country's visa criteria." },
// //       { step: 2, title: "Capital Verification", description: "Organise proof of investment funds or business capital meeting minimum thresholds." },
// //       { step: 3, title: "Credential Compilation", description: "Gather professional history, contracts, and qualifications supporting your venture." },
// //       { step: 4, title: "Visa Application", description: "File the self-employment visa with your business case and financial documentation." },
// //       { step: 5, title: "Business Setup Guidance", description: "Support with local registration steps once your visa is approved." },
// //     ],
// //     faqs: [
// //       {
// //         question: "How much capital do I need for a Self Employment Visa?",
// //         answer:
// //           "Minimum capital requirements vary significantly by country and business type, ranging from modest freelancer thresholds to substantial startup investment amounts. We calculate the exact figure during your assessment.",
// //       },
// //       {
// //         question: "Can I hire employees under a Self Employment Visa?",
// //         answer:
// //           "Many self-employment or entrepreneur visa categories allow you to hire staff once your business is registered, though specific conditions and timelines depend on the destination country's rules.",
// //       },
// //       {
// //         question: "Does my business plan need to be in the local language?",
// //         answer:
// //           "Requirements vary — some countries accept English business plans while others require translation into the local language for official submission. We'll confirm this for your specific destination.",
// //       },
// //     ],
// //   },

// //   // ---------------------------------------------------------------------
// //   // IMMIGRATION VISAS
// //   // ---------------------------------------------------------------------
// //   {
// //     slug: "permanent-residency",
// //     title: "Permanent Residency",
// //     category: "Immigration",
// //     heroImage: permanentResidencyVisaImg.src,
// //     heroSubtitle:
// //       "Long-term settlement guidance for individuals and families seeking permanent residency status abroad.",
// //     overview:
// //       "Permanent Residency grants the right to live, work, and study indefinitely in a foreign country, often serving as a precursor to citizenship. Pathways vary widely — from points-based skilled migration and employer nomination to long-term visa transitions after several years of temporary residence. GoAbroadly guides applicants through the full residency journey, from initial eligibility assessment and points calculation through to document compilation and application lodgement, helping families plan a stable, long-term future abroad with clarity on timelines and requirements.",
// //     eligibility: [
// //       "Sufficient points score or qualifying category under the residency program",
// //       "Relevant skills, qualifications, or family/investment ties to the destination country",
// //       "Minimum period of prior legal residence where transitioning from a temporary visa",
// //       "Health and character clearances meeting immigration standards",
// //       "Financial stability sufficient to support yourself and any dependents",
// //       "Genuine intention to reside long-term in the destination country",
// //     ],
// //     requirements: [
// //       "Points test calculation or category-specific eligibility documentation",
// //       "Skills assessment, employer nomination, or investment proof as applicable",
// //       "Comprehensive medical examination reports for all applicants and dependents",
// //       "Police clearance certificates from every country of residence over the qualifying period",
// //       "Proof of settlement funds or ongoing income sufficiency",
// //       "Evidence of continuous legal residence where converting from a temporary visa",
// //     ],
// //     documents: [
// //       "Passport bio-data pages for all applicants and dependents",
// //       "Skills assessment, nomination, or investment confirmation documents",
// //       "Medical examination reports from approved panel physicians",
// //       "Police clearance certificates covering the required residency history",
// //       "Financial documentation demonstrating settlement fund sufficiency",
// //       "Marriage and birth certificates for dependents included in the application",
// //     ],
// //     process: [
// //       { step: 1, title: "Pathway Assessment", description: "Determine the most suitable residency pathway based on your skills, family, or investment profile." },
// //       { step: 2, title: "Points & Eligibility Calculation", description: "Calculate your points score or confirm category-specific eligibility criteria." },
// //       { step: 3, title: "Documentation Compilation", description: "Gather medical, police, and financial clearances for all family members." },
// //       { step: 4, title: "Application Lodgement", description: "Submit the permanent residency application with the complete supporting file." },
// //       { step: 5, title: "Settlement Planning", description: "Post-approval guidance on relocation, housing, and integration support." },
// //     ],
// //     faqs: [
// //       {
// //         question: "How long does a Permanent Residency application take?",
// //         answer:
// //           "Processing timelines vary significantly by country and pathway, typically ranging from several months to over a year. We provide a realistic estimate based on the current queue for your specific category.",
// //       },
// //       {
// //         question: "Can I include my family in a Permanent Residency application?",
// //         answer:
// //           "Yes, most permanent residency pathways allow you to include your spouse and dependent children in the same application, subject to the destination country's dependent criteria.",
// //       },
// //       {
// //         question: "Does Permanent Residency lead to citizenship?",
// //         answer:
// //           "In most countries, permanent residents become eligible to apply for citizenship after meeting a minimum residence period and other requirements, such as language and civics tests.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "family-sponsorship",
// //     title: "Family Sponsorship",
// //     category: "Immigration",
// //     heroImage: familySponsorshipVisaImg.src,
// //     heroSubtitle:
// //       "Reunite with your loved ones abroad through spouse, parent, or dependent sponsorship visa pathways.",
// //     overview:
// //       "Family Sponsorship allows citizens or permanent residents of a country to sponsor eligible relatives — spouses, partners, parents, or dependent children — to join them abroad. This category requires proof of a genuine relationship, the sponsor's ability to financially support the applicant, and compliance with relationship-specific documentation standards. GoAbroadly assists sponsors and applicants in building a strong relationship evidence file, meeting income or undertaking requirements, and navigating the often detailed scrutiny applied to family visa categories.",
// //     eligibility: [
// //       "Sponsor holds valid citizenship, permanent residency, or eligible status in the destination country",
// //       "Genuine and ongoing relationship with the applicant (spousal, parental, or dependent)",
// //       "Sponsor meets minimum income or financial undertaking requirements",
// //       "Applicant meets health and character clearance standards",
// //       "Relationship evidence spanning cohabitation, communication, and shared commitments",
// //       "No prior sponsorship breaches or unresolved immigration violations",
// //     ],
// //     requirements: [
// //       "Proof of sponsor's status — citizenship or permanent residency documentation",
// //       "Relationship evidence such as marriage certificate, joint finances, or communication history",
// //       "Sponsor's income proof or statutory declaration of financial support",
// //       "Medical examination reports for the applicant and accompanying dependents",
// //       "Police clearance certificates for the applicant from all countries of residence",
// //       "Statutory declarations or affidavits supporting the genuineness of the relationship",
// //     ],
// //     documents: [
// //       "Passport bio-data pages for sponsor and applicant",
// //       "Marriage certificate, birth certificates, or relationship proof documents",
// //       "Sponsor's proof of income, employment, or financial undertaking",
// //       "Joint bank statements, photographs, and communication records",
// //       "Medical and police clearance certificates for the applicant",
// //       "Passport-size photographs per destination country rules",
// //     ],
// //     process: [
// //       { step: 1, title: "Sponsor Eligibility Check", description: "Confirm the sponsor's status and financial capacity to support the application." },
// //       { step: 2, title: "Relationship Evidence Compilation", description: "Build a comprehensive file demonstrating the genuineness of the relationship." },
// //       { step: 3, title: "Health & Character Clearances", description: "Complete medical examinations and police clearances for the applicant." },
// //       { step: 4, title: "Application Submission", description: "Lodge the sponsorship application with sponsor and applicant documentation." },
// //       { step: 5, title: "Interview & Decision", description: "Prepare for any relationship verification interview and track the final decision." },
// //     ],
// //     faqs: [
// //       {
// //         question: "What counts as sufficient relationship evidence for spousal sponsorship?",
// //         answer:
// //           "Immigration authorities typically look for a combination of joint finances, cohabitation history, communication records, photographs together, and statements from family or friends confirming the relationship's genuineness.",
// //       },
// //       {
// //         question: "Is there a minimum income requirement for sponsors?",
// //         answer:
// //           "Many countries set a minimum income or financial undertaking threshold for sponsors to demonstrate they can support the applicant without relying on public funds. We'll confirm the exact figure for your destination.",
// //       },
// //       {
// //         question: "Can parents be sponsored for permanent residency?",
// //         answer:
// //           "Several countries offer dedicated parent sponsorship or long-term parent visa streams, though these often have caps, waiting periods, or additional financial bonds compared to spousal sponsorship.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "investor-visa",
// //     title: "Investor Visa",
// //     category: "Immigration",
// //     heroImage: investorVisaImg.src,
// //     heroSubtitle:
// //       "Residency and citizenship-linked visa pathways for investors and high-net-worth individuals contributing capital abroad.",
// //     overview:
// //       "An Investor Visa grants residency — and in some programs, an eventual path to citizenship — in exchange for a qualifying investment in the destination country's economy, such as a business venture, government bonds, real estate, or a designated investment fund. This category demands rigorous source-of-funds documentation and compliance with strict due diligence checks. GoAbroadly works with investors to structure compliant investment documentation, coordinate with legal and financial partners, and manage the due diligence process that underpins every investor migration program.",
// //     eligibility: [
// //       "Minimum investment amount as prescribed by the specific investor program",
// //       "Legitimate, verifiable source of investment funds",
// //       "Clean financial and criminal record passing enhanced due diligence checks",
// //       "Investment made in an approved category — business, real estate, bonds, or fund",
// //       "Ability to maintain the investment for the required minimum holding period",
// //       "Compliance with any job-creation or business activity conditions where applicable",
// //     ],
// //     requirements: [
// //       "Proof of investment funds and their legitimate source (business income, sale of assets, etc.)",
// //       "Investment agreement or transaction documentation for the qualifying asset",
// //       "Enhanced due diligence documentation, including financial and legal history",
// //       "Business plan where the investment involves establishing or acquiring a company",
// //       "Police clearance certificates from all countries of residence",
// //       "Comprehensive health insurance covering the investor and dependents",
// //     ],
// //     documents: [
// //       "Passport bio-data pages for the investor and accompanying dependents",
// //       "Source of funds documentation — tax returns, business records, or asset sale proof",
// //       "Investment transaction agreement or fund subscription documents",
// //       "Bank reference letters and audited financial statements where applicable",
// //       "Police clearance certificates and medical examination reports",
// //       "Business plan or fund prospectus supporting the investment category",
// //     ],
// //     process: [
// //       { step: 1, title: "Program Selection", description: "Identify the investor visa program that matches your investment capacity and residency goals." },
// //       { step: 2, title: "Source of Funds Verification", description: "Compile and legally verify the origin of your investment capital." },
// //       { step: 3, title: "Investment Structuring", description: "Finalise the qualifying investment — business, real estate, bonds, or fund — with legal partners." },
// //       { step: 4, title: "Due Diligence & Application", description: "Submit the investor visa application through the enhanced due diligence process." },
// //       { step: 5, title: "Approval & Compliance Monitoring", description: "Ongoing guidance to maintain investment compliance through the required holding period." },
// //     ],
// //     faqs: [
// //       {
// //         question: "What is the minimum investment for an Investor Visa?",
// //         answer:
// //           "Minimum thresholds vary widely by country and investment category, ranging from real estate purchases to government fund contributions. We provide exact figures for each program during your assessment.",
// //       },
// //       {
// //         question: "How long does due diligence take for Investor Visas?",
// //         answer:
// //           "Enhanced due diligence checks are more thorough than standard visa processing and can take several months, depending on the complexity of your source-of-funds documentation and the program chosen.",
// //       },
// //       {
// //         question: "Does an Investor Visa guarantee citizenship?",
// //         answer:
// //           "Investor visas typically grant residency first; citizenship, where offered, usually requires maintaining the investment and residency status for a minimum period and meeting additional naturalisation criteria.",
// //       },
// //     ],
// //   },
// //   {
// //     slug: "visitor-visa",
// //     title: "Visitor Visa",
// //     category: "Immigration",
// //     heroImage: visitorVisaImg.src,
// //     heroSubtitle:
// //       "Hassle-free visa support for tourism, family visits, and short-term leisure travel abroad.",
// //     overview:
// //       "A Visitor Visa permits short-term travel abroad for tourism, sightseeing, or visiting friends and family, without the right to work or study locally. It is one of the most frequently applied for visa categories and requires clear evidence of travel purpose, financial capacity, and strong ties to your home country to support your return. GoAbroadly helps applicants prepare a well-organised visitor visa file, including itinerary planning, invitation letters where relevant, and financial documentation, to minimise the risk of delays or refusals for time-sensitive travel plans.",
// //     eligibility: [
// //       "Clear purpose of visit — tourism, family visit, or short leisure travel",
// //       "Sufficient funds to cover the entire duration of the trip",
// //       "Strong ties to home country such as employment, property, or family",
// //       "Valid travel and health insurance where required by the destination",
// //       "No history of visa refusals casting doubt on genuine visitor intent",
// //       "Confirmed return travel plans within the permitted visa duration",
// //     ],
// //     requirements: [
// //       "Detailed travel itinerary covering the full duration of the visit",
// //       "Proof of accommodation — hotel bookings or invitation letter from host",
// //       "Bank statements demonstrating sufficient funds for the trip",
// //       "Proof of employment or business ties confirming intent to return",
// //       "Travel insurance covering medical emergencies during the visit",
// //       "Invitation letter from family or friends where applicable",
// //     ],
// //     documents: [
// //       "Passport bio-data page and copies of previous visas",
// //       "Confirmed return flight tickets and travel itinerary",
// //       "Hotel booking confirmation or host invitation letter",
// //       "Bank statements covering the trip duration",
// //       "Employment letter or business ownership proof",
// //       "Passport-size photographs per embassy specifications",
// //     ],
// //     process: [
// //       { step: 1, title: "Travel Planning", description: "Finalise your travel dates, itinerary, and accommodation arrangements." },
// //       { step: 2, title: "Financial Documentation", description: "Compile bank statements and proof of funds sufficient for the trip." },
// //       { step: 3, title: "Ties & Intent Documentation", description: "Gather employment or business proof supporting your intent to return home." },
// //       { step: 4, title: "Visa Application", description: "Submit the visitor visa application with the complete travel and financial file." },
// //       { step: 5, title: "Travel Readiness", description: "Final pre-departure checklist covering insurance, itinerary, and documentation copies." },
// //     ],
// //     faqs: [
// //       {
// //         question: "How long can I stay on a Visitor Visa?",
// //         answer:
// //           "Permitted stay durations vary by country, typically ranging from 30 to 180 days per visit, with some visas allowing single entry and others multiple entries over a longer validity period.",
// //       },
// //       {
// //         question: "Can I extend my Visitor Visa while abroad?",
// //         answer:
// //           "Some countries allow visitor visa extensions under specific circumstances, while others require you to depart and reapply. We'll confirm the extension rules for your specific destination before you travel.",
// //       },
// //       {
// //         question: "Can I convert a Visitor Visa to a work or study visa?",
// //         answer:
// //           "In most cases, visitor visas cannot be converted locally and applicants must return home to apply for a work or study visa through the standard process, though a few countries permit limited exceptions.",
// //       },
// //     ],
// //   },
// // ];

// // export function getVisaBySlug(slug: string): VisaPageData | undefined {
// //   return visaTypesData.find((v) => v.slug === slug);
// // }

// // export function getAllVisaSlugs(): string[] {
// //   return visaTypesData.map((v) => v.slug);
// // }
// import type { FAQ } from "./countries-data";

// // Import all local images based on your folder structure
// import studentVisaImg from "@/assets/images/visatypes/studentvisa.png";
// import researchVisaImg from "@/assets/images/visatypes/researchvisa.png";
// import languageCourseVisaImg from "@/assets/images/visatypes/languagecoursevisa.png";
// import exchangeProgramVisaImg from "@/assets/images/visatypes/exchangeprogramvisa.png";
// import skilledWorkerVisaImg from "@/assets/images/visatypes/skilledworkervisa.png";
// import temporaryVisaImg from "@/assets/images/visatypes/temporaryvisa.png";
// import businessVisaImg from "@/assets/images/visatypes/businessvisa.png";
// import selfEmploymentVisaImg from "@/assets/images/visatypes/selfemploymentvisa.png";
// import permanentResidencyVisaImg from "@/assets/images/visatypes/permanentresidencyvisa.png";
// import familySponsorshipVisaImg from "@/assets/images/visatypes/familysponsorshipvisa.png";
// import investorVisaImg from "@/assets/images/visatypes/investorvisa.png";
// import visitorVisaImg from "@/assets/images/visatypes/visitorvisa.png";

// export type VisaPageData = {
//   slug: string;
//   title: string;
//   category: string;
//   heroImage: string;
//   heroSubtitle: string;
//   eligibility: { title: string; description: string }[];
//   requirements: string[];
//   documents: string[];
//   process: { step: number; title: string; description: string }[];
//   faqs: FAQ[];
//   overview: string;
// };

// export const visaTypesData: VisaPageData[] = [
//   // ---------------------------------------------------------------------
//   // STUDY VISAS
//   // ---------------------------------------------------------------------
//   {
//     slug: "student-visa",
//     title: "Student Visa",
//     category: "Study",
//     heroImage: studentVisaImg.src,
//     heroSubtitle:
//       "Your complete pathway to studying abroad — from university admission to visa approval, with expert GoAbroadly guidance at every step.",
//     overview:
//       "A Student Visa allows you to pursue a full-time diploma, undergraduate, or postgraduate program at a recognised institution abroad. It is the most common route for Indian students seeking international education and typically requires proof of admission, financial sufficiency, and genuine study intent. GoAbroadly works closely with students from the moment they shortlist universities through to visa lodgement, helping build a strong Statement of Purpose, arrange financial documentation, and prepare for visa interviews. With country-specific expertise across the US, UK, Canada, Australia, and Europe, our counsellors ensure your application reflects current embassy expectations and maximises your chances of approval on the first attempt.",
//     eligibility: [
//       { title: "Admission Letter", description: "Unconditional offer letter or CAS/I-20 from a recognised university or college" },
//       { title: "Academic Records", description: "Minimum academic scores as prescribed by the institution and destination country" },
//       { title: "Language Proficiency", description: "Proof of English language proficiency (IELTS/TOEFL/PTE/Duolingo as accepted)" },
//       { title: "Financial Proof", description: "Sufficient funds to cover one year's tuition and living expenses (or as mandated)" },
//       { title: "Immigration History", description: "No adverse immigration history, including prior visa refusals or overstays" },
//       { title: "Genuine Intent", description: "Genuine Student intent supported by a coherent academic and career progression" },
//     ],
//     requirements: [
//       "Completed online visa application form specific to the destination country",
//       "Valid passport with at least 6 months validity beyond the course duration",
//       "Tuition fee payment receipt or confirmation of deposit as required",
//       "Statement of Purpose outlining academic background and study rationale",
//       "Proof of accommodation or on-campus housing confirmation",
//       "Medical examination or health insurance as mandated by the visa category",
//     ],
//     documents: [
//       "Passport bio-data page and copies of any previous visas",
//       "University offer letter, CAS, I-20, or equivalent enrolment confirmation",
//       "Academic transcripts, degree certificates, and mark sheets",
//       "IELTS/TOEFL/PTE score report meeting the minimum threshold",
//       "Bank statements, education loan sanction letter, or sponsor affidavit",
//       "Passport-size photographs as per destination country specifications",
//     ],
//     process: [
//       { step: 1, title: "University Shortlisting", description: "Identify suitable universities and courses based on your academic profile and career goals." },
//       { step: 2, title: "Admission Support", description: "Assist with application forms, SOPs, LORs, and secure your offer letter or CAS." },
//       { step: 3, title: "Financial Documentation", description: "Arrange loan sanctions, bank statements, or sponsor affidavits meeting embassy thresholds." },
//       { step: 4, title: "Visa Filing", description: "Complete the visa application, pay fees, and schedule your biometric appointment." },
//       { step: 5, title: "Interview Preparation", description: "Mock interviews and document review to help you walk in fully prepared." },
//     ],
//     faqs: [
//       {
//         question: "Can I work part-time on a Student Visa?",
//         answer:
//           "Most destination countries permit international students to work part-time (typically 20 hours per week during term and full-time during breaks), though rules vary by country. We'll confirm the exact entitlement for your chosen destination.",
//       },
//       {
//         question: "How much bank balance is required for a Student Visa?",
//         answer:
//           "This depends on the destination country and course duration — generally covering one year's tuition plus living expenses. We calculate the exact figure during your free assessment based on current embassy guidelines.",
//       },
//       {
//         question: "Can I bring my spouse or children on a Student Visa?",
//         answer:
//           "Several countries allow dependents to accompany students on a separate dependent visa, subject to program level and duration. We'll advise whether your chosen destination and course qualify.",
//       },
//     ],
//   },
//   {
//     slug: "research-visa",
//     title: "Research Visa",
//     category: "Study",
//     heroImage: researchVisaImg.src,
//     heroSubtitle:
//       "Purpose-built visa guidance for PhD candidates, postdoctoral fellows, and research scholars pursuing academic work abroad.",
//     overview:
//       "A Research Visa is designed for scholars undertaking a PhD, postdoctoral fellowship, or sponsored research project at a university, laboratory, or research institution abroad. Unlike a standard student visa, this category often requires a hosting agreement with the research institution and proof of a defined research proposal or supervisor sponsorship. GoAbroadly supports researchers in compiling their host agreements, funding documentation, and academic credentials into a compelling application. We work with candidates across STEM, social sciences, and humanities disciplines, ensuring your research intent and institutional affiliation are clearly and correctly presented to the visa authority.",
//     eligibility: [
//       { title: "Research Offer", description: "Confirmed research position, PhD enrolment, or postdoctoral offer from a host institution" },
//       { title: "Academic Qualifications", description: "Relevant postgraduate qualification aligned with the proposed research area" },
//       { title: "Hosting Agreement", description: "Signed hosting agreement or supervisor sponsorship letter where applicable" },
//       { title: "Financial Proof", description: "Proof of funding — scholarship, grant, fellowship, or self-financing" },
//       { title: "Language Proficiency", description: "English or local language proficiency as required by the host institution" },
//       { title: "Clean Background", description: "Clean academic and immigration record with no unresolved visa issues" },
//     ],
//     requirements: [
//       "Hosting agreement or letter of invitation from the research institution",
//       "Detailed research proposal or thesis outline endorsed by your supervisor",
//       "Proof of funding source covering the full research duration",
//       "Academic transcripts and postgraduate degree certificates",
//       "CV highlighting prior research experience and publications",
//       "Health insurance valid for the duration of the research stay",
//     ],
//     documents: [
//       "Passport bio-data page and previous visa history",
//       "Hosting agreement, supervisor letter, or fellowship confirmation",
//       "Research proposal, thesis summary, or project description",
//       "Funding proof — grant letter, scholarship award, or bank statements",
//       "Academic certificates, transcripts, and published papers (if any)",
//       "Passport-size photographs per host country specifications",
//     ],
//     process: [
//       { step: 1, title: "Host Institution Coordination", description: "Confirm your hosting agreement, supervisor details, and research scope with the institution." },
//       { step: 2, title: "Funding Documentation", description: "Compile scholarship, grant, or self-funding proof that meets the visa office's thresholds." },
//       { step: 3, title: "Application Filing", description: "Submit the research visa application with your proposal, credentials, and hosting documents." },
//       { step: 4, title: "Interview & Verification", description: "Prepare for any institutional or consular verification calls specific to research visas." },
//       { step: 5, title: "Approval & Onboarding", description: "Receive your visa decision and guidance on registering with the host institution on arrival." },
//     ],
//     faqs: [
//       {
//         question: "Do I need a separate visa for a short research visit versus a full PhD?",
//         answer:
//           "Yes, short-term research visits are often covered under a different sub-category or business/visitor route, while multi-year PhD or postdoctoral research typically requires a long-term research or student visa. We'll identify the correct category for your stay.",
//       },
//       {
//         question: "Can my family accompany me on a Research Visa?",
//         answer:
//           "Many countries permit spouses and children to join researchers on dependent visas, often with work rights for the accompanying spouse. Eligibility depends on the destination and length of your research assignment.",
//       },
//       {
//         question: "Is a hosting agreement mandatory for all Research Visas?",
//         answer:
//           "Most research visa categories require a formal hosting agreement or supervisor sponsorship confirming the institution's commitment to your project. We help you liaise with the institution to obtain this correctly.",
//       },
//     ],
//   },
//   {
//     slug: "language-course-visa",
//     title: "Language Course Visa",
//     category: "Study",
//     heroImage: languageCourseVisaImg.src,
//     heroSubtitle:
//       "Short-term study visa support for language immersion programs, helping you build fluency and open doors to further study or work abroad.",
//     overview:
//       "A Language Course Visa allows applicants to enrol in an intensive language program abroad, typically ranging from a few weeks to under a year. It's a popular route for students preparing for further academic study, professionals building international communication skills, or those meeting a language prerequisite for future work or immigration pathways. GoAbroadly helps applicants select accredited language schools, prepare the shorter but still detailed documentation this category demands, and present a credible short-term study plan that satisfies consular officers of genuine, time-bound intent.",
//     eligibility: [
//       { title: "Admission Letter", description: "Enrolment confirmation from an accredited language school or institute" },
//       { title: "Course Duration", description: "Course duration within the limits prescribed for this visa category" },
//       { title: "Financial Proof", description: "Proof of funds to cover course fees and living costs for the enrolled period" },
//       { title: "Genuine Intent", description: "Clear intent to return home or transition to a further study visa on completion" },
//       { title: "Academic Background", description: "Basic academic background suitable for the chosen course level" },
//       { title: "Immigration History", description: "No history of visa refusals that would affect credibility of short-term intent" },
//     ],
//     requirements: [
//       "Language school enrolment letter with confirmed start and end dates",
//       "Proof of course fee payment or deposit as required by the institute",
//       "Evidence of accommodation for the duration of the course",
//       "Bank statements or sponsor letter covering course and living expenses",
//       "Cover letter explaining your reason for undertaking the language course",
//       "Return travel intent or onward study/work plan where applicable",
//     ],
//     documents: [
//       "Passport bio-data page and any prior visa copies",
//       "Language school enrolment confirmation and fee receipt",
//       "Bank statements or sponsorship affidavit for the course period",
//       "Proof of accommodation booking or homestay confirmation",
//       "Educational certificates relevant to the course level",
//       "Passport-size photographs per embassy specifications",
//     ],
//     process: [
//       { step: 1, title: "School Selection", description: "Choose an accredited language institute matching your proficiency goals and budget." },
//       { step: 2, title: "Enrolment & Fee Payment", description: "Secure your enrolment letter and process the required course fee payment." },
//       { step: 3, title: "Document Compilation", description: "Prepare financial, accommodation, and intent documentation for the short-term visa." },
//       { step: 4, title: "Visa Submission", description: "File the application with the language course enrolment as the core supporting document." },
//       { step: 5, title: "Pre-Departure Briefing", description: "Guidance on arrival formalities, accommodation check-in, and course commencement." },
//     ],
//     faqs: [
//       {
//         question: "Can a Language Course Visa lead to a longer study visa later?",
//         answer:
//           "Yes, many students use a language course as a stepping stone before enrolling in a degree program, provided they later meet the separate academic and financial requirements for a full student visa.",
//       },
//       {
//         question: "Is part-time work allowed on a Language Course Visa?",
//         answer:
//           "Work rights on this visa category are usually limited or not permitted at all, as it is intended for short-term study. We'll clarify the exact conditions for your destination country.",
//       },
//       {
//         question: "How short can a Language Course Visa program be?",
//         answer:
//           "Programs can range from a few weeks to several months depending on the country and institute, though very short stays may fall under a visitor visa instead. We'll help determine the correct category based on your course length.",
//       },
//     ],
//   },
//   {
//     slug: "exchange-program-visa",
//     title: "Exchange Program Visa",
//     category: "Study",
//     heroImage: exchangeProgramVisaImg.src,
//     heroSubtitle:
//       "Dedicated visa support for semester and year-long exchange programs between your home university and an international partner institution.",
//     overview:
//       "An Exchange Program Visa is intended for students undertaking a semester or academic year abroad as part of a formal partnership between their home university and a host institution. This category relies heavily on documentation from both institutions confirming the exchange arrangement, credit transfer, and expected return to complete the degree at home. GoAbroadly assists exchange students in coordinating paperwork between both universities, ensuring the visa application clearly demonstrates the temporary, credit-linked nature of the stay and a firm intention to resume studies at the home institution afterward.",
//     eligibility: [
//       { title: "Home Nomination", description: "Nomination or confirmation letter from your home university's exchange office" },
//       { title: "Host Acceptance", description: "Acceptance letter from the partner host institution abroad" },
//       { title: "Academic Standing", description: "Good academic standing at your home university with credits in good order" },
//       { title: "Financial Proof", description: "Proof of funds covering the exchange semester or year" },
//       { title: "Return Intent", description: "Confirmed intent to return and complete your degree at the home institution" },
//       { title: "Host Requirements", description: "Compliance with any minimum GPA or language requirements set by the host" },
//     ],
//     requirements: [
//       "Exchange nomination letter and host university acceptance letter",
//       "Learning agreement or credit transfer confirmation between both institutions",
//       "Proof of enrolment status at the home university during the exchange period",
//       "Bank statements or scholarship confirmation covering the exchange duration",
//       "Accommodation arrangement at the host university or nearby housing",
//       "Health insurance valid for the exchange period as required",
//     ],
//     documents: [
//       "Passport bio-data page and previous visa copies",
//       "Exchange nomination letter from the home university",
//       "Acceptance and learning agreement from the host institution",
//       "Bank statements, scholarship letter, or sponsor affidavit",
//       "Proof of enrolment/good standing at the home university",
//       "Passport-size photographs per host country specifications",
//     ],
//     process: [
//       { step: 1, title: "Exchange Nomination", description: "Confirm your nomination through the home university's international office." },
//       { step: 2, title: "Host Acceptance & Learning Agreement", description: "Finalise the learning agreement outlining credits and courses at the host institution." },
//       { step: 3, title: "Financial & Insurance Documentation", description: "Compile proof of funds and mandatory health insurance for the exchange period." },
//       { step: 4, title: "Visa Filing", description: "Submit the exchange visa application with both institutions' confirmation letters." },
//       { step: 5, title: "Pre-Departure Support", description: "Guidance on housing, orientation dates, and credit transfer logistics on return." },
//     ],
//     faqs: [
//       {
//         question: "Do exchange students need a separate visa from regular students?",
//         answer:
//           "Some countries have a distinct exchange visa sub-category with simplified requirements, while others process exchange students under the standard student visa. We'll confirm the correct route for your host country.",
//       },
//       {
//         question: "What happens to my visa status if the exchange program is extended?",
//         answer:
//           "Extensions typically require updated documentation from both universities and a formal visa extension application before your current visa expires. We can guide you through this if it becomes necessary.",
//       },
//       {
//         question: "Will my exchange semester credits be recognised at my home university?",
//         answer:
//           "This depends on the learning agreement signed before departure, which should specify how credits transfer. This is coordinated between the universities rather than the visa office, but we ensure your documentation aligns.",
//       },
//     ],
//   },

//   // ---------------------------------------------------------------------
//   // WORK VISAS
//   // ---------------------------------------------------------------------
//   {
//     slug: "skilled-worker-visa",
//     title: "Skilled Worker Visa",
//     category: "Work",
//     heroImage: skilledWorkerVisaImg.src,
//     heroSubtitle:
//       "Employer-sponsored and points-based visa pathways for skilled professionals seeking long-term work opportunities abroad.",
//     overview:
//       "A Skilled Worker Visa enables qualified professionals to take up employment abroad, typically through employer sponsorship or a points-based immigration system that assesses factors like occupation, qualifications, work experience, and language ability. This category often serves as a pathway toward permanent residency in countries such as Canada, Australia, and the UK. GoAbroadly guides skilled professionals through occupation list matching, credential assessments, and employer sponsorship coordination, helping you present a competitive profile that meets both immigration point thresholds and employer compliance requirements.",
//     eligibility: [
//       { title: "Eligible Occupation", description: "Occupation listed on the relevant skilled occupation or shortage list" },
//       { title: "Qualifications & Experience", description: "Recognised qualification and relevant work experience in the nominated field" },
//       { title: "Skills Assessment", description: "Positive skills assessment from the designated assessing authority (where required)" },
//       { title: "Points Requirement", description: "Minimum points score under the applicable points-based system, if relevant" },
//       { title: "Language Proficiency", description: "English or local language proficiency meeting the prescribed threshold" },
//       { title: "Job Offer / Sponsorship", description: "Valid job offer or employer sponsorship where the pathway requires it" },
//     ],
//     requirements: [
//       "Skills assessment report from the recognised assessing body",
//       "Employer sponsorship letter or Certificate of Sponsorship where applicable",
//       "Proof of relevant work experience through reference letters and payslips",
//       "Language test results (IELTS/PTE or equivalent) meeting minimum bands",
//       "Educational credential assessment confirming equivalency to local standards",
//       "Police clearance certificates from all countries of residence",
//     ],
//     documents: [
//       "Passport bio-data page and employment history summary",
//       "Skills assessment outcome letter for the nominated occupation",
//       "Employer sponsorship or Certificate of Sponsorship documentation",
//       "Reference letters, payslips, and relieving letters from past employers",
//       "Language test scorecard and educational credential assessment",
//       "Police clearance certificates and medical examination reports",
//     ],
//     process: [
//       { step: 1, title: "Occupation & Points Assessment", description: "Match your profile against occupation lists and calculate your points-based eligibility." },
//       { step: 2, title: "Skills Assessment", description: "Obtain a positive skills assessment from the relevant assessing authority for your occupation." },
//       { step: 3, title: "Expression of Interest / Sponsorship", description: "Lodge an expression of interest or secure employer sponsorship as applicable." },
//       { step: 4, title: "Visa Application", description: "File the visa application with skills, language, and character documentation." },
//       { step: 5, title: "Decision & Relocation Support", description: "Track your application and receive guidance on relocation once approved." },
//     ],
//     faqs: [
//       {
//         question: "Do I need a job offer for a Skilled Worker Visa?",
//         answer:
//           "It depends on the country — some pathways require employer sponsorship, while others (like points-based independent visas) allow qualified applicants to apply without a confirmed job offer. We'll identify which route fits your profile.",
//       },
//       {
//         question: "Can a Skilled Worker Visa lead to permanent residency?",
//         answer:
//           "In many countries, skilled worker visas are explicitly designed as a pathway to permanent residency after meeting residency, employment, or points thresholds over time.",
//       },
//       {
//         question: "How long does the skills assessment process take?",
//         answer:
//           "Skills assessments typically take 4–12 weeks depending on the assessing authority and occupation, though this can vary. We help you initiate this early to avoid delays in your overall application.",
//       },
//     ],
//   },
//   {
//     slug: "temporary-work-visa",
//     title: "Temporary Work Visa",
//     category: "Work",
//     heroImage: temporaryVisaImg.src,
//     heroSubtitle:
//       "Fast, compliant visa support for seasonal, contract, and short-term overseas employment opportunities.",
//     overview:
//       "A Temporary Work Visa allows individuals to take up employment abroad for a defined, limited period — commonly used for seasonal work, fixed-term contracts, intra-company transfers, or project-based assignments. Unlike skilled worker pathways aimed at long-term settlement, this category prioritises a clear end date and confirmed employer relationship. GoAbroadly assists applicants in verifying employer legitimacy, compiling contract documentation, and ensuring the visa application clearly reflects the temporary, non-immigrant nature of the assignment to meet consular expectations.",
//     eligibility: [
//       { title: "Job Contract", description: "Confirmed job offer or contract with a defined start and end date" },
//       { title: "Employer Eligibility", description: "Employer registered and authorised to hire foreign workers in the destination country" },
//       { title: "Relevant Experience", description: "Relevant skills or experience matching the role being offered" },
//       { title: "Return Intent", description: "Proof of intent to return home or move on at the end of the contract period" },
//       { title: "Quota Compliance", description: "Compliance with any quota, seasonal window, or sector-specific conditions" },
//       { title: "Immigration History", description: "No adverse immigration history affecting temporary visa eligibility" },
//     ],
//     requirements: [
//       "Signed employment contract specifying role, duration, and remuneration",
//       "Employer's work permit application or labour market approval where required",
//       "Proof of relevant qualifications or experience for the offered role",
//       "Accommodation arrangements for the work assignment period",
//       "Medical fitness certificate where mandated by the job sector",
//       "Return travel plan or onward assignment confirmation",
//     ],
//     documents: [
//       "Passport bio-data page and prior employment/visa history",
//       "Signed employment contract or letter of offer",
//       "Employer's sponsorship or labour approval documentation",
//       "Qualification certificates or trade licences relevant to the role",
//       "Medical examination reports where required by the sector",
//       "Passport-size photographs per destination country rules",
//     ],
//     process: [
//       { step: 1, title: "Employer Verification", description: "Confirm the employer's authorisation to sponsor temporary foreign workers." },
//       { step: 2, title: "Contract Finalisation", description: "Secure a signed employment contract detailing role, duration, and terms." },
//       { step: 3, title: "Work Permit Coordination", description: "Support the employer's labour approval or work permit filing where required." },
//       { step: 4, title: "Visa Application", description: "Submit your temporary work visa application with contract and role documentation." },
//       { step: 5, title: "Deployment Readiness", description: "Pre-departure briefing on accommodation, local compliance, and contract terms." },
//     ],
//     faqs: [
//       {
//         question: "Can a Temporary Work Visa be extended or converted?",
//         answer:
//           "Some countries allow extensions within set limits, and certain temporary categories can be converted to longer-term work visas if the role and employer support it. We'll advise on the specific rules for your destination.",
//       },
//       {
//         question: "Can my family join me on a Temporary Work Visa?",
//         answer:
//           "Dependent eligibility varies widely by country and visa duration — shorter assignments often don't permit dependents, while longer contract visas may allow accompanying family members.",
//       },
//       {
//         question: "What happens if my contract ends early?",
//         answer:
//           "Most temporary work visas are tied to the employment contract, so early termination typically requires you to leave within a specified grace period unless you secure another sponsored role.",
//       },
//     ],
//   },
//   {
//     slug: "business-visa",
//     title: "Business Visa",
//     category: "Work",
//     heroImage: businessVisaImg.src,
//     heroSubtitle:
//       "Streamlined visa support for business meetings, conferences, negotiations, and short-term corporate travel abroad.",
//     overview:
//       "A Business Visa is designed for professionals travelling abroad for meetings, conferences, contract negotiations, trade fairs, or short corporate assignments — without taking up local employment. It typically requires an invitation from the host company alongside proof of your existing employment and income back home. GoAbroadly assists frequent business travellers and corporate teams in preparing invitation letters, itineraries, and financial documentation efficiently, minimising delays for time-sensitive business commitments while ensuring full compliance with the destination's business visa conditions.",
//     eligibility: [
//       { title: "Business Invitation", description: "Invitation letter from the host company or event organiser abroad" },
//       { title: "Home Employment", description: "Current employment with a company that supports the business trip purpose" },
//       { title: "Financial Proof", description: "Sufficient funds to cover the duration of the business visit" },
//       { title: "Business Itinerary", description: "Clear itinerary demonstrating the specific business purpose of travel" },
//       { title: "No Local Employment", description: "No intent to take up local employment or remuneration abroad" },
//       { title: "Home Ties", description: "Strong ties to home country supporting return after the visit" },
//     ],
//     requirements: [
//       "Invitation letter from the host organisation detailing the business purpose",
//       "Covering letter from your employer confirming the trip and your role",
//       "Proof of business relationship, such as prior correspondence or contracts",
//       "Bank statements or company financial documents covering trip expenses",
//       "Travel and accommodation itinerary for the visit duration",
//       "Return flight booking or onward travel confirmation",
//     ],
//     documents: [
//       "Passport bio-data page and previous visa copies",
//       "Business invitation letter and employer covering letter",
//       "Company registration or incorporation documents where applicable",
//       "Bank statements covering the trip duration and expenses",
//       "Hotel booking or accommodation confirmation",
//       "Passport-size photographs per embassy specifications",
//     ],
//     process: [
//       { step: 1, title: "Purpose & Invitation Confirmation", description: "Secure a valid invitation letter clearly stating the business purpose and duration." },
//       { step: 2, title: "Employer Documentation", description: "Compile your employer's covering letter and proof of your role and income." },
//       { step: 3, title: "Itinerary Planning", description: "Finalise travel dates, accommodation, and meeting schedule for the visa file." },
//       { step: 4, title: "Application Filing", description: "Submit the business visa application with all supporting corporate documentation." },
//       { step: 5, title: "Travel Readiness", description: "Final checklist and briefing ahead of departure for your business engagements." },
//     ],
//     faqs: [
//       {
//         question: "Can I get paid by a company abroad on a Business Visa?",
//         answer:
//           "No, a Business Visa does not permit local employment or remuneration from a foreign company — it is strictly for meetings, negotiations, and similar business activities while remaining paid by your home employer.",
//       },
//       {
//         question: "How long can I stay abroad on a Business Visa?",
//         answer:
//           "Stay durations vary by country, typically ranging from a few days up to 90 days per visit, with some visas allowing multiple entries over a longer validity period.",
//       },
//       {
//         question: "Is a Business Visa the same as a work visa?",
//         answer:
//           "No, a Business Visa covers short-term business activities without local employment, while a work visa is required if you intend to take up a job or be paid by an entity in the destination country.",
//       },
//     ],
//   },
//   {
//     slug: "self-employment-visa",
//     title: "Self Employment Visa",
//     category: "Work",
//     heroImage: selfEmploymentVisaImg.src,
//     heroSubtitle:
//       "Visa pathways for entrepreneurs, freelancers, and independent professionals looking to establish their own venture abroad.",
//     overview:
//       "A Self Employment Visa is designed for entrepreneurs, freelancers, and independent professionals who wish to establish or operate their own business abroad rather than work for a sponsoring employer. This category generally requires a viable business plan, proof of relevant experience, and evidence of sufficient capital to sustain the venture. GoAbroadly helps applicants build a credible business case, structure their financial documentation, and navigate country-specific self-employment or entrepreneur visa criteria, from freelancer permits to startup-founder residency routes.",
//     eligibility: [
//       { title: "Business Plan", description: "Viable business plan demonstrating market need and sustainability" },
//       { title: "Professional Experience", description: "Relevant professional experience or qualifications in the proposed field" },
//       { title: "Investment Capital", description: "Proof of sufficient capital to establish and sustain the business" },
//       { title: "Threshold Compliance", description: "Compliance with any minimum investment or turnover thresholds where applicable" },
//       { title: "Visa Compliance", description: "No conflicting local employment that would breach visa conditions" },
//       { title: "Registration Intent", description: "Registration intent with local business or tax authorities on arrival" },
//     ],
//     requirements: [
//       "Detailed business plan with market analysis and financial projections",
//       "Proof of capital — bank statements, investment funds, or business loan approval",
//       "Professional portfolio or client contracts evidencing freelance/business track record",
//       "Educational or professional certifications relevant to the business activity",
//       "Local business registration intent or pre-registration documentation",
//       "Health insurance and accommodation arrangements for the visa period",
//     ],
//     documents: [
//       "Passport bio-data page and prior visa/business history",
//       "Business plan with projected revenue and operational structure",
//       "Bank statements or proof of investment capital",
//       "Client contracts, portfolio, or freelance income history",
//       "Professional certifications or trade licences relevant to the business",
//       "Passport-size photographs per destination country rules",
//     ],
//     process: [
//       { step: 1, title: "Business Plan Development", description: "Build a market-ready business plan aligned with the destination country's visa criteria." },
//       { step: 2, title: "Capital Verification", description: "Organise proof of investment funds or business capital meeting minimum thresholds." },
//       { step: 3, title: "Credential Compilation", description: "Gather professional history, contracts, and qualifications supporting your venture." },
//       { step: 4, title: "Visa Application", description: "File the self-employment visa with your business case and financial documentation." },
//       { step: 5, title: "Business Setup Guidance", description: "Support with local registration steps once your visa is approved." },
//     ],
//     faqs: [
//       {
//         question: "How much capital do I need for a Self Employment Visa?",
//         answer:
//           "Minimum capital requirements vary significantly by country and business type, ranging from modest freelancer thresholds to substantial startup investment amounts. We calculate the exact figure during your assessment.",
//       },
//       {
//         question: "Can I hire employees under a Self Employment Visa?",
//         answer:
//           "Many self-employment or entrepreneur visa categories allow you to hire staff once your business is registered, though specific conditions and timelines depend on the destination country's rules.",
//       },
//       {
//         question: "Does my business plan need to be in the local language?",
//         answer:
//           "Requirements vary — some countries accept English business plans while others require translation into the local language for official submission. We'll confirm this for your specific destination.",
//       },
//     ],
//   },

//   // ---------------------------------------------------------------------
//   // IMMIGRATION VISAS
//   // ---------------------------------------------------------------------
//   {
//     slug: "permanent-residency",
//     title: "Permanent Residency",
//     category: "Immigration",
//     heroImage: permanentResidencyVisaImg.src,
//     heroSubtitle:
//       "Long-term settlement guidance for individuals and families seeking permanent residency status abroad.",
//     overview:
//       "Permanent Residency grants the right to live, work, and study indefinitely in a foreign country, often serving as a precursor to citizenship. Pathways vary widely — from points-based skilled migration and employer nomination to long-term visa transitions after several years of temporary residence. GoAbroadly guides applicants through the full residency journey, from initial eligibility assessment and points calculation through to document compilation and application lodgement, helping families plan a stable, long-term future abroad with clarity on timelines and requirements.",
//     eligibility: [
//       { title: "Points / Category Eligibility", description: "Sufficient points score or qualifying category under the residency program" },
//       { title: "Relevant Ties / Skills", description: "Relevant skills, qualifications, or family/investment ties to the destination country" },
//       { title: "Residence History", description: "Minimum period of prior legal residence where transitioning from a temporary visa" },
//       { title: "Health & Character", description: "Health and character clearances meeting immigration standards" },
//       { title: "Financial Stability", description: "Financial stability sufficient to support yourself and any dependents" },
//       { title: "Long-term Intent", description: "Genuine intention to reside long-term in the destination country" },
//     ],
//     requirements: [
//       "Points test calculation or category-specific eligibility documentation",
//       "Skills assessment, employer nomination, or investment proof as applicable",
//       "Comprehensive medical examination reports for all applicants and dependents",
//       "Police clearance certificates from every country of residence over the qualifying period",
//       "Proof of settlement funds or ongoing income sufficiency",
//       "Evidence of continuous legal residence where converting from a temporary visa",
//     ],
//     documents: [
//       "Passport bio-data pages for all applicants and dependents",
//       "Skills assessment, nomination, or investment confirmation documents",
//       "Medical examination reports from approved panel physicians",
//       "Police clearance certificates covering the required residency history",
//       "Financial documentation demonstrating settlement fund sufficiency",
//       "Marriage and birth certificates for dependents included in the application",
//     ],
//     process: [
//       { step: 1, title: "Pathway Assessment", description: "Determine the most suitable residency pathway based on your skills, family, or investment profile." },
//       { step: 2, title: "Points & Eligibility Calculation", description: "Calculate your points score or confirm category-specific eligibility criteria." },
//       { step: 3, title: "Documentation Compilation", description: "Gather medical, police, and financial clearances for all family members." },
//       { step: 4, title: "Application Lodgement", description: "Submit the permanent residency application with the complete supporting file." },
//       { step: 5, title: "Settlement Planning", description: "Post-approval guidance on relocation, housing, and integration support." },
//     ],
//     faqs: [
//       {
//         question: "How long does a Permanent Residency application take?",
//         answer:
//           "Processing timelines vary significantly by country and pathway, typically ranging from several months to over a year. We provide a realistic estimate based on the current queue for your specific category.",
//       },
//       {
//         question: "Can I include my family in a Permanent Residency application?",
//         answer:
//           "Yes, most permanent residency pathways allow you to include your spouse and dependent children in the same application, subject to the destination country's dependent criteria.",
//       },
//       {
//         question: "Does Permanent Residency lead to citizenship?",
//         answer:
//           "In most countries, permanent residents become eligible to apply for citizenship after meeting a minimum residence period and other requirements, such as language and civics tests.",
//       },
//     ],
//   },
//   {
//     slug: "family-sponsorship",
//     title: "Family Sponsorship",
//     category: "Immigration",
//     heroImage: familySponsorshipVisaImg.src,
//     heroSubtitle:
//       "Reunite with your loved ones abroad through spouse, parent, or dependent sponsorship visa pathways.",
//     overview:
//       "Family Sponsorship allows citizens or permanent residents of a country to sponsor eligible relatives — spouses, partners, parents, or dependent children — to join them abroad. This category requires proof of a genuine relationship, the sponsor's ability to financially support the applicant, and compliance with relationship-specific documentation standards. GoAbroadly assists sponsors and applicants in building a strong relationship evidence file, meeting income or undertaking requirements, and navigating the often detailed scrutiny applied to family visa categories.",
//     eligibility: [
//       { title: "Sponsor Eligibility", description: "Sponsor holds valid citizenship, permanent residency, or eligible status in the destination country" },
//       { title: "Genuine Relationship", description: "Genuine and ongoing relationship with the applicant (spousal, parental, or dependent)" },
//       { title: "Financial Requirements", description: "Sponsor meets minimum income or financial undertaking requirements" },
//       { title: "Health & Character", description: "Applicant meets health and character clearance standards" },
//       { title: "Relationship Evidence", description: "Relationship evidence spanning cohabitation, communication, and shared commitments" },
//       { title: "Immigration History", description: "No prior sponsorship breaches or unresolved immigration violations" },
//     ],
//     requirements: [
//       "Proof of sponsor's status — citizenship or permanent residency documentation",
//       "Relationship evidence such as marriage certificate, joint finances, or communication history",
//       "Sponsor's income proof or statutory declaration of financial support",
//       "Medical examination reports for the applicant and accompanying dependents",
//       "Police clearance certificates for the applicant from all countries of residence",
//       "Statutory declarations or affidavits supporting the genuineness of the relationship",
//     ],
//     documents: [
//       "Passport bio-data pages for sponsor and applicant",
//       "Marriage certificate, birth certificates, or relationship proof documents",
//       "Sponsor's proof of income, employment, or financial undertaking",
//       "Joint bank statements, photographs, and communication records",
//       "Medical and police clearance certificates for the applicant",
//       "Passport-size photographs per destination country rules",
//     ],
//     process: [
//       { step: 1, title: "Sponsor Eligibility Check", description: "Confirm the sponsor's status and financial capacity to support the application." },
//       { step: 2, title: "Relationship Evidence Compilation", description: "Build a comprehensive file demonstrating the genuineness of the relationship." },
//       { step: 3, title: "Health & Character Clearances", description: "Complete medical examinations and police clearances for the applicant." },
//       { step: 4, title: "Application Submission", description: "Lodge the sponsorship application with sponsor and applicant documentation." },
//       { step: 5, title: "Interview & Decision", description: "Prepare for any relationship verification interview and track the final decision." },
//     ],
//     faqs: [
//       {
//         question: "What counts as sufficient relationship evidence for spousal sponsorship?",
//         answer:
//           "Immigration authorities typically look for a combination of joint finances, cohabitation history, communication records, photographs together, and statements from family or friends confirming the relationship's genuineness.",
//       },
//       {
//         question: "Is there a minimum income requirement for sponsors?",
//         answer:
//           "Many countries set a minimum income or financial undertaking threshold for sponsors to demonstrate they can support the applicant without relying on public funds. We'll confirm the exact figure for your destination.",
//       },
//       {
//         question: "Can parents be sponsored for permanent residency?",
//         answer:
//           "Several countries offer dedicated parent sponsorship or long-term parent visa streams, though these often have caps, waiting periods, or additional financial bonds compared to spousal sponsorship.",
//       },
//     ],
//   },
//   {
//     slug: "investor-visa",
//     title: "Investor Visa",
//     category: "Immigration",
//     heroImage: investorVisaImg.src,
//     heroSubtitle:
//       "Residency and citizenship-linked visa pathways for investors and high-net-worth individuals contributing capital abroad.",
//     overview:
//       "An Investor Visa grants residency — and in some programs, an eventual path to citizenship — in exchange for a qualifying investment in the destination country's economy, such as a business venture, government bonds, real estate, or a designated investment fund. This category demands rigorous source-of-funds documentation and compliance with strict due diligence checks. GoAbroadly works with investors to structure compliant investment documentation, coordinate with legal and financial partners, and manage the due diligence process that underpins every investor migration program.",
//     eligibility: [
//       { title: "Investment Amount", description: "Minimum investment amount as prescribed by the specific investor program" },
//       { title: "Source of Funds", description: "Legitimate, verifiable source of investment funds" },
//       { title: "Due Diligence", description: "Clean financial and criminal record passing enhanced due diligence checks" },
//       { title: "Approved Category", description: "Investment made in an approved category — business, real estate, bonds, or fund" },
//       { title: "Investment Holding", description: "Ability to maintain the investment for the required minimum holding period" },
//       { title: "Additional Conditions", description: "Compliance with any job-creation or business activity conditions where applicable" },
//     ],
//     requirements: [
//       "Proof of investment funds and their legitimate source (business income, sale of assets, etc.)",
//       "Investment agreement or transaction documentation for the qualifying asset",
//       "Enhanced due diligence documentation, including financial and legal history",
//       "Business plan where the investment involves establishing or acquiring a company",
//       "Police clearance certificates from all countries of residence",
//       "Comprehensive health insurance covering the investor and dependents",
//     ],
//     documents: [
//       "Passport bio-data pages for the investor and accompanying dependents",
//       "Source of funds documentation — tax returns, business records, or asset sale proof",
//       "Investment transaction agreement or fund subscription documents",
//       "Bank reference letters and audited financial statements where applicable",
//       "Police clearance certificates and medical examination reports",
//       "Business plan or fund prospectus supporting the investment category",
//     ],
//     process: [
//       { step: 1, title: "Program Selection", description: "Identify the investor visa program that matches your investment capacity and residency goals." },
//       { step: 2, title: "Source of Funds Verification", description: "Compile and legally verify the origin of your investment capital." },
//       { step: 3, title: "Investment Structuring", description: "Finalise the qualifying investment — business, real estate, bonds, or fund — with legal partners." },
//       { step: 4, title: "Due Diligence & Application", description: "Submit the investor visa application through the enhanced due diligence process." },
//       { step: 5, title: "Approval & Compliance Monitoring", description: "Ongoing guidance to maintain investment compliance through the required holding period." },
//     ],
//     faqs: [
//       {
//         question: "What is the minimum investment for an Investor Visa?",
//         answer:
//           "Minimum thresholds vary widely by country and investment category, ranging from real estate purchases to government fund contributions. We provide exact figures for each program during your assessment.",
//       },
//       {
//         question: "How long does due diligence take for Investor Visas?",
//         answer:
//           "Enhanced due diligence checks are more thorough than standard visa processing and can take several months, depending on the complexity of your source-of-funds documentation and the program chosen.",
//       },
//       {
//         question: "Does an Investor Visa guarantee citizenship?",
//         answer:
//           "Investor visas typically grant residency first; citizenship, where offered, usually requires maintaining the investment and residency status for a minimum period and meeting additional naturalisation criteria.",
//       },
//     ],
//   },
//   {
//     slug: "visitor-visa",
//     title: "Visitor Visa",
//     category: "Immigration",
//     heroImage: visitorVisaImg.src,
//     heroSubtitle:
//       "Hassle-free visa support for tourism, family visits, and short-term leisure travel abroad.",
//     overview:
//       "A Visitor Visa permits short-term travel abroad for tourism, sightseeing, or visiting friends and family, without the right to work or study locally. It is one of the most frequently applied for visa categories and requires clear evidence of travel purpose, financial capacity, and strong ties to your home country to support your return. GoAbroadly helps applicants prepare a well-organised visitor visa file, including itinerary planning, invitation letters where relevant, and financial documentation, to minimise the risk of delays or refusals for time-sensitive travel plans.",
//     eligibility: [
//       { title: "Purpose of Visit", description: "Clear purpose of visit — tourism, family visit, or short leisure travel" },
//       { title: "Financial Proof", description: "Sufficient funds to cover the entire duration of the trip" },
//       { title: "Home Ties", description: "Strong ties to home country such as employment, property, or family" },
//       { title: "Travel Insurance", description: "Valid travel and health insurance where required by the destination" },
//       { title: "Immigration History", description: "No history of visa refusals casting doubt on genuine visitor intent" },
//       { title: "Return Travel", description: "Confirmed return travel plans within the permitted visa duration" },
//     ],
//     requirements: [
//       "Detailed travel itinerary covering the full duration of the visit",
//       "Proof of accommodation — hotel bookings or invitation letter from host",
//       "Bank statements demonstrating sufficient funds for the trip",
//       "Proof of employment or business ties confirming intent to return",
//       "Travel insurance covering medical emergencies during the visit",
//       "Invitation letter from family or friends where applicable",
//     ],
//     documents: [
//       "Passport bio-data page and copies of previous visas",
//       "Confirmed return flight tickets and travel itinerary",
//       "Hotel booking confirmation or host invitation letter",
//       "Bank statements covering the trip duration",
//       "Employment letter or business ownership proof",
//       "Passport-size photographs per embassy specifications",
//     ],
//     process: [
//       { step: 1, title: "Travel Planning", description: "Finalise your travel dates, itinerary, and accommodation arrangements." },
//       { step: 2, title: "Financial Documentation", description: "Compile bank statements and proof of funds sufficient for the trip." },
//       { step: 3, title: "Ties & Intent Documentation", description: "Gather employment or business proof supporting your intent to return home." },
//       { step: 4, title: "Visa Application", description: "Submit the visitor visa application with the complete travel and financial file." },
//       { step: 5, title: "Travel Readiness", description: "Final pre-departure checklist covering insurance, itinerary, and documentation copies." },
//     ],
//     faqs: [
//       {
//         question: "How long can I stay on a Visitor Visa?",
//         answer:
//           "Permitted stay durations vary by country, typically ranging from 30 to 180 days per visit, with some visas allowing single entry and others multiple entries over a longer validity period.",
//       },
//       {
//         question: "Can I extend my Visitor Visa while abroad?",
//         answer:
//           "Some countries allow visitor visa extensions under specific circumstances, while others require you to depart and reapply. We'll confirm the extension rules for your specific destination before you travel.",
//       },
//       {
//         question: "Can I convert a Visitor Visa to a work or study visa?",
//         answer:
//           "In most cases, visitor visas cannot be converted locally and applicants must return home to apply for a work or study visa through the standard process, though a few countries permit limited exceptions.",
//       },
//     ],
//   },
// ];

// export function getVisaBySlug(slug: string): VisaPageData | undefined {
//   return visaTypesData.find((v) => v.slug === slug);
// }

// export function getAllVisaSlugs(): string[] {
//   return visaTypesData.map((v) => v.slug);
// }
import type { FAQ } from "./countries-data";

// Import all local images based on your folder structure
import studentVisaImg from "@/assets/images/visatypes/studentvisa.png";
import researchVisaImg from "@/assets/images/visatypes/researchvisa.png";
import languageCourseVisaImg from "@/assets/images/visatypes/languagecoursevisa.png";
import exchangeProgramVisaImg from "@/assets/images/visatypes/exchangeprogramvisa.png";
import skilledWorkerVisaImg from "@/assets/images/visatypes/skilledworkervisa.png";
import temporaryVisaImg from "@/assets/images/visatypes/temporaryvisa.png";
import businessVisaImg from "@/assets/images/visatypes/businessvisa.png";
import selfEmploymentVisaImg from "@/assets/images/visatypes/selfemploymentvisa.png";
import permanentResidencyVisaImg from "@/assets/images/visatypes/permanentresidencyvisa.png";
import familySponsorshipVisaImg from "@/assets/images/visatypes/familysponsorshipvisa.png";
import investorVisaImg from "@/assets/images/visatypes/investorvisa.png";
import visitorVisaImg from "@/assets/images/visatypes/visitorvisa.png";

export type VisaPageData = {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  heroSubtitle: string;
  eligibility: { title: string; description: string }[];
  requirements: string[];
  documents: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faqs: FAQ[];
  overview: string;
};

export const visaTypesData: VisaPageData[] = [
  // ---------------------------------------------------------------------
  // STUDY VISAS
  // ---------------------------------------------------------------------
  {
    slug: "student-visa",
    title: "Student Visa",
    category: "Study",
    heroImage: studentVisaImg.src,
    heroSubtitle:
      "Your complete pathway to studying abroad — from university admission to visa approval, with expert GoAbroadly guidance at every step.",
    overview:
      "A Student Visa allows you to pursue a full-time diploma, undergraduate, or postgraduate program at a recognised institution abroad. It is the most common route for Indian students seeking international education and typically requires proof of admission, financial sufficiency, and genuine study intent. GoAbroadly works closely with students from the moment they shortlist universities through to visa lodgement, helping build a strong Statement of Purpose, arrange financial documentation, and prepare for visa interviews. With country-specific expertise across the US, UK, Canada, Australia, and Europe, our counsellors ensure your application reflects current embassy expectations and maximises your chances of approval on the first attempt.",
    eligibility: [
      { title: "Admission Letter", description: "Unconditional offer letter or CAS/I-20 from a recognised university or college" },
      { title: "Academic Records", description: "Minimum academic scores as prescribed by the institution and destination country" },
      { title: "Language Proficiency", description: "Proof of English language proficiency (IELTS/TOEFL/PTE/Duolingo as accepted)" },
      { title: "Financial Proof", description: "Sufficient funds to cover one year's tuition and living expenses (or as mandated)" },
      { title: "Immigration History", description: "No adverse immigration history, including prior visa refusals or overstays" },
      { title: "Genuine Intent", description: "Genuine Student intent supported by a coherent academic and career progression" },
    ],
    requirements: [
      "Completed online visa application form specific to the destination country",
      "Valid passport with at least 6 months validity beyond the course duration",
      "Tuition fee payment receipt or confirmation of deposit as required",
      "Statement of Purpose outlining academic background and study rationale",
      "Proof of accommodation or on-campus housing confirmation",
      "Medical examination or health insurance as mandated by the visa category",
    ],
    documents: [
      { title: "Passport & Visas", description: "Passport bio-data page and copies of any previous visas" },
      { title: "Offer Letter", description: "University offer letter, CAS, I-20, or equivalent enrolment confirmation" },
      { title: "Academic Records", description: "Academic transcripts, degree certificates, and mark sheets" },
      { title: "English Test Score", description: "IELTS/TOEFL/PTE score report meeting the minimum threshold" },
      { title: "Financial Proof", description: "Bank statements, education loan sanction letter, or sponsor affidavit" },
      { title: "Passport Size Photos", description: "Passport-size photographs as per destination country specifications" },
    ],
    process: [
      { step: 1, title: "University Shortlisting", description: "Identify suitable universities and courses based on your academic profile and career goals." },
      { step: 2, title: "Admission Support", description: "Assist with application forms, SOPs, LORs, and secure your offer letter or CAS." },
      { step: 3, title: "Financial Documentation", description: "Arrange loan sanctions, bank statements, or sponsor affidavits meeting embassy thresholds." },
      { step: 4, title: "Visa Filing", description: "Complete the visa application, pay fees, and schedule your biometric appointment." },
      { step: 5, title: "Interview Preparation", description: "Mock interviews and document review to help you walk in fully prepared." },
    ],
    faqs: [
      {
        question: "Can I work part-time on a Student Visa?",
        answer:
          "Most destination countries permit international students to work part-time (typically 20 hours per week during term and full-time during breaks), though rules vary by country. We'll confirm the exact entitlement for your chosen destination.",
      },
      {
        question: "How much bank balance is required for a Student Visa?",
        answer:
          "This depends on the destination country and course duration — generally covering one year's tuition plus living expenses. We calculate the exact figure during your free assessment based on current embassy guidelines.",
      },
      {
        question: "Can I bring my spouse or children on a Student Visa?",
        answer:
          "Several countries allow dependents to accompany students on a separate dependent visa, subject to program level and duration. We'll advise whether your chosen destination and course qualify.",
      },
    ],
  },
  {
    slug: "research-visa",
    title: "Research Visa",
    category: "Study",
    heroImage: researchVisaImg.src,
    heroSubtitle:
      "Purpose-built visa guidance for PhD candidates, postdoctoral fellows, and research scholars pursuing academic work abroad.",
    overview:
      "A Research Visa is designed for scholars undertaking a PhD, postdoctoral fellowship, or sponsored research project at a university, laboratory, or research institution abroad. Unlike a standard student visa, this category often requires a hosting agreement with the research institution and proof of a defined research proposal or supervisor sponsorship. GoAbroadly supports researchers in compiling their host agreements, funding documentation, and academic credentials into a compelling application. We work with candidates across STEM, social sciences, and humanities disciplines, ensuring your research intent and institutional affiliation are clearly and correctly presented to the visa authority.",
    eligibility: [
      { title: "Research Offer", description: "Confirmed research position, PhD enrolment, or postdoctoral offer from a host institution" },
      { title: "Academic Qualifications", description: "Relevant postgraduate qualification aligned with the proposed research area" },
      { title: "Hosting Agreement", description: "Signed hosting agreement or supervisor sponsorship letter where applicable" },
      { title: "Financial Proof", description: "Proof of funding — scholarship, grant, fellowship, or self-financing" },
      { title: "Language Proficiency", description: "English or local language proficiency as required by the host institution" },
      { title: "Clean Background", description: "Clean academic and immigration record with no unresolved visa issues" },
    ],
    requirements: [
      "Hosting agreement or letter of invitation from the research institution",
      "Detailed research proposal or thesis outline endorsed by your supervisor",
      "Proof of funding source covering the full research duration",
      "Academic transcripts and postgraduate degree certificates",
      "CV highlighting prior research experience and publications",
      "Health insurance valid for the duration of the research stay",
    ],
    documents: [
      { title: "Passport & Visas", description: "Passport bio-data page and previous visa history" },
      { title: "Hosting Agreement", description: "Hosting agreement, supervisor letter, or fellowship confirmation" },
      { title: "Research Proposal", description: "Research proposal, thesis summary, or project description" },
      { title: "Financial Proof", description: "Funding proof — grant letter, scholarship award, or bank statements" },
      { title: "Academic Records", description: "Academic certificates, transcripts, and published papers (if any)" },
      { title: "Passport Size Photos", description: "Passport-size photographs per host country specifications" },
    ],
    process: [
      { step: 1, title: "Host Institution Coordination", description: "Confirm your hosting agreement, supervisor details, and research scope with the institution." },
      { step: 2, title: "Funding Documentation", description: "Compile scholarship, grant, or self-funding proof that meets the visa office's thresholds." },
      { step: 3, title: "Application Filing", description: "Submit the research visa application with your proposal, credentials, and hosting documents." },
      { step: 4, title: "Interview & Verification", description: "Prepare for any institutional or consular verification calls specific to research visas." },
      { step: 5, title: "Approval & Onboarding", description: "Receive your visa decision and guidance on registering with the host institution on arrival." },
    ],
    faqs: [
      {
        question: "Do I need a separate visa for a short research visit versus a full PhD?",
        answer:
          "Yes, short-term research visits are often covered under a different sub-category or business/visitor route, while multi-year PhD or postdoctoral research typically requires a long-term research or student visa. We'll identify the correct category for your stay.",
      },
      {
        question: "Can my family accompany me on a Research Visa?",
        answer:
          "Many countries permit spouses and children to join researchers on dependent visas, often with work rights for the accompanying spouse. Eligibility depends on the destination and length of your research assignment.",
      },
      {
        question: "Is a hosting agreement mandatory for all Research Visas?",
        answer:
          "Most research visa categories require a formal hosting agreement or supervisor sponsorship confirming the institution's commitment to your project. We help you liaise with the institution to obtain this correctly.",
      },
    ],
  },
  {
    slug: "language-course-visa",
    title: "Language Course Visa",
    category: "Study",
    heroImage: languageCourseVisaImg.src,
    heroSubtitle:
      "Short-term study visa support for language immersion programs, helping you build fluency and open doors to further study or work abroad.",
    overview:
      "A Language Course Visa allows applicants to enrol in an intensive language program abroad, typically ranging from a few weeks to under a year. It's a popular route for students preparing for further academic study, professionals building international communication skills, or those meeting a language prerequisite for future work or immigration pathways. GoAbroadly helps applicants select accredited language schools, prepare the shorter but still detailed documentation this category demands, and present a credible short-term study plan that satisfies consular officers of genuine, time-bound intent.",
    eligibility: [
      { title: "Admission Letter", description: "Enrolment confirmation from an accredited language school or institute" },
      { title: "Course Duration", description: "Course duration within the limits prescribed for this visa category" },
      { title: "Financial Proof", description: "Proof of funds to cover course fees and living costs for the enrolled period" },
      { title: "Genuine Intent", description: "Clear intent to return home or transition to a further study visa on completion" },
      { title: "Academic Background", description: "Basic academic background suitable for the chosen course level" },
      { title: "Immigration History", description: "No history of visa refusals that would affect credibility of short-term intent" },
    ],
    requirements: [
      "Language school enrolment letter with confirmed start and end dates",
      "Proof of course fee payment or deposit as required by the institute",
      "Evidence of accommodation for the duration of the course",
      "Bank statements or sponsor letter covering course and living expenses",
      "Cover letter explaining your reason for undertaking the language course",
      "Return travel intent or onward study/work plan where applicable",
    ],
    documents: [
      { title: "Passport & Visas", description: "Passport bio-data page and any prior visa copies" },
      { title: "Enrolment Confirmation", description: "Language school enrolment confirmation and fee receipt" },
      { title: "Financial Proof", description: "Bank statements or sponsorship affidavit for the course period" },
      { title: "Accommodation Details", description: "Proof of accommodation booking or homestay confirmation" },
      { title: "Academic Records", description: "Educational certificates relevant to the course level" },
      { title: "Passport Size Photos", description: "Passport-size photographs per embassy specifications" },
    ],
    process: [
      { step: 1, title: "School Selection", description: "Choose an accredited language institute matching your proficiency goals and budget." },
      { step: 2, title: "Enrolment & Fee Payment", description: "Secure your enrolment letter and process the required course fee payment." },
      { step: 3, title: "Document Compilation", description: "Prepare financial, accommodation, and intent documentation for the short-term visa." },
      { step: 4, title: "Visa Submission", description: "File the application with the language course enrolment as the core supporting document." },
      { step: 5, title: "Pre-Departure Briefing", description: "Guidance on arrival formalities, accommodation check-in, and course commencement." },
    ],
    faqs: [
      {
        question: "Can a Language Course Visa lead to a longer study visa later?",
        answer:
          "Yes, many students use a language course as a stepping stone before enrolling in a degree program, provided they later meet the separate academic and financial requirements for a full student visa.",
      },
      {
        question: "Is part-time work allowed on a Language Course Visa?",
        answer:
          "Work rights on this visa category are usually limited or not permitted at all, as it is intended for short-term study. We'll clarify the exact conditions for your destination country.",
      },
      {
        question: "How short can a Language Course Visa program be?",
        answer:
          "Programs can range from a few weeks to several months depending on the country and institute, though very short stays may fall under a visitor visa instead. We'll help determine the correct category based on your course length.",
      },
    ],
  },
  {
    slug: "exchange-program-visa",
    title: "Exchange Program Visa",
    category: "Study",
    heroImage: exchangeProgramVisaImg.src,
    heroSubtitle:
      "Dedicated visa support for semester and year-long exchange programs between your home university and an international partner institution.",
    overview:
      "An Exchange Program Visa is intended for students undertaking a semester or academic year abroad as part of a formal partnership between their home university and a host institution. This category relies heavily on documentation from both institutions confirming the exchange arrangement, credit transfer, and expected return to complete the degree at home. GoAbroadly assists exchange students in coordinating paperwork between both universities, ensuring the visa application clearly demonstrates the temporary, credit-linked nature of the stay and a firm intention to resume studies at the home institution afterward.",
    eligibility: [
      { title: "Home Nomination", description: "Nomination or confirmation letter from your home university's exchange office" },
      { title: "Host Acceptance", description: "Acceptance letter from the partner host institution abroad" },
      { title: "Academic Standing", description: "Good academic standing at your home university with credits in good order" },
      { title: "Financial Proof", description: "Proof of funds covering the exchange semester or year" },
      { title: "Return Intent", description: "Confirmed intent to return and complete your degree at the home institution" },
      { title: "Host Requirements", description: "Compliance with any minimum GPA or language requirements set by the host" },
    ],
    requirements: [
      "Exchange nomination letter and host university acceptance letter",
      "Learning agreement or credit transfer confirmation between both institutions",
      "Proof of enrolment status at the home university during the exchange period",
      "Bank statements or scholarship confirmation covering the exchange duration",
      "Accommodation arrangement at the host university or nearby housing",
      "Health insurance valid for the exchange period as required",
    ],
    documents: [
      { title: "Passport & Visas", description: "Passport bio-data page and previous visa copies" },
      { title: "Home Nomination", description: "Exchange nomination letter from the home university" },
      { title: "Host Acceptance", description: "Acceptance and learning agreement from the host institution" },
      { title: "Financial Proof", description: "Bank statements, scholarship letter, or sponsor affidavit" },
      { title: "Academic Status", description: "Proof of enrolment/good standing at the home university" },
      { title: "Passport Size Photos", description: "Passport-size photographs per host country specifications" },
    ],
    process: [
      { step: 1, title: "Exchange Nomination", description: "Confirm your nomination through the home university's international office." },
      { step: 2, title: "Host Acceptance & Learning Agreement", description: "Finalise the learning agreement outlining credits and courses at the host institution." },
      { step: 3, title: "Financial & Insurance Documentation", description: "Compile proof of funds and mandatory health insurance for the exchange period." },
      { step: 4, title: "Visa Filing", description: "Submit the exchange visa application with both institutions' confirmation letters." },
      { step: 5, title: "Pre-Departure Support", description: "Guidance on housing, orientation dates, and credit transfer logistics on return." },
    ],
    faqs: [
      {
        question: "Do exchange students need a separate visa from regular students?",
        answer:
          "Some countries have a distinct exchange visa sub-category with simplified requirements, while others process exchange students under the standard student visa. We'll confirm the correct route for your host country.",
      },
      {
        question: "What happens to my visa status if the exchange program is extended?",
        answer:
          "Extensions typically require updated documentation from both universities and a formal visa extension application before your current visa expires. We can guide you through this if it becomes necessary.",
      },
      {
        question: "Will my exchange semester credits be recognised at my home university?",
        answer:
          "This depends on the learning agreement signed before departure, which should specify how credits transfer. This is coordinated between the universities rather than the visa office, but we ensure your documentation aligns.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // WORK VISAS
  // ---------------------------------------------------------------------
  {
    slug: "skilled-worker-visa",
    title: "Skilled Worker Visa",
    category: "Work",
    heroImage: skilledWorkerVisaImg.src,
    heroSubtitle:
      "Employer-sponsored and points-based visa pathways for skilled professionals seeking long-term work opportunities abroad.",
    overview:
      "A Skilled Worker Visa enables qualified professionals to take up employment abroad, typically through employer sponsorship or a points-based immigration system that assesses factors like occupation, qualifications, work experience, and language ability. This category often serves as a pathway toward permanent residency in countries such as Canada, Australia, and the UK. GoAbroadly guides skilled professionals through occupation list matching, credential assessments, and employer sponsorship coordination, helping you present a competitive profile that meets both immigration point thresholds and employer compliance requirements.",
    eligibility: [
      { title: "Eligible Occupation", description: "Occupation listed on the relevant skilled occupation or shortage list" },
      { title: "Qualifications & Experience", description: "Recognised qualification and relevant work experience in the nominated field" },
      { title: "Skills Assessment", description: "Positive skills assessment from the designated assessing authority (where required)" },
      { title: "Points Requirement", description: "Minimum points score under the applicable points-based system, if relevant" },
      { title: "Language Proficiency", description: "English or local language proficiency meeting the prescribed threshold" },
      { title: "Job Offer / Sponsorship", description: "Valid job offer or employer sponsorship where the pathway requires it" },
    ],
    requirements: [
      "Skills assessment report from the recognised assessing body",
      "Employer sponsorship letter or Certificate of Sponsorship where applicable",
      "Proof of relevant work experience through reference letters and payslips",
      "Language test results (IELTS/PTE or equivalent) meeting minimum bands",
      "Educational credential assessment confirming equivalency to local standards",
      "Police clearance certificates from all countries of residence",
    ],
    documents: [
      { title: "Passport & History", description: "Passport bio-data page and employment history summary" },
      { title: "Skills Assessment", description: "Skills assessment outcome letter for the nominated occupation" },
      { title: "Sponsorship Details", description: "Employer sponsorship or Certificate of Sponsorship documentation" },
      { title: "Work Experience", description: "Reference letters, payslips, and relieving letters from past employers" },
      { title: "Language & Credentials", description: "Language test scorecard and educational credential assessment" },
      { title: "Clearance Certificates", description: "Police clearance certificates and medical examination reports" },
    ],
    process: [
      { step: 1, title: "Occupation & Points Assessment", description: "Match your profile against occupation lists and calculate your points-based eligibility." },
      { step: 2, title: "Skills Assessment", description: "Obtain a positive skills assessment from the relevant assessing authority for your occupation." },
      { step: 3, title: "Expression of Interest / Sponsorship", description: "Lodge an expression of interest or secure employer sponsorship as applicable." },
      { step: 4, title: "Visa Application", description: "File the visa application with skills, language, and character documentation." },
      { step: 5, title: "Decision & Relocation Support", description: "Track your application and receive guidance on relocation once approved." },
    ],
    faqs: [
      {
        question: "Do I need a job offer for a Skilled Worker Visa?",
        answer:
          "It depends on the country — some pathways require employer sponsorship, while others (like points-based independent visas) allow qualified applicants to apply without a confirmed job offer. We'll identify which route fits your profile.",
      },
      {
        question: "Can a Skilled Worker Visa lead to permanent residency?",
        answer:
          "In many countries, skilled worker visas are explicitly designed as a pathway to permanent residency after meeting residency, employment, or points thresholds over time.",
      },
      {
        question: "How long does the skills assessment process take?",
        answer:
          "Skills assessments typically take 4–12 weeks depending on the assessing authority and occupation, though this can vary. We help you initiate this early to avoid delays in your overall application.",
      },
    ],
  },
  {
    slug: "temporary-work-visa",
    title: "Temporary Work Visa",
    category: "Work",
    heroImage: temporaryVisaImg.src,
    heroSubtitle:
      "Fast, compliant visa support for seasonal, contract, and short-term overseas employment opportunities.",
    overview:
      "A Temporary Work Visa allows individuals to take up employment abroad for a defined, limited period — commonly used for seasonal work, fixed-term contracts, intra-company transfers, or project-based assignments. Unlike skilled worker pathways aimed at long-term settlement, this category prioritises a clear end date and confirmed employer relationship. GoAbroadly assists applicants in verifying employer legitimacy, compiling contract documentation, and ensuring the visa application clearly reflects the temporary, non-immigrant nature of the assignment to meet consular expectations.",
    eligibility: [
      { title: "Job Contract", description: "Confirmed job offer or contract with a defined start and end date" },
      { title: "Employer Eligibility", description: "Employer registered and authorised to hire foreign workers in the destination country" },
      { title: "Relevant Experience", description: "Relevant skills or experience matching the role being offered" },
      { title: "Return Intent", description: "Proof of intent to return home or move on at the end of the contract period" },
      { title: "Quota Compliance", description: "Compliance with any quota, seasonal window, or sector-specific conditions" },
      { title: "Immigration History", description: "No adverse immigration history affecting temporary visa eligibility" },
    ],
    requirements: [
      "Signed employment contract specifying role, duration, and remuneration",
      "Employer's work permit application or labour market approval where required",
      "Proof of relevant qualifications or experience for the offered role",
      "Accommodation arrangements for the work assignment period",
      "Medical fitness certificate where mandated by the job sector",
      "Return travel plan or onward assignment confirmation",
    ],
    documents: [
      { title: "Passport & History", description: "Passport bio-data page and prior employment/visa history" },
      { title: "Job Contract", description: "Signed employment contract or letter of offer" },
      { title: "Employer Approval", description: "Employer's sponsorship or labour approval documentation" },
      { title: "Qualifications", description: "Qualification certificates or trade licences relevant to the role" },
      { title: "Medical Reports", description: "Medical examination reports where required by the sector" },
      { title: "Passport Size Photos", description: "Passport-size photographs per destination country rules" },
    ],
    process: [
      { step: 1, title: "Employer Verification", description: "Confirm the employer's authorisation to sponsor temporary foreign workers." },
      { step: 2, title: "Contract Finalisation", description: "Secure a signed employment contract detailing role, duration, and terms." },
      { step: 3, title: "Work Permit Coordination", description: "Support the employer's labour approval or work permit filing where required." },
      { step: 4, title: "Visa Application", description: "Submit your temporary work visa application with contract and role documentation." },
      { step: 5, title: "Deployment Readiness", description: "Pre-departure briefing on accommodation, local compliance, and contract terms." },
    ],
    faqs: [
      {
        question: "Can a Temporary Work Visa be extended or converted?",
        answer:
          "Some countries allow extensions within set limits, and certain temporary categories can be converted to longer-term work visas if the role and employer support it. We'll advise on the specific rules for your destination.",
      },
      {
        question: "Can my family join me on a Temporary Work Visa?",
        answer:
          "Dependent eligibility varies widely by country and visa duration — shorter assignments often don't permit dependents, while longer contract visas may allow accompanying family members.",
      },
      {
        question: "What happens if my contract ends early?",
        answer:
          "Most temporary work visas are tied to the employment contract, so early termination typically requires you to leave within a specified grace period unless you secure another sponsored role.",
      },
    ],
  },
  {
    slug: "business-visa",
    title: "Business Visa",
    category: "Work",
    heroImage: businessVisaImg.src,
    heroSubtitle:
      "Streamlined visa support for business meetings, conferences, negotiations, and short-term corporate travel abroad.",
    overview:
      "A Business Visa is designed for professionals travelling abroad for meetings, conferences, contract negotiations, trade fairs, or short corporate assignments — without taking up local employment. It typically requires an invitation from the host company alongside proof of your existing employment and income back home. GoAbroadly assists frequent business travellers and corporate teams in preparing invitation letters, itineraries, and financial documentation efficiently, minimising delays for time-sensitive business commitments while ensuring full compliance with the destination's business visa conditions.",
    eligibility: [
      { title: "Business Invitation", description: "Invitation letter from the host company or event organiser abroad" },
      { title: "Home Employment", description: "Current employment with a company that supports the business trip purpose" },
      { title: "Financial Proof", description: "Sufficient funds to cover the duration of the business visit" },
      { title: "Business Itinerary", description: "Clear itinerary demonstrating the specific business purpose of travel" },
      { title: "No Local Employment", description: "No intent to take up local employment or remuneration abroad" },
      { title: "Home Ties", description: "Strong ties to home country supporting return after the visit" },
    ],
    requirements: [
      "Invitation letter from the host organisation detailing the business purpose",
      "Covering letter from your employer confirming the trip and your role",
      "Proof of business relationship, such as prior correspondence or contracts",
      "Bank statements or company financial documents covering trip expenses",
      "Travel and accommodation itinerary for the visit duration",
      "Return flight booking or onward travel confirmation",
    ],
    documents: [
      { title: "Passport & Visas", description: "Passport bio-data page and previous visa copies" },
      { title: "Letters & Invitation", description: "Business invitation letter and employer covering letter" },
      { title: "Company Documents", description: "Company registration or incorporation documents where applicable" },
      { title: "Financial Proof", description: "Bank statements covering the trip duration and expenses" },
      { title: "Accommodation Details", description: "Hotel booking or accommodation confirmation" },
      { title: "Passport Size Photos", description: "Passport-size photographs per embassy specifications" },
    ],
    process: [
      { step: 1, title: "Purpose & Invitation Confirmation", description: "Secure a valid invitation letter clearly stating the business purpose and duration." },
      { step: 2, title: "Employer Documentation", description: "Compile your employer's covering letter and proof of your role and income." },
      { step: 3, title: "Itinerary Planning", description: "Finalise travel dates, accommodation, and meeting schedule for the visa file." },
      { step: 4, title: "Application Filing", description: "Submit the business visa application with all supporting corporate documentation." },
      { step: 5, title: "Travel Readiness", description: "Final checklist and briefing ahead of departure for your business engagements." },
    ],
    faqs: [
      {
        question: "Can I get paid by a company abroad on a Business Visa?",
        answer:
          "No, a Business Visa does not permit local employment or remuneration from a foreign company — it is strictly for meetings, negotiations, and similar business activities while remaining paid by your home employer.",
      },
      {
        question: "How long can I stay abroad on a Business Visa?",
        answer:
          "Stay durations vary by country, typically ranging from a few days up to 90 days per visit, with some visas allowing multiple entries over a longer validity period.",
      },
      {
        question: "Is a Business Visa the same as a work visa?",
        answer:
          "No, a Business Visa covers short-term business activities without local employment, while a work visa is required if you intend to take up a job or be paid by an entity in the destination country.",
      },
    ],
  },
  {
    slug: "self-employment-visa",
    title: "Self Employment Visa",
    category: "Work",
    heroImage: selfEmploymentVisaImg.src,
    heroSubtitle:
      "Visa pathways for entrepreneurs, freelancers, and independent professionals looking to establish their own venture abroad.",
    overview:
      "A Self Employment Visa is designed for entrepreneurs, freelancers, and independent professionals who wish to establish or operate their own business abroad rather than work for a sponsoring employer. This category generally requires a viable business plan, proof of relevant experience, and evidence of sufficient capital to sustain the venture. GoAbroadly helps applicants build a credible business case, structure their financial documentation, and navigate country-specific self-employment or entrepreneur visa criteria, from freelancer permits to startup-founder residency routes.",
    eligibility: [
      { title: "Business Plan", description: "Viable business plan demonstrating market need and sustainability" },
      { title: "Professional Experience", description: "Relevant professional experience or qualifications in the proposed field" },
      { title: "Investment Capital", description: "Proof of sufficient capital to establish and sustain the business" },
      { title: "Threshold Compliance", description: "Compliance with any minimum investment or turnover thresholds where applicable" },
      { title: "Visa Compliance", description: "No conflicting local employment that would breach visa conditions" },
      { title: "Registration Intent", description: "Registration intent with local business or tax authorities on arrival" },
    ],
    requirements: [
      "Detailed business plan with market analysis and financial projections",
      "Proof of capital — bank statements, investment funds, or business loan approval",
      "Professional portfolio or client contracts evidencing freelance/business track record",
      "Educational or professional certifications relevant to the business activity",
      "Local business registration intent or pre-registration documentation",
      "Health insurance and accommodation arrangements for the visa period",
    ],
    documents: [
      { title: "Passport & History", description: "Passport bio-data page and prior visa/business history" },
      { title: "Business Plan", description: "Business plan with projected revenue and operational structure" },
      { title: "Financial Proof", description: "Bank statements or proof of investment capital" },
      { title: "Portfolio & Contracts", description: "Client contracts, portfolio, or freelance income history" },
      { title: "Certifications", description: "Professional certifications or trade licences relevant to the business" },
      { title: "Passport Size Photos", description: "Passport-size photographs per destination country rules" },
    ],
    process: [
      { step: 1, title: "Business Plan Development", description: "Build a market-ready business plan aligned with the destination country's visa criteria." },
      { step: 2, title: "Capital Verification", description: "Organise proof of investment funds or business capital meeting minimum thresholds." },
      { step: 3, title: "Credential Compilation", description: "Gather professional history, contracts, and qualifications supporting your venture." },
      { step: 4, title: "Visa Application", description: "File the self-employment visa with your business case and financial documentation." },
      { step: 5, title: "Business Setup Guidance", description: "Support with local registration steps once your visa is approved." },
    ],
    faqs: [
      {
        question: "How much capital do I need for a Self Employment Visa?",
        answer:
          "Minimum capital requirements vary significantly by country and business type, ranging from modest freelancer thresholds to substantial startup investment amounts. We calculate the exact figure during your assessment.",
      },
      {
        question: "Can I hire employees under a Self Employment Visa?",
        answer:
          "Many self-employment or entrepreneur visa categories allow you to hire staff once your business is registered, though specific conditions and timelines depend on the destination country's rules.",
      },
      {
        question: "Does my business plan need to be in the local language?",
        answer:
          "Requirements vary — some countries accept English business plans while others require translation into the local language for official submission. We'll confirm this for your specific destination.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // IMMIGRATION VISAS
  // ---------------------------------------------------------------------
  {
    slug: "permanent-residency",
    title: "Permanent Residency",
    category: "Immigration",
    heroImage: permanentResidencyVisaImg.src,
    heroSubtitle:
      "Long-term settlement guidance for individuals and families seeking permanent residency status abroad.",
    overview:
      "Permanent Residency grants the right to live, work, and study indefinitely in a foreign country, often serving as a precursor to citizenship. Pathways vary widely — from points-based skilled migration and employer nomination to long-term visa transitions after several years of temporary residence. GoAbroadly guides applicants through the full residency journey, from initial eligibility assessment and points calculation through to document compilation and application lodgement, helping families plan a stable, long-term future abroad with clarity on timelines and requirements.",
    eligibility: [
      { title: "Points / Category Eligibility", description: "Sufficient points score or qualifying category under the residency program" },
      { title: "Relevant Ties / Skills", description: "Relevant skills, qualifications, or family/investment ties to the destination country" },
      { title: "Residence History", description: "Minimum period of prior legal residence where transitioning from a temporary visa" },
      { title: "Health & Character", description: "Health and character clearances meeting immigration standards" },
      { title: "Financial Stability", description: "Financial stability sufficient to support yourself and any dependents" },
      { title: "Long-term Intent", description: "Genuine intention to reside long-term in the destination country" },
    ],
    requirements: [
      "Points test calculation or category-specific eligibility documentation",
      "Skills assessment, employer nomination, or investment proof as applicable",
      "Comprehensive medical examination reports for all applicants and dependents",
      "Police clearance certificates from every country of residence over the qualifying period",
      "Proof of settlement funds or ongoing income sufficiency",
      "Evidence of continuous legal residence where converting from a temporary visa",
    ],
    documents: [
      { title: "Passports", description: "Passport bio-data pages for all applicants and dependents" },
      { title: "Eligibility Proof", description: "Skills assessment, nomination, or investment confirmation documents" },
      { title: "Medical Reports", description: "Medical examination reports from approved panel physicians" },
      { title: "Police Clearances", description: "Police clearance certificates covering the required residency history" },
      { title: "Financial Proof", description: "Financial documentation demonstrating settlement fund sufficiency" },
      { title: "Civil Documents", description: "Marriage and birth certificates for dependents included in the application" },
    ],
    process: [
      { step: 1, title: "Pathway Assessment", description: "Determine the most suitable residency pathway based on your skills, family, or investment profile." },
      { step: 2, title: "Points & Eligibility Calculation", description: "Calculate your points score or confirm category-specific eligibility criteria." },
      { step: 3, title: "Documentation Compilation", description: "Gather medical, police, and financial clearances for all family members." },
      { step: 4, title: "Application Lodgement", description: "Submit the permanent residency application with the complete supporting file." },
      { step: 5, title: "Settlement Planning", description: "Post-approval guidance on relocation, housing, and integration support." },
    ],
    faqs: [
      {
        question: "How long does a Permanent Residency application take?",
        answer:
          "Processing timelines vary significantly by country and pathway, typically ranging from several months to over a year. We provide a realistic estimate based on the current queue for your specific category.",
      },
      {
        question: "Can I include my family in a Permanent Residency application?",
        answer:
          "Yes, most permanent residency pathways allow you to include your spouse and dependent children in the same application, subject to the destination country's dependent criteria.",
      },
      {
        question: "Does Permanent Residency lead to citizenship?",
        answer:
          "In most countries, permanent residents become eligible to apply for citizenship after meeting a minimum residence period and other requirements, such as language and civics tests.",
      },
    ],
  },
  {
    slug: "family-sponsorship",
    title: "Family Sponsorship",
    category: "Immigration",
    heroImage: familySponsorshipVisaImg.src,
    heroSubtitle:
      "Reunite with your loved ones abroad through spouse, parent, or dependent sponsorship visa pathways.",
    overview:
      "Family Sponsorship allows citizens or permanent residents of a country to sponsor eligible relatives — spouses, partners, parents, or dependent children — to join them abroad. This category requires proof of a genuine relationship, the sponsor's ability to financially support the applicant, and compliance with relationship-specific documentation standards. GoAbroadly assists sponsors and applicants in building a strong relationship evidence file, meeting income or undertaking requirements, and navigating the often detailed scrutiny applied to family visa categories.",
    eligibility: [
      { title: "Sponsor Eligibility", description: "Sponsor holds valid citizenship, permanent residency, or eligible status in the destination country" },
      { title: "Genuine Relationship", description: "Genuine and ongoing relationship with the applicant (spousal, parental, or dependent)" },
      { title: "Financial Requirements", description: "Sponsor meets minimum income or financial undertaking requirements" },
      { title: "Health & Character", description: "Applicant meets health and character clearance standards" },
      { title: "Relationship Evidence", description: "Relationship evidence spanning cohabitation, communication, and shared commitments" },
      { title: "Immigration History", description: "No prior sponsorship breaches or unresolved immigration violations" },
    ],
    requirements: [
      "Proof of sponsor's status — citizenship or permanent residency documentation",
      "Relationship evidence such as marriage certificate, joint finances, or communication history",
      "Sponsor's income proof or statutory declaration of financial support",
      "Medical examination reports for the applicant and accompanying dependents",
      "Police clearance certificates for the applicant from all countries of residence",
      "Statutory declarations or affidavits supporting the genuineness of the relationship",
    ],
    documents: [
      { title: "Passports", description: "Passport bio-data pages for sponsor and applicant" },
      { title: "Civil Documents", description: "Marriage certificate, birth certificates, or relationship proof documents" },
      { title: "Sponsor Finances", description: "Sponsor's proof of income, employment, or financial undertaking" },
      { title: "Relationship Proof", description: "Joint bank statements, photographs, and communication records" },
      { title: "Clearance Certificates", description: "Medical and police clearance certificates for the applicant" },
      { title: "Passport Size Photos", description: "Passport-size photographs per destination country rules" },
    ],
    process: [
      { step: 1, title: "Sponsor Eligibility Check", description: "Confirm the sponsor's status and financial capacity to support the application." },
      { step: 2, title: "Relationship Evidence Compilation", description: "Build a comprehensive file demonstrating the genuineness of the relationship." },
      { step: 3, title: "Health & Character Clearances", description: "Complete medical examinations and police clearances for the applicant." },
      { step: 4, title: "Application Submission", description: "Lodge the sponsorship application with sponsor and applicant documentation." },
      { step: 5, title: "Interview & Decision", description: "Prepare for any relationship verification interview and track the final decision." },
    ],
    faqs: [
      {
        question: "What counts as sufficient relationship evidence for spousal sponsorship?",
        answer:
          "Immigration authorities typically look for a combination of joint finances, cohabitation history, communication records, photographs together, and statements from family or friends confirming the relationship's genuineness.",
      },
      {
        question: "Is there a minimum income requirement for sponsors?",
        answer:
          "Many countries set a minimum income or financial undertaking threshold for sponsors to demonstrate they can support the applicant without relying on public funds. We'll confirm the exact figure for your destination.",
      },
      {
        question: "Can parents be sponsored for permanent residency?",
        answer:
          "Several countries offer dedicated parent sponsorship or long-term parent visa streams, though these often have caps, waiting periods, or additional financial bonds compared to spousal sponsorship.",
      },
    ],
  },
  {
    slug: "investor-visa",
    title: "Investor Visa",
    category: "Immigration",
    heroImage: investorVisaImg.src,
    heroSubtitle:
      "Residency and citizenship-linked visa pathways for investors and high-net-worth individuals contributing capital abroad.",
    overview:
      "An Investor Visa grants residency — and in some programs, an eventual path to citizenship — in exchange for a qualifying investment in the destination country's economy, such as a business venture, government bonds, real estate, or a designated investment fund. This category demands rigorous source-of-funds documentation and compliance with strict due diligence checks. GoAbroadly works with investors to structure compliant investment documentation, coordinate with legal and financial partners, and manage the due diligence process that underpins every investor migration program.",
    eligibility: [
      { title: "Investment Amount", description: "Minimum investment amount as prescribed by the specific investor program" },
      { title: "Source of Funds", description: "Legitimate, verifiable source of investment funds" },
      { title: "Due Diligence", description: "Clean financial and criminal record passing enhanced due diligence checks" },
      { title: "Approved Category", description: "Investment made in an approved category — business, real estate, bonds, or fund" },
      { title: "Investment Holding", description: "Ability to maintain the investment for the required minimum holding period" },
      { title: "Additional Conditions", description: "Compliance with any job-creation or business activity conditions where applicable" },
    ],
    requirements: [
      "Proof of investment funds and their legitimate source (business income, sale of assets, etc.)",
      "Investment agreement or transaction documentation for the qualifying asset",
      "Enhanced due diligence documentation, including financial and legal history",
      "Business plan where the investment involves establishing or acquiring a company",
      "Police clearance certificates from all countries of residence",
      "Comprehensive health insurance covering the investor and dependents",
    ],
    documents: [
      { title: "Passports", description: "Passport bio-data pages for the investor and accompanying dependents" },
      { title: "Source of Funds", description: "Source of funds documentation — tax returns, business records, or asset sale proof" },
      { title: "Investment Details", description: "Investment transaction agreement or fund subscription documents" },
      { title: "Financial Proof", description: "Bank reference letters and audited financial statements where applicable" },
      { title: "Clearance Certificates", description: "Police clearance certificates and medical examination reports" },
      { title: "Business Plan", description: "Business plan or fund prospectus supporting the investment category" },
    ],
    process: [
      { step: 1, title: "Program Selection", description: "Identify the investor visa program that matches your investment capacity and residency goals." },
      { step: 2, title: "Source of Funds Verification", description: "Compile and legally verify the origin of your investment capital." },
      { step: 3, title: "Investment Structuring", description: "Finalise the qualifying investment — business, real estate, bonds, or fund — with legal partners." },
      { step: 4, title: "Due Diligence & Application", description: "Submit the investor visa application through the enhanced due diligence process." },
      { step: 5, title: "Approval & Compliance Monitoring", description: "Ongoing guidance to maintain investment compliance through the required holding period." },
    ],
    faqs: [
      {
        question: "What is the minimum investment for an Investor Visa?",
        answer:
          "Minimum thresholds vary widely by country and investment category, ranging from real estate purchases to government fund contributions. We provide exact figures for each program during your assessment.",
      },
      {
        question: "How long does due diligence take for Investor Visas?",
        answer:
          "Enhanced due diligence checks are more thorough than standard visa processing and can take several months, depending on the complexity of your source-of-funds documentation and the program chosen.",
      },
      {
        question: "Does an Investor Visa guarantee citizenship?",
        answer:
          "Investor visas typically grant residency first; citizenship, where offered, usually requires maintaining the investment and residency status for a minimum period and meeting additional naturalisation criteria.",
      },
    ],
  },
  {
    slug: "visitor-visa",
    title: "Visitor Visa",
    category: "Immigration",
    heroImage: visitorVisaImg.src,
    heroSubtitle:
      "Hassle-free visa support for tourism, family visits, and short-term leisure travel abroad.",
    overview:
      "A Visitor Visa permits short-term travel abroad for tourism, sightseeing, or visiting friends and family, without the right to work or study locally. It is one of the most frequently applied for visa categories and requires clear evidence of travel purpose, financial capacity, and strong ties to your home country to support your return. GoAbroadly helps applicants prepare a well-organised visitor visa file, including itinerary planning, invitation letters where relevant, and financial documentation, to minimise the risk of delays or refusals for time-sensitive travel plans.",
    eligibility: [
      { title: "Purpose of Visit", description: "Clear purpose of visit — tourism, family visit, or short leisure travel" },
      { title: "Financial Proof", description: "Sufficient funds to cover the entire duration of the trip" },
      { title: "Home Ties", description: "Strong ties to home country such as employment, property, or family" },
      { title: "Travel Insurance", description: "Valid travel and health insurance where required by the destination" },
      { title: "Immigration History", description: "No history of visa refusals casting doubt on genuine visitor intent" },
      { title: "Return Travel", description: "Confirmed return travel plans within the permitted visa duration" },
    ],
    requirements: [
      "Detailed travel itinerary covering the full duration of the visit",
      "Proof of accommodation — hotel bookings or invitation letter from host",
      "Bank statements demonstrating sufficient funds for the trip",
      "Proof of employment or business ties confirming intent to return",
      "Travel insurance covering medical emergencies during the visit",
      "Invitation letter from family or friends where applicable",
    ],
    documents: [
      { title: "Passport & Visas", description: "Passport bio-data page and copies of previous visas" },
      { title: "Travel Itinerary", description: "Confirmed return flight tickets and travel itinerary" },
      { title: "Accommodation", description: "Hotel booking confirmation or host invitation letter" },
      { title: "Financial Proof", description: "Bank statements covering the trip duration" },
      { title: "Home Ties Proof", description: "Employment letter or business ownership proof" },
      { title: "Passport Size Photos", description: "Passport-size photographs per embassy specifications" },
    ],
    process: [
      { step: 1, title: "Travel Planning", description: "Finalise your travel dates, itinerary, and accommodation arrangements." },
      { step: 2, title: "Financial Documentation", description: "Compile bank statements and proof of funds sufficient for the trip." },
      { step: 3, title: "Ties & Intent Documentation", description: "Gather employment or business proof supporting your intent to return home." },
      { step: 4, title: "Visa Application", description: "Submit the visitor visa application with the complete travel and financial file." },
      { step: 5, title: "Travel Readiness", description: "Final pre-departure checklist covering insurance, itinerary, and documentation copies." },
    ],
    faqs: [
      {
        question: "How long can I stay on a Visitor Visa?",
        answer:
          "Permitted stay durations vary by country, typically ranging from 30 to 180 days per visit, with some visas allowing single entry and others multiple entries over a longer validity period.",
      },
      {
        question: "Can I extend my Visitor Visa while abroad?",
        answer:
          "Some countries allow visitor visa extensions under specific circumstances, while others require you to depart and reapply. We'll confirm the extension rules for your specific destination before you travel.",
      },
      {
        question: "Can I convert a Visitor Visa to a work or study visa?",
        answer:
          "In most cases, visitor visas cannot be converted locally and applicants must return home to apply for a work or study visa through the standard process, though a few countries permit limited exceptions.",
      },
    ],
  },
];

export function getVisaBySlug(slug: string): VisaPageData | undefined {
  return visaTypesData.find((v) => v.slug === slug);
}

export function getAllVisaSlugs(): string[] {
  return visaTypesData.map((v) => v.slug);
}