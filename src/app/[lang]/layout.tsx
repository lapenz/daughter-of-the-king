import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { notFound } from "next/navigation";
import { getContent, hasLocale, locales } from "@/content";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getContent(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { languages: { "pt-BR": "/pt", en: "/en" } },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
