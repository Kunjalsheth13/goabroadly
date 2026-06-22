import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  getPublishedPosts,
  getAllPostsAdmin,
  createBlogPost,
} from "@/services/blogService";
import { blogSchema } from "@/lib/validations";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const session = await getServerSession(authOptions);

    if (session?.user?.id) {
      const publishedParam = searchParams.get("published");
      const published =
        publishedParam === "true"
          ? true
          : publishedParam === "false"
            ? false
            : undefined;
      const result = await getAllPostsAdmin(page, limit, search, published);
      return NextResponse.json(result);
    }

    const result = await getPublishedPosts(page, limit, search);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Blogs GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = blogSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const post = await createBlogPost(parsed.data, session.user.id);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Blogs POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
