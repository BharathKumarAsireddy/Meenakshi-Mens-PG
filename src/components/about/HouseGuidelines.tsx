import { Clock3, Volume2, Ban, LogIn, CalendarCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const guidelines = [
  {
    icon: Clock3,
    title: "Gate Closing Time",
    description: "Main gate closes at 10:30 PM. Prior intimation is required for a later entry.",
  },
  {
    icon: LogIn,
    title: "Visitor Policy",
    description: "Guests are welcome in common areas until 8 PM with prior registration at the front desk.",
  },
  {
    icon: Volume2,
    title: "Quiet Hours",
    description: "Please keep noise levels low after 10 PM out of respect for fellow residents.",
  },
  {
    icon: Ban,
    title: "Smoke & Alcohol-Free",
    description: "The entire premises is strictly smoke and alcohol-free for everyone's wellbeing.",
  },
  {
    icon: CalendarCheck,
    title: "Notice Period",
    description: "A 30-day notice is required before vacating, to help us plan room availability.",
  },
  {
    icon: Sparkles,
    title: "Cleanliness",
    description: "Residents are expected to keep personal rooms and shared spaces neat and tidy.",
  },
];

export default function HouseGuidelines() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Good to Know"
          title="House Guidelines"
          subtitle="A few simple ground rules that keep life at Meenakshi Men's PG comfortable and respectful for everyone."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {guidelines.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={(index % 2) * 0.1}>
                <div className="flex items-start gap-4 rounded-xl border border-gold-500/15 bg-cream-soft p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-800 text-gold-400">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-maroon-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
