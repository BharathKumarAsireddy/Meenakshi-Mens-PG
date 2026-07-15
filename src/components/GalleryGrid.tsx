"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
          className={`group relative overflow-hidden rounded-xl card-shadow ${
            item.tall ? "row-span-2 aspect-3/5" : "aspect-square"
          }`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className={`h-full w-full bg-linear-to-br ${item.gradient} relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
            >
              <div className="absolute inset-0 bg-ornate opacity-20" />
              <Camera className="h-8 w-8 text-cream/70" strokeWidth={1.5} />
            </div>
          )}
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-maroon-900/85 via-maroon-900/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm font-semibold text-cream">{item.title}</p>
            <p className="text-[0.7rem] uppercase tracking-wide text-gold-300">{item.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
