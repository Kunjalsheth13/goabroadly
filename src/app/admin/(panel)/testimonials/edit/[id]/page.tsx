"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import styles from "@/components/admin/admin-shared.module.css";

export default function EditTestimonialPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    country: "",
    university: "",
    testimonial: "",
    image: "",
    published: true,
    sortOrder: 0,
  });

  useEffect(() => {
    fetch(`/api/testimonials/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.id) {
          setForm({
            name: data.name,
            country: data.country,
            university: data.university,
            testimonial: data.testimonial,
            image: data.image || "",
            published: data.published,
            sortOrder: data.sortOrder,
          });
        }
      });
  }, [id]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (res.ok) {
        const data = await res.json();
        setForm((f) => ({ ...f, image: data.url }));
      }
    } catch {
      /* ignore */
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/testimonials/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        image: form.image || null,
      }),
    });
    setLoading(false);
    if (res.ok) router.push("/admin/testimonials");
  };

  const inputStyle = {
    padding: "0.625rem 0.875rem",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-sm)",
    width: "100%",
    fontSize: "0.9375rem",
  };

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/admin/testimonials" style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
          Back to Testimonials
        </Link>
        <h1 className={styles.pageTitle}>Edit Testimonial</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.card} style={{ maxWidth: 640 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.375rem", fontWeight: 600, fontSize: "0.875rem" }}>Name</label>
            <input required style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.375rem", fontWeight: 600, fontSize: "0.875rem" }}>Country</label>
            <input required style={inputStyle} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.375rem", fontWeight: 600, fontSize: "0.875rem" }}>University</label>
            <input required style={inputStyle} value={form.university} onChange={(e) => setForm({ ...form, university: e.target.value })} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.375rem", fontWeight: 600, fontSize: "0.875rem" }}>Testimonial</label>
            <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }} value={form.testimonial} onChange={(e) => setForm({ ...form, testimonial: e.target.value })} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.375rem", fontWeight: 600, fontSize: "0.875rem" }}>Image</label>
            <input type="file" accept="image/*" onChange={handleUpload} />
            {uploading && <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>Uploading...</p>}
            {form.image && (
              <img src={form.image} alt="Preview" style={{ marginTop: "0.5rem", width: 80, height: 80, objectFit: "cover", borderRadius: "var(--radius-sm)" }} />
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" id="published" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
            <label htmlFor="published" style={{ fontSize: "0.875rem" }}>Published</label>
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{ padding: "0.75rem 1.5rem", background: "var(--color-gradient-primary)", color: "#fff", borderRadius: "var(--radius-sm)", fontWeight: 600, border: "none", cursor: "pointer" }}
          >
            {loading ? "Saving..." : "Update Testimonial"}
          </button>
        </div>
      </form>
    </div>
  );
}
