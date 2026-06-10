import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft ambient gradient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, rgba(47,122,82,0.18), transparent 60%), radial-gradient(40% 40% at 90% 10%, rgba(212,175,106,0.18), transparent 60%)",
        }}
      />
      {/* Faint geometric pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><path d='M30 0L60 30L30 60L0 30Z M30 10L50 30L30 50L10 30Z' fill='none' stroke='%23D4AF6A' stroke-width='1'/></svg>")`,
        }}
      />

      <div className="container-x grid gap-10 pt-14 pb-12 md:grid-cols-[1.1fr,1fr] md:items-center md:pt-24 md:pb-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-emerald-800 backdrop-blur dark:border-emerald-400/20 dark:bg-night-800/70 dark:text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            Trusted by 4,000+ families in 40+ countries
          </div>

          <p className="mt-5 font-arabic text-2xl text-emerald-700/90 sm:text-3xl dark:text-gold-400" dir="rtl">
            ٱقْرَأْ بِٱسْمِ رَبِّكَ
          </p>

          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-emerald-800 dark:text-sand-50 sm:text-5xl md:text-6xl">
            Master the Quran with a{" "}
            <span className="text-gold-500 dark:text-gold-400">1-on-1 certified teacher</span>{" "}
            — from anywhere.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 dark:text-sand-100/80 sm:text-lg">
            Tajweed, memorization (Hifz), Arabic and Islamic Studies — for kids
            and adults. Your first 30-minute class is free. No credit card.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/book" className="btn-primary">
              Book a Free Trial Class
            </Link>
            <Link href="/#plans" className="btn-ghost">
              See Plans
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500 dark:text-sand-100/70">
            <div className="flex items-center gap-2">
              <Stars />
              <span>4.9/5 · 1,200+ reviews</span>
            </div>
            <Bullet text="No card required" />
            <Bullet text="Cancel anytime" />
          </div>

          {/* Trust bar */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-wider text-ink-500 dark:text-sand-100/50">
            <span>As featured in</span>
            <span className="text-ink-700 dark:text-sand-100">Al-Azhar Network</span>
            <span className="text-ink-700 dark:text-sand-100">Quran.com Partners</span>
          </div>
        </div>

        <div className="relative">
          {/* Mihrab arch frame */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[180px] rounded-b-3xl bg-gradient-to-br from-emerald-700 to-emerald-800 p-1 shadow-soft">
              <div className="relative grid h-full w-full place-items-center rounded-t-[176px] rounded-b-[20px] bg-[linear-gradient(135deg,#143824,#1C4B32_55%,#2F7A52)]">
                {/* decorative geometric ring */}
                <div
                  aria-hidden
                  className="absolute inset-6 rounded-t-[160px] rounded-b-2xl border border-gold-400/15"
                />
                <div
                  aria-hidden
                  className="absolute inset-10 rounded-t-[150px] rounded-b-xl border border-gold-400/10"
                />

                <div className="relative flex w-full flex-col items-center px-6 text-center">
                  <div
                    className="font-arabic text-2xl font-bold leading-[1.6] text-gold-400 sm:text-3xl"
                    dir="rtl"
                    lang="ar"
                  >
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                  </div>
                  <p className="mt-7 max-w-[85%] font-display text-base italic text-sand-100 sm:text-lg">
                    &quot;The best of you are those who learn the Quran and teach it.&quot;
                  </p>
                  <p className="mt-3 text-xs text-sand-200/80 sm:text-sm">— Sahih al-Bukhari</p>
                </div>
              </div>
            </div>

            <FloatingCard
              className="-left-2 top-10 sm:-left-6"
              title="Live class"
              value="Sarah · Tajweed"
              dot
            />
            <FloatingCard
              className="-right-2 bottom-12 sm:-right-6"
              title="Progress this week"
              value="Surah Al-Mulk · 78%"
            />
            <FloatingCard
              className="left-1/2 -bottom-4 -translate-x-1/2"
              title="Free trial"
              value="Booked in 2 min"
              compact
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  title,
  value,
  className = "",
  dot,
  compact,
}: {
  title: string;
  value: string;
  className?: string;
  dot?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`absolute hidden rounded-2xl border border-emerald-900/5 bg-white/95 shadow-soft backdrop-blur sm:block dark:border-night-600 dark:bg-night-800/95 dark:shadow-soft-dark ${
        compact ? "px-3 py-2" : "px-4 py-3"
      } ${className}`}
    >
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
        {dot && <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />}
        {title}
      </div>
      <div className={`mt-1 font-medium text-ink-900 dark:text-sand-50 ${compact ? "text-xs" : "text-sm"}`}>
        {value}
      </div>
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-700 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12l5 5L20 7" />
      </svg>
      {text}
    </span>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
