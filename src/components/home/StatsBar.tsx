import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { value: "9+", label: "Premium Amenities" },
  { value: "24/7", label: "Security & Water Supply" },
  { value: "3x", label: "Freshly Cooked Meals Daily" },
  { value: "100%", label: "Verified & Secure Premises" },
];

export default function StatsBar() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="container-lux">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-6 rounded-2xl bg-cream card-shadow border border-gold-500/15 p-8 sm:grid-cols-4 md:p-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif-display text-3xl font-bold text-maroon-800 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-soft md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
