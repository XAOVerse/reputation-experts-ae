"use client";

import React from "react";

const CARDS = [
  {
    title: "Visibility insights",
    bullets: [
      "How often does AI mention you?",
      "How do you rank across locations?",
      "How does AI describe you?",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" stroke="#0f0f0f" strokeWidth="1.5" />
        <path d="M3 12h18M12 3v18" stroke="#0f0f0f" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Citations intelligence",
    bullets: [
      "What sites shape AI answers?",
      "Does your brand feature there?",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M5 7h14M5 12h14M5 17h9"
          stroke="#0f0f0f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Agent-led execution",
    bullets: [
      "Agents create and update website content.",
      "Agents generate reviews and fix your listings.",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="9" r="3" stroke="#0f0f0f" strokeWidth="1.5" />
        <path
          d="M6 20c0-3 2.7-5 6-5s6 2 6 5"
          stroke="#0f0f0f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M18 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#e8503a" />
      </svg>
    ),
  },
];

export function CapabilitiesGridSection() {
  return (
    <section
      className="bg-white py-16 lg:py-24"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="What Search AI does"
    >
      <div className="max-w-[1499px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2
          className="text-center text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-12 lg:mb-16 max-w-[1100px] mx-auto"
          style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
        >
          The tools Dubai brands need to dominate AI search and reach more customers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#eee] rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-white border border-[#eee] flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-[#0f0f0f] text-[22px] lg:text-[24px] font-medium tracking-[-0.01em] mb-5">
                {card.title}
              </h3>
              <ul className="space-y-3 text-left max-w-[300px] mx-auto w-full">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[14.5px] text-[#444] leading-[1.5]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e8503a] text-white text-[11px] flex items-center justify-center mt-0.5"
                    >
                      →
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
