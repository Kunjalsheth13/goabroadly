import Link from "next/link";
import { getRecentPosts } from "@/services/blogService";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import styles from "./BlogPreview.module.css";

export default async function BlogPreview() {
  let posts: Awaited<ReturnType<typeof getRecentPosts>> = [];

  try {
    posts = await getRecentPosts(3);
  } catch {
    posts = [];
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="section" aria-labelledby="blog-preview-title">
      <div className="container">
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h2 id="blog-preview-title" className="sectionTitle">Latest from Our Blog</h2>
              <p className="sectionSubtitle" style={{ marginBottom: 0 }}>Tips, guides, and insights for your journey.</p>
            </div>
            <Button href="/blog" variant="outline" size="sm">View All</Button>
          </div>
        </FadeIn>
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.1}>
              <article className={styles.card}>
                <div className={styles.image} aria-hidden="true">📝</div>
                <div className={styles.body}>
                  <span className={styles.category}>{post.category.name}</span>
                  <h3 className={styles.title}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.link}>
                    Read More →
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
