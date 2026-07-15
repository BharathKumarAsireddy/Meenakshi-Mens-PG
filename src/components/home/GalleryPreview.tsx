import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import AnimatedSection from "@/components/AnimatedSection";
import { galleryItems } from "@/data/gallery";

export default function GalleryPreview() {
  return (
    <section id="nav-gallery" className="bg-cream py-20 md:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Take a Look Around"
          title="Life at Meenakshi Men's PG"
          subtitle="A glimpse into the rooms, dining spaces and common areas residents enjoy every day."
        />

        <div className="mt-14">
          <GalleryGrid items={galleryItems.slice(0, 6)} />
        </div>

        <AnimatedSection className="mt-12 flex justify-center" delay={0.1}>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-maroon-800 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-maroon-800 transition-all hover:bg-maroon-800 hover:text-cream"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
