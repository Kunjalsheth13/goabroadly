import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  getPublishedTestimonials,
  getAllTestimonialsAdmin,
  createTestimonial,
} from "@/services/testimonialService";
import { z } from "zod";

const testimonialSchema = z.object({
  name: z.string().min(1),
  country: z.string().min(1),
  university: z.string().min(1),
  testimonial: z.string().min(10),
  image: z.string().url().optional().nullable(),
  published: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session = await getServerSession(authOptions);

    if (session?.user?.id) {
      const testimonials = await getAllTestimonialsAdmin();
      return NextResponse.json(testimonials);
    }

    const testimonials = await getPublishedTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Testimonials GET error:", error);
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = testimonialSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const testimonial = await createTestimonial(parsed.data);
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Testimonials POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
