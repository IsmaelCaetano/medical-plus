import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import { FOOTER_LINKS } from "@/data/navigation";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bgAlt border-t border-brand-border text-brand-textMain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-brand-border">
          {/* Coluna 1 & 2: Identidade e Contato Direto */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="relative w-48 h-12 flex items-center">
                <Image
                  src="/brand/medicalplus-logo-horizontal.png"
                  alt="Medical Plus"
                  width={240}
                  height={75}
                  className="object-contain w-auto h-11"
                />
              </div>
            </Link>

            <p className="text-sm text-brand-textMuted max-w-sm leading-relaxed">
              {SITE_CONFIG.slogan}. Fornecimento de soluções para clínicas, consultórios, hospitais
              e centros de diagnóstico, com atendimento próximo e consultivo no Espírito Santo e região.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <div className="font-semibold text-brand-darkGreen flex items-center gap-1.5">
                <span>Responsável Técnico e Comercial:</span>
                <span className="text-brand-textMain">{SITE_CONFIG.contact.name}</span>
              </div>

              <div className="flex items-center gap-2 text-brand-textMain">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="hover:text-brand-darkGreen transition-colors font-medium"
                >
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 text-brand-textMain">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span className="text-brand-textMuted">{SITE_CONFIG.contact.region}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 3: Equipamentos e Marcas */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-brand-textMain uppercase tracking-wider mb-3">
              Equipamentos & Marcas
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.solucoes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-textMuted hover:text-brand-darkGreen transition-colors inline-flex items-center group"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5 text-brand-green" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Assistência Técnica Especializada */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-brand-textMain uppercase tracking-wider mb-3">
              Assistência Técnica
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.assistencia.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-textMuted hover:text-brand-darkGreen transition-colors inline-flex items-center group"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5 text-brand-green" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 5: Institucional e LGPD */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-brand-textMain uppercase tracking-wider mb-3">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-textMuted hover:text-brand-darkGreen transition-colors inline-flex items-center group"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5 text-brand-green" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha inferior de copyright e avisos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-textMuted gap-3">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-brand-darkGreen transition-colors"
            >
              Política de Privacidade
            </Link>
            <span>•</span>
            <span>Espírito Santo, Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
