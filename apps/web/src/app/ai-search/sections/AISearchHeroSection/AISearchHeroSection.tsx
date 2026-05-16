"use client";

import React from "react";
import Link from "next/link";

/**
 * AISearchHeroSection
 * Hero panel: eyebrow + headline with inline AI-engine logos + sub + dual CTA.
 * Right column: stylised inline dashboard mock showing AI engine recommendations.
 */
export function AISearchHeroSection() {
  return (
    <section
      className="bg-white pt-12 lg:pt-20 pb-10 lg:pb-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="AI Search hero"
    >
      <div className="max-w-[1499px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              AI Search
            </p>
            <h1
              className="text-[#0f0f0f] font-medium leading-[1.08] tracking-[-0.025em] mb-7"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}
            >
              Be the #1 answer when Dubai asks{" "}
              <span className="inline-flex items-center gap-2 align-middle">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#f5f5f5] text-[20px] lg:text-[24px]"
                >
                  ✦
                </span>
                <span className="font-semibold">AI</span>
              </span>
              {" "}for an answer.
            </h1>
            <p className="text-[#444] text-[16px] lg:text-[17px] leading-[1.65] mb-8 max-w-[440px] text-justify lg:text-left">
              AI agents that track your visibility across Google AI Overviews,
              ChatGPT, Perplexity and Gemini, then act on what is missing,
              across every location and every language your customers search in.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#FF461E] text-white text-[14px] font-semibold tracking-[0.01em] hover:bg-[#e63b15] transition-colors"
              >
                Get Your Free 7-Page Audit
              </Link>
            </div>
          </div>

          {/* Right: stylised AI answer card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#fff5f1] via-white to-[#f5f0ff] p-6 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#eee]">
              {/* Search bar mock */}
              <div className="bg-white rounded-full border border-[#e5e5e5] px-5 py-3 flex items-center gap-3 mb-6 shadow-sm">
                <span aria-hidden="true" className="text-[#999]">🔍</span>
                <span className="text-[14px] text-[#3c4043] truncate">
                  best dental clinic in Dubai Marina
                </span>
              </div>

              {/* AI engine answer cards */}
              <div className="space-y-3">
                {[
                  { engine: "Google AI Overview", color: "#4285F4", initial: "G" },
                  { engine: "ChatGPT", color: "#10A37F", initial: "✦" },
                  { engine: "Perplexity", color: "#1B998B", initial: "✺" },
                  { engine: "Gemini", color: "#8e6bff", initial: "✧" },
                ].map((row) => (
                  <div
                    key={row.engine}
                    className="bg-white rounded-2xl border border-[#eee] px-5 py-4 flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  >
                    <span
                      aria-hidden="true"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[16px] font-semibold flex-shrink-0"
                      style={{ backgroundColor: row.color }}
                    >
                      {row.initial}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#5f6368] mb-1">
                        {row.engine}
                      </p>
                      <p className="text-[13.5px] text-[#202124] leading-[1.45]">
                        Your clinic, recommended.
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="w-7 h-7 rounded-full bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center text-[14px] font-semibold flex-shrink-0"
                    >
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
