import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/countries",
    "/study-abroad",
    "/work-immigration",
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

  return [...staticPages, ...blogPages];
}
