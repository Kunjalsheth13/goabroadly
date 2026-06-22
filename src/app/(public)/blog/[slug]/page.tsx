import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/services/blogService";
import { siteConfig } from "@/constants/site";
import styles from "./post.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let post = null;
  try {
    post = await getPostBySlug(slug);
  } catch {
    return { title: "Blog Post" };
  }

  if (!post) return { title: "Not Found" };

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post = null;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.article}>
        <header className={styles.header}>
          <div className="container">
            <span className={styles.category}>{post.category.name}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <time className={styles.date} dateTime={post.createdAt.toISOString()}>
              {post.createdAt.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>
        <div className="container">
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
