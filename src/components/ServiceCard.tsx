import Link from "next/link";
import { ServiceData } from "@/data/services";
import { getWhatsAppLink } from "@/data/site-config";
import { Wrench, ArrowRight, MessageCircle, AlertTriangle } from "lucide-react";

interface ServiceCardProps {
  service: ServiceData;
  showDetailsLink?: boolean;
}

export function ServiceCard({ service, showDetailsLink = true }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
            <Wrench className="w-5 h-5 text-brand-green" />
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-bgAlt text-brand-darkGreen border border-brand-border">
            Assistência Especializada
          </span>
        </div>

        <h3 className="text-xl font-bold font-heading text-brand-textMain mb-2 group-hover:text-brand-darkGreen transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-brand-textMuted leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Sintomas comuns que motivam o chamado */}
        <div className="bg-brand-bgAlt rounded-xl p-3 mb-5 border border-brand-border/60">
          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-textMain mb-2 uppercase tracking-wide">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Sinais frequentes para chamado:</span>
          </div>
          <ul className="space-y-1">
            {service.symptoms.slice(0, 2).map((symptom, idx) => (
              <li key={idx} className="text-xs text-brand-textMuted">
                • <strong className="text-brand-textMain font-medium">{symptom.title}:</strong>{" "}
                <span className="line-clamp-1">{symptom.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href={getWhatsAppLink(service.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Solicitar assistência</span>
        </a>

        {showDetailsLink && (
          <Link
            href={`/assistencia-tecnica/${service.slug}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-darkGreen bg-brand-bgAlt hover:bg-brand-softLime transition-colors min-h-[44px]"
          >
            <span>Ver detalhes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
