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

const iconPaths: Record<string, ReactNode> = {
  book: (
    <>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5-.7 1.5-1.5Z" />
      <path d="M11 19h2" />
    </>
  ),
  sunrise: (
    <>
      <path d="M3 18h18M6 18a6 6 0 0 1 12 0" />
      <path d="M12 4v4M4.9 9.9l1.4 1.4M19.1 9.9l-1.4 1.4M2 14h2M20 14h2" />
    </>
  ),
  audio: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" rx="2" />
      <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
    </>
  ),
};

export function LineIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {iconPaths[name]}
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

// A classic ornamental flourish: fine rules, a central lens and a dot.
export function Divider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
      className={`mx-auto block h-5 w-44 text-gold ${className}`}
    >
      <path d="M14 12h58M128 12h58" opacity=".6" />
      <path d="M72 12c7 0 9-7 16-7 5 0 8 3 12 7 4-4 7-7 12-7 7 0 9 7 16 7" />
      <path d="M72 12c7 0 9 7 16 7 5 0 8-3 12-7 4 4 7 7 12 7 7 0 9-7 16-7" />
      <circle cx="100" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="9" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="191" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
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
