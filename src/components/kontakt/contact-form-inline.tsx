import { Link } from "@/i18n/navigation";

interface ContactFormInlineLabels {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectOptions: { value: string; label: string }[];
  messageLabel: string;
  messagePlaceholder: string;
  gdpr: string;
  gdprLink: string;
  submit: string;
}

interface ContactFormInlineProps {
  labels: ContactFormInlineLabels;
  defaultSubject?: string;
}

export function ContactFormInline({
  labels,
  defaultSubject,
}: ContactFormInlineProps) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-peach-50 via-white to-sage-50">
      <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">
            {labels.title}
          </h2>
          <p className="mt-3 text-text-muted text-center leading-relaxed">
            {labels.subtitle}
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

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text"
                >
                  {labels.nameLabel}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder={labels.namePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text"
                >
                  {labels.emailLabel}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder={labels.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-text"
              >
                {labels.subjectLabel}
              </label>
              <select
                id="contact-subject"
                name="subject"
                defaultValue={defaultSubject ?? labels.subjectOptions[0]?.value}
                className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              >
                {labels.subjectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-text"
              >
                {labels.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                placeholder={labels.messagePlaceholder}
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="contact-gdpr"
                name="gdpr"
                required
                className="mt-1 rounded border-border text-primary focus:ring-primary"
              />
              <label
                htmlFor="contact-gdpr"
                className="text-xs text-text-muted"
              >
                {labels.gdpr}{" "}
                <Link href="/privacy" className="underline hover:text-text">
                  {labels.gdprLink}
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
            >
              {labels.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
