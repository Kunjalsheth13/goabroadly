"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "@/components/admin/admin-shared.module.css";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
  category: { name: string };
};

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs?limit=50");
      if (res.ok) {
        const data = await res.json();
        setPosts(data.data || []);
      }
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post?")) return;
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    fetchPosts();
  };

  const togglePublish = async (post: BlogPost) => {
    await fetch(`/api/blogs/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !post.published }),
    });
    fetchPosts();
  };

  const filtered = posts.filter(
    (p) =>
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 className={styles.pageTitle} style={{ marginBottom: 0 }}>Blog Posts</h1>
        <Link
          href="/admin/blogs/create"
          style={{ padding: "0.6rem 1.25rem", background: "var(--color-gradient-primary)", color: "#fff", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: "0.875rem" }}
        >
          + Create Post
        </Link>
      </div>

      <input
        type="search"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem 1rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", marginBottom: "1.5rem", width: "100%", maxWidth: 400 }}
        aria-label="Search blog posts"
      />

      <div className={styles.section}>
        {loading ? (
          <p style={{ color: "var(--color-text-secondary)" }}>Loading...</p>
        ) : filtered.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)" }}>No blog posts yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.category.name}</td>
                  <td>
                    <span className={`${styles.badge} ${post.published ? styles.closed : styles.new}`}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <Link href={`/admin/blogs/edit/${post.id}`} style={{ color: "var(--color-secondary)", fontSize: "0.8rem" }}>Edit</Link>
                    <button onClick={() => togglePublish(post)} style={{ background: "none", border: "none", color: "var(--color-warning)", cursor: "pointer", fontSize: "0.8rem" }}>
                      {post.published ? "Unpublish" : "Publish"}
                    </button>
                    <button onClick={() => handleDelete(post.id)} style={{ background: "none", border: "none", color: "var(--color-danger)", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
