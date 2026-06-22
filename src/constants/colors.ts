export const colors = {
  primary: "#0B0F19",
  secondary: "#3B5BDB",
  accent: "#C9A962",
  accentLight: "#22D3EE",
  success: "#16A34A",
  warning: "#F59E0B",
  danger: "#DC2626",

  background: "#FFFFFF",
  surface: "#F4F6FA",
  surfaceDark: "#12182B",

  textPrimary: "#0B0F19",
  textSecondary: "#64748B",
  textMuted: "#94A3B8",

  border: "#E2E8F0",

  onDark: "#FFFFFF",
  onDarkMuted: "rgba(255, 255, 255, 0.72)",
  glass: "rgba(255, 255, 255, 0.08)",
  glassBorder: "rgba(255, 255, 255, 0.14)",

  gradientPrimary: "linear-gradient(135deg, #3B5BDB 0%, #22D3EE 100%)",
  gradientGold: "linear-gradient(135deg, #C9A962 0%, #E8D5A3 100%)",
  gradientHero:
    "radial-gradient(ellipse at 25% 50%, rgba(59, 91, 219, 0.4) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(34, 211, 238, 0.22) 0%, transparent 50%), radial-gradient(ellipse at 60% 90%, rgba(201, 169, 98, 0.12) 0%, transparent 45%)",
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
