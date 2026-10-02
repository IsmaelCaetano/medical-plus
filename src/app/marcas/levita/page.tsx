import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { BRANDS } from "@/data/brands";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import { CheckCircle2, MessageCircle, ShieldCheck, Award } from "lucide-react";

const brand = BRANDS.levita;

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  alternates: {
    canonical: `${SITE_CONFIG.url}/marcas/levita`,
  },
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    url: `${SITE_CONFIG.url}/marcas/levita`,
  },
};

export default function LevitaPage() {
  const breadcrumbItems = [
    { label: "Marcas", href: "/marcas" },
    { label: "Levita Móveis Hospitalares" },
  ];

  return (
    <div>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: SITE_CONFIG.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Marcas",
              item: `${SITE_CONFIG.url}/marcas`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Levita Móveis Hospitalares",
              item: `${SITE_CONFIG.url}/marcas/levita`,
            },
          ],
        }}
      />

      <div className="bg-brand-bgAlt border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header da Landing Page */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-softLime text-brand-darkGreen text-xs font-semibold mb-4 border border-brand-border">
            <Award className="w-4 h-4 text-brand-green" />
            <span>Mobiliário e Equipamentos Clínicos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mb-4">
            Móveis Hospitalares Levita
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            {brand.tagline}
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            {brand.description}
          </p>

          <div className="pt-6">
            <a
              href={getWhatsAppLink(brand.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{brand.ctaText}</span>
            </a>
          </div>
        </div>

        {/* Categorias detalhadas */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-brand-textMain">
              Linhas e Categorias de Mobiliário Hospitalar
            </h2>
            <p className="text-sm text-brand-textMuted mt-1">
              Soluções completas para enfermarias, quartos de internação, centros de emergência e consultórios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold font-heading text-brand-textMain mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-brand-textMuted mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                  {cat.items && (
                    <ul className="space-y-1.5 mb-6">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-brand-textMain">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <a
                    href={getWhatsAppLink(`Olá, Claudiomiro! Gostaria de informações sobre ${cat.title} da linha Levita.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[38px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pedir informações sobre esta categoria</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais técnicos */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <h2 className="text-2xl font-bold font-heading text-brand-textMain mb-6 text-center">
            Diferenciais de Qualidade dos Móveis Levita
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-brand-border shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-brand-green mb-3" />
                <h3 className="font-bold text-sm text-brand-textMain mb-1.5 font-heading">
                  {feat.title}
                </h3>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Textos de SEO */}
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-brand-textMuted leading-relaxed">
          {brand.seoParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      <CTASection
        title="Deseja equipar ou renovar o mobiliário de sua instituição?"
        subtitle="Converse com a Medical Plus para planejar as melhores opções de camas, macas e móveis Levita para sua clínica ou hospital."
        buttonText="Falar no WhatsApp sobre Levita"
        whatsappMessage={brand.whatsappMessage}
      />
    </div>
  );
}
