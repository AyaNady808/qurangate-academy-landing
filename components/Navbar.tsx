"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#plans", label: "Plans" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition ${
        scrolled
          ? "border-b border-emerald-900/5 bg-sand-50/85 backdrop-blur dark:border-night-600/60 dark:bg-night-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="block h-10 w-10 rounded-lg bg-white shadow-soft ring-1 ring-emerald-900/5 dark:ring-emerald-400/10"
            style={{
              backgroundImage: "url(/logo.jpg)",
              backgroundSize: "165%",
              backgroundPosition: "50% 24%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <span className="font-display text-lg font-semibold text-emerald-800 dark:text-sand-50">
            QuranGate <span className="text-gold-500 dark:text-gold-400">Academy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-700 transition hover:text-emerald-700 dark:text-sand-100/80 dark:hover:text-emerald-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/book" className="btn-primary">
            Book Free Trial
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-emerald-900/10 bg-white/60 dark:border-emerald-400/20 dark:bg-night-800/70 dark:text-sand-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="container-x grid gap-2 pb-5 pt-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-ink-700 hover:bg-white dark:text-sand-100 dark:hover:bg-night-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
