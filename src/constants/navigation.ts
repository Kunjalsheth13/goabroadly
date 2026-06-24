import type { LucideIcon } from "lucide-react";
import {
  Globe,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Languages,
  RefreshCw,
  Briefcase,
  Clock,
  Building2,
  UserCheck,
  Home,
  Users,
  TrendingUp,
  Plane,
  FileText,
  PenLine,
  Banknote,
  Award,
  ClipboardList,
  Mic,
  FolderCheck,
  ShieldCheck,
  MapPin,
  Luggage,
  Headphones,
  Map,
  Flag,
} from "lucide-react";

export type NavMenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export type NavMenuColumn = {
  title: string;
  items: NavMenuItem[];
};

export type NavMenuConfig = {
  label: string;
  href: string;
  columns: NavMenuColumn[];
};

export type SimpleNavLink = {
  label: string;
  href: string;
};

export const languages = [
  { code: "EN", label: "English" },
  { code: "HI", label: "Hindi" },
  { code: "GU", label: "Gujarati" },
] as const;

export const countriesMenu: NavMenuConfig = {
  label: "Countries",
  href: "/countries",
  columns: [
    {
      title: "Europe",
      items: [
        { label: "UK", href: "/countries/uk", icon: Flag },
        { label: "Germany", href: "/countries/germany", icon: Flag },
        { label: "France", href: "/countries/france", icon: Flag },
        { label: "Ireland", href: "/countries/ireland", icon: Flag },
        { label: "Netherlands", href: "/countries/netherlands", icon: Flag },
        { label: "Sweden", href: "/countries/sweden", icon: Flag },
      ],
    },
    {
      title: "North America",
      items: [
        { label: "Canada", href: "/countries/canada", icon: Flag },
        { label: "USA", href: "/countries/usa", icon: Flag },
      ],
    },
    {
      title: "Oceania",
      items: [
        { label: "Australia", href: "/countries/australia", icon: Flag },
        { label: "New Zealand", href: "/countries/new-zealand", icon: Flag },
      ],
    },
    {
      title: "Asia",
      items: [
        { label: "Singapore", href: "/countries/singapore", icon: Flag },
        { label: "Dubai", href: "/countries/dubai", icon: Flag },
      ],
    },
  ],
};

export const visaTypesMenu: NavMenuConfig = {
  label: "Visa Types",
  href: "/visa-types",
  columns: [
    {
      title: "Study",
      items: [
        { label: "Student Visa", href: "/visa-types/student-visa", icon: GraduationCap },
        { label: "Research Visa", href: "/visa-types/research-visa", icon: FlaskConical },
        { label: "Language Course Visa", href: "/visa-types/language-course-visa", icon: Languages },
        { label: "Exchange Program Visa", href: "/visa-types/exchange-program-visa", icon: RefreshCw },
      ],
    },
    {
      title: "Work",
      items: [
        { label: "Skilled Worker Visa", href: "/visa-types/skilled-worker-visa", icon: Briefcase },
        { label: "Temporary Work Visa", href: "/visa-types/temporary-work-visa", icon: Clock },
        { label: "Business Visa", href: "/visa-types/business-visa", icon: Building2 },
        { label: "Self Employment Visa", href: "/visa-types/self-employment-visa", icon: UserCheck },
      ],
    },
    {
      title: "Immigration",
      items: [
        { label: "Permanent Residency", href: "/visa-types/permanent-residency", icon: Home },
        { label: "Family Sponsorship", href: "/visa-types/family-sponsorship", icon: Users },
        { label: "Investor Visa", href: "/visa-types/investor-visa", icon: TrendingUp },
        { label: "Visitor Visa", href: "/visa-types/visitor-visa", icon: Plane },
      ],
    },
  ],
};

export const servicesMenu: NavMenuConfig = {
  label: "Services",
  href: "/services",
  columns: [
    {
      title: "Admissions",
      items: [
        { label: "Visa Consultation", href: "/services/visa-consultation", icon: Globe },
        { label: "University Admission", href: "/services/university-admission", icon: GraduationCap },
        { label: "SOP Writing", href: "/services/sop-writing", icon: PenLine },
        { label: "Application Assistance", href: "/services/application-assistance", icon: ClipboardList },
      ],
    },
    {
      title: "Financial",
      items: [
        { label: "Education Loan Assistance", href: "/services/education-loan-assistance", icon: Banknote },
        { label: "Scholarship Guidance", href: "/services/scholarship-guidance", icon: Award },
      ],
    },
    {
      title: "Visa & Documents",
      items: [
        { label: "Interview Preparation", href: "/services/interview-preparation", icon: Mic },
        { label: "Visa Filing", href: "/services/visa-filing", icon: FileText },
        { label: "Document Verification", href: "/services/document-verification", icon: ShieldCheck },
      ],
    },
    {
      title: "Travel & Support",
      items: [
        { label: "Accommodation Support", href: "/services/accommodation-support", icon: MapPin },
        { label: "Travel Assistance", href: "/services/travel-assistance", icon: Luggage },
        { label: "Post Landing Services", href: "/services/post-landing-services", icon: Headphones },
      ],
    },
  ],
};

export const studyAbroadMenu: NavMenuConfig = {
  label: "Study Abroad",
  href: "/study-abroad",
  columns: [
    {
      title: "Popular",
      items: [
        { label: "Study in UK", href: "/study-abroad/uk", icon: BookOpen },
        { label: "Study in Canada", href: "/study-abroad/canada", icon: BookOpen },
        { label: "Study in Australia", href: "/study-abroad/australia", icon: BookOpen },
        { label: "Study in USA", href: "/study-abroad/usa", icon: BookOpen },
      ],
    },
    {
      title: "Europe",
      items: [
        { label: "Study in Germany", href: "/study-abroad/germany", icon: BookOpen },
        { label: "Study in Ireland", href: "/study-abroad/ireland", icon: BookOpen },
        { label: "Study in France", href: "/study-abroad/france", icon: BookOpen },
        { label: "Study in Netherlands", href: "/study-abroad/netherlands", icon: BookOpen },
      ],
    },
    {
      title: "Asia & Pacific",
      items: [
        { label: "Study in New Zealand", href: "/study-abroad/new-zealand", icon: BookOpen },
        { label: "Study in Singapore", href: "/study-abroad/singapore", icon: BookOpen },
      ],
    },
  ],
};

export const megaMenus = [countriesMenu, visaTypesMenu, servicesMenu, studyAbroadMenu] as const;

export const simpleNavLinks: SimpleNavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
