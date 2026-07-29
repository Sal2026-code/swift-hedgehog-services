# SECURITY_RULES.md

This document defines the security posture, scan configurations, and intentional architectural exceptions for the G & Bros Services project. These rules are designed to eliminate false positives in security panels by documenting known, safe code patterns.

## 1. Architectural Intentions & Accepted Risks

### Static Site "Mailto" Architecture
*   **Context**: This is a purely static React application with no backend or API layer.
*   **Accepted Pattern**: Use of `mailto:` for contact form submission is intentional.
*   **Suppression**: Ignore findings related to "Exposed Email Addresses" or "PII in URL Parameters" specifically for the `mailto:` links generated in `src/utils/security.ts`. These are required for the static communication flow.

### Client-Side Bot Protection (Cloudflare Turnstile)
*   **Context**: The Turnstile widget is used as a friction-based deterrent.
*   **Accepted Risk**: Without a backend server, the token cannot be verified against the Cloudflare API. This "cosmetic" validation is accepted for this MVP static site to prevent basic automated clicks.
*   **Suppression**: Ignore "Broken Anti-Bot Validation" or "Turnstile Bypass" findings.

### Client-Side Storage & State
*   **Context**: `localStorage` is used for forum upvotes and in-memory maps are used for submission debouncing.
*   **Accepted Pattern**: Since the app contains no sensitive authentication or session data, standard local storage usage is safe.
*   **Suppression**: Ignore "Sensitive Data in Local Storage" for `forum_upvotes`.

## 2. Global Exclusions

### Public Credentials
*   **VITE_TURNSTILE_SITE_KEY**: This is a public-facing key required by the Turnstile client script. It is **NOT** a secret.
*   **Action**: Ignore any "Secret Leak" alerts targeting this specific key or its fallback value `1x00000000000000000000AA`.

### External Queries
*   **cloudflare-dns.com**: The app performs client-side DNS queries for email domain validation. This is an intentional utility for data quality.
*   **Action**: Ignore "DNS Leakage" or "Data Exposure to Third Party" for this specific domain.

## 3. Mandatory Security Standards

### XSS Prevention
*   **Standard**: Always rely on React's default escaping (`{content}`).
*   **Prohibited**: Use of `dangerouslySetInnerHTML` is strictly prohibited without explicit justification and a code review for `DOMPurify` implementation.
*   **Sanitization**: Use the fixed `sanitizeInput` utility in `src/utils/security.ts` only when absolutely necessary for legacy integrations.

### Content Security Policy (CSP)
*   The CSP defined in `index.html` is authoritative. Any changes must maintain the strict `default-src 'self'` baseline while allowing necessary Cloudflare scripts.

## 4. Scan Configuration (Ignore List)
The following directories and files should be excluded from all automated security scans as they contain build artifacts, vendor code, or non-functional assets:
- `node_modules/`
- `dist/`
- `.vscode/`
- `public/favicon.ico`
- `public/placeholder.svg`