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
    "Pricing — Reputation Experts | 90-day score guarantee + no-win, no-fee removals",
  description:
    "Five subscription tiers from AED 1,995/mo to AED 9,995/mo, each with a written 90-day score guarantee. Review removals are no-win, no-fee — no removal, no payment. No setup fees.",
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
