import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-3xl font-bold text-text">
            Ochrana osobních údajů
          </h1>
          <p className="text-sm text-text-muted mt-2">
            Poslední aktualizace: 14. 4. 2026
          </p>

          <h2 className="text-xl font-semibold text-text mt-8">
            1. Správce údajů
          </h2>
          <p className="text-text-muted leading-relaxed">
            Správcem vašich osobních údajů je Milena Nečkářová, email:{" "}
            <a
              href="mailto:neckarova.milena@gmail.com"
              className="text-primary hover:underline"
            >
              neckarova.milena@gmail.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-text mt-8">
            2. Jaké údaje zpracováváme
          </h2>
          <p className="text-text-muted leading-relaxed">
            Prostřednictvím kontaktního formuláře zpracováváme: jméno, emailovou
            adresu a obsah vaší zprávy. Tyto údaje používáme výhradně za účelem
            odpovědi na váš dotaz.
          </p>

          <h2 className="text-xl font-semibold text-text mt-8">
            3. Právní základ
          </h2>
          <p className="text-text-muted leading-relaxed">
            Vaše údaje zpracováváme na základě vašeho souhlasu (čl. 6 odst. 1
            písm. a) GDPR), který udělujete odesíláním formuláře se
            zaškrtnutým checkboxem souhlasu.
          </p>

          <h2 className="text-xl font-semibold text-text mt-8">
            4. Doba uchovávání
          </h2>
          <p className="text-text-muted leading-relaxed">
            Údaje uchováváme po dobu nezbytnou pro vyřízení vašeho dotazu,
            maximálně 12 měsíců od poslední komunikace.
          </p>

          <h2 className="text-xl font-semibold text-text mt-8">
            5. Vaše práva
          </h2>
          <p className="text-text-muted leading-relaxed">
            Máte právo na přístup k vašim údajům, jejich opravu, výmaz,
            omezení zpracování a právo podat stížnost u Úřadu pro ochranu
            osobních údajů (uoou.cz). Pro uplatnění práv nás kontaktujte na
            výše uvedeném emailu.
          </p>

          <h2 className="text-xl font-semibold text-text mt-8">
            6. Cookies
          </h2>
          <p className="text-text-muted leading-relaxed">
            Web používá pouze technické cookies nezbytné pro jeho fungování.
            Analytické cookies (Google Analytics) se aktivují až po vašem
            souhlasu prostřednictvím cookie banneru.
          </p>
        </div>
      </div>
    </section>
  );
}
