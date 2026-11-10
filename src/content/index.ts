import { en } from "./en";
import { pt } from "./pt";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

const content = { pt, en };
export const getContent = (locale: Locale) => content[locale];

// Where every "buy / start" button points. Replace with the real checkout
// link (Kiwify, Hotmart, Stripe...) when it exists.
export const CHECKOUT_URL = "#comecar";

export type Day = {
  n: number;
  title: string;
  verse: string;
  text: string;
};

export type Stage = {
  label: string;
  title: string;
  subtitle: string;
  days: Day[];
};

export type Content = {
  meta: { title: string; description: string };
  brand: string;
  langSwitch: { label: string; href: string };
  images: {
    window: string;
    bible: string;
    crowning: string;
    battle: string;
    chapel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    cta: string;
    note: string;
  };
  identify: {
    eyebrow: string;
    title: string;
    body: string;
  };
  patterns: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  work: {
    eyebrow: string;
    title: string;
    body: string;
    quote: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    dayLabel: string;
    daysLabel: string;
    stages: Stage[];
    closing: string;
  };
  dayOne: {
    eyebrow: string;
    title: string;
    reading: string;
    openingHeading: string;
    opening: string[];
    truthHeading: string;
    truth: string[];
    reflectHeading: string;
    reflectIntro: string;
    questions: string[];
    practiceHeading: string;
    practice: string[];
    declarationHeading: string;
    declaration: string;
  };
  final: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  footer: string;
};
