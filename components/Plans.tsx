"use client";

import Link from "next/link";
import { useState } from "react";
import {
  plans,
  monthlyTotal,
  pricePerClass,
  sharedBenefits,
  ANNUAL_DISCOUNT,
  type PlanColor,
} from "@/lib/plans";
import { whatsappUrl } from "@/lib/contact";

const customPlanMessage =
  "Assalamu alaikum, I'd like a customized plan tailored to my schedule. Can you help?";

type Billing = "monthly" | "annual";

const themeMap: Record<
  PlanColor,
  { header: string; button: string; ring: string }
> = {
  blue: {
    header: "bg-gradient-to-br from-sky-500 to-blue-600",
    button:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500/40",
    ring: "ring-blue-500/30 border-blue-500",
  },
  green: {
    header: "bg-gradient-to-br from-green-500 to-emerald-600",
    button:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500/40",
    ring: "ring-green-500/30 border-green-500",
  },
  emerald: {
    header: "bg-gradient-to-br from-emerald-500 to-teal-600",
    button:
      "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-500/40",
    ring: "ring-emerald-500/30 border-emerald-500",
  },
  purple: {
    header: "bg-gradient-to-br from-purple-500 to-violet-600",
    button:
      "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500/40",
    ring: "ring-purple-500/30 border-purple-500",
  },
  orange: {
    header: "bg-gradient-to-br from-orange-500 to-red-500",
    button:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500/40",
    ring: "ring-orange-500/30 border-orange-500",
  },
};

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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((p) => {
            const theme = themeMap[p.color];
            const price = monthlyTotal(p, billing);
            const perClass = pricePerClass(p, billing);
            const original = p.monthlyPrice;
            const showSavings = billing === "annual";
            const highlight = !!p.highlight;

            return (
              <div
                key={p.id}
                className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-soft transition hover:-translate-y-1 dark:bg-night-800 dark:shadow-soft-dark ${
                  highlight
                    ? `${theme.ring} ring-2`
                    : "border-emerald-900/5 dark:border-night-600"
                }`}
              >
                {highlight && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-soft">
                    Most Popular
                  </span>
                )}

                <div
                  className={`${theme.header} px-5 py-7 text-center text-white`}
                >
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl font-bold leading-none">
                      ${price}
                    </span>
                    <span className="text-sm font-medium opacity-90">
                      /month
                    </span>
                  </div>
                  {showSavings && (
                    <div className="mt-1 text-xs font-medium text-white/80 line-through">
                      ${original}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-5 py-6">
                  <div className="flex items-center justify-center gap-2 text-emerald-800 dark:text-sand-50">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 11a4 4 0 100-8 4 4 0 000 8zM8 21v-2a4 4 0 014-4h0M2 21v-2a4 4 0 014-4h0" />
                    </svg>
                    <h3 className="font-display text-base font-semibold">
                      {p.title}
                    </h3>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-ink-500 dark:text-sand-100/60">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 8v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {p.minutesPerClass} Minutes class
                  </div>

                  <ul className="mt-5 grid flex-1 gap-2.5 text-sm text-ink-700 dark:text-sand-100/80">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-2.5 w-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                          >
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </span>
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {showSavings && (
                    <div className="mt-4 text-center text-[11px] font-semibold text-gold-500 dark:text-gold-400">
                      ≈ ${perClass}/class · Save {Math.round(ANNUAL_DISCOUNT * 100)}%
                    </div>
                  )}

                  <Link
                    href={`/book?plan=${p.id}&billing=${billing}`}
                    className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition focus:outline-none focus:ring-2 ${theme.button}`}
                  >
                    Choose {p.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-emerald-700/20 bg-gradient-to-br from-emerald-700 to-emerald-900 p-7 shadow-soft sm:p-9 dark:border-emerald-400/20">
          <div className="grid items-center gap-6 sm:grid-cols-[1fr,auto]">
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Customized Plan
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                Need something tailored?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-emerald-50/90">
                Different schedule, multiple children, or a specific goal? Message
                us and we&apos;ll build a plan around you — pricing is custom and
                discussed on WhatsApp.
              </p>
            </div>
            <a
              href={whatsappUrl(customPlanMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#1ebe57] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 active:translate-y-px"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M17.6 6.32A8.78 8.78 0 0011.5 3.5 8.84 8.84 0 002.7 12.4a8.7 8.7 0 001.18 4.42L2.5 21.5l4.78-1.25a8.84 8.84 0 004.22 1.08h0a8.84 8.84 0 008.84-8.83 8.78 8.78 0 00-2.74-6.18zm-6.1 13.6a7.34 7.34 0 01-3.74-1l-.27-.16-2.83.74.75-2.76-.18-.28a7.34 7.34 0 1112.95-4.6 7.35 7.35 0 01-6.68 8.07zm4.03-5.5c-.22-.11-1.3-.64-1.5-.72s-.35-.11-.5.11-.57.72-.7.86-.25.17-.47.06a6.02 6.02 0 01-1.77-1.1 6.67 6.67 0 01-1.23-1.52c-.13-.22 0-.34.1-.45.1-.1.22-.25.33-.38.11-.13.14-.22.22-.36s.04-.27-.02-.38-.5-1.2-.68-1.65c-.18-.43-.36-.37-.5-.38h-.42a.81.81 0 00-.58.27 2.45 2.45 0 00-.77 1.83 4.25 4.25 0 00.89 2.26 9.74 9.74 0 003.72 3.28c.52.22.93.36 1.25.46a3 3 0 001.38.09 2.26 2.26 0 001.49-1.05 1.85 1.85 0 00.13-1.05c-.06-.1-.2-.16-.42-.27z" />
              </svg>
              Choose Customized Plan
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-soft dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark">
          <div className="flex items-center justify-center gap-2 text-emerald-800 dark:text-sand-50">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22a10 10 0 100-20 10 10 0 000 20zM2 12h20M12 2a14 14 0 010 20M12 2a14 14 0 000 20" />
            </svg>
            <h3 className="font-display text-lg font-semibold">
              All Plans Include:
            </h3>
          </div>
          <ul className="mx-auto mt-4 grid max-w-2xl gap-3 text-sm text-ink-700 dark:text-sand-100/80 sm:grid-cols-2">
            {sharedBenefits.map((b) => (
              <li key={b} className="flex items-center justify-center gap-2">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
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
                {b}
              </li>
            ))}
          </ul>
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
