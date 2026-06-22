"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "@/components/admin/admin-shared.module.css";

type Inquiry = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  interestedCountry: string;
  serviceType: string;
  message: string;
  status: "NEW" | "CONTACTED" | "CLOSED";
  createdAt: string;
};

export default function ContactsPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchInquiries();
  };

  const filtered = inquiries.filter((i) => {
    const matchSearch =
      !search ||
      i.fullName.toLowerCase().includes(search.toLowerCase()) ||
      i.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !statusFilter || i.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div>
      <h1 className={styles.pageTitle}>Contact Inquiries</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <input
          type="search"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem 1rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", flex: 1, minWidth: 200 }}
          aria-label="Search inquiries"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "0.5rem 1rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)" }}
          aria-label="Filter by status"
        >
          <option value="">All Statuses</option>
          <option value="NEW">New</option>
          <option value="CONTACTED">Contacted</option>
          <option value="CLOSED">Closed</option>
        </select>
      </div>

      <div className={styles.section}>
        {loading ? (
          <p style={{ color: "var(--color-text-secondary)" }}>Loading...</p>
        ) : filtered.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)" }}>No inquiries found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Service</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.interestedCountry}</td>
                  <td>{item.serviceType}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[item.status.toLowerCase()]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td>
                    <select
                      value={item.status}
                      onChange={(e) => updateStatus(item.id, e.target.value)}
                      style={{ fontSize: "0.8rem", padding: "0.25rem" }}
                      aria-label={`Update status for ${item.fullName}`}
                    >
                      <option value="NEW">New</option>
                      <option value="CONTACTED">Contacted</option>
                      <option value="CLOSED">Closed</option>
                    </select>
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
