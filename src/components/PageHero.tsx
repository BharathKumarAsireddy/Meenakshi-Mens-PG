import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
};

export default function PageHero({ eyebrow, title, subtitle, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-maroon-900 text-cream">
      <div className="absolute inset-0 bg-ornate opacity-30" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-maroon-500/40 blur-3xl" />

      <div className="container-lux relative flex flex-col items-center pt-32 pb-20 text-center md:pt-40 md:pb-28">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
          {eyebrow}
        </span>
        <h1 className="font-serif-display text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-soft/85 md:text-lg">
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream-soft/70">
          <Link href="/" className="transition-colors hover:text-gold-300">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold-300">{crumb}</span>
        </div>
      </div>
    </section>
  );
}
