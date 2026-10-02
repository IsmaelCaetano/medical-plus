import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Flame,
  Package,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gel para Ultrassom Carbogel | Medical Plus ES",
  description:
    "Gel hidrossolúvel para ultrassom Carbogel no ES. Alta condutividade acústica, sem sal ou álcool, preserva transdutores. Bombonas 5kg e frascos.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/carbogel/gel-para-ultrassom`,
  },
  openGraph: {
    title: "Gel para Ultrassom Carbogel | Medical Plus ES",
    description:
      "Gel hidrossolúvel para ultrassom Carbogel no ES. Alta condutividade acústica, sem sal ou álcool, preserva transdutores. Bombonas 5kg e frascos.",
    url: `${SITE_CONFIG.url}/carbogel/gel-para-ultrassom`,
  },
};

export default function GelParaUltrassomPage() {
  const breadcrumbItems = [
    { label: "Carbogel", href: "/carbogel" },
    { label: "Gel para Ultrassom" },
  ];

  const productDetails = [
    {
      title: "Transparência Acústica Superior",
      description:
        "Fórmula desenvolvida para permitir a passagem livre das ondas de ultrassom sem atenuações, distorções ou artefatos indesejados na formação da imagem ecográfica.",
    },
    {
      title: "Fórmula Isenta de Sal e Álcool",
      description:
        "Não corrói as membranas sensíveis nem resseca os cristais piezoelétricos dos transdutores, prolongando substancialmente a vida útil das sondas ultrassônicas.",
    },
    {
      title: "Consistência e Viscosidade Ideal",
      description:
        "Não escorre facilmente na pele do paciente, mantendo a camada de contato estável durante todo o procedimento de varredura sem necessidade de reaplicações constantes.",
    },
    {
      title: "Fácil Remoção e Hipoalergênico",
      description:
        "Gel hidrossolúvel, inodoro, não gorduroso e facilmente removível com papel toalha ou gaze, sem manchar lençóis hospitalares nem irritar a pele do paciente.",
    },
  ];

  const packageOptions = [
    {
      type: "Bombona Econômica de 5 kg",
      idealFor: "Clínicas de alta rotatividade, centros de diagnóstico e hospitais",
      features: [
        "Maior rendimento e economia por exame",
        "Acompanha bico dosador facilitador para abastecimento",
        "Armazenamento seguro e fechamento hermético",
      ],
    },
    {
      type: "Frascos Aplicadores de Bancada",
      idealFor: "Consultórios médicos e salas de exames ginecológicos/obstétricos",
      features: [
        "Frascos ergonômicos para manuseio ágil durante a ecografia",
        "Bico dosador de precisão para evitar desperdícios",
        "Compatíveis com suportes e aquecedores térmicos GELKENT",
      ],
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Gel para Ultrassom",
              item: `${SITE_CONFIG.url}/carbogel/gel-para-ultrassom`,
            },
          ],
        }}
      />

      <StructuredData
        type="Product"
        data={{
          name: "Gel para Ultrassom Carbogel",
          description:
            "Gel hidrossolúvel para exames de ultrassonografia e ecografia médica, com alta condutividade acústica e fórmula isenta de sal e álcool que não danifica os transdutores.",
          brand: {
            "@type": "Brand",
            name: "Carbogel",
          },
          category: "Meios de contato e insumos médicos para ultrassom",
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
            <Droplets className="w-4 h-4 text-brand-green" />
            <span>Insumo para Ultrassonografia • Espírito Santo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mb-4">
            Gel para Ultrassom Carbogel no Espírito Santo
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            Alta transmissão acústica com proteção comprovada para sondas e transdutores
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            O gel para ultrassom Carbogel é reconhecido em todo o território nacional como referência técnica em meio de contato para ecografia diagnóstica. Sua fórmula foi cuidadosamente balanceada para otimizar o sinal sonoro sem agredir a pele do paciente nem o revestimento protetor das sondas.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsappMessages.gelUltrassom)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <Droplets className="w-5 h-5 fill-current" />
              <span>Cotar Gel Carbogel no WhatsApp</span>
            </a>
            <Link
              href="/carbogel/aquecedor-de-gel"
              className="inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen border border-brand-border px-5 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px]"
            >
              <Flame className="w-5 h-5 text-brand-green" />
              <span>Ver Aquecedor de Gel GELKENT</span>
            </Link>
          </div>
        </div>

        {/* Características Técnicas */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain">
              Vantagens do Gel para Ultrassom Carbogel
            </h2>
            <p className="text-sm text-brand-textMuted mt-1">
              Desenvolvido segundo rigorosos padrões de controle de qualidade para medicina diagnóstica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productDetails.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-textMain font-heading">
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

        {/* Opções de Fornecimento */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
              Apresentações Disponíveis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain mt-3 mb-2">
              Embalagens de Gel Carbogel para sua Rotina
            </h2>
            <p className="text-sm text-brand-textMuted">
              Flexibilidade para abastecer salas de exames ou compras volumosas para centros hospitalares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packageOptions.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-brand-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
                    <Package className="w-4 h-4 text-brand-green" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-textMain font-heading">
                    {pkg.type}
                  </h3>
                </div>
                <p className="text-xs font-medium text-brand-darkGreen bg-brand-bgAlt px-3 py-1.5 rounded-lg mb-4">
                  {pkg.idealFor}
                </p>
                <div className="space-y-2">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-brand-textMain">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integração com Assistência de Ultrassom */}
        <div className="p-8 rounded-3xl bg-white border border-brand-border text-sm text-brand-textMuted space-y-4 mb-12 shadow-xs">
          <h2 className="text-xl font-bold font-heading text-brand-textMain">
            Preservação de Transdutores e Manutenção Preventiva
          </h2>
          <p className="leading-relaxed">
            Transdutores ultrassônicos lineares, convexos e endocavitários possuem lentes acústicas sensíveis. O uso contínuo de géis de baixa qualidade com presença de álcool ou sais pode ressecar a lente, criar microfissuras e descolamentos, gerando sombras e ruídos nos exames. A utilização regular do gel Carbogel previne esse tipo de deterioração prematura.
          </p>
          <p className="leading-relaxed">
            Se seu aparelho de ultrassom já apresenta problemas de imagem, falhas no cabo ou danos na carcaça do transdutor, a Medical Plus disponibiliza atendimento de{" "}
            <Link href="/assistencia-tecnica/ultrassom" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              assistência técnica especializada em ultrassom no Espírito Santo
            </Link>
            .
          </p>
        </div>
      </div>

      <CTASection
        title="Precisa de gel para ultrassom Carbogel na sua clínica?"
        subtitle="Entre em contato com Claudiomiro Marques Caetano pelo WhatsApp para solicitar cotações e prazos de entrega para o Espírito Santo."
        buttonText="Cotar Gel no WhatsApp"
        whatsappMessage={SITE_CONFIG.whatsappMessages.gelUltrassom}
      />
    </div>
  );
}
