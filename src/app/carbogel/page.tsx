import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { BRANDS } from "@/data/brands";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Flame,
  HeartHandshake,
  Layers,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const carbogelBrand = BRANDS.carbogel;

export const metadata: Metadata = {
  title: "Carbogel: Gel para Ultrassom e Aquecedores | Medical Plus ES",
  description:
    "Linha Carbogel no Espírito Santo: gel para ultrassom de alta condutividade acústica, gel condutor para ECG e aquecedor de gel GELKENT.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/carbogel`,
  },
  openGraph: {
    title: "Carbogel: Gel para Ultrassom e Aquecedores | Medical Plus ES",
    description:
      "Linha Carbogel no Espírito Santo: gel para ultrassom de alta condutividade acústica, gel condutor para ECG e aquecedor de gel GELKENT.",
    url: `${SITE_CONFIG.url}/carbogel`,
  },
};

export default function CarbogelHubPage() {
  const breadcrumbItems = [{ label: "Carbogel" }];

  const carbogelHighlights = [
    {
      title: "Gel para Ultrassom e Ecografia",
      badge: "Insumo Essencial",
      description:
        "Gel hidrossolúvel de viscosidade equilibrada, sem sal e sem álcool. Desenvolvido para assegurar excelente transmissão de ondas ultrassônicas e proteger a membrana acústica de transdutores.",
      href: "/carbogel/gel-para-ultrassom",
      icon: Droplets,
      items: [
        "Fórmula inodora, sem pigmentos nocivos e fácil de limpar",
        "Disponível em embalagens econômicas de 5kg e frascos de bancada",
        "Não corrói as sondas e transdutores",
      ],
      cta: "Ver Detalhes do Gel de Ultrassom",
    },
    {
      title: "Aquecedor de Gel GELKENT",
      badge: "Humanização de Exames",
      description:
        "Equipamento compacto para aquecimento e controle térmico do gel de ultrassom. Elimina o choque térmico e eleva sensivelmente o conforto e acolhimento do paciente durante exames.",
      href: "/carbogel/aquecedor-de-gel",
      icon: Flame,
      items: [
        "Termostato de controle térmico constante e seguro",
        "Design ergonômico para mesas de ultrassonografia",
        "Ideal para clínicas de obstetrícia, ginecologia e pediatria",
      ],
      cta: "Ver Detalhes do Aquecedor de Gel",
    },
    {
      title: "Gel Condutor para ECG e Desfibrilação",
      badge: "Cardiologia Diagnóstica",
      description:
        "Formulação de baixa impedância elétrica para transmissão fidedigna de sinais em exames de eletrocardiograma (ECG), testes ergométricos e monitorização de leitos.",
      href: "/marcas/carbogel",
      icon: HeartHandshake,
      items: [
        "Captação estável do traçado eletrocardiográfico",
        "Não causa irritação dérmica no paciente",
        "Atende demandas ambulatoriais e de pronto-socorro",
      ],
      cta: "Consultar Gel para ECG",
    },
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
              name: "Carbogel",
              item: `${SITE_CONFIG.url}/carbogel`,
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
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border inline-flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-brand-green" />
            Meios de Contato & Insumos • Espírito Santo
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mt-3 mb-4">
            Produtos Carbogel no Espírito Santo
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            {carbogelBrand.tagline}
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            {carbogelBrand.description} A Medical Plus fornece informações e orientações de fornecimento regular para clínicas de ultrassom, consultórios e hospitais em todo o ES.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink(carbogelBrand.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{carbogelBrand.ctaText}</span>
            </a>
            <Link
              href="/assistencia-tecnica/ultrassom"
              className="inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen border border-brand-border px-5 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px]"
            >
              <Wrench className="w-5 h-5 text-brand-green" />
              <span>Assistência de Ultrassom</span>
            </Link>
          </div>
        </div>

        {/* Destaques Carbogel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {carbogelHighlights.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-brand-border p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-xs font-semibold text-brand-darkGreen bg-brand-bgAlt px-2.5 py-1 rounded-full border border-brand-border">
                      {prod.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold font-heading text-brand-textMain mb-2.5">
                    {prod.title}
                  </h2>
                  <p className="text-sm text-brand-textMuted leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {prod.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2 text-xs text-brand-textMain">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <Link
                    href={prod.href}
                    className="inline-flex items-center justify-center gap-2 w-full bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors border border-brand-border"
                  >
                    <span>{prod.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Importância da Preservação do Transdutor */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
              Cuidado com os Equipamentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain mt-3 mb-2">
              Por que a Qualidade do Gel Impacta seu Ultrassom
            </h2>
            <p className="text-sm text-brand-textMuted">
              O gel condutor atua como a ponte acústica entre a lente do transdutor e o tecido do paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {carbogelBrand.features.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-brand-border">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-softLime flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                  </div>
                  <h3 className="font-bold text-base text-brand-textMain font-heading">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-sm text-brand-textMuted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Context */}
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-brand-textMuted leading-relaxed mb-12">
          {carbogelBrand.seoParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <p>
            Caso seu aparelho de ecografia apresente ruídos na imagem, falhas no conector ou problemas no transdutor, conheça nossos serviços de{" "}
            <Link href="/assistencia-tecnica/ultrassom" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              assistência técnica de ultrassom no Espírito Santo
            </Link>
            .
          </p>
        </div>
      </div>

      <CTASection
        title="Deseja informações sobre a linha Carbogel?"
        subtitle="Entre em contato com Claudiomiro Marques Caetano pelo WhatsApp para solicitar cotações de gel para ultrassom e aquecedores térmicos GELKENT."
        buttonText="Pedir informações sobre Carbogel"
        whatsappMessage={carbogelBrand.whatsappMessage}
      />
    </div>
  );
}
