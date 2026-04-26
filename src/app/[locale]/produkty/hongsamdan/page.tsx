import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products.hongsamdan" });
  return {
    title: t("name"),
    description: t("intro").slice(0, 160),
    alternates: { canonical: `/${locale}/produkty/hongsamdan` },
    openGraph: {
      title: `${t("name")} | Atomy Family`,
      description: t("shortDesc"),
      url: `/${locale}/produkty/hongsamdan`,
      images: [{ url: "/images/produkty/doplnky/\u017een\u0161en.avif", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function HongsamdanPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.hongsamdan");
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
        ? "Energie, vitalita a du\u0161evn\u00ed rovnov\u00e1ha v ka\u017ed\u00e9m s\u00e1\u010dku"
        : "Energy, vitality and mental balance in every sachet"
      }
      heroImage="/images/produkty/doplnky/\u017een\u0161en.avif"
      introText={cs
        ? "Pr\u00e9miov\u00fd dopln\u011bk stravy s vysok\u00fdm obsahem \u010derven\u00e9ho \u017een\u0161enu \u2014 tradi\u010dn\u00ed byliny pou\u017e\u00edvan\u00e9 po stolet\u00ed k pos\u00edlen\u00ed vitality, odolnosti v\u016f\u010di stresu a podpore p\u0159irozen\u00e9 imunity. D\u00edky modern\u00ed technologii se \u017een\u0161en m\u011bn\u00ed na mal\u00e9 granule, kter\u00e9 se snadno pou\u017e\u00edvaj\u00ed."
        : "Premium dietary supplement with high red ginseng content \u2014 a traditional herb used for centuries to boost vitality, stress resistance and natural immunity. Modern technology transforms ginseng into small, easy-to-use granules."
      }
      benefits={cs ? [
        "Podpora soust\u0159ed\u011bn\u00ed a du\u0161evn\u00edho v\u00fdkonu",
        "Zv\u00fd\u0161en\u00ed energie a sn\u00ed\u017een\u00ed \u00fanavy",
        "P\u0159irozen\u00e1 podpora imunity",
        "Tradi\u010dn\u00ed receptura v modern\u00ed form\u011b",
        "Praktick\u00e9 balen\u00ed \u2014 ide\u00e1ln\u00ed na cesty",
      ] : [
        "Supports concentration and mental performance",
        "Increases energy and reduces fatigue",
        "Natural immunity support",
        "Traditional formula in modern form",
        "Practical packaging \u2014 ideal for travel",
      ]}
      whyDifferent={{
        text: cs
          ? "100% korejsk\u00fd \u010derven\u00fd \u017een\u0161en: 3 % \u010dist\u00fd ko\u0159enov\u00fd pr\u00e1\u0161ek, 97 % koncentrovan\u00fd extrakt. Obsah saponin\u016f (ginsenosidy): 20 mg/g. Patentovan\u00e1 technologie v\u00fdroby kulovit\u00fdch granul\u00ed (0,8\u20131,0 mm) pro lep\u0161\u00ed vst\u0159eb\u00e1v\u00e1n\u00ed."
          : "100% Korean red ginseng: 3% pure root powder, 97% concentrated extract. Saponin content (ginsenosides): 20 mg/g. Patented spherical granule technology (0.8\u20131.0 mm) for better absorption.",
        image: "/images/produkty/doplnky/\u017een\u0161en (2).avif",
      }}
      forWhom={cs ? [
        "Pro pos\u00edlen\u00ed vitality a odolnosti",
        "Pro podporu soust\u0159ed\u011bn\u00ed p\u0159i pr\u00e1ci nebo studiu",
        "Pro p\u0159irozenou podporu imunity",
        "Pro ty, kdo preferuj\u00ed tradi\u010dn\u00ed p\u0159\u00edrodn\u00ed dopl\u0148ky",
      ] : [
        "For boosting vitality and resilience",
        "For supporting concentration at work or study",
        "For natural immunity support",
        "For those who prefer traditional natural supplements",
      ]}
      howToUse={{
        text: cs
          ? "U\u017e\u00edvejte 1 s\u00e1\u010dek denn\u011b. Vysypte s\u00e1\u010dek p\u0159\u00edmo do \u00fast a nechte voln\u011b rozpustit, nebo rozm\u00edchejte ve sklenici vody. Nep\u0159ekra\u010dujte doporu\u010denou denn\u00ed d\u00e1vku. Uchov\u00e1vejte mimo dosah d\u011bt\u00ed."
          : "Take 1 sachet daily. Pour sachet directly into mouth and let dissolve, or mix in a glass of water. Do not exceed recommended daily dose. Keep out of reach of children.",
      }}
      labels={{
        benefitsTitle: cs ? "Pro\u010d si zamiluje\u0161 Hongsamdan?" : "Why you'll love Hongsamdan",
        whyDifferentTitle: cs ? "\u010c\u00edm je tento \u017een\u0161en v\u00fdjime\u010dn\u00fd?" : "What makes this ginseng special?",
        forWhomTitle: cs ? "Pro koho je vhodn\u00fd?" : "Who is it for?",
        howToUseTitle: cs ? "D\u00e1vkov\u00e1n\u00ed a upozorn\u011bn\u00ed" : "Dosage and warnings",
        ctaButton: tC("chciVedetVic"),
        contactForm: contactFormLabels,
      }}
      defaultSubject="produkty"
    />
  );
}
