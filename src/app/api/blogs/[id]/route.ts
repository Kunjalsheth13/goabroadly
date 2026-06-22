import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { updateBlogPost, deleteBlogPost } from "@/services/blogService";
import { blogSchema } from "@/lib/validations";
import prisma from "@/lib/prisma";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        category: true,
        author: { select: { id: true, email: true } },
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const session = await getServerSession(authOptions);
    if (!post.published && !session?.user?.id) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Blog GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();
    const parsed = blogSchema.partial().safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const post = await updateBlogPost(id, parsed.data);
    return NextResponse.json(post);
  } catch (error) {
    console.error("Blog PUT error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    await deleteBlogPost(id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Blog DELETE error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
