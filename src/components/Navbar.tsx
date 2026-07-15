"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Crown } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-maroon-900/85 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 sm:px-6 ${
          scrolled ? "shadow-2xl shadow-black/30" : "shadow-lg shadow-black/15"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-maroon-900 transition-transform duration-300 group-hover:scale-105">
            <Crown className="h-4.5 w-4.5" strokeWidth={2} />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-serif-display text-base font-bold text-cream">
              Meenakshi
            </span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
              Men&apos;s PG
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-maroon-900" : "text-cream/85 hover:text-gold-300"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-gold-500"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-maroon-900 shadow-md transition-all hover:bg-gold-400 hover:shadow-lg"
          >
            Enquire Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-maroon-900/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-full px-4 py-3 text-base font-semibold ${
                        active
                          ? "bg-gold-500 text-maroon-900"
                          : "text-cream/85 hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-1">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gold-500 px-4 py-3 text-center text-base font-semibold text-maroon-900"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
