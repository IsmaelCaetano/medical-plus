"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/site-config";

interface WhatsAppButtonProps {
  customMessage?: string;
}

export function WhatsAppButton({ customMessage }: WhatsAppButtonProps) {
  const href = getWhatsAppLink(customMessage);

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Claudiomiro no WhatsApp da Medical Plus"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline-block font-semibold text-sm tracking-wide">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
