import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atomy-family.vercel.app";
const INDEXING_ENABLED = process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atomy Family | Korejská kosmetika a wellness",
    template: "%s | Atomy Family",
  },
  description:
    "Objevte korejskou kosmetiku Atomy. Absolutní kvalita za absolutní cenu. Produkty, poradenství a příležitost spolupráce s Milenou Neckařovou.",
  keywords: [
    "atomy",
    "korejská kosmetika",
    "atomy česko",
    "korejská péče o pleť",
    "atomy spolupráce",
    "hemohim",
    "absolute cellactive",
  ],
  authors: [{ name: "Milena Neckařová" }],
  creator: "Milena Neckařová",
  publisher: "Atomy Family",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: ["en_US"],
    siteName: "Atomy Family",
    url: SITE_URL,
    title: "Atomy Family | Korejská kosmetika a wellness",
    description:
      "Objevte korejskou kosmetiku Atomy. Absolutní kvalita za absolutní cenu. Osobní poradenství od Mileny Neckařové.",
    images: [
      {
        url: "/images/og/og-default.avif",
        width: 1200,
        height: 630,
        alt: "Atomy Family — Korejská kosmetika a wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atomy Family | Korejská kosmetika a wellness",
    description:
      "Korejská kosmetika Atomy. Absolutní kvalita za absolutní cenu. Osobní poradenství od Mileny Neckařové.",
    images: ["/images/og/og-default.avif"],
  },
  robots: INDEXING_ENABLED
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : { index: false, follow: false },
  alternates: {
    canonical: "/",
    languages: {
      cs: "/cs",
      en: "/en",
      "x-default": "/cs",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={dmSans.variable}>
      <body className="min-h-dvh flex flex-col font-sans antialiased overflow-y-auto">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
