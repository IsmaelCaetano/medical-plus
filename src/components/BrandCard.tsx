import Link from "next/link";
import { BrandData } from "@/data/brands";
import { getWhatsAppLink } from "@/data/site-config";
import { ArrowRight, MessageCircle, AlertCircle, CheckCircle2 } from "lucide-react";

interface BrandCardProps {
  brand: BrandData;
  showDetailsLink?: boolean;
}

export function BrandCard({ brand, showDetailsLink = true }: BrandCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-softLime text-brand-darkGreen">
            Marca Representada
          </span>
          {showDetailsLink && (
            <Link
              href={`/marcas/${brand.slug}`}
              className="text-xs font-medium text-brand-textMuted hover:text-brand-darkGreen inline-flex items-center gap-1 group"
            >
              <span>Ver detalhes</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        <h3 className="text-2xl font-bold font-heading text-brand-textMain mb-2">
          {brand.name}
        </h3>

        <p className="text-sm font-medium text-brand-darkGreen mb-3">
          {brand.tagline}
        </p>

        <p className="text-sm text-brand-textMuted leading-relaxed mb-5">
          {brand.description}
        </p>

        {brand.notice && (
          <div className="mb-5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">{brand.notice}</p>
          </div>
        )}

        <div className="space-y-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-textMuted">
            Principais Categorias:
          </span>
          <ul className="space-y-1.5">
            {brand.categories.slice(0, 4).map((cat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-brand-textMain">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                <span>{cat.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href={getWhatsAppLink(brand.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{brand.ctaText}</span>
        </a>

        {showDetailsLink && (
          <Link
            href={`/marcas/${brand.slug}`}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-darkGreen bg-brand-bgAlt hover:bg-brand-softLime transition-colors min-h-[44px]"
          >
            Saiba mais
          </Link>
        )}
      </div>
    </div>
  );
}
