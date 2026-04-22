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
          title: locale === "cs" ? "Toner + Essence" : "Toner + Essence",
          description: locale === "cs"
            ? "Lehký toner osvěží a připraví pleť na vstřebání péče. Essence dodává intenzivní hydrataci a posiluje ochrannou bariéru díky beta-glukanu a fermentovaným extraktům."
            : "Light toner refreshes and prepares skin to absorb care. Essence delivers intensive hydration and strengthens the barrier with beta-glucan and fermented extracts.",
        },
        {
          title: locale === "cs" ? "Eye Cream + Lotion" : "Eye Cream + Lotion",
          description: locale === "cs"
            ? "Oční krém redukuje jemné linky a chrání citlivou oblast peptidy a ceramidy. Lotion udržuje rovnováhu olej–voda, arganový olej a bambucké máslo zajišťují hydrataci a pružnost."
            : "Eye cream reduces fine lines and protects the delicate area with peptides and ceramides. Lotion maintains oil–water balance; argan oil and shea butter ensure hydration and elasticity.",
        },
        {
          title: locale === "cs" ? "Nutrition Cream" : "Nutrition Cream",
          description: locale === "cs"
            ? "Závěrečná péče plná výživy. Ceramidy a pět typů kyseliny hyaluronové dodávají hloubkovou hydrataci, posilují bariéru a podporují obnovu buněk."
            : "Nourishing finale. Ceramides and five types of hyaluronic acid deliver deep hydration, strengthen the barrier and support cell renewal.",
        },
      ]}
      testimonial={{
        text: locale === "cs"
          ? "The Fame je jako návštěva korejského salonu — jen v pohodlí domova. Pleť je po něm neuvěřitelně hladká."
          : "The Fame is like visiting a Korean salon — in the comfort of home. My skin is incredibly smooth afterwards.",
        author: locale === "cs" ? "Milena, osobní zkušenost" : "Milena, personal experience",
      }}
      techDetails={locale === "cs"
        ? "Řada The Fame je výsledkem spojení tradiční korejské moudrosti a moderní dermatologie. Byla vyvinuta tak, aby pomáhala pleti zvládat každodenní stres, obnovovala její přirozenou rovnováhu a zanechávala ji zdravou, jemnou a zářivou. Produkty jsou lehké, rychle se vstřebávají a vytvářejí harmonickou rutinu vhodnou i pro citlivou pokožku. Klíčové složky: fermentovaný filtrát z Bifida, extrakt z houby Phellinus Linteus, beta-glukan, peptidy, ceramidy, arganový olej, bambucké máslo a pět typů kyseliny hyaluronové."
        : "The Fame line combines traditional Korean wisdom with modern dermatology. Developed to help skin handle everyday stress, restore its natural balance and leave it healthy, soft and radiant. Products are lightweight, fast-absorbing and create a harmonious routine suitable even for sensitive skin. Key ingredients: fermented Bifida filtrate, Phellinus Linteus mushroom extract, beta-glucan, peptides, ceramides, argan oil, shea butter and five types of hyaluronic acid."
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
