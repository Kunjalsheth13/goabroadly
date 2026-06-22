import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import { getPublishedPosts } from "@/services/blogService";
import styles from "./blog.module.css";

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
      <PageHero title="Blog" subtitle="Tips, guides, and insights for your study abroad journey." centered />
      <section className="section">
        <div className="container">
          {posts.data.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-text-secondary)" }}>
              No blog posts yet. Check back soon!
            </p>
          ) : (
            <div className={styles.grid}>
              {posts.data.map((post) => (
                <article key={post.id} className={styles.card}>
                  <div className={styles.image} aria-hidden="true">📝</div>
                  <div className={styles.body}>
                    <span className={styles.category}>{post.category.name}</span>
                    <h2 className={styles.title}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <time className={styles.date} dateTime={post.createdAt.toISOString()}>
                      {post.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </article>
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
