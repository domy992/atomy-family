import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export const metadata: Metadata = { title: "Jak nakupovat" };

export default async function JakNakupovatPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const cs = locale === "cs";

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-white py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-text">
              {cs ? "Jak nakupovat u Atomy" : "How to buy from Atomy"}
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              {cs
                ? "Nakupovat v Atomy je jednoduch\u00e9! Sta\u010d\u00ed si zdarma vytvo\u0159it \u010dlenstv\u00ed a otev\u0159e se ti p\u0159\u00edstup do ofici\u00e1ln\u00edho e-shopu eu.atomy.com \u2014 k cen\u00e1m, kter\u00e9 b\u011b\u017en\u011b neuvid\u00ed\u0161."
                : "Shopping with Atomy is simple! Just create a free membership and you'll get access to the official e-shop eu.atomy.com \u2014 at prices you won't find elsewhere."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 border-l-4 border-l-primary">
              <h2 className="text-xl font-bold text-text">{cs ? "Registrace je zdarma" : "Registration is free"}</h2>
              <p className="mt-2 text-text-muted leading-relaxed">
                {cs
                  ? "Nakupuje\u0161 kdy chce\u0161 a co chce\u0161 \u2014 \u017e\u00e1dn\u00e9 povinn\u00e9 odb\u011bry, \u017e\u00e1dn\u00e9 z\u00e1vazky. Registrace zabere jen p\u00e1r minut."
                  : "Buy what you want, when you want \u2014 no mandatory orders, no commitments. Registration takes just a few minutes."}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 border-l-4 border-l-primary">
              <h2 className="text-xl font-bold text-text">{cs ? "Co ti \u010dlenstv\u00ed p\u0159inese?" : "What does membership bring?"}</h2>
              <ul className="mt-3 space-y-2 text-text-muted">
                <li>{cs ? "\u2022 P\u0159\u00edstup k cel\u00e9 nab\u00eddce Atomy v\u010detn\u011b pr\u00e9miov\u00fdch produkt\u016f" : "\u2022 Access to the full Atomy range including premium products"}</li>
                <li>{cs ? "\u2022 \u010clensk\u00e9 ceny \u2014 stejn\u00e9 po cel\u00e9 Evrop\u011b" : "\u2022 Member prices \u2014 the same across Europe"}</li>
                <li>{cs ? "\u2022 Mo\u017enost pozd\u011bji sd\u00edlet Atomy d\u00e1l a p\u0159ivyd\u011blat si" : "\u2022 Option to share Atomy later and earn extra income"}</li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <p className="text-text-muted mb-6">
                {cs
                  ? "Pokud bude\u0161 cht\u00edt s \u010d\u00edmkoli pomoct \u2014 se registrac\u00ed, n\u00e1kupem nebo v\u00fdb\u011brem produkt\u016f \u2014 klidn\u011b se mi ozvi."
                  : "If you need help with anything \u2014 registration, shopping or product selection \u2014 feel free to reach out."}
              </p>
              <Link
                href="/kontakt"
                className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
              >
                {cs ? "Napi\u0161te mi" : "Contact me"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
