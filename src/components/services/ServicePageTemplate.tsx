import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceFaq from "@/components/services/ServiceFaq";
import type { ServicePageData } from "@/lib/services";

type Props = {
  service: ServicePageData;
};

export default function ServicePageTemplate({ service }: Props) {
  return (
    <>
      <Navbar />

      <main className="bg-[#f3f3ef] text-[#111]">
        <section className="relative overflow-hidden bg-[#f3f3ef] pt-28 md:pt-36">
          <div className="absolute inset-x-0 top-0 h-[180px] bg-[#dfe8f7] md:h-[240px]" />
          <div className="absolute left-[-22%] top-[-60px] h-[320px] w-[320px] rounded-full border-[54px] border-[#d7e3f6] opacity-80 md:left-[-8%] md:top-[-100px] md:h-[560px] md:w-[560px] md:border-[88px]" />
          <div className="absolute right-[-12%] top-[70px] h-[220px] w-[220px] rounded-full border-[38px] border-[#d7e3f6] opacity-60 md:h-[340px] md:w-[340px] md:border-[56px]" />

          <div className="relative z-10 mx-auto w-[92%] max-w-7xl pb-16 md:pb-24">
            <div className="mb-6">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[#004aad] transition hover:opacity-70"
              >
                <span>Services</span>
                <span>/</span>
                <span>{service.navTitle}</span>
              </Link>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-[#004aad]/80 md:text-[14px]">
                  SovraTech Services
                </p>

                <h1 className="max-w-[12ch] text-[2.9rem] font-semibold leading-[0.9] tracking-[-0.07em] text-[#111] sm:text-[4rem] md:text-[5.4rem]">
                  {service.heroTitle}
                </h1>

                <p className="mt-6 max-w-[60ch] text-[1rem] leading-8 text-[#3a3a3a] md:text-[1.12rem]">
                  {service.heroText}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#004aad] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.05em] text-white transition hover:translate-y-[-1px] md:px-7 md:text-[14px]"
                  >
                    Contact SovraTech
                  </Link>

                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center rounded-full border border-[#004aad]/12 bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#111] transition hover:translate-y-[-1px] md:px-7 md:text-[14px]"
                  >
                    Back to Services
                  </Link>
                </div>
              </div>

              <div>
                <div className="overflow-hidden rounded-[30px] border border-[#004aad]/10 bg-white p-3 shadow-[0_20px_70px_rgba(0,0,0,0.05)] md:rounded-[36px] md:p-4">
                  <img
                    src={service.heroImage}
                    alt={service.navTitle}
                    className="h-[280px] w-full rounded-[24px] object-cover sm:h-[360px] md:h-[520px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-7xl py-14 md:py-24">
          <div className="mb-10 border-b border-[#004aad]/10 pb-5 md:mb-14">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#004aad]/80 md:text-[14px]">
              Capabilities
            </p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-[3.4rem]">
              {service.offerTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.offers.map((offer, index) => (
              <div
                key={offer.title}
                className="rounded-[28px] border border-[#004aad]/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] md:p-7"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#004aad]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[#004aad]/12" />
                </div>

                <h3 className="text-[1.4rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#111] md:text-[1.7rem]">
                  {offer.title}
                </h3>

                <p className="mt-4 text-[0.98rem] leading-7 text-[#3a3a3a]">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-2 md:py-6">
          <div className="absolute left-[-16%] top-[18%] h-[220px] w-[220px] rounded-full border-[36px] border-[#d8e3f6] opacity-70 md:h-[520px] md:w-[520px] md:border-[84px]" />

          <div className="mx-auto grid w-[92%] max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[28px] border border-[#004aad]/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] md:p-8">
              <p className="text-[12px] uppercase tracking-[0.28em] text-[#004aad]/80 md:text-[14px]">
                Philosophy
              </p>

              <h2 className="mt-3 text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-[3rem]">
                {service.philosophyTitle}
              </h2>

              <div className="mt-8 space-y-5">
                {service.philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-[#004aad]/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.03em] text-[#111] md:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.98rem] leading-7 text-[#3a3a3a]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#004aad]/10 bg-[#004aad] p-6 text-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:p-8">
              <p className="text-[12px] uppercase tracking-[0.28em] text-white/70 md:text-[14px]">
                Built with intention
              </p>

              <h3 className="mt-4 text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[3rem]">
                Beautiful structure. Strong clarity. Real usefulness.
              </h3>

              <p className="mt-5 max-w-[56ch] text-[1rem] leading-8 text-white/80">
                Every page is designed to feel refined and easy to trust. Every
                block has a purpose. Every detail should support the brand, the
                user experience, and the business goal behind it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-7xl py-14 md:py-24">
          <div className="mb-10 border-b border-[#004aad]/10 pb-5 md:mb-14">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#004aad]/80 md:text-[14px]">
              Work
            </p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-[3.4rem]">
              {service.showcaseTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {service.showcaseItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="overflow-hidden rounded-[30px] border border-[#004aad]/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.04)]"
              >
                <div
                  className={`grid gap-0 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="p-6 md:p-8 lg:p-10">
                    <p className="text-[12px] uppercase tracking-[0.24em] text-[#004aad]">
                      Featured
                    </p>

                    <h3 className="mt-3 text-[2rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#111] md:text-[3rem]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[1rem] leading-8 text-[#3a3a3a] md:text-[1.05rem]">
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-[#111] transition hover:text-[#004aad]"
                    >
                      {item.cta}
                      <span className="text-[#004aad]">→</span>
                    </Link>
                  </div>

                  <div className="h-full">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[260px] w-full object-cover sm:h-[340px] lg:h-full lg:min-h-[420px]"
                      />
                    ) : (
                      <div className="flex h-[260px] items-end bg-[#dfe8f7] p-6 sm:h-[340px] lg:h-full lg:min-h-[420px] lg:p-10">
                        <div className="max-w-[20ch] text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#004aad] md:text-[3rem]">
                          Intelligent insight, designed beautifully.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-7xl py-6 md:py-8">
          <div className="rounded-[32px] border border-[#004aad]/10 bg-white px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[12px] uppercase tracking-[0.28em] text-[#004aad]/80 md:text-[14px]">
                  Contact
                </p>

                <h2 className="mt-3 max-w-[14ch] text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-[3.4rem]">
                  {service.ctaTitle}
                </h2>

                <p className="mt-4 max-w-[62ch] text-[1rem] leading-8 text-[#3a3a3a]">
                  {service.ctaText}
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#004aad] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.05em] text-white transition hover:translate-y-[-1px] md:px-7 md:text-[14px]"
              >
                Contact SovraTech
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-7xl py-14 md:py-20">
          <div className="mb-8 border-b border-[#004aad]/10 pb-5">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#004aad]/80 md:text-[14px]">
              FAQs
            </p>

            <h2 className="mt-3 text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111] md:text-[3.2rem]">
              {service.faqTitle}
            </h2>
          </div>

          <ServiceFaq items={service.faqs} />
        </section>
      </main>

      <Footer />
    </>
  );
}