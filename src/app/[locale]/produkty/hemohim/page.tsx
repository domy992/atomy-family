import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SingleProductTemplate } from "@/components/produkty/single-product-template";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products.hemohim" });
  return {
    title: t("name"),
    description: t("intro").slice(0, 160),
    alternates: { canonical: `/${locale}/produkty/hemohim` },
    openGraph: {
      title: `${t("name")} | Atomy Family`,
      description: t("shortDesc"),
      url: `/${locale}/produkty/hemohim`,
      images: [{ url: "/images/produkty/hemohim/hemohim (2).avif", width: 1200, height: 1200, alt: t("name") }],
    },
  };
}

export default async function HemoHIMPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Products.hemohim");
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
      name={t("name")}
      tagline={cs
        ? "Podpora pro t\u011blo, kdy\u017e pot\u0159ebuje v\u00edce ne\u017e jen odpo\u010dinek"
        : "Support for the body when it needs more than just rest"
      }
      heroImage="/images/produkty/hemohim/hemohim-davkovani-original.avif"
      introText={cs
        ? "V dne\u0161n\u00edm sv\u011bt\u011b pln\u00e9m stresu, sp\u011bchu a \u00fanavy \u010dasto zapom\u00edn\u00e1me na to nejd\u016fle\u017eit\u011bj\u0161\u00ed \u2013 jak se c\u00edt\u00ed na\u0161e t\u011blo uvnit\u0159. HemoHIM je dopl\u0148\u011bk stravy, kter\u00fd vznikl pr\u00e1v\u011b proto, aby t\u011blu pom\u00e1hal zvl\u00e1dat n\u00e1ro\u010dn\u00e9 situace, chr\u00e1nil ho a z\u00e1rove\u0148 mu dodal s\u00edlu pokra\u010dovat."
        : "In today\u2019s world full of stress, rush and fatigue, we often forget the most important thing \u2013 how our body feels inside. HemoHIM is a dietary supplement created to help the body handle demanding situations, protect it and give it strength to keep going."
      }
      benefits={cs ? [
        "Podporuje imunitn\u00ed syst\u00e9m a obrann\u00e9 bu\u0148ky v t\u011ble",
        "Pom\u00e1h\u00e1 p\u0159i \u00fanav\u011b a slabosti, fyzick\u00e9 i psychick\u00e9",
        "P\u016fsob\u00ed p\u0159irozen\u011b, bez stimulant\u016f a vedlej\u0161\u00edch \u00fa\u010dink\u016f",
        "Je klinicky testovan\u00fd, patentovan\u00fd a d\u016fv\u011bryhodn\u00fd",
      ] : [
        "Supports the immune system and defence cells in the body",
        "Helps with fatigue and weakness, both physical and mental",
        "Works naturally, without stimulants or side effects",
        "Clinically tested, patented and trustworthy",
      ]}
      whyDifferent={{
        text: cs
          ? "Vyvinut byl v Ji\u017en\u00ed Koreji v\u011bdeck\u00fdm t\u00fdmem ve st\u00e1tn\u00ed v\u00fdzkumn\u00e9 instituci KAERI, p\u016fvodn\u011b pro pracovn\u00edky ve velmi zat\u011b\u017euj\u00edc\u00edch podm\u00ednk\u00e1ch. Po letech v\u00fdvoje vznikla receptura, kter\u00e1 dnes pom\u00e1h\u00e1 mili\u00f3n\u016fm lid\u00ed po cel\u00e9m sv\u011bt\u011b znovu naj\u00edt energii, pos\u00edlit imunitu a l\u00e9pe zvl\u00e1dat ka\u017edodenn\u00ed v\u00fdzvy."
          : "Developed in South Korea by a scientific team at the state research institute KAERI, originally for workers in highly demanding conditions. After years of development, a formula was created that today helps millions of people worldwide regain energy, strengthen immunity and better handle everyday challenges.",
        image: "/images/produkty/hemohim/hemohim-vedci-original.avif",
      }}
      forWhom={cs ? [
        "Seniory, kte\u0159\u00ed pot\u0159ebuj\u00ed doplnit energii",
        "Pracovn\u00edky, kte\u0159\u00ed jsou vy\u010derpan\u00ed z dlouh\u00fdch sm\u011bn",
        "Studenty, kte\u0159\u00ed pot\u0159ebuj\u00ed fyzickou vzpruhu",
        "\u0158idi\u010de na dlouh\u00fdch tras\u00e1ch",
        "\u017deny v dom\u00e1cnosti unaven\u00e9 z ka\u017edodenn\u00ed p\u00e9\u010de",
        "Sportovce s vysokou fyzickou z\u00e1t\u011b\u017e\u00ed",
      ] : [
        "Seniors who need an energy boost",
        "Workers exhausted from long shifts",
        "Students who need a physical pick-me-up",
        "Drivers on long routes",
        "Homemakers tired from everyday care",
        "Athletes with high physical demands",
      ]}
      howToUse={{
        text: cs
          ? "U\u017e\u00edvej 1 s\u00e1\u010dek (20 ml) dvakr\u00e1t denn\u011b \u2013 ide\u00e1ln\u011b r\u00e1no a ve\u010der. Balen\u00ed obsahuje 60 s\u00e1\u010dk\u016f na jeden m\u011bs\u00edc. Tento produkt je dopl\u0148\u011bk stravy a nenahrazuje pestrou a vyv\u00e1\u017eenou stravu. Nen\u00ed ur\u010den pro d\u011bti, t\u011bhotn\u00e9 ani koj\u00edc\u00ed \u017eeny. P\u0159ed u\u017e\u00edv\u00e1n\u00edm se pora\u010f se sv\u00fdm l\u00e9ka\u0159em nebo l\u00e9k\u00e1rn\u00edkem, zejm\u00e9na pokud u\u017e\u00edv\u00e1\u0161 jin\u00e9 l\u00e9ky. Uchov\u00e1vej mimo dosah d\u011bt\u00ed."
          : "Take 1 sachet (20 ml) twice daily \u2013 ideally morning and evening. Box contains 60 sachets for one month. This product is a dietary supplement and does not replace a varied and balanced diet. Not intended for children, pregnant or breastfeeding women. Consult your doctor or pharmacist before use, especially if taking other medications. Keep out of reach of children.",
        image: "/images/produkty/hemohim/hemohim (4).avif",
      }}
      testimonial={{
        text: cs
          ? "HemoHIM pou\u017e\u00edv\u00e1m denn\u011b u\u017e 2 roky. Rozd\u00edl v energii a odolnosti je obrovsk\u00fd. Minulou zimu jsem v\u016fbec nestonala."
          : "I\u2019ve been using HemoHIM daily for 2 years. The difference in energy and resilience is enormous. I didn\u2019t get sick at all last winter.",
        author: cs ? "Milena, osobn\u00ed zku\u0161enost" : "Milena, personal experience",
      }}
      labels={{
        benefitsTitle: cs ? "Co HemoHIM um\u00ed?" : "What can HemoHIM do?",
        whyDifferentTitle: cs ? "V\u011bdecky ov\u011b\u0159en\u00fd p\u016fvod" : "Scientifically verified origin",
        forWhomTitle: cs ? "HemoHIM je doporu\u010den\u00fd pro:" : "HemoHIM is recommended for:",
        howToUseTitle: cs ? "D\u00e1vkov\u00e1n\u00ed a upozorn\u011bn\u00ed" : "Dosage and warnings",
        ctaButton: tC("chciVedetVic"),
        contactForm: contactFormLabels,
      }}
      defaultSubject="produkty"
    />
  );
}
