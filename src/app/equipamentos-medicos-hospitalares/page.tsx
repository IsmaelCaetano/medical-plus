import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EquipmentCategoryCard } from "@/components/EquipmentCategoryCard";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { EQUIPMENT_CATEGORIES } from "@/data/equipment";
import { SITE_CONFIG } from "@/data/site-config";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Equipamentos Médico-Hospitalares",
  description:
    "Soluções em equipamentos médico-hospitalares, diagnóstico por imagem, móveis clínicos e insumos no Espírito Santo. Atendimento consultivo com a Medical Plus.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/equipamentos-medicos-hospitalares`,
  },
  openGraph: {
    title: "Equipamentos Médico-Hospitalares | Medical Plus",
    description:
      "Soluções em equipamentos médico-hospitalares, diagnóstico por imagem, móveis clínicos e insumos no Espírito Santo. Atendimento consultivo com a Medical Plus.",
    url: `${SITE_CONFIG.url}/equipamentos-medicos-hospitalares`,
  },
};

export default function EquipamentosPage() {
  const breadcrumbItems = [{ label: "Equipamentos Médico-Hospitalares" }];

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
              name: "Equipamentos Médico-Hospitalares",
              item: `${SITE_CONFIG.url}/equipamentos-medicos-hospitalares`,
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
            Portfólio Institucional
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-textMain mt-3 mb-4">
            Equipamentos Médico-Hospitalares e Soluções Clínicas
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            Representamos marcas líderes com equipamentos de alta tecnologia para diagnóstico por imagem, mobiliário hospitalar resistente e insumos especializados. Conheça as principais categorias e solicite informações personalizadas para sua instituição.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EQUIPMENT_CATEGORIES.map((category) => (
            <EquipmentCategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Informative text block for SEO */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-bgAlt border border-brand-border text-sm text-brand-textMuted space-y-4">
          <h2 className="text-xl font-bold font-heading text-brand-textMain">
            Como escolher o equipamento ideal para sua clínica ou hospital
          </h2>
          <p className="leading-relaxed">
            A aquisição de equipamentos médicos envolve análise de fluxo de pacientes, espaço físico disponível, requisitos de rede e energia, além do suporte técnico pós-instalação. A Medical Plus atua de forma consultiva no Espírito Santo para que cada investimento seja seguro, eficiente e duradouro.
          </p>
          <p className="leading-relaxed">
            Trabalhamos com linhas de produtos que atendem rigorosamente às normas regulatórias e sanitárias da Anvisa e aos mais elevados padrões mundiais de segurança. Fale diretamente com Claudiomiro Marques Caetano para verificar configurações, catálogos técnicos e condições de fornecimento.
          </p>
        </div>
      </div>

      <CTASection
        title="Deseja informações sobre algum equipamento específico?"
        subtitle="Entre em contato com a Medical Plus pelo WhatsApp e receba orientações técnicas diretamente com o responsável."
        buttonText="Pedir informações no WhatsApp"
      />
    </div>
  );
}
