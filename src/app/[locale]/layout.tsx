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

export const metadata: Metadata = {
  title: {
    default: "Atomy Family | Korejská kosmetika a wellness",
    template: "%s | Atomy Family",
  },
  description:
    "Objevte korejskou kosmetiku Atomy. Absolutní kvalita za absolutní cenu. Produkty, poradenství a příležitost spolupráce s Milenou Nečkářovou.",
  keywords: [
    "atomy",
    "korejská kosmetika",
    "atomy česko",
    "korejská péče o pleť",
    "atomy spolupráce",
    "hemohim",
    "absolute cellactive",
  ],
  authors: [{ name: "Milena Nečkářová" }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Atomy Family",
  },
  robots: {
    index: false,
    follow: false,
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
