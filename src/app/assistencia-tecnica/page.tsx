import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { SERVICES } from "@/data/services";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  Wrench,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCheck,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Assistência Técnica Especializada em Equipamentos Médicos",
  description:
    "Assistência técnica para ultrassom, raio X, mamógrafo, densitômetro ósseo e tomografia no Espírito Santo. Manutenção preventiva e corretiva com a Medical Plus.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/assistencia-tecnica`,
  },
  openGraph: {
    title: "Assistência Técnica Especializada em Equipamentos Médicos | Medical Plus",
    description:
      "Assistência técnica para ultrassom, raio X, mamógrafo, densitômetro ósseo e tomografia no Espírito Santo. Manutenção preventiva e corretiva com a Medical Plus.",
    url: `${SITE_CONFIG.url}/assistencia-tecnica`,
  },
};

export default function AssistenciaTecnicaPage() {
  const serviceList = Object.values(SERVICES);
  const breadcrumbItems = [{ label: "Assistência Técnica" }];

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
          <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
            Engenharia & Manutenção Médica
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain mt-3 mb-4 tracking-tight">
            Assistência técnica especializada em equipamentos de diagnóstico por imagem
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed mb-6">
            Suporte técnico para clínicas, hospitais e centros de diagnóstico, com atendimento para diferentes tipos e marcas de equipamentos médico-hospitalares no Espírito Santo e região.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsappMessages.assistanceGeneric)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Solicitar assistência técnica</span>
            </a>
          </div>
        </div>

        {/* Modalidades de Serviços Gerais */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-brand-softLime flex items-center justify-center text-brand-darkGreen mb-3">
              <FileCheck className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="font-bold text-base text-brand-textMain mb-1.5 font-heading">
              Avaliação Técnica e Diagnóstico
            </h3>
            <p className="text-xs text-brand-textMuted leading-relaxed">
              Identificação precisa da causa de falhas elétricas, mecânicas, ópticas ou de processamento de imagem com testes funcionais.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-brand-softLime flex items-center justify-center text-brand-darkGreen mb-3">
              <Clock className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="font-bold text-base text-brand-textMain mb-1.5 font-heading">
              Manutenção Preventiva Periódica
            </h3>
            <p className="text-xs text-brand-textMuted leading-relaxed">
              Rotinas de limpeza interna, desobstrução térmica, reapertos de conexões e calibrações para evitar paradas inesperadas da agenda.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-brand-softLime flex items-center justify-center text-brand-darkGreen mb-3">
              <Wrench className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="font-bold text-base text-brand-textMain mb-1.5 font-heading">
              Manutenção Corretiva Especializada
            </h3>
            <p className="text-xs text-brand-textMuted leading-relaxed">
              Reparo ou substituição de placas, componentes de alimentação, periféricos e peças críticas de acordo com a viabilidade técnica.
            </p>
          </div>
        </div>

        {/* Serviços por Equipamento */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-brand-textMain">
              Equipamentos Atendidos
            </h2>
            <p className="text-sm text-brand-textMuted mt-1">
              Selecione o tipo de equipamento para entender os sintomas comuns e como solicitar atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Como Funciona o Chamado */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <h2 className="text-2xl font-bold font-heading text-brand-textMain mb-3">
            Como solicitar assistência técnica na Medical Plus
          </h2>
          <p className="text-sm text-brand-textMuted mb-8 max-w-2xl">
            Para garantir uma triagem técnica rápida e precisa, tenha em mãos as seguintes informações ao nos enviar uma mensagem:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-brand-border">
              <div className="w-8 h-8 rounded-full bg-brand-softLime text-brand-darkGreen font-bold flex items-center justify-center text-sm mb-3">
                1
              </div>
              <h3 className="font-bold text-sm text-brand-textMain mb-1">Equipamento & Marca</h3>
              <p className="text-xs text-brand-textMuted">
                Tipo do equipamento, fabricante e modelo específico.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-brand-border">
              <div className="w-8 h-8 rounded-full bg-brand-softLime text-brand-darkGreen font-bold flex items-center justify-center text-sm mb-3">
                2
              </div>
              <h3 className="font-bold text-sm text-brand-textMain mb-1">Defeito ou Sintoma</h3>
              <p className="text-xs text-brand-textMuted">
                Código de erro na tela, ruído mecânico, falha de disparo ou instabilidade.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-brand-border">
              <div className="w-8 h-8 rounded-full bg-brand-softLime text-brand-darkGreen font-bold flex items-center justify-center text-sm mb-3">
                3
              </div>
              <h3 className="font-bold text-sm text-brand-textMain mb-1">Foto da Etiqueta</h3>
              <p className="text-xs text-brand-textMuted">
                Foto da placa traseira com número de série e, se possível, tela de erro.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-brand-border">
              <div className="w-8 h-8 rounded-full bg-brand-softLime text-brand-darkGreen font-bold flex items-center justify-center text-sm mb-3">
                4
              </div>
              <h3 className="font-bold text-sm text-brand-textMain mb-1">Localização</h3>
              <p className="text-xs text-brand-textMuted">
                Cidade e nome da instituição no Espírito Santo para alinhamento da visita.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Importante */}
        <div className="p-5 rounded-2xl bg-white border border-brand-border text-xs text-brand-textMuted flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-brand-darkGreen flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-brand-textMain">
              Nota sobre Prestação de Serviços:
            </span>
            <p className="leading-relaxed">
              A Medical Plus atua na prestação de assistência técnica e suporte especializado de forma técnica e independente para diversas marcas e modelos de equipamentos médicos. A viabilidade de reparos, calibrações e fornecimento de peças é avaliada tecnicamente caso a caso conforme o modelo e ano do equipamento.
            </p>
          </div>
        </div>
      </div>

      <CTASection
        title="Precisa de suporte urgente para seu equipamento?"
        subtitle="Abra uma conversa direta no WhatsApp informando tipo, marca e sintoma para agilizarmos a avaliação técnica."
        buttonText="Solicitar atendimento no WhatsApp"
        whatsappMessage={SITE_CONFIG.whatsappMessages.assistanceGeneric}
      />
    </div>
  );
}
