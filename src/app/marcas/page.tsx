import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandCard } from "@/components/BrandCard";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { BRANDS } from "@/data/brands";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Marcas e Fabricantes Representados",
  description:
    "Conheça as marcas parceiras com as quais a Medical Plus trabalha no Espírito Santo: Levita Móveis Hospitalares, Fujifilm Healthcare e Carbogel.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/marcas`,
  },
  openGraph: {
    title: "Marcas e Fabricantes Representados | Medical Plus",
    description:
      "Conheça as marcas parceiras com as quais a Medical Plus trabalha no Espírito Santo: Levita Móveis Hospitalares, Fujifilm Healthcare e Carbogel.",
    url: `${SITE_CONFIG.url}/marcas`,
  },
};

export default function MarcasPage() {
  const brandList = Object.values(BRANDS);
  const breadcrumbItems = [{ label: "Marcas" }];

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
              name: "Marcas",
              item: `${SITE_CONFIG.url}/marcas`,
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
            Marcas Parceiras
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-textMain mt-3 mb-4">
            Marcas e Soluções Médicas com as Quais Trabalhamos
          </h1>
          <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed">
            Representamos marcas conceituadas e reconhecidas no mercado médico-hospitalar brasileiro e internacional. Nosso compromisso é levar aos profissionais de saúde soluções duráveis, tecnológicas e com suporte de alto nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandList.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-brand-bgAlt border border-brand-border text-sm text-brand-textMuted space-y-4">
          <h2 className="text-xl font-bold font-heading text-brand-textMain">
            Qualidade, procedência e garantia
          </h2>
          <p className="leading-relaxed">
            Ao adquirir equipamentos e insumos por meio da representação da Medical Plus, sua instituição conta com produtos originais dos fabricantes, respaldo direto de fábrica e atendimento local em Vitória, Vila Velha, Serra, Cariacica e em todos os municípios do Espírito Santo.
          </p>
          <p className="leading-relaxed">
            Para saber mais sobre a linha de cada fabricante, acesse as páginas detalhadas abaixo ou converse diretamente com nossa equipe comercial pelo WhatsApp.
          </p>
        </div>
      </div>

      <CTASection
        title="Deseja saber mais sobre alguma das marcas?"
        subtitle="Entre em contato com Claudiomiro Marques Caetano pelo WhatsApp e receba materiais técnicos e orientações personalizadas."
      />
    </div>
  );
}
