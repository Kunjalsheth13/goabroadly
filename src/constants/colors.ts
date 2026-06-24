export const colors = {
  primary: "#38B2AC",      // Teal
  secondary: "#7DD3C7",    // Light Teal
  accent: "#A3D65C",       // Lime Green
  accentLight: "#D9F99D",

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",

  background: "#FFFFFF",
  surface: "#F8FAFC",
  surfaceDark: "#0F172A",

  textPrimary: "#111827",
  textSecondary: "#475569",
  textMuted: "#94A3B8",

  border: "#E2E8F0",

  onDark: "#FFFFFF",
  onDarkMuted: "rgba(255,255,255,0.72)",

  glass: "rgba(255,255,255,0.90)",
  glassBorder: "rgba(226,232,240,0.7)",

  gradientPrimary:
    "linear-gradient(135deg, #38B2AC 0%, #A3D65C 100%)",

  gradientGold:
    "linear-gradient(135deg, #38B2AC 0%, #7DD3C7 50%, #A3D65C 100%)",

  gradientHero:
    "radial-gradient(circle at 20% 20%, rgba(56,178,172,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(163,214,92,0.10) 0%, transparent 40%)",
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
