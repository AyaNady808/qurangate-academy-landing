export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="eyebrow">About QuranGate</span>
          <h2 className="h-display mt-3">
            A premium Quran academy, built around your family.
          </h2>
          <p className="mt-5 text-ink-700 dark:text-sand-100/80 sm:text-lg">
            We started QuranGate with one goal — make authentic Quran learning
            easy, joyful and accessible for Muslims everywhere. Every teacher on
            our platform is certified in Tajweed, vetted carefully, and trained
            to teach both children and adults.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-ink-700 dark:text-sand-100/80">
            {[
              "Ijazah-certified teachers from Al-Azhar",
              "1-on-1 private classes — never grouped",
              "Flexible scheduling across all time zones",
              "Female teachers available for sisters and kids",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-700 text-white dark:bg-emerald-500">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Stat n="4,000+" label="Active students" />
          <Stat n="120+" label="Certified teachers" />
          <Stat n="40+" label="Countries served" />
          <Stat n="4.9★" label="Average rating" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-soft dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark">
      <div className="font-display text-3xl font-semibold text-emerald-700 dark:text-gold-400">{n}</div>
      <div className="mt-1 text-sm text-ink-500 dark:text-sand-100/60">{label}</div>
    </div>
  );
}
