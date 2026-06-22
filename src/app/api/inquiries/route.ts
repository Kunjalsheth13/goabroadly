import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const inquiries = await prisma.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error("Inquiries GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
