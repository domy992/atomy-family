import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProductPageTemplate } from "@/components/produkty/product-page-template";

export const metadata: Metadata = {
  title: "Evening Care",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EveningCarePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.evening");
  const tC = await getTranslations("Common");

  return (
    <ProductPageTemplate
      name={t("name")}
      tagline={t("tagline")}
      heroImage="/images/produkty/evening/evening set.jpg"
      introText={t("intro")}
      problem={t("problem")}
      usps={[
        {
          title: locale === "cs" ? "Dvojité čištění" : "Double cleansing",
          description: locale === "cs"
            ? "Korejská metoda double cleansing — nejdříve odlíčení, pak hloubkové čištění. Pleť je dokonale čistá bez podráždění."
            : "Korean double cleansing method — first makeup removal, then deep cleansing. Skin is perfectly clean without irritation.",
        },
        {
          title: locale === "cs" ? "Jemná formule" : "Gentle formula",
          description: locale === "cs"
            ? "Vhodná i pro citlivou pleť. Bez agresivních složek, s uklidňujícími bylinnými extrakty."
            : "Suitable even for sensitive skin. Free of harsh ingredients, with soothing herbal extracts.",
        },
        {
          title: locale === "cs" ? "Skvělý poměr cena/kvalita" : "Great value for money",
          description: locale === "cs"
            ? "Cenově nejdostupnější řada Atomy — ideální pro začátek s korejskou kosmetikou bez velké investice."
            : "Atomy's most affordable line — ideal for starting with Korean cosmetics without a big investment.",
        },
      ]}
      testimonial={{
        text: locale === "cs"
          ? "Evening Care je můj základ — bez něj bych nezačala žádný večerní rituál. Pleť je po něm čistá a příjemně hydratovaná."
          : "Evening Care is my foundation — I wouldn't start any evening ritual without it. My skin feels clean and pleasantly hydrated.",
        author: locale === "cs" ? "Milena, osobní zkušenost" : "Milena, personal experience",
      }}
      techDetails={locale === "cs"
        ? "Evening Care set obsahuje Foam Cleanser pro jemné pěnivé čištění, Deep Cleanser pro hloubkové odlíčení a Peeling Mask pro pravidelnou exfoliaci. Všechny produkty jsou formulovány s bylinným komplexem, který uklidňuje a hydratuje pleť. Dermatologicky testováno, vhodné pro všechny typy pleti včetně citlivé."
        : "Evening Care set includes Foam Cleanser for gentle foaming cleansing, Deep Cleanser for deep makeup removal and Peeling Mask for regular exfoliation. All products are formulated with a herbal complex that soothes and hydrates the skin. Dermatologically tested, suitable for all skin types including sensitive."
      }
      purchaseSteps={[
        locale === "cs"
          ? "Napište mi nebo se registrujte na Atomy platformě"
          : "Write to me or register on the Atomy platform",
        locale === "cs"
          ? "Objednejte Evening Care set za členské ceny"
          : "Order the Evening Care set at member prices",
        locale === "cs"
          ? "Začněte svou korejskou beauty rutinu"
          : "Start your Korean beauty routine",
      ]}
      faqs={[
        {
          question: locale === "cs"
            ? "Pro koho je Evening Care určená?"
            : "Who is Evening Care designed for?",
          answer: locale === "cs"
            ? "Pro každou, kdo chce začít s korejskou rutinou péče. Vhodná pro všechny typy pleti a věkové kategorie."
            : "For anyone who wants to start a Korean skincare routine. Suitable for all skin types and age groups.",
        },
        {
          question: locale === "cs"
            ? "Mohu používat s jinou kosmetikou?"
            : "Can I use it with other cosmetics?",
          answer: locale === "cs"
            ? "Samozřejmě! Evening Care je základní čisticí řada a skvěle funguje jako první krok před jakoukoli další péčí."
            : "Of course! Evening Care is a basic cleansing line and works great as the first step before any other care.",
        },
        {
          question: locale === "cs"
            ? "Co set obsahuje?"
            : "What does the set include?",
          answer: locale === "cs"
            ? "Set obsahuje Foam Cleanser, Deep Cleanser, Peeling Mask a Peel-off Mask — kompletní čisticí systém."
            : "The set includes Foam Cleanser, Deep Cleanser, Peeling Mask and Peel-off Mask — a complete cleansing system.",
        },
      ]}
      gallery={[
        "/images/produkty/evening/Atomy foam cleanser.jpg",
        "/images/produkty/evening/Atomy deep cleanser.jpg",
        "/images/produkty/evening/Atomy peeling mask.jpg",
        "/images/produkty/evening/Atomy Peel-off mask.jpg",
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
