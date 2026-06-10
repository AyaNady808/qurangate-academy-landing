import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book a Free Trial · QuranGate Academy",
};

export default function BookPage() {
  return (
    <section className="section">
      <div className="container-x grid gap-10 md:grid-cols-[1fr,1.2fr] md:items-start">
        <div>
          <span className="eyebrow">Free Trial</span>
          <h1 className="h-display mt-3">Book your free 30-min class.</h1>
          <p className="mt-4 text-ink-700 dark:text-sand-100/80">
            Pick a plan, choose your teacher, and tap WhatsApp — we&apos;ll
            match you with a certified teacher within 24 hours. No forms, no
            card needed.
          </p>

          <ul className="mt-8 grid gap-3 text-sm text-ink-700 dark:text-sand-100/80">
            {[
              "Free 30-minute trial",
              "1-on-1 with a certified teacher",
              "No credit card required",
              "Cancel anytime",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-700 text-white dark:bg-emerald-500">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <Suspense fallback={<div className="rounded-3xl bg-white p-8 shadow-soft dark:bg-night-800 dark:text-sand-50 dark:shadow-soft-dark">Loading…</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </section>
  );
}
