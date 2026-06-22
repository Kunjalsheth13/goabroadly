import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Invalid phone number").max(20),
  interestedCountry: z.string().min(2, "Please select a country"),
  serviceType: z.string().min(2, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export const consultationSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  notes: z.string().max(1000).optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const blogSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(3).max(200).regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens"),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(20),
  featuredImage: z.string().url().optional().or(z.literal("")),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
  published: z.boolean().default(false),
  categoryId: z.string().min(1),
});

export const inquiryStatusSchema = z.object({
  status: z.enum(["NEW", "CONTACTED", "CLOSED"]),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ConsultationFormData = z.infer<typeof consultationSchema>;
export type BlogFormData = z.infer<typeof blogSchema>;
