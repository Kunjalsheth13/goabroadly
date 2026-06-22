"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "@/components/admin/admin-shared.module.css";

type Booking = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  notes: string | null;
  createdAt: string;
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookings");
      if (res.ok) setBookings(await res.json());
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const filtered = bookings.filter(
    (b) =>
      !search ||
      b.fullName.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className={styles.pageTitle}>Consultation Bookings</h1>

      <input
        type="search"
        placeholder="Search bookings..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem 1rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", marginBottom: "1.5rem", width: "100%", maxWidth: 400 }}
        aria-label="Search bookings"
      />

      <div className={styles.section}>
        {loading ? (
          <p style={{ color: "var(--color-text-secondary)" }}>Loading...</p>
        ) : filtered.length === 0 ? (
          <p style={{ color: "var(--color-text-secondary)" }}>No bookings found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Notes</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td>{b.fullName}</td>
                  <td>{b.email}</td>
                  <td>{b.phone}</td>
                  <td>{new Date(b.preferredDate).toLocaleDateString()}</td>
                  <td>{b.preferredTime}</td>
                  <td>{b.notes || "—"}</td>
                  <td>{new Date(b.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
