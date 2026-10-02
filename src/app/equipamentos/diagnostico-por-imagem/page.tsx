import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Equipamentos para Diagnóstico por Imagem no ES | Medical Plus",
  description:
    "Soluções em diagnóstico por imagem para clínicas e hospitais no Espírito Santo: raio X digital, mamografia, tomografia e ressonância magnética.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/equipamentos/diagnostico-por-imagem`,
  },
  openGraph: {
    title: "Equipamentos para Diagnóstico por Imagem no ES | Medical Plus",
    description:
      "Soluções em diagnóstico por imagem para clínicas e hospitais no Espírito Santo: raio X digital, mamografia, tomografia e ressonância magnética.",
    url: `${SITE_CONFIG.url}/equipamentos/diagnostico-por-imagem`,
  },
};

export default function DiagnosticoPorImagemPage() {
  const breadcrumbItems = [
    { label: "Equipamentos", href: "/equipamentos" },
    { label: "Diagnóstico por Imagem" },
  ];

  const modalities = [
    {
      title: "Radiografia Digital e Detectores DR",
      description:
        "Sistemas radiológicos de alto rendimento e detectores sem fio (wireless) que garantem imagens nítidas, fluxo de trabalho ágil e menor tempo de exame.",
      items: [
        "Detectores planos digitais (Flat Panel)",
        "Salas de raio X fixo com comando digital",
        "Sistemas móveis para leitos e UTI",
      ],
      assistanceLink: "/assistencia-tecnica/raio-x",
      assistanceText: "Manutenção de Raio X",
    },
    {
      title: "Mamografia Digital de Alta Resolução",
      description:
        "Equipamentos focados na precisão do rastreamento mamográfico, com tecnologias de compressão confortável e algoritmos avançados para redução de radiação.",
      items: [
        "Mamógrafos digitais Full Field (FFDM)",
        "Estações de trabalho dedicadas para laudos",
        "Controle preciso de dose e contraste tecidual",
      ],
      assistanceLink: "/assistencia-tecnica/mamografo",
      assistanceText: "Manutenção de Mamógrafo",
    },
    {
      title: "Tomografia Computadorizada (TC)",
      description:
        "Scanners tomográficos multislice projetados para aliar velocidade na aquisição de cortes anatômicos a conforto no posicionamento do paciente.",
      items: [
        "Sistemas multislice de alta produtividade",
        "Reconstrução iterativa para menor dose",
        "Gantry espaçoso e fluxo operacional intuitivo",
      ],
      assistanceLink: "/assistencia-tecnica/tomografia-computadorizada",
      assistanceText: "Manutenção de Tomógrafo",
    },
    {
      title: "Ressonância Magnética (RM)",
      description:
        "Tecnologia diagnóstica avançada para detalhamento morfológico e funcional em neurologia, ortopedia, abdome e exames vasculares.",
      items: [
        "Conforto para o paciente com redução de ruído",
        "Protocolos rápidos de aquisição de sequências",
        "Alto contraste tecidual para diagnósticos complexos",
      ],
      assistanceLink: "/assistencia-tecnica",
      assistanceText: "Suporte Técnico",
    },
    {
      title: "Sistemas PACS e TI em Saúde",
      description:
        "Plataformas para visualização, distribuição de laudos, armazenamento seguro e gerenciamento unificado do histórico radiológico da instituição.",
      items: [
        "Visualizadores web com suporte ao padrão DICOM",
        "Integração com prontuários eletrônicos e sistemas hospitalares (HIS/RIS)",
        "Segurança de dados e conformidade regulatória",
      ],
      assistanceLink: "/contato",
      assistanceText: "Consultoria em TI",
    },
    {
      title: "Densitometria Óssea e Cuidados Preventivos",
      description:
        "Aparelhos DEXA para avaliação precisa de densidade mineral óssea e composição corporal em rotinas clínicas e geriátricas.",
      items: [
        "Exames rápidos com baixa exposição radioativa",
        "Calibração contínua e laudos padronizados",
        "Acompanhamento evolutivo do tratamento de osteoporose",
      ],
      assistanceLink: "/assistencia-tecnica/densitometro-osseo",
      assistanceText: "Manutenção de Densitômetro",
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Diagnóstico por Imagem",
              item: `${SITE_CONFIG.url}/equipamentos/diagnostico-por-imagem`,
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-softLime text-brand-darkGreen text-xs font-semibold mb-4 border border-brand-border">
            <Activity className="w-4 h-4 text-brand-green" />
            <span>Centro de Imagem Médica • Espírito Santo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mb-4">
            Equipamentos para Diagnóstico por Imagem no Espírito Santo
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            Tecnologias avançadas para radiologia, mamografia, tomografia e TI médica
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            A precisão dos laudos diagnósticos e a segurança do paciente dependem da escolha equilibrada de equipamentos de imagem. A Medical Plus auxilia clínicas radiológicas, hospitais e centros de imagem no Espírito Santo a selecionarem soluções que unem resolução anatômica, baixa dosagem e integração digital.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsappMessages.diagnosticoPorImagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Consultar Soluções de Imagem</span>
            </a>
            <Link
              href="/equipamentos/fujifilm"
              className="inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen border border-brand-border px-5 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px]"
            >
              <span>Ver Linha Fujifilm</span>
              <ArrowRight className="w-4 h-4 text-brand-green" />
            </Link>
          </div>
        </div>

        {/* Modalidades Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain">
              Modalidades em Diagnóstico por Imagem
            </h2>
            <p className="text-sm text-brand-textMuted mt-1">
              Equipamentos e tecnologias para compor e modernizar salas de exames.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modalities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-brand-border p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
                    <Activity className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-textMain mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-textMuted leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.items.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-brand-textMain">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs">
                  <Link
                    href={item.assistanceLink}
                    className="inline-flex items-center gap-1.5 text-brand-darkGreen font-semibold hover:text-brand-green transition-colors"
                  >
                    <Wrench className="w-3.5 h-3.5 text-brand-green" />
                    <span>{item.assistanceText}</span>
                  </Link>
                  <a
                    href={getWhatsAppLink(`Olá, Claudiomiro! Gostaria de informações sobre ${item.title} para minha clínica.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-green hover:underline"
                  >
                    Cotar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Block */}
        <div className="bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border space-y-4 text-sm text-brand-textMuted">
          <div className="flex items-center gap-2 text-brand-darkGreen font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Consultoria Especializada e Suporte Técnico Contínuo</span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-brand-textMain">
            Planejamento e Infraestrutura para Centros de Diagnóstico
          </h2>
          <p className="leading-relaxed">
            A instalação e renovação de equipamentos de radiologia médica exigem planejamento detalhado de blindagem de salas, condicionamento elétrico, requisitos de rede para imagens volumosas e integração ao prontuário médico. A Medical Plus apoia gestores e radiologistas no dimensionamento assertivo para evitar custos desnecessários e retrabalho.
          </p>
          <p className="leading-relaxed">
            Além do fornecimento, a Medical Plus conta com serviços especializados de{" "}
            <Link href="/assistencia-tecnica" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              assistência técnica preventiva e corretiva
            </Link>{" "}
            para equipamentos como ultrassom, raio X, mamógrafos e tomógrafos, assegurando disponibilidade operacional ininterrupta para hospitais e clínicas em todo o Espírito Santo.
          </p>
        </div>
      </div>

      <CTASection
        title="Planejando modernizar o setor de imagem da sua clínica?"
        subtitle="Entre em contato com Claudiomiro Marques Caetano pelo WhatsApp para conversar sobre as melhores opções em diagnóstico por imagem no Espírito Santo."
        buttonText="Falar com especialista"
        whatsappMessage={SITE_CONFIG.whatsappMessages.diagnosticoPorImagem}
      />
    </div>
  );
}
