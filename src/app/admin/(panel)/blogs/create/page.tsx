import BlogEditor from "@/components/admin/BlogEditor";

export default function CreateBlogPage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>Create Blog Post</h1>
      <BlogEditor />
    </div>
  );
}
