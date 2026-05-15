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
  title: "Dubai Business Services | Company Formation, PRO Services, Visa & Immigration, Business Licences, Accountants, Auditors & Tax Planners | Multilingual Reputation Management",
  description:
    "Dubai's only multilingual reputation team built for company formation specialists, business setup consultants, PRO services, visa and immigration consultants, business licensing agents, accountants, auditors and tax planners. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your firm at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee.",
};

export default function BusinessServicesPage() {
  return (
    <main>
      {/* 1. Hero */}
      <DentalHeroSection
        headline="Dubai’s only multilingual reputation team built for company formation and business services."
        subtitle="From company formation, business setup consultants and PRO services to visa and immigration consultants, business licensing agents, accountants, auditors and tax planners. International founders compare a dozen firms on Google Maps before they pick one, so a trustworthy review profile is the difference between closing the lead and losing it. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your firm at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee. Hit your goals, or full refund, no questions."
        ctaLabel="Get Your Free 7-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/business-services-1.png"
        imageAlt="Dubai business services and company formation reputation management"
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
