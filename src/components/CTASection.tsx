import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import { MessageCircle, Phone, Clock, ShieldCheck } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  whatsappMessage?: string;
}

export function CTASection({
  title = "Precisa de equipamento, informação técnica ou assistência?",
  subtitle = "Fale diretamente com a Medical Plus e conte o que sua clínica, hospital ou empresa precisa.",
  buttonText = "Falar com Claudiomiro no WhatsApp",
  whatsappMessage,
}: CTASectionProps) {
  return (
    <section className="bg-brand-softLime border-y border-brand-border/80 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-brand-darkGreen text-xs font-semibold shadow-xs mb-5 border border-brand-border">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          <span>Atendimento Direto e Técnico no Espírito Santo</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-textMain tracking-tight mb-4 max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-brand-textMuted max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-green hover:bg-brand-greenHover text-white px-7 py-3.5 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{buttonText}</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-bgAlt text-brand-darkGreen border border-brand-border px-6 py-3.5 rounded-xl text-base font-semibold shadow-xs transition-colors min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-brand-green" />
            <span>Ligar: {SITE_CONFIG.contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-border/60 max-w-xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-brand-textMuted">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-green" />
            <span>Retorno rápido em horário comercial</span>
          </div>
          <div>•</div>
          <div>Atendimento para todo o ES</div>
          <div>•</div>
          <div>Sem intermediários</div>
        </div>
      </div>
    </section>
  );
}
