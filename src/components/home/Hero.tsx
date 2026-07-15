"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Wifi, UtensilsCrossed } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "CCTV Secured" },
  { icon: Wifi, label: "Free 24/7 WiFi" },
  { icon: UtensilsCrossed, label: "Veg & Non-Veg Meals" },
];

export default function Hero() {
  return (
    <section id="nav-home" className="relative overflow-hidden bg-maroon-900 text-cream">
      <Image
        src="/images/exterior-front.jpeg"
        alt="Meenakshi Men's PG building exterior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Single unified maroon color grade: multiply keeps the photo's detail, the gradient adds a touch of depth top-to-bottom */}
      <div className="absolute inset-0 bg-maroon-900/65 mix-blend-multiply" />
      <div className="absolute inset-0 bg-linear-to-b from-maroon-900/30 via-transparent to-maroon-900/60" />

      <div className="container-lux relative flex min-h-[92vh] flex-col items-center justify-center py-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-gold-400/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 backdrop-blur-sm"
        >
          Premium Men&apos;s PG Accommodation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-display max-w-4xl text-4xl font-bold leading-[1.15] drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl"
        >
          A Home Away From Home,
          <br />
          <span className="text-gradient-gold">Crafted for Comfort</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-cream-soft/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-lg"
        >
          Meenakshi Men&apos;s PG blends premium comfort with genuine hospitality &mdash;
          AC rooms, round-the-clock security, wholesome meals and every everyday
          convenience, thoughtfully taken care of.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/facilities"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-maroon-900 shadow-lg transition-all hover:bg-gold-400 hover:shadow-gold-500/30"
          >
            Explore Facilities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-all hover:bg-white/10"
          >
            Enquire Now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-cream-soft/95 backdrop-blur-sm"
            >
              <Icon className="h-3.5 w-3.5 text-gold-400" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
