import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import prisma from "@/lib/prisma";
import { getAllCountrySlugs } from "@/constants/countries-data";
import { getAllVisaSlugs } from "@/constants/visa-types-data";
import { getAllServiceSlugs } from "@/constants/services-data";
import { getAllStudyAbroadSlugs } from "@/constants/study-abroad-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/countries",
    "/visa-types",
    "/study-abroad",
    "/blog",
    "/contact",
    "/free-assessment",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamicPages: MetadataRoute.Sitemap = [
    ...getAllCountrySlugs().map((slug) => ({
      url: `${siteConfig.url}/countries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllVisaSlugs().map((slug) => ({
      url: `${siteConfig.url}/visa-types/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllServiceSlugs().map((slug) => ({
      url: `${siteConfig.url}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllStudyAbroadSlugs().map((slug) => ({
      url: `${siteConfig.url}/study-abroad/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });
    blogPages = posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    /* database not connected */
  }

  return [...staticPages, ...dynamicPages, ...blogPages];
}
