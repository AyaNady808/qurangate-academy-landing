"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { plans, findPlan } from "@/lib/plans";

export default function BookingForm() {
  const router = useRouter();
  const params = useSearchParams();
  const initialPlanId = params.get("plan") ?? "standard";

  const [planId, setPlanId] = useState(initialPlanId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = useMemo(() => findPlan(planId) ?? plans[1], [planId]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    // Simulate a network call. Replace with a real API later.
    await new Promise((r) => setTimeout(r, 900));

    const query = new URLSearchParams({
      plan: selected.id,
      name,
    }).toString();

    router.push(`/confirmation?${query}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-emerald-900/5 bg-white p-7 shadow-soft sm:p-9 dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark"
    >
      <label className="block text-sm font-medium text-ink-900 dark:text-sand-50">
        Selected plan
      </label>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {plans.map((p) => {
          const active = p.id === planId;
          return (
            <button
              type="button"
              key={p.id}
              onClick={() => setPlanId(p.id)}
              className={`rounded-2xl border px-4 py-3 text-left transition ${
                active
                  ? "border-emerald-700 bg-emerald-50 ring-2 ring-emerald-700/20 dark:border-emerald-400 dark:bg-emerald-500/10 dark:ring-emerald-400/20"
                  : "border-emerald-900/10 hover:border-emerald-700/40 dark:border-night-600 dark:hover:border-emerald-400/40"
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                {p.name}
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-sand-50">
                ${p.monthlyPrice}
                <span className="text-xs font-normal text-ink-500 dark:text-sand-100/60"> / mo</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5">
        <Field
          label="Full name"
          value={name}
          onChange={setName}
          placeholder="Ahmed Hassan"
          autoComplete="name"
        />
        <Field
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="ahmed@example.com"
          autoComplete="email"
        />
        <Field
          label="Phone (with country code)"
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="+44 7700 900000"
          autoComplete="tel"
        />
      </div>

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/15 dark:text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <span className="flex items-center gap-2">
            <Spinner /> Booking your trial…
          </span>
        ) : (
          `Confirm booking — ${selected.name} plan`
        )}
      </button>

      <p className="mt-4 text-center text-xs text-ink-500 dark:text-sand-100/50">
        By submitting, you agree to be contacted about your free trial. We will
        never share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-900 dark:text-sand-50">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-emerald-900/10 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/20 dark:border-night-600 dark:bg-night-900 dark:text-sand-50 dark:placeholder:text-sand-100/30 dark:focus:border-emerald-400 dark:focus:bg-night-700 dark:focus:ring-emerald-400/20"
      />
    </label>
  );
}

function Spinner() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 animate-spin"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M21 12a9 9 0 11-9-9" strokeLinecap="round" />
    </svg>
  );
}
