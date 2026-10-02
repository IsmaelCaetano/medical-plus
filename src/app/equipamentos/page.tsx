import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  Activity,
  ArrowRight,
  Bed,
  CheckCircle2,
  Droplets,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Equipamentos Médicos e Hospitalares | Medical Plus ES",
  description:
    "Equipamentos médico-hospitalares, soluções para diagnóstico por imagem, mobiliário clínico e insumos no Espírito Santo. Atendimento consultivo especializado.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/equipamentos`,
  },
  openGraph: {
    title: "Equipamentos Médicos e Hospitalares | Medical Plus ES",
    description:
      "Equipamentos médico-hospitalares, soluções para diagnóstico por imagem, mobiliário clínico e insumos no Espírito Santo. Atendimento consultivo especializado.",
    url: `${SITE_CONFIG.url}/equipamentos`,
  },
};

export default function EquipamentosHubPage() {
  const breadcrumbItems = [{ label: "Equipamentos" }];

  const hubCategories = [
    {
      title: "Diagnóstico por Imagem",
      badge: "Alta Tecnologia",
      description:
        "Sistemas integrados de radiologia digital, raio X, mamografia, tomografia computadorizada e TI médica com suporte e orientação técnica.",
      href: "/equipamentos/diagnostico-por-imagem",
      icon: Activity,
      highlights: [
        "Sistemas de radiografia digital e convencional",
        "Mamógrafos digitais de alta resolução",
        "Tomografia computadorizada multislice",
        "Integração PACS e conectividade hospitalar",
      ],
      cta: "Conhecer Soluções de Imagem",
    },
    {
      title: "Soluções Fujifilm Healthcare",
      badge: "Radiologia & Diagnóstico",
      description:
        "Tecnologia diagnóstica avançada para clínicas e hospitais. Qualidade de imagem, fluxos digitais eficientes e protocolos de baixa dosagem.",
      href: "/equipamentos/fujifilm",
      icon: Sparkles,
      highlights: [
        "Detectores digitais DR sem fio",
        "Mamografia de alta definição",
        "Scanners tomográficos rápidos",
        "Sistemas e estações PACS corporativas",
      ],
      cta: "Ver Linha Fujifilm",
    },
    {
      title: "Móveis e Mobiliário Hospitalar",
      badge: "Linha Levita",
      description:
        "Mobiliário ergonômico e durável para leitos de internação geral, cuidados semi-intensivos, UTIs e ambulatórios médicos.",
      href: "/mobiliario-hospitalar",
      icon: Bed,
      highlights: [
        "Camas hospitalares elétricas e manuais",
        "Macas de transferência e recuperação",
        "Poltronas para acompanhante e hemodiálise",
        "Carros de emergência, parada e curativos",
      ],
      cta: "Ver Mobiliário Hospitalar",
    },
    {
      title: "Géis e Insumos Carbogel",
      badge: "Linha Carbogel",
      description:
        "Meios de contato de alta condutividade acústica e condutores para ECG, além de aquecedores térmicos de gel para rotinas diagnósticas.",
      href: "/carbogel",
      icon: Droplets,
      highlights: [
        "Gel para ultrassom sem sal e sem álcool",
        "Gel condutor para ECG e monitoramento",
        "Aquecedor térmico de gel GELKENT",
        "Preservação da integridade de transdutores",
      ],
      cta: "Ver Produtos Carbogel",
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
              name: "Equipamentos",
              item: `${SITE_CONFIG.url}/equipamentos`,
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
        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-brand-green" />
            Catálogo e Soluções Médicas • ES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mt-3 mb-4">
            Equipamentos Médico-Hospitalares no Espírito Santo
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            A Medical Plus atua na representação e no suporte a equipamentos e mobiliário médico-hospitalar para clínicas, hospitais e centros de diagnóstico no Espírito Santo. Conheça nossas principais categorias de soluções com atendimento consultivo e direto com Claudiomiro Marques Caetano.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Solicitar Cotação ou Orientação</span>
            </a>
            <Link
              href="/assistencia-tecnica"
              className="inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen border border-brand-border px-5 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px]"
            >
              <Wrench className="w-5 h-5 text-brand-green" />
              <span>Assistência Técnica</span>
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {hubCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-brand-border p-7 sm:p-8 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-brand-green/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="text-xs font-semibold text-brand-darkGreen bg-brand-bgAlt px-3 py-1 rounded-full border border-brand-border">
                      {cat.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-heading text-brand-textMain mb-3">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-brand-textMuted leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {cat.highlights.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-brand-textMain">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <Link
                    href={cat.href}
                    className="inline-flex items-center justify-center gap-2 w-full bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen font-semibold py-3 px-4 rounded-xl text-sm transition-colors border border-brand-border"
                  >
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-4 h-4 text-brand-green" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO Context Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-brand-bgAlt border border-brand-border text-sm text-brand-textMuted space-y-4">
          <div className="flex items-center gap-2 text-brand-darkGreen font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Atendimento Regional no Espírito Santo</span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-brand-textMain">
            Fornecimento e Suporte a Equipamentos Médico-Hospitalares
          </h2>
          <p className="leading-relaxed">
            A aquisição de equipamentos médicos, diagnóstico por imagem e mobiliário clínico exige conhecimento prático de rotinas assistenciais, normas sanitárias e viabilidade operacional. A Medical Plus conecta hospitais, clínicas especializadas e centros de diagnóstico a fabricantes consolidados no mercado nacional e internacional.
          </p>
          <p className="leading-relaxed">
            Atendemos municípios em todo o estado do Espírito Santo, como Vitória, Vila Velha, Serra, Cariacica, Linhares, Cachoeiro de Itapemirim, Colatina e São Mateus, assegurando contato direto com o responsável técnico e comercial para esclarecer dúvidas e apresentar catálogos detalhados.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-brand-darkGreen">
            <Link href="/equipamentos-medicos-hospitalares" className="underline hover:text-brand-green">
              Ver Visão Detalhada de Categorias
            </Link>
            <span>•</span>
            <Link href="/assistencia-tecnica" className="underline hover:text-brand-green">
              Conhecer Serviços de Assistência Técnica
            </Link>
            <span>•</span>
            <Link href="/contato" className="underline hover:text-brand-green">
              Falar Diretamente com Claudiomiro Marques Caetano
            </Link>
          </div>
        </div>
      </div>

      <CTASection
        title="Deseja orientação sobre equipamentos médicos para sua unidade?"
        subtitle="Fale diretamente com Claudiomiro Marques Caetano pelo WhatsApp da Medical Plus e tire suas dúvidas técnicas e comerciais."
        buttonText="Falar no WhatsApp"
        whatsappMessage={SITE_CONFIG.whatsappMessages.general}
      />
    </div>
  );
}
