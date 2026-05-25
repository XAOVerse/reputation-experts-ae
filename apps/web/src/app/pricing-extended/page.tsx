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
    "Pricing (Extended Detail)",
  description:
    "Full feature-by-feature pricing detail for procurement and detail-hungry buyers. Five tiers from AED 1,995/mo to AED 9,995/mo with 90-day score guarantee.",
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
