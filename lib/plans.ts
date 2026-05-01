// Edit this file to change pricing, plan names, or features.
// Each plan needs: id, name, monthly price, sessions/week, minutes/class,
// features[], and an optional `highlight` boolean for "Most Popular".

export type Plan = {
  id: string;
  name: string;
  monthlyPrice: number;
  sessionsPerWeek: number;
  minutesPerClass: number;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 30,
    sessionsPerWeek: 2,
    minutesPerClass: 30,
    description: "A gentle start for new students.",
    features: [
      "2 live sessions per week",
      "30 minutes per session",
      "Basic Quran reading",
      "Tajweed fundamentals",
      "Progress tracking",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    monthlyPrice: 50,
    sessionsPerWeek: 3,
    minutesPerClass: 45,
    description: "Our most popular plan for steady, real progress.",
    features: [
      "3 live sessions per week",
      "45 minutes per session",
      "Quran reading & memorization",
      "Advanced Tajweed rules",
      "Weekly progress reports",
      "Homework assignments",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 70,
    sessionsPerWeek: 5,
    minutesPerClass: 60,
    description: "Daily classes for serious memorization (Hifz).",
    features: [
      "5 live sessions per week",
      "60 minutes per session",
      "Intensive memorization program",
      "Perfect Tajweed mastery",
      "Daily progress tracking",
      "Personalized study plan",
      "24/7 teacher support",
    ],
  },
];

// 20% off when billed annually (12 months at the discounted rate).
export const ANNUAL_DISCOUNT = 0.2;

export const findPlan = (id?: string | null) =>
  plans.find((p) => p.id === id) ?? null;

export const monthlyTotal = (plan: Plan, billing: "monthly" | "annual") =>
  billing === "annual"
    ? Math.round(plan.monthlyPrice * (1 - ANNUAL_DISCOUNT))
    : plan.monthlyPrice;

export const pricePerClass = (plan: Plan, billing: "monthly" | "annual") => {
  const monthly = monthlyTotal(plan, billing);
  const classesPerMonth = plan.sessionsPerWeek * 4;
  return Math.round(monthly / classesPerMonth);
};
