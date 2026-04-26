import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Atomy Scalpcare Conditioner",
    description: locale === "cs"
      ? "Oživte a vyvažte vlasovou pokožku s péčí inspirovanou Ájurvédou"
      : "Revive and balance your scalp with Ayurveda-inspired care",
    alternates: { canonical: `/${locale}/produkty/scalpcare-kondicioner` },
  };
}

export default async function ScalpcareKondicionerPage({ params }: Props) {
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
      name="Atomy Scalpcare Conditioner"
      tagline={cs
        ? "Oživte a vyvažte vlasovou pokožku s péčí inspirovanou Ájurvédou"
        : "Revive and balance your scalp with Ayurveda-inspired care"
      }
      heroImage="/images/produkty/sampony/scalpcare condicioner (1).avif"
      introText={cs
        ? "Specificky navržen pro péči o pokožku hlavy. Kombinuje ájurvédské byliny a moderní vědu pro zdravé, čisté, dokonale vyživené vlasy a pokožku hlavy."
        : "Specifically designed for scalp care. Combines Ayurvedic herbs and modern science for healthy, clean, perfectly nourished hair and scalp."
      }
      benefits={cs ? [
        "Čistí a obnovuje rovnováhu pokožky hlavy s Neem, Arnikou a Shikakai",
        "Hluboká výživa a posílení s hennou, avokádem a biotinem",
        "Podporuje zdravý růst vlasů díky rostlinným extraktům",
        "Zklidňuje podrážděnou pokožku hlavy",
      ] : [
        "Cleanses and restores scalp balance with Neem, Arnica and Shikakai",
        "Deep nutrition and strengthening with henna, avocado and biotin",
        "Supports healthy hair growth with plant extracts",
        "Soothes irritated scalp",
      ]}
      whyDifferent={{
        text: cs
          ? "Ájurvédská receptura kombinující tradiční byliny s moderní technologií péče o vlasy. Biotin a avokádo posilují vlasy a podporují zdravý vzhled. Jemné čištění odstraňuje nahromaděné nečistoty z pórů pokožky hlavy."
          : "Ayurvedic formula combining traditional herbs with modern hair care technology. Biotin and avocado strengthen hair and support healthy appearance. Gentle cleansing removes accumulated impurities from scalp pores.",
        image: "/images/produkty/sampony/scalpcare condicioner (2).avif",
      }}
      forWhom={cs ? [
        "Všechny typy pokožky hlavy, zejména citlivé",
        "Slabé, tenké nebo poškozené vlasy",
        "Ti, kdo hledají zdravější, silnější vlasy",
      ] : [
        "All scalp types, especially sensitive",
        "Weak, thin or damaged hair",
        "Those looking for healthier, stronger hair",
      ]}
      howToUse={{
        text: cs
          ? "Po umytí vlasů šampónem naneste dostatečné množství kondicionéru přímo na pokožku hlavy a délky vlasů. Jemně masírujte, nechte působit 2–3 minuty a důkladně opláchněte."
          : "After washing with shampoo, apply adequate amount of conditioner directly to scalp and hair lengths. Gently massage, leave on for 2–3 minutes and rinse thoroughly.",
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
