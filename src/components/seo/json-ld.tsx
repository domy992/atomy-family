import { getTranslations } from "next-intl/server";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atomy-family.vercel.app";

type Props = { locale: string };

export async function JsonLd({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const home = `${SITE_URL}/${locale}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Atomy Family",
      url: home,
      logo: `${SITE_URL}/images/logo/Atomy logo bez pozadi.avif`,
      email: "neckarova.milena@gmail.com",
      description: t("homeDesc"),
      member: { "@id": `${SITE_URL}/#milena` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#milena`,
      name: "Milena Neckářová",
      email: "neckarova.milena@gmail.com",
      jobTitle:
        locale === "cs"
          ? "Nezávislá distributorka Atomy"
          : "Independent Atomy distributor",
      url: `${home}/kontakt`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: home,
      name: "Atomy Family",
      description: t("homeDesc"),
      inLanguage: locale,
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
