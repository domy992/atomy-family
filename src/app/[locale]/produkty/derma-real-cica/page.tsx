import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProductPageTemplate } from "@/components/produkty/product-page-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products.cica" });
  return {
    title: t("name"),
    description: t("intro").slice(0, 160),
    alternates: { canonical: `/${locale}/produkty/derma-real-cica` },
    openGraph: {
      title: `${t("name")} | Atomy Family`,
      description: t("shortDesc"),
      url: `/${locale}/produkty/derma-real-cica`,
      images: [{ url: "/images/hero/top_produkty_01.png", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function DermaRealCicaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.cica");
  const tC = await getTranslations("Common");

  return (
    <ProductPageTemplate
      name={t("name")}
      tagline={t("tagline")}
      heroImage="/images/hero/top_produkty_01.png"
      introText={t("intro")}
      problem={t("problem")}
      usps={[
        {
          title: "Centella Asiatica",
          description: locale === "cs"
            ? "Cica je legendární korejská bylina s prokázanými protizánětlivými a regeneračními účinky. Ideální pro citlivou pleť."
            : "Cica is a legendary Korean herb with proven anti-inflammatory and regenerative effects. Ideal for sensitive skin.",
        },
        {
          title: locale === "cs" ? "Obnova kožní bariéry" : "Skin barrier restoration",
          description: locale === "cs"
            ? "Posiluje přirozený ochranný štít pleti, snižuje citlivost a pomáhá pleti lépe se bránit vnějším vlivům."
            : "Strengthens the skin's natural protective barrier, reduces sensitivity and helps skin better defend against external factors.",
        },
        {
          title: locale === "cs" ? "Dermatologicky testováno" : "Dermatologically tested",
          description: locale === "cs"
            ? "Formule bez dráždivých látek, vhodná i pro nejcitlivější typy pleti. Hypoalergenní složení."
            : "Formula free of irritants, suitable even for the most sensitive skin types. Hypoallergenic composition.",
        },
      ]}
      testimonial={{
        text: locale === "cs"
          ? "Derma Real Cica je jediná řada, po které se mé citlivá pleť konečně zklidnila. Žádné zarudnutí, žádné stahování."
          : "Derma Real Cica is the only line that finally calmed my sensitive skin. No redness, no tightness.",
        author: locale === "cs" ? "Milena, osobní zkušenost" : "Milena, personal experience",
      }}
      techDetails={locale === "cs"
        ? "Řada Derma Real Cica využívá účinky Centella Asiatica (cica), byliny s tisíciletou tradicí v asijské medicíně. Obsahuje madecassoside a asiaticoside — aktivní látky, které prokazatelně podporují hojení, snižují zánět a posilují kožní bariéru. Formule je obohacena o ceramidy a hyaluronovou kyselinu pro intenzivní hydrataci. Všechny produkty jsou hypoalergenní a bez parfemace."
        : "The Derma Real Cica line harnesses the effects of Centella Asiatica (cica), an herb with a thousand-year tradition in Asian medicine. Contains madecassoside and asiaticoside — active ingredients that demonstrably support healing, reduce inflammation and strengthen the skin barrier. Formula enriched with ceramides and hyaluronic acid for intensive hydration. All products are hypoallergenic and fragrance-free."
      }
      purchaseSteps={[
        locale === "cs"
          ? "Napište mi a poradíme se o vašem typu pleti"
          : "Write to me and we'll discuss your skin type",
        locale === "cs"
          ? "Objednejte Derma Real Cica za členské ceny"
          : "Order Derma Real Cica at member prices",
        locale === "cs"
          ? "Užijte si uklidněnou a zdravou pleť"
          : "Enjoy calm and healthy skin",
      ]}
      faqs={[
        {
          question: locale === "cs"
            ? "Mohu používat při ekzému nebo rosacee?"
            : "Can I use it with eczema or rosacea?",
          answer: locale === "cs"
            ? "Řada je vhodná pro citlivou pleť, ale při diagnostikovaných kožních onemocněních doporučujeme konzultaci s dermatologem."
            : "The line is suitable for sensitive skin, but for diagnosed skin conditions we recommend consulting a dermatologist.",
        },
        {
          question: locale === "cs"
            ? "Je vhodná i pro mastnou pleť?"
            : "Is it suitable for oily skin?",
          answer: locale === "cs"
            ? "Ano, lehká gelová textura je vhodná i pro mastnou a kombinovanou pleť. Neucpává póry."
            : "Yes, the light gel texture is suitable for oily and combination skin. It doesn't clog pores.",
        },
        {
          question: locale === "cs"
            ? "Mohu kombinovat s jinými řadami Atomy?"
            : "Can I combine it with other Atomy lines?",
          answer: locale === "cs"
            ? "Určitě — Derma Real Cica se skvěle doplňuje například s Evening Care pro čištění a s Absolute nebo Fame pro intenzivní péči."
            : "Absolutely — Derma Real Cica pairs great with Evening Care for cleansing and Absolute or Fame for intensive care.",
        },
      ]}
      gallery={[]}
      labels={{
        problemTitle: tC("znateToTitle"),
        solutionTitle: tC("reseni"),
        techTitle: tC("procToFunguje"),
        purchaseTitle: tC("jakObjednat"),
        purchaseCta: tC("napisteAPomuzu"),
        faqTitle: tC("casteOtazky"),
        ctaButton: tC("chciVedetVic"),
      }}
    />
  );
}
