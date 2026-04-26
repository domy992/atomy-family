import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ContactFormInline } from "@/components/kontakt/contact-form-inline";
import type { ComponentProps } from "react";

interface SetProductItem {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

interface SetProductLabels {
  whyTogetherTitle: string;
  howToUseTitle: string;
  faqTitle: string;
  ctaButton: string;
  contactForm: ComponentProps<typeof ContactFormInline>["labels"];
}

interface SetProductProps {
  name: string;
  tagline: string;
  heroImage: string;
  introText: string;
  whyTogether: string;
  products: SetProductItem[];
  howToUse: { text: string; image?: string };
  testimonial?: { text: string; author: string };
  certImages?: string[];
  faqs: { question: string; answer: string }[];
  labels: SetProductLabels;
  defaultSubject?: string;
}

export function SetProductTemplate({
  name,
  tagline,
  heroImage,
  introText,
  whyTogether,
  products,
  howToUse,
  testimonial,
  certImages,
  faqs,
  labels,
  defaultSubject,
}: SetProductProps) {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-sage-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                {name}
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-text leading-tight">
                {tagline}
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                {introText}
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
                >
                  {labels.ctaButton}
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={heroImage}
                alt={name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why together */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              {labels.whyTogetherTitle}
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed text-lg">
              {whyTogether}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Individual products — alternating layout */}
      {products.map((product, i) => {
        const isReversed = i % 2 === 1;
        return (
          <section
            key={i}
            className={i % 2 === 0 ? "py-12 lg:py-16 bg-surface-muted" : "py-12 lg:py-16"}
          >
            <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? "" : ""}`}>
                <div className={isReversed ? "lg:order-2" : ""}>
                  <h3 className="text-xl sm:text-2xl font-bold text-text">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-text-muted leading-relaxed text-base">
                    {product.description}
                  </p>
                </div>
                <div
                  className={`relative aspect-[4/3] max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg ${isReversed ? "lg:order-1" : ""}`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 38vw"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 4. How to use */}
      <section className="py-16 lg:py-20 bg-surface-warm">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className={howToUse.image ? "grid lg:grid-cols-2 gap-12 items-center" : "max-w-2xl mx-auto text-center"}>
            {howToUse.image && (
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={howToUse.image}
                  alt={`${name} - jak pouzivat`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text">
                {labels.howToUseTitle}
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed text-lg">
                {howToUse.text}
              </p>
            </div>
          </div>
          {certImages && certImages.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              {certImages.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Certifikat ${i + 1}`}
                  width={200}
                  height={120}
                  className="rounded-lg shadow-sm"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Testimonial */}
      {testimonial && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <svg
                className="h-8 w-8 text-blue-300 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 text-lg text-text leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-text-muted">
                — {testimonial.author}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-surface-muted">
          <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-10">
              {labels.faqTitle}
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-border/50 shadow-sm"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium text-text">
                    {faq.question}
                    <svg
                      className="h-5 w-5 text-text-light group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Contact form */}
      <ContactFormInline
        labels={labels.contactForm}
        defaultSubject={defaultSubject}
      />
    </>
  );
}
