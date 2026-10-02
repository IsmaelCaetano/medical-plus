import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a Medical Plus",
  description:
    "Conheça a Medical Plus: representação comercial de equipamentos médico-hospitalares e assistência técnica especializada no Espírito Santo.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/sobre`,
  },
  openGraph: {
    title: "Sobre a Medical Plus | Equipamentos e Assistência Técnica",
    description:
      "Conheça a Medical Plus: representação comercial de equipamentos médico-hospitalares e assistência técnica especializada no Espírito Santo.",
    url: `${SITE_CONFIG.url}/sobre`,
  },
};

export default function SobrePage() {
  const breadcrumbItems = [{ label: "Sobre Nós" }];

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
              name: "Sobre",
              item: `${SITE_CONFIG.url}/sobre`,
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
          <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
            Institucional
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mt-3 mb-4">
            Sobre a Medical Plus
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            {SITE_CONFIG.slogan}
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            A Medical Plus atua na representação comercial de equipamentos médico-hospitalares e na prestação de assistência técnica especializada, conectando clínicas, consultórios, hospitais e centros de diagnóstico a soluções confiáveis com suporte técnico próximo.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-brand-border shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-brand-green" />
            </div>
            <h2 className="text-lg font-bold text-brand-textMain mb-2 font-heading">
              Nosso Propósito
            </h2>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Viabilizar o acesso a equipamentos médicos duráveis e tecnologias de diagnóstico precisas, assegurando que instituições de saúde tenham suporte contínuo na escolha e na manutenção de seus ativos.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-brand-border shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-brand-green" />
            </div>
            <h2 className="text-lg font-bold text-brand-textMain mb-2 font-heading">
              Atendimento Consultivo
            </h2>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Acreditamos que cada clínica possui demandas distintas. Por isso, oferecemos orientação técnica direta, dimensionando móveis e sistemas de imagem de acordo com a real necessidade assistencial.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-brand-border shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-brand-green" />
            </div>
            <h2 className="text-lg font-bold text-brand-textMain mb-2 font-heading">
              Compromisso com a Precisão
            </h2>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Atuamos com marcas que seguem rigorosos padrões de controle de qualidade e oferecemos suporte técnico especializado para manter a estabilidade operacional dos equipamentos.
            </p>
          </div>
        </div>

        {/* Responsável / Contato Direto */}
        <div className="bg-brand-bgAlt rounded-3xl p-8 sm:p-12 border border-brand-border mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
                Liderança Técnica e Comercial
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain">
                Claudiomiro Marques Caetano
              </h2>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                Responsável pelo atendimento comercial e pela coordenação de serviços técnicos da Medical Plus. Com experiência prática no segmento médico-hospitalar, Claudiomiro atua no relacionamento com gestores hospitalares, médicos e equipes de compras no Espírito Santo e regiões vizinhas.
              </p>
              <div className="space-y-2 pt-2 text-sm text-brand-textMain">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Telefone / WhatsApp: <strong>{SITE_CONFIG.contact.phoneDisplay}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Área de Atuação: <strong>{SITE_CONFIG.contact.region}</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-brand-border space-y-4">
              <h3 className="font-bold text-base text-brand-textMain font-heading">
                Como podemos colaborar com sua instituição:
              </h3>
              <ul className="space-y-2.5 text-xs text-brand-textMain">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Fornecimento de móveis hospitalares ergonômicos Levita.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Apresentação de soluções de imagem Fujifilm Healthcare.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Abastecimento de géis condutores e aquecedores Carbogel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Assistência técnica para ultrassom, raio X, mamógrafo, densitômetro e tomografia.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar diretamente no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Deseja apresentar uma demanda para sua clínica ou hospital?"
        subtitle="Entre em contato com Claudiomiro Marques Caetano para receber atendimento consultivo."
        buttonText="Falar no WhatsApp"
      />
    </div>
  );
}
