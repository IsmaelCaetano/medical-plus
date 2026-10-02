import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { SERVICES } from "@/data/services";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  Wrench,
  MessageCircle,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Activity,
} from "lucide-react";

const service = SERVICES.mamografo;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${SITE_CONFIG.url}/assistencia-tecnica/mamografo`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${SITE_CONFIG.url}/assistencia-tecnica/mamografo`,
  },
};

export default function AssistenciaMamografoPage() {
  const breadcrumbItems = [
    { label: "Assistência Técnica", href: "/assistencia-tecnica" },
    { label: "Mamógrafo" },
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
              name: "Assistência Técnica",
              item: `${SITE_CONFIG.url}/assistencia-tecnica`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Mamógrafo",
              item: `${SITE_CONFIG.url}/assistencia-tecnica/mamografo`,
            },
          ],
        }}
      />

      <StructuredData
        type="Service"
        data={{
          name: service.title,
          description: service.description,
          serviceType: "Manutenção de equipamentos de mamografia digital e analógica",
        }}
      />

      <div className="bg-brand-bgAlt border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-softLime text-brand-darkGreen text-xs font-semibold mb-4 border border-brand-border">
            <Activity className="w-4 h-4 text-brand-green" />
            <span>Manutenção em Mamografia • Espírito Santo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            {service.tagline}
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            {service.description}
          </p>

          <div className="pt-6">
            <a
              href={getWhatsAppLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{service.ctaText}</span>
            </a>
          </div>
        </div>

        {/* Modalidades de Serviços */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-brand-textMain">
              Serviços de Suporte para Mamógrafos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.servicesOffered.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-brand-green" />
                  </div>
                  <h3 className="font-bold text-base text-brand-textMain font-heading">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-brand-textMuted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sintomas */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Sinais de Atenção
            </span>
            <h2 className="text-2xl font-bold font-heading text-brand-textMain mt-3">
              Falhas que exigem intervenção técnica em mamógrafos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-brand-border shadow-2xs"
              >
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-2 font-heading">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{symptom.title}</span>
                </div>
                <p className="text-xs text-brand-textMuted leading-relaxed">
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipamentos Cobertos */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold font-heading text-brand-textMain">
              Equipamentos e Acessórios Atendidos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.equipmentCovered.map((eq, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-brand-border flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-brand-textMain">{eq}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Passo a Passo */}
        <div className="mb-16 bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-xs">
          <h2 className="text-2xl font-bold font-heading text-brand-textMain mb-4">
            Como acionar a assistência para mamógrafos
          </h2>
          <div className="space-y-3">
            {service.requestSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-softLime text-brand-darkGreen font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-brand-textMuted leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Text */}
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-brand-textMuted leading-relaxed mb-12">
          {service.seoParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-2xl bg-brand-bgAlt border border-brand-border text-xs text-brand-textMuted flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
          <p>{service.disclaimer}</p>
        </div>
      </div>

      <CTASection
        title="Precisa de assistência técnica para seu mamógrafo?"
        subtitle="Converse com Claudiomiro pelo WhatsApp para avaliar a necessidade de manutenção preventiva ou corretiva."
        buttonText="Solicitar atendimento para Mamógrafo"
        whatsappMessage={service.whatsappMessage}
      />
    </div>
  );
}
