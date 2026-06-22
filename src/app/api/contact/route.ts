import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { createContactInquiry } from "@/services/contactService";
import { getClientIp, rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const { success } = rateLimit(`contact:${ip}`, 5, 60_000);
    if (!success) return rateLimitResponse();

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const inquiry = await createContactInquiry(parsed.data);

    return NextResponse.json(
      { message: "Inquiry submitted successfully", id: inquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
