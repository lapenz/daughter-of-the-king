import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

// A photo with a thin gold frame offset behind it.
export function FramedImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  imageClassName = "",
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute -inset-3 translate-x-3 translate-y-3 rounded-sm border border-gold/50"
        aria-hidden="true"
      />
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className={`relative w-full rounded-sm object-cover shadow-2xl shadow-black/30 ${imageClassName}`}
      />
    </div>
  );
}

export function Crown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 22 3 7l11 8 10-12 10 12 11-8-3 15Z" />
      <path d="M6 26h36" />
      <circle cx="3" cy="6" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="2.2" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="45" cy="6" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold ${className}`}
    >
      {children}
    </p>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gold/50" />
      <span className="size-1.5 rotate-45 border border-gold" />
      <span className="h-px w-12 bg-gold/50" />
    </div>
  );
}

export function CtaButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-sm bg-gold px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.18em] text-plum-950 shadow-lg shadow-black/20 transition hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light sm:px-12 sm:py-5 sm:text-base"
    >
      {children}
    </a>
  );
}
