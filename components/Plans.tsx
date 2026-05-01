"use client";

import Link from "next/link";
import { useState } from "react";
import {
  plans,
  monthlyTotal,
  pricePerClass,
  ANNUAL_DISCOUNT,
} from "@/lib/plans";

type Billing = "monthly" | "annual";

export default function Plans() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="plans" className="section bg-emerald-50/60 dark:bg-night-900">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Subscription Plans</span>
          <h2 className="h-display mt-3">Simple, transparent pricing.</h2>
          <p className="mt-3 text-ink-700 dark:text-sand-100/80">
            Cancel anytime. Your first class is always free — no card required.
          </p>
        </div>

        <BillingToggle value={billing} onChange={setBilling} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const highlight = !!p.highlight;
            const price = monthlyTotal(p, billing);
            const perClass = pricePerClass(p, billing);
            const original = p.monthlyPrice;
            const showSavings = billing === "annual";

            return (
              <div
                key={p.id}
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-soft transition hover:-translate-y-1 dark:bg-night-800 dark:shadow-soft-dark ${
                  highlight
                    ? "border-emerald-700 ring-2 ring-emerald-700/20 dark:border-emerald-400 dark:ring-emerald-400/20"
                    : "border-emerald-900/5 dark:border-night-600"
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-soft dark:bg-emerald-500">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-2xl font-semibold text-emerald-800 dark:text-sand-50">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-sand-100/60">{p.description}</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold text-ink-900 dark:text-sand-50">
                    ${price}
                  </span>
                  <span className="text-sm text-ink-500 dark:text-sand-100/60">/ month</span>
                  {showSavings && (
                    <span className="text-xs text-ink-500 line-through dark:text-sand-100/40">
                      ${original}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
                  ≈ ${perClass} per class · {p.sessionsPerWeek} classes/week ·{" "}
                  {p.minutesPerClass} min
                </div>
                {showSavings && (
                  <div className="mt-1 text-xs font-semibold text-gold-500 dark:text-gold-400">
                    Billed annually — save {Math.round(ANNUAL_DISCOUNT * 100)}%
                  </div>
                )}

                <ul className="mt-6 grid gap-3 text-sm text-ink-700 dark:text-sand-100/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-700 text-white dark:bg-emerald-500">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/book?plan=${p.id}&billing=${billing}`}
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    highlight
                      ? "bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                      : "border border-emerald-700/20 bg-white text-emerald-800 hover:bg-emerald-50 dark:border-emerald-400/30 dark:bg-night-700 dark:text-emerald-300 dark:hover:bg-night-600"
                  }`}
                >
                  Select Plan
                </Link>
                <p className="mt-3 text-center text-[11px] text-ink-500 dark:text-sand-100/50">
                  ⭐ 4.9 from 1,200+ reviews · No card required
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BillingToggle({
  value,
  onChange,
}: {
  value: Billing;
  onChange: (v: Billing) => void;
}) {
  return (
    <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-emerald-900/10 bg-white p-1 shadow-soft dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark">
      {(["monthly", "annual"] as const).map((b) => {
        const active = value === b;
        return (
          <button
            key={b}
            type="button"
            onClick={() => onChange(b)}
            className={`relative rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
              active
                ? "bg-emerald-700 text-white dark:bg-emerald-500"
                : "text-ink-700 hover:text-emerald-700 dark:text-sand-100/80 dark:hover:text-emerald-300"
            }`}
          >
            {b}
            {b === "annual" && (
              <span
                className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  active ? "bg-gold-400 text-emerald-900" : "bg-gold-400/20 text-gold-500 dark:text-gold-400"
                }`}
              >
                SAVE 20%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
