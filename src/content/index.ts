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

// A testimonial from a mentee. Only publish real ones, with her permission.
export type Testimonial = {
  quote: string;
  name: string;
  detail?: string;
};

export type IncludedIcon = "book" | "sunrise" | "audio" | "video";

export type Content = {
  meta: { title: string; description: string };
  brand: string;
  langSwitch: { label: string; href: string };
  images: {
    window: string;
    crowning: string;
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
    lines: string[];
    closing: string;
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
  included: {
    eyebrow: string;
    title: string;
    items: { icon: IncludedIcon; title: string; text: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    empty: string;
    items: Testimonial[];
  };
  final: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  footer: string;
};
