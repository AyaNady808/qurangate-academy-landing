const features = [
  {
    title: "Certified Teachers",
    text: "Every teacher holds an Ijazah and is rigorously trained — no untrained tutors.",
    icon: (
      <path d="M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 16.8 6.5 19.5l1-6.2L3 8.9 9 8l3-6z" />
    ),
  },
  {
    title: "1-on-1 Classes",
    text: "Private classes only. Your teacher is fully focused on you or your child.",
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0H5z" />,
  },
  {
    title: "Tajweed Mastery",
    text: "Read the Quran the way it was revealed — letter by letter, with proper rules.",
    icon: <path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4V4z" />,
  },
  {
    title: "Hifz Tracking",
    text: "Memorization plans with weekly review, recordings and progress reports.",
    icon: <path d="M3 5h13l5 5v9H3V5zm6 6h6m-6 4h8" />,
  },
  {
    title: "Female Teachers",
    text: "Female teachers available for sisters and children — booked in seconds.",
    icon: <path d="M12 2a5 5 0 00-1 9.9V14H8v2h3v3h2v-3h3v-2h-3v-2.1A5 5 0 0012 2z" />,
  },
  {
    title: "Flexible Schedule",
    text: "Choose times that fit your family — early morning, evenings, weekends.",
    icon: <path d="M12 8v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Why families choose us</span>
          <h2 className="h-display mt-3">
            Everything you need for a serious Quran journey.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-800 dark:text-sand-50">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-sand-100/70">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
