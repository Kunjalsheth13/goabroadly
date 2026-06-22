import sanitizeHtml from "sanitize-html";

const defaultOptions: sanitizeHtml.IOptions = {
  allowedTags: [
    "h1",
    "h2",
    "h3",
    "h4",
    "p",
    "br",
    "strong",
    "em",
    "u",
    "ul",
    "ol",
    "li",
    "a",
    "blockquote",
    "img",
  ],
  allowedAttributes: {
    a: ["href", "name", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"],
  },
  allowedSchemes: ["http", "https", "mailto"],
};

export function sanitizeInput(input: string): string {
  return sanitizeHtml(input.trim(), defaultOptions);
}

export function sanitizePlainText(input: string): string {
  return sanitizeHtml(input.trim(), { allowedTags: [], allowedAttributes: {} });
}
