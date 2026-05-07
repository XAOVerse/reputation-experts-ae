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
// import { DentalCaseStudiesSection } from "./sections/DentalCaseStudiesSection"; // Hidden — re-enable when real cases ready
import { DentalFAQSection } from "./sections/DentalFAQSection";
import { PricingSection } from "./sections/PricingSection";
import { DentalCTASection } from "./sections/DentalCTASection";
import { DentalContactSection } from "./sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Dubai Hotels & Resorts — Multilingual Reputation Management with 90-Day Rating Guarantee",
  description:
    "Dubai's only multilingual reputation team built for hotels and resorts. Remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and rank in Google AI Overviews and ChatGPT recommendations. Transparent pricing from AED 8,500/month. Backed by a written 90-day rating-uplift guarantee.",
};

export default function HotelsResortsV2Page() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <DentalHeroSection
        headline="Dubai’s only multilingual reputation team built for hotels and resorts."
        subtitle="We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your property at the top of Google, Booking.com, TripAdvisor and AI-driven search — backed by a written 90-day rating-uplift guarantee."
        ctaLabel="Get Your Free 7-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/hotels-1.png"
        imageAlt="Dubai hotel and resort reputation management"
      />

      {/* ── 2. Trust Strip — press logos ─────────────────────────── */}
      <TrustStripSection />

      {/* ── 3. Problem Statement + Platform Cards ────────────────── */}
      <ProblemStatementSection />

      {/* ── 4. Dubai-specific market insight ─────────────────────── */}
      <DubaiInsightSection />

      {/* ── 5. Reputation Management Services ────────────────────── */}
      <ReputationManagementSection />

      {/* ── 6. Services accordion + detail panel ─────────────────── */}
      <DentalServicesSection />

      {/* ── 7. Digital Reputation Management ──────────────────────── */}
      <DigitalReputationSection />

      {/* ── 8. Industry Authority Brand in 6 Months ──────────────── */}
      <IndustryAuthoritySection />

      {/* ── 9. Google AI Overview ─────────────────────────────────── */}
      <GoogleAIOverviewSection />

      {/* ── 10. Platforms & Media Outlets ─────────────────────────── */}
      <PlatformsMediaSection />

      {/* ── 11. Case Studies — hidden until real Dubai cases ready ── */}
      {/* <DentalCaseStudiesSection /> */}

      {/* ── 12. FAQ ───────────────────────────────────────────────── */}
      <DentalFAQSection />

      {/* ── 13. Pricing — three tiers with performance guarantee ──── */}
      <PricingSection />

      {/* ── 14. CTA ───────────────────────────────────────────────── */}
      <DentalCTASection />

      {/* ── 15. Get in Touch ──────────────────────────────────────── */}
      <DentalContactSection />
    </main>
  );
}
