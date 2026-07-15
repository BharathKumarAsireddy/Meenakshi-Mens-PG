import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Resident Voices"
          title="What Our Residents Say"
          subtitle="Real experiences from the community that calls Meenakshi Men's PG home."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, index) => (
            <AnimatedSection key={t.name} delay={index * 0.1}>
              <div className="relative flex h-full flex-col rounded-2xl bg-cream p-7 card-shadow border border-gold-500/10">
                <Quote className="h-8 w-8 text-gold-400/60" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-gold-500/15 pt-4">
                  <p className="font-serif-display text-base font-semibold text-maroon-900">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-gold-600">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
