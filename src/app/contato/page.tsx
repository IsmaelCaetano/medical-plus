import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { StructuredData } from "@/components/StructuredData";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fale Conosco | Contato",
  description:
    "Entre em contato com a Medical Plus no Espírito Santo. Fale diretamente com Claudiomiro Marques Caetano pelo WhatsApp (27) 99632-6622.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contato`,
  },
  openGraph: {
    title: "Fale Conosco | Contato | Medical Plus",
    description:
      "Entre em contato com a Medical Plus no Espírito Santo. Fale diretamente com Claudiomiro Marques Caetano pelo WhatsApp (27) 99632-6622.",
    url: `${SITE_CONFIG.url}/contato`,
  },
};

export default function ContatoPage() {
  const breadcrumbItems = [{ label: "Contato" }];

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
              name: "Contato",
              item: `${SITE_CONFIG.url}/contato`,
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
            Canais de Atendimento
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mt-3 mb-4">
            Fale com a Medical Plus
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            Estamos à disposição para atender sua solicitação sobre fornecimento de equipamentos médico-hospitalares, informações de marcas e assistência técnica especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Informações de Contato Direto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-xl font-bold font-heading text-brand-textMain border-b border-brand-border/60 pb-4">
                Atendimento Direto
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-softLime text-brand-darkGreen mt-0.5">
                    <User className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-textMuted uppercase">
                      Responsável Comercial e Técnico
                    </span>
                    <strong className="text-base text-brand-textMain font-heading">
                      {SITE_CONFIG.contact.name}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-softLime text-brand-darkGreen mt-0.5">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-textMuted uppercase">
                      Telefone / WhatsApp
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="text-base font-bold text-brand-darkGreen hover:text-brand-green transition-colors"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-softLime text-brand-darkGreen mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-textMuted uppercase">
                      Área de Cobertura
                    </span>
                    <p className="text-brand-textMuted text-xs leading-relaxed">
                      {SITE_CONFIG.contact.region}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-softLime text-brand-darkGreen mt-0.5">
                    <Clock className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-textMuted uppercase">
                      Horário de Resposta
                    </span>
                    <p className="text-brand-textMuted text-xs leading-relaxed">
                      Segunda a sexta-feira, em horário comercial. Retorno rápido para chamados técnicos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-5 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chamar no WhatsApp agora</span>
                </a>
              </div>
            </div>

            <div className="bg-brand-softLime/60 rounded-2xl p-6 border border-brand-border text-xs text-brand-textMuted flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Priorizamos agilidade: ao clicar no botão do WhatsApp ou preencher o formulário ao lado, você estabelece contato imediato sem filas de espera ou intermediários.
              </p>
            </div>
          </div>

          {/* Formulário Interativo que direciona para WhatsApp */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
