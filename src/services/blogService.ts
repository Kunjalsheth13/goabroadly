import prisma from "@/lib/prisma";
import { sanitizeInput } from "@/lib/sanitize";
import type { BlogFormData } from "@/lib/validations";
import slugify from "slugify";

export async function getPublishedPosts(page = 1, limit = 10, search = "") {
  const skip = (page - 1) * limit;
  const where = {
    published: true,
    ...(search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" as const } },
            { excerpt: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [data, total] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      include: {
        category: true,
        author: { select: { id: true, email: true } },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.blogPost.count({ where }),
  ]);

  return {
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getPostBySlug(slug: string) {
  return prisma.blogPost.findFirst({
    where: { slug, published: true },
    include: {
      category: true,
      author: { select: { id: true, email: true } },
    },
  });
}

export async function getAllPostsAdmin(
  page = 1,
  limit = 10,
  search = "",
  published?: boolean
) {
  const skip = (page - 1) * limit;
  const where = {
    ...(published !== undefined ? { published } : {}),
    ...(search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" as const } },
            { slug: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [data, total] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      include: {
        category: true,
        author: { select: { id: true, email: true } },
      },
      orderBy: { updatedAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.blogPost.count({ where }),
  ]);

  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function createBlogPost(data: BlogFormData, authorId: string) {
  return prisma.blogPost.create({
    data: {
      title: data.title,
      slug: data.slug || slugify(data.title, { lower: true, strict: true }),
      excerpt: data.excerpt,
      content: sanitizeInput(data.content),
      featuredImage: data.featuredImage || null,
      seoTitle: data.seoTitle || null,
      seoDescription: data.seoDescription || null,
      published: data.published,
      categoryId: data.categoryId,
      authorId,
    },
  });
}

export async function updateBlogPost(
  id: string,
  data: Partial<BlogFormData>
) {
  return prisma.blogPost.update({
    where: { id },
    data: {
      ...(data.title && { title: data.title }),
      ...(data.slug && { slug: data.slug }),
      ...(data.excerpt && { excerpt: data.excerpt }),
      ...(data.content && { content: sanitizeInput(data.content) }),
      ...(data.featuredImage !== undefined && {
        featuredImage: data.featuredImage || null,
      }),
      ...(data.seoTitle !== undefined && { seoTitle: data.seoTitle || null }),
      ...(data.seoDescription !== undefined && {
        seoDescription: data.seoDescription || null,
      }),
      ...(data.published !== undefined && { published: data.published }),
      ...(data.categoryId && { categoryId: data.categoryId }),
    },
  });
}

export async function deleteBlogPost(id: string) {
  return prisma.blogPost.delete({ where: { id } });
}

export async function getCategories() {
  return prisma.blogCategory.findMany({ orderBy: { name: "asc" } });
}

export async function getRecentPosts(limit = 3) {
  return prisma.blogPost.findMany({
    where: { published: true },
    include: { category: true },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}
