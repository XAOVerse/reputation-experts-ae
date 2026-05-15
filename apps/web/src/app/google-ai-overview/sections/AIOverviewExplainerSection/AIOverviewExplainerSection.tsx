"use client";

import React from "react";

/**
 * AIOverviewExplainerSection
 * Shows a stylised mock of a Google AI Overview answering a Dubai query,
 * with the three cited sources highlighted. Communicates the new buying
 * funnel: searcher reads the AI answer, picks one of the three citations,
 * never scrolls to the old blue-link results.
 */
export function AIOverviewExplainerSection() {
  return (
    <section
      className="bg-[#f7f5f1] py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="What Google AI Overview looks like"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column: explainer */}
          <div className="lg:col-span-5">
            <div className="h-[2px] w-10 bg-[#e8503a] mb-6" aria-hidden="true" />
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
              How Dubai search has changed
            </p>
            <h2
              className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
            >
              Google now answers the question. Three businesses get cited. The rest get nothing.
            </h2>
            <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-5">
              When a Dubai resident searches for the best in any category, Google
              now generates a single answer at the top of the page using AI.
              That answer typically names two or three specific businesses with
              clickable citations. The traditional ten blue links sit below the
              fold, scrolled past, irrelevant.
            </p>
            <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7]">
              The same shift is happening on ChatGPT, Perplexity and Gemini.
              When a tourist in London asks ChatGPT for the best restaurant in
              Dubai before they fly, the AI returns names. Be one of those
              names, or watch your competitor be it instead.
            </p>
          </div>

          {/* Right column: stylised search-result mock */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#eee] overflow-hidden">
              {/* fake browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#f0f0f0]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8503a]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f5b400]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2ea44f]" aria-hidden="true" />
                <span className="ml-3 text-[12px] text-[#999] truncate">
                  google.com/search
                </span>
              </div>

              {/* fake search bar */}
              <div className="px-6 pt-6">
                <div className="border border-[#e5e5e5] rounded-full px-5 py-3 text-[14px] text-[#3c4043]">
                  best aesthetic clinic in Dubai Marina
                </div>
              </div>

              {/* AI Overview block */}
              <div className="px-6 pt-6 pb-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1967d2]">
                    <span aria-hidden="true">✦</span> AI Overview
                  </span>
                  <span className="text-[11px] text-[#999]">Generated answer</span>
                </div>
                <p className="text-[#202124] text-[15px] leading-[1.65] mb-4">
                  Three clinics consistently lead the Marina aesthetic market on
                  patient reviews, multilingual care and clinician credentials:
                </p>
                <ol className="space-y-3 mb-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1967d2] text-white text-[12px] font-semibold flex items-center justify-center">
                      1
                    </span>
                    <span className="text-[14px] text-[#202124] leading-[1.55]">
                      <span className="font-semibold underline decoration-[#1967d2] underline-offset-2">
                        Clinic A
                      </span>
                      , 4.8 stars across 920 verified reviews, Arabic and
                      Russian-speaking clinicians on staff.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1967d2] text-white text-[12px] font-semibold flex items-center justify-center">
                      2
                    </span>
                    <span className="text-[14px] text-[#202124] leading-[1.55]">
                      <span className="font-semibold underline decoration-[#1967d2] underline-offset-2">
                        Clinic B
                      </span>
                      , 4.7 stars, recently featured in Condé Nast Traveller
                      Middle East, JCI-accredited.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1967d2] text-white text-[12px] font-semibold flex items-center justify-center">
                      3
                    </span>
                    <span className="text-[14px] text-[#202124] leading-[1.55]">
                      <span className="font-semibold underline decoration-[#1967d2] underline-offset-2">
                        Clinic C
                      </span>
                      , 4.9 stars, specialised in non-surgical facial
                      treatments, multilingual booking.
                    </span>
                  </li>
                </ol>
                <p className="text-[11px] text-[#5f6368]">
                  Sources: Google Business Profile reviews, Condé Nast Traveller
                  Middle East, clinic websites.
                </p>
              </div>

              {/* faded "10 blue links" beneath */}
              <div className="px-6 pt-6 pb-6 border-t border-[#f0f0f0] opacity-30">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="h-2 w-32 bg-[#e0e0e0] rounded" />
                    <div className="h-3 w-3/4 bg-[#1967d2] rounded" />
                    <div className="h-2 w-full bg-[#e0e0e0] rounded" />
                    <div className="h-2 w-5/6 bg-[#e0e0e0] rounded" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-28 bg-[#e0e0e0] rounded" />
                    <div className="h-3 w-2/3 bg-[#1967d2] rounded" />
                    <div className="h-2 w-full bg-[#e0e0e0] rounded" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#999] mt-3 leading-[1.5]">
              Illustration. Clinic names anonymised. Sources, ratings and
              citations modelled on the real format Google AI Overview uses for
              Dubai aesthetic-clinic queries in 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
