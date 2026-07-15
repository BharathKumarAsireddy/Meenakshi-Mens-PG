"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FacilityCard from "@/components/FacilityCard";
import { facilities, facilityCategories } from "@/data/facilities";

const tabs = ["All", ...facilityCategories] as const;

export default function FacilitiesGrid() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const filtered =
    active === "All" ? facilities : facilities.filter((f) => f.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-all sm:text-sm ${
              active === tab
                ? "bg-maroon-800 text-cream shadow-md"
                : "bg-cream text-ink-soft border border-gold-500/25 hover:border-gold-500/60"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((facility, index) => (
            <FacilityCard key={facility.title} facility={facility} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
