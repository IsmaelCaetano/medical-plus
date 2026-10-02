import { SITE_CONFIG } from "./site-config";

export interface BrandData {
  id: string;
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  notice?: string;
  categories: {
    title: string;
    description: string;
    items?: string[];
  }[];
  features: {
    title: string;
    description: string;
  }[];
  seoParagraphs: string[];
}

export const BRANDS: Record<string, BrandData> = {
  levita: {
    id: "levita",
    name: "Levita",
    slug: "levita",
    metaTitle: "Móveis Hospitalares Levita | Medical Plus",
    metaDescription:
      "Conheça a linha de móveis hospitalares Levita representada pela Medical Plus: camas hospitalares, macas, poltronas e mobiliário clínico durável no ES.",
    tagline: "Mobiliário e equipamentos hospitalares ergonômicos e duráveis",
    description:
      "A Levita é referência nacional no desenvolvimento de mobiliário médico-hospitalar projetado para proporcionar conforto ao paciente, facilidade operacional para a equipe de enfermagem e máxima durabilidade em ambientes de alta rotatividade.",
    ctaText: "Quero informações sobre Levita",
    whatsappMessage: SITE_CONFIG.whatsappMessages.levita,
    categories: [
      {
        title: "Camas Hospitalares e UTI",
        description:
          "Modelos manuais, elétricos e motorizados para internação geral, cuidados semi-intensivos e leitos de Unidade de Terapia Intensiva (UTI) com múltiplos movimentos.",
        items: [
          "Camas elétricas com elevação de leito e Trendelenburg",
          "Camas de internação com grades articuladas e cabeceiras removíveis",
          "Camas para UTI com comandos integrados e retorno cardíaco",
        ],
      },
      {
        title: "Macas e Berços",
        description:
          "Estruturas reforçadas para transporte seguro de pacientes em pronto-atendimentos, centros cirúrgicos e maternidades.",
        items: [
          "Macas de transferência e resgate hospitalar",
          "Macas de recuperação pós-anestésica com grades de proteção",
          "Berços hospitalares com cuba em acrílico para alojamento conjunto",
        ],
      },
      {
        title: "Mesas Clínicas e Ginecológicas",
        description:
          "Mobiliário para exames em consultórios e ambulatórios, com foco em ergonomia e assepsia.",
        items: [
          "Mesas ginecológicas com perneiras ajustáveis e cuba inox",
          "Divãs clínicos para exames gerais e procedimentos simples",
          "Mesas de exame pediátrico",
        ],
      },
      {
        title: "Carros e Mesas Auxiliares",
        description:
          "Organização e agilidade para transporte de medicamentos, curativos e instrumentos cirúrgicos.",
        items: [
          "Carros de emergência / parada com gavetas traváveis",
          "Carros de curativo com suporte para balde e bacia inox",
          "Mesas de Mayo e mesas auxiliares em aço inoxidável",
        ],
      },
      {
        title: "Poltronas e Cadeiras Hospitalares",
        description:
          "Conforto para acompanhantes e pacientes em salas de observação, diálise e quimioterapia.",
        items: [
          "Poltronas reclináveis para acompanhante",
          "Poltronas para coleta de sangue e hemodiálise",
          "Cadeiras de rodas para transporte intra-hospitalar",
        ],
      },
      {
        title: "Armários, Vitrines e Suportes",
        description:
          "Armazenamento protegido de insumos médicos e infraestrutura para suporte venoso.",
        items: [
          "Vitrines e armários para guarda de medicamentos e instrumentais",
          "Suportes de soro em aço inox com rodízios de alta mobilidade",
          "Biombos de proteção visual para leitos",
        ],
      },
    ],
    features: [
      {
        title: "Construção Robusta",
        description:
          "Estruturas em aço de alta resistência com tratamento anticorrosivo e pintura eletrostática a pó de padrão hospitalar.",
      },
      {
        title: "Ergonomia Assistencial",
        description:
          "Projetados para reduzir o esforço físico dos profissionais de saúde e garantir facilidade na higienização rotineira.",
      },
      {
        title: "Segurança do Paciente",
        description:
          "Sistemas de freios confiáveis, travas de segurança e bordas arredondadas em conformidade com normas regulatórias.",
      },
      {
        title: "Atendimento Consultivo",
        description:
          "Auxiliamos sua instituição a planejar a configuração ideal de mobiliário conforme a planta e necessidade de cada setor.",
      },
    ],
    seoParagraphs: [
      "A escolha do mobiliário hospitalar correto impacta diretamente a rotina de trabalho das equipes assistenciais e o acolhimento oferecido aos pacientes. A Medical Plus atua na representação de móveis hospitalares Levita, garantindo suporte consultivo para clínicas, hospitais públicos e privados, consultórios e centros de recuperação.",
      "Com materiais resistentes a desinfetantes hospitalares e facilidade de manutenção, os equipamentos Levita atendem às exigências sanitárias rigorosas, unindo estética funcional, ergonomia e custo-benefício para investimentos em infraestrutura médica.",
    ],
  },
  fujifilm: {
    id: "fujifilm",
    name: "Fujifilm Healthcare",
    slug: "fujifilm",
    metaTitle: "Soluções Fujifilm Healthcare | Medical Plus",
    metaDescription:
      "Conheça as soluções de diagnóstico por imagem Fujifilm Healthcare representadas pela Medical Plus: raio X, mamografia, tomografia e TI médica no ES.",
    tagline: "Inovação tecnológica e precisão em diagnóstico por imagem médica",
    description:
      "A Fujifilm Healthcare é líder global no desenvolvimento de tecnologias para diagnóstico por imagem, reconhecida pela nitidez de imagem, baixa dosagem de radiação e fluxos de trabalho otimizados para clínicas de imagem e centros hospitalares.",
    ctaText: "Quero informações sobre Fujifilm",
    whatsappMessage: SITE_CONFIG.whatsappMessages.fujifilm,
    notice:
      "Importante: A Medical Plus não comercializa a linha de ultrassom Fujifilm. Consulte nossa equipe para confirmar disponibilidade técnica e configurações das soluções de imagem listadas.",
    categories: [
      {
        title: "Radiografia Digital e Convencional (Raio X)",
        description:
          "Sistemas radiológicos fixos e emissores de alta performance, proporcionando imagens diagnósticas com alto contraste e fluxo digital rápido.",
        items: [
          "Detectores digitais DR (FDR D-EVO) de alta sensibilidade",
          "Salas de raio X completas para rotinas hospitalares e ambulatoriais",
          "Soluções de digitalização com processamento de imagem patenteado",
        ],
      },
      {
        title: "Mamografia Digital",
        description:
          "Sistemas de mamografia desenhados para maximizar a detecção precoce de lesões com compressão suave e conforto para a paciente.",
        items: [
          "Mamógrafos digitais de alta resolução para rastreamento e diagnóstico",
          "Tecnologia de filtros e algoritmos para redução de dose",
          "Workstations dedicadas para laudos mamográficos de precisão",
        ],
      },
      {
        title: "Tomografia Computadorizada (TC)",
        description:
          "Scanners tomográficos que combinam velocidade de varredura, qualidade visual apurada e recursos avançados de reconstrução.",
        items: [
          "Sistemas multislice para rotina de urgência, oncologia e exames gerais",
          "Algoritmos de inteligência de imagem para otimização de dose",
          "Gantry espaçoso e ferramentas ergonômicas para posicionamento do paciente",
        ],
      },
      {
        title: "Ressonância Magnética (RM)",
        description:
          "Sistemas de ressonância magnética que aliam conforto ao paciente com alto rendimento operacional e detalhamento tecidual.",
        items: [
          "Equipamentos com design aberto ou túnel confortável",
          "Sequências rápidas para redução do tempo de exame",
          "Aplicações neurológicas, ortopédicas e abdominais avançadas",
        ],
      },
      {
        title: "TI para Saúde e Sistemas PACS",
        description:
          "Plataformas para gerenciamento de exames, visualização médica, distribuição de laudos e arquivamento seguro de imagens (PACS/VNA).",
        items: [
          "Servidores e plataformas de visualização diagnóstica corporativa",
          "Integração com prontuários eletrônicos (PEP) e sistemas RIS/HIS",
          "Ferramentas de laudo estruturado e telessaúde",
        ],
      },
    ],
    features: [
      {
        title: "Padrão de Imagem Consagrado",
        description:
          "Algoritmos exclusivos de processamento gráfico garantem visualização detalhada de estruturas anatômicas sutis.",
      },
      {
        title: "Protocolos de Redução de Dose",
        description:
          "Tecnologias desenvolvidas para manter a máxima acurácia diagnóstica com a menor exposição do paciente à radiação.",
      },
      {
        title: "Integração Hospitalar Completa",
        description:
          "Sistemas com total compatibilidade com protocolos DICOM, permitindo conexão direta com infraestruturas existentes.",
      },
      {
        title: "Orientação Especializada",
        description:
          "Apoiamos gestores e médicos radiologistas na especificação da solução mais compatível com o perfil clínico da instituição.",
      },
    ],
    seoParagraphs: [
      "O setor de diagnóstico por imagem exige equipamentos com confiabilidade operacional ininterrupta e excelência visual. As soluções Fujifilm Healthcare entregam tecnologia de ponta para instituições que buscam elevar a precisão de seus laudos e modernizar seus parques tecnológicos.",
      "A Medical Plus oferece atendimento consultivo e próximo, orientando clínicas e hospitais na escolha das configurações de raio X, mamografia, tomografia e TI médica mais adequadas para sua demanda diagnóstica no estado do Espírito Santo e regiões vizinhas.",
    ],
  },
  carbogel: {
    id: "carbogel",
    name: "Carbogel",
    slug: "carbogel",
    metaTitle: "Carbogel e Aquecedor de Gel | Medical Plus",
    metaDescription:
      "Linha completa de géis para ultrassom, gel condutor para ECG e aquecedor de gel GELKENT Carbogel na Medical Plus. Atendimento especializado no ES.",
    tagline: "Géis condutores de alta qualidade e aquecedores térmicos para exames",
    description:
      "A Carbogel é uma das marcas mais tradicionais do Brasil em meios de contato para exames médicos. Seus produtos oferecem alta condutividade acústica e elétrica, consistência ideal e total respeito à integridade da pele do paciente e dos transdutores.",
    ctaText: "Quero informações sobre Carbogel",
    whatsappMessage: SITE_CONFIG.whatsappMessages.carbogel,
    categories: [
      {
        title: "Gel para Ultrassom e Ecografia",
        description:
          "Gel hidrossolúvel de viscosidade homogênea, sem bolhas de ar, formulado para otimizar a propagação de ondas ultrassônicas.",
        items: [
          "Embalagens econômicas (bombonas de 5kg) e frascos aplicadores",
          "Fórmula não gordurosa, inodora e de fácil remoção",
          "Isento de sal e álcool, preservando a vida útil dos transdutores",
        ],
      },
      {
        title: "Gel Condutor para ECG e Desfibrilação",
        description:
          "Formulação especialmente desenvolvida para baixa resistência elétrica e captação fidedigna de sinais cardíacos.",
        items: [
          "Gel condutor para eletrocardiograma (ECG), ergometria e EEG",
          "Excelente transmissão de corrente sem gerar interferências no traçado",
          "Adequado para uso ambulatorial e emergências hospitalares",
        ],
      },
      {
        title: "Aquecedor de Gel Carbogel / GELKENT",
        description:
          "Equipamento para aquecimento e controle de temperatura do gel de ultrassom, proporcionando muito mais conforto ao paciente.",
        items: [
          "Aquecimento uniforme e termostato de controle seguro",
          "Design compacto para bancadas e carrinhos de ultrassonografia",
          "Diferencial humanizado em exames obstétricos, pediátricos e gerais",
        ],
      },
      {
        title: "Insumos Clínicos Complementares",
        description:
          "Produtos formulados com rigor sanitário e padrões de controle de qualidade para rotinas de diagnóstico.",
        items: [
          "Linha de géis e soluções para procedimentos específicos",
          "Compatibilidade com sondas e transdutores de todas as marcas",
        ],
      },
    ],
    features: [
      {
        title: "Não Danifica os Transdutores",
        description:
          "Formulação isenta de ingredientes abrasivos, sais corrosivos e álcool, protegendo as membranas acústicas das sondas.",
      },
      {
        title: "Alta Transparência Acústica",
        description:
          "Eliminação de microbolhas que poderiam causar atenuação das ondas sonoras e artefatos na formação da imagem.",
      },
      {
        title: "Conforto Térmico",
        description:
          "A integração do gel ao aquecedor GELKENT eleva a percepção de cuidado humanizado na clínica de diagnóstico.",
      },
      {
        title: "Fornecimento Regular",
        description:
          "Atendimento ágil para garantir que sua clínica ou hospital mantenha estoque constante de insumos essenciais.",
      },
    ],
    seoParagraphs: [
      "A qualidade do gel de contato é um dos fatores fundamentais para exames de ultrassonografia nítidos e eletrocardiogramas sem interferência. O uso de géis de procedência comprovada como a linha Carbogel evita a corrosão precoce de sondas e transdutores, equipamentos de alto custo que requerem cuidados contínuos.",
      "Além dos géis condutores, a Medical Plus disponibiliza informações sobre os aquecedores de gel GELKENT da Carbogel, permitindo que consultórios, clínicas de ginecologia/obstetrícia e centros de radiologia ofereçam uma experiência muito mais acolhedora a seus pacientes.",
    ],
  },
};
