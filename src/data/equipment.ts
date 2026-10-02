import { SITE_CONFIG } from "./site-config";

export interface EquipmentCategory {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  items: string[];
  brandRef?: string;
  ctaText: string;
  whatsappMessage: string;
}

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: "moveis-hospitalares",
    title: "Móveis Hospitalares",
    shortDesc: "Mobiliário ergonômico e durável para leitos de internação, UTIs e ambulatórios.",
    description:
      "Linha completa de móveis e mobiliário hospitalar projetada para proporcionar segurança ao paciente e ergonomia aos profissionais de enfermagem e saúde.",
    items: [
      "Camas hospitalares manuais e elétricas",
      "Camas para Unidade de Terapia Intensiva (UTI)",
      "Macas de transporte e recuperação",
      "Berços hospitalares em acrílico",
      "Mesas de exame clínico e ginecológicas",
      "Carros de parada, curativo e medicação",
      "Poltronas para acompanhante e hemodiálise",
      "Suportes de soro em aço inox e armários",
    ],
    brandRef: "Levita Móveis Hospitalares",
    ctaText: "Pedir informações sobre Móveis Hospitalares",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre móveis hospitalares para minha instituição.",
  },
  {
    id: "diagnostico-por-imagem",
    title: "Diagnóstico por Imagem",
    shortDesc: "Tecnologia médica avançada para centros de radiologia, clínicas e hospitais.",
    description:
      "Soluções integradas de diagnóstico por imagem que aliam nitidez de detalhamento visual a baixos níveis de radiação e fluxos eficientes.",
    items: [
      "Sistemas de radiografia digital (DR) e convencional",
      "Mamógrafos digitais de alta resolução",
      "Tomografia computadorizada multislice",
      "Sistemas de ressonância magnética",
      "Plataformas PACS de visualização e laudo médico",
    ],
    brandRef: "Fujifilm Healthcare",
    ctaText: "Pedir informações sobre Diagnóstico por Imagem",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre equipamentos de diagnóstico por imagem.",
  },
  {
    id: "radiografia",
    title: "Radiografia / Raio X",
    shortDesc: "Salas de raio X completas e detectores digitais para alta demanda de atendimento.",
    description:
      "Equipamentos de raio X desenhados para atender desde ambulatórios de baixa complexidade até prontos-socorros de alta demanda e grandes hospitais.",
    items: [
      "Sistemas de raio X fixos com mesa bucky e estativa vertical",
      "Aparelhos de raio X móveis para leito",
      "Detectores digitais sem fio (Wireless Flat Panel DR)",
      "Workstations de controle com processamento de imagem apurado",
    ],
    brandRef: "Fujifilm Healthcare",
    ctaText: "Pedir informações sobre Raio X",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre equipamentos e detectores de Raio X.",
  },
  {
    id: "mamografia",
    title: "Mamografia",
    shortDesc: "Mamógrafos com alto contraste e design pensado no acolhimento à paciente.",
    description:
      "Sistemas de mamografia voltados à detecção precoce de nódulos e microcalcificações com máxima sensibilidade e controle preciso de compressão.",
    items: [
      "Mamógrafos digitais Full Field (FFDM)",
      "Pás de compressão anatômicas e confortáveis",
      "Workstations diagnósticas para leitura e laudo ágil",
      "Tecnologia de dose reduzida com alta definição tecidual",
    ],
    brandRef: "Fujifilm Healthcare",
    ctaText: "Pedir informações sobre Mamografia",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre sistemas de mamografia digital.",
  },
  {
    id: "tomografia",
    title: "Tomografia Computadorizada",
    shortDesc: "Scanners tomográficos rápidos e precisos para rotinas diagnósticas complexas.",
    description:
      "Sistemas tomográficos com excelente resolução temporal e espacial, desenhados para exames de rotina, angiografia e situações de emergência.",
    items: [
      "Tomógrafos multislice de alta velocidade",
      "Reconstruções iterativas com menor exposição do paciente",
      "Gantry amplo para melhor posicionamento e conforto",
      "Consoles inteligentes com fluxos simplificados de operação",
    ],
    brandRef: "Fujifilm Healthcare",
    ctaText: "Pedir informações sobre Tomografia",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre tomografia computadorizada.",
  },
  {
    id: "solucoes-clinicas-hospitais",
    title: "Soluções para Clínicas e Hospitais",
    shortDesc: "Orientação consultiva na montagem e expansão de infraestrutura médica.",
    description:
      "Auxiliamos gestores, médicos e equipes de compras na especificação e dimensionamento dos equipamentos mais adequados para a estrutura física e o público atendido.",
    items: [
      "Planejamento de parque tecnológico para clínicas novas",
      "Atualização de equipamentos obsoletos (retrofit)",
      "Soluções integradas de TI em saúde, laudos e conectividade",
      "Atendimento direto com especialista com vasta vivência no setor",
    ],
    brandRef: "Medical Plus Consultoria",
    ctaText: "Pedir informações sobre Soluções Hospitalares",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de orientação para estruturar as soluções da minha clínica/hospital.",
  },
  {
    id: "geis-acessorios",
    title: "Géis e Insumos Médicos",
    shortDesc: "Géis condutores de alta performance e aquecedores térmicos para exames clínicos.",
    description:
      "Meios de contato e insumos essenciais para ecografia e cardiologia diagnóstica com máxima condutividade e respeito à integridade dos transdutores.",
    items: [
      "Gel hidrossolúvel para ultrassonografia (embalagens de 5kg e frascos)",
      "Gel condutor para ECG, desfibrilador e eletrodos",
      "Aquecedores de gel Carbogel / GELKENT com termostato de precisão",
      "Acessórios para proteção de sondas e higiene no consultório",
    ],
    brandRef: "Carbogel",
    ctaText: "Pedir informações sobre Géis e Acessórios",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre a linha Carbogel e aquecedor de gel.",
  },
];
