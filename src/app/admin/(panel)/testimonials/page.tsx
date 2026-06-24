"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "@/components/admin/admin-shared.module.css";

type Testimonial = {
  id: string;
  name: string;
  country: string;
  university: string;
  testimonial: string;
  image: string | null;
  published: boolean;
  sortOrder: number;
  createdAt: string;
};

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/testimonials");
      if (res.ok) setItems(await res.json());
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
    fetchItems();
  };

  const togglePublish = async (item: Testimonial) => {
    await fetch(`/api/testimonials/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !item.published }),
    });
    fetchItems();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 className={styles.pageTitle} style={{ marginBottom: 0 }}>Testimonials</h1>
        <Link
          href="/admin/testimonials/create"
          style={{ padding: "0.6rem 1.25rem", background: "var(--color-gradient-primary)", color: "#fff", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: "0.875rem" }}
        >
          + Add Testimonial
        </Link>
      </div>

      {loading ? (
        <p style={{ color: "var(--color-text-muted)" }}>Loading...</p>
      ) : items.length === 0 ? (
        <p style={{ color: "var(--color-text-muted)" }}>No testimonials yet. Add your first one.</p>
      ) : (
        <div className={styles.section}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
                <th>University</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                  <td>{item.university}</td>
                  <td>
                    <button
                      type="button"
                      className={`${styles.badge} ${item.published ? styles.closed : styles.new}`}
                      onClick={() => togglePublish(item)}
                    >
                      {item.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <Link href={`/admin/testimonials/edit/${item.id}`} style={{ fontSize: "0.8125rem", color: "var(--color-primary)" }}>
                        Edit
                      </Link>
                      <button type="button" onClick={() => handleDelete(item.id)} style={{ fontSize: "0.8125rem", color: "var(--color-danger)", background: "none", border: "none", cursor: "pointer" }}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
