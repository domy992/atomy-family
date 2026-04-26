import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SetProductTemplate } from "@/components/produkty/set-product-template";

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
      images: [{ url: "/images/hero/top_produkty_01.avif", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function DermaRealCicaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.cica");
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
      heroImage="/images/hero/top_produkty_01.avif"
      introText={t("intro")}
      whyTogether={cs
        ? "Rada Derma Real Cica je navrzena jako kompletni system pro citlivou plet. Centella Asiatica (cica) je legendární korejska bylina s prokazanymi protizanetlivymi a regeneracnimi ucinky. Vsechny produkty spolecne posiluji kozni barieru, zklidnuji podrazdeni a dodavaji pleti potrebnou hydrataci."
        : "The Derma Real Cica line is designed as a complete system for sensitive skin. Centella Asiatica (cica) is a legendary Korean herb with proven anti-inflammatory and regenerative effects. All products together strengthen the skin barrier, soothe irritation and deliver needed hydration."
      }
      products={[
        {
          name: "Centella Asiatica",
          tagline: cs ? "Legendární korejska bylina" : "Legendary Korean herb",
          description: cs
            ? "Cica je legendární korejska bylina s prokazanymi protizanetlivymi a regeneracnimi ucinky. Idealni pro citlivou plet, ktera potrebuje zklidneni a obnovu."
            : "Cica is a legendary Korean herb with proven anti-inflammatory and regenerative effects. Ideal for sensitive skin that needs soothing and renewal.",
          image: "/images/hero/top_produkty_01.avif",
        },
        {
          name: cs ? "Obnova kozni bariery" : "Skin Barrier Restoration",
          tagline: cs ? "Posileni prirozene ochrany" : "Strengthening natural protection",
          description: cs
            ? "Produkty posiluji prirozeny ochranny stit pleti, snizuji citlivost a pomahaji pleti lepe se branit vnejsim vlivum. Ceramidy a kyselina hyaluronova zajistuji intenzivni hydrataci."
            : "Products strengthen the skin's natural protective barrier, reduce sensitivity and help skin better defend against external factors. Ceramides and hyaluronic acid ensure intensive hydration.",
          image: "/images/hero/top_produkty_01.avif",
        },
        {
          name: cs ? "Dermatologicky testovano" : "Dermatologically Tested",
          tagline: cs ? "Hypoalergenni slozeni" : "Hypoallergenic composition",
          description: cs
            ? "Formule bez drazdivych latek, vhodna i pro nejcitlivejsi typy pleti. Hypoalergenni slozeni bez parfemace. Obsahuje madecassoside a asiaticoside pro prokazanou podporu hojeni."
            : "Formula free of irritants, suitable even for the most sensitive skin types. Hypoallergenic, fragrance-free composition. Contains madecassoside and asiaticoside for proven healing support.",
          image: "/images/hero/top_produkty_01.avif",
        },
      ]}
      howToUse={{
        text: cs
          ? "Pouzivejte rano a vecer jako soucast sve beauty rutiny. Produkty jsou lehke, gelove textury a rychle se vstrebavaji. Vhodne pro vsechny typy pleti vcetne mastne a kombinovane — neucpavaji pory. Skvele se doplnuji s Evening Care pro cisteni a s Absolute nebo Fame pro intenzivni peci."
          : "Use morning and evening as part of your beauty routine. Products are lightweight, gel-textured and fast-absorbing. Suitable for all skin types including oily and combination — won't clog pores. Pairs great with Evening Care for cleansing and Absolute or Fame for intensive care.",
      }}
      testimonial={{
        text: cs
          ? "Derma Real Cica je jedina rada, po ktere se me citliva plet konecne zklidnila. Zadne zarudnuti, zadne stahovani."
          : "Derma Real Cica is the only line that finally calmed my sensitive skin. No redness, no tightness.",
        author: cs ? "Milena, osobni zkusenost" : "Milena, personal experience",
      }}
      faqs={[
        {
          question: cs ? "Mohu pouzivat pri ekzemu nebo rosacee?" : "Can I use it with eczema or rosacea?",
          answer: cs
            ? "Rada je vhodna pro citlivou plet, ale pri diagnostikovanych koznich onemocnenich doporucujeme konzultaci s dermatologem."
            : "The line is suitable for sensitive skin, but for diagnosed skin conditions we recommend consulting a dermatologist.",
        },
        {
          question: cs ? "Je vhodna i pro mastnou plet?" : "Is it suitable for oily skin?",
          answer: cs
            ? "Ano, lehka gelova textura je vhodna i pro mastnou a kombinovanou plet. Neucpava pory."
            : "Yes, the light gel texture is suitable for oily and combination skin. It doesn't clog pores.",
        },
        {
          question: cs ? "Mohu kombinovat s jinymi radami Atomy?" : "Can I combine it with other Atomy lines?",
          answer: cs
            ? "Urcite — Derma Real Cica se skvele doplnuje napriklad s Evening Care pro cisteni a s Absolute nebo Fame pro intenzivni peci."
            : "Absolutely — Derma Real Cica pairs great with Evening Care for cleansing and Absolute or Fame for intensive care.",
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
