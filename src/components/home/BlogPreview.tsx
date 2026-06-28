import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  PencilLine,
  ArrowRight,
} from "lucide-react";

import { getRecentPosts } from "@/services/blogService";
import FadeIn from "@/components/animations/FadeIn";

import blogBg from "@/assets/images/blogbg.png";

import styles from "./BlogPreview.module.css";

export default async function BlogPreview() {
  let posts: Awaited<ReturnType<typeof getRecentPosts>> = [];

  try {
    posts = await getRecentPosts(3);
  } catch {
    posts = [];
  }

  if (!posts.length) return null;

  return (
    <section className={styles.section}>
      <Image
        src={blogBg}
        alt=""
        fill
        priority
        className={styles.bg}
      />

      <div className="container">
        <FadeIn>
          <div className={styles.header}>
            <div>
              <div className={styles.badge}>
                <PencilLine size={16} />
                <span>OUR BLOG</span>
              </div>

              <h2 className={styles.title}>
                Latest from <span>Our Blog</span>
              </h2>

              <p className={styles.subtitle}>
                Tips, guides, and insights to help you make
                smarter decisions for your study abroad journey.
              </p>
            </div>

            <Link href="/blog" className={styles.viewBtn}>
              View All Blogs
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
  src={post.featuredImage || "/images/blog-placeholder.jpg"}
  alt={post.title}
  fill
  className={styles.image}
/>

                  <span
                    className={`${styles.category} ${
                      index === 1 ? styles.redCategory : ""
                    }`}
                  >
                    {post.category.name}
                  </span>
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <div>
                      <CalendarDays size={18} />
                      <span>
                        {new Date(post.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <div
                      className={
                        index === 1
                          ? styles.redRead
                          : styles.blueRead
                      }
                    >
                      <Clock3 size={16} />
                      <span>5 min read</span>
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className={styles.excerpt}>
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.readMore}
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className={styles.dots}>
          <span className={styles.active} />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}