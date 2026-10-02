export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string; description?: string }[];
}

export const MAIN_NAV: NavItem[] = [
  { title: "Início", href: "/" },
  {
    title: "Equipamentos",
    href: "/equipamentos-medicos-hospitalares",
  },
  {
    title: "Marcas",
    href: "/marcas",
    children: [
      {
        title: "Levita",
        href: "/marcas/levita",
        description: "Mobiliário e equipamentos hospitalares ergonômicos e duráveis",
      },
      {
        title: "Fujifilm Healthcare",
        href: "/marcas/fujifilm",
        description: "Soluções avançadas em radiologia, tomografia e diagnóstico",
      },
      {
        title: "Carbogel",
        href: "/marcas/carbogel",
        description: "Géis condutores para exames clínicos e aquecedores de gel",
      },
    ],
  },
  {
    title: "Assistência Técnica",
    href: "/assistencia-tecnica",
    children: [
      {
        title: "Ultrassom",
        href: "/assistencia-tecnica/ultrassom",
        description: "Manutenção preventiva, corretiva e suporte para aparelhos de ultrassonografia",
      },
      {
        title: "Raio X",
        href: "/assistencia-tecnica/raio-x",
        description: "Suporte e avaliação técnica para sistemas radiológicos fixos e móveis",
      },
      {
        title: "Mamógrafo",
        href: "/assistencia-tecnica/mamografo",
        description: "Ajustes, manutenção e calibração de sistemas de mamografia",
      },
      {
        title: "Densitômetro Ósseo",
        href: "/assistencia-tecnica/densitometro-osseo",
        description: "Manutenção técnica de equipamentos de densitometria óssea",
      },
      {
        title: "Tomografia Computadorizada",
        href: "/assistencia-tecnica/tomografia-computadorizada",
        description: "Suporte especializado para sistemas tomográficos",
      },
    ],
  },
  { title: "Sobre", href: "/sobre" },
  { title: "Contato", href: "/contato" },
];

export const FOOTER_LINKS = {
  solucoes: [
    { title: "Equipamentos Hospitalares", href: "/equipamentos-medicos-hospitalares" },
    { title: "Móveis Hospitalares Levita", href: "/marcas/levita" },
    { title: "Diagnóstico por Imagem Fujifilm", href: "/marcas/fujifilm" },
    { title: "Géis e Insumos Carbogel", href: "/marcas/carbogel" },
  ],
  assistencia: [
    { title: "Assistência de Ultrassom", href: "/assistencia-tecnica/ultrassom" },
    { title: "Assistência de Raio X", href: "/assistencia-tecnica/raio-x" },
    { title: "Assistência de Mamógrafo", href: "/assistencia-tecnica/mamografo" },
    { title: "Assistência de Densitômetro", href: "/assistencia-tecnica/densitometro-osseo" },
    { title: "Assistência de Tomografia", href: "/assistencia-tecnica/tomografia-computadorizada" },
  ],
  institucional: [
    { title: "Sobre a Medical Plus", href: "/sobre" },
    { title: "Fale Conosco", href: "/contato" },
    { title: "Política de Privacidade", href: "/politica-de-privacidade" },
  ],
};
