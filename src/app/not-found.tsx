import Link from "next/link";
import { Search, Home, MapPinOff } from "lucide-react";
import Button from "@/components/common/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.illustration} aria-hidden="true">
          <MapPinOff size={80} strokeWidth={1.5} />
          <span className={styles.errorCode}>404</span>
        </div>

        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          The page you are looking for might have been moved, deleted, or never existed.
          Let us help you find your way back to your study abroad journey.
        </p>

        <div className={styles.actions}>
          <Button href="/" size="lg">
            <Home size={18} aria-hidden="true" />
            Back To Home
          </Button>
          <Button href="/countries" variant="outline" size="lg">
            <Search size={18} aria-hidden="true" />
            Browse Destinations
          </Button>
        </div>

        <nav className={styles.links} aria-label="Helpful links">
          <Link href="/visa-types">Visa Types</Link>
          <Link href="/services">Services</Link>
          <Link href="/free-assessment">Free Assessment</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </section>
  );
}
