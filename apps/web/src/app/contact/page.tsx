import type { Metadata } from "next";
import { DentalContactSection } from "../home2/sections/DentalContactSection";
import { DentalCTASection } from "../home2/sections/DentalCTASection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Reputation Experts for a free, confidential consultation. UAE-based online reputation management for individuals and businesses.",
};

export default function ContactPage() {
  return (
    <main className="pt-[64px]">
      <DentalContactSection />
      <DentalCTASection />
    </main>
  );
}
