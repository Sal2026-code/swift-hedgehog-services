import { z } from "zod";

/**
 * Security & Utility Helpers
 */

export const getTurnstileSiteKey = (): string => {
  const key = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  if (key && typeof key === "string" && key.trim() !== "") {
    return key;
  }
  if (import.meta.env.PROD) {
    console.warn(
      "[Security Notice] VITE_TURNSTILE_SITE_KEY environment variable is missing in production. Falling back to Cloudflare test key."
    );
  }
  return "1x00000000000000000000AA";
};

export const CONTACT_INFO = {
  email: {
    user: "gandbrosteam",
    domain: "gmail.com"
  },
  phone: {
    country: "+1",
    area: "727",
    prefix: "608",
    line: "9599"
  }
};

export const ContactFormSchema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[\d\s-]{9,}$/, "Please enter a valid phone number (min 9 digits)"),
  message: z.string().optional(),
});

export const ForumQuestionSchema = z.object({
  name: z.string().trim().optional(),
  category: z.enum(["pets", "safety", "pricing", "general"]),
  query: z.string().trim().min(5, "Question must be at least 5 characters"),
});

/**
 * HTML entity mapping for input sanitization. 
 * Fixed: Now correctly maps dangerous characters to their HTML entities (&, <, >, ", ').
 * Note: React handles escaping automatically in JSX; use this only for raw HTML contexts 
 * or legacy integrations as per SECURITY_RULES.md.
 */
export const sanitizeInput = (str: string): string => {
  if (!str) return "";
  const map: Record<string, string> = {
    '&': '&',
    '<': '<',
    '>': '>',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, (m) => map[m] || m);
};

/**
 * Real-time domain & MX record check for emails
 */
export const validateEmailDomain = async (email: string, language: "english" | "spanish" = "english"): Promise<{ valid: boolean; error?: string }> => {
  const parts = email.split('@');
  if (parts.length !== 2) {
    return {
      valid: false,
      error: language === "english" ? "Invalid email format." : "Formato de correo electrónico no válido."
    };
  }

  const domain = parts[1].toLowerCase().trim();

  // Basic check for minimal domain structure
  if (!domain.includes('.') || domain.startsWith('.') || domain.endsWith('.')) {
    return {
      valid: false,
      error: language === "english" ? "Email domain format is invalid." : "El dominio del correo electrónico no es válido."
    };
  }

  // Common domain typo checks
  const typos: Record<string, string> = {
    "gamil.com": "gmail.com",
    "gmial.com": "gmail.com",
    "gmai.com": "gmail.com",
    "hotmial.com": "hotmail.com",
    "yaho.com": "yahoo.com",
    "outlok.com": "outlook.com"
  };

  if (typos[domain]) {
    return {
      valid: false,
      error: language === "english"
        ? `Did you mean @${typos[domain]}? Please check your email address.`
        : `¿Quiso decir @${typos[domain]}? Por favor verifique su correo electrónico.`
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`, {
      headers: { accept: "application/dns-json" },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      
      if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
        return { valid: true };
      }

      const aRes = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=A`, {
        headers: { accept: "application/dns-json" }
      });
      if (aRes.ok) {
        const aData = await aRes.json();
        if (aData.Status === 0 && aData.Answer && aData.Answer.length > 0) {
          return { valid: true };
        }
      }

      return {
        valid: false,
        error: language === "english"
          ? `The domain "@${domain}" does not exist or cannot receive emails. Please enter a real email address.`
          : `El dominio "@${domain}" no existe o no puede recibir correos. Por favor ingrese un correo existente.`
      };
    }
  } catch (e) {
    console.warn("DNS domain check skipped or timed out:", e);
  }

  return { valid: true };
};

/**
 * UI Submission Debounce helper to prevent rapid accidental double-clicks in the interface
 */
const inMemoryDebounce = new Map<string, number>();

export const checkSubmissionDebounce = (actionKey: string, cooldownMs: number = 5000): { allowed: boolean; remaining: number } => {
  const now = Date.now();
  const lastAction = inMemoryDebounce.get(actionKey) || 0;

  if (lastAction > 0) {
    const elapsed = now - lastAction;
    if (elapsed < cooldownMs) {
      return { allowed: false, remaining: Math.ceil((cooldownMs - elapsed) / 1000) };
    }
  }
  return { allowed: true, remaining: 0 };
};

export const updateSubmissionDebounce = (actionKey: string) => {
  inMemoryDebounce.set(actionKey, Date.now());
};

export const getFullEmail = () => `${CONTACT_INFO.email.user}@${CONTACT_INFO.email.domain}`;

export const getDisplayPhone = () => 
  `${CONTACT_INFO.phone.country} ${CONTACT_INFO.phone.area}-${CONTACT_INFO.phone.prefix}-${CONTACT_INFO.phone.line}`;

export const getRawPhone = () => 
  `${CONTACT_INFO.phone.country}${CONTACT_INFO.phone.area}${CONTACT_INFO.phone.prefix}${CONTACT_INFO.phone.line}`;

export const buildMailtoUrl = (data: { name: string; email: string; phone: string; message?: string }) => {
  const subject = encodeURIComponent(`Service Quote Request from ${data.name}`);
  const body = encodeURIComponent(
    `Hello G & Bros Services Team,\n\nI would like to request a cleaning service quote / callback.\n\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n` +
    `Details: ${data.message || 'No additional details provided.'}\n\n` +
    `Thank you!`
  );
  return `mailto:${getFullEmail()}?subject=${subject}&body=${body}`;
};

export const handleMailTo = (e: React.MouseEvent | React.KeyboardEvent) => {
  e.preventDefault();
  window.location.href = `mailto:${getFullEmail()}`;
};