/**
 * Security utility to obfuscate contact information from simple web scrapers.
 * We store details in parts or encoded formats to prevent plaintext harvesting.
 */

export const CONTACT_INFO = {
  email: {
    user: "gandbrosteam",
    domain: "gmail.com"
  },
  phone: {
    // Stored in parts to break simple regex scrapers
    country: "+1",
    area: "727",
    prefix: "608",
    line: "9599"
  }
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