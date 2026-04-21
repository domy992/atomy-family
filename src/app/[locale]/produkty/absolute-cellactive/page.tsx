import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProductPageTemplate } from "@/components/produkty/product-page-template";

export const metadata: Metadata = {
  title: "Absolute CellActive Skincare",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AbsoluteCellActivePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.absolute");
  const tC = await getTranslations("Common");

  return (
    <ProductPageTemplate
      name={t("name")}
      tagline={t("tagline")}
      heroImage="/images/produkty/absolute/Absolute Serum (1).png"
      introText={t("intro")}
      problem={t("problem")}
      usps={[
        { title: t("usp1Title"), description: t("usp1Desc") },
        { title: t("usp2Title"), description: t("usp2Desc") },
        { title: t("usp3Title"), description: t("usp3Desc") },
      ]}
      testimonial={{
        text: t("testimonial"),
        author: t("testimonialAuthor"),
      }}
      techDetails={t("techDetails")}
      purchaseSteps={[
        locale === "cs"
          ? "Napište mi nebo se registrujte na oficiální Atomy platformě"
          : "Write to me or register on the official Atomy platform",
        locale === "cs"
          ? "Vyberete si produkty za členské ceny (až o 30–50 % levněji)"
          : "Choose products at member prices (up to 30–50% cheaper)",
        locale === "cs"
          ? "Objednávka přijde přímo k vám domů do několika dnů"
          : "Your order arrives directly to your door within a few days",
      ]}
      faqs={[
        {
          question: locale === "cs"
            ? "Pro jaký typ pleti je Absolute CellActive vhodná?"
            : "What skin type is Absolute CellActive suitable for?",
          answer: locale === "cs"
            ? "Řada je určena především pro zralou pleť (30+) se známkami stárnutí — vrásky, ztráta pružnosti, nerovnoměrná pigmentace. Lze používat na všechny typy pleti."
            : "The line is designed primarily for mature skin (30+) with signs of aging — wrinkles, loss of firmness, uneven pigmentation. Can be used on all skin types.",
        },
        {
          question: locale === "cs"
            ? "Jak dlouho vydrží jeden set?"
            : "How long does one set last?",
          answer: locale === "cs"
            ? "Při pravidelném používání (ráno a večer) vydrží kompletní set přibližně 2–3 měsíce."
            : "With regular use (morning and evening), a complete set lasts approximately 2–3 months.",
        },
        {
          question: locale === "cs"
            ? "Mohu kombinovat s jinou kosmetikou?"
            : "Can I combine it with other cosmetics?",
          answer: locale === "cs"
            ? "Ano, ale nejlepší výsledky dosáhnete použitím celé řady společně, protože produkty jsou formulované pro vzájemnou synergii."
            : "Yes, but you'll achieve the best results by using the entire line together, as the products are formulated for mutual synergy.",
        },
        {
          question: locale === "cs"
            ? "Kde produkt koupím?"
            : "Where can I buy the product?",
          answer: locale === "cs"
            ? "Produkty Atomy se prodávají přes oficiální Atomy platformu. Napište mi a pomůžu vám s registrací a první objednávkou."
            : "Atomy products are sold through the official Atomy platform. Write to me and I'll help you with registration and your first order.",
        },
      ]}
      gallery={[
        "/images/produkty/absolute/Absolute toner (1).png",
        "/images/produkty/absolute/Absolute Serum (1).png",
        "/images/produkty/absolute/Absolute ampoule (1).png",
        "/images/produkty/absolute/Absolute eye complex (1).png",
      ]}
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
