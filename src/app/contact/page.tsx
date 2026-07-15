import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us | Meenakshi Men's PG",
  description:
    "Get in touch with Meenakshi Men's PG to enquire about room availability, schedule a visit, or ask any questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We'd Love to Hear From You"
        title="Contact Us"
        subtitle="Have a question or want to schedule a visit? Send us a message or reach out directly."
        crumb="Contact"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Find Your Room"
            subtitle="Fill out the form and our team will reach out with availability and pricing details."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.1}>
              <ContactInfo />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
