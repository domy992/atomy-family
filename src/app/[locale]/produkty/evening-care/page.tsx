import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProductPageTemplate } from "@/components/produkty/product-page-template";

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

  return (
    <ProductPageTemplate
      name={t("name")}
      tagline={t("tagline")}
      heroImage="/images/produkty/evening/evening set.avif"
      introText={t("intro")}
      problem={t("problem")}
      usps={[
        {
          title: locale === "cs" ? "Deep Cleanser + Foam Cleanser" : "Deep Cleanser + Foam Cleanser",
          description: locale === "cs"
            ? "Deep Cleanser odstraňuje make-up i nečistoty z pórů a vyživuje ženšenem, ginkgem a zeleným čajem. Nadýchaná pěna Foam Cleanser pleť očistí od smogu a stresu, zklidní ji beta-glukanem a fermentovanými složkami."
            : "Deep Cleanser removes makeup and impurities while nourishing with ginseng, ginkgo and green tea. Rich Foam Cleanser washes away smog and stress, soothes skin with beta-glucan and fermented ingredients.",
        },
        {
          title: locale === "cs" ? "Peeling Gel" : "Peeling Gel",
          description: locale === "cs"
            ? "Jemný gel odstraní odumřelé buňky bez podráždění. Pleť je hladší, projasněná a lépe vstřebává krémy i séra. Nádherně voní po citrusu."
            : "Gentle gel removes dead skin cells without irritation. Skin is smoother, brighter and better absorbs creams and serums. Lovely citrus scent.",
        },
        {
          title: locale === "cs" ? "Peel-Off Mask" : "Peel-Off Mask",
          description: locale === "cs"
            ? "Zábavný krok, který pleť krásně vypne. Po zaschnutí se sloupne jako tenká vrstva a s ní odejdou nečistoty a maz. Obsahuje výtažky z ametystu a jadeitu — čistí, revitalizuje a rozjasňuje."
            : "A fun step that firms the skin beautifully. Peels off as a thin layer, taking impurities and sebum with it. Contains amethyst and jade extracts — cleanses, revitalizes and brightens.",
        },
      ]}
      testimonial={{
        text: locale === "cs"
          ? "Evening Care set není jen o čištění pleti — je to malý večerní rituál, který ti pomůže zpomalit a dopřát si chvíli pro sebe."
          : "The Evening Care set isn't just about cleansing — it's a little evening ritual that helps you slow down and take a moment for yourself.",
        author: locale === "cs" ? "Milena, osobní zkušenost" : "Milena, personal experience",
      }}
      techDetails={locale === "cs"
        ? "Komplexní čtyřkroková sada pro večerní péči o pleť, která kombinuje tradiční korejské ingredience s moderními technologiemi. Deep Cleanser a Foam Cleanser používejte každý večer — pleť krásně vyčistí, zklidní a připraví na noční regeneraci. Peeling Gel a Peel-Off masku zařaďte 1–2× týdně, když si chcete dopřát víc. Vhodné pro všechny typy pleti včetně citlivé."
        : "A complete four-step evening skincare set combining traditional Korean ingredients with modern technology. Use Deep Cleanser and Foam Cleanser every evening — they cleanse, soothe and prepare skin for night regeneration. Add Peeling Gel and Peel-Off Mask 1–2× a week for extra care. Suitable for all skin types including sensitive."
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
        "/images/produkty/evening/Atomy foam cleanser.avif",
        "/images/produkty/evening/Atomy deep cleanser.avif",
        "/images/produkty/evening/Atomy peeling mask.avif",
        "/images/produkty/evening/Atomy Peel-off mask.avif",
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
