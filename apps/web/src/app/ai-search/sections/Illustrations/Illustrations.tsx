"use client";

import React from "react";

/* Visibility — bar chart per AI engine showing rank share */
export function VisibilityIllustration() {
  const data = [
    { engine: "Google AI Overview", you: 78, comp: 54 },
    { engine: "ChatGPT", you: 64, comp: 71 },
    { engine: "Perplexity", you: 56, comp: 39 },
    { engine: "Gemini", you: 52, comp: 33 },
  ];
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-7 lg:p-9">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#5f6368] mb-1">
            AI visibility share
          </p>
          <h3 className="text-[18px] font-semibold text-[#0f0f0f]">
            Your brand vs Dubai competitors
          </h3>
        </div>
        <div className="hidden sm:flex gap-3 text-[12px]">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#e8503a]" />
            <span className="text-[#444]">You</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#e5e5e5]" />
            <span className="text-[#444]">Competitor avg</span>
          </span>
        </div>
      </div>
      <ul className="space-y-4">
        {data.map((row) => (
          <li key={row.engine}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13.5px] text-[#0f0f0f] font-medium">
                {row.engine}
              </span>
              <span className="text-[12px] text-[#5f6368]">{row.you}%</span>
            </div>
            <div className="relative h-2.5 bg-[#f5f5f5] rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-[#e5e5e5] rounded-full"
                style={{ width: `${row.comp}%` }}
              />
              <div
                className="absolute inset-y-0 left-0 bg-[#e8503a] rounded-full"
                style={{ width: `${row.you}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Citations — list of source websites */
export function CitationsIllustration() {
  const sites = [
    { name: "Khaleej Times", cites: 142, you: true },
    { name: "Time Out Dubai", cites: 128, you: true },
    { name: "Condé Nast Traveller ME", cites: 96, you: true },
    { name: "Gulf News", cites: 71, you: false },
    { name: "The National", cites: 54, you: true },
    { name: "Hotelier Middle East", cites: 38, you: false },
  ];
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-7 lg:p-9">
      <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#5f6368] mb-1">
        Top citation sources
      </p>
      <h3 className="text-[18px] font-semibold text-[#0f0f0f] mb-6">
        Sites shaping AI answers about Dubai businesses
      </h3>
      <ul className="divide-y divide-[#f0f0f0]">
        {sites.map((s) => (
          <li key={s.name} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#f5f5f5] flex items-center justify-center text-[12px] font-semibold text-[#5f6368]">
                {s.name[0]}
              </span>
              <span className="text-[14px] text-[#0f0f0f] font-medium">
                {s.name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-[#5f6368] tabular-nums">
                {s.cites} citations
              </span>
              {s.you ? (
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#e8f5e9] text-[#2e7d32] font-semibold">
                  You appear
                </span>
              ) : (
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#fce8e6] text-[#c5221f] font-semibold">
                  Gap
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Accuracy — image asset of how AI engines currently describe a Dubai business */
export function AccuracyIllustration() {
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
      <img
        src="/images/accuracy-ai-overview.png"
        alt="Profile accuracy view: how AI engines currently describe a Dubai business across fields such as business name, categories, opening hours, phone number, languages served and service area."
        width={1627}
        height={967}
        className="w-full h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  );
}

/* Sentiment — SWOT view of how AI describes a business per location */
export function SentimentIllustration() {
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
      <img
        src="/images/sentiment-swot.png"
        alt="SWOT view of how AI describes a Dubai Marina business across strengths, weaknesses, opportunities and threats."
        width={1504}
        height={976}
        className="w-full h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  );
}

/* AI agents — workflow with three steps */
export function AIAgentsIllustration() {
  const steps = [
    { title: "Listings refresh", body: "Agents push Arabic + English copy to Google Business Profile, Apple Business Connect and Bing Places." },
    { title: "Review generation", body: "Agents send multilingual review requests timed to checkout, treatment completion or project handover." },
    { title: "Content updates", body: "Agents publish location-specific FAQs and service pages that AI engines cite." },
  ];
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-7 lg:p-9">
      <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#5f6368] mb-1">
        Agent activity, last 7 days
      </p>
      <h3 className="text-[18px] font-semibold text-[#0f0f0f] mb-6">
        Tasks Search AI executed automatically
      </h3>
      <ul className="space-y-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="flex gap-4 items-start p-4 bg-[#f7f5f1] rounded-2xl"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center text-[14px] font-semibold">
              {i + 1}
            </span>
            <div>
              <p className="text-[14.5px] font-semibold text-[#0f0f0f] mb-1">
                {s.title}
              </p>
              <p className="text-[13px] text-[#5f6368] leading-[1.55]">
                {s.body}
              </p>
            </div>
            <span className="ml-auto text-[11px] px-2.5 py-0.5 rounded-full bg-[#e8f5e9] text-[#2e7d32] font-semibold whitespace-nowrap">
              Live
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
