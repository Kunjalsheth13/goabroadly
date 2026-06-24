import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VisaPageTemplate from "@/components/templates/VisaPageTemplate";
import {
  getVisaBySlug,
  getAllVisaSlugs,
} from "@/constants/visa-types-data";
import { siteConfig } from "@/constants/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllVisaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getVisaBySlug(slug);
  if (!data) return { title: "Visa Not Found" };
  return {
    title: data.title,
    description: data.heroSubtitle,
    openGraph: {
      title: `${data.title} | ${siteConfig.name}`,
      description: data.heroSubtitle,
      images: [{ url: data.heroImage }],
    },
  };
}

export default async function VisaTypePage({ params }: Props) {
  const { slug } = await params;
  const data = getVisaBySlug(slug);
  if (!data) notFound();
  return <VisaPageTemplate data={data} />;
}
