import { colors, colorsToCssVariables } from "@/constants/colors";

export function injectThemeVariables(): string {
  const vars = colorsToCssVariables(colors);
  return Object.entries(vars)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n  ");
}

export function getCssVariable(name: string): string {
  return `var(--color-${name.replace(/([A-Z])/g, "-$1").toLowerCase()})`;
}
