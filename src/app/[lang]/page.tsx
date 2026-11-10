import Image from "next/image";
import { notFound } from "next/navigation";
import { CHECKOUT_URL, getContent, hasLocale } from "@/content";
import {
  Crown,
  CtaButton,
  Divider,
  Eyebrow,
  FramedImage,
  LineIcon,
} from "@/components/ui";
import coroacao from "../../../public/images/coroacao.jpg";
import janela from "../../../public/images/janela.jpg";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const c = getContent(lang);

  return (
    <>
      {/* Header + hero, with the crowning image framed beside the title */}
      <section className="texture-dark relative overflow-hidden bg-plum-950 text-cream">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,164,106,0.18),transparent_60%)]"
          aria-hidden="true"
        />

        <header className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-8">
          <span className="flex items-center gap-2.5 font-serif text-lg tracking-wide text-gold-light">
            <Crown className="h-4 w-7 text-gold" />
            {c.brand}
          </span>
          <a
            href={c.langSwitch.href}
            hrefLang={c.langSwitch.href.slice(1)}
            className="rounded-full border border-gold/40 bg-plum-950/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm transition hover:border-gold hover:text-cream"
          >
            {c.langSwitch.label}
          </a>
        </header>

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-10 sm:px-8 sm:pb-32 lg:grid-cols-[1.15fr_1fr] lg:pt-16">
          <div className="text-center lg:text-left">
            <Eyebrow className="leading-relaxed">{c.hero.eyebrow}</Eyebrow>
            <Crown className="mx-auto mt-10 h-7 w-12 text-gold lg:mx-0" />
            <h1 className="mt-6 font-serif text-6xl font-medium leading-none tracking-tight text-cream drop-shadow-lg sm:text-8xl">
              {c.hero.title}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl italic leading-snug text-gold-light sm:text-3xl lg:mx-0">
              {c.hero.subtitle}
            </p>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg lg:mx-0">
              {c.hero.body}
            </p>
            <div className="mt-12">
              <CtaButton href={CHECKOUT_URL}>{c.hero.cta}</CtaButton>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
              {c.hero.note}
            </p>
          </div>
          <FramedImage
            src={coroacao}
            alt={c.images.crowning}
            priority
            className="mx-auto w-full max-w-sm lg:max-w-md"
            imageClassName="aspect-[4/5] object-[50%_20%]"
            sizes="(min-width: 1024px) 448px, 384px"
          />
        </div>
      </section>

      {/* Do you identify? */}
      <section className="texture-light bg-cream px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <FramedImage
            src={janela}
            alt={c.images.window}
            className="mx-auto w-full max-w-sm md:max-w-none"
            imageClassName="aspect-[4/5]"
            sizes="(min-width: 768px) 40vw, 90vw"
          />
          <div className="text-center md:text-left">
            <Eyebrow>{c.identify.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-plum-900 sm:text-5xl lg:text-6xl">
              {c.identify.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {c.identify.body}
            </p>
          </div>
        </div>
      </section>

      {/* What we will work on */}
      <section className="texture-light bg-cream-dark px-4 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>{c.patterns.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl font-medium text-plum-900 sm:text-5xl">
            {c.patterns.title}
          </h2>
          <Divider className="mt-8" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.patterns.items.map((item, i) => (
              <li
                key={item.title}
                className="flex flex-col items-center rounded-sm border border-gold/30 bg-cream/80 px-6 py-10"
              >
                <span className="font-serif text-4xl text-gold">
                  {["I", "II", "III", "IV"][i]}
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-plum-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What the journey is */}
      <section className="texture-dark bg-plum-900 px-4 py-24 text-center text-cream sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{c.work.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">
            {c.work.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            {c.work.body}
          </p>
          <Divider className="mt-14" />
          <blockquote className="mt-10 font-serif text-3xl italic leading-snug text-gold-light sm:text-4xl">
            “{c.work.quote}”
          </blockquote>
        </div>
      </section>

      {/* 30-day structure */}
      <section
        id="jornada"
        className="texture-light bg-cream px-4 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Eyebrow>{c.journey.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-5xl font-medium text-plum-900 sm:text-6xl">
              {c.journey.title}
            </h2>
            <p className="mt-4 text-lg text-ink-soft">{c.journey.intro}</p>
            <Divider className="mt-8" />
          </div>

          <ol className="mt-14 space-y-4">
            {c.journey.stages.map((stage, i) => {
              const first = stage.days[0].n;
              const last = stage.days[stage.days.length - 1].n;
              return (
                <li
                  key={stage.title}
                  className="flex items-center gap-5 rounded-sm border border-gold/30 bg-white/60 px-5 py-7 sm:gap-8 sm:px-8"
                >
                  <span className="w-8 shrink-0 text-center font-serif text-5xl leading-none text-gold sm:w-10 sm:text-6xl">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                      {stage.label} · {c.journey.daysLabel} {first}–{last}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-medium text-plum-900 sm:text-3xl">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-ink-soft">{stage.subtitle}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-2xl italic leading-snug text-plum-800">
            {c.journey.closing}
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="texture-dark bg-plum-900 px-4 py-24 text-cream sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>{c.included.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              {c.included.title}
            </h2>
            <Divider className="mt-8" />
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.included.items.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-center rounded-sm border border-gold/25 bg-plum-950/50 px-6 py-10 text-center"
              >
                <span className="flex size-16 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <LineIcon name={item.icon} className="size-7" />
                </span>
                <h3 className="mt-6 font-serif text-2xl leading-snug text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-cream/70">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <CtaButton href={CHECKOUT_URL}>{c.hero.cta}</CtaButton>
          </div>
        </div>
      </section>

      {/* Testimonials from the first mentees */}
      <section className="texture-light bg-cream-dark px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>{c.testimonials.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-plum-900 sm:text-5xl">
              {c.testimonials.title}
            </h2>
            <Divider className="mt-8" />
          </div>

          {c.testimonials.items.length === 0 ? (
            <p className="mx-auto mt-10 max-w-xl text-center font-serif text-2xl italic leading-snug text-plum-800">
              {c.testimonials.empty}
            </p>
          ) : (
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {c.testimonials.items.map((t) => (
                <li
                  key={t.name + t.quote.slice(0, 20)}
                  className="flex flex-col rounded-sm border border-gold/30 bg-cream/80 px-7 py-9 sm:px-10"
                >
                  <span
                    className="font-serif text-6xl leading-none text-gold"
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <blockquote className="mt-2 flex-1 font-serif text-xl italic leading-relaxed text-ink sm:text-2xl">
                    {t.quote}
                  </blockquote>
                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-plum-800">
                    {t.name}
                  </p>
                  {t.detail && (
                    <p className="mt-1 text-sm text-ink-soft">{t.detail}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Final call to action */}
      <section
        id="comecar"
        className="texture-dark relative overflow-hidden bg-plum-950 px-4 py-28 text-center text-cream sm:px-8 sm:py-36"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,164,106,0.16),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl">
          <Crown className="mx-auto h-7 w-12 text-gold" />
          <Eyebrow className="mt-8">{c.final.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-5xl font-medium leading-tight sm:text-6xl">
            {c.final.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            {c.final.body}
          </p>
          <div className="mt-12">
            <CtaButton href={CHECKOUT_URL}>{c.final.cta}</CtaButton>
          </div>
        </div>
      </section>

      <footer className="bg-plum-950 px-4 pb-10 text-center text-xs uppercase tracking-[0.25em] text-gold/60">
        <div className="mx-auto max-w-6xl border-t border-gold/15 pt-8">
          {c.footer}
        </div>
      </footer>
    </>
  );
}
