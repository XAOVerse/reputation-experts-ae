import type { Metadata } from "next";
import { ReviewsHeroSection } from "./sections/ReviewsHeroSection";
import { ReviewsStatsSection } from "./sections/ReviewsStatsSection";
import { CostOfBadReviewsSection } from "./sections/CostOfBadReviewsSection";
import { ListingOptimisationSection } from "./sections/ListingOptimisationSection";
import { ReputationScoreSection } from "./sections/ReputationScoreSection";
import { ReviewGrowthSection } from "./sections/ReviewGrowthSection";
import { OngoingProtectionSection } from "./sections/OngoingProtectionSection";
import { ReviewRemovalSection } from "../pricing/sections/ReviewRemovalSection";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { ReviewsFAQSection } from "./sections/ReviewsFAQSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { DentalCTASection } from "../home2/sections/DentalCTASection";
import { DentalContactSection } from "../home2/sections/DentalContactSection";

export const metadata: Metadata = {
  title:
    "Reviews — Reputation Experts | Grow reviews (90-day guarantee) & remove harmful ones (no-win, no-fee)",
  description:
    "Two products, two guarantees: we grow authentic 5-star reviews across nearly 200 platforms on a written 90-day score guarantee, and we remove harmful reviews on a no-win, no-fee basis — no removal, no payment. Plus listing and schema optimisation that search engines and AI engines actually read.",
};

export default function ReviewsPage() {
  return (
    <main>
      <ReviewsHeroSection />
      <ReviewsStatsSection />
      <CostOfBadReviewsSection />
      <ListingOptimisationSection />
      <ReputationScoreSection />
      <ReviewGrowthSection />
      <OngoingProtectionSection />
      <ReviewRemovalSection />
      <GuaranteeSection />
      <IndustriesSection />
      <ReviewsFAQSection />
      <DentalCTASection />
      <DentalContactSection />
    </main>
  );
}
