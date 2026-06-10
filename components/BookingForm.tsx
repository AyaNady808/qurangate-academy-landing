"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { plans, findPlan } from "@/lib/plans";
import { whatsappUrl } from "@/lib/contact";

type Gender = "male" | "female";

const courseOptions = [
  "Noor Al-Bayan",
  "Tahzib Al-Lisan (Tajweed)",
  "Tafsir As-Sa'dy (English)",
  "Qur'an for Adults — Full Track",
  "Qur'an for Kids — Full Track",
  "Arabic Conversation",
];

export default function BookingForm() {
  const params = useSearchParams();
  const initialPlanId = params.get("plan") ?? "plan-c";
  const initialCourse = params.get("course") ?? "";

  const [planId, setPlanId] = useState(initialPlanId);
  const [course, setCourse] = useState(
    courseOptions.includes(initialCourse) ? initialCourse : ""
  );
  const [gender, setGender] = useState<Gender | "">("");

  const selected = useMemo(
    () => findPlan(planId) ?? plans[2],
    [planId]
  );

  const ready = gender !== "" && course !== "";
  const teacherLabel = gender === "female" ? "Female" : "Male";
  const message = [
    "Assalamu alaikum, I'd like to book a free trial class.",
    "",
    `Course: ${course}`,
    `Plan: ${selected.name} — ${selected.title} ($${selected.monthlyPrice}/month)`,
    `Teacher preference: ${teacherLabel} teacher`,
    "",
    "JazakAllahu khayran.",
  ].join("\n");

  return (
    <div className="rounded-3xl border border-emerald-900/5 bg-white p-7 shadow-soft sm:p-9 dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark">
      <label
        htmlFor="course"
        className="block text-sm font-medium text-ink-900 dark:text-sand-50"
      >
        Choose a course
      </label>
      <div className="relative mt-2">
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full appearance-none rounded-2xl border border-emerald-900/10 bg-sand-50 px-4 py-3 pr-10 text-sm text-ink-900 outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-700/20 dark:border-night-600 dark:bg-night-900 dark:text-sand-50 dark:focus:border-emerald-400 dark:focus:bg-night-700 dark:focus:ring-emerald-400/20"
        >
          <option value="" disabled>
            Select the course you want to learn…
          </option>
          {courseOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500 dark:text-sand-100/60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      <label className="mt-6 block text-sm font-medium text-ink-900 dark:text-sand-50">
        Selected plan
      </label>
      <div className="mt-2 grid gap-2">
        {plans.map((p) => {
          const active = p.id === planId;
          return (
            <button
              type="button"
              key={p.id}
              onClick={() => setPlanId(p.id)}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                active
                  ? "border-emerald-700 bg-emerald-50 ring-2 ring-emerald-700/20 dark:border-emerald-400 dark:bg-emerald-500/10 dark:ring-emerald-400/20"
                  : "border-emerald-900/10 hover:border-emerald-700/40 dark:border-night-600 dark:hover:border-emerald-400/40"
              }`}
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  {p.name}
                </div>
                <div className="mt-0.5 text-sm text-ink-700 dark:text-sand-100/80">
                  {p.title}
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-lg font-semibold text-ink-900 dark:text-sand-50">
                  ${p.monthlyPrice}
                  <span className="text-xs font-normal text-ink-500 dark:text-sand-100/60">
                    {" "}/ mo
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-ink-900 dark:text-sand-50">
          Teacher preference
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <GenderOption
            active={gender === "male"}
            onClick={() => setGender("male")}
            icon={
              <path d="M16 4h4v4M20 4l-6 6M10 10a6 6 0 100 12 6 6 0 000-12z" />
            }
            label="Male teacher"
          />
          <GenderOption
            active={gender === "female"}
            onClick={() => setGender("female")}
            icon={
              <path d="M12 2a5 5 0 00-1 9.9V14H8v2h3v3h2v-3h3v-2h-3v-2.1A5 5 0 0012 2z" />
            }
            label="Female teacher"
          />
        </div>
        <p className="mt-2 text-xs text-ink-500 dark:text-sand-100/60">
          Female teachers are recommended for sisters and young children.
        </p>
      </div>

      {ready ? (
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#1ebe57] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 active:translate-y-px"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send booking on WhatsApp
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="mt-7 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-emerald-700/40 px-6 py-3 text-sm font-semibold text-white opacity-80 dark:bg-emerald-500/30"
        >
          {course === ""
            ? "Choose a course to continue"
            : "Choose a teacher preference to continue"}
        </button>
      )}

      <p className="mt-4 text-center text-xs text-ink-500 dark:text-sand-100/60">
        We&apos;ll reply within minutes to confirm your time and teacher — no
        card required.
      </p>
    </div>
  );
}

function GenderOption({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
        active
          ? "border-emerald-700 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-700/20 dark:border-emerald-400 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-400/20"
          : "border-emerald-900/10 text-ink-700 hover:border-emerald-700/40 dark:border-night-600 dark:text-sand-100/80 dark:hover:border-emerald-400/40"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon}
      </svg>
      {label}
    </button>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.6 6.32A8.78 8.78 0 0011.5 3.5 8.84 8.84 0 002.7 12.4a8.7 8.7 0 001.18 4.42L2.5 21.5l4.78-1.25a8.84 8.84 0 004.22 1.08h0a8.84 8.84 0 008.84-8.83 8.78 8.78 0 00-2.74-6.18zm-6.1 13.6a7.34 7.34 0 01-3.74-1l-.27-.16-2.83.74.75-2.76-.18-.28a7.34 7.34 0 1112.95-4.6 7.35 7.35 0 01-6.68 8.07zm4.03-5.5c-.22-.11-1.3-.64-1.5-.72s-.35-.11-.5.11-.57.72-.7.86-.25.17-.47.06a6.02 6.02 0 01-1.77-1.1 6.67 6.67 0 01-1.23-1.52c-.13-.22 0-.34.1-.45.1-.1.22-.25.33-.38.11-.13.14-.22.22-.36s.04-.27-.02-.38-.5-1.2-.68-1.65c-.18-.43-.36-.37-.5-.38h-.42a.81.81 0 00-.58.27 2.45 2.45 0 00-.77 1.83 4.25 4.25 0 00.89 2.26 9.74 9.74 0 003.72 3.28c.52.22.93.36 1.25.46a3 3 0 001.38.09 2.26 2.26 0 001.49-1.05 1.85 1.85 0 00.13-1.05c-.06-.1-.2-.16-.42-.27z" />
    </svg>
  );
}
