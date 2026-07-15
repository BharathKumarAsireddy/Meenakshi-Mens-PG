import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function OurStory() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-lux grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <AnimatedSection direction="right">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Our Story
          </span>
          <h2 className="font-serif-display mt-3 text-3xl font-bold leading-tight text-maroon-900 md:text-4xl">
            Built on Trust, Run Like Family
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Meenakshi Men&apos;s PG started with a simple observation: most men
              moving to a new city for work or studies had to choose between an
              affordable stay and a genuinely comfortable one. We set out to close
              that gap.
            </p>
            <p>
              Today, the PG is home to working professionals and students alike,
              all sharing well-maintained, air-conditioned rooms, dependable
              amenities, and meals that actually feel homely. Every policy and
              upgrade we make starts with one question &mdash; would we want this
              for our own family?
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.1}>
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl card-shadow">
            <Image
              src="/images/exterior-street.jpeg"
              alt="Street view of the Meenakshi Men's PG building"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
