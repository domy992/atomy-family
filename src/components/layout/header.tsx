"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

const navigation = [
  { key: "produkty", href: "/produkty" },
  { key: "oAtomy", href: "/o-atomy" },
  { key: "spoluprace", href: "/spoluprace" },
  { key: "lifestyle", href: "/lifestyle" },
  { key: "kontakt", href: "/kontakt" },
] as const;

export function Header() {
  const t = useTranslations("Nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/Atomy logo bez pozadi.png"
              alt="Atomy"
              width={160}
              height={160}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="text-lg font-semibold text-text tracking-tight">
              <span className="text-primary">Family</span>
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
              >
                {t(item.key)}
              </Link>
            ))}
            <LocaleSwitcher />
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors duration-200"
            >
              {t("cta")}
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-text-muted hover:text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-base font-medium text-text-muted hover:text-primary px-2 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <LocaleSwitcher />
              <Link
                href="/kontakt"
                className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-hover"
                onClick={() => setMobileOpen(false)}
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
