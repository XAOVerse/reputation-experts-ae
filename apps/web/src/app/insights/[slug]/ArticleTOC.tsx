"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

export default function ArticleTOC({
  sections,
  extra = [],
}: {
  sections: TOCItem[];
  extra?: TOCItem[];
}) {
  const items = [...sections, ...extra];
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const handler = () => {
      const offset = 120;
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
    <nav aria-label="Article contents">
      <p className="text-[#1a1a1a] text-[22px] font-semibold leading-tight mb-6 tracking-[-0.01em]">
        What's inside
      </p>
      <ul className="border-t border-[#e4e4e4]">
        {items.map((it) => {
          const isActive = activeId === it.id;
          return (
            <li
              key={it.id}
              className="border-b border-[#e4e4e4] relative"
            >
              {isActive && (
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF461E]"
                />
              )}
              <a
                href={`#${it.id}`}
                className={`block py-4 pl-4 pr-2 text-[15px] leading-[1.45] transition-colors ${
                  isActive
                    ? "text-[#FF461E] font-medium"
                    : "text-[#1a1a1a] hover:text-[#FF461E]"
                }`}
              >
                {it.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
