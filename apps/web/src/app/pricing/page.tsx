import type { Metadata } from "next";
import { PricingHeroSection } from "./sections/PricingHeroSection";
import { PricingTiersSection } from "./sections/PricingTiersSection";
import { AISearchVisibilitySection } from "./sections/AISearchVisibilitySection";
import { MediaCoverageSection } from "./sections/MediaCoverageSection";
import { ReputationProtectionSection } from "./sections/ReputationProtectionSection";
import { FeatureGridSection } from "./sections/FeatureGridSection";
import { ReviewRemovalSection } from "./sections/ReviewRemovalSection";
import { PricingGuaranteeSection } from "./sections/PricingGuaranteeSection";
import { PricingFAQSection } from "./sections/PricingFAQSection";
import { DentalCTASection } from "../home2/sections/DentalCTASection";
import { DentalContactSection } from "../home2/sections/DentalContactSection";

export const metadata: Metadata = {
  title:
    "Pricing — Reputation Experts | Transparent monthly tiers, 90-day guarantee, no setup fees",
  description:
    "Five tiers from AED 1,995/mo to AED 9,995/mo. Review growth, removals, AI search visibility, and press coverage across 400+ outlets. 90-day score guarantee written in.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHeroSection />
      <PricingTiersSection />
      <AISearchVisibilitySection />
      <MediaCoverageSection />
      <ReputationProtectionSection />
      <FeatureGridSection />
      <ReviewRemovalSection />
      <PricingGuaranteeSection />
      <PricingFAQSection />
      <DentalCTASection />
      <DentalContactSection />
    </main>
  );
}
