import { getDashboardStats } from "@/services/contactService";
import prisma from "@/lib/prisma";
import styles from "@/components/admin/admin-shared.module.css";

export default async function DashboardPage() {
  let stats = {
    totalInquiries: 0,
    totalBookings: 0,
    totalBlogs: 0,
    recentInquiries: 0,
  };
  let recentActivity: Awaited<
    ReturnType<typeof prisma.contactInquiry.findMany>
  > = [];

  try {
    stats = await getDashboardStats();
    recentActivity = await prisma.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });
  } catch {
    /* database not connected */
  }

  const cards = [
    { label: "Total Inquiries", value: stats.totalInquiries },
    { label: "Total Bookings", value: stats.totalBookings },
    { label: "Total Blogs", value: stats.totalBlogs },
    { label: "Recent Inquiries (7d)", value: stats.recentInquiries },
  ];

  return (
    <div>
      <h1 className={styles.pageTitle}>Dashboard</h1>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.label} className={styles.card}>
            <div className={styles.cardLabel}>{card.label}</div>
            <div className={styles.cardValue}>{card.value}</div>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        {recentActivity.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)" }}>No recent activity.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((item) => (
                <tr key={item.id}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.interestedCountry}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[item.status.toLowerCase()]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.createdAt.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
