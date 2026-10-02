"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/data/site-config";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    assunto: "Informações sobre Equipamentos",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Monta texto formatado para o WhatsApp
    const msg = [
      `*Contato via Site Medical Plus*`,
      `*Nome:* ${formData.nome || "Não informado"}`,
      `*Empresa/Clínica:* ${formData.empresa || "Não informada"}`,
      `*Telefone:* ${formData.telefone || "Não informado"}`,
      `*E-mail:* ${formData.email || "Não informado"}`,
      `*Assunto:* ${formData.assunto}`,
      formData.mensagem ? `*Mensagem:* ${formData.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const link = getWhatsAppLink(msg);
    setSubmitted(true);

    // Abre o WhatsApp com a mensagem pronta
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold font-heading text-brand-textMain mb-1">
          Envie sua mensagem
        </h3>
        <p className="text-sm text-brand-textMuted">
          Preencha os campos abaixo para iniciar o atendimento direto com Claudiomiro Marques Caetano via WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nome" className="block text-xs font-semibold text-brand-textMain uppercase tracking-wider mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              placeholder="Ex: Dra. Mariana Costa"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bgAlt/50 text-sm text-brand-textMain placeholder:text-brand-textMuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="empresa" className="block text-xs font-semibold text-brand-textMain uppercase tracking-wider mb-1">
              Empresa / Clínica / Hospital
            </label>
            <input
              type="text"
              id="empresa"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              placeholder="Ex: Clínica São Marcos"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bgAlt/50 text-sm text-brand-textMain placeholder:text-brand-textMuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="telefone" className="block text-xs font-semibold text-brand-textMain uppercase tracking-wider mb-1">
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              id="telefone"
              required
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              placeholder="Ex: (27) 99999-9999"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bgAlt/50 text-sm text-brand-textMain placeholder:text-brand-textMuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-brand-textMain uppercase tracking-wider mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Ex: contato@clinica.com.br"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bgAlt/50 text-sm text-brand-textMain placeholder:text-brand-textMuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="assunto" className="block text-xs font-semibold text-brand-textMain uppercase tracking-wider mb-1">
            Assunto Principal
          </label>
          <select
            id="assunto"
            value={formData.assunto}
            onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bgAlt/50 text-sm text-brand-textMain focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
          >
            <option value="Informações sobre Equipamentos">Informações sobre Equipamentos</option>
            <option value="Assistência Técnica - Ultrassom">Assistência Técnica - Ultrassom</option>
            <option value="Assistência Técnica - Raio X">Assistência Técnica - Raio X</option>
            <option value="Assistência Técnica - Mamógrafo">Assistência Técnica - Mamógrafo</option>
            <option value="Assistência Técnica - Densitômetro">Assistência Técnica - Densitômetro Ósseo</option>
            <option value="Assistência Técnica - Tomografia">Assistência Técnica - Tomografia</option>
            <option value="Móveis Hospitalares Levita">Móveis Hospitalares Levita</option>
            <option value="Diagnóstico por Imagem Fujifilm">Diagnóstico por Imagem Fujifilm</option>
            <option value="Linha Carbogel e Aquecedores">Linha Carbogel e Aquecedores</option>
            <option value="Outro Assunto">Outro Assunto</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-xs font-semibold text-brand-textMain uppercase tracking-wider mb-1">
            Mensagem ou Detalhes do Equipamento
          </label>
          <textarea
            id="mensagem"
            rows={4}
            value={formData.mensagem}
            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            placeholder="Descreva sua necessidade, modelo do equipamento ou sintoma observado..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bgAlt/50 text-sm text-brand-textMain placeholder:text-brand-textMuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-base font-semibold shadow-sm transition-all min-h-[48px]"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Enviar mensagem pelo WhatsApp</span>
        </button>

        {submitted && (
          <div className="p-3 bg-brand-softLime rounded-xl border border-brand-border text-xs text-brand-darkGreen flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
            <span>Sua mensagem foi estruturada! O WhatsApp foi aberto para envio imediato.</span>
          </div>
        )}

        <p className="text-[11px] text-brand-textMuted text-center">
          Ao enviar, você será direcionado ao WhatsApp com sua mensagem pronta para envio seguro. Seus dados não são compartilhados com terceiros.
        </p>
      </form>
    </div>
  );
}
