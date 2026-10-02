import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { BRANDS } from "@/data/brands";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  ArrowRight,
  Bed,
  CheckCircle2,
  HeartHandshake,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const levitaBrand = BRANDS.levita;

export const metadata: Metadata = {
  title: "Móveis Hospitalares e Mobiliário Clínico | Medical Plus ES",
  description:
    "Mobiliário hospitalar durável e ergonômico no Espírito Santo: camas hospitalares, leitos de UTI, macas, poltronas e mesas clínicas Levita.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/mobiliario-hospitalar`,
  },
  openGraph: {
    title: "Móveis Hospitalares e Mobiliário Clínico | Medical Plus ES",
    description:
      "Mobiliário hospitalar durável e ergonômico no Espírito Santo: camas hospitalares, leitos de UTI, macas, poltronas e mesas clínicas Levita.",
    url: `${SITE_CONFIG.url}/mobiliario-hospitalar`,
  },
};

export default function MobiliarioHospitalarHubPage() {
  const breadcrumbItems = [{ label: "Mobiliário Hospitalar" }];

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
              name: "Mobiliário Hospitalar",
              item: `${SITE_CONFIG.url}/mobiliario-hospitalar`,
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
            <Bed className="w-3.5 h-3.5 text-brand-green" />
            Mobiliário Clínico & Hospitalar • Espírito Santo
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mt-3 mb-4">
            Móveis Hospitalares e Mobiliário Clínico Especializado no ES
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            Segurança ao paciente, ergonomia assistencial e máxima resistência estrutural
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            A infraestrutura de leitos, enfermarias, centros cirúrgicos e salas de exame exige móveis projetados para suportar o uso contínuo e a higienização constante. A Medical Plus representa a linha Levita de móveis hospitalares no Espírito Santo, oferecendo soluções com alto padrão de acabamento e conforto.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsappMessages.mobiliarioHospitalar)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Solicitar Catálogo de Mobiliário</span>
            </a>
            <Link
              href="/mobiliario-hospitalar/levita"
              className="inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen border border-brand-border px-5 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px]"
            >
              <Sparkles className="w-5 h-5 text-brand-green" />
              <span>Conhecer a Linha Levita</span>
            </Link>
          </div>
        </div>

        {/* Categorias de Mobiliário */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain">
              Categorias de Móveis e Equipamentos Hospitalares
            </h2>
            <p className="text-sm text-brand-textMuted mt-1">
              Soluções completas para leitos, transporte interno, consultórios e ambulatórios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {levitaBrand.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-brand-border p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
                    <Bed className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-textMain mb-2.5">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-brand-textMuted leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {cat.items && (
                    <div className="space-y-2 mb-6">
                      {cat.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 text-xs text-brand-textMain">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <a
                    href={getWhatsAppLink(`Olá, Claudiomiro! Gostaria de informações e catálogo sobre ${cat.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-darkGreen hover:text-brand-green transition-colors"
                  >
                    <span>Consultar especificações</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilares Construtivos */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
              Qualidade & Durabilidade
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain mt-3 mb-2">
              Padrões Construtivos do Mobiliário Hospitalar Levita
            </h2>
            <p className="text-sm text-brand-textMuted">
              Móveis concebidos para atender aos critérios exigentes de controle de infecção e rotinas intensivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levitaBrand.features.map((feat, idx) => (
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
          {levitaBrand.seoParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-brand-darkGreen">
            <Link href="/mobiliario-hospitalar/levita" className="underline hover:text-brand-green">
              Página Dedicada Levita
            </Link>
            <span>•</span>
            <Link href="/marcas/levita" className="underline hover:text-brand-green">
              Perfil da Marca Levita
            </Link>
            <span>•</span>
            <Link href="/equipamentos" className="underline hover:text-brand-green">
              Todos os Equipamentos
            </Link>
            <span>•</span>
            <Link href="/contato" className="underline hover:text-brand-green">
              Contato com Claudiomiro Marques Caetano
            </Link>
          </div>
        </div>
      </div>

      <CTASection
        title="Precisa equipar leitos, enfermarias ou ambulatórios?"
        subtitle="Entre em contato com Claudiomiro Marques Caetano pelo WhatsApp para receber o catálogo e orientação consultiva para sua instituição no ES."
        buttonText="Solicitar cotação de mobiliário"
        whatsappMessage={SITE_CONFIG.whatsappMessages.mobiliarioHospitalar}
      />
    </div>
  );
}
