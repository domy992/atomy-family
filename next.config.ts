import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/**
 * 301 redirects ze starych URL (Webnode verze atomy-family.cz) na nove URL.
 *
 * DULEZITE: Tento mapping je zivotne dulezity pro zachovani organicke navstevnosti
 * pri migraci z Webnode na Vercel. Google prenese link equity ze starych URL
 * na nove, pokud jsou redirecty spravne nastavene (permanent = 301).
 *
 * Zdroj starych URL: atomy-family.cz navigace (duben 2026).
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Hlavni stranky
      { source: "/home", destination: "/cs", permanent: true },
      { source: "/about", destination: "/cs/o-atomy", permanent: true },
      { source: "/o-atomy-family", destination: "/cs/o-atomy", permanent: true },
      { source: "/contact", destination: "/cs/kontakt", permanent: true },
      { source: "/jak-nakupovat", destination: "/cs/spoluprace", permanent: true },
      { source: "/products", destination: "/cs/produkty", permanent: true },
      { source: "/samples", destination: "/cs/produkty", permanent: true },

      // Kategorie -> produkty prehled
      { source: "/pece-o-plet", destination: "/cs/produkty", permanent: true },
      { source: "/pece-o-telo-a-vlasy", destination: "/cs/produkty", permanent: true },
      { source: "/doplnky-pro-zdravi", destination: "/cs/produkty", permanent: true },

      // Produkty s dedikovanou novou strankou
      {
        source: "/absolut-cell-active-skincare-set",
        destination: "/cs/produkty/absolute-cellactive",
        permanent: true,
      },
      {
        source: "/atomy-evening-care-set",
        destination: "/cs/produkty/evening-care",
        permanent: true,
      },
      {
        source: "/atomy-fame-skincare-set",
        destination: "/cs/produkty/the-fame",
        permanent: true,
      },
      { source: "/hemohim", destination: "/cs/produkty/hemohim", permanent: true },

      // Produkty bez dedikovane nove stranky -> produkty prehled
      // (do budoucna lze pridat konkretni stranky)
      {
        source: "/atomy-absolute-essence-sunscreen",
        destination: "/cs/produkty",
        permanent: true,
      },
      {
        source: "/atomy-absolute-urban-shield-sun-cushion",
        destination: "/cs/produkty",
        permanent: true,
      },
      {
        source: "/absolute-reset-balm",
        destination: "/cs/produkty",
        permanent: true,
      },
      { source: "/herbal-sampon", destination: "/cs/produkty", permanent: true },
      { source: "/herbal-kondicioner", destination: "/cs/produkty", permanent: true },
      { source: "/scalpcare-sampon", destination: "/cs/produkty", permanent: true },
      {
        source: "/scalpcare-kondicioner",
        destination: "/cs/produkty",
        permanent: true,
      },
      { source: "/atomy-biotic-10", destination: "/cs/produkty", permanent: true },
      { source: "/atomy-hongsamdan", destination: "/cs/produkty", permanent: true },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
