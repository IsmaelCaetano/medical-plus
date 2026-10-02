export const SITE_CONFIG = {
  name: "Medical Plus",
  legalName: "Medical Plus Representações e Serviços",
  slogan: "Equipamentos médico-hospitalares e assistência técnica especializada",
  description:
    "Representação comercial de equipamentos médico-hospitalares e assistência técnica especializada para clínicas, hospitais e centros de diagnóstico no Espírito Santo e região.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://medicalplus.com.br",
  contact: {
    name: "Claudiomiro Marques Caetano",
    role: "Especialista Comercial e Técnico",
    phoneDisplay: "(27) 99632-6622",
    phoneRaw: "5527996326622",
    email: "contato@medicalplus.com.br",
    region: "Espírito Santo (Vitória, Vila Velha, Serra, Cariacica e municípios do ES)",
  },
  whatsappMessages: {
    general:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de mais informações sobre equipamentos médico-hospitalares.",
    assistanceGeneric:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre assistência técnica. Meu equipamento é: [TIPO / MARCA / MODELO]. Cidade: [CIDADE]. Defeito/Sintoma: [DESCREVER].",
    levita:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre móveis hospitalares Levita.",
    fujifilm:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre soluções de diagnóstico por imagem Fujifilm Healthcare.",
    carbogel:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre a linha Carbogel e aquecedor de gel.",
    ultrasoundAssistance:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre assistência técnica em ultrassom.",
    xrayAssistance:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre assistência técnica em equipamento de Raio X.",
    mammographyAssistance:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre assistência técnica em Mamógrafo.",
    boneDensitometryAssistance:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre assistência técnica em Densitômetro Ósseo.",
    ctAssistance:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre assistência técnica em Tomografia Computadorizada.",
  },
};

export function getWhatsAppLink(message?: string): string {
  const text = message || SITE_CONFIG.whatsappMessages.general;
  return `https://wa.me/${SITE_CONFIG.contact.phoneRaw}?text=${encodeURIComponent(text)}`;
}
