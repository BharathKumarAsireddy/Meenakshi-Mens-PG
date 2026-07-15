import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OurStory from "@/components/about/OurStory";
import ValuesGrid from "@/components/about/ValuesGrid";
import HouseGuidelines from "@/components/about/HouseGuidelines";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us | Meenakshi Men's PG",
  description:
    "Learn about Meenakshi Men's PG — our story, our values, and the house guidelines that keep the community comfortable and respectful.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Get to Know Us"
        title="About Meenakshi Men's PG"
        subtitle="A trusted, well-managed home for men away from home — built on comfort, safety and genuine care."
        crumb="About"
      />
      <OurStory />
      <ValuesGrid />
      <HouseGuidelines />
      <CTASection />
    </>
  );
}
