import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CountryPageTemplate from "@/components/templates/CountryPageTemplate";
import {
  getCountryBySlug,
  getAllCountrySlugs,
  countriesData,
} from "@/constants/countries-data";
import { siteConfig } from "@/constants/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getCountryBySlug(slug);
  if (!data) return { title: "Country Not Found" };
  return {
    title: `Study in ${data.name}`,
    description: data.heroSubtitle,
    openGraph: {
      title: `Study in ${data.name} | ${siteConfig.name}`,
      description: data.heroSubtitle,
      images: [{ url: data.heroImage }],
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const data = getCountryBySlug(slug);
  if (!data) notFound();
  return <CountryPageTemplate data={data} />;
}
