const steps = [
  {
    n: "01",
    title: "Pick your plan",
    text: "Choose a plan that matches your pace — from 2 to 5 classes a week.",
  },
  {
    n: "02",
    title: "Book a free trial",
    text: "Tell us your name, email and phone. We'll match you with a teacher.",
  },
  {
    n: "03",
    title: "Meet your teacher",
    text: "Take your free 30-minute class on Zoom. No card required.",
  },
  {
    n: "04",
    title: "Start your journey",
    text: "Continue with weekly classes, progress reports and live support.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section bg-emerald-50/60 dark:bg-night-900">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="h-display mt-3">
            From signup to your first class — in under 24 hours.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark dark:hover:bg-night-700"
            >
              <div className="font-display text-3xl font-semibold text-gold-500 dark:text-gold-400">
                {s.n}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-emerald-800 dark:text-sand-50">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-sand-100/70">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
