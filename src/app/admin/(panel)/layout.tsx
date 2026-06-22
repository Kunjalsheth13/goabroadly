import AdminSidebar from "@/components/admin/AdminSidebar";
import styles from "../admin.module.css";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
