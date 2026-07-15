import type { Metadata } from "next";
import { PricingHeroSection } from "./sections/PricingHeroSection";
import { WhatsIncludedSection } from "./sections/WhatsIncludedSection";
import { OutletsSection } from "./sections/OutletsSection";
import { ReviewRemovalSection } from "./sections/ReviewRemovalSection";
import { PricingGuaranteeSection } from "./sections/PricingGuaranteeSection";
import { PricingFAQSection } from "./sections/PricingFAQSection";
import { DentalCTASection } from "../home2/sections/DentalCTASection";
import { DentalContactSection } from "../home2/sections/DentalContactSection";

export const metadata: Metadata = {
  title:
    "Pricing — Reputation Experts | Daily reputation work, 90-day score guarantee",
  description:
    "Five tiers from AED 1,995/mo to AED 9,995/mo. We grind on your reputation daily so you don't have to think about it. 90-day score guarantee on every tier.",
};

export default function PricingPage() {
  return (
    <main>
      <ReviewRemovalSection />
      <PricingHeroSection />
      <WhatsIncludedSection />
      <OutletsSection />
      <PricingGuaranteeSection />
      <PricingFAQSection />
      <DentalCTASection />
      <DentalContactSection />
    </main>
  );
}
