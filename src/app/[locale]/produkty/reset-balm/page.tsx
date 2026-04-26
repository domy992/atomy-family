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
    title: "Absolute Reset Balm",
    description: cs
      ? "Okamžitá hydratace. Viditelně hladší pleť. Luxusní péče vždy po ruce."
      : "Instant hydration. Visibly smoother skin. Luxury care always at hand.",
    alternates: { canonical: `/${locale}/produkty/reset-balm` },
    openGraph: {
      title: "Absolute Reset Balm | Atomy Family",
      description: cs
        ? "Okamžitá hydratace, vyplnění jemných linek a rozjasnění pleti."
        : "Instant hydration, fine line filling and skin brightening.",
      url: `/${locale}/produkty/reset-balm`,
      images: [{ url: "/images/produkty/absolute/Absolute set (1).avif", width: 1200, height: 1200, alt: "Absolute Reset Balm" }],
    },
  };
}

export default async function ResetBalmPage({ params }: Props) {
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
      name="Absolute Reset Balm"
      tagline={cs
        ? "Okamžitá hydratace. Viditelně hladší pleť. Luxusní péče vždy po ruce."
        : "Instant hydration. Visibly smoother skin. Luxury care always at hand."
      }
      heroImage="/images/produkty/absolute/Absolute set (1).avif"
      introText={cs
        ? "Každý dotek tohoto balzámu je jako pohlazení. Jemně se roztaví při kontaktu s pokožkou a okamžitě dodá hloubkovou hydrataci, vyplní jemné linky a rozjasní pleť. Ideální na vrásky kolem očí, rtů, na čele i krku."
        : "Every touch of this balm is like a caress. It gently melts on contact with skin and instantly delivers deep hydration, fills fine lines and brightens skin. Ideal for wrinkles around eyes, lips, forehead and neck."
      }
      benefits={cs ? [
        "-13,1 % hlubokých vrásek kolem očí hned po použití",
        "-22,1 % hlubokých vrásek na krku po prvním nanesení",
        "+1608 % zvýšení jasu pleti ihned po použití",
        "+56,2 % zlepšení elasticity pleti",
      ] : [
        "-13.1% deep wrinkles around eyes immediately after use",
        "-22.1% deep wrinkles on neck after first application",
        "+1608% increase in skin radiance immediately after use",
        "+56.2% improvement in skin elasticity",
      ]}
      whyDifferent={{
        text: cs
          ? "Absolute Almighty Code 10 000 ppm — unikátní komplex dodávající pleti energii. Zanta-Lift™ patentovaný komplex z bylin posiluje strukturu pleti a redukuje vrásky. Olej z bambuckého másla chrání před ztrátou vlhkosti."
          : "Absolute Almighty Code 10,000 ppm — unique complex that energizes skin. Zanta-Lift™ patented herbal complex strengthens skin structure and reduces wrinkles. Shea butter oil protects against moisture loss.",
        image: "/images/produkty/absolute/Absolute set (1).avif",
      }}
      forWhom={cs ? [
        "Pro redukci vrásek kolem očí a rtů",
        "Pro rychlou dávku hydratace kdykoli během dne",
        "Pro suché partie — ruce, lokty, paty",
      ] : [
        "For reducing wrinkles around eyes and lips",
        "For a quick hydration boost anytime during the day",
        "For dry areas — hands, elbows, heels",
      ]}
      howToUse={{
        text: cs
          ? "Jemně nanes na oblasti s vráskami — kolem očí, rtů, čelo, krk. Použij kdykoliv během dne jako rychlou dávku hydratace. Ideální i na suché partie jako ruce, lokty, paty."
          : "Gently apply to areas with wrinkles — around eyes, lips, forehead, neck. Use anytime during the day as a quick hydration boost. Also ideal for dry areas like hands, elbows, heels.",
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
