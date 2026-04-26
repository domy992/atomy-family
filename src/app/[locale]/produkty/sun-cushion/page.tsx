import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const cs = locale === "cs";
  return {
    title: "Atomy Urban Shield Sun Cushion",
    description: cs
      ? "Víc než jen SPF — luxusní péče vždy po ruce. Opalovací krém, péče o pleť a podklad v jednom."
      : "More than just SPF — luxury care always at hand. Sunscreen, skincare and base in one.",
    alternates: { canonical: `/${locale}/produkty/sun-cushion` },
    openGraph: {
      title: "Atomy Urban Shield Sun Cushion | Atomy Family",
      description: cs
        ? "Opalovací krém, péče o pleť a podklad v jednom. Minerální ochrana proti UV záření a modrému světlu."
        : "Sunscreen, skincare and base in one. Mineral protection against UV and blue light.",
      url: `/${locale}/produkty/sun-cushion`,
      images: [{ url: "/images/produkty/absolute/Absolute set (1).avif", width: 1200, height: 1200, alt: "Atomy Urban Shield Sun Cushion" }],
    },
  };
}

export default async function SunCushionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
    <SingleProductTemplate
      name="Atomy Urban Shield Sun Cushion"
      tagline={cs
        ? "Tvá pleť může být chráněná a krásná za pár sekund"
        : "Your skin can be protected and beautiful in seconds"
      }
      heroImage="/images/produkty/absolute/Absolute set (1).avif"
      introText={cs
        ? "Víc než jen SPF — luxusní péče vždy po ruce. Opalovací krém, péče o pleť a podklad v jednom. Minerální ochrana proti UV záření a modrému světlu, ideální pro městské prostředí."
        : "More than just SPF — luxury care always at hand. Sunscreen, skincare and base in one. Mineral protection against UV and blue light, ideal for urban environments."
      }
      benefits={cs ? [
        "Minerální ochrana proti UV záření a modrému světlu",
        "Hydratace bez ucpávání pórů — díky aloe vera a slézovým extraktům",
        "Rozjasňující efekt CellActive™ Brightening Code",
        "Lehký, vzdušný finiš — žádná mastnota, jen přirozeně zářivá pleť",
      ] : [
        "Mineral protection against UV radiation and blue light",
        "Hydration without clogging pores — with aloe vera and mallow extracts",
        "Brightening effect of CellActive™ Brightening Code",
        "Light, airy finish — no greasiness, just naturally radiant skin",
      ]}
      whyDifferent={{
        text: cs
          ? "Elegantní cushion formát — opalovací krém, péče o pleť a podklad v jednom. Stačí jemně nanést houbičkou a pleť je okamžitě chráněná, hydratovaná a rozzářená."
          : "Elegant cushion format — sunscreen, skincare and base in one. Just gently apply with the sponge and skin is instantly protected, hydrated and radiant.",
        image: "/images/produkty/absolute/Absolute set (1).avif",
      }}
      forWhom={cs ? [
        "Když chceš mít pleť chráněnou a krásně sjednocenou v jediném kroku",
        "Když toužíš po přirozeném rozjasnění i bez make-upu",
        "Když hledáš praktické řešení, které se vejde do kabelky",
      ] : [
        "When you want protected and beautifully even skin in one step",
        "When you want natural radiance without makeup",
        "When you need a practical solution that fits in your handbag",
      ]}
      howToUse={{
        text: cs
          ? "Použij jako poslední krok péče o pleť nebo místo make-upu. Jemně nanes houbičkou a lehce poklepej po celém obličeji. Přidej kdykoliv během dne."
          : "Use as the last step of skincare or instead of makeup. Gently apply with the sponge and lightly tap across the face. Reapply anytime during the day.",
      }}
      labels={{
        benefitsTitle: cs ? "Proč si ho zamiluješ?" : "Why you'll love it",
        whyDifferentTitle: cs ? "Čím je jiný?" : "What makes it different?",
        forWhomTitle: cs ? "Pro koho je ideální?" : "Who is it for?",
        howToUseTitle: cs ? "Jak používat?" : "How to use?",
        ctaButton: tC("chciVedetVic"),
        contactForm: contactFormLabels,
      }}
      defaultSubject="produkty"
    />
  );
}
