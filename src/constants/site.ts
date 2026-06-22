export const siteConfig = {
  name: "GoAbroadly",
  tagline: "Your Gateway to Global Education",
  description:
    "Expert study abroad consultancy helping students achieve their dreams of international education and immigration.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "hello@goabroadly.com",
  phone: "+1 (555) 123-4567",
} as const;
