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
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Thermometer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aquecedor de Gel Carbogel GELKENT | Medical Plus ES",
  description:
    "Aquecedor térmico de gel para exames de ultrassom GELKENT Carbogel no ES. Conforto térmico para o paciente e temperatura uniforme e segura.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/carbogel/aquecedor-de-gel`,
  },
  openGraph: {
    title: "Aquecedor de Gel Carbogel GELKENT | Medical Plus ES",
    description:
      "Aquecedor térmico de gel para exames de ultrassom GELKENT Carbogel no ES. Conforto térmico para o paciente e temperatura uniforme e segura.",
    url: `${SITE_CONFIG.url}/carbogel/aquecedor-de-gel`,
  },
};

export default function AquecedorDeGelPage() {
  const breadcrumbItems = [
    { label: "Carbogel", href: "/carbogel" },
    { label: "Aquecedor de Gel" },
  ];

  const benefits = [
    {
      title: "Humanização do Atendimento Clínico",
      description:
        "O contato do gel frio sobre a pele provoca contração involuntária e desconforto. Com o aquecedor térmico, o exame ecográfico torna-se acolhedor e humanizado desde os primeiros segundos.",
      icon: Heart,
    },
    {
      title: "Temperatura Uniforme e Segura",
      description:
        "Termostato de precisão calibrado para manter o gel a uma temperatura próxima à corporal humana, sem riscos de superaquecimento ou degradação da viscosidade do insumo.",
      icon: Thermometer,
    },
    {
      title: "Design Compacto e Funcional",
      description:
        "Projetado para se integrar facilmente a carrinhos de ultrassom, mesas auxiliares e bancadas de consultórios, ocupando espaço mínimo na sala de exames.",
      icon: Sparkles,
    },
    {
      title: "Economia e Baixo Consumo de Energia",
      description:
        "Sistema com isolamento térmico eficiente que mantém a temperatura estável ao longo de toda a jornada clínica com baixo consumo elétrico contínuo.",
      icon: ShieldCheck,
    },
  ];

  const clinicalApplications = [
    {
      title: "Obstetrícia e Medicina Fetal",
      description:
        "Elimina o choque térmico no abdômen materno, tornando o momento do ultrom obstétrico mais relaxante e agradável para a gestante.",
    },
    {
      title: "Ginecologia e Mastologia",
      description:
        "Proporciona maior tranquilidade em exames pélvicos e mamários, reduzindo a tensão muscular e facilitando a varredura médica.",
    },
    {
      title: "Pediatria e Neonatologia",
      description:
        "Fundamental para exames em recém-nascidos e crianças pequenas, evitando o choro e o desconforto causados pelo gel frio.",
    },
    {
      title: "Ecocardiografia e Radiologia Geral",
      description:
        "Diferencial percebido imediatamente pelos pacientes adultos em exames de carótidas, abdome total e ecocardiogramas.",
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
              name: "Aquecedor de Gel",
              item: `${SITE_CONFIG.url}/carbogel/aquecedor-de-gel`,
            },
          ],
        }}
      />

      <StructuredData
        type="Product"
        data={{
          name: "Aquecedor de Gel Carbogel / GELKENT",
          description:
            "Equipamento térmico para aquecimento e controle de temperatura de frascos de gel de ultrassom, proporcionando conforto ao paciente em exames de imagem e diagnóstico.",
          brand: {
            "@type": "Brand",
            name: "Carbogel",
          },
          category: "Acessórios e equipamentos térmicos para diagnóstico médico",
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
            <Flame className="w-4 h-4 text-brand-green" />
            <span>Conforto Térmico & Humanização • Espírito Santo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight mb-4">
            Aquecedor de Gel Carbogel GELKENT no ES
          </h1>
          <p className="text-lg text-brand-darkGreen font-medium mb-3">
            Aquecimento uniforme e agradável do gel para exames de ultrassonografia
          </p>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            O aquecedor térmico de gel GELKENT da Carbogel foi projetado para elevar a experiência dos pacientes em clínicas e consultórios médicos. Ao manter o gel na temperatura ideal para o procedimento, transforma o momento do exame em um atendimento humanizado e acolhedor.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsappMessages.aquecedorGel)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Consultar Aquecedor de Gel</span>
            </a>
            <Link
              href="/carbogel/gel-para-ultrassom"
              className="inline-flex items-center justify-center gap-2 bg-brand-bgAlt hover:bg-brand-softLime text-brand-darkGreen border border-brand-border px-5 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px]"
            >
              <Droplets className="w-5 h-5 text-brand-green" />
              <span>Ver Gel para Ultrassom</span>
            </Link>
          </div>
        </div>

        {/* Vantagens Clínicas */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain">
              Vantagens do Aquecedor de Gel GELKENT
            </h2>
            <p className="text-sm text-brand-textMuted mt-1">
              Conforto imediato ao paciente e valorização do padrão de atendimento da sua clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-green" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-textMain font-heading">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-brand-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aplicações por Especialidade */}
        <div className="mb-16 bg-brand-bgAlt rounded-3xl p-8 sm:p-10 border border-brand-border">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
              Especialidades Médicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-textMain mt-3 mb-2">
              Onde o Aquecedor de Gel se Destaca
            </h2>
            <p className="text-sm text-brand-textMuted">
              Especialidades em que a temperatura do meio de contato impacta diretamente o relaxamento do paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clinicalApplications.map((app, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-brand-border">
                <div className="flex items-start gap-2.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-base text-brand-textMain font-heading">
                    {app.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed pl-6.5">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contexto Técnico e Sinergia */}
        <div className="p-8 rounded-3xl bg-white border border-brand-border text-sm text-brand-textMuted space-y-4 mb-12 shadow-xs">
          <h2 className="text-xl font-bold font-heading text-brand-textMain">
            Qualidade Ininterrupta em Salas de Ecografia
          </h2>
          <p className="leading-relaxed">
            A combinação do aquecedor de gel GELKENT com o{" "}
            <Link href="/carbogel/gel-para-ultrassom" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              gel para ultrassom Carbogel
            </Link>{" "}
            garante estabilidade térmica sem alterar as propriedades acústicas do produto. Para que sua sala de exames funcione sempre com o máximo desempenho, a Medical Plus também disponibiliza suporte e{" "}
            <Link href="/assistencia-tecnica/ultrassom" className="text-brand-darkGreen font-semibold underline hover:text-brand-green">
              assistência técnica de ultrassom no Espírito Santo
            </Link>
            .
          </p>
        </div>
      </div>

      <CTASection
        title="Deseja levar o aquecedor de gel GELKENT para sua clínica?"
        subtitle="Entre em contato com Claudiomiro Marques Caetano pelo WhatsApp para solicitar cotações e prazos de entrega para o Espírito Santo."
        buttonText="Pedir informações no WhatsApp"
        whatsappMessage={SITE_CONFIG.whatsappMessages.aquecedorGel}
      />
    </div>
  );
}
