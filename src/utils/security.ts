/**
 * Security utility to obfuscate contact information from simple web scrapers
 * and sanitize user input to prevent XSS.
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
 * Basic HTML sanitization to prevent XSS by encoding special characters.
 */
export const sanitizeInput = (str: string): string => {
  if (!str) return "";
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&',
    '<': '<',
    '>': '>',
    '"': '&quot;',
    "'": '&#39;'
  }[m as keyof typeof map] || m));
};

const map = {
  '&': '&',
  '<': '<',
  '>': '>',
  '"': '&quot;',
  "'": '&#39;'
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