import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const points = [
  "Fully furnished AC rooms with modern interiors",
  "Dedicated housekeeping and on-site staff support",
  "Safe, verified and community-oriented living",
  "Freshly prepared meals with weekly variety",
];

export default function AboutPreview() {
  return (
    <section id="nav-about" className="bg-cream py-20 md:py-28">
      <div className="container-lux grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <AnimatedSection direction="right">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl card-shadow">
            <Image
              src="/images/entrance-parking.jpeg"
              alt="Covered parking and entrance gate at Meenakshi Men's PG"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            About Us
          </span>
          <h2 className="font-serif-display mt-3 text-3xl font-bold leading-tight text-maroon-900 md:text-4xl">
            Where Comfort Meets Genuine Care
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            Meenakshi Men&apos;s PG was built on a simple idea &mdash; that staying away
            from home shouldn&apos;t mean compromising on comfort, safety or good food.
            Every detail, from air-conditioned rooms to a wholesome weekly menu, is
            designed around what residents actually need.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink-soft md:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-maroon-800"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
