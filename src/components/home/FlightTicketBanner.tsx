import Button from "@/components/common/Button";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./FlightTicketBanner.module.css";

export default function FlightTicketBanner() {
  return (
    <section className="section" aria-label="Special offer">
      <div className="container">
        <FadeIn>
          <div className={styles.banner}>
            <div className={styles.content}>
              <h2 className={styles.title}>Win a Free Flight Ticket!</h2>
              <p className={styles.description}>
                Enroll through GoAbroadly and get a chance to win a free flight ticket
                to your study destination. Limited time offer for new students.
              </p>
            </div>
            <div className={styles.cta}>
              <Button href="/free-assessment" variant="secondary" size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
