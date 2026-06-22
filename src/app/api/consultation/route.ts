import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations";
import { createConsultationBooking } from "@/services/contactService";
import { getClientIp, rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const { success } = rateLimit(`consultation:${ip}`, 5, 60_000);
    if (!success) return rateLimitResponse();

    const body = await request.json();
    const parsed = consultationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const booking = await createConsultationBooking(parsed.data);

    return NextResponse.json(
      { message: "Consultation booked successfully", id: booking.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Consultation API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
