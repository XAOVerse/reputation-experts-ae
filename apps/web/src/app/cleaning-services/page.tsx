import type { Metadata } from "next";
import { DentalHeroSection } from "./sections/DentalHeroSection";
import { TrustStripSection } from "./sections/TrustStripSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { DubaiInsightSection } from "./sections/DubaiInsightSection";
import { ReputationManagementSection } from "./sections/ReputationManagementSection";
import { DentalServicesSection } from "./sections/DentalServicesSection";
import { DigitalReputationSection } from "./sections/DigitalReputationSection";
import { IndustryAuthoritySection } from "./sections/IndustryAuthoritySection";
import { GoogleAIOverviewSection } from "./sections/GoogleAIOverviewSection";
import { PlatformsMediaSection } from "./sections/PlatformsMediaSection";
// import { DentalCaseStudiesSection } from "./sections/DentalCaseStudiesSection"; // Hidden until real Dubai cases ready
import { DentalFAQSection } from "./sections/DentalFAQSection";
// Pricing intentionally hidden per request 2026-05-15
import { DentalCTASection } from "./sections/DentalCTASection";
import { DentalContactSection } from "./sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Dubai Cleaning Services | Residential, Commercial, Deep Cleaning, End-of-Tenancy, Maid Services, Carpet, Window & Disinfection | Multilingual Reputation Management",
  description:
    "Dubai's only multilingual reputation team built for cleaning and maid service companies: residential cleaning, commercial cleaning, deep cleaning, end-of-tenancy cleaning, maid services, carpet and sofa cleaning, window cleaning, disinfection, post-construction cleaning and AC duct cleaning. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your company at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee.",
};

export default function CleaningServicesPage() {
  return (
    <main>
      <DentalHeroSection
        headline="Dubai’s only multilingual reputation team built for cleaning and maid service companies."
        subtitle="From residential and commercial cleaning to deep cleaning, end-of-tenancy cleaning, maid services, carpet and sofa cleaning, window cleaning, disinfection, post-construction cleaning and AC duct cleaning. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your company at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee. Hit your goals, or full refund, no questions."
        ctaLabel="Get Your Free 5-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/cleaning-1.png"
        imageAlt="Dubai cleaning services reputation management"
      />

      <TrustStripSection />
      <ProblemStatementSection />
      <DubaiInsightSection />
      <ReputationManagementSection />
      <DentalServicesSection />
      <DigitalReputationSection />
      <IndustryAuthoritySection />
      <GoogleAIOverviewSection />
      <PlatformsMediaSection />
      {/* <DentalCaseStudiesSection /> hidden until real Dubai cases ready */}
      <DentalFAQSection />
      {/* Pricing hidden per request 2026-05-15 */}
      <DentalCTASection />
      <DentalContactSection />
    </main>
  );
}
