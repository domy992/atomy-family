import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atomy-family.vercel.app";

const INDEXING_ENABLED = process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true";

export default function robots(): MetadataRoute.Robots {
  if (!INDEXING_ENABLED) {
    // Test phase — block all crawlers
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/privacy"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
