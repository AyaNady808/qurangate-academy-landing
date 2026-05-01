import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-800 p-10 text-center shadow-soft sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(40% 60% at 20% 0%, rgba(212,175,106,0.6), transparent 60%), radial-gradient(40% 60% at 100% 100%, rgba(212,175,106,0.5), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Begin your Quran journey today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sand-100/90">
              Join 4,000+ students worldwide. Your first 30-minute class is on us
              — no credit card needed.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-emerald-900 shadow-soft transition hover:bg-gold-500"
              >
                Book Free Trial
              </Link>
              <Link
                href="/#plans"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                See Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
