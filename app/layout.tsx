import type { Metadata } from "next";
import { Fraunces, Inter, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "QuranGate Academy — Learn Quran with Certified Teachers",
  description:
    "1-on-1 online Quran, Tajweed, Arabic and Islamic Studies for kids and adults. Trusted by families worldwide.",
};

// Runs before any React hydration. Reads saved theme (or system preference)
// and adds the `.dark` class to <html> synchronously — so there's no flash.
const themeBootstrap = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = saved ? saved === 'dark' : sysDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${amiri.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-screen bg-sand-50 font-sans text-ink-900 antialiased dark:bg-night-950 dark:text-sand-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
