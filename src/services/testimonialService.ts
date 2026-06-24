import { prisma } from "@/lib/prisma";

export type TestimonialInput = {
  name: string;
  country: string;
  university: string;
  testimonial: string;
  image?: string | null;
  published?: boolean;
  sortOrder?: number;
};

export async function getPublishedTestimonials() {
  try {
    return await prisma.testimonial.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
  } catch {
    return [];
  }
}

export async function getAllTestimonialsAdmin() {
  return prisma.testimonial.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

export async function getTestimonialById(id: string) {
  return prisma.testimonial.findUnique({ where: { id } });
}

export async function createTestimonial(data: TestimonialInput) {
  return prisma.testimonial.create({ data });
}

export async function updateTestimonial(id: string, data: Partial<TestimonialInput>) {
  return prisma.testimonial.update({ where: { id }, data });
}

export async function deleteTestimonial(id: string) {
  return prisma.testimonial.delete({ where: { id } });
}
