export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/countries", label: "Countries" },
  { href: "/study-abroad", label: "Study Abroad" },
  { href: "/work-immigration", label: "Work & Immigration" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/visa-types", label: "Visa Types" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/free-assessment", label: "Free Assessment" },
    { href: "/blog", label: "Blog" },
    { href: "/countries", label: "Destinations" },
    { href: "/study-abroad", label: "Study Abroad" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
} as const;

export const serviceTypes = [
  "Study Abroad Counseling",
  "University Application",
  "Visa Assistance",
  "Scholarship Guidance",
  "Test Preparation",
  "Work & Immigration",
] as const;

export const countries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Germany",
  "Ireland",
  "New Zealand",
  "Netherlands",
] as const;

export const partnerUniversities = [
  "University of Oxford",
  "Harvard University",
  "University of Toronto",
  "University of Melbourne",
  "TU Munich",
  "Columbia University",
  "University of Sydney",
  "Imperial College London",
] as const;

export const statistics = [
  { value: 5000, suffix: "+", label: "Students Placed" },
  { value: 200, suffix: "+", label: "Partner Universities" },
  { value: 98, suffix: "%", label: "Visa Success Rate" },
  { value: 15, suffix: "+", label: "Years Experience" },
] as const;

export const services = [
  {
    title: "Study Abroad Counseling",
    description:
      "Personalized guidance to find the perfect university and program aligned with your ambitions.",
    icon: "GraduationCap",
  },
  {
    title: "Visa Assistance",
    description:
      "End-to-end visa support with document preparation, SOP review, and interview coaching.",
    icon: "Plane",
  },
  {
    title: "Scholarship Guidance",
    description:
      "Identify and apply for scholarships to significantly reduce your education costs.",
    icon: "Award",
  },
  {
    title: "Test Preparation",
    description:
      "Expert coaching for IELTS, TOEFL, GRE, and other entrance exams with proven results.",
    icon: "BookOpen",
  },
  {
    title: "University Applications",
    description:
      "Professional SOP, LOR, and application review tailored for top-tier universities.",
    icon: "Building2",
  },
  {
    title: "Work & Immigration",
    description:
      "Post-study work permits and permanent residency pathway guidance for global careers.",
    icon: "Globe",
  },
] as const;

export const destinations = [
  {
    country: "United Kingdom",
    code: "UK",
    universities: "150+",
    description: "World-class education with centuries of academic excellence.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format&fit=crop",
  },
  {
    country: "Canada",
    code: "CA",
    universities: "120+",
    description: "Affordable tuition and excellent post-study work opportunities.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop",
  },
  {
    country: "Australia",
    code: "AU",
    universities: "100+",
    description: "High quality of life with diverse, industry-connected programs.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80&auto=format&fit=crop",
  },
  {
    country: "United States",
    code: "US",
    universities: "200+",
    description: "Leading research universities and unmatched career networks.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80&auto=format&fit=crop",
  },
  {
    country: "Germany",
    code: "DE",
    universities: "80+",
    description: "Low or no tuition fees at world-renowned public universities.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80&auto=format&fit=crophttps://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&q=80&auto=format&fit=crop",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Expert Guidance",
    description:
      "Our experienced counselors provide personalized advice tailored to your goals and academic background.",
    icon: "Users",
  },
  {
    title: "End-to-End Support",
    description:
      "From university shortlisting to visa approval, we are with you at every step of your study abroad journey.",
    icon: "FileCheck",
  },
  {
    title: "High Visa Success Rate",
    description:
      "Our proven process and strong documentation support ensure a higher chance of visa success.",
    icon: "ShieldCheck",
  },
  {
    title: "Wide Global Network",
    description:
      "We are associated with top universities and institutions across the globe to bring you the best opportunities.",
    icon: "Globe",
  },
  {
    title: "Transparent & Honest",
    description:
      "We believe in complete transparency with no hidden charges and honest recommendations.",
    icon: "HandCoins",
  },
  {
    title: "Post-Visa Support",
    description:
      "Our support doesn't end with your visa. We assist you even after you reach your destination.",
    icon: "Headphones",
  },
] as const;

export const journeySteps = [
  {
    step: 1,
    title: "Free Consultation",
    description: "Discuss your goals with a certified counselor.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Profile Evaluation",
    description: "Comprehensive review of your academic and career profile.",
    icon: "ClipboardCheck",
  },
  {
    step: 3,
    title: "University Selection",
    description: "Shortlist best-fit programs across top destinations.",
    icon: "Building2",
  },
  {
    step: 4,
    title: "Offer Letter",
    description: "Submit polished applications and secure your admission.",
    icon: "FileCheck",
  },
  {
    step: 5,
    title: "Visa Filing",
    description: "Complete documentation and submit your visa application.",
    icon: "FileText",
  },
  {
    step: 6,
    title: "CAS Confirmation",
    description: "Receive Confirmation of Acceptance for Studies.",
    icon: "BadgeCheck",
  },
  {
    step: 7,
    title: "Visa Approval",
    description: "Celebrate your approved student visa.",
    icon: "Stamp",
  },
  {
    step: 8,
    title: "Flight Booking",
    description: "Book your flight with our exclusive student benefits.",
    icon: "Plane",
  },
  {
    step: 9,
    title: "Post Arrival Support",
    description: "Accommodation, orientation, and settling-in assistance.",
    icon: "MapPin",
  },
] as const;

/** @deprecated Use journeySteps instead */
export const processSteps = journeySteps.slice(0, 5).map((s) => ({
  step: s.step,
  title: s.title,
  description: s.description,
}));

export const testimonials = [
  {
    name: "Priya Sharma",
    country: "United Kingdom",
    program: "MSc Data Science, University of Edinburgh",
    quote:
      "GoAbroadly made my dream of studying at a top UK university a reality. Their visa support was exceptional from start to finish.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Ahmed Hassan",
    country: "Canada",
    program: "MBA, University of Toronto",
    quote:
      "From university selection to landing in Toronto, the team was with me every step of the way. Truly world-class service.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Emily Chen",
    country: "Australia",
    program: "Engineering, University of Melbourne",
    quote:
      "Professional, transparent, and genuinely caring. I highly recommend GoAbroadly to every aspiring international student.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop",
  },
] as const;

export const faqItems = [
  {
    question: "How long does the study abroad process take?",
    answer:
      "Typically 6 to 12 months from initial consultation to departure. Timelines vary by country, intake season, and visa processing times. Our counselors create a personalized timeline for your situation.",
  },
  {
    question: "What are the minimum requirements to study abroad?",
    answer:
      "Requirements vary by country and program. Generally, you'll need a strong academic record, English proficiency (IELTS 6.0–7.0 or equivalent), and sufficient financial proof. We assess your profile during a free consultation.",
  },
  {
    question: "Do you help with scholarship applications?",
    answer:
      "Yes. We identify merit-based and need-based scholarships, assist with application essays, and guide you through the entire scholarship process to maximize your funding opportunities.",
  },
  {
    question: "What is included in the free flight ticket offer?",
    answer:
      "Every student who receives visa approval through GoAbroadly is eligible for a complimentary economy flight ticket to their study destination, subject to our terms and partner airline availability.",
  },
  {
    question: "Which countries do you specialize in?",
    answer:
      "We specialize in the United Kingdom, Canada, Australia, United States, and Germany, with additional support for Ireland, New Zealand, and the Netherlands.",
  },
  {
    question: "Can you help if my visa was previously rejected?",
    answer:
      "Absolutely. We analyze rejection reasons, strengthen your documentation, and develop a strategic reapplication plan. Our 98% visa success rate includes many students who were previously declined.",
  },
] as const;

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
] as const;

export const heroStats = [
  { value: 5000, suffix: "+", label: "Students Placed" },
  { value: 98, suffix: "%", label: "Visa Success" },
  { value: 200, suffix: "+", label: "Partner Universities" },
] as const;

export const heroTrustBadges = [
  "ICEF Certified",
  "British Council Partner",
  "PIER Qualified",
] as const;

export const heroVisaCards = [
  { label: "Student Visa", country: "United Kingdom", status: "Approved" },
  { label: "Study Permit", country: "Canada", status: "Approved" },
  { label: "Subclass 500", country: "Australia", status: "Approved" },
] as const;

export const heroOfferCards = [
  {
    university: "University of Oxford",
    program: "MSc Computer Science",
    status: "Offer Received",
  },
  {
    university: "University of Toronto",
    program: "MBA Program",
    status: "Conditional Offer",
  },
] as const;

export const flightDestinations = [
  { code: "LHR", city: "London" },
  { code: "YYZ", city: "Toronto" },
  { code: "SYD", city: "Sydney" },
  { code: "JFK", city: "New York" },
  { code: "MUC", city: "Munich" },
] as const;
