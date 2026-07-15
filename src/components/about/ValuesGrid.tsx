import { Heart, ShieldCheck, Users, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: Heart,
    title: "Comfort First",
    description: "Every room, every meal and every service is designed around genuine everyday comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description: "CCTV monitoring, secure entry and attentive staff keep residents and their families at ease.",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "A respectful, well-managed community where residents genuinely look out for one another.",
  },
  {
    icon: BadgeCheck,
    title: "Consistency You Can Trust",
    description: "Reliable water, WiFi and meal schedules, day after day, with no surprises.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Core Values"
          subtitle="The principles that shape every decision we make, from daily operations to long-term upgrades."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={(index % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-gold-500/15 bg-cream p-7 text-center card-shadow">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-800 text-gold-400">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-serif-display mt-5 text-lg font-semibold text-maroon-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
