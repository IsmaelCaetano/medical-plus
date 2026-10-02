import Link from "next/link";
import { getWhatsAppLink } from "@/data/site-config";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Activity,
  Wrench,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-bgAlt/60 via-white to-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-brand-border/60">
      {/* Background subtle geometric accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-softLime/60 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-brand-softLime/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softLime text-brand-darkGreen text-xs sm:text-sm font-semibold border border-brand-border/80">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Medical Plus • Soluções médico-hospitalares</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-textMain tracking-tight leading-[1.15]">
              Equipamentos médico-hospitalares e assistência técnica especializada
            </h1>

            <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed max-w-2xl">
              Atendimento comercial e suporte técnico para clínicas, consultórios, hospitais e centros de diagnóstico. Conheça nossas soluções e fale diretamente com um especialista.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm hover:shadow-md transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar com especialista</span>
              </a>

              <Link
                href="/equipamentos-medicos-hospitalares"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-bgAlt text-brand-darkGreen border border-brand-border px-6 py-3.5 rounded-xl text-base font-semibold shadow-xs transition-colors min-h-[48px]"
              >
                <span>Conhecer soluções</span>
                <ArrowRight className="w-4 h-4 text-brand-green" />
              </Link>
            </div>

            {/* Destaques rápidos */}
            <div className="pt-6 border-t border-brand-border/70 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-brand-textMain">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Atendimento no ES</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-brand-textMain">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Marcas de Referência</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-brand-textMain col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Suporte Consultivo</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Feature Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-lg shadow-brand-darkGreen/5 relative">
              <div className="flex items-center justify-between pb-6 border-b border-brand-border/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-softLime flex items-center justify-center text-brand-darkGreen">
                    <Activity className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-brand-textMain font-heading">
                      Atuação Médica Integrada
                    </h2>
                    <p className="text-xs text-brand-textMuted">
                      Fornecimento e manutenção técnica
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-brand-bgAlt text-brand-darkGreen rounded-full border border-brand-border">
                  B2B Saúde
                </span>
              </div>

              <div className="py-5 space-y-4">
                {/* Feature 1 */}
                <div className="p-4 rounded-2xl bg-brand-bgAlt/70 border border-brand-border/60 hover:bg-brand-softLime/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white text-brand-green shadow-xs mt-0.5">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-textMain">
                        Mobiliário e Equipamentos Clínicos
                      </h3>
                      <p className="text-xs text-brand-textMuted mt-0.5 leading-relaxed">
                        Camas elétricas e para UTI, macas de transporte, divãs e mobiliário Levita com durabilidade certificada.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-4 rounded-2xl bg-brand-bgAlt/70 border border-brand-border/60 hover:bg-brand-softLime/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white text-brand-green shadow-xs mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-textMain">
                        Diagnóstico por Imagem
                      </h3>
                      <p className="text-xs text-brand-textMuted mt-0.5 leading-relaxed">
                        Sistemas de Raio X, mamografia digital e tomografia computadorizada Fujifilm Healthcare para laudos de precisão.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="p-4 rounded-2xl bg-brand-bgAlt/70 border border-brand-border/60 hover:bg-brand-softLime/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white text-brand-green shadow-xs mt-0.5">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-textMain">
                        Assistência Especializada
                      </h3>
                      <p className="text-xs text-brand-textMuted mt-0.5 leading-relaxed">
                        Suporte técnico para ultrassom, raio X, mamógrafo, densitômetro e tomografia com atendimento ágil no ES.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border/80 text-center">
                <Link
                  href="/assistencia-tecnica"
                  className="text-xs font-semibold text-brand-darkGreen hover:text-brand-green inline-flex items-center gap-1 group"
                >
                  <span>Conhecer todos os serviços de assistência técnica</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
