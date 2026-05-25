"use client";

import React, { useEffect, useState } from "react";

type Lang = "en" | "ar";

const LANG_KEY = "rx-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const v = window.localStorage.getItem(LANG_KEY);
    if (v === "ar" || v === "en") return v;
  } catch {}
  return "en";
}

function applyLangToDocument(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

export function LanguageToggle({
  variant = "header",
}: {
  variant?: "header" | "footer";
}) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const initial = getInitialLang();
    setLang(initial);
    applyLangToDocument(initial);
  }, []);

  const switchTo = (next: Lang) => {
    if (next === lang) return;
    setLang(next);
    applyLangToDocument(next);
    try {
      window.localStorage.setItem(LANG_KEY, next);
    } catch {}
  };

  const isHeader = variant === "header";

  return (
    <div
      className={`inline-flex items-center text-[12px] font-medium select-none ${
        isHeader ? "" : "text-white/70"
      }`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-1 rounded-l-full transition-colors ${
          isHeader
            ? lang === "en"
              ? "bg-[#1a1a1a] text-white"
              : "text-[#1a1a1a] hover:bg-[#f5f5f5]"
            : lang === "en"
            ? "bg-white text-[#141414]"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
      <span
        className={`text-[10px] ${
          isHeader ? "text-[#cccccc]" : "text-white/30"
        }`}
        aria-hidden
      >
        |
      </span>
      <button
        type="button"
        onClick={() => switchTo("ar")}
        aria-pressed={lang === "ar"}
        className={`px-2 py-1 rounded-r-full transition-colors ${
          isHeader
            ? lang === "ar"
              ? "bg-[#1a1a1a] text-white"
              : "text-[#1a1a1a] hover:bg-[#f5f5f5]"
            : lang === "ar"
            ? "bg-white text-[#141414]"
            : "text-white/70 hover:text-white"
        }`}
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        AR
      </button>
    </div>
  );
}
