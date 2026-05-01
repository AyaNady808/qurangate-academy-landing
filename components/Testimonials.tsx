const testimonials = [
  {
    name: "Aisha M.",
    location: "London, UK",
    text: "My daughter went from struggling to recite to memorizing Surah Al-Mulk in 3 months. The teacher is patient and kind — exactly what we needed.",
  },
  {
    name: "Yusuf R.",
    location: "Toronto, Canada",
    text: "I'm 34 and finally learning Tajweed properly. The 1-on-1 format is a game changer. Worth every penny, alhamdulillah.",
  },
  {
    name: "Fatima K.",
    location: "Dubai, UAE",
    text: "We tried 3 other academies before this one. QuranGate is on a different level — professional, structured and the teachers truly care.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">What families say</span>
          <h2 className="h-display mt-3">
            Real stories from real students.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-emerald-900/5 bg-white p-7 shadow-soft dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark"
            >
              <div className="flex items-center gap-0.5 text-gold-500 dark:text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-ink-700 dark:text-sand-100/80">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 font-semibold text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900 dark:text-sand-50">{t.name}</div>
                  <div className="text-xs text-ink-500 dark:text-sand-100/60">{t.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
