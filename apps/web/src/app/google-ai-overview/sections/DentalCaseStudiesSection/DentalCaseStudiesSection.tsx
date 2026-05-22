"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CaseStudyItem {
  quote: string;
  avatar?: { src: string; alt: string };
  name: string;
  title: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    quote:
      "A 5-star resort on Palm Jumeirah came to us with a 3.7-star Google rating, several damaging fake reviews, and a slipping position on Booking.com. Within just under four months, we removed 11 fake and policy-violating reviews, implemented a multilingual guest review strategy across English, Arabic and Russian, and lifted the resort\u2019s rating to 4.7 stars. Direct booking enquiries rose by 42%, and the resort moved from page two to the top of Booking.com results for Palm Jumeirah.",
    avatar: { src: "/images/dental-case-study-1.png", alt: "Palm Jumeirah Resort Case Study" },
    name: "Palm Jumeirah Resort",
    title: "Reputation Recovery for a 5-Star Resort in Palm Jumeirah",
  },
  {
    quote:
      "A boutique hotel in Downtown Dubai approached Reputation Experts with a 3.9-star rating and a mixed review profile that was costing it bookings during a period of softer demand. After challenging damaging reviews, building a structured system for generating authentic multilingual guest feedback, and strengthening the hotel\u2019s authority across Booking.com, TripAdvisor and Google, we lifted its rating to 4.8 stars within five months. Reservation enquiries rose by 31%, and the hotel began appearing in Google AI Overviews for searches like \"design hotels in Downtown Dubai\".",
    avatar: { src: "/images/dental-case-study-2.png", alt: "Downtown Dubai Boutique Hotel Case Study" },
    name: "Downtown Dubai Boutique Hotel",
    title: "Reputation Building for a Boutique Hotel in Downtown Dubai",
  },
  {
    quote:
      "A beach resort in JBR with strong physical assets was attracting attention online but losing too many travellers at the booking stage. A 4.0-star rating and inconsistent reviews across English-speaking and GCC guest segments were creating doubt at the moment of decision. Reputation Experts cleaned up damaging reviews, built a steady stream of authentic 5-star feedback in Arabic, English, Russian and Chinese, and strengthened the resort\u2019s presence across Booking.com, Agoda and TripAdvisor. Within four months, the rating rose to 4.8 stars and confirmed bookings grew by 38%.",
    avatar: { src: "/images/dental-case-study-3.png", alt: "JBR Beach Resort Case Study" },
    name: "JBR Beach Resort",
    title: "Reputation Acceleration for a Beach Resort in JBR Dubai",
  },
];

export function DentalCaseStudiesSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const prevActive = useRef(active);

  const handleSelect = (i: number) => {
    if (i === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      prevActive.current = i;
      setVisible(true);
    }, 180);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Case Studies"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        {/* Heading row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em]">
            Case Studies
          </h2>
          <Link
            href="#get-in-touch"
            className="inline-flex items-center rounded-full bg-[#0f0f0f] text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            Talk To Expert
          </Link>
        </div>

        {/* DESKTOP: expanding cards */}
        <div className="hidden lg:flex gap-3 items-stretch">
          {CASE_STUDIES.map((t, i) => {
            const isActive = i === active;

            if (isActive) {
              return (
                <div
                  key={i}
                  className="relative bg-[#f4f4f4] rounded-2xl p-8 flex flex-col justify-between min-h-[340px]"
                  style={{
                    flex: "1 1 0%",
                    minWidth: 0,
                    transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(10px)",
                      transition: "opacity 0.22s ease, transform 0.22s ease",
                    }}
                  >
                    <div className="text-[56px] font-serif leading-none text-[#0f0f0f] mb-3 select-none">
                      &ldquo;
                    </div>
                    <blockquote>
                      <p className="text-[#0f0f0f] text-[clamp(0.9rem,1.4vw,1.05rem)] font-medium leading-[1.7] tracking-[-0.01em]">
                        {t.quote}
                      </p>
                    </blockquote>
                  </div>
                  <footer
                    className="flex items-center gap-3 mt-8"
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: "opacity 0.22s ease 0.05s",
                    }}
                  >
                    {t.avatar ? (
                      <Image
                        src={t.avatar.src}
                        alt={t.avatar.alt}
                        width={44}
                        height={44}
                        className="w-11 h-11 rounded-xl object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm shrink-0">
                        {t.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-[#0f0f0f] font-semibold text-[14px]">{t.name}</p>
                      <p className="text-[#888] text-[12px]">{t.title}</p>
                    </div>
                  </footer>
                </div>
              );
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="bg-[#f7f7f7] rounded-2xl p-5 flex flex-col justify-between min-h-[340px] hover:bg-[#f0f0f0] cursor-pointer overflow-hidden"
                style={{
                  flex: "0 0 150px",
                  width: 150,
                  transition:
                    "flex 0.45s cubic-bezier(0.4,0,0.2,1), background-color 0.2s",
                }}
                aria-label={`View case study: ${t.title}`}
              >
                <div className="text-[32px] font-serif leading-none text-[#bbb] select-none">
                  &ldquo;
                </div>
                <div className="mt-auto">
                  {t.avatar ? (
                    <Image
                      src={t.avatar.src}
                      alt={t.avatar.alt}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm">
                      {t.name[0]}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* MOBILE: single card with fade + dots */}
        <div className="lg:hidden">
          <div className="relative bg-[#f4f4f4] rounded-2xl p-7 flex flex-col justify-between min-h-[320px]">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <div className="text-[48px] font-serif leading-none text-[#0f0f0f] mb-2 select-none">
                &ldquo;
              </div>
              <p className="text-[#0f0f0f] text-[15px] font-medium leading-[1.7] text-justify">
                {CASE_STUDIES[active].quote}
              </p>
            </div>
            <footer
              className="flex items-center gap-3 mt-6"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.22s ease 0.05s",
              }}
            >
              {CASE_STUDIES[active].avatar && (
                <Image
                  src={CASE_STUDIES[active].avatar!.src}
                  alt={CASE_STUDIES[active].avatar!.alt}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-cover shrink-0"
                />
              )}
              <div>
                <p className="text-[#0f0f0f] font-semibold text-[13px]">
                  {CASE_STUDIES[active].name}
                </p>
                <p className="text-[#888] text-[12px]">{CASE_STUDIES[active].title}</p>
              </div>
            </footer>
          </div>
          <div className="flex items-center justify-center gap-2.5 mt-5">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-7 h-2 bg-[#0f0f0f]" : "w-2 h-2 bg-[#ccc]"
                }`}
                aria-label={`Case study ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
