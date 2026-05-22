"use client";

import { useState } from "react";

interface Item { id: string; label: string }

export default function MobileTOC({
  items,
  borderColor,
  activeColor,
}: {
  items: Item[];
  borderColor: string;
  activeColor: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-toc-list"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left px-5"
        style={{
          paddingTop: "18px",
          paddingBottom: "18px",
          background: "transparent",
          border: "none",
        }}
      >
        <span
          className="text-black font-normal"
          style={{ fontSize: "17px", lineHeight: "24px" }}
        >
          What&apos;s inside
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            color: "#000",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id="mobile-toc-list"
          style={{ borderTop: `1px solid ${borderColor}` }}
        >
          {items.map((it) => (
            <li
              key={it.id}
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              <a
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className="block px-5"
                style={{
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  color: "#000",
                  fontSize: "15px",
                  lineHeight: "22px",
                  textDecoration: "none",
                }}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
