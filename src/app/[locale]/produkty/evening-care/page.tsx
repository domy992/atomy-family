import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SetProductTemplate } from "@/components/produkty/set-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products.evening" });
  return {
    title: t("name"),
    description: t("intro").slice(0, 160),
    alternates: { canonical: `/${locale}/produkty/evening-care` },
    openGraph: {
      title: `${t("name")} | Atomy Family`,
      description: t("shortDesc"),
      url: `/${locale}/produkty/evening-care`,
      images: [{ url: "/images/produkty/evening/evening set.avif", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function EveningCarePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.evening");
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
      heroImage="/images/produkty/evening/evening set.avif"
      introText={t("intro")}
      whyTogether={cs
        ? "Vecerni cisteni neni jen o jednom kroku. Kazdy produkt v sade ma svou ulohu: Deep Cleanser odstrani make-up a necistoty, Foam Cleanser plet dokona ocisti, Peeling Gel odebere odumrele bunky a Peel-Off Mask plet krásne vypne. Spolecne vytvareji kompletni ritual, ktery plet pripravi na nocni regeneraci."
        : "Evening cleansing isn't just one step. Each product in the set has its role: Deep Cleanser removes makeup and impurities, Foam Cleanser finishes cleansing, Peeling Gel removes dead cells and Peel-Off Mask firms the skin beautifully. Together they create a complete ritual that prepares skin for night regeneration."
      }
      products={[
        {
          name: "Deep Cleanser",
          tagline: cs ? "Odstraneni make-upu a necistot" : "Makeup and impurity removal",
          description: cs
            ? "Deep Cleanser odstranuje make-up i necistoty z poru a vyzivuje zenzenem, ginkgem a zelenym cajem. Prvni krok kazdeho vecerniho ritualu."
            : "Deep Cleanser removes makeup and impurities while nourishing with ginseng, ginkgo and green tea. The first step of every evening ritual.",
          image: "/images/produkty/evening/Atomy deep cleanser.avif",
        },
        {
          name: "Foam Cleanser",
          tagline: cs ? "Nadychana pena pro cistou plet" : "Rich foam for clean skin",
          description: cs
            ? "Nadychana pena Foam Cleanser plet ocisti od smogu a stresu, zklidni ji beta-glukanem a fermentovanymi slozkami. Plet je po ni svezi a pruzna."
            : "Rich Foam Cleanser washes away smog and stress, soothes skin with beta-glucan and fermented ingredients. Skin feels fresh and supple.",
          image: "/images/produkty/evening/Atomy foam cleanser.avif",
        },
        {
          name: "Peeling Gel",
          tagline: cs ? "Jemna exfoliace" : "Gentle exfoliation",
          description: cs
            ? "Jemny gel odstrani odumrele bunky bez podrazdeni. Plet je hladsi, projasnena a lepe vstrebava kremy i sera. Nadherně voni po citrusu."
            : "Gentle gel removes dead skin cells without irritation. Skin is smoother, brighter and better absorbs creams and serums. Lovely citrus scent.",
          image: "/images/produkty/evening/Atomy peeling mask.avif",
        },
        {
          name: "Peel-Off Mask",
          tagline: cs ? "Hloubkove cisteni a zpevneni" : "Deep cleansing and firming",
          description: cs
            ? "Zabavny krok, ktery plet krasne vypne. Po zaschnut se sloupne jako tenka vrstva a s ni odejdou necistoty a maz. Obsahuje vytazky z ametystu a jadeitu."
            : "A fun step that firms the skin beautifully. Peels off as a thin layer, taking impurities and sebum with it. Contains amethyst and jade extracts.",
          image: "/images/produkty/evening/Atomy Peel-off mask.avif",
        },
      ]}
      howToUse={{
        text: cs
          ? "Deep Cleanser a Foam Cleanser pouzivejte kazdy vecer — plet krasne ocisti, zklidni a pripravi na nocni regeneraci. Peeling Gel a Peel-Off masku zaradte 1-2x tydne, kdyz si chcete doprat vic. Vhodne pro vsechny typy pleti vcetne citlive."
          : "Use Deep Cleanser and Foam Cleanser every evening — they cleanse, soothe and prepare skin for night regeneration. Add Peeling Gel and Peel-Off Mask 1-2 times a week for extra care. Suitable for all skin types including sensitive.",
      }}
      testimonial={{
        text: cs
          ? "Evening Care set neni jen o cisteni pleti — je to maly vecerni ritual, ktery ti pomuze zpomalit a doprat si chvili pro sebe."
          : "The Evening Care set isn't just about cleansing — it's a little evening ritual that helps you slow down and take a moment for yourself.",
        author: cs ? "Milena, osobni zkusenost" : "Milena, personal experience",
      }}
      faqs={[
        {
          question: cs ? "Pro koho je Evening Care urcena?" : "Who is Evening Care designed for?",
          answer: cs
            ? "Pro kazdou, kdo chce zacit s korejskou rutinou pece. Vhodna pro vsechny typy pleti a vekove kategorie."
            : "For anyone who wants to start a Korean skincare routine. Suitable for all skin types and age groups.",
        },
        {
          question: cs ? "Mohu pouzivat s jinou kosmetikou?" : "Can I use it with other cosmetics?",
          answer: cs
            ? "Samozrejme! Evening Care je zakladni cisticsi rada a skvele funguje jako prvni krok pred jakoukoli dalsi peci."
            : "Of course! Evening Care is a basic cleansing line and works great as the first step before any other care.",
        },
        {
          question: cs ? "Co set obsahuje?" : "What does the set include?",
          answer: cs
            ? "Set obsahuje Deep Cleanser, Foam Cleanser, Peeling Gel a Peel-Off Mask — kompletni cisticsi system."
            : "The set includes Deep Cleanser, Foam Cleanser, Peeling Gel and Peel-Off Mask — a complete cleansing system.",
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
