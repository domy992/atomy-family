import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Produkty",
};

const products = [
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
    key: "cica" as const,
    href: "/produkty/derma-real-cica",
    image: "/images/produkty/evening/evening ilustrace.webp",
  },
  {
    key: "evening" as const,
    href: "/produkty/evening-care",
    image: "/images/produkty/evening/evening set.jpg",
  },
];

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProduktyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peach-50 via-white to-sage-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.key}
                href={product.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border/50"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={t(`${product.key}.name`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-text-muted">
                      {t(`${product.key}.category`)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
                    {t(`${product.key}.name`)}
                  </h2>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {t(`${product.key}.shortDesc`)}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-medium text-primary">
                    {t("moreInfo")} &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-warm">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text">
            {t("helpTitle")}
          </h2>
          <p className="mt-3 text-text-muted max-w-md mx-auto">
            {t("helpDesc")}
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
          >
            {t("helpCta")}
          </Link>
        </div>
      </section>
    </>
  );
}
