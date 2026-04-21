import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Kontakt",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function KontaktPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Kontakt");

  return (
    <>
      <section className="bg-gradient-to-br from-peach-50 via-white to-sage-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h1 className="text-4xl font-bold text-text">{t("title")}</h1>
              <p className="mt-4 text-text-muted leading-relaxed">
                {t("subtitle")}
              </p>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="mt-8 space-y-5"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3FORMS_KEY"
                />
                <input type="text" name="botcheck" className="hidden" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text"
                  >
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder={t("namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text"
                  >
                    {t("emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text"
                  >
                    {t("subjectLabel")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  >
                    <option value="produkty">{t("subjectProdukty")}</option>
                    <option value="spoluprace">{t("subjectSpoluprace")}</option>
                    <option value="objednavka">{t("subjectObjednavka")}</option>
                    <option value="jine">{t("subjectJine")}</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text"
                  >
                    {t("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                    placeholder={t("messagePlaceholder")}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    required
                    className="mt-1 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="gdpr" className="text-xs text-text-muted">
                    {t("gdpr")}{" "}
                    <Link href="/privacy" className="underline hover:text-text">
                      {t("gdprLink")}
                    </Link>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
                >
                  {t("submit")}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:pl-12">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-2xl bg-white shadow-sm p-6 border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/milena/20250603_145746.jpg"
                        alt={t("contactName")}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-text">
                        {t("contactName")}
                      </p>
                      <p className="text-sm text-text-muted">
                        {t("contactRole")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-text-light flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <a
                        href="mailto:neckarova.milena@gmail.com"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        neckarova.milena@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-text-light flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="text-sm text-text-muted">
                        {t("contactLocation")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-warm p-6">
                  <p className="font-semibold text-text text-sm">
                    {t("followUs")}
                  </p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-light hover:text-primary transition-colors shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-light hover:text-primary transition-colors shadow-sm"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-light hover:text-primary transition-colors shadow-sm"
                      aria-label="TikTok"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
