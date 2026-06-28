export const colors = {
  // Brand Colors (Figma Style)
  primary: "#0B2B66",       // Deep Navy Blue
  secondary: "#3B82F6",     // Sky Blue
  accent: "#60A5FA",        // Light Blue
  accentLight: "#DBEAFE",

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",        // Global Opportunities red

  // Backgrounds
  background: "#FFFFFF",
  surface: "#F8FAFC",
  surfaceDark: "#0B172A",

  // Typography
  textPrimary: "#0F172A",
  textSecondary: "#475569",
  textMuted: "#94A3B8",

  // Borders
  border: "#E2E8F0",

  // Dark mode text
  onDark: "#FFFFFF",
  onDarkMuted: "rgba(255,255,255,0.72)",

  // Glassmorphism
  glass: "rgba(255,255,255,0.92)",
  glassBorder: "rgba(226,232,240,0.75)",

  // Gradients
  gradientPrimary:
    "linear-gradient(135deg, #0B2B66 0%, #2563EB 100%)",

  gradientGold:
    "linear-gradient(135deg, #0B2B66 0%, #2563EB 50%, #60A5FA 100%)",

  gradientHero: `
    radial-gradient(
      circle at 15% 20%,
      rgba(59,130,246,0.08) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 85% 80%,
      rgba(11,43,102,0.06) 0%,
      transparent 40%
    )
  `,
} as const;

export type ColorKey = keyof typeof colors;

export function colorsToCssVariables(
  palette: Record<string, string> = colors
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => [
      `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
      value,
    ])
  );
}