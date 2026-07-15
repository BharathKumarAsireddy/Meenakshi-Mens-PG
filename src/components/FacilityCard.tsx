"use client";

import { motion } from "framer-motion";
import type { Facility } from "@/data/facilities";

export default function FacilityCard({ facility, index = 0 }: { facility: Facility; index?: number }) {
  const Icon = facility.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gold-500/15 bg-cream p-7 card-shadow transition-colors hover:border-gold-500/40"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-400/10 transition-transform duration-500 group-hover:scale-150" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-maroon-800 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-maroon-900">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="font-serif-display relative mt-5 text-lg font-semibold text-maroon-900">
        {facility.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
        {facility.description}
      </p>
    </motion.div>
  );
}
