import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FacilitiesGrid from "@/components/facilities/FacilitiesGrid";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Facilities | Meenakshi Men's PG",
  description:
    "Explore all facilities at Meenakshi Men's PG — AC rooms, 24/7 WiFi, CCTV security, hot water, purified drinking water, washing machines, parking and veg & non-veg meals.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Everything Included"
        title="Our Facilities"
        subtitle="Every stay includes a full suite of modern amenities — no hidden add-ons, no compromises."
        crumb="Facilities"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Browse by Category"
            title="Amenities Built Around You"
            subtitle="Filter through comfort, food, safety and everyday convenience to see exactly what's included."
          />

          <div className="mt-14">
            <FacilitiesGrid />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
