// Edit this file to change pricing, plan names, or features.
// Each plan needs: id, name, title, monthly price, sessions/week, minutes/class,
// features[], color (for the gradient theme), and an optional `highlight` flag.

export type PlanColor = "blue" | "green" | "emerald" | "purple" | "orange";

export type Plan = {
  id: string;
  name: string;        // Short label used on buttons, e.g. "Plan A".
  title: string;       // Card headline, e.g. "One Class Per Week".
  monthlyPrice: number;
  sessionsPerWeek: number;
  minutesPerClass: number;
  features: string[];
  highlight?: boolean;
  color: PlanColor;
};

const commonFeatures = [
  "Free trial class",
  "Native Arabic instructor",
  "Any time you prefer",
  "Lesson 1 to 1",
  "Personalized learning pace",
  "WhatsApp support",
];

export const plans: Plan[] = [
  {
    id: "plan-a",
    name: "Plan A",
    title: "One Class Per Week",
    monthlyPrice: 18,
    sessionsPerWeek: 1,
    minutesPerClass: 30,
    features: commonFeatures,
    color: "blue",
  },
  {
    id: "plan-b",
    name: "Plan B",
    title: "Two Classes Per Week",
    monthlyPrice: 37,
    sessionsPerWeek: 2,
    minutesPerClass: 30,
    features: commonFeatures,
    color: "green",
  },
  {
    id: "plan-c",
    name: "Plan C",
    title: "Three Classes Per Week",
    monthlyPrice: 50,
    sessionsPerWeek: 3,
    minutesPerClass: 30,
    features: commonFeatures,
    highlight: true,
    color: "emerald",
  },
  {
    id: "plan-d",
    name: "Plan D",
    title: "Four Classes Per Week",
    monthlyPrice: 68,
    sessionsPerWeek: 4,
    minutesPerClass: 30,
    features: commonFeatures,
    color: "purple",
  },
  {
    id: "plan-e",
    name: "Plan E",
    title: "Five Classes Per Week",
    monthlyPrice: 82,
    sessionsPerWeek: 5,
    minutesPerClass: 30,
    features: commonFeatures,
    color: "orange",
  },
];

export const sharedBenefits = [
  "Native Arabic instructors",
  "One-on-one lessons",
  "Flexible scheduling",
  "Free trial class",
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
