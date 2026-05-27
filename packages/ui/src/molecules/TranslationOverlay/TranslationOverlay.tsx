"use client";

import React, { useEffect } from "react";
import { AR_DICT } from "./ar-dictionary";

/**
 * TranslationOverlay
 * ──────────────────
 * Client-side translation layer for reputationexperts.ae.
 *
 * Performance redesign (v2):
 * ─────────────────────────
 * The first version observed mutations synchronously and re-translated each
 * node as it changed. On pages with frequent React re-renders or animated
 * dashboards (e.g. /ai-search), this accumulated work over time and
 * eventually exhausted the main thread, surfacing as "Page Unresponsive".
 *
 * v2 changes:
 *   1. Mutation handling is batched into a single requestAnimationFrame
 *      callback. We collect changed nodes in a Set and walk them once per
 *      frame, deduplicated.
 *   2. Each translatable text node has its English source cached in a
 *      WeakMap. When React overwrites our Arabic value with English, we
 *      look up the cached English source and re-translate in O(1).
 *   3. The observer auto-disconnects after 5 seconds with no mutations and
 *      reconnects on the next user interaction (scroll/click/keypress) or
 *      visibility change. Static pages cost nothing once settled.
 *   4. Attribute observation is restricted to a tiny allowlist and ignored
 *      entirely when the value hasn't actually changed.
 */

const LANG_KEY = "rx-lang";
const PROCESSED = Symbol("rx-translated");

type TaggedNode = Text & { [PROCESSED]?: boolean };

// Cache the original English source for every text node we have ever
// translated. Lets us recognise React re-renders that overwrite our Arabic
// with the original English, without scanning the dictionary every time.
const englishCache = new WeakMap<Text, string>();

// ── Prefix-anchored fallback index ──────────────────────────────────────────
// The site's long marketing paragraphs are edited frequently — usually only
// the *closing clause* changes while the opening sentence stays identical.
// Exact-string matching breaks on every such edit. To stay robust, we build an
// index of long dictionary entries keyed by a normalised prefix (first
// PREFIX_LEN chars). When an exact match fails on a long text node we look it
// up by prefix; if EXACTLY ONE dictionary entry shares that prefix we use its
// translation. Requiring uniqueness avoids mistranslating two paragraphs that
// merely begin the same way. Short strings never use the fallback.
const PREFIX_LEN = 60;
const MIN_FALLBACK_LEN = 120;

function normalise(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

let prefixIndex: Map<string, string | null> | null = null;

function buildPrefixIndex(): Map<string, string | null> {
  const idx = new Map<string, string | null>();
  for (const key of Object.keys(AR_DICT)) {
    if (key.length < MIN_FALLBACK_LEN) continue;
    const pfx = normalise(key).slice(0, PREFIX_LEN);
    idx.set(pfx, idx.has(pfx) ? null : key);
  }
  return idx;
}

function prefixFallback(trimmed: string): string | undefined {
  if (trimmed.length < MIN_FALLBACK_LEN) return undefined;
  if (!prefixIndex) prefixIndex = buildPrefixIndex();
  const pfx = normalise(trimmed).slice(0, PREFIX_LEN);
  const key = prefixIndex.get(pfx);
  if (!key) return undefined;
  return AR_DICT[key];
}

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "CODE",
  "PRE",
  "NOSCRIPT",
  "TEMPLATE",
]);

function shouldSkipElement(el: Element): boolean {
  if (SKIP_TAGS.has(el.tagName)) return true;
  if (el.hasAttribute("data-no-translate")) return true;
  return false;
}

function translateTextNode(node: TaggedNode): boolean {
  const raw = node.nodeValue ?? "";
  const trimmed = raw.trim();
  if (!trimmed) return false;

  // If this exact value is the Arabic translation we last produced, skip.
  // We detect that by checking if the cached English source maps to the
  // current value via the dictionary.
  const cachedEn = englishCache.get(node);
  if (cachedEn !== undefined && AR_DICT[cachedEn] === trimmed) {
    return false; // already translated
  }

  // Direct dictionary hit on current content?
  const hit = AR_DICT[trimmed];
  if (hit) {
    // First-time translation — remember the English source for later.
    englishCache.set(node, trimmed);
    const leading = raw.match(/^\s*/)?.[0] ?? "";
    const trailing = raw.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = leading + hit + trailing;
    return true;
  }

  // React may have re-rendered: current value looks new (not Arabic, not in
  // dict). If the cached English exists and the current value happens to
  // BE that English (or a small variant), re-translate.
  if (cachedEn !== undefined) {
    const cachedHit = AR_DICT[cachedEn];
    if (cachedHit && trimmed === cachedEn) {
      const leading = raw.match(/^\s*/)?.[0] ?? "";
      const trailing = raw.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leading + cachedHit + trailing;
      return true;
    }
  }

  // Last resort: prefix-anchored fallback for long paragraphs whose ending
  // was edited after the dictionary entry was written. Only fires when a
  // single dictionary entry uniquely shares the first PREFIX_LEN chars.
  const fb = prefixFallback(trimmed);
  if (fb) {
    englishCache.set(node, trimmed);
    const leading = raw.match(/^\s*/)?.[0] ?? "";
    const trailing = raw.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = leading + fb + trailing;
    return true;
  }
  return false;
}

const ATTR_KEYS = ["aria-label", "alt", "placeholder", "title"] as const;

function translateAttributes(el: Element): void {
  for (const a of ATTR_KEYS) {
    const v = el.getAttribute(a);
    if (!v) continue;
    const t = v.trim();
    const hit = AR_DICT[t];
    if (hit && hit !== v) el.setAttribute(a, hit);
  }
}

function walkAndTranslate(root: Node): void {
  // Walk text nodes under root, skipping opted-out subtrees.
  if (root.nodeType === 1) {
    const el = root as Element;
    if (shouldSkipElement(el)) return;
    translateAttributes(el);
  } else if (root.nodeType === 3) {
    translateTextNode(root as TaggedNode);
    return;
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(n) {
        if (n.nodeType === 1) {
          return shouldSkipElement(n as Element)
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    },
  );
  let cur: Node | null = walker.nextNode();
  while (cur) {
    if (cur.nodeType === 1) {
      translateAttributes(cur as Element);
    } else {
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
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    if (lang !== "ar") return;

    const body = document.body;
    if (body) body.style.visibility = "hidden";
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      if (body) body.style.visibility = "";
    };

    // First-pass translation
    try {
      walkAndTranslate(document.body);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("[ar-overlay] first pass error", e);
    }
    reveal();

    // ── Batched MutationObserver ──────────────────────────────────────────
    const pending = new Set<Node>();
    let rafId = 0;
    let lastActivity = Date.now();

    const flush = () => {
      rafId = 0;
      if (pending.size === 0) return;
      const batch = Array.from(pending);
      pending.clear();
      lastActivity = Date.now();
      try {
        for (const n of batch) {
          // Node may have been removed since the mutation; isConnected covers it
          if (!n.isConnected) continue;
          walkAndTranslate(n);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("[ar-overlay] batched flush error", e);
      }
    };

    const schedule = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(flush);
    };

    let observer: MutationObserver | null = null;
    const connect = () => {
      if (observer) return;
      observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === "childList") {
            m.addedNodes.forEach((n) => {
              if (n.nodeType === 1 || n.nodeType === 3) pending.add(n);
            });
          } else if (m.type === "characterData" && m.target.nodeType === 3) {
            pending.add(m.target);
          } else if (m.type === "attributes" && m.target.nodeType === 1) {
            pending.add(m.target);
          }
        }
        if (pending.size) schedule();
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: [...ATTR_KEYS],
      });
    };
    const disconnect = () => {
      if (!observer) return;
      observer.disconnect();
      observer = null;
    };

    connect();

    // Auto-disconnect after 5s of no activity — reconnect on user input.
    const STABILITY_MS = 5000;
    const stabilityInterval = window.setInterval(() => {
      if (observer && Date.now() - lastActivity > STABILITY_MS) {
        disconnect();
      }
    }, 1000);

    // Reconnect on user interaction or visibility return.
    const onActivity = () => {
      lastActivity = Date.now();
      connect();
      // Also do one immediate sweep in case the user-triggered change has
      // already injected new English text (e.g. accordion expand).
      schedule();
      pending.add(document.body);
    };
    const events = ["click", "keydown", "scroll", "touchstart", "focus"] as const;
    for (const ev of events) {
      window.addEventListener(ev, onActivity, { passive: true, capture: true });
    }
    const onVisibility = () => {
      if (document.visibilityState === "visible") onActivity();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      disconnect();
      window.clearInterval(stabilityInterval);
      if (rafId) cancelAnimationFrame(rafId);
      for (const ev of events) {
        window.removeEventListener(ev, onActivity, { capture: true });
      }
      document.removeEventListener("visibilitychange", onVisibility);
      reveal();
    };
  }, []);

  return null;
}
