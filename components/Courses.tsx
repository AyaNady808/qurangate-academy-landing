import Link from "next/link";

type Level = "Beginner" | "Intermediate" | "All Levels";

const levelStyles: Record<Level, string> = {
  Beginner:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  Intermediate:
    "bg-gold-400/20 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300",
  "All Levels":
    "bg-emerald-700/10 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-200",
};

const courses: {
  title: string;
  level: Level;
  audience: string;
  summary: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Noor Al-Bayan",
    level: "Beginner",
    audience: "Kids & New Learners",
    summary:
      "Build strong Quran reading fluency from the ground up — letter recognition, pronunciation, and the basics of tajweed.",
    icon: (
      <path d="M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5zm4 3h8M8 12h8" />
    ),
  },
  {
    title: "Tahzib Al-Lisan (Tajweed)",
    level: "Intermediate",
    audience: "All Ages",
    summary:
      "Refine your articulation and master tajweed rules to recite the Qur'an with accuracy, fluency, and spiritual beauty.",
    icon: (
      <path d="M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3zM5 11a7 7 0 0014 0M12 18v3" />
    ),
  },
  {
    title: "Tafsir As-Sa'dy (English)",
    level: "All Levels",
    audience: "English Speakers",
    summary:
      "Explore the meanings of the Qur'an in clear, accessible English — deepen your understanding verse by verse.",
    icon: (
      <path d="M12 3l8 4v6c0 4-3.6 7.2-8 8-4.4-.8-8-4-8-8V7l8-4zm-3 9l2.2 2.2L15 10" />
    ),
  },
  {
    title: "Qur'an for Adults — Full Track",
    level: "All Levels",
    audience: "Adults",
    summary:
      "A complete adult program covering reading, tajweed, memorization, and understanding — paced to your level and goals.",
    icon: (
      <path d="M3 9l9-4 9 4-9 4-9-4zm4 2.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5M21 9v6" />
    ),
  },
  {
    title: "Qur'an for Kids — Full Track",
    level: "All Levels",
    audience: "Kids",
    summary:
      "A full kids' track with reading, basic tajweed, and gradual memorization — wrapped in interactive lessons that keep young learners engaged.",
    icon: (
      <path d="M12 2l2.5 5 5.5.8-4 3.9 1 5.5L12 14.8 7 17.2l1-5.5-4-3.9 5.5-.8L12 2z" />
    ),
  },
  {
    title: "Arabic Conversation",
    level: "All Levels",
    audience: "All Ages",
    summary:
      "Build practical speaking and listening skills through real-life dialogues, vocabulary, and cultural tips for everyday Arabic.",
    icon: (
      <path d="M4 5h13a2 2 0 012 2v7a2 2 0 01-2 2h-4l-4 4v-4H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
    ),
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section bg-emerald-50/40 dark:bg-night-900">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Courses</span>
          <h2 className="h-display mt-3">
            Programs for every stage of your Quran journey.
          </h2>
          <p className="mt-3 text-ink-700 dark:text-sand-100/80">
            From your very first letters to deep Quranic understanding — pick the
            track that fits you or your child.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <Link
              key={c.title}
              href={`/book?course=${encodeURIComponent(c.title)}`}
              className="group relative flex flex-col rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-emerald-700/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/40 dark:border-night-600 dark:bg-night-800 dark:shadow-soft-dark dark:hover:border-emerald-400/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white dark:bg-emerald-500/15 dark:text-emerald-300 dark:group-hover:bg-emerald-500 dark:group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {c.icon}
                  </svg>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${levelStyles[c.level]}`}
                >
                  {c.level}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-emerald-800 dark:text-sand-50">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-sand-100/70">
                {c.summary}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-emerald-900/5 pt-4 text-xs dark:border-night-600/70">
                <span className="inline-flex items-center gap-1.5 text-ink-500 dark:text-sand-100/60">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0H5z" />
                  </svg>
                  {c.audience}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 transition group-hover:gap-2 dark:text-emerald-300">
                  Start free trial
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
