// Reputation Experts - Online Reputation Management
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import "./globals.css";
import { Header } from "@repute/ui";
import { Footer } from "@repute/ui";
import { CookieBanner } from "@repute/ui";
import { TranslationOverlay } from "@repute/ui";

export const metadata: Metadata = {
  title: {
    default: "Reputation Experts — Online Reputation Management",
    template: "%s | Reputation Experts",
  },
  description:
    "Professional online reputation management for individuals and businesses. Take control of your digital presence across search results, review platforms, and social media.",
  metadataBase: new URL("https://reputationexperts.ae"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Reputation Experts",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // SSR-aware language detection: read the rx-lang cookie set by
  // LanguageToggle so that <html lang/dir> renders correctly server-side
  // and we avoid any layout shift on first paint for Arabic visitors.
  let lang: "en" | "ar" = "en";
  try {
    const cookieStore = await cookies();
    const v = cookieStore.get("rx-lang")?.value;
    if (v === "ar" || v === "en") lang = v;
  } catch {
    // cookies() may throw at static generation time — that's fine, default
    // to English; the client overlay will correct it on hydration.
  }
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        {/* Arabic webfont — only loaded if Arabic is the active language */}
        {lang === "ar" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Tajawal:wght@300;400;500;700&display=swap"
            />
          </>
        )}
      </head>
      <body suppressHydrationWarning>
        <TranslationOverlay />
        <Header
          brandName="Reputation Experts"
          ctaLabel="Contact us"
          ctaLink="/contact"
          servicesLabel="Services"
          servicesHref="/services"
        />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
