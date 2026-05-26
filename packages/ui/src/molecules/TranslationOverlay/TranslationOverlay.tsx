"use client";

import React, { useEffect } from "react";
import { AR_DICT } from "./ar-dictionary";

/**
 * TranslationOverlay
 * ──────────────────
 * Client-side translation layer for reputationexperts.ae.
 *
 * How it works
 * ────────────
 * 1. Reads the language preference written by <LanguageToggle/> from
 *    localStorage ("rx-lang" key). LanguageToggle already sets
 *    document.documentElement.lang and dir accordingly.
 * 2. When lang === "ar", walks every text node in <body>, looks up the
 *    trimmed text content in AR_DICT, and replaces it with the Arabic
 *    rendering — preserving surrounding whitespace.
 * 3. Also rewrites a small set of attribute values (aria-label, alt,
 *    placeholder, title) that the dictionary covers, so screen readers
 *    and tooltips localise too.
 * 4. A MutationObserver re-applies the overlay whenever new DOM is
 *    inserted (route changes, modals, etc).
 * 5. To avoid a flash of English, <body> is hidden via inline style
 *    until the first translation pass completes (or 1.5s passes —
 *    whichever comes first, so an unknown bug never leaves the page
 *    invisible).
 */

const LANG_KEY = "rx-lang";
const PROCESSED = Symbol("rx-translated");

type TaggedNode = Text & { [PROCESSED]?: boolean };

// Skip nodes inside these tags entirely.
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "CODE",
  "PRE",
  "NOSCRIPT",
  "TEMPLATE",
]);

// Skip elements that opt out (e.g. brand wordmarks, code snippets).
function shouldSkip(node: Node | null): boolean {
  let n: Node | null = node;
  while (n) {
    if (n.nodeType === 1) {
      const el = n as HTMLElement;
      if (SKIP_TAGS.has(el.tagName)) return true;
      if (el.hasAttribute("data-no-translate")) return true;
    }
    n = n.parentNode;
  }
  return false;
}

function translateTextNode(node: TaggedNode): void {
  if (node[PROCESSED]) return;
  const raw = node.nodeValue ?? "";
  const trimmed = raw.trim();
  if (!trimmed) return;
  const hit = AR_DICT[trimmed];
  if (!hit) return;
  // Preserve leading/trailing whitespace from the original text node
  const leading = raw.match(/^\s*/)?.[0] ?? "";
  const trailing = raw.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = leading + hit + trailing;
  node[PROCESSED] = true;
}

function translateAttributes(el: Element): void {
  const attrs = ["aria-label", "alt", "placeholder", "title"] as const;
  for (const a of attrs) {
    const v = el.getAttribute(a);
    if (!v) continue;
    const hit = AR_DICT[v.trim()];
    if (hit) el.setAttribute(a, hit);
  }
}

function walkAndTranslate(root: Node): void {
  if (shouldSkip(root)) return;
  // Translate attributes on the root if it is an element
  if (root.nodeType === 1) translateAttributes(root as Element);

  // Walk all descendants
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(n) {
        if (n.nodeType === 1) {
          const el = n as HTMLElement;
          if (SKIP_TAGS.has(el.tagName)) return NodeFilter.FILTER_REJECT;
          if (el.hasAttribute("data-no-translate")) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    },
  );
  let cur: Node | null = walker.nextNode();
  while (cur) {
    if (cur.nodeType === 1) {
      translateAttributes(cur as Element);
    } else if (cur.nodeType === 3) {
      translateTextNode(cur as TaggedNode);
    }
    cur = walker.nextNode();
  }
}

function getLang(): "en" | "ar" {
  try {
    const v = window.localStorage.getItem(LANG_KEY);
    if (v === "ar" || v === "en") return v;
  } catch {}
  return "en";
}

export function TranslationOverlay() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const lang = getLang();
    // Ensure html element reflects saved preference on every page load,
    // even when LanguageToggle hasn't mounted yet (e.g. route transitions).
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    if (lang !== "ar") return; // English is the source; nothing to do.

    // First pass — hide the body briefly to avoid flash of English.
    const body = document.body;
    if (body) body.style.visibility = "hidden";

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      if (body) body.style.visibility = "";
    };

    const runOnce = () => {
      try {
        walkAndTranslate(document.body);
      } catch (e) {
        // Never let a translation error blank the page
        // eslint-disable-next-line no-console
        console.warn("[ar-overlay] translation pass error", e);
      }
      reveal();
    };

    // Run immediately, then again on next frame to catch any pending paint.
    runOnce();
    requestAnimationFrame(runOnce);

    // Failsafe — never leave the page invisible.
    const failsafe = window.setTimeout(reveal, 1500);

    // Observe future DOM changes from React re-renders / route changes.
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1 || n.nodeType === 3) walkAndTranslate(n);
        });
        if (m.type === "characterData" && m.target.nodeType === 3) {
          // React replaced a text node's value — re-evaluate it
          (m.target as TaggedNode)[PROCESSED] = false;
          translateTextNode(m.target as TaggedNode);
        }
        if (m.type === "attributes" && m.target.nodeType === 1) {
          translateAttributes(m.target as Element);
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["aria-label", "alt", "placeholder", "title"],
    });

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      reveal();
    };
  }, []);

  return null;
}
