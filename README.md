# QuranGate Academy — Landing Page

A premium landing page built with **Next.js 14 (App Router) + Tailwind CSS + TypeScript**.

This guide is written for someone who has **never built a web project before**.
If you can copy-paste a command and click a few buttons, you can run and deploy this.

---

## ✅ What's included

- Sticky responsive **navbar** with mobile menu
- **Hero** section with strong CTA
- **About** with stats
- **How it works** (4 steps)
- **Features** (6 cards)
- **Subscription Plans** (3 plans, "Most Popular" badge)
- **Booking flow**: `/book` → loading → `/confirmation`
- **Testimonials**
- **CTA** banner
- **Footer**

---

## 🧱 Folder Structure (read this first)

In Flutter you have `lib/` with `main.dart`. In Next.js the equivalents are below.

```
qurangate-academy-landing/
├── app/                    ← every URL is a folder in here
│   ├── layout.tsx          ← like a "wrapper" widget around all pages (Navbar + Footer live here)
│   ├── page.tsx            ← the home page  (URL: /)
│   ├── globals.css         ← global styles + Tailwind
│   ├── book/
│   │   └── page.tsx        ← URL: /book
│   └── confirmation/
│       └── page.tsx        ← URL: /confirmation
│
├── components/             ← reusable UI pieces (like Flutter widgets)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Plans.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── BookingForm.tsx          ← the form on /book (client component)
│   └── ConfirmationContent.tsx  ← reads ?plan=&name= on /confirmation
│
├── lib/
│   └── plans.ts            ← 👈 EDIT PRICING HERE
│
├── tailwind.config.ts      ← 👈 EDIT COLORS HERE
├── package.json            ← project dependencies (like pubspec.yaml)
├── tsconfig.json           ← TypeScript settings
├── next.config.js          ← Next.js settings
└── postcss.config.js       ← needed for Tailwind
```

### Quick mental model

- A **page** = a file called `page.tsx` inside a folder. The folder name **becomes the URL**.
  - `app/page.tsx` → `/`
  - `app/book/page.tsx` → `/book`
  - `app/confirmation/page.tsx` → `/confirmation`
- A **component** = a reusable piece of UI. Same idea as a Flutter widget.
- `layout.tsx` wraps every page with the same Navbar and Footer (so you only write them once).

---

## ⚙️ PART 1 — Setup from ZERO

### Step 1.1 — Install Node.js

Node.js is the runtime. Without it, none of the next commands will work.

1. Go to **https://nodejs.org**
2. Download the **LTS** version (version **20.x or newer**).
3. Open the installer and click Next → Next → Install.

Now check it worked. Open **Terminal** (Mac: ⌘+Space → "Terminal") and run:

```bash
node -v
npm -v
```

✅ **What you should see now:**
```
v20.11.1     (any v20+ is fine)
10.2.4
```

❌ **If it didn't work:**
- Close Terminal, reopen it, try again (PATH refreshes on a new terminal).
- Still nothing? Reinstall from nodejs.org and pick "LTS".

---

### Step 1.2 — Open the project folder

In Terminal:

```bash
cd /Users/ayanady/Projects/qurangate-academy-landing
```

✅ **What you should see now:** the prompt is now inside that folder. Run `ls` to see all the files (`app`, `components`, `package.json`, etc).

---

### Step 1.3 — Install dependencies

This downloads Next.js, React, Tailwind into a folder called `node_modules` (like running `flutter pub get`).

```bash
npm install
```

This takes **1–3 minutes** the first time. You'll see a progress bar and possibly some warnings — warnings are fine, only **errors** matter.

✅ **What you should see now:**
- A new folder `node_modules/` exists
- A new file `package-lock.json` appears
- The terminal says something like `added 350 packages`

❌ **If it didn't work:**
- "command not found: npm" → Node.js isn't installed properly. Redo Step 1.1.
- Permission errors with `EACCES` → run `sudo npm install` (it'll ask for your Mac password).
- Network errors → check your internet, then run `npm install` again.

---

### Step 1.4 — Run the project locally

```bash
npm run dev
```

✅ **What you should see now:**
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
✓ Ready in 1.8s
```

Open your browser and go to:

👉 **http://localhost:3000**

You should see the QuranGate Academy landing page. Try:
- Clicking **"Select Plan"** on a pricing card → should go to `/book` with the plan auto-selected
- Filling in the form and submitting → should briefly show "Booking your trial…" then go to `/confirmation`
- Resizing the browser to mobile width → menu turns into a hamburger

❌ **If it didn't work:**
- "Port 3000 is already in use" → another app is using it. Run `npm run dev -- -p 3001` and open `http://localhost:3001`.
- Page is blank / errors in browser → look at the Terminal for the red error message. Share it with me and I'll help.
- "Cannot find module" → run `npm install` again.

To stop the server: press **Ctrl + C** in the Terminal.

---

## 🛠️ PART 2 — Editing the Website

### How to change text

Each section is a file in `components/`. Open the one you want and change the strings.

| What you want to change | File to open |
|---|---|
| Headline ("Learn the Quran the right way…") | `components/Hero.tsx` |
| About paragraph and stats | `components/About.tsx` |
| The 4 steps | `components/HowItWorks.tsx` |
| The 6 feature cards | `components/Features.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| Footer columns | `components/Footer.tsx` |
| Big closing CTA | `components/CTA.tsx` |
| Browser tab title | `app/layout.tsx` (the `metadata` object) |

> Save the file → the browser **auto-refreshes**. No restart needed.

### How to change pricing plans

Open **`lib/plans.ts`**. This is the single source of truth for plans.

```ts
{
  id: "growth",          // used in URLs — keep it lowercase, no spaces
  name: "Growth",
  price: "$89",
  period: "/ month",
  description: "Our most popular plan…",
  features: [
    "3 classes per week (45 min)",
    "1-on-1 certified teacher",
    // add or remove lines here
  ],
  highlight: true,       // true = shows "Most Popular" badge
}
```

### How to change colors

Open **`tailwind.config.ts`**. The whole site uses these tokens:

```ts
emerald: { 700: "#1C4B32", 800: "#143824", ... }   // primary brand color
gold:    { 400: "#D4AF6A", 500: "#B8924A" }        // accent
sand:    { 50:  "#FBF8F1", ... }                   // background
```

Change the hex codes → save → the whole site re-themes.

### How to change the logo

In `components/Navbar.tsx` and `components/Footer.tsx`, find the `<svg>` block and replace it with your own SVG, or replace the whole block with `<Image src="/logo.png" .../>` after putting `logo.png` in a new `public/` folder at the root.

---

## 🚀 PART 3 — Deploy to the Internet (Vercel)

Vercel is made by the same team as Next.js. It's free for personal projects and the deploy takes ~2 minutes.

### Step 3.1 — Put your project on GitHub

GitHub is where your code lives online. Vercel reads from there.

1. Go to **https://github.com** → click **Sign up** if you don't have an account.
2. Once signed in, click the **+** (top-right) → **New repository**.
3. Name it `qurangate-academy-landing`. Leave it Public (or Private, both work).
4. **Don't** tick "Add a README" — your project already has one.
5. Click **Create repository**.

Now in your Terminal (still inside the project folder):

```bash
git init
git add .
git commit -m "Initial commit: QuranGate Academy landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/qurangate-academy-landing.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username (you'll see the exact URL on the GitHub page right after creating the repo).

✅ **What you should see now:** refresh your GitHub repo page — all the files are there.

❌ **If it didn't work:**
- "command not found: git" → install Git from https://git-scm.com/download/mac
- Asked for username/password → GitHub no longer accepts passwords. Use a [Personal Access Token](https://github.com/settings/tokens) as the password, or set up SSH.

---

### Step 3.2 — Deploy on Vercel

1. Go to **https://vercel.com** → click **Sign Up** → choose **Continue with GitHub** (this links them automatically).
2. After signup you're on the dashboard. Click **Add New… → Project**.
3. You'll see a list of your GitHub repos. Find `qurangate-academy-landing` → click **Import**.
4. Vercel **auto-detects Next.js** — leave every setting as-is.
5. Click **Deploy**.
6. Wait ~60–120 seconds. You'll see a confetti animation and a preview screenshot.

✅ **What you should see now:**
- A green "Visit" button → click it.
- Your live URL looks like `https://qurangate-academy-landing.vercel.app`.

🎉 **Your site is live on the internet.**

### Updating the live site later

Anytime you change code:

```bash
git add .
git commit -m "Update headline"
git push
```

Vercel sees the push and **auto-deploys** in ~1 minute. No clicking needed.

### Custom domain (optional)

In Vercel: **Project → Settings → Domains → Add** → type your domain (e.g. `qurangate.com`) → Vercel shows you 1–2 DNS records to add at your domain registrar.

---

## 🧠 PART 4 — Troubleshooting

### "command not found: npm" or "node"
Node.js isn't installed (or not in your PATH). Redo Step 1.1, then **open a new Terminal window**.

### `npm install` fails
- Delete `node_modules` and `package-lock.json`, then run `npm install` again:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- Still failing? Check your internet, or try `npm install --legacy-peer-deps`.

### `npm run dev` exits immediately
Read the **last red line** in the terminal — it almost always names the file and line that broke. Common cases:
- A file you edited has a typo (a missing `>` or `}`).
- You imported something that doesn't exist.
- Fix the typo, save, run again.

### "Port 3000 already in use"
Another process is on port 3000. Either:
```bash
npm run dev -- -p 3001     # use a different port
```
or kill the old process: `lsof -ti:3000 | xargs kill -9`.

### Page is blank or shows an error overlay
- The error overlay is your friend — it tells you the **file** and **line**.
- 99% of the time it's a typo in something you just edited. Undo and re-save.

### Tailwind classes look like they're being ignored
- Did you save the file? The dev server only re-renders on save.
- Check `tailwind.config.ts` `content:` array still includes `./app/**/*` and `./components/**/*`.

### Vercel build fails
Read the build log — it shows the same error you'd see locally. Run `npm run build` on your machine to reproduce, fix it, push again.

---

## 🧰 Useful commands cheat sheet

```bash
npm install        # download dependencies (first time, or after pulling changes)
npm run dev        # local development server (auto-reloads)
npm run build      # production build (use this to check before deploying)
npm run start      # run the production build locally
```

---

## 💡 Where to go next

- Hook the booking form to a real backend (e.g. send an email via [Resend](https://resend.com) or save to a Google Sheet via [SheetDB](https://sheetdb.io)).
- Add a `public/og-image.png` (1200×630) and reference it in `app/layout.tsx`'s `metadata` for nicer social previews.
- Add a `/about` or `/blog` page — just create `app/about/page.tsx`. The URL appears automatically.

Bismillah, and good luck. 🌙
