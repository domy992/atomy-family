import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "O Atomy",
};

const milestoneYears = ["2009", "2016", "2018", "2023"] as const;

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OAtomyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("OAtomy");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-peach-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                {t("label")}
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-text leading-tight">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                {t("intro")}
              </p>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/firma/Atomy-body-x1100.webp"
                alt="Atomy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filozofie */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-text">
              {t("philTitle")}
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              {t("philSubtitle")}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-peach-50 p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-peach-100 flex items-center justify-center">
                <Image
                  src="/images/firma/absolutni_kvalita_webnode_ready.avif"
                  alt={t("qualityTitle")}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">
                {t("qualityTitle")}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {t("qualityDesc")}
              </p>
            </div>
            <div className="rounded-2xl bg-sage-50 p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-sage-100 flex items-center justify-center">
                <Image
                  src="/images/firma/absolutni_cena_webnode_ready.avif"
                  alt={t("priceTitle")}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">
                {t("priceTitle")}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {t("priceDesc")}
              </p>
            </div>
            <div className="rounded-2xl bg-nude-50 p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-nude-100 flex items-center justify-center">
                <Image
                  src="/images/firma/zakaznik_na_prvnim_miste_webnode_ready.avif"
                  alt={t("customerTitle")}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">
                {t("customerTitle")}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {t("customerDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milniky */}
      <section className="py-16 lg:py-24 bg-surface-muted">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            {t("timelineTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestoneYears.map((year) => (
              <div key={year} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-primary">{year}</p>
                <p className="mt-2 text-sm text-text-muted">{t(`y${year}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
