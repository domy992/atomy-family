import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Lifestyle | #AtomyFamily",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LifestylePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Lifestyle");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peach-50 via-white to-sage-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            {t("badge")}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-text">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Reels / Social embed grid — placeholder */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text mb-8">
            {t("latestTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[9/16] rounded-2xl bg-surface-muted border-2 border-dashed border-border flex items-center justify-center"
              >
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-peach-100 mx-auto flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-text-muted">
                    Reel / IG embed #{i + 1}
                  </p>
                  <p className="text-xs text-text-light mt-1">
                    {t("reelPlaceholder")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hashtag CTA */}
          <div className="mt-16 rounded-3xl bg-surface-warm p-8 sm:p-12 text-center">
            <h3 className="text-2xl font-bold text-text">
              {t("hashtagTitle")}
            </h3>
            <p className="mt-3 text-text-muted max-w-md mx-auto">
              {t("hashtagDesc")}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-peach-100 px-4 py-2 text-sm font-medium text-primary">
                #AtomyFamily
              </span>
              <span className="rounded-full bg-sage-100 px-4 py-2 text-sm font-medium text-sage-600">
                #KorejskaKosmetika
              </span>
              <span className="rounded-full bg-nude-100 px-4 py-2 text-sm font-medium text-nude-500">
                #AtomyCesko
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
