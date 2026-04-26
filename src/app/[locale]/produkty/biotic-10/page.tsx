import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products.biotic10" });
  return {
    title: t("name"),
    description: t("intro").slice(0, 160),
    alternates: { canonical: `/${locale}/produkty/biotic-10` },
    openGraph: {
      title: `${t("name")} | Atomy Family`,
      description: t("shortDesc"),
      url: `/${locale}/produkty/biotic-10`,
      images: [{ url: "/images/produkty/doplnky/biotic (1).avif", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function Biotic10Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.biotic10");
  const tC = await getTranslations("Common");
  const tF = await getTranslations("ContactForm");

  const cs = locale === "cs";

  const contactFormLabels = {
    title: tF("title"),
    subtitle: tF("subtitle"),
    nameLabel: tF("nameLabel"),
    namePlaceholder: tF("namePlaceholder"),
    emailLabel: tF("emailLabel"),
    emailPlaceholder: tF("emailPlaceholder"),
    subjectLabel: tF("subjectLabel"),
    subjectOptions: [
      { value: "produkty", label: tF("subjectProdukty") },
      { value: "spoluprace", label: tF("subjectSpoluprace") },
      { value: "objednavka", label: tF("subjectObjednavka") },
      { value: "jine", label: tF("subjectJine") },
    ],
    messageLabel: tF("messageLabel"),
    messagePlaceholder: tF("messagePlaceholder"),
    gdpr: tF("gdpr"),
    gdprLink: tF("gdprLink"),
    submit: tF("submit"),
  };

  return (
    <SingleProductTemplate
      name={t("name")}
      tagline={cs
        ? "3 miliardy \u017eiv\u00fdch bakteri\u00ed pro tv\u00e9 zdrav\u00e9 tr\u00e1ven\u00ed"
        : "3 billion live bacteria for your healthy digestion"
      }
      heroImage="/images/produkty/doplnky/biotic (1).avif"
      introText={cs
        ? "Na\u0161e t\u011blo je domovem miliard mikroorganism\u016f \u2014 a ne v\u0161echny jsou zl\u00e9. P\u0159\u00e1telsk\u00e9 bakterie jako lactobacily a bifidobakterie hraj\u00ed kl\u00ed\u010dovou roli v tr\u00e1ven\u00ed, imunit\u011b i celkov\u00e9 pohod\u011b. Modern\u00ed \u017eivotn\u00ed styl \u2014 stres, antibiotika, m\u00e1lo vl\u00e1kniny \u2014 naru\u0161uje tuto rovnov\u00e1hu."
        : "Our body is home to billions of microorganisms \u2014 and not all are bad. Friendly bacteria like lactobacilli and bifidobacteria play a key role in digestion, immunity and overall wellbeing. Modern lifestyle \u2014 stress, antibiotics, low fiber \u2014 disrupts this balance."
      }
      benefits={cs ? [
        "3 miliardy \u017eiv\u00fdch bakteri\u00ed na d\u00e1vku",
        "12 bakteri\u00e1ln\u00edch kmen\u016f pro \u0161ir\u0161\u00ed \u00fa\u010dinky",
        "Osv\u011b\u017euj\u00edc\u00ed pomeran\u010dov\u00e1 p\u0159\u00edchu\u0165",
        "Praktick\u00e9 s\u00e1\u010dky na ka\u017ed\u00fd den",
      ] : [
        "3 billion live bacteria per dose",
        "12 bacterial strains for broader effects",
        "Refreshing orange flavor",
        "Practical daily sachets",
      ]}
      whyDifferent={{
        text: cs
          ? "Zat\u00edmco v\u011bt\u0161ina probiotik obsahuje 1\u20133 kmeny, Atomy Biotic 10+ obsahuje 12 kmen\u016f v\u010detn\u011b Bifidobacterium breve, Lactobacillus rhamnosus, Lactobacillus acidophilus a dal\u0161\u00edch \u2014 pro komplexn\u00ed podporu st\u0159evn\u00ed mikrofl\u00f3ry."
          : "While most probiotics contain 1\u20133 strains, Atomy Biotic 10+ contains 12 strains including Bifidobacterium breve, Lactobacillus rhamnosus, Lactobacillus acidophilus and more \u2014 for comprehensive gut microbiome support.",
        image: "/images/produkty/doplnky/biotic (2).avif",
      }}
      forWhom={cs ? [
        "Ti, kdo cht\u011bj\u00ed podpo\u0159it tr\u00e1ven\u00ed a imunitu",
        "Ti, kdo se zotavuj\u00ed po antibiotik\u00e1ch",
        "Ti s \u010dast\u00fdmi tr\u00e1vic\u00edmi pot\u00ed\u017eemi",
        "Kdokoliv hledaj\u00edc\u00ed jednoduchou podporu wellness",
      ] : [
        "Those who want to support digestion and immunity",
        "Those recovering after antibiotics",
        "Those with frequent digestive issues",
        "Anyone looking for simple wellness support",
      ]}
      howToUse={{
        text: cs
          ? "U\u017e\u00edvejte 1 s\u00e1\u010dek denn\u011b. Vysypte obsah p\u0159\u00edmo do \u00fast nebo rozpu\u0161\u0165te ve sklenici vody. Dopln\u011bk stravy \u2014 nenahrazuje pestrou a vyv\u00e1\u017eenou stravu."
          : "Take 1 sachet daily. Pour contents directly into mouth or dissolve in a glass of water. Dietary supplement \u2014 does not replace a varied and balanced diet.",
      }}
      labels={{
        benefitsTitle: cs ? "Co Biotic 10+ um\u00ed?" : "What can Biotic 10+ do?",
        whyDifferentTitle: cs ? "Pro\u010d zrovna Biotic 10+?" : "Why Biotic 10+?",
        forWhomTitle: cs ? "Pro koho je vhodn\u00fd?" : "Who is it for?",
        howToUseTitle: cs ? "D\u00e1vkov\u00e1n\u00ed" : "Dosage",
        ctaButton: tC("chciVedetVic"),
        contactForm: contactFormLabels,
      }}
      defaultSubject="produkty"
    />
  );
}
