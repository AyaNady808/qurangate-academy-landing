"use client";

import { useSearchParams } from "next/navigation";
import { findPlan } from "@/lib/plans";

export default function ConfirmationContent() {
  const params = useSearchParams();
  const plan = findPlan(params.get("plan"));
  const name = params.get("name") ?? "";
  const firstName = name.trim().split(" ")[0];

  return (
    <>
      <h1 className="mt-6 font-display text-3xl font-semibold text-emerald-800 dark:text-sand-50 sm:text-4xl">
        {firstName ? `JazakAllahu khayran, ${firstName}!` : "JazakAllahu khayran!"}
      </h1>
      <p className="mt-3 text-ink-700 dark:text-sand-100/80">
        Your booking is confirmed. One of our coordinators will contact you
        within 24 hours to schedule your free trial class.
      </p>

      {plan && (
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-200">
          Selected plan:&nbsp;<span className="font-semibold">{plan.name}</span> —{" "}
          ${plan.monthlyPrice}
          <span className="text-xs text-ink-500 dark:text-sand-100/50"> / mo</span>
        </div>
      )}

      <div className="mt-8 grid gap-3 text-left text-sm text-ink-700 dark:text-sand-100/80 sm:grid-cols-3">
        {[
          { t: "1", h: "We call you", p: "A coordinator confirms your time zone and schedule." },
          { t: "2", h: "We match a teacher", p: "Certified, vetted, and matched to your goals." },
          { t: "3", h: "Free class on Zoom", p: "30 minutes, 1-on-1, no card required." },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl bg-sand-50 p-4 dark:bg-night-700">
            <div className="font-display text-2xl font-semibold text-gold-500 dark:text-gold-400">
              {s.t}
            </div>
            <div className="mt-1 font-semibold text-emerald-800 dark:text-sand-50">{s.h}</div>
            <div className="mt-1 text-xs text-ink-500 dark:text-sand-100/60">{s.p}</div>
          </div>
        ))}
      </div>
    </>
  );
}
