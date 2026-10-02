import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e proteção de dados da Medical Plus conforme a LGPD.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/politica-de-privacidade`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PoliticaPrivacidadePage() {
  const breadcrumbItems = [{ label: "Política de Privacidade" }];

  return (
    <div>
      <div className="bg-brand-bgAlt border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-textMain mb-6">
          Política de Privacidade
        </h1>
        <div className="prose prose-sm text-brand-textMuted space-y-6 leading-relaxed">
          <p>
            A <strong>{SITE_CONFIG.legalName}</strong> (&ldquo;Medical Plus&rdquo;) preza pela transparência, privacidade e proteção dos dados pessoais de seus clientes, parceiros e visitantes deste site, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 &mdash; LGPD).
          </p>

          <h2 className="text-xl font-bold font-heading text-brand-textMain mt-6 mb-2">
            1. Coleta de Informações
          </h2>
          <p>
            Nosso site tem caráter eminentemente informativo e comercial B2B. As informações de contato eventualmente fornecidas pelo usuário em nossos formulários (como nome, empresa, e-mail e telefone) são utilizadas unicamente com o propósito de viabilizar a resposta a solicitações comerciais ou técnicas via canais diretos (como WhatsApp ou telefone).
          </p>

          <h2 className="text-xl font-bold font-heading text-brand-textMain mt-6 mb-2">
            2. Finalidade do Tratamento de Dados
          </h2>
          <p>
            Os dados fornecidos são empregados para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responder a pedidos de informações sobre equipamentos médico-hospitalares;</li>
            <li>Agendar avaliações técnicas e chamados de manutenção para equipamentos de diagnóstico;</li>
            <li>Elaborar propostas comerciais pertinentes ao interesse manifestado pelo usuário.</li>
          </ul>

          <h2 className="text-xl font-bold font-heading text-brand-textMain mt-6 mb-2">
            3. Compartilhamento de Dados
          </h2>
          <p>
            A Medical Plus não comercializa, não aluga e não compartilha dados de usuários com terceiros para fins de marketing. O compartilhamento de dados ocorre apenas quando estritamente necessário para o cumprimento de contratos com fabricantes representados ou por exigência legal das autoridades competentes.
          </p>

          <h2 className="text-xl font-bold font-heading text-brand-textMain mt-6 mb-2">
            4. Segurança da Informação
          </h2>
          <p>
            Adotamos práticas técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados, perdas ou qualquer forma de tratamento inadequado ou ilícito. Toda a comunicação do site ocorre sob conexão criptografada via protocolo HTTPS.
          </p>

          <h2 className="text-xl font-bold font-heading text-brand-textMain mt-6 mb-2">
            5. Direitos do Titular
          </h2>
          <p>
            Conforme a legislação brasileira, o titular dos dados possui o direito de solicitar a qualquer momento a confirmação da existência de tratamento, a correção de dados incompletos ou a eliminação de dados tratados com seu consentimento.
          </p>

          <h2 className="text-xl font-bold font-heading text-brand-textMain mt-6 mb-2">
            6. Contato com o Encarregado
          </h2>
          <p>
            Para esclarecer dúvidas sobre esta Política de Privacidade ou exercer seus direitos de titular, entre em contato com nosso responsável através do telefone/WhatsApp <strong>{SITE_CONFIG.contact.phoneDisplay}</strong> ou e-mail <strong>{SITE_CONFIG.contact.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
