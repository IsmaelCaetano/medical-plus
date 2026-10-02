export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string; description?: string }[];
}

export const MAIN_NAV: NavItem[] = [
  { title: "Início", href: "/" },
  {
    title: "Equipamentos",
    href: "/equipamentos",
    children: [
      {
        title: "Todos os Equipamentos",
        href: "/equipamentos",
        description: "Visão geral de equipamentos médico-hospitalares no ES",
      },
      {
        title: "Diagnóstico por Imagem",
        href: "/equipamentos/diagnostico-por-imagem",
        description: "Radiologia, raio X, mamografia, tomografia e TI médica",
      },
      {
        title: "Soluções Fujifilm",
        href: "/equipamentos/fujifilm",
        description: "Sistemas radiológicos e de imagem diagnóstica de alta precisão",
      },
      {
        title: "Mobiliário Hospitalar",
        href: "/mobiliario-hospitalar",
        description: "Camas de UTI, macas, poltronas e móveis hospitalares Levita",
      },
      {
        title: "Linha Carbogel",
        href: "/carbogel",
        description: "Géis condutores para exames clínicos e aquecedores de gel",
      },
    ],
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
    { title: "Equipamentos Médicos", href: "/equipamentos" },
    { title: "Diagnóstico por Imagem", href: "/equipamentos/diagnostico-por-imagem" },
    { title: "Móveis Hospitalares Levita", href: "/mobiliario-hospitalar/levita" },
    { title: "Equipamentos Fujifilm", href: "/equipamentos/fujifilm" },
    { title: "Gel para Ultrassom Carbogel", href: "/carbogel/gel-para-ultrassom" },
    { title: "Aquecedor de Gel Carbogel", href: "/carbogel/aquecedor-de-gel" },
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
