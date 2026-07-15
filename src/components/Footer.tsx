import Link from "next/link";
import { Crown, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { facilities } from "@/data/facilities";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/menu", label: "Weekly Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-cream-soft">
      <div className="container-lux grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-maroon-900">
              <Crown className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="leading-tight">
              <span className="block font-serif-display text-lg font-bold text-cream">
                Meenakshi
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Men&apos;s PG
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream-soft/70">
            A premium, secure and comfortable men&apos;s PG accommodation designed
            to feel like home &mdash; complete with modern amenities and wholesome meals.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold-500 hover:text-maroon-900"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold-500 hover:text-maroon-900"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold-500 hover:text-maroon-900"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif-display text-base font-semibold text-gold-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream-soft/75 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif-display text-base font-semibold text-gold-400">
            Facilities
          </h3>
          <ul className="mt-4 space-y-2.5">
            {facilities.slice(0, 6).map((facility) => (
              <li key={facility.title} className="text-sm text-cream-soft/75">
                {facility.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif-display text-base font-semibold text-gold-400">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3 text-sm text-cream-soft/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>123 Temple Street, Near City Centre, Hyderabad, Telangana</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-cream-soft/75">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href="tel:+910000000000">+91 00000 00000</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-cream-soft/75">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href="mailto:info@meenakshimenspg.com">info@meenakshimenspg.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-soft/55 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Meenakshi Men&apos;s PG. All rights reserved.</p>
          <p>Crafted with care for a home away from home.</p>
        </div>
      </div>
    </footer>
  );
}
