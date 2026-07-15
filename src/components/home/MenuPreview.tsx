"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Soup, Moon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { weeklyMenu } from "@/data/menu";

const meals = [
  { key: "breakfast" as const, label: "Breakfast", icon: Coffee },
  { key: "lunch" as const, label: "Lunch", icon: Soup },
  { key: "dinner" as const, label: "Dinner", icon: Moon },
];

export default function MenuPreview() {
  const [dayIndex, setDayIndex] = useState(0);

  useEffect(() => {
    // The current day is only knowable on the client — server and client
    // clocks/timezones can differ, so this can't be computed at render time.
    const jsDay = new Date().getDay(); // 0 = Sunday
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDayIndex(jsDay === 0 ? 6 : jsDay - 1);
  }, []);

  const today = weeklyMenu[dayIndex];

  return (
    <section className="bg-maroon-900 py-20 text-cream md:py-28">
      <div className="absolute inset-0" />
      <div className="container-lux relative">
        <SectionHeading
          eyebrow="Fresh Every Day"
          title="This Week's Menu, Right Now"
          subtitle="Home-style vegetarian meals through the week, with a non-veg dinner twist on select days."
          light
        />

        <motion.div
          key={today.day}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gold-400/25 bg-white/5 p-8 backdrop-blur-sm md:p-10"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <p className="font-serif-display text-2xl font-bold text-gold-300">{today.day}</p>
            <span className="rounded-full bg-gold-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-300">
              Today&apos;s Menu
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {meals.map(({ key, label, icon: Icon }) => (
              <div key={key}>
                <div className="flex items-center gap-2 text-gold-400">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cream-soft/85">{today[key]}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <AnimatedSection className="mt-10 flex justify-center" delay={0.1}>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-maroon-900 shadow-md transition-all hover:bg-gold-400"
          >
            View Full Weekly Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
