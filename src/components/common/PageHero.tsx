import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function PageHero({ title, subtitle, centered }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content} ${centered ? styles.centered : ""}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
