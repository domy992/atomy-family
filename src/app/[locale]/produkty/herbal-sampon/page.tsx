import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Atomy Herbal Shampoo",
    description: locale === "cs"
      ? "Bylinný šampón pro silné, čisté a vyživené vlasy"
      : "Herbal shampoo for strong, clean and nourished hair",
    alternates: { canonical: `/${locale}/produkty/herbal-sampon` },
  };
}

export default async function HerbalSamponPage({ params }: Props) {
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
      name="Atomy Herbal Shampoo"
      tagline={cs
        ? "Bylinný šampón pro silné, čisté a vyživené vlasy"
        : "Herbal shampoo for strong, clean and nourished hair"
      }
      heroImage="/images/produkty/sampony/herbal šampon (1).avif"
      introText={cs
        ? "Prémiový šampón naplněný účinnými bylinnými extrakty z východní i západní medicíny. Čistí do hloubky, chrání pokožku hlavy a posiluje vlasy od kořínků."
        : "Premium shampoo filled with effective herbal extracts from Eastern and Western medicine. Deep cleans, protects the scalp and strengthens hair from the roots."
      }
      benefits={cs ? [
        "Vysoký obsah vyživných bylin (10 % Saengmodan + HGSC Complex)",
        "Chrání vlasy a pokožku hlavy díky koacervačnímu systému",
        "Bohatá, krémová pěna pro důkladné, ale jemné mytí",
        "Udržuje mírně kyselé pH 5,1–6,1 — ideální pro zdraví pokožky",
        "Vhodný i pro vlasy po barvení nebo trvalé",
      ] : [
        "High content of nourishing herbs (10% Saengmodan + HGSC Complex)",
        "Protects hair and scalp with coacervation system",
        "Rich, creamy foam for thorough yet gentle washing",
        "Maintains mildly acidic pH 5.1–6.1 — ideal for scalp health",
        "Suitable for color-treated or permed hair",
      ]}
      whyDifferent={{
        text: cs
          ? "Obsahuje komplex Saengmodan z 10 orientálních bylin a HGSC Complex z 16 dalších bylinných extraktů včetně heřmánku, kopřivy, zázvoru a aloe vera. Optimální poměr přírodních surfaktantů poskytuje bohatou pěnu bez podráždění."
          : "Contains Saengmodan complex from 10 oriental herbs and HGSC Complex from 16 more herbal extracts including chamomile, nettle, ginger and aloe vera. Optimal ratio of natural surfactants provides rich foam without irritation.",
        image: "/images/produkty/sampony/herbal šampon AI.avif",
      }}
      forWhom={cs ? [
        "Pro vlasy poškozené chemickým ošetřením",
        "Pro jemné, lámavé nebo oslabené vlasy",
        "Pro kombinaci přírodní síly a jemnosti",
        "Unisex — vhodné pro muže i ženy",
      ] : [
        "For chemically treated damaged hair",
        "For fine, brittle or weakened hair",
        "For a combination of natural power and gentleness",
        "Unisex — suitable for men and women",
      ]}
      howToUse={{
        text: cs
          ? "Naneste přiměřené množství na mokré vlasy, jemně masírujte a napěňte. Důkladně opláchněte. Pro nejlepší výsledky používejte s Atomy Herbal kondicionérem."
          : "Apply adequate amount to wet hair, gently massage and lather. Rinse thoroughly. For best results use with Atomy Herbal Conditioner.",
        image: "/images/produkty/sampony/herbal šampon (2).avif",
      }}
      labels={{
        benefitsTitle: cs ? "Proč si ho zamiluješ?" : "Why you'll love it",
        whyDifferentTitle: cs ? "Čím je výjimečný?" : "What makes it special?",
        forWhomTitle: cs ? "Pro koho je ideální?" : "Who is it for?",
        howToUseTitle: cs ? "Jak používat?" : "How to use?",
        ctaButton: tC("chciVedetVic"),
        contactForm: contactFormLabels,
      }}
      defaultSubject="produkty"
    />
  );
}
