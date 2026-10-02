import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { BRANDS } from "@/data/brands";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const brand = BRANDS.fujifilm;

export const metadata: Metadata = {
  title: "Equipamentos Fujifilm para Diagnóstico por Imagem | Medical Plus",
  description:
    "Soluções Fujifilm Healthcare para radiologia digital, raio X, mamografia, tomografia e TI médica no Espírito Santo. Atendimento especializado Medical Plus.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/equipamentos/fujifilm`,
  },
  openGraph: {
    title: "Equipamentos Fujifilm para Diagnóstico por Imagem | Medical Plus",
    description:
      "Soluções Fujifilm Healthcare para radiologia digital, raio X, mamografia, tomografia e TI médica no Espírito Santo. Atendimento especializado Medical Plus.",
    url: `${SITE_CONFIG.url}/equipamentos/fujifilm`,
  },
};

export default function EquipamentosFujifilmPage() {
  const breadcrumbItems = [
    { label: "Equipamentos", href: "/equipamentos" },
    { label: "Fujifilm" },
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Fujifilm",
              item: `${SITE_CONFIG.url}/equipamentos/fujifilm`,
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
        {/* Header Hero */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-softLime text-brand-darkGreen text-xs font-semibold mb-4 border border-brand-border">
            <Sparkles className="w-4 h-4 text-brand-green" />
            <span>Diagnóstico por Imagem • Espírito Santo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mb-4">
            Equipamentos Fujifilm para Diagnóstico por Imagem
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            Inovação tecnológica e precisão diagnóstica com redução de dose de radiação
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            A Medical Plus atua na apresentação e suporte comercial de soluções Fujifilm Healthcare para radiologia médica, mamografia digital, tomografia computadorizada, ressonância magnética e plataformas integradas de TI para saúde no Espírito Santo.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink(brand.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{brand.ctaText}</span>
            </a>
            <Link
              href="/equipamentos/diagnostico-por-imagem"
              className="inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen border border-brand-border px-5 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px]"
            >
              <Activity className="w-5 h-5 text-brand-green" />
              <span>Ver Diagnóstico por Imagem</span>
            </Link>
          </div>
        </div>

        {/* Aviso de Não Atuação em Ultrassom Fujifilm */}
        <div className="mb-12 p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-semibold block mb-0.5">Nota sobre nosso portfólio Fujifilm:</strong>
            A Medical Plus não comercializa equipamentos da linha de ultrassom Fujifilm. Nosso foco com soluções Fujifilm Healthcare concentra-se em sistemas de raio X digital, mamografia, tomografia computadorizada, ressonância magnética e TI médica.
          </div>
        </div>

        {/* Categorias de Soluções */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain">
              Soluções Fujifilm em Diagnóstico por Imagem
            </h2>
            <p className="text-sm text-brand-textMuted mt-1">
              Conheça as linhas atendidas para estruturação de serviços de diagnóstico médico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-brand-border p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-textMain mb-2.5">
                    {category.title}
                  </h3>
                  <p className="text-sm text-brand-textMuted leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {category.items && (
                    <div className="space-y-2 mb-6">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2 text-xs text-brand-textMain">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <a
                    href={getWhatsAppLink(`Olá, Claudiomiro! Gostaria de mais informações técnicas sobre a linha de ${category.title} Fujifilm.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-darkGreen hover:text-brand-green transition-colors"
                  >
                    <span>Consultar configurações</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais Tecnológicos */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
              Engenharia Diagnóstica
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain mt-3 mb-2">
              Diferenciais das Tecnologias Fujifilm Healthcare
            </h2>
            <p className="text-sm text-brand-textMuted">
              Recursos projetados para aprimorar a qualidade de laudos e otimizar rotinas em clínicas radiológicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.features.map((feat, idx) => (
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
          {brand.seoParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <p>
            Para instituições que já contam com equipamentos radiológicos e necessitam de suporte ou manutenção, confira também nossos serviços especializados de{" "}
            <Link href="/assistencia-tecnica/raio-x" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              assistência técnica de raio X
            </Link>
            ,{" "}
            <Link href="/assistencia-tecnica/mamografo" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              manutenção de mamógrafo
            </Link>{" "}
            e{" "}
            <Link href="/assistencia-tecnica/tomografia-computadorizada" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              suporte para tomógrafos
            </Link>
            .
          </p>
        </div>
      </div>

      <CTASection
        title="Deseja avaliar soluções Fujifilm para sua instituição?"
        subtitle="Fale com a Medical Plus pelo WhatsApp e receba orientações personalizadas para a necessidade da sua clínica ou hospital."
        buttonText="Falar sobre soluções Fujifilm"
        whatsappMessage={brand.whatsappMessage}
      />
    </div>
  );
}
