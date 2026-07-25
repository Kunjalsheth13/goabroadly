import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { getPublishedPosts } from "@/services/blogService";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import styles from "./blog.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description: "Study abroad tips, visa guides, and country insights from GoAbroadly experts.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const search = params.search || "";

  let posts: Awaited<ReturnType<typeof getPublishedPosts>> = {
    data: [],
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  };

  try {
    posts = await getPublishedPosts(page, 10, search);
  } catch {
    /* database not connected */
  }

  return (
    <>
      <style>{`
        .blog-hero {
          padding: 80px 0 60px;
          background: #FAFAFC;
          text-align: center;
        }
        .blog-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 6px;
          background: #FEE2E2;
          color: #DC2626;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid #FECACA;
        }
        .blog-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          color: #0B2B66;
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .blog-title span {
          color: #DC2626;
        }
        .blog-underline {
          width: 60px;
          height: 4px;
          background: #DC2626;
          margin: 0 auto 20px;
          border-radius: 4px;
        }
        .blog-subtitle {
          font-size: 17px;
          color: #475569;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        .blog-section {
          padding: 60px 0 100px;
          background: #ffffff;
        }
      `}</style>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <FadeIn>
            <span className="blog-badge">
              <BookOpen size={14} /> Our Expert Insights
            </span>
            <h1 className="blog-title">
              Study Abroad Tips & <span>Visa Guides</span>
            </h1>
            <div className="blog-underline" />
            <p className="blog-subtitle">
              Tips, guides, and insights for your study abroad journey from GoAbroadly experts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="blog-section">
        <div className="container">
          {posts.data.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#64748B" }}>
              <p style={{ fontSize: "18px", fontWeight: "600" }}>No blog posts yet.</p>
              <p style={{ fontSize: "14px", marginTop: "8px" }}>Check back soon for latest updates and guides!</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {posts.data.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.1}>
                  <article className={styles.card}>
                  <div className={styles.image}>
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <span aria-hidden="true">✈️</span>
                      )}
                    </div>
                    <div className={styles.body}>
                      <span className={styles.category}>{post.category.name}</span>
                      <h2 className={styles.title}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className={styles.excerpt}>{post.excerpt}</p>
                      
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                        <time className={styles.date} dateTime={post.createdAt.toISOString()}>
                          {post.createdAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <Link href={`/blog/${post.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 700, color: "#DC2626", textDecoration: "none" }}>
                          Read More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}

          {posts.totalPages > 1 && (
            <nav className={styles.pagination} aria-label="Blog pagination">
              {page > 1 && (
                <Link href={`/blog?page=${page - 1}`} className={styles.pageLink}>← Previous</Link>
              )}
              <span className={styles.pageInfo}>Page {page} of {posts.totalPages}</span>
              {page < posts.totalPages && (
                <Link href={`/blog?page=${page + 1}`} className={styles.pageLink}>Next →</Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}