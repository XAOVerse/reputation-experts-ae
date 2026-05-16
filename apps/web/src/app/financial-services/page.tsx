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
  title: "Dubai Financial Services | Brokerages, Investment Firms, Wealth Managers, Family Offices, Financial Advisors & Insurance Brokers | Multilingual Reputation Management",
  description:
    "Dubai's only multilingual reputation team built for brokerages, investment companies, family offices, wealth managers, financial advisors and insurance brokers. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your firm at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee. For accountants, tax planners, company formation and business setup, see /business-services.",
};

export default function FinancialServicesPage() {
  return (
    <main>
      {/* 1. Hero */}
      <DentalHeroSection
        headline="Dubai’s only multilingual reputation team built for financial firms."
        subtitle="From brokerages and investment companies to family offices, wealth managers, financial advisors and insurance brokers. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your firm at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee. Hit your goals, or full refund, no questions."
        ctaLabel="Get Your Free 5-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/financial-1.png"
        imageAlt="Dubai financial services reputation management"
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
