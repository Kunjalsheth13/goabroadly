import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} from "@/services/testimonialService";
import { z } from "zod";

const updateSchema = z.object({
  name: z.string().min(1).optional(),
  country: z.string().min(1).optional(),
  university: z.string().min(1).optional(),
  testimonial: z.string().min(10).optional(),
  image: z.string().url().optional().nullable(),
  published: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

type Props = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Props) {
  try {
    const { id } = await params;
    const testimonial = await getTestimonialById(id);
    if (!testimonial) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error("Testimonial GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const parsed = updateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const testimonial = await updateTestimonial(id, parsed.data);
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error("Testimonial PUT error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: Props) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await deleteTestimonial(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Testimonial DELETE error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
