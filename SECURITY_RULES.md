# SECURITY_RULES.md

This document defines the security guidelines and scan configurations for the G & Bros Services project. It is intended to reduce false positives and ensure high-priority vulnerabilities are addressed.

## 1. Scope and Exclusions

### Intentional Architecture (Static Site)
*   **Mailto Form Submission**: This project is a static site. The use of `mailto:` for contact forms is an intentional architectural choice to avoid backend complexity. Do not flag the exposure of the target email address `gandbrosteam@gmail.com` in the client-side code as a "Secret Leak."
*   **Client-Side "Storage"**: The use of `localStorage` for forum upvotes and in-memory maps for debouncing is acceptable for this public-facing, non-authenticated application.

### Public Keys
*   **Cloudflare Turnstile**: The `VITE_TURNSTILE_SITE_KEY` (and its fallback `1x00000000000000000000AA`) is a **public** key by design. Do not flag this as a credential leak.

## 2. Suppression Rules

### False Positive: Client-Side Input Sanitization
*   React's default rendering `{}` provides robust XSS protection. While `src/utils/security.ts` contains a `sanitizeInput` function, its logic flaws are considered **Low Severity** as long as `dangerouslySetInnerHTML` is not used.

### False Positive: DNS Leakage
*   The use of `cloudflare-dns.com` for email domain validation is an intentional feature to improve data quality. This is not a "Data Leak" vulnerability, but a privacy trade-off.

## 3. Mandatory Security Patterns

### XSS Prevention
*   **Strictly Prohibited**: Do not use `dangerouslySetInnerHTML` without a code review and mandatory use of a verified library like `DOMPurify`.
*   **Prefer React Escaping**: Always prefer standard JSX curly braces for rendering user-supplied content.

### Bot Protection
*   **Warning**: The current Turnstile implementation is client-side only. For any future production version that moves beyond `mailto:`, server-side verification of the `cf-turnstile-response` token is **mandatory**.

### Input Validation
*   All forms must use the defined `Zod` schemas in `src/utils/security.ts` before processing data to ensure format consistency and prevent basic injection attempts.

## 4. Scan Configuration (Ignore List)
- `.vscode/*`
- `node_modules/*`
- `dist/*`
- `public/favicon.ico`