"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import styles from "./BlogEditor.module.css";

type Category = { id: string; name: string; slug: string };

type BlogEditorProps = {
  initialData?: {
    id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: string;
    seoTitle?: string;
    seoDescription?: string;
    published: boolean;
    categoryId: string;
  };
};

export default function BlogEditor({ initialData }: BlogEditorProps) {
  const router = useRouter();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    featuredImage: initialData?.featuredImage || "",
    seoTitle: initialData?.seoTitle || "",
    seoDescription: initialData?.seoDescription || "",
    published: initialData?.published || false,
    categoryId: initialData?.categoryId || "",
  });

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title" && !initialData?.id) {
        next.slug = slugify(value as string, { lower: true, strict: true });
      }
      return next;
    });
  };

  const insertTag = (tag: string) => {
    const textarea = contentRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = form.content.substring(start, end);
    let insertion = "";

    switch (tag) {
      case "h2":
        insertion = `<h2>${selected || "Heading"}</h2>`;
        break;
      case "p":
        insertion = `<p>${selected || "Paragraph"}</p>`;
        break;
      case "bold":
        insertion = `<strong>${selected || "bold text"}</strong>`;
        break;
      case "ul":
        insertion = `<ul>\n  <li>${selected || "Item"}</li>\n</ul>`;
        break;
      default:
        insertion = selected;
    }

    const newContent =
      form.content.substring(0, start) + insertion + form.content.substring(end);
    updateField("content", newContent);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (res.ok) {
        const { url } = await res.json();
        updateField("featuredImage", url);
      }
    } catch {
      alert("Upload failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const url = initialData?.id ? `/api/blogs/${initialData.id}` : "/api/blogs";
    const method = initialData?.id ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/admin/blogs");
        router.refresh();
      } else {
        const err = await res.json();
        alert(err.error || "Save failed");
      }
    } catch {
      alert("Network error");
    }
    setSaving(false);
  };

  if (preview) {
    return (
      <div>
        <button onClick={() => setPreview(false)} className={styles.submit} style={{ marginBottom: "1.5rem" }}>
          ← Back to Editor
        </button>
        <h1>{form.title}</h1>
        <p style={{ color: "var(--color-text-secondary)", margin: "1rem 0" }}>{form.excerpt}</p>
        <div className={styles.preview} dangerouslySetInnerHTML={{ __html: form.content }} />
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="title">Title *</label>
        <input id="title" value={form.title} onChange={(e) => updateField("title", e.target.value)} required />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="slug">Slug *</label>
          <input id="slug" value={form.slug} onChange={(e) => updateField("slug", e.target.value)} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="category">Category *</label>
          <select id="category" value={form.categoryId} onChange={(e) => updateField("categoryId", e.target.value)} required>
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="excerpt">Excerpt *</label>
        <textarea id="excerpt" value={form.excerpt} onChange={(e) => updateField("excerpt", e.target.value)} rows={3} required />
      </div>

      <div className={styles.field}>
        <label htmlFor="content">Content (HTML) *</label>
        <div className={styles.toolbar}>
          <button type="button" onClick={() => insertTag("h2")}>H2</button>
          <button type="button" onClick={() => insertTag("p")}>P</button>
          <button type="button" onClick={() => insertTag("bold")}>Bold</button>
          <button type="button" onClick={() => insertTag("ul")}>List</button>
        </div>
        <textarea
          id="content"
          ref={contentRef}
          value={form.content}
          onChange={(e) => updateField("content", e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="featuredImage">Featured Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {form.featuredImage && (
          <img src={form.featuredImage} alt="Featured" className={styles.imagePreview} />
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="seoTitle">SEO Title</label>
          <input id="seoTitle" value={form.seoTitle} onChange={(e) => updateField("seoTitle", e.target.value)} maxLength={70} />
        </div>
        <div className={styles.field}>
          <label htmlFor="seoDescription">SEO Description</label>
          <input id="seoDescription" value={form.seoDescription} onChange={(e) => updateField("seoDescription", e.target.value)} maxLength={160} />
        </div>
      </div>

      <label className={styles.checkbox}>
        <input type="checkbox" checked={form.published} onChange={(e) => updateField("published", e.target.checked)} />
        Publish immediately
      </label>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={saving}>
          {saving ? "Saving..." : initialData?.id ? "Update Post" : "Create Post"}
        </button>
        <button type="button" className={styles.submit} style={{ background: "var(--color-surface)", color: "var(--color-text-primary)", border: "1px solid var(--color-border)" }} onClick={() => setPreview(true)}>
          Preview
        </button>
      </div>
    </form>
  );
}
