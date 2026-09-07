import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

// Canonical + hreflang for one route. `path` is the locale-less route
// ("" for the homepage, "/produkty/hemohim" for a product).
export function alternates(locale: string, path = ""): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}${path}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return { canonical: `/${locale}${path}`, languages };
}
