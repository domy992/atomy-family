import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atomy-family.vercel.app";

// All routes that should appear in the sitemap (without locale prefix)
const ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/produkty", changeFrequency: "weekly", priority: 0.9 },
  { path: "/produkty/absolute-cellactive", changeFrequency: "monthly", priority: 0.8 },
  { path: "/produkty/the-fame", changeFrequency: "monthly", priority: 0.8 },
  { path: "/produkty/hemohim", changeFrequency: "monthly", priority: 0.8 },
  { path: "/produkty/evening-care", changeFrequency: "monthly", priority: 0.8 },
  { path: "/produkty/derma-real-cica", changeFrequency: "monthly", priority: 0.7 },
  { path: "/o-atomy", changeFrequency: "monthly", priority: 0.7 },
  { path: "/spoluprace", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lifestyle", changeFrequency: "weekly", priority: 0.6 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  return ROUTES.flatMap((route) =>
    locales.map((locale) => {
      const url = `${SITE_URL}/${locale}${route.path}`;
      // Build alternate languages map for hreflang
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = `${SITE_URL}/${l}${route.path}`;
      }
      languages["x-default"] = `${SITE_URL}/${defaultLocale}${route.path}`;

      return {
        url,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      };
    }),
  );
}
