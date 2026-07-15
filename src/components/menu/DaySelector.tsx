"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Soup, Moon, Flame } from "lucide-react";
import { weeklyMenu } from "@/data/menu";

const meals = [
  { key: "breakfast" as const, label: "Breakfast", icon: Coffee },
  { key: "lunch" as const, label: "Lunch", icon: Soup },
  { key: "dinner" as const, label: "Dinner", icon: Moon },
];

export default function DaySelector() {
  const [dayIndex, setDayIndex] = useState(0);
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    // The current day is only knowable on the client — server and client
    // clocks/timezones can differ, so this can't be computed at render time.
    const jsDay = new Date().getDay();
    const idx = jsDay === 0 ? 6 : jsDay - 1;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDayIndex(idx);
    setTodayIndex(idx);
  }, []);

  const selected = weeklyMenu[dayIndex];

  return (
    <div>
      <div className="scrollbar-none flex gap-2 overflow-x-auto pb-2 sm:justify-center sm:flex-wrap">
        {weeklyMenu.map((day, index) => (
          <button
            key={day.day}
            onClick={() => setDayIndex(index)}
            className={`relative shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all sm:text-sm ${
              dayIndex === index
                ? "bg-maroon-800 text-cream shadow-md"
                : "bg-cream text-ink-soft border border-gold-500/25 hover:border-gold-500/60"
            }`}
          >
            {day.short}
            {todayIndex === index && (
              <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold-500 text-[0.5rem] font-bold text-maroon-900">
                &bull;
              </span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.day}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold-500/15 bg-maroon-900 p-8 text-cream card-shadow md:p-10"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <p className="font-serif-display text-2xl font-bold text-gold-300 md:text-3xl">
              {selected.day}
            </p>
            {todayIndex === dayIndex && (
              <span className="rounded-full bg-gold-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-300">
                Today
              </span>
            )}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {meals.map(({ key, label, icon: Icon }) => (
              <div key={key} className="rounded-xl bg-white/5 p-5">
                <div className="flex items-center gap-2 text-gold-400">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream-soft/90">
                  {selected[key]}
                </p>
                {key === "dinner" && selected.dinnerNote === "non-veg" && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-300">
                    <Flame className="h-3 w-3" />
                    Non-Veg Day
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
