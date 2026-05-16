"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

/**
 * AISearchHeroSection
 * Hero with a rotating engine name in the headline: Perplexity → Gemini →
 * ChatGPT → AI, each with a stylised inline glyph. Right column keeps the
 * stylised AI-engines mock card.
 */

type Engine = {
  name: string;
  color: string;
  icon: React.ReactNode;
};

const ENGINES: Engine[] = [
  {
    name: "Perplexity",
    color: "#1B998B",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.85em] h-[0.85em]" aria-hidden="true">
        <g
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="M5.6 5.6l12.8 12.8" />
          <path d="M18.4 5.6L5.6 18.4" />
        </g>
      </svg>
    ),
  },
  {
    name: "Gemini",
    color: "#8e6bff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.85em] h-[0.85em]" aria-hidden="true">
        <path
          d="M12 2 C12 7 17 12 22 12 C17 12 12 17 12 22 C12 17 7 12 2 12 C7 12 12 7 12 2 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.85em] h-[0.85em]" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round">
          <path d="M12 4 L18 7.5 L18 16.5 L12 20 L6 16.5 L6 7.5 Z" />
          <path d="M12 4 L12 20" opacity="0.4" />
          <path d="M6 7.5 L18 16.5" opacity="0.4" />
          <path d="M18 7.5 L6 16.5" opacity="0.4" />
        </g>
      </svg>
    ),
  },
  {
    name: "AI",
    color: "#0f0f0f",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.85em] h-[0.85em]" aria-hidden="true">
        <path
          d="M12 2 L13.6 9 L20 10.4 L13.6 11.8 L12 19 L10.4 11.8 L4 10.4 L10.4 9 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export function AISearchHeroSection() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIdx((i) => (i + 1) % ENGINES.length);
        setVisible(true);
      }, 220);
      return () => clearTimeout(swap);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const engine = ENGINES[idx];

  return (
    <section
      className="bg-white pt-12 lg:pt-20 pb-10 lg:pb-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="AI Search hero"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <p className="text-[#7c7c7c] text-[15px] sm:text-[16px] font-normal tracking-[0.01em] mb-5">
              Search AI
            </p>
            <h1
              className="text-[#0f0f0f] font-medium leading-[1.05] tracking-[-0.025em] mb-7"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}
            >
              Be the #1 Answer for every location on{" "}
              <span
                className="inline-flex items-baseline gap-2 align-baseline transition-opacity duration-200"
                style={{ opacity: visible ? 1 : 0, color: engine.color }}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center"
                >
                  {engine.icon}
                </span>
                <span className="font-semibold">{engine.name}</span>
              </span>
            </h1>
            <p className="text-[#444] text-[16px] lg:text-[17px] leading-[1.65] mb-8 max-w-[440px] text-justify lg:text-left">
              AI agents that track visibility and act on what is missing, across
              every location.
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
            <div className="relative rounded-3xl bg-gradient-to-br from-[#fff5f1] via-white to-[#f5f0ff] p-5 lg:p-7 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#eee]">
              {/* Search bar mock */}
              <div className="bg-white rounded-full border border-[#e5e5e5] px-4 py-2.5 flex items-center gap-2.5 mb-4 shadow-sm">
                <span aria-hidden="true" className="text-[#999]">🔍</span>
                <span className="text-[12px] text-[#3c4043] truncate">
                  best dental clinic in Dubai Marina
                </span>
              </div>

              {/* AI engine answer cards */}
              <div className="space-y-2">
                {[
                  { engine: "Google AI Overview", color: "#4285F4", initial: "G" },
                  { engine: "ChatGPT", color: "#10A37F", initial: "✦" },
                  { engine: "Perplexity", color: "#1B998B", initial: "✺" },
                  { engine: "Gemini", color: "#8e6bff", initial: "✧" },
                ].map((row) => (
                  <div
                    key={row.engine}
                    className="bg-white rounded-xl border border-[#eee] px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  >
                    <span
                      aria-hidden="true"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-semibold flex-shrink-0"
                      style={{ backgroundColor: row.color }}
                    >
                      {row.initial}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#5f6368] mb-0.5">
                        {row.engine}
                      </p>
                      <p className="text-[11.5px] text-[#202124] leading-[1.4]">
                        Your clinic, recommended.
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="w-5 h-5 rounded-full bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center text-[11px] font-semibold flex-shrink-0"
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
