import Link from "next/link";
import { MedicalCarousel } from "@/components/home/MedicalCarousel";
import { BrandCard } from "@/components/BrandCard";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { BRANDS } from "@/data/brands";
import { SERVICES } from "@/data/services";
import { getWhatsAppLink } from "@/data/site-config";
import {
  Stethoscope,
  Activity,
  Layers,
  Wrench,
  CheckCircle2,
  Users,
  ShieldCheck,
  Compass,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  const brandList = Object.values(BRANDS);
  const serviceList = Object.values(SERVICES);

  return (
    <div className="pt-3 sm:pt-6 lg:pt-8">
      {/* 1. Carrossel Principal de Equipamentos & Soluções (Substitui o antigo Hero) */}
      <MedicalCarousel />

      <div className="space-y-16 sm:space-y-24">
        {/* 2. Principais Soluções */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
            Linhas de Atuação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-textMain mt-3 mb-4">
            Principais Soluções Médicas
          </h2>
          <p className="text-brand-textMuted text-base sm:text-lg">
            Atendimento consultivo na especificação de mobiliário clínico, equipamentos de imagem e suporte técnico continuado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-textMain mb-2">
                Equipamentos Médico-Hospitalares
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed mb-4">
                Soluções para diferentes necessidades de clínicas, consultórios e ambientes de internação hospitalar.
              </p>
            </div>
            <Link
              href="/equipamentos-medicos-hospitalares"
              className="text-xs font-semibold text-brand-darkGreen hover:text-brand-green inline-flex items-center gap-1 mt-2"
            >
              <span>Ver equipamentos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-textMain mb-2">
                Diagnóstico por Imagem
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed mb-4">
                Equipamentos e soluções para radiografia, mamografia digital, tomografia e TI para saúde.
              </p>
            </div>
            <Link
              href="/marcas/fujifilm"
              className="text-xs font-semibold text-brand-darkGreen hover:text-brand-green inline-flex items-center gap-1 mt-2"
            >
              <span>Soluções de imagem</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-textMain mb-2">
                Móveis Hospitalares
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed mb-4">
                Mobiliário hospitalar Levita: camas para enfermaria e UTI, macas de transporte, poltronas e mesas.
              </p>
            </div>
            <Link
              href="/marcas/levita"
              className="text-xs font-semibold text-brand-darkGreen hover:text-brand-green inline-flex items-center gap-1 mt-2"
            >
              <span>Conhecer linha Levita</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Wrench className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-textMain mb-2">
                Assistência Técnica
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed mb-4">
                Suporte técnico especializado para ultrassom, raio X, mamógrafo, densitometria e tomografia.
              </p>
            </div>
            <Link
              href="/assistencia-tecnica"
              className="text-xs font-semibold text-brand-darkGreen hover:text-brand-green inline-flex items-center gap-1 mt-2"
            >
              <span>Serviços de assistência</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Marcas Representadas */}
      <section className="bg-brand-bgAlt/50 border-y border-brand-border/60 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
              Parcerias Comerciais
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-textMain mt-3 mb-4">
              Marcas e soluções com as quais trabalhamos
            </h2>
            <p className="text-brand-textMuted text-base sm:text-lg">
              Trabalhamos com soluções de marcas reconhecidas no setor médico-hospitalar, assegurando procedência, qualidade e suporte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandList.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Assistência Técnica em Destaque */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-brand-bgAlt/60 to-brand-softLime/30 rounded-3xl border border-brand-border p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
                Suporte Especializado
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-textMain mt-3 mb-4">
                Seu equipamento precisa de suporte técnico?
              </h2>
              <p className="text-brand-textMuted text-base sm:text-lg max-w-2xl">
                Entre em contato para avaliar a necessidade de manutenção, diagnóstico ou suporte técnico do seu equipamento com rapidez e clareza.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={getWhatsAppLink(SERVICES.ultrassom.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar atendimento técnico</span>
              </a>
            </div>
          </div>

          {/* Chips interativos dos serviços de assistência */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceList.map((service) => (
              <Link
                key={service.id}
                href={`/assistencia-tecnica/${service.slug}`}
                className="bg-white rounded-2xl border border-brand-border p-5 hover:border-brand-green hover:shadow-sm transition-all group flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-xl bg-brand-softLime text-brand-darkGreen group-hover:bg-brand-green group-hover:text-white transition-colors flex-shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-textMain group-hover:text-brand-darkGreen transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1 line-clamp-2 leading-relaxed">
                    {service.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green mt-2 group-hover:translate-x-1 transition-transform">
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Por Que Medical Plus (Diferenciais Qualitativos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
            Nossos Valores
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-textMain mt-3 mb-4">
            Por que falar com a Medical Plus
          </h2>
          <p className="text-brand-textMuted text-base sm:text-lg">
            Combinamos conhecimento técnico sólido com atendimento comercial transparente e próximo às instituições de saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-lg font-bold text-brand-textMain mb-2 font-heading">
              Atendimento Direto e Personalizado
            </h3>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Você conversa diretamente com Claudiomiro Marques Caetano, sem atendentes robóticos ou processos burocráticos demorados.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
              <Compass className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-lg font-bold text-brand-textMain mb-2 font-heading">
              Orientação Técnica na Escolha
            </h3>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Ajudamos a identificar a melhor relação de custo e desempenho para sua clínica, evitando investimentos inadequados ou superdimensionados.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-lg font-bold text-brand-textMain mb-2 font-heading">
              Suporte Técnico Continuado
            </h3>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Acompanhamos sua instituição após a aquisição, prestando assistência para manter seus equipamentos operando em alta precisão.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Segmentos Atendidos */}
      <section className="bg-brand-bgAlt border-y border-brand-border/60 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-softLime px-3 py-1 rounded-full border border-brand-border">
                Público Atendido
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-textMain">
                Soluções desenhadas para todo o ecossistema de saúde
              </h2>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                Nossas soluções e serviços atendem desde consultórios médicos individuais até complexos hospitalares de alta rotatividade em Vitória, Vila Velha, Serra, Cariacica e em todo o Espírito Santo.
              </p>
              <div className="pt-2">
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darkGreen hover:text-brand-green"
                >
                  <span>Conheça a história e atuação da Medical Plus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-brand-textMain font-heading">
                    Clínicas e Consultórios Médicos
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1">
                    Ginecologia, cardiologia, ortopedia, ultrassonografia e especialidades clínicas.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-brand-textMain font-heading">
                    Hospitais e Prontos-Socorros
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1">
                    Mobiliário para internação, leitos de UTI, macas de urgência e radiografia.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-brand-textMain font-heading">
                    Centros de Diagnóstico por Imagem
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1">
                    Sistemas de radiologia, mamógrafos, tomógrafos, géis condutores e manutenção.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-brand-textMain font-heading">
                    Engenharia Clínica e Manutenção
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1">
                    Parceria com gestores e engenheiros clínicos para avaliação e suporte técnico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <CTASection />
      </div>
    </div>
  );
}
