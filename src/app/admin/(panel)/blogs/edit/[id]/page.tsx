import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import BlogEditor from "@/components/admin/BlogEditor";

type Props = { params: Promise<{ id: string }> };

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;

  let post = null;
  try {
    post = await prisma.blogPost.findUnique({ where: { id } });
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>Edit Blog Post</h1>
      <BlogEditor
        initialData={{
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          featuredImage: post.featuredImage || "",
          seoTitle: post.seoTitle || "",
          seoDescription: post.seoDescription || "",
          published: post.published,
          categoryId: post.categoryId,
        }}
      />
    </div>
  );
}
