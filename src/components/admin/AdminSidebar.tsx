"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import styles from "./AdminSidebar.module.css";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/admin/blogs", label: "Blogs", icon: "📝" },
  { href: "/admin/testimonials", label: "Testimonials", icon: "💬" },
  { href: "/admin/contacts", label: "Contacts", icon: "📬" },
  { href: "/admin/bookings", label: "Bookings", icon: "📅" },
  { href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar} aria-label="Admin navigation">
      <div className={styles.logo}>
        Go<span className={styles.logoAccent}>Abroadly</span>
        <div style={{ fontSize: "0.7rem", opacity: 0.5, fontWeight: 400, marginTop: "0.25rem" }}>
          Admin Panel
        </div>
      </div>

      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ""}`}
          >
            <span aria-hidden="true">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <button
          className={styles.logoutBtn}
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
