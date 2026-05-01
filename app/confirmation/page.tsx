import Link from "next/link";
import { Suspense } from "react";
import ConfirmationContent from "@/components/ConfirmationContent";
import { whatsappUrl } from "@/lib/contact";

export const metadata = {
  title: "Booking Confirmed · QuranGate Academy",
};

export default function ConfirmationPage() {
  return (
    <section className="section">
      <div className="container-x max-w-2xl">
        <div className="rounded-3xl border border-emerald-900/5 bg-white p-10 text-center shadow-soft sm:p-14 dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-700 text-white dark:bg-emerald-500">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>

          <Suspense fallback={<div className="mt-6 text-ink-500 dark:text-sand-100/60">Loading…</div>}>
            <ConfirmationContent />
          </Suspense>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn-ghost">
              Back to home
            </Link>
            <a
              href={whatsappUrl("Assalamu alaikum, I just booked a free trial. Looking forward to it!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
