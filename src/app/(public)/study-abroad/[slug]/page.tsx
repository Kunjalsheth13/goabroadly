import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StudyAbroadPageTemplate from "@/components/templates/StudyAbroadPageTemplate";
import {
  getStudyAbroadBySlug,
  getAllStudyAbroadSlugs,
} from "@/constants/study-abroad-data";
import { siteConfig } from "@/constants/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllStudyAbroadSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getStudyAbroadBySlug(slug);
  if (!data) return { title: "Not Found" };
  return {
    title: `Study in ${data.country}`,
    description: data.heroSubtitle,
    openGraph: {
      title: `Study in ${data.country} | ${siteConfig.name}`,
      description: data.heroSubtitle,
      images: [{ url: data.heroImage }],
    },
  };
}

export default async function StudyAbroadDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getStudyAbroadBySlug(slug);
  if (!data) notFound();
  return <StudyAbroadPageTemplate data={data} />;
}
