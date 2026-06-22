import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled,
  fullWidth,
  className = "",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    size !== "md" ? styles[size] : "",
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
