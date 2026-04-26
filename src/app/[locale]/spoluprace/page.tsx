import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Spolupráce",
};

const benefitKeys = ["b1", "b2", "b3", "b4", "b5", "b6"] as const;

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SpolupracePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Spoluprace");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-blue-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-accent tracking-wide uppercase">
            {t("label")}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-text leading-tight">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* 3 kroky */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            {t("stepsTitle")}
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <span className="text-5xl font-bold text-blue-100">
                  {String(i).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-text">
                  {t(`step${i}Title`)}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {t(`step${i}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vyhody */}
      <section className="py-16 lg:py-24 bg-surface-warm">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text">
                {t("whyTitle")}
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                {t("whyDesc")}
              </p>
            </div>
            <div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {benefitKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage-100 flex-shrink-0 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-text">
                      {t(key)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-100 via-blue-50 to-sage-50 p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl font-bold text-text">
              {t("closingTitle")}
            </h2>
            <p className="mt-4 text-text-muted max-w-lg mx-auto leading-relaxed">
              {t("closingDesc")}
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
            >
              {t("closingCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
