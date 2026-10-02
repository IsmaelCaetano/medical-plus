# Guia de Branding — Medical Plus

Este documento estabelece as diretrizes de identidade visual, tom de voz, design system e boas práticas de aplicação da marca **Medical Plus**.

---

## 1. Posicionamento e Essência da Marca

- **Marca:** Medical Plus
- **Atuação:** Representação comercial de equipamentos médico-hospitalares e assistência técnica especializada.
- **Público-alvo:** Clínicas médicas, consultórios, hospitais, maternidades, centros de diagnóstico por imagem e setores de engenharia clínica no Espírito Santo e região.
- **Personalidade da Marca:** Técnica, confiável, próxima, transparente, consultiva e profissional.
- **Princípio Cardeal:** *Credibilidade antes de efeitos visuais. Clareza antes de volume de informação. Contato direto antes de complexidade.*

### A Medical Plus É:
- Parceira técnica e comercial na especificação de equipamentos e mobiliário médico.
- Prestadora especializada e independente de suporte e manutenção técnica em equipamentos de imagem.
- Canal de atendimento humano e ágil liderado por Claudiomiro Marques Caetano.

### A Medical Plus NÃO É:
- E-commerce ou marketplace de produtos baratos.
- Fabricante dos equipamentos comercializados.
- Clínica médica ou hospital de atendimento a pacientes finais.
- Assistência técnica exclusiva ou autorizada sem convênio documental comprovado.

---

## 2. Paleta de Cores e Tokens Visuais

A paleta foi extraída diretamente da identidade visual original da Medical Plus, balanceando tons de verde que transmitem saúde, sustentabilidade e tecnologia biomédica.

| Papel no Design System | Nome do Token | Hexadecimal | Uso Principal |
|---|---|---|---|
| **Verde Principal** | `brand-green` | `#83AB49` | Botões primários, destaques, ícones ativos, badges |
| **Verde Hover** | `brand-greenHover` | `#71953B` | Estado de foco/hover de botões e links principais |
| **Verde Escuro / Contraste** | `brand-darkGreen` | `#4E672D` | Subtítulos, textos de destaque, links com alto contraste |
| **Verde Secundário / Lima** | `brand-lightLime` | `#C9D997` | Elementos gráficos decorativos, acentos caligráficos |
| **Fundo Suave / Soft Lime** | `brand-softLime` | `#EEF4DF` | Background de badges, áreas de destaque, cards de apoio |
| **Texto Principal** | `brand-textMain` | `#243126` | Títulos, títulos de cards, parágrafos principais (WCAG AAA) |
| **Texto Secundário / Muted** | `brand-textMuted` | `#5F685D` | Descrições secundárias, legendas, breadcrumbs |
| **Fundo Principal** | `white` | `#FFFFFF` | Fundo principal da página e base dos cards |
| **Fundo Alternativo** | `brand-bgAlt` | `#F7F9F3` | Alternância de seções, caixas informativas |
| **Bordas** | `brand-border` | `#E3E9DA` | Linhas divisórias, contornos sutis de cards e inputs |

### Regra Crítica de Contraste (Acessibilidade WCAG)
- **NUNCA** utilize o tom verde-claro (`#C9D997`) em tipografia pequena sobre fundo branco.
- Para textos, utilize prioritariamente `#243126` ou `#4E672D`.
- Todos os botões primários utilizam fundo `#83AB49` com texto branco puro (`#FFFFFF`), garantindo contraste mínimo de 3:1 em elementos de grande dimensão e legibilidade imediata.

---

## 3. Tipografia

- **Títulos e Headings (H1 a H4):** `Manrope` (pesos 600 Semi-Bold, 700 Bold, 800 Extra-Bold).
  - Traz desenho geométrico limpo, moderno e com excelente estabilidade visual.
- **Corpo de Texto e Interface:** `Inter` (pesos 400 Regular, 500 Medium, 600 Semi-Bold).
  - Excelente legibilidade em telas móveis e densidades de pixel variadas.
- **Assinatura do Logotipo:** A palavra “Plus” pode utilizar traço cursivo/caligráfico apenas na assinatura visual da marca. **É terminantemente proibido utilizar fontes cursivas no corpo do site, tabelas ou formulários.**

---

## 4. Uso do Logotipo

Arquivos oficiais mantidos em `/public/brand/`:
- `medicalplus-logo-horizontal.png` & `medicalplus-logo-horizontal.svg`: Versão horizontal principal com símbolo e tipografia alinhados.
- `medicalplus-symbol.svg` & `medicalplus-symbol.png`: Símbolo isolado (cruz estilizada em fitas verdes contínuas).
- `favicon.svg` & `favicon.ico`: Ícone vetorial para abas de navegadores e marcadores.

### Diretrizes de Aplicação:
1. **Área de Respiro:** Manter espaço livre mínimo equivalente à altura do símbolo ao redor do logo.
2. **Fundo Ideal:** Aplicar preferencialmente sobre fundo branco (`#FFFFFF`) ou fundo suave (`#F7F9F3`).
3. **Proporções:** Jamais achatar, esticar ou rotacionar a marca.
4. **Resolução:** Utilizar `next/image` preservando a proporção de aspecto natural.

---

## 5. Componentes e Estilos de Interface

### Botões Primários (Ação Principal)
- **Fundo:** `#83AB49`
- **Hover:** `#71953B`
- **Texto:** Branco (`#FFFFFF`), peso 600 a 700.
- **Borda / Raio:** `rounded-xl` (12px).
- **Altura Mínima:** 44px a 48px (para conformidade de toque mobile).
- **Ícone:** Sempre acompanhado de ícone linear explicativo (ex: `MessageCircle`).

### Botões Secundários
- **Fundo:** Branco (`#FFFFFF`) ou `#F7F9F3`.
- **Texto:** `#4E672D`
- **Borda:** 1px sólido `#E3E9DA`.
- **Hover:** Fundo `#EEF4DF`.

### Cards de Conteúdo
- **Fundo:** Branco puro (`#FFFFFF`).
- **Borda:** 1px sólido `#E3E9DA`.
- **Raio de Borda:** `rounded-2xl` (16px).
- **Sombra:** `shadow-xs` ou `shadow-sm`, evoluindo sutilmente para `shadow-md` no hover.
- **Espaçamento Interno:** 24px (mobile) a 32px (desktop).

---

## 6. Tom de Voz e Diretrizes de Redação

### Adotar:
- **Técnico e Seguro:** Demonstrar domínio sobre terminologia de equipamentos e rotina hospitalar.
- **Direto e Sem Rodeios:** Ir direto ao ponto sobre o que o equipamento faz ou como o serviço é prestado.
- **Acolhedor e Acessível:** Facilitar o contato com o responsável técnico sem jargões desnecessários.

### Evitar:
- Promessas genéricas de vendas agressivas (“Melhores preços do Brasil”, “Líder absoluto de mercado”).
- Métricas não comprovadas (“Mais de 50.000 clientes atendidos”).
- Depoimentos fictícios ou fotos de modelos como supostos clientes.
- Afirmações de exclusividade de marcas sem respaldo documental.

---

## 7. Diretrizes para Uso de Imagens

1. **Fotografia Real:** Priorizar fotos de equipamentos reais autorizadas pelos fabricantes parceiros.
2. **Neutralidade:** Não exibir imagens de equipamentos não comercializados de forma que induza o cliente ao erro.
3. **Imagens Fujifilm:** **NÃO** exibir fotos ou materiais de ultrassom com o logotipo da Fujifilm. A Medical Plus não comercializa a linha de ultrassom desta marca.
4. **Legendas e Acessibilidade:** Todas as imagens devem contar com atributo `alt` descritivo e contextual.
