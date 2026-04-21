import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface ProductFaq {
  question: string;
  answer: string;
}

interface ProductPageLabels {
  problemTitle: string;
  solutionTitle: string;
  techTitle: string;
  purchaseTitle: string;
  purchaseCta: string;
  faqTitle: string;
  ctaButton: string;
}

interface ProductPageProps {
  name: string;
  tagline: string;
  heroImage: string;
  introText: string;
  problem: string;
  usps: { title: string; description: string }[];
  testimonial?: { text: string; author: string };
  techDetails: string;
  certImages?: string[];
  purchaseSteps: string[];
  faqs: ProductFaq[];
  gallery: string[];
  labels: ProductPageLabels;
}

export function ProductPageTemplate({
  name,
  tagline,
  heroImage,
  introText,
  problem,
  usps,
  testimonial,
  techDetails,
  certImages,
  purchaseSteps,
  faqs,
  gallery,
  labels,
}: ProductPageProps) {
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

      {/* 2. Problem identification */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              {labels.problemTitle}
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed text-lg">
              {problem}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Solution — USPs */}
      <section className="py-16 lg:py-20 bg-surface-muted">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-10">
            {labels.solutionTitle}
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {usps.map((usp) => (
              <div
                key={usp.title}
                className="bg-white rounded-2xl p-6 shadow-sm text-center"
              >
                <h3 className="text-lg font-semibold text-text">
                  {usp.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${name} - foto ${i + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Social proof */}
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

      {/* 5. Technical details */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-8">
              {labels.techTitle}
            </h2>
            <div className="prose prose-gray max-w-none text-text-muted leading-relaxed">
              <p>{techDetails}</p>
            </div>
            {certImages && certImages.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>

      {/* 6. Purchase path */}
      <section className="py-16 lg:py-20 bg-surface-muted">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-10">
            {labels.purchaseTitle}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {purchaseSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="inline-flex w-10 h-10 rounded-full bg-primary text-white items-center justify-center font-bold text-lg">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm text-text-muted">{step}</p>
              </div>
            ))}
          </div>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-md"
          >
            {labels.purchaseCta}
          </Link>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 lg:py-20">
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
    </>
  );
}
