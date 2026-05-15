"use client";

import React from "react";

export function StatBannerSection() {
  return (
    <section
      className="bg-[#0f0f0f] text-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="AI visibility outcome"
    >
      <div className="max-w-[1499px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              The outcome
            </p>
            <h2
              className="font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)" }}
            >
              Multi-location brands see AI search visibility lift{" "}
              <span className="text-[#ff9b6b]">61% within 60 days</span>{" "}
              of switching on Search AI.
            </h2>
          </div>

          {/* Stylised before/after bar chart */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-10 border border-[#2a2a2a]">
            <div className="flex items-end justify-around gap-6 h-[240px]">
              {[
                { label: "Day 0", value: 38, color: "#5a5a5a" },
                { label: "Day 30", value: 71, color: "#e8503a" },
                { label: "Day 60", value: 100, color: "#ff9b6b" },
              ].map((bar) => (
                <div
                  key={bar.label}
                  className="flex flex-col items-center justify-end h-full flex-1"
                >
                  <p
                    className="text-[20px] font-semibold mb-2"
                    style={{ color: bar.color }}
                  >
                    {bar.value === 38
                      ? "Baseline"
                      : `+${Math.round(((bar.value - 38) / 38) * 100)}%`}
                  </p>
                  <div
                    className="w-full max-w-[80px] rounded-t-xl"
                    style={{
                      height: `${bar.value}%`,
                      backgroundColor: bar.color,
                    }}
                  />
                  <p className="text-[12px] text-[#999] mt-3 tracking-[0.1em] uppercase">
                    {bar.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#666] mt-6 leading-[1.5]">
              Average lift across Dubai multi-location brands enrolled in
              Search AI, measured against AI Overview citation share and ChatGPT recommendation surface, 2025 cohort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
