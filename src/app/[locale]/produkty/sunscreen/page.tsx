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
    title: "Atomy Absolute Essence Sunscreen",
    description: cs
      ? "SPF50+ PA++++ ochrana před UVA i UVB paprsky. Rozjasní a sjednotí tón pleti díky CellActive™ Brightening Code."
      : "SPF50+ PA++++ protection against UVA and UVB rays. Brightens and evens skin tone with CellActive™ Brightening Code.",
    alternates: { canonical: `/${locale}/produkty/sunscreen` },
    openGraph: {
      title: "Atomy Absolute Essence Sunscreen | Atomy Family",
      description: cs
        ? "SPF50+ PA++++ ochrana před UVA i UVB paprsky. Rozjasní a sjednotí tón pleti."
        : "SPF50+ PA++++ protection against UVA and UVB rays. Brightens and evens skin tone.",
      url: `/${locale}/produkty/sunscreen`,
      images: [{ url: "/images/produkty/absolute/Absolute set (1).avif", width: 1200, height: 1200, alt: "Atomy Absolute Essence Sunscreen" }],
    },
  };
}

export default async function SunscreenPage({ params }: Props) {
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
      name="Atomy Absolute Essence Sunscreen"
      tagline={cs
        ? "Ochrana, která ti rozjasní pleť a ochrání ji každý den"
        : "Protection that brightens and shields your skin every day"
      }
      heroImage="/images/produkty/absolute/Absolute set (1).avif"
      introText={cs
        ? "SPF50+ PA++++ ochrana před UVA i UVB paprsky. Rozjasní a sjednotí tón pleti díky CellActive™ Brightening Code. Působí jako lehký podklad pod make-up — bez bílého filmu, bez lepení."
        : "SPF50+ PA++++ protection against UVA and UVB rays. Brightens and evens skin tone with CellActive™ Brightening Code. Works as a light makeup base — no white cast, no stickiness."
      }
      benefits={cs ? [
        "SPF50+ PA++++ — silná ochrana před UVA i UVB paprsky",
        "Rozjasní a sjednotí tón pleti díky CellActive™",
        "Lehký podklad pod make-up — bez bílého filmu",
        "Zklidní citlivou pleť díky přírodním extraktům",
      ] : [
        "SPF50+ PA++++ — strong UVA and UVB protection",
        "Brightens and evens skin tone with CellActive™",
        "Light makeup base — no white cast",
        "Soothes sensitive skin with natural extracts",
      ]}
      whyDifferent={{
        text: cs
          ? "Hydratuje jako esence, chrání jako štít. Technologie CellActive™ dodá pleti svěžest a zdravý jas. Přírodní bylinky pomohou udržet pleť klidnou a zářivou, i když trávíš čas venku."
          : "Hydrates like an essence, protects like a shield. CellActive™ technology gives skin freshness and healthy glow. Natural herbs help keep skin calm and radiant, even when you spend time outdoors.",
        image: "/images/produkty/absolute/Absolute set (1).avif",
      }}
      forWhom={cs ? [
        "Pro tebe, když chceš vypadat skvěle i bez make-upu",
        "Pro každodenní ochranu, která pleť zároveň hýčká",
        "Pro všechny typy pleti, i tu nejcitlivější",
      ] : [
        "For you, when you want to look great even without makeup",
        "For everyday protection that pampers your skin",
        "For all skin types, even the most sensitive",
      ]}
      howToUse={{
        text: cs
          ? "Ráno nanes jemnou vrstvu na obličej a krk jako poslední krok péče o pleť. Vezmi si ho s sebou a klidně přidej během dne, když budeš venku."
          : "Apply a thin layer to face and neck in the morning as the last step of skincare. Take it with you and reapply during the day when outdoors.",
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
