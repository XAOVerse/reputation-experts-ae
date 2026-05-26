import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repute/ui"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "stream.mux.com" },
      { protocol: "https", hostname: "image.mux.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.builder.io" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "**.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      // Legacy slug from Dubai menu re-launch (renamed 2026-05-15).
      {
        source: "/bars-lounges-nightlife",
        destination: "/bars-lounges-entertainment",
        permanent: true,
      },
      {
        source: "/bars-lounges-nightlife/:path*",
        destination: "/bars-lounges-entertainment/:path*",
        permanent: true,
      },
      // /ai-overview short URL — original target page deleted; route to /ai-search instead.
      {
        source: "/ai-overview",
        destination: "/ai-search",
        permanent: true,
      },
      {
        source: "/search-ai",
        destination: "/ai-search",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/dental-clinics/:path*",
        destination: "https://repute-expert-web-dusky.vercel.app/dental-clinics/:path*",
      },
      {
        source: "/dental-clinics",
        destination: "https://repute-expert-web-dusky.vercel.app/dental-clinics",
      },
    ];
  },
};

export default nextConfig;
