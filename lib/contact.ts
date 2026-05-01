// Edit this file to change phone, WhatsApp, or email everywhere on the site.

export const contact = {
  phoneDisplay: "+20 010 6582 2515",
  // International format, no spaces, no plus — used for tel: and wa.me links.
  phoneIntl: "201065822515",
  email: "hello@qurangate.com",
  whatsappPrefill:
    "Assalamu alaikum, I'd like to know more about QuranGate Academy.",
};

export const whatsappUrl = (msg: string = contact.whatsappPrefill) =>
  `https://wa.me/${contact.phoneIntl}?text=${encodeURIComponent(msg)}`;

export const telUrl = `tel:+${contact.phoneIntl}`;
