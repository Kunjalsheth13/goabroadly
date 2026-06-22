import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getCategories } from "@/services/blogService";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Categories GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
