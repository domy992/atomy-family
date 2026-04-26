import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Atomy Scalpcare Shampoo",
    description: locale === "cs"
      ? "Ájurvédská péče pro čistou a vyrovnanou pokožku hlavy"
      : "Ayurvedic care for clean and balanced scalp",
    alternates: { canonical: `/${locale}/produkty/scalpcare-sampon` },
  };
}

export default async function ScalpcareSamponPage({ params }: Props) {
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
      name="Atomy Scalpcare Shampoo"
      tagline={cs
        ? "Ájurvédská péče pro čistou a vyrovnanou pokožku hlavy"
        : "Ayurvedic care for clean and balanced scalp"
      }
      heroImage="/images/produkty/sampony/scalpcare šampon.avif"
      introText={cs
        ? "Osvěžující šampón, který nejen čistí, ale i vyživuje a harmonizuje pokožku hlavy. Kombinuje ájurvédské byliny pro udržení zdravých vlasů od kořínků bez podráždění."
        : "Refreshing shampoo that not only cleans but also nourishes and harmonizes the scalp. Combines Ayurvedic herbs for maintaining healthy hair from the roots without irritation."
      }
      benefits={cs ? [
        "Neem — antibakteriální ochrana pokožky hlavy",
        "Shikakai — jemné, ale účinné čištění",
        "Arnika — zklidnění podráždění",
        "Avokádo a Biotin — výživa a podpora růstu vlasů",
        "-83 % nečistot na pokožce hlavy po 2 týdnech",
      ] : [
        "Neem — antibacterial scalp protection",
        "Shikakai — gentle yet effective cleansing",
        "Arnica — irritation relief",
        "Avocado and Biotin — nutrition and hair growth support",
        "-83% scalp impurities after 2 weeks",
      ]}
      whyDifferent={{
        text: cs
          ? "Klinicky testováno: -83 % nečistot, -75 % nadměrné tvorby mazu, +70 % zlepšení rovnováhy keratinu po 2 týdnech používání. Ájurvédská receptura kombinující tradiční byliny s moderní technologií."
          : "Clinically tested: -83% impurities, -75% excess sebum, +70% keratin balance improvement after 2 weeks of use. Ayurvedic formula combining traditional herbs with modern technology.",
        image: "/images/produkty/sampony/scalpcare šampon.avif",
      }}
      forWhom={cs ? [
        "Pro mastnou pokožku hlavy",
        "Pro citlivou nebo podrážděnou pokožku",
        "Pro ty, kdo hledají přírodní alternativy šampónů",
      ] : [
        "For oily scalp",
        "For sensitive or irritated scalp",
        "For those looking for natural shampoo alternatives",
      ]}
      howToUse={{
        text: cs
          ? "Naneste přiměřené množství na mokré vlasy a pokožku hlavy. Jemně masírujte a napěňte. Důkladně opláchněte. Pro nejlepší výsledky používejte pravidelně."
          : "Apply adequate amount to wet hair and scalp. Gently massage and lather. Rinse thoroughly. For best results use regularly.",
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
