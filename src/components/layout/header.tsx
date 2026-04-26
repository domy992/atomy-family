"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

const productLinks = [
  { key: "dropAbsolute", href: "/produkty/absolute-cellactive", cat: "catSkincare" },
  { key: "dropFame", href: "/produkty/the-fame", cat: "catSkincare" },
  { key: "dropEvening", href: "/produkty/evening-care", cat: "catSkincare" },
  { key: "dropCica", href: "/produkty/derma-real-cica", cat: "catSkincare" },
  { key: "dropHemohim", href: "/produkty/hemohim", cat: "catHealth" },
] as const;

const otherNav = [
  { key: "oAtomy", href: "/o-atomy" },
  { key: "spoluprace", href: "/spoluprace" },
  { key: "lifestyle", href: "/lifestyle" },
  { key: "kontakt", href: "/kontakt" },
] as const;

export function Header() {
  const t = useTranslations("Nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/Atomy logo bez pozadi.avif"
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
            {/* Produkty with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
              >
                {t("produkty")}
                <svg
                  className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl bg-white shadow-lg border border-border/50 p-4 z-50">
                  <Link
                    href="/produkty"
                    className="block text-sm font-medium text-primary hover:underline mb-3 px-2"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {t("allProducts")} →
                  </Link>

                  <p className="text-xs font-semibold text-text-light uppercase tracking-wider px-2 mb-2">
                    {t("catSkincare")}
                  </p>
                  <div className="grid grid-cols-2 gap-1 mb-3">
                    {productLinks.filter(p => p.cat === "catSkincare").map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-surface-muted hover:text-primary transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-text-light uppercase tracking-wider px-2 mb-2">
                    {t("catHealth")}
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {productLinks.filter(p => p.cat === "catHealth").map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-surface-muted hover:text-primary transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {otherNav.map((item) => (
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
            <div className="flex flex-col gap-1">
              {/* Produkty accordion on mobile */}
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between text-base font-medium text-text-muted hover:text-primary px-2 py-2"
              >
                {t("produkty")}
                <svg
                  className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link
                    href="/produkty"
                    className="block text-sm font-medium text-primary px-2 py-1"
                    onClick={() => { setMobileOpen(false); setDropdownOpen(false); }}
                  >
                    {t("allProducts")} →
                  </Link>
                  {productLinks.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="block text-sm text-text-muted hover:text-primary px-2 py-1"
                      onClick={() => { setMobileOpen(false); setDropdownOpen(false); }}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              )}

              {otherNav.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-base font-medium text-text-muted hover:text-primary px-2 py-2"
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
