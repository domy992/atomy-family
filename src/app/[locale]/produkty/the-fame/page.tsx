import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SetProductTemplate } from "@/components/produkty/set-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products.fame" });
  return {
    title: t("name"),
    description: t("intro").slice(0, 160),
    alternates: { canonical: `/${locale}/produkty/the-fame` },
    openGraph: {
      title: `${t("name")} | Atomy Family`,
      description: t("shortDesc"),
      url: `/${locale}/produkty/the-fame`,
      images: [{ url: "/images/produkty/the-fame/Atomy Fame skin care set.avif", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function TheFamePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.fame");
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
    <SetProductTemplate
      name={t("name")}
      tagline={t("tagline")}
      heroImage="/images/produkty/the-fame/Atomy Fame skin care set.avif"
      introText={t("intro")}
      whyTogether={cs
        ? "Rada The Fame je navrzena jako kompletni system, kde kazdy produkt navazuje na predchozi a zesiluje jeho ucinky. Fermentovany filtrat z Bifida, extrakt z houby Phellinus Linteus, beta-glukan, peptidy a ceramidy — to vse pracuje v harmonii pro maximalni vysledky."
        : "The Fame line is designed as a complete system where each product builds on the previous one and amplifies its effects. Fermented Bifida filtrate, Phellinus Linteus mushroom extract, beta-glucan, peptides and ceramides — all working in harmony for maximum results."
      }
      products={[
        {
          name: "Toner",
          tagline: cs ? "Osvezeni a priprava pleti" : "Refreshing and preparing skin",
          description: cs
            ? "Lehky toner osvezi a pripravi plet na vstrebani pece. Obsahuje fermentovane extrakty, ktere posiluji ochrannou barieru a dodavaji pleti zarivost."
            : "Light toner refreshes and prepares skin to absorb care. Contains fermented extracts that strengthen the protective barrier and give skin radiance.",
          image: "/images/produkty/the-fame/fame toner.avif",
        },
        {
          name: "Essence",
          tagline: cs ? "Intenzivni hydratace" : "Intensive hydration",
          description: cs
            ? "Essence dodava intenzivni hydrataci a posiluje ochrannou barieru diky beta-glukanu a fermentovanym extraktum. Plet je po ni hebka a pruzna."
            : "Essence delivers intensive hydration and strengthens the barrier with beta-glucan and fermented extracts. Skin feels soft and supple.",
          image: "/images/produkty/the-fame/fame essence.avif",
        },
        {
          name: cs ? "Ocni krem" : "Eye Cream",
          tagline: cs ? "Pece o citlive ocni okoli" : "Delicate eye area care",
          description: cs
            ? "Ocni krem redukuje jemne linky a chrani citlivou oblast peptidy a ceramidy. Dodava pokozce kolem oci mladistvy a odpocinuty vzhled."
            : "Eye cream reduces fine lines and protects the delicate area with peptides and ceramides. Gives the eye area a youthful, rested appearance.",
          image: "/images/produkty/the-fame/fame eye cream.avif",
        },
        {
          name: "Lotion",
          tagline: cs ? "Rovnovaha a hydratace" : "Balance and hydration",
          description: cs
            ? "Lotion udrzuje rovnovahu olej-voda, arganovy olej a bambucke maslo zajistuji hydrataci a pruznost po cely den."
            : "Lotion maintains oil-water balance; argan oil and shea butter ensure hydration and elasticity all day long.",
          image: "/images/produkty/the-fame/fame lotion.avif",
        },
        {
          name: cs ? "Vyzivny krem" : "Nutrition Cream",
          tagline: cs ? "Zaverecna pece plna vyzivy" : "Nourishing finale",
          description: cs
            ? "Zaverecna pece plna vyzivy. Ceramidy a pet typu kyseliny hyaluronove dodavaji hloubkovou hydrataci, posiluji barieru a podporuji obnovu bunek."
            : "Nourishing finale. Ceramides and five types of hyaluronic acid deliver deep hydration, strengthen the barrier and support cell renewal.",
          image: "/images/produkty/the-fame/fame nutrition.avif",
        },
      ]}
      howToUse={{
        text: cs
          ? "Pouzivejte cele rano i vecer v poradi: toner → essence → ocni krem → lotion → vyzivny krem. Produkty jsou lehke, rychle se vstrebavaji a vytvareji harmonickou rutinu vhodnou i pro citlivou pokozku. Prvni zlepseni hydratace pocitite hned, viditelne zmeny v pruznosti a redukci vrasek ocekavejte po 3-4 tydnech."
          : "Use the complete routine morning and evening in order: toner → essence → eye cream → lotion → nutrition cream. Products are lightweight, fast-absorbing and create a harmonious routine suitable even for sensitive skin. You'll feel improved hydration immediately, expect visible firmness and wrinkle reduction after 3-4 weeks.",
      }}
      testimonial={{
        text: cs
          ? "The Fame je jako navsteva korejskeho salonu — jen v pohodli domova. Plet je po nem neuveritelne hladka."
          : "The Fame is like visiting a Korean salon — in the comfort of home. My skin is incredibly smooth afterwards.",
        author: cs ? "Milena, osobni zkusenost" : "Milena, personal experience",
      }}
      faqs={[
        {
          question: cs ? "Jaky je rozdil mezi The Fame a Absolute CellActive?" : "What's the difference between The Fame and Absolute CellActive?",
          answer: cs
            ? "The Fame je luxusnejsi rada s vyssi koncentraci aktivnich latek, urcena pro narocnou zralou plet (40+). Absolute CellActive je univerzalnejsi, vhodna od 30+."
            : "The Fame is a more luxurious line with higher concentration of active ingredients, designed for demanding mature skin (40+). Absolute CellActive is more universal, suitable from 30+.",
        },
        {
          question: cs ? "Stoji ten rozdil v cene za to?" : "Is the price difference worth it?",
          answer: cs
            ? "Urcite ano — The Fame nabizi koncentrace aktivnich latek srovnatelne s luxusnimi znackami za zlomek jejich ceny."
            : "Definitely — The Fame offers active ingredient concentrations comparable to luxury brands at a fraction of their price.",
        },
        {
          question: cs ? "Jak dlouho trva, nez uvidim vysledky?" : "How long until I see results?",
          answer: cs
            ? "Prvni zlepseni hydratace pocitite hned. Viditelne zmeny v pruznosti a redukci vrasek ocekavejte po 3-4 tydnech."
            : "You'll feel improved hydration immediately. Expect visible changes in firmness and wrinkle reduction after 3-4 weeks.",
        },
      ]}
      labels={{
        whyTogetherTitle: tC("procSpolecne"),
        howToUseTitle: tC("jakPouzivat"),
        faqTitle: tC("casteOtazky"),
        ctaButton: tC("chciVedetVic"),
        contactForm: contactFormLabels,
      }}
      defaultSubject="produkty"
    />
  );
}
