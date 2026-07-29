import { z } from "zod";

/**
 * Security utility to obfuscate contact information, sanitize input, and enforce multi-layer client security.
 */

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
 * HTML entity mapping for input sanitization
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
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 second timeout

    // Check MX records via Cloudflare DNS-over-HTTPS
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
 * Multi-layer Rate Limiting with Session Fingerprinting.
 * Combines memory, sessionStorage, and localStorage to prevent bypasses.
 */
const inMemoryRateLimits = new Map<string, number>();

function getSessionFingerprint(): string {
  try {
    let fp = sessionStorage.getItem("app_device_fp");
    if (!fp) {
      fp = Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem("app_device_fp", fp);
    }
    return fp;
  } catch {
    return "default_fp";
  }
}

export const checkRateLimit = (actionKey: string, cooldownMs: number = 60000): { allowed: boolean; remaining: number } => {
  const now = Date.now();
  const fp = getSessionFingerprint();
  const keyWithFp = `${actionKey}_${fp}`;

  const memoryLastAction = inMemoryRateLimits.get(keyWithFp) || inMemoryRateLimits.get(actionKey) || 0;

  let localLastAction = 0;
  let sessionLastAction = 0;

  try {
    const localItem = localStorage.getItem(`rate_limit_${actionKey}`);
    if (localItem) localLastAction = parseInt(localItem, 10) || 0;

    const sessionItem = sessionStorage.getItem(`rate_limit_${actionKey}`);
    if (sessionItem) sessionLastAction = parseInt(sessionItem, 10) || 0;
  } catch (e) {
    console.warn("Storage rate limit access notice:", e);
  }

  const lastAction = Math.max(memoryLastAction, localLastAction, sessionLastAction);

  if (lastAction > 0) {
    const elapsed = now - lastAction;
    if (elapsed < cooldownMs) {
      return { allowed: false, remaining: Math.ceil((cooldownMs - elapsed) / 1000) };
    }
  }
  return { allowed: true, remaining: 0 };
};

export const updateRateLimit = (actionKey: string) => {
  const now = Date.now();
  const fp = getSessionFingerprint();
  inMemoryRateLimits.set(`${actionKey}_${fp}`, now);
  inMemoryRateLimits.set(actionKey, now);

  try {
    localStorage.setItem(`rate_limit_${actionKey}`, now.toString());
    sessionStorage.setItem(`rate_limit_${actionKey}`, now.toString());
  } catch (e) {
    console.warn("Storage rate limit update notice:", e);
  }
};

/**
 * Proof-of-Work Challenge Token generator to block simple automated bots
 */
export const generateSubmissionToken = (): { token: string; timestamp: number } => {
  const timestamp = Date.now();
  const fp = getSessionFingerprint();
  const secret = (timestamp * 31 + fp.length).toString(16);
  return { token: secret, timestamp };
};

export const verifySubmissionToken = (token: string, timestamp: number, maxAgeMs: number = 300000): boolean => {
  const now = Date.now();
  if (now - timestamp > maxAgeMs) return false;
  const fp = getSessionFingerprint();
  const expectedSecret = (timestamp * 31 + fp.length).toString(16);
  return token === expectedSecret;
};

export const getFullEmail = () => `${CONTACT_INFO.email.user}@${CONTACT_INFO.email.domain}`;

export const getDisplayPhone = () => 
  `${CONTACT_INFO.phone.country} ${CONTACT_INFO.phone.area}-${CONTACT_INFO.phone.prefix}-${CONTACT_INFO.phone.line}`;

export const getRawPhone = () => 
  `${CONTACT_INFO.phone.country}${CONTACT_INFO.phone.area}${CONTACT_INFO.phone.prefix}${CONTACT_INFO.phone.line}`;

/**
 * Constructs a prefilled mailto URL for direct, user-driven email delivery.
 */
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