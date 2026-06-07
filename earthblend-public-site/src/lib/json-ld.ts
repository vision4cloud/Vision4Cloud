/**
 * Per Next.js guidance, JSON.stringify does not sanitize XSS-prone strings
 * for inline <script> tags — escape `<` to its unicode equivalent before
 * injecting structured data.
 */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
