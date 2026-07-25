import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/services/blogService";
import { siteConfig } from "@/constants/site";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
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
        {/* Header Hero Section */}
        <header className={styles.header}>
          <div className="container" style={{ maxWidth: 900 }}>
            <FadeIn>
              <div style={{ marginBottom: "20px" }}>
                <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, color: "#475569", textDecoration: "none", marginBottom: "16px" }}>
                  <ArrowLeft size={16} /> Back to all articles
                </Link>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
                <span className={styles.category}>
                  <Tag size={12} style={{ display: "inline", marginRight: "4px" }} /> {post.category.name}
                </span>
                <time className={styles.date} dateTime={post.createdAt.toISOString()}>
                  <Calendar size={13} style={{ display: "inline", marginRight: "4px" }} />
                  {post.createdAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h1 className={styles.title}>{post.title}</h1>
            </FadeIn>
          </div>
        </header>

        {/* Featured Image Banner */}
        {post.featuredImage && (
          <div className="container" style={{ maxWidth: 900, marginTop: "-30px", marginBottom: "40px", position: "relative", zIndex: 2 }}>
            <FadeIn delay={0.1}>
              <div className={styles.featuredImageWrap}>
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 900px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeIn>
          </div>
        )}

        {/* Content Body Section */}
        <div className="container">
          <FadeIn delay={0.2}>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>
        </div>
      </article>
    </>
  );
}