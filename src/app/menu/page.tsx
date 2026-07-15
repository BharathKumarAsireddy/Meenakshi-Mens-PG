import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DaySelector from "@/components/menu/DaySelector";
import WeeklyMenuTable from "@/components/menu/WeeklyMenuTable";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Weekly Menu | Meenakshi Men's PG",
  description:
    "See the day-by-day breakfast, lunch and dinner menu at Meenakshi Men's PG, with weekly veg and non-veg meal variety.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Freshly Cooked, Every Day"
        title="Weekly Menu"
        subtitle="Home-style vegetarian meals through the week, with a non-veg dinner on Wednesdays and Sundays."
        crumb="Menu"
      />

      <section className="bg-cream-soft py-20 md:py-28">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Pick a Day"
            title="Browse Meals Day by Day"
            subtitle="Select any day of the week to see what's on the menu for breakfast, lunch and dinner."
          />

          <div className="mt-14">
            <DaySelector />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <SectionHeading
            eyebrow="At a Glance"
            title="Full Week Overview"
            subtitle="The complete weekly menu in one view."
          />

          <AnimatedSection className="mt-14">
            <WeeklyMenuTable />
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
