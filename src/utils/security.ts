/**
 * Simple utility to prevent web scrapers from harvesting email addresses.
 * We split the email and join it via JS, and provide a helper for mailto links.
 */

export const CONTACT_INFO = {
  email: {
    user: "gandbrosteam",
    domain: "gmail.com"
  },
  phone: {
    display: "+1 727-608-9599",
    raw: "+17276089599"
  }
};

export const getFullEmail = () => `${CONTACT_INFO.email.user}@${CONTACT_INFO.email.domain}`;

export const handleMailTo = (e: React.MouseEvent | React.KeyboardEvent) => {
  e.preventDefault();
  window.location.href = `mailto:${getFullEmail()}`;
};