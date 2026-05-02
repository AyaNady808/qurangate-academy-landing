import Link from "next/link";
import { contact, whatsappUrl, telUrl } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/5 bg-sand-100/60 dark:border-night-600 dark:bg-night-900">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="block h-12 w-12 rounded-full shadow-soft ring-1 ring-emerald-700/10 dark:shadow-soft-dark dark:ring-emerald-400/15"
              style={{
                backgroundImage: "url(/logo.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <span className="font-display text-lg font-semibold text-emerald-800 dark:text-sand-50">
              QuranGate <span className="text-gold-500 dark:text-gold-400">Academy</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-500 dark:text-sand-100/60">
            Authentic Quran learning, delivered 1-on-1 by certified teachers —
            from anywhere in the world.
          </p>
        </div>

        <FooterCol
          title="Academy"
          links={[
            { label: "About", href: "/#about" },
            { label: "How it works", href: "/#how" },
            { label: "Features", href: "/#features" },
            { label: "Reviews", href: "/#testimonials" },
          ]}
        />

        <FooterCol
          title="Get started"
          links={[
            { label: "Plans", href: "/#plans" },
            { label: "Book free trial", href: "/book" },
            { label: "FAQ", href: "/#how" },
          ]}
        />

        <FooterCol
          title="Contact"
          links={[
            { label: contact.email, href: `mailto:${contact.email}` },
            { label: contact.phoneDisplay, href: telUrl },
            { label: "WhatsApp", href: whatsappUrl(), external: true },
            { label: "Instagram", href: "#" },
          ]}
        />
      </div>

      <div className="border-t border-emerald-900/5 dark:border-night-600">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-500 dark:text-sand-100/50 sm:flex-row">
          <div>© {new Date().getFullYear()} QuranGate Academy. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-emerald-700 dark:hover:text-emerald-300">Privacy</Link>
            <Link href="#" className="hover:text-emerald-700 dark:hover:text-emerald-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
        {title}
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-ink-700 dark:text-sand-100/75">
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className="hover:text-emerald-700 dark:hover:text-emerald-300">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
