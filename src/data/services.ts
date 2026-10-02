import { SITE_CONFIG } from "./site-config";

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  equipmentCovered: string[];
  symptoms: {
    title: string;
    description: string;
  }[];
  servicesOffered: {
    title: string;
    description: string;
  }[];
  requestSteps: string[];
  disclaimer: string;
  seoParagraphs: string[];
}

export const SERVICES: Record<string, ServiceData> = {
  ultrassom: {
    id: "ultrassom",
    slug: "ultrassom",
    title: "Assistência Técnica para Ultrassom e Ultrassonografia",
    shortTitle: "Ultrassom",
    metaTitle: "Assistência Técnica de Ultrassom | Medical Plus",
    metaDescription:
      "Assistência técnica especializada em aparelhos de ultrassom no ES. Manutenção preventiva, corretiva e suporte técnico para ultrassonografia.",
    tagline:
      "Manutenção preventiva, corretiva e diagnóstico técnico para aparelhos de ultrassonografia e transdutores",
    description:
      "A Medical Plus oferece suporte técnico especializado para aparelhos de ultrassom utilizados em medicina diagnóstica, obstetrícia, cardiologia, ginecologia, fisioterapia e medicina veterinária. Atuamos com análise criteriosa para restabelecer a precisão das imagens e a estabilidade do sistema.",
    ctaText: "Solicitar assistência para ultrassom",
    whatsappMessage: SITE_CONFIG.whatsappMessages.ultrasoundAssistance,
    equipmentCovered: [
      "Ultrassons portáteis e de mesa",
      "Sistemas de ultrassonografia estacionários (consoles)",
      "Ultrassons para ecocardiografia e cardiologia",
      "Ultrassons para ginecologia, obstetrícia e medicina fetal (3D / 4D)",
      "Avaliação de integridade de transdutores lineares, convexos, endocavitários e setoriais",
    ],
    symptoms: [
      {
        title: "Ruídos ou linhas pretas na imagem acústica",
        description:
          "Presença de sombras verticais, manchas escuras ou perda de sensibilidade em áreas específicas do campo visual do transdutor.",
      },
      {
        title: "Erros de inicialização ou reinicializações espontâneas",
        description:
          "O sistema trava durante a inicialização, apresenta tela azul ou reinicia repentinamente durante o procedimento clínico.",
      },
      {
        title: "Transdutor não reconhecido ou com conector danificado",
        description:
          "Mensagens de sonda desconectada, pinos tortos no conector, cabo com fissuras ou membrana acústica desgastada.",
      },
      {
        title: "Aquecimento excessivo ou alertas sonoros de ventilação",
        description:
          "Acúmulo de poeira nas ventoinhas, falha em coolers internos ou desarmes por sobretemperatura da fonte de alimentação.",
      },
      {
        title: "Falhas de periféricos, trackball ou gravação DICOM",
        description:
          "Teclado de controle não respondendo, trackball travando ou incapacidade de exportar laudos e exames para a rede.",
      },
    ],
    servicesOffered: [
      {
        title: "Avaliação Técnica e Diagnóstico de Falhas",
        description:
          "Testes funcionais na placa-mãe, módulos de canal, placas de transmissão/recepção, fontes e conexões de transdutores.",
      },
      {
        title: "Manutenção Preventiva Periódica",
        description:
          "Higienização interna completa, desobstrução de coolers, conferência de voltagens, inspeção de cabos e atualização de rotinas de calibração.",
      },
      {
        title: "Manutenção Corretiva Especializada",
        description:
          "Reparo ou substituição de placas de alimentação, placas de processamento digital, periféricos de controle e circuitos lógicos.",
      },
      {
        title: "Suporte e Configuração de Imagem",
        description:
          "Ajustes de presets, configuração de rede DICOM/PACS e orientação aos operadores para preservação do equipamento.",
      },
    ],
    requestSteps: [
      "Informe a marca e modelo exato do seu ultrassom.",
      "Descreva o sintoma observado ou a mensagem de erro que aparece na tela.",
      "Se possível, fotografe a etiqueta traseira com número de série e envie um vídeo curto da falha.",
      "Informe a cidade e o nome da clínica ou instituição no Espírito Santo ou região.",
      "Nossa equipe técnica avaliará prontamente a viabilidade de atendimento e os passos recomendados.",
    ],
    disclaimer:
      "Atendimento prestado de forma independente e especializada. A disponibilidade de reparo e peças é avaliada caso a caso conforme fabricante, arquitetura do aparelho e ano de fabricação.",
    seoParagraphs: [
      "A ultrassonografia é um dos exames de imagem mais frequentes na prática clínica. Quando o aparelho de ultrassom apresenta instabilidade ou defeito, a agenda de exames fica comprometida e pacientes deixam de ser atendidos. Por isso, a assistência técnica de ultrassom deve priorizar agilidade diagnóstica e soluções confiáveis.",
      "A Medical Plus atende clínicas médicas, centros de diagnóstico e consultórios no Espírito Santo, oferecendo manutenção preventiva e corretiva para ultrassons. A realização periódica da manutenção preventiva reduz drasticamente o risco de paradas não programadas e preserva os transdutores, componentes de alto custo do sistema.",
    ],
  },
  "raio-x": {
    id: "raio-x",
    slug: "raio-x",
    title: "Assistência Técnica para Equipamentos de Raio X",
    shortTitle: "Raio X",
    metaTitle: "Assistência Técnica de Raio X | Medical Plus",
    metaDescription:
      "Assistência técnica especializada para aparelhos de raio X fixos e móveis no ES. Manutenção preventiva, diagnóstico de falhas e suporte técnico.",
    tagline:
      "Suporte técnico, manutenção preventiva e corretiva para sistemas de radiografia médica",
    description:
      "Prestamos suporte técnico especializado para sistemas radiológicos fixos, emissores móveis e estações de radiografia. Trabalhamos para garantir que seu equipamento opere dentro dos parâmetros seguros de calibração, tempo de exposição e estabilidade de disparo.",
    ctaText: "Solicitar assistência para Raio X",
    whatsappMessage: SITE_CONFIG.whatsappMessages.xrayAssistance,
    equipmentCovered: [
      "Equipamentos de raio X convencionais fixos para salas de radiologia",
      "Sistemas de raio X móveis para leitos e enfermarias",
      "Mesas de comando radiológico e geradores de alta tensão",
      "Colimadores e sistemas de posicionamento mecânico",
      "Avaliação de integração com digitalizadores e detectores digitais",
    ],
    symptoms: [
      {
        title: "Falha de disparo ou interrupção do feixe",
        description:
          "O comando é acionado mas o gerador não efetua a exposição, apresentando código de erro ou bloqueio de segurança.",
      },
      {
        title: "Erros de mA/kV ou descalibração na dose",
        description:
          "Divergência entre os parâmetros selecionados no painel e a tensão/corrente efetivamente entregue ao tubo de raios X.",
      },
      {
        title: "Travamento mecânico de braços, calhas e freios",
        description:
          "Dificuldade na movimentação da coluna porta-tubo, mesa de exame ou falha nos freios eletromagnéticos.",
      },
      {
        title: "Superaquecimento do tubo de raios X ou da cúpula",
        description:
          "Alertas de capacidade térmica do ânodo, vazamento de óleo isolante ou ruídos anormais no rotor da cúpula.",
      },
      {
        title: "Defeito no colimador luminoso ou lâmpada queimada",
        description:
          "Campo de colimação desajustado, temporizador luminoso inoperante ou lâmpada de centragem inativa.",
      },
    ],
    servicesOffered: [
      {
        title: "Diagnóstico e Testes Elétricos",
        description:
          "Verificação da fonte geradora, inversores, circuito de filamento, placas de disparo e bancos de capacitores.",
      },
      {
        title: "Manutenção Mecânica e Eletromagnética",
        description:
          "Lubrificação de guias, regulagem de contra-pesos, ajuste de freios e alinhamento do feixe com o bucky.",
      },
      {
        title: "Manutenção Preventiva Periódica",
        description:
          "Aperto de conexões elétricas, inspeção de cabos de alta tensão, limpeza geral e testes de repetibilidade dos disparos.",
      },
      {
        title: "Apoio Técnico em Atualizações",
        description:
          "Orientação técnica para modernização e retrofit para radiologia digital (CR / DR).",
      },
    ],
    requestSteps: [
      "Informe se o equipamento é fixo ou móvel, juntamente com fabricante e modelo.",
      "Indique o sintoma ou o código de erro apresentado no painel.",
      "Informe a localização da sala no Espírito Santo.",
      "Entre em contato pelo WhatsApp para alinharmos a avaliação técnica.",
    ],
    disclaimer:
      "Serviço técnico especializado independente. Testes radiométricos e laudos de física médica devem ser realizados em conjunto com o responsável de proteção radiológica da instituição.",
    seoParagraphs: [
      "Salas de radiografia exigem máxima segurança operacional. Qualquer defeito mecânico nos freios ou instabilidade elétrica no gerador de alta tensão pode expor pacientes a doses desnecessárias ou interromper o fluxo de atendimento em prontos-socorros e centros de diagnóstico.",
      "A assistência técnica em raio X da Medical Plus oferece avaliação criteriosa para equipamentos instalados no Espírito Santo, buscando identificar a causa raiz da falha e restabelecer a operacionalidade segura da sala de exames.",
    ],
  },
  mamografo: {
    id: "mamografo",
    slug: "mamografo",
    title: "Assistência Técnica para Mamógrafo",
    shortTitle: "Mamógrafo",
    metaTitle: "Assistência Técnica de Mamógrafo | Medical Plus",
    metaDescription:
      "Assistência técnica especializada em mamógrafos no Espírito Santo. Manutenção preventiva, diagnóstico e calibração para clínicas de mamografia.",
    tagline:
      "Precisão e confiabilidade para equipamentos de mamografia analógica e digital",
    description:
      "A mamografia exige controle de qualidade e precisão técnica rigorosa para garantir o diagnóstico precoce de alterações na mama. A Medical Plus disponibiliza suporte técnico especializado para mamógrafos, com atenção especial aos movimentos mecânicos de compressão, gerador e sistemas de imagem.",
    ctaText: "Solicitar assistência para Mamógrafo",
    whatsappMessage: SITE_CONFIG.whatsappMessages.mammographyAssistance,
    equipmentCovered: [
      "Mamógrafos convencionais com bucky 18x24 e 24x30",
      "Mamógrafos digitais de alta resolução (Full Field Digital Mammography)",
      "Sistemas de compressão motorizada e pedais de comando",
      "Workstations de controle e aquisição mamográfica",
    ],
    symptoms: [
      {
        title: "Falhas no sistema de compressão ou descompressão automática",
        description:
          "Compressor não atinge ou não mantém a força adequada (em daN), ou não libera o alívio automático após o disparo.",
      },
      {
        title: "Artefatos ou riscos nas imagens mamográficas",
        description:
          "Presença de linhas verticais, falhas de leitura no detector ou distorções no contraste dos tecidos.",
      },
      {
        title: "Erros de rotação do gantry e angulação",
        description:
          "Dificuldade de travar nos ângulos padrão (crânio-caudal ou médio-lateral oblíqua) ou ruídos na movimentação.",
      },
      {
        title: "Falhas de comunicação entre console e estativa",
        description:
          "Erros de timeout, problemas no cabo de fibra ótica ou recusa de parametrização da dose automática.",
      },
    ],
    servicesOffered: [
      {
        title: "Inspeção do Mecanismo de Compressão",
        description:
          "Calibração de células de carga, conferência da pressão de compressão e teste dos comandos manuais e pedais de emergência.",
      },
      {
        title: "Manutenção do Gerador de Alta Frequência",
        description:
          "Conferência de estabilidade de kV, tempo de exposição (mAs) e verificação do tubo de ânodo giratório com filtro Mo/Rh.",
      },
      {
        title: "Plano Preventivo Semestral/Anual",
        description:
          "Alinhamento óptico, lubrificação de guias, checagem de aterramento e testes de consistência de disparo.",
      },
      {
        title: "Diagnóstico Corretivo em Painéis e Placas",
        description:
          "Reparo de placas de controle de motor, substituição de sensores ópticos e correção de falhas de software.",
      },
    ],
    requestSteps: [
      "Informe o modelo e a marca do mamógrafo.",
      "Relate se o problema é mecânico (compressão/gantry), elétrico (disparo) ou no detector digital.",
      "Envie fotos do display com eventuais códigos de erro.",
      "Agende a visita técnica com a equipe da Medical Plus.",
    ],
    disclaimer:
      "Manutenção e suporte especializado para equipamentos clínicos. Todo procedimento técnico obedece às normas de segurança da instituição e boas práticas de radiologia.",
    seoParagraphs: [
      "Exames de mamografia requerem uma relação milimétrica entre compressão confortável e qualidade da imagem radiológica. Qualquer falha técnica pode comprometer a detecção de microcalcificações ou gerar repetições de exame desnecessárias.",
      "Com a Medical Plus, clínicas de imagem e hospitais no Espírito Santo contam com um canal direto para avaliação de mamógrafos, minimizando interrupções na campanha de exames preventivos e mantendo o padrão exigido pelo corpo clínico.",
    ],
  },
  "densitometro-osseo": {
    id: "densitometro-osseo",
    slug: "densitometro-osseo",
    title: "Assistência Técnica para Densitômetro Ósseo",
    shortTitle: "Densitômetro Ósseo",
    metaTitle: "Assistência Técnica de Densitômetro Ósseo | Medical Plus",
    metaDescription:
      "Suporte e assistência técnica para densitômetro ósseo (DEXA) no Espírito Santo. Manutenção mecânica, calibração e suporte preventivo.",
    tagline:
      "Manutenção preventiva e corretiva para aparelhos de densitometria óssea por dupla energia de raio X (DEXA)",
    description:
      "A densitometria óssea é o padrão-ouro para avaliação de osteopenia e osteoporose. O equipamento exige movimentação micrométrica de sua ponteira de varredura e estabilidade no detector de duplo feixe. A Medical Plus oferece assistência técnica especializada para seu densitômetro.",
    ctaText: "Solicitar assistência para Densitômetro",
    whatsappMessage: SITE_CONFIG.whatsappMessages.boneDensitometryAssistance,
    equipmentCovered: [
      "Densitômetros ósseos com tecnologia DEXA / DXA (feixe em lápis ou leque)",
      "Sistemas de densitometria de corpo inteiro e pediátrica",
      "Mesas motorizadas com varredura em eixos X e Y",
      "Fantasmas (phantoms) de controle diário de calibração",
    ],
    symptoms: [
      {
        title: "Falha na calibração diária do fantasma (QA Test Fail)",
        description:
          "O teste diário de controle de qualidade não passa, acusando variação de densidade mineral óssea fora dos desvios aceitáveis.",
      },
      {
        title: "Travamento mecânico do braço de varredura",
        description:
          "O braço emperra durante a leitura da coluna ou fêmur, emitindo barulhos de correia patinando ou fim de curso.",
      },
      {
        title: "Perda de comunicação entre a mesa e o computador",
        description:
          "Erros de placa de interface (Serial / USB / Ethernet), impedindo a inicialização do software de escaneamento.",
      },
      {
        title: "Imagens com ruído ou falhas na segmentação óssea",
        description:
          "Detector com perda de sensibilidade em um dos níveis de energia (baixa ou alta energia), gerando erros nos cálculos de T-score.",
      },
    ],
    servicesOffered: [
      {
        title: "Calibração e Ajuste do Sistema de Dupla Energia",
        description:
          "Verificação da tensão nos dois níveis de emissão e estabilidade do detector para leitura precisa de BMD.",
      },
      {
        title: "Manutenção Mecânica de Eixos e Motores de Passo",
        description:
          "Limpeza, troca de correias de transmissão dentadas, lubrificação de fusos e alinhamento do gantry de escaneamento.",
      },
      {
        title: "Revisão Elétrica e Fontes Chaveadas",
        description:
          "Conferência de ruído elétrico, ripple de fontes de alimentação e isolamento de aterramento.",
      },
      {
        title: "Rotina Preventiva de Alta Precisão",
        description:
          "Testes com fantasma padrão para garantir repetibilidade antes de liberar o equipamento para pacientes.",
      },
    ],
    requestSteps: [
      "Informe a marca e o modelo do densitômetro (feixe pencil beam ou fan beam).",
      "Relate se a falha ocorre no teste com o fantasma de calibração ou durante a movimentação mecânica.",
      "Informe a localização da clínica no ES.",
      "Entre em contato pelo WhatsApp para orientações e agendamento.",
    ],
    disclaimer:
      "Atendimento técnico independente e especializado para equipamentos de densitometria óssea.",
    seoParagraphs: [
      "A confiabilidade de um densitômetro ósseo baseia-se na repetibilidade exata dos resultados ao longo dos meses e anos, uma vez que o tratamento do paciente é acompanhado pela comparação de exames anteriores. Qualquer descalibração mecânica ou flutuação de feixe pode alterar incorretamente o diagnóstico de osteoporose.",
      "Com o suporte da Medical Plus, sua instituição assegura que o densitômetro passe consistentemente nos controles diários e opere com seus eixos mecânicos alinhados e calibrados.",
    ],
  },
  "tomografia-computadorizada": {
    id: "tomografia-computadorizada",
    slug: "tomografia-computadorizada",
    title: "Assistência Técnica para Tomografia Computadorizada",
    shortTitle: "Tomografia",
    metaTitle: "Assistência Técnica de Tomografia | Medical Plus",
    metaDescription:
      "Assistência técnica especializada em tomografia computadorizada (TC) no Espírito Santo. Suporte técnico para gantry, mesa e consoles de comando.",
    tagline:
      "Suporte técnico especializado para scanners tomográficos hospitalares e ambulatoriais",
    description:
      "A tomografia computadorizada é um dos equipamentos mais complexos do diagnóstico hospitalar. A Medical Plus oferece consultoria e assistência técnica especializada para apoiar clínicas e hospitais na manutenção e operacionalidade de seus sistemas de tomografia.",
    ctaText: "Solicitar assistência para Tomografia",
    whatsappMessage: SITE_CONFIG.whatsappMessages.ctAssistance,
    equipmentCovered: [
      "Tomógrafos multislice (scanners multidetectores)",
      "Mesas de exame de alta precisão com controle de avanço milimétrico",
      "Sistemas de refrigeração e trocadores de calor do gantry",
      "Consoles de aquisição e estações de reconstrução volumétrica 3D",
    ],
    symptoms: [
      {
        title: "Alertas térmicos no tubo de raios X do tomógrafo",
        description:
          "Sistema interrompe varreduras longas por aquecimento excessivo do tubo ou problemas no circuito de refrigeração.",
      },
      {
        title: "Erros de rotação rápida do gantry",
        description:
          "Vibrações anormais, alertas no anel deslizante (slip ring) ou falha nos encoders de rotação contínua.",
      },
      {
        title: "Desvios no avanço da mesa do paciente",
        description:
          "Mesa não atinge a velocidade ou a posição programada durante helicoidais, causando artefatos de movimento.",
      },
      {
        title: "Artefatos em anel ou faixas nas imagens reconstruídas",
        description:
          "Detectores com calibração corrompida ou defeito em canais do sistema de aquisição de dados (DAS).",
      },
    ],
    servicesOffered: [
      {
        title: "Avaliação Preventiva de Estabilidade Térmica e Mecânica",
        description:
          "Inspeção dos sistemas de ventilação, radiadores, bombas de circulação e anéis coletores de dados e energia.",
      },
      {
        title: "Diagnóstico em Falhas Elétricas e de Controle",
        description:
          "Verificação de fontes de alimentação de alta e baixa voltagem, inversores de frequência e barramentos de fibra óptica.",
      },
      {
        title: "Suporte na Calibração de Detectores",
        description:
          "Rotinas de calibração de ar, água e fantasma para eliminação de artefatos em anel e homogeneidade do número de Hounsfield (HU).",
      },
      {
        title: "Orientação e Suporte Técnico Continuado",
        description:
          "Atendimento próximo para avaliar problemas emergentes e minimizar tempo de equipamento parado (downtime).",
      },
    ],
    requestSteps: [
      "Indique a marca, modelo e número de canais/cortes do tomógrafo.",
      "Descreva detalhadamente o sintoma e se a falha ocorre no gantry, tubo ou mesa.",
      "Envie relatório de erros gerado pelo console, se disponível.",
      "Contate nossa equipe pelo WhatsApp para avaliação técnica imediata.",
    ],
    disclaimer:
      "Prestação de serviços técnicos especializados. A realização de intervenções depende da disponibilidade de componentes e compatibilidade arquitetural do fabricante do equipamento.",
    seoParagraphs: [
      "Uma parada não programada em um tomógrafo computadorizado gera prejuízos financeiros significativos e paralisa o pronto-socorro de um hospital. A prontidão no atendimento e a correta identificação dos sintomas evitam substituições desnecessárias de peças de alto custo.",
      "A Medical Plus atua com foco na segurança técnica e no diagnóstico preciso, oferecendo às equipes de engenharia clínica e administradores hospitalares um canal direto para suporte e orientação em tomografia no Espírito Santo.",
    ],
  },
};
