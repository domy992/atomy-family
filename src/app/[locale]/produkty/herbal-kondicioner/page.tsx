import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Atomy Herbal Conditioner",
    description: locale === "cs"
      ? "Plný živin pro hebké a zářivé vlasy"
      : "Full of nutrients for silky and radiant hair",
    alternates: { canonical: `/${locale}/produkty/herbal-kondicioner` },
  };
}

export default async function HerbalKondicionerPage({ params }: Props) {
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
      name="Atomy Herbal Conditioner"
      tagline={cs
        ? "Plný živin pro hebké a zářivé vlasy"
        : "Full of nutrients for silky and radiant hair"
      }
      heroImage="/images/produkty/sampony/herbal kondicioner (1).avif"
      introText={cs
        ? "Luxusní péče s přírodním složením plným vyživných bylin a moderní technologií. Hladké a zářivé vlasy díky silikonovému komplexu a vyživným složkám."
        : "Luxury care with natural composition full of nourishing herbs and modern technology. Smooth and radiant hair thanks to silicone complex and nourishing ingredients."
      }
      benefits={cs ? [
        "Hladké a zářivé vlasy díky silikonovému komplexu",
        "Hluboká výživa s HGSC Complex (16 bylin) a Saengmodan (10 bylin)",
        "Ochrana před poškozením s mírně kyselým pH (6,0–7,0)",
        "Prevence zamotávání a statické elektřiny",
      ] : [
        "Smooth and radiant hair with silicone complex",
        "Deep nutrition with HGSC Complex (16 herbs) and Saengmodan (10 herbs)",
        "Damage protection with mildly acidic pH (6.0–7.0)",
        "Prevention of tangling and static electricity",
      ]}
      whyDifferent={{
        text: cs
          ? "Bylinné složení s přírodními extrakty: aloe vera, rakytník, avokádo, ženšen. Silikonový komplex chrání vlasová vlákna a poskytuje hedvábnou hebkost."
          : "Herbal composition with natural extracts: aloe vera, sea buckthorn, avocado, ginseng. Silicone complex protects hair fibers and provides silky softness.",
        image: "/images/produkty/sampony/herbal kondicioner AI.avif",
      }}
      forWhom={cs ? [
        "Suché a lámavé vlasy",
        "Barvené nebo chemicky ošetřené vlasy",
        "Kdokoliv hledající zdravé, zářivé vlasy",
      ] : [
        "Dry and brittle hair",
        "Color-treated or chemically processed hair",
        "Anyone looking for healthy, radiant hair",
      ]}
      howToUse={{
        text: cs
          ? "Po umytí vlasů šampónem naneste přiměřené množství kondicionéru. Nechte působit 2–3 minuty a poté důkladně opláchněte."
          : "After washing hair with shampoo, apply adequate amount of conditioner. Leave on for 2–3 minutes and then rinse thoroughly.",
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
