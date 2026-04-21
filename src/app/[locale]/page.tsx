import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const featuredProducts = [
  {
    key: "absolute" as const,
    href: "/produkty/absolute-cellactive",
    image: "/images/produkty/absolute/Absolute Serum (1).png",
  },
  {
    key: "fame" as const,
    href: "/produkty/the-fame",
    image: "/images/produkty/the-fame/Atomy Fame skin care set.png",
  },
  {
    key: "hemohim" as const,
    href: "/produkty/hemohim",
    image: "/images/produkty/hemohim/hemohim (1).png",
  },
  {
    key: "evening" as const,
    href: "/produkty/evening-care",
    image: "/images/produkty/evening/evening set.jpg",
  },
  {
    key: "cica" as const,
    href: "/produkty/derma-real-cica",
    image: "/images/hero/top_produkty_01.png",
  },
];

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const tProducts = await getTranslations("Products");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-peach-50 via-white to-sage-50">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                {t("badge")}
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
                {t("title")}
                <span className="text-primary">{t("titleHighlight")}</span>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-lg">
                {t("subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/produkty"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
                >
                  {t("ctaProdukty")}
                </Link>
                <Link
                  href="/spoluprace"
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:bg-surface-muted transition-colors"
                >
                  {t("ctaSpoluprace")}
                </Link>
              </div>
            </div>
            <div className="relative max-w-sm mx-auto lg:max-w-none pb-8">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src="/images/milena/20250603_150311.jpg"
                  alt="Milena Nečkářová"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
              {/* Floating product shot */}
              <div className="hidden sm:block absolute -top-4 -right-4 lg:-right-10 w-40 lg:w-56 aspect-square rounded-2xl bg-white shadow-xl p-3 rotate-3">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/hero/top_produkty_01.png"
                    alt="Nejoblíbenější Atomy produkty"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 160px, 224px"
                  />
                </div>
              </div>
              {/* Social proof badge */}
              <div className="absolute bottom-0 -left-4 bg-white rounded-xl shadow-lg px-5 py-3">
                <p className="text-xs text-text-muted">{t("heroBadgeLabel")}</p>
                <p className="text-sm font-semibold text-text">{t("heroBadgeValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text">{t("benefitsTitle")}</h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              {t("benefitsSubtitle")}
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-surface-warm hover:shadow-md transition-shadow"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-peach-100 text-primary flex items-center justify-center">
                  {i === 1 && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">
                  {t(`benefit${i}Title`)}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {t(`benefit${i}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16 lg:py-24 bg-surface-muted">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-text">{t("produktyTitle")}</h2>
              <p className="mt-2 text-text-muted">{t("produktySubtitle")}</p>
            </div>
            <Link
              href="/produkty"
              className="hidden sm:inline-flex text-sm font-medium text-primary hover:text-primary-hover transition-colors"
            >
              {t("produktyAll")} &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 3).map((product) => (
              <Link
                key={product.key}
                href={product.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={tProducts(`${product.key}.name`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-text group-hover:text-primary transition-colors">
                    {tProducts(`${product.key}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {tProducts(`${product.key}.shortDesc`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {featuredProducts.slice(3).map((product) => (
              <Link
                key={product.key}
                href={product.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex"
              >
                <div className="w-1/3 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={tProducts(`${product.key}.name`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-semibold text-text group-hover:text-primary transition-colors">
                    {tProducts(`${product.key}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {tProducts(`${product.key}.shortDesc`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/produkty"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              {t("produktyAll")} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — Spoluprace */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-peach-100 via-peach-50 to-sage-50 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              {t("ctaTitle")}
            </h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto leading-relaxed">
              {t("ctaDesc")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/spoluprace"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
              >
                {t("ctaButton")}
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-text hover:bg-surface-muted transition-colors"
              >
                {t("ctaContact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Milena */}
      <section className="py-16 lg:py-24 bg-surface-warm">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/images/milena/20250603_145001.jpg"
                  alt={t("aboutTitle")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 400px"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                {t("aboutLabel")}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-text">
                {t("aboutTitle")}
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                {t("aboutText1")}
              </p>
              <p className="mt-3 text-text-muted leading-relaxed">
                {t("aboutText2")}
              </p>
              <Link
                href="/kontakt"
                className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
              >
                {t("aboutCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
