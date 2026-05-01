const faqs = [
  {
    q: "Are your teachers male or female?",
    a: "Both. We have certified male and female teachers — when you book, you can request the gender that fits you or your child best. Sisters and children are usually paired with a female teacher by default.",
  },
  {
    q: "What happens during the free trial class?",
    a: "It's a real 30-minute 1-on-1 lesson over Zoom. The teacher will assess your current level, discuss your goals, and guide you through a sample lesson — Tajweed, recitation, or memorization, depending on what you need. No card, no pressure.",
  },
  {
    q: "Do you teach kids? What's the youngest age?",
    a: "Yes — we teach children from age 5 and up. Our teachers are specially trained to keep kids engaged, with short lessons, games, and small wins each session. Parents get a weekly progress report.",
  },
  {
    q: "What if I'm a complete beginner and don't know any Arabic?",
    a: "Most of our students start exactly there. We begin with the Arabic alphabet (Noorani Qaida), then move into Quran reading, then Tajweed and memorization. Each step is paced to you — no rushing.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. Cancel from your dashboard or by messaging us — your subscription stops at the end of the current billing cycle.",
  },
  {
    q: "How do I pay? Is it secure?",
    a: "We accept Visa, Mastercard, and PayPal. Payments are processed by Stripe — we never see or store your card details. You only pay after your free trial.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-x grid gap-10 md:grid-cols-[1fr,1.4fr] md:items-start">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="h-display mt-3">
            Questions every parent and student asks.
          </h2>
          <p className="mt-4 text-ink-700 dark:text-sand-100/80">
            Still unsure? Message us on WhatsApp — we usually reply within 10
            minutes.
          </p>
        </div>

        <div className="grid gap-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-emerald-900/5 bg-white p-5 shadow-soft transition open:shadow-md dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-semibold text-emerald-800 dark:text-sand-50">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700 transition group-open:rotate-45 dark:bg-emerald-500/15 dark:text-emerald-300">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-sand-100/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
