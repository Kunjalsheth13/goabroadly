import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import styles from "@/components/admin/admin-shared.module.css";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className={styles.pageTitle}>Settings</h1>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Account</h2>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}>
          Logged in as: <strong>{session?.user?.email}</strong>
        </p>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem" }}>
          Admin settings and profile management will be available in future updates.
        </p>
      </div>
    </div>
  );
}
