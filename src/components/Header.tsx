"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV } from "@/data/navigation";
import { getWhatsAppLink } from "@/data/site-config";
import { Menu, X, ChevronDown, MessageCircle, Phone } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border">
      {/* Top micro-bar for quick phone access */}
      <div className="bg-brand-bgAlt border-b border-brand-border/60 py-1.5 px-4 text-xs text-brand-textMuted">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline">
            Equipamentos médico-hospitalares e assistência técnica especializada • Espírito Santo
          </span>
          <span className="sm:hidden">Medical Plus • Soluções Médicas</span>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-brand-darkGreen hover:text-brand-green transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-green" />
            <span>(27) 99632-6622</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-green rounded-lg">
              <div className="relative w-44 sm:w-52 h-12 flex items-center">
                <Image
                  src="/brand/medicalplus-logo-horizontal.png"
                  alt="Medical Plus - Equipamentos Médicos e Assistência Técnica"
                  width={260}
                  height={80}
                  priority
                  className="object-contain w-auto h-11"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Navegação principal">
            {MAIN_NAV.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="px-3.5 py-2 text-sm font-medium text-brand-textMain hover:text-brand-darkGreen rounded-lg inline-flex items-center gap-1 group-hover:bg-brand-bgAlt transition-colors"
                    >
                      {item.title}
                      <ChevronDown className="w-4 h-4 text-brand-textMuted group-hover:text-brand-darkGreen transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 top-full pt-1.5 w-72 transition-all duration-200 ${
                        activeDropdown === item.title ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-brand-border p-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="block p-2.5 rounded-lg hover:bg-brand-bgAlt transition-colors"
                          >
                            <div className="font-semibold text-sm text-brand-textMain hover:text-brand-darkGreen">
                              {sub.title}
                            </div>
                            {sub.description && (
                              <div className="text-xs text-brand-textMuted mt-0.5 line-clamp-2">
                                {sub.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-brand-textMain hover:text-brand-darkGreen hover:bg-brand-bgAlt rounded-lg transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="mr-2 inline-flex items-center justify-center p-2 rounded-lg text-white bg-brand-green min-h-[40px] min-w-[40px]"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-brand-textMain hover:text-brand-darkGreen hover:bg-brand-bgAlt focus:outline-none focus:ring-2 focus:ring-brand-green"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-2 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {MAIN_NAV.map((item) => {
            if (item.children) {
              const isOpen = activeDropdown === item.title;
              return (
                <div key={item.title} className="border-b border-brand-border/40 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 text-base font-semibold text-brand-textMain"
                    >
                      {item.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.title)}
                      className="p-2 text-brand-textMuted"
                      aria-label={`Expandir ${item.title}`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="pl-3 mt-1 space-y-1.5 border-l-2 border-brand-green/30">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-sm font-medium text-brand-textMuted hover:text-brand-darkGreen"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-brand-textMain border-b border-brand-border/40 hover:text-brand-darkGreen"
              >
                {item.title}
              </Link>
            );
          })}

          <div className="pt-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-5 py-3 rounded-xl text-base font-semibold shadow-sm min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp com Claudiomiro</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
