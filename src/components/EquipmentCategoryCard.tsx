import { EquipmentCategory } from "@/data/equipment";
import { getWhatsAppLink } from "@/data/site-config";
import { MessageCircle, CheckCircle2, Layers } from "lucide-react";

interface EquipmentCategoryCardProps {
  category: EquipmentCategory;
}

export function EquipmentCategoryCard({ category }: EquipmentCategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-brand-softLime text-brand-darkGreen flex items-center justify-center">
            <Layers className="w-5 h-5 text-brand-green" />
          </div>
          {category.brandRef && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-bgAlt text-brand-darkGreen border border-brand-border">
              {category.brandRef}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold font-heading text-brand-textMain mb-2">
          {category.title}
        </h3>

        <p className="text-sm font-medium text-brand-darkGreen mb-2">
          {category.shortDesc}
        </p>

        <p className="text-sm text-brand-textMuted leading-relaxed mb-5">
          {category.description}
        </p>

        <div className="space-y-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-textMuted">
            Soluções e itens abrangidos:
          </span>
          <ul className="space-y-1.5">
            {category.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-brand-textMain">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-brand-border/60">
        <a
          href={getWhatsAppLink(category.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{category.ctaText}</span>
        </a>
      </div>
    </div>
  );
}
