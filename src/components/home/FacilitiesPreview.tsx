"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FacilityCard from "@/components/FacilityCard";
import AnimatedSection from "@/components/AnimatedSection";
import { facilities } from "@/data/facilities";

export default function FacilitiesPreview() {
  const preview = facilities.slice(0, 6);
  return (
    <section id="nav-facilities" className="bg-cream-soft py-20 md:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="What We Offer"
          title="Everyday Comfort, Thoughtfully Provided"
          subtitle="From secure living to wholesome meals, every facility is designed to make daily life effortless."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((facility, index) => (
            <FacilityCard key={facility.title} facility={facility} index={index} />
          ))}
        </div>

        <AnimatedSection className="mt-12 flex justify-center" delay={0.1}>
          <Link
            href="/facilities"
            className="group inline-flex items-center gap-2 rounded-full bg-maroon-800 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream shadow-md transition-all hover:bg-maroon-700 hover:shadow-lg"
          >
            View All Facilities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
