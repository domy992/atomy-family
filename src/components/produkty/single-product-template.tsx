import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ContactFormInline } from "@/components/kontakt/contact-form-inline";
import type { ComponentProps } from "react";

interface SingleProductLabels {
  benefitsTitle: string;
  whyDifferentTitle: string;
  forWhomTitle: string;
  howToUseTitle: string;
  ctaButton: string;
  contactForm: ComponentProps<typeof ContactFormInline>["labels"];
}

interface SingleProductProps {
  name: string;
  tagline: string;
  heroImage: string;
  introText: string;
  benefits: string[];
  whyDifferent: { text: string; image: string };
  forWhom: string[];
  howToUse: { text: string; image?: string };
  testimonial?: { text: string; author: string };
  labels: SingleProductLabels;
  defaultSubject?: string;
}

export function SingleProductTemplate({
  name,
  tagline,
  heroImage,
  introText,
  benefits,
  whyDifferent,
  forWhom,
  howToUse,
  testimonial,
  labels,
  defaultSubject,
}: SingleProductProps) {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-peach-50 via-white to-sage-50 py-16 lg:py-24">
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

      {/* 2. Benefits */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-10">
            {labels.benefitsTitle}
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-border/50"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p className="text-text-muted leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why different */}
      <section className="py-16 lg:py-20 bg-surface-muted">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text">
                {labels.whyDifferentTitle}
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed text-lg">
                {whyDifferent.text}
              </p>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={whyDifferent.image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. For whom */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8">
              {labels.forWhomTitle}
            </h2>
            <div className="space-y-4">
              {forWhom.map((item, i) => (
                <p
                  key={i}
                  className="text-lg text-text-muted leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How to use */}
      <section className="py-16 lg:py-20 bg-surface-muted">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {howToUse.image && (
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={howToUse.image}
                  alt={`${name} - jak pouzivat`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            <div className={howToUse.image ? "" : "lg:col-span-2 max-w-2xl mx-auto"}>
              <h2 className="text-2xl sm:text-3xl font-bold text-text">
                {labels.howToUseTitle}
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed text-lg">
                {howToUse.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial */}
      {testimonial && (
        <section className="py-16 lg:py-20 bg-surface-warm">
          <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <svg
                className="h-8 w-8 text-peach-300 mx-auto"
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

      {/* 7. Contact form */}
      <ContactFormInline
        labels={labels.contactForm}
        defaultSubject={defaultSubject}
      />
    </>
  );
}
