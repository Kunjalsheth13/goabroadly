import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/constants/services-data";
import { siteConfig } from "@/constants/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceBySlug(slug);
  if (!data) return { title: "Service Not Found" };
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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getServiceBySlug(slug);
  if (!data) notFound();
  return <ServicePageTemplate data={data} />;
}
