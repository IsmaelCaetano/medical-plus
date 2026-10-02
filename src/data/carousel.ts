export interface CarouselSlide {
  id: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "amulet-innovality",
    category: "Mamografia Digital",
    title: "AMULET Innovality",
    image: "/images/carousel/amulet-innovality.png",
    imageAlt: "AMULET Innovality - sistema de mamografia digital",
    whatsappMessage:
      "Olá, Claudiomiro! Vim pelo site da Medical Plus e gostaria de informações sobre o FUJIFILM AMULET Innovality.",
  },
  {
    id: "fdr-smart-x",
    category: "Radiografia Digital",
    title: "FDR Smart X",
    image: "/images/carousel/fdr-smart-x.png",
    imageAlt: "FDR Smart X - sistema de radiografia digital",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de mais informações sobre o FUJIFILM FDR Smart X.",
  },
  {
    id: "fdr-nano",
    category: "Raio X Digital Móvel",
    title: "FDR nano",
    image: "/images/carousel/fdr-nano.png",
    imageAlt: "FDR nano - equipamento móvel de radiografia digital",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre o equipamento móvel de raios X FUJIFILM FDR nano.",
  },
  {
    id: "fdr-xair",
    category: "Raio X Portátil",
    title: "FDR Xair",
    image: "/images/carousel/fdr-xair.png",
    imageAlt: "FDR Xair - unidade portátil de raios X",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre o FUJIFILM FDR Xair.",
  },
  {
    id: "primus-dxa",
    category: "Densitometria Óssea",
    title: "PRIMUS DXA",
    image: "/images/carousel/primus-dxa.png",
    imageAlt: "PRIMUS - sistema de densitometria óssea DXA",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre o densitômetro ósseo PRIMUS.",
  },
  {
    id: "carbogel-gel",
    category: "Gel e Acessórios",
    title: "Carbogel",
    image: "/images/carousel/carbogel-gel.png",
    imageAlt: "Gel para ultrassom e aquecedor de gel",
    whatsappMessage:
      "Olá, Claudiomiro! Gostaria de informações sobre produtos Carbogel e aquecedor de gel.",
  },
  {
    id: "assistencia-tecnica",
    category: "Assistência Técnica",
    title: "Assistência Técnica",
    image: "/images/carousel/assistencia-tecnica.png",
    imageAlt: "Assistência técnica em equipamentos médicos de diagnóstico por imagem",
    whatsappMessage:
      "Olá, Claudiomiro! Preciso de assistência técnica para um equipamento médico.",
  },
];
