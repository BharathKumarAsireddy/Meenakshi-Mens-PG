import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import AboutPreview from "@/components/home/AboutPreview";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import MenuPreview from "@/components/home/MenuPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <FacilitiesPreview />
      <MenuPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
