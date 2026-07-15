import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryFilterGrid from "@/components/gallery/GalleryFilterGrid";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Gallery | Meenakshi Men's PG",
  description:
    "Browse photos of rooms, dining spaces, common areas and the exteriors at Meenakshi Men's PG.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="See It For Yourself"
        title="Gallery"
        subtitle="A closer look at the rooms, dining spaces and shared areas that make up everyday life here."
        crumb="Gallery"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <GalleryFilterGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
