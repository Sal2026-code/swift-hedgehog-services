import { z } from "zod";

/**
 * Security utility to obfuscate contact information and sanitize input.
 * These schemas are designed to be portable so they can be reused 
 * in a Node.js backend to ensure server-side parity.
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

/**
 * Portable Validation Schemas
 * IMPORTANT: These must be mirrored or shared with the server-side implementation.
 */
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
 * Basic HTML sanitization to prevent XSS by encoding special characters.
 * Note: Server-side sanitization is still mandatory.
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

export const getFullEmail = () => `${CONTACT_INFO.email.user}@${CONTACT_INFO.email.domain}`;

export const getDisplayPhone = () => 
  `${CONTACT_INFO.phone.country} ${CONTACT_INFO.phone.area}-${CONTACT_INFO.phone.prefix}-${CONTACT_INFO.phone.line}`;

export const getRawPhone = () => 
  `${CONTACT_INFO.phone.country}${CONTACT_INFO.phone.area}${CONTACT_INFO.phone.prefix}${CONTACT_INFO.phone.line}`;

export const handleMailTo = (e: React.MouseEvent | React.KeyboardEvent) => {
  e.preventDefault();
  window.location.href = `mailto:${getFullEmail()}`;
};