import { colors, colorsToCssVariables } from "@/constants/colors";

export default function ThemeInjector() {
  const cssVars = colorsToCssVariables(colors);
  const css = `:root { ${Object.entries(cssVars)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ")}; }`;

  return (
    <style
      id="theme-variables"
      dangerouslySetInnerHTML={{ __html: css }}
    />
  );
}
