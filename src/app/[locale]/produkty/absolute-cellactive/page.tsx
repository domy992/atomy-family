import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SetProductTemplate } from "@/components/produkty/set-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products.absolute" });
  return {
    title: t("name"),
    description: t("intro").slice(0, 160),
    alternates: { canonical: `/${locale}/produkty/absolute-cellactive` },
    openGraph: {
      title: `${t("name")} | Atomy Family`,
      description: t("shortDesc"),
      url: `/${locale}/produkty/absolute-cellactive`,
      images: [{ url: "/images/produkty/absolute/Absolute Serum (1).avif", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function AbsoluteCellActivePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.absolute");
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
      heroImage="/images/produkty/absolute/Absolute set (1).avif"
      introText={t("intro")}
      whyTogether={cs
        ? "Kazdy produkt v rade Absolute CellActive ma svou ulohu — od probuzeni pleti az po jeji zavreni do ochranneho zavoje. Spolecne vytvareji kompletni system, kde kazdy krok zesiluje ucinky toho predchoziho. Vysledkem je plet, ktera je hydratovana, zpevnena a zariva."
        : "Each product in the Absolute CellActive line has its role — from awakening the skin to sealing it in a protective veil. Together they create a complete system where each step amplifies the effects of the previous one. The result is skin that is hydrated, firm and radiant."
      }
      products={[
        {
          name: cs ? "Toner" : "Toner",
          tagline: cs ? "Prvni krok — probuzeni pleti" : "First step — skin awakening",
          description: cs
            ? "Toner plet jemne probudi a pripravi na dalsi peci. Odstraní zbytky necistot po cisteni a obnovuje pH rovnovahu. Diky lehke texture se rychle vstrebava a zanechava plet svezi a pripravenou."
            : "Toner gently awakens the skin and prepares it for further care. Removes remaining impurities after cleansing and restores pH balance. Its light texture absorbs quickly, leaving skin fresh and prepared.",
          image: "/images/produkty/absolute/Absolute toner (1).avif",
        },
        {
          name: cs ? "Ampule" : "Ampoule",
          tagline: cs ? "Nejsilnejsi koncentrat" : "Most powerful concentrate",
          description: cs
            ? "Ampule je nejsilnejsi koncentrat cele rady — maly elixir mladi, ktery cilene zpevnuje ochablou plet. Obsahuje vysoke koncentrace aktivnich latek pro maximalni ucinnost."
            : "The ampoule is the most powerful concentrate of the entire line — a small elixir of youth that targets sagging skin. Contains high concentrations of active ingredients for maximum effectiveness.",
          image: "/images/produkty/absolute/Absolute ampoule (1).avif",
        },
        {
          name: cs ? "Serum" : "Serum",
          tagline: cs ? "Elasticita a jas" : "Elasticity and radiance",
          description: cs
            ? "Serum posiluje elasticitu, projasnuje a vyhlazuje jemne linky. Lehka textura se okamzite vstrebava a zanechava plet hedvabne hladkou."
            : "Serum strengthens elasticity, brightens and smooths fine lines. Light texture absorbs instantly, leaving skin silky smooth.",
          image: "/images/produkty/absolute/Absolute Serum (1).avif",
        },
        {
          name: cs ? "Lotion" : "Lotion",
          tagline: cs ? "Hloubkova hydratace" : "Deep hydration",
          description: cs
            ? "Lotion jako hedvabny zavoj doplni hydrataci a vyzivi pokozku do hloubky. Udrzuje rovnovahu olej-voda pro celodeni pohodli."
            : "Lotion like a silky veil replenishes hydration and nourishes the skin deeply. Maintains oil-water balance for all-day comfort.",
          image: "/images/produkty/absolute/Absolute lotion (1).avif",
        },
        {
          name: cs ? "Ocni krem" : "Eye Complex",
          tagline: cs ? "Pece o citlive ocni okoli" : "Delicate eye area care",
          description: cs
            ? "Ocni krem redukuje vrasky a otoky v citlive oblasti kolem oci. Peptidy a ceramidy posiluji jemnou pokozku a dodavaji ji mladistvy vzhled."
            : "Eye cream reduces wrinkles and puffiness in the delicate eye area. Peptides and ceramides strengthen delicate skin and give it a youthful appearance.",
          image: "/images/produkty/absolute/Absolute eye complex (1).avif",
        },
        {
          name: cs ? "Vyzivny krem" : "Nutrition Cream",
          tagline: cs ? "Luxusni tecka nazaver" : "Luxurious finishing touch",
          description: cs
            ? "Vyzivny krem je luxusni teckou nazaver — dodava pleti energii, silu a zdravy lesk. Uzavre vsechny predchozi kroky a zajisti dlouhodobou ochranu."
            : "Nutrition cream is the luxurious finishing touch — gives skin energy, strength and healthy glow. Seals all previous steps and ensures long-lasting protection.",
          image: "/images/produkty/absolute/Absolute nutrition (1).avif",
        },
      ]}
      howToUse={{
        text: cs
          ? "Pouzivejte kompletni peci kazde rano i vecer. Nanaste v poradi: toner → ampule → serum → lotion → ocni krem → vyzivny krem. Diky pravidelnosti a postupnemu vrstveni produktu bude plet nejen krasne hydratovana a chranena, ale i postupne pevnejsi, jasnejsi a sjednocena."
          : "Use the complete care every morning and evening. Apply in order: toner → ampoule → serum → lotion → eye cream → nutrition cream. With regularity and gradual layering, skin becomes not only hydrated and protected, but also gradually firmer, brighter and more even.",
      }}
      testimonial={{
        text: t("testimonial"),
        author: t("testimonialAuthor"),
      }}
      faqs={[
        {
          question: cs ? "Pro jaky typ pleti je Absolute CellActive vhodna?" : "What skin type is Absolute CellActive suitable for?",
          answer: cs
            ? "Rada je urcena predevsim pro zralou plet (30+) se znamkami starnuti — vrasky, ztrata pruznosti, nerovnomerna pigmentace. Lze pouzivat na vsechny typy pleti."
            : "The line is designed primarily for mature skin (30+) with signs of aging — wrinkles, loss of firmness, uneven pigmentation. Can be used on all skin types.",
        },
        {
          question: cs ? "Jak dlouho vydrzi jeden set?" : "How long does one set last?",
          answer: cs
            ? "Pri pravidelnem pouzivani (rano a vecer) vydrzi kompletni set priblizne 2-3 mesice."
            : "With regular use (morning and evening), a complete set lasts approximately 2-3 months.",
        },
        {
          question: cs ? "Mohu kombinovat s jinou kosmetikou?" : "Can I combine it with other cosmetics?",
          answer: cs
            ? "Ano, ale nejlepsi vysledky dosahnete pouzitim cele rady spolecne, protoze produkty jsou formulovane pro vzajemnou synergii."
            : "Yes, but you'll achieve the best results by using the entire line together, as the products are formulated for mutual synergy.",
        },
        {
          question: cs ? "Kde produkt koupim?" : "Where can I buy it?",
          answer: cs
            ? "Produkty Atomy se prodavaji pres oficialni Atomy platformu. Napiste mi a pomzu vam s registraci a prvni objednavkou."
            : "Atomy products are sold through the official Atomy platform. Write to me and I'll help you with registration and your first order.",
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
