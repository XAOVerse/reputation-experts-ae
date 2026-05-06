import {
  HeroSection,
  WhoWeServeSection,
  ServicesSection,
  KeyBenefitsSection,
  TestimonialsSection,
  AwardsStrip,
  ProcessSection,
  PrivacySection,
  FAQSection,
  CTASection,
} from "@repute/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Test — Reputation Experts",
  description:
    "Alternative home design for review. Reputation Experts helps businesses with online reputation management.",
  robots: { index: false, follow: false },
};

export default function HomeTestPage() {
  return (
    <main>
      <HeroSection
        headline="Protect your Business from Harmful Online Reviews"
        highlightWord=""
        quote="Professional assistance with assessing and disputing harmful or policy-violating online reviews and online content."
        quoteBold="Fast assessment. Confidential process."
        subQuote="Negative reviews can impact customer trust within hours. Understand your options before the damage spreads."
        ctaLabel="Free Reputation Case Assessment"
        ctaLink="/contact"
        mediaCaption="founder of Reputation Experts – a reputation management firm"
        mediaSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      />

      <WhoWeServeSection
        heading="Who We Serve"
        ctaLabel="Free Assessment"
        ctaHref="/contact"
      />

      <ServicesSection heading="Services" />

      <KeyBenefitsSection heading="Key Benefits" />

      <TestimonialsSection
        heading="Testimonials"
        ctaLabel="Contact us"
        ctaHref="/contact"
      />

      <AwardsStrip heading="Awards and Mentions" />

      <ProcessSection heading="Our Process" />

      <PrivacySection heading="How We Safeguard Your Privacy" />

      <FAQSection heading="FAQ" />

      <CTASection headline={"Free Reputation\nCase Assessment"} />
    </main>
  );
}
