"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems } from "@/data/gallery";

const categories = ["All", "Highlights", "Rooms", "Dining", "Common Areas", "Exteriors"] as const;

export default function GalleryFilterGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-all sm:text-sm ${
              active === cat
                ? "bg-maroon-800 text-cream shadow-md"
                : "bg-cream text-ink-soft border border-gold-500/25 hover:border-gold-500/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12"
        >
          <GalleryGrid items={filtered} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
