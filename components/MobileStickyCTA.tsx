"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Show after the user scrolls past the hero, and only when scrolling down.
      if (y > 600 && y > lastY) setShow(true);
      else if (y < lastY - 8 || y < 400) setShow(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // Don't render on /book or /confirmation — the user is already in the flow.
  if (pathname?.startsWith("/book") || pathname?.startsWith("/confirmation")) {
    return null;
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/book"
        className="flex items-center justify-between gap-3 rounded-2xl bg-emerald-700 px-5 py-4 text-white shadow-2xl shadow-emerald-900/30"
      >
        <div>
          <div className="text-sm font-semibold">Book a free trial class</div>
          <div className="text-[11px] text-sand-100/80">
            ⭐ 4.9 · 30-min · No card required
          </div>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
