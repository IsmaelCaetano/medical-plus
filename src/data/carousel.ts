export interface CarouselSlide {
  id: string;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  cta: string;
  whatsappMessage: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "amulet-innovality",
    category: "Mamografia Digital",
    title: "Tecnologia avançada para mamografia digital",
    description:
      "AMULET Innovality combina qualidade de imagem, conforto e eficiência para a rotina de diagnóstico.",
    bullets: [
      "Tomossíntese e imagens de alta definição",
      "Detector de conversão direta",
      "Conforto para a paciente e fluxo otimizado",
    ],
    image: "/images/carousel/amulet-innovality.png",
    imageAlt: "Sistema de mamografia digital FUJIFILM AMULET Innovality",
    cta: "Pedir informações",
    whatsappMessage:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre o FUJIFILM AMULET Innovality.",
  },
  {
    id: "fdr-smart-x",
    category: "Radiografia Digital",
    title: "Flexibilidade para diferentes demandas clínicas",
    description:
      "FDR Smart X é uma solução de radiografia digital para departamentos de imagem que buscam eficiência e versatilidade.",
    bullets: [
      "Configuração com tubo no teto ou no chão",
      "Compatível com painéis DR Fujifilm",
      "Fluxo de trabalho eficiente",
    ],
    image: "/images/carousel/fdr-smart-x.png",
    imageAlt: "Sistema de radiografia digital FUJIFILM FDR Smart X",
    cta: "Conhecer o FDR Smart X",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre o FUJIFILM FDR Smart X.",
  },
  {
    id: "fdr-nano",
    category: "Raio X Digital Móvel",
    title: "Mobilidade e agilidade na rotina",
    description:
      "FDR nano é uma solução móvel e compacta para radiografia digital, pensada para facilitar o atendimento e o posicionamento.",
    bullets: [
      "Estrutura compacta e fácil de manobrar",
      "Radiografia digital móvel",
      "Mais praticidade no fluxo de trabalho",
    ],
    image: "/images/carousel/fdr-nano.png",
    imageAlt: "Equipamento móvel de raios X FUJIFILM FDR nano",
    cta: "Pedir informações",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre o equipamento móvel de raios X FUJIFILM FDR nano.",
  },
  {
    id: "fdr-xair",
    category: "Raio X Portátil",
    title: "Leve, portátil e versátil",
    description:
      "FDR Xair leva a radiografia para diferentes cenários clínicos com praticidade e mobilidade.",
    bullets: [
      "Aproximadamente 3,5 kg",
      "Bateria para até 100 imagens",
      "Ideal para diferentes cenários clínicos",
    ],
    image: "/images/carousel/fdr-xair.png",
    imageAlt: "Unidade portátil de raios X FUJIFILM FDR Xair",
    cta: "Conhecer o FDR Xair",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre o FUJIFILM FDR Xair.",
  },
  {
    id: "primus-dxa",
    category: "Densitometria Óssea",
    title: "Avaliação óssea e composição corporal",
    description:
      "PRIMUS é um sistema DXA de corpo inteiro com recursos para avaliação de composição corporal.",
    bullets: [
      "DXA de corpo inteiro",
      "Composição corporal e gordura visceral",
      "Análises de coluna, fêmur e antebraço",
    ],
    image: "/images/carousel/primus-dxa.png",
    imageAlt: "Densitômetro ósseo PRIMUS",
    cta: "Pedir informações sobre PRIMUS",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre o densitômetro ósseo PRIMUS.",
  },
  {
    id: "carbogel-gel",
    category: "Gel e Acessórios",
    title: "Conforto e praticidade para exames",
    description:
      "Soluções Carbogel para a rotina clínica, com géis e aquecedor de gel para mais conforto no atendimento.",
    bullets: [
      "Gel para ultrassom",
      "Aquecedor de gel",
      "Mais conforto para paciente e profissional",
    ],
    image: "/images/carousel/carbogel-gel.png",
    imageAlt: "Produtos Carbogel e aquecedor de gel para exames",
    cta: "Quero informações",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre produtos Carbogel e aquecedor de gel.",
  },
  {
    id: "assistencia-tecnica",
    category: "Assistência Técnica",
    title: "Suporte especializado para diagnóstico por imagem",
    description:
      "Atendimento técnico para equipamentos médicos com foco em performance, segurança e continuidade operacional.",
    bullets: [
      "Ultrassom, raio X e mamógrafo",
      "Densitômetro ósseo e tomografia",
      "Manutenção preventiva e corretiva",
    ],
    image: "/images/carousel/assistencia-tecnica.png",
    imageAlt: "Assistência técnica em equipamentos de diagnóstico por imagem",
    cta: "Solicitar assistência",
    whatsappMessage:
      "Olá, Claudiomiro! Preciso de assistência técnica para um equipamento médico. Tipo: [EQUIPAMENTO]. Marca/modelo: [MARCA/MODELO]. Cidade: [CIDADE]. Problema: [DESCREVER].",
  },
];
