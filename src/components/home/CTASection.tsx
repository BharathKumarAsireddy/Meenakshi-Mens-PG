import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-maroon-900 py-20 text-cream md:py-24">
      <div className="absolute inset-0 bg-ornate opacity-30" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />

      <div className="container-lux relative flex flex-col items-center gap-8 text-center">
        <AnimatedSection>
          <h2 className="font-serif-display max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
            Ready to Make Meenakshi Men&apos;s PG Your Home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-soft/85">
            Schedule a visit or speak to us directly &mdash; we&apos;ll help you find the
            perfect room and answer every question about life here.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-maroon-900 shadow-lg transition-all hover:bg-gold-400"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+910000000000"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-all hover:bg-white/10"
          >
            <PhoneCall className="h-4 w-4" />
            Call Us Directly
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
