import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProductPageTemplate } from "@/components/produkty/product-page-template";

export const metadata: Metadata = {
  title: "The Fame Skincare",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TheFamePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.fame");
  const tC = await getTranslations("Common");

  return (
    <ProductPageTemplate
      name={t("name")}
      tagline={t("tagline")}
      heroImage="/images/produkty/the-fame/Atomy Fame skin care set.png"
      introText={t("intro")}
      problem={t("problem")}
      usps={[
        {
          title: locale === "cs" ? "Premium složení" : "Premium composition",
          description: locale === "cs"
            ? "Koncentrované aktivní látky včetně kolagenu, peptidů a korejských bylinných extraktů v nejvyšší kvalitě."
            : "Concentrated active ingredients including collagen, peptides and Korean herbal extracts in the highest quality.",
        },
        {
          title: locale === "cs" ? "Luxusní zážitek" : "Luxury experience",
          description: locale === "cs"
            ? "Hedvábná textura, jemná vůně a pocit opravdového rituálu péče. Každá aplikace je zážitek."
            : "Silky texture, gentle fragrance and the feeling of a true care ritual. Every application is an experience.",
        },
        {
          title: locale === "cs" ? "Profesionální výsledky" : "Professional results",
          description: locale === "cs"
            ? "Viditelné zpevnění, rozjasnění a hydratace. Výsledky srovnatelné s profesionálním ošetřením."
            : "Visible firming, brightening and hydration. Results comparable to professional treatments.",
        },
      ]}
      testimonial={{
        text: locale === "cs"
          ? "The Fame je jako návštěva korejského beauty salonu — jen v pohodlí domova. Pleť je po něm neuvěřitelně hladká."
          : "The Fame is like visiting a Korean beauty salon — in the comfort of home. My skin is incredibly smooth afterwards.",
        author: locale === "cs" ? "Milena, osobní zkušenost" : "Milena, personal experience",
      }}
      techDetails={locale === "cs"
        ? "The Fame kombinuje to nejlepší z korejského výzkumu — fermentované bylinné extrakty, mořský kolagen a patentované peptidové komplexy. Každý produkt prochází přísným testováním a splňuje nejvyšší korejské i evropské standardy kvality. Řada je vhodná pro všechny typy pleti, především pro zralou pleť 40+."
        : "The Fame combines the best of Korean research — fermented herbal extracts, marine collagen and patented peptide complexes. Each product undergoes strict testing and meets the highest Korean and European quality standards. Suitable for all skin types, especially mature skin 40+."
      }
      purchaseSteps={[
        locale === "cs"
          ? "Napište mi nebo se registrujte na oficiální Atomy platformě"
          : "Write to me or register on the official Atomy platform",
        locale === "cs"
          ? "Vyberete si produkty za členské ceny"
          : "Choose products at member prices",
        locale === "cs"
          ? "Objednávka přijde přímo k vám domů"
          : "Your order arrives directly to your door",
      ]}
      faqs={[
        {
          question: locale === "cs"
            ? "Jaký je rozdíl mezi The Fame a Absolute CellActive?"
            : "What's the difference between The Fame and Absolute CellActive?",
          answer: locale === "cs"
            ? "The Fame je luxusnější řada s vyšší koncentrací aktivních látek, určená pro náročnou zralou pleť (40+). Absolute CellActive je univerzálnější, vhodná od 30+."
            : "The Fame is a more luxurious line with higher concentration of active ingredients, designed for demanding mature skin (40+). Absolute CellActive is more universal, suitable from 30+.",
        },
        {
          question: locale === "cs"
            ? "Stojí ten rozdíl v ceně za to?"
            : "Is the price difference worth it?",
          answer: locale === "cs"
            ? "Určitě ano — The Fame nabízí koncentrace aktivních látek srovnatelné s luxusními značkami za zlomek jejich ceny."
            : "Definitely — The Fame offers active ingredient concentrations comparable to luxury brands at a fraction of their price.",
        },
        {
          question: locale === "cs"
            ? "Jak dlouho trvá, než uvidím výsledky?"
            : "How long until I see results?",
          answer: locale === "cs"
            ? "První zlepšení hydratace pocítíte hned. Viditelné změny v pružnosti a redukci vrásek očekávejte po 3–4 týdnech."
            : "You'll feel improved hydration immediately. Expect visible changes in firmness and wrinkle reduction after 3–4 weeks.",
        },
      ]}
      gallery={[
        "/images/produkty/the-fame/fame toner.png",
        "/images/produkty/the-fame/fame essence.png",
        "/images/produkty/the-fame/fame lotion.png",
        "/images/produkty/the-fame/fame eye cream.png",
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
