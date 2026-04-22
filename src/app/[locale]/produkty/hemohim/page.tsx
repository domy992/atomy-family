import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProductPageTemplate } from "@/components/produkty/product-page-template";

export const metadata: Metadata = {
  title: "HemoHIM",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HemoHIMPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.hemohim");
  const tC = await getTranslations("Common");

  return (
    <ProductPageTemplate
      name={t("name")}
      tagline={t("tagline")}
      heroImage="/images/produkty/hemohim/hemohim (1).png"
      introText={t("intro")}
      problem={t("problem")}
      usps={[
        {
          title: locale === "cs" ? "Podporuje imunitu a obranné buňky" : "Supports immunity and defence cells",
          description: locale === "cs"
            ? "Pomáhá tělu zvládat náročné situace, chrání ho a dodává sílu pokračovat — i když už jen odpočinek nestačí."
            : "Helps the body handle demanding situations, protects it and gives strength to keep going — when rest alone isn't enough.",
        },
        {
          title: locale === "cs" ? "Tři byliny z tradiční korejské medicíny" : "Three herbs from traditional Korean medicine",
          description: locale === "cs"
            ? "Andělika, pivoňka a libeček — byliny, které se v tradiční korejské medicíně používají po staletí, v moderní technologií zesílené formě."
            : "Angelica, peony and ligusticum — herbs used in traditional Korean medicine for centuries, in a modern strengthened form.",
        },
        {
          title: locale === "cs" ? "Klinicky testovaný a patentovaný" : "Clinically tested and patented",
          description: locale === "cs"
            ? "Vyvinutý vědeckým týmem v jihokorejské státní výzkumné instituci KAERI. Důvěryhodný doplněk, který pomáhá milionům lidí po celém světě."
            : "Developed by a scientific team at KAERI, a South Korean state research institute. A trusted supplement helping millions worldwide.",
        },
      ]}
      testimonial={{
        text: locale === "cs"
          ? "HemoHIM používám denně už 2 roky. Rozdíl v energii a odolnosti je obrovský. Minulou zimu jsem vůbec nestonala."
          : "I've been using HemoHIM daily for 2 years. The difference in energy and resilience is enormous. I didn't get sick at all last winter.",
        author: locale === "cs" ? "Milena, osobní zkušenost" : "Milena, personal experience",
      }}
      techDetails={locale === "cs"
        ? "HemoHIM spojuje sílu tří bylin — anděliky (Angelica sinensis), pivoňky (Paeonia lactiflora) a libečku (Ligusticum chuanxiong) — které se v tradiční korejské medicíně používají po staletí. Díky moderní technologii jsou jejich účinky zesílené a dostupné v praktické formě sáčků s tekutinou. Doporučené dávkování: 1 sáček (20 ml) dvakrát denně, ideálně ráno a večer. Balení obsahuje 60 sáčků na jeden měsíc. HemoHIM je doplněk stravy a nenahrazuje pestrou a vyváženou stravu. Není určen pro děti, těhotné ani kojící ženy. Před užíváním se poraďte se svým lékařem nebo lékárníkem, zejména pokud užíváte jiné léky."
        : "HemoHIM combines the power of three herbs — angelica (Angelica sinensis), peony (Paeonia lactiflora) and ligusticum (Ligusticum chuanxiong) — used in traditional Korean medicine for centuries. Modern technology amplifies their effects in a convenient sachet form. Recommended dosage: 1 sachet (20 ml) twice daily, ideally morning and evening. Box contains 60 sachets for one month. HemoHIM is a dietary supplement and does not replace a varied and balanced diet. Not intended for children, pregnant or breastfeeding women. Consult your doctor or pharmacist before use, especially if taking other medications."
      }
      certImages={[
        "/images/produkty/hemohim/hemohim certifikaty (1).png",
        "/images/produkty/hemohim/hemohim certifikaty (2).png",
      ]}
      purchaseSteps={[
        locale === "cs"
          ? "Napište mi nebo se registrujte na oficiální Atomy platformě"
          : "Write to me or register on the official Atomy platform",
        locale === "cs"
          ? "Objednejte HemoHIM za členské ceny"
          : "Order HemoHIM at member prices",
        locale === "cs"
          ? "Užívejte 2× denně — ráno a večer před jídlem"
          : "Take twice daily — morning and evening before meals",
      ]}
      faqs={[
        {
          question: locale === "cs" ? "Je HemoHIM bezpečný?" : "Is HemoHIM safe?",
          answer: locale === "cs"
            ? "Ano, HemoHIM je vyroben z přírodních bylin a prošel rozsáhlými bezpečnostními testy. Nemá známé vedlejší účinky při doporučeném dávkování."
            : "Yes, HemoHIM is made from natural herbs and has undergone extensive safety tests. No known side effects at recommended dosage.",
        },
        {
          question: locale === "cs"
            ? "Jak dlouho trvá, než pocítím účinky?"
            : "How long until I feel the effects?",
          answer: locale === "cs"
            ? "První zlepšení energie mnozí lidé hlásí po 1–2 týdnech. Plný efekt na imunitní systém se projeví po 1–3 měsících pravidelného užívání."
            : "Many people report initial energy improvements after 1–2 weeks. Full immune system effects appear after 1–3 months of regular use.",
        },
        {
          question: locale === "cs"
            ? "Mohu jej užívat s jinými léky?"
            : "Can I take it with other medications?",
          answer: locale === "cs"
            ? "HemoHIM je doplněk stravy z přírodních bylin. Pokud užíváte léky, doporučujeme konzultaci s lékařem."
            : "HemoHIM is a dietary supplement made from natural herbs. If you take medications, we recommend consulting your doctor.",
        },
        {
          question: locale === "cs" ? "Jak se užívá?" : "How do I take it?",
          answer: locale === "cs"
            ? "Doporučená dávka je 2 sáčky denně — ráno a večer, ideálně 30 minut před jídlem. Lze rozpustit ve vodě nebo užívat přímo."
            : "Recommended dose is 2 sachets daily — morning and evening, ideally 30 minutes before meals. Can be dissolved in water or taken directly.",
        },
      ]}
      gallery={[
        "/images/produkty/hemohim/hemohim byliny (1).webp",
        "/images/produkty/hemohim/hemohim byliny (2).webp",
        "/images/produkty/hemohim/hemohim byliny (3).webp",
        "/images/produkty/hemohim/hemohim ilustrace.png",
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
