import type { InquiryStatus } from "@prisma/client";

export type ApiError = {
  error: string;
  details?: Record<string, string[]>;
};

export type PaginatedResult<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type DashboardStats = {
  totalInquiries: number;
  totalBookings: number;
  totalBlogs: number;
  recentInquiries: number;
};

export type BlogPostWithRelations = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  category: { id: string; name: string; slug: string };
  author: { id: string; email: string };
};

export type InquiryUpdatePayload = {
  status: InquiryStatus;
};

export type SessionAdmin = {
  id: string;
  email: string;
};
