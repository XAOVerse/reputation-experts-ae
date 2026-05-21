"use client";

import { useEffect, useState } from "react";

interface Item { id: string; label: string }

export default function TemplateTOC({
  items,
  borderColor,
  activeColor,
}: {
  items: Item[];
  borderColor: string;
  activeColor: string;
}) {
  const [activeId, setActiveId] = useState<string>(items[items.length - 1]?.id ?? "");

  useEffect(() => {
    const handler = () => {
      const offset = 140;
      let current = items[0]?.id ?? "";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = it.id;
      }
      setActiveId(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [items]);

  return (
    <ul style={{ borderTop: `1px solid ${borderColor}` }}>
      {items.map((it) => {
        const isActive = activeId === it.id;
        return (
          <li
            key={it.id}
            style={{
              borderBottom: `1px solid ${borderColor}`,
              position: "relative",
            }}
          >
            <a
              href={`#${it.id}`}
              style={{
                display: "block",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: isActive ? "40px" : "41px",
                paddingRight: "40px",
                borderLeft: isActive ? `4px solid ${activeColor}` : "none",
                color: isActive ? activeColor : "#000",
                fontSize: "20px",
                lineHeight: "28px",
                textDecoration: "none",
                fontWeight: 400,
                transition: "color 0.15s",
              }}
            >
              {it.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
