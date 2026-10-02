# Estratégia de SEO Técnico e Orgânico — Medical Plus

Este documento descreve a arquitetura de SEO, palavras-chave prioritárias, estrutura de metadados, marcação de dados estruturados e diretrizes de expansão orgânica para o site `medicalplus.com.br`.

---

## 1. Arquitetura Canônica e Domínio

- **Domínio Canônico:** `https://medicalplus.com.br`
- **Protocolo:** HTTPS obrigatório
- **Redirecionamento:** `www.medicalplus.com.br` -> `medicalplus.com.br` (configurado em `next.config.ts`)
- **Variável de Ambiente:** `NEXT_PUBLIC_SITE_URL=https://medicalplus.com.br` (com fallback seguro em código para evitar URLs de preview em metadados de produção)

---

## 2. Palavras-Chave Prioritárias

### Core B2B & Equipamentos Médicos:
- `equipamentos médicos`
- `equipamentos hospitalares`
- `equipamentos médico-hospitalares`
- `representante de equipamentos médicos ES`
- `móveis hospitalares`
- `camas hospitalares levita`
- `macas hospitalares`

### Assistência Técnica Especializada (Foco de Alta Conversão):
- `assistência técnica de ultrassom` (Prioridade Máxima)
- `manutenção de ultrassom`
- `manutenção de aparelho de ultrassom`
- `assistência técnica de raio x`
- `manutenção de raio x`
- `assistência técnica de mamógrafo`
- `manutenção de mamógrafo`
- `assistência técnica de densitômetro ósseo`
- `assistência técnica de tomografia computadorizada`

### Marcas e Produtos Específicos:
- `Levita móveis hospitalares`
- `Fujifilm Healthcare radiologia`
- `Carbogel gel para ultrassom`
- `aquecedor de gel GELKENT Carbogel`

### SEO Local (Espírito Santo):
- `equipamentos médicos Espírito Santo`
- `manutenção de ultrassom Vitória ES`
- `manutenção de equipamentos hospitalares Vila Velha / Serra / Cariacica`

---

## 3. Matriz de Rotas, Titles e Meta Descriptions

| Rota | Tag `<title>` | Meta Description (140-160 caracteres) | Prioridade no Sitemap |
|---|---|---|---|
| `/` | `Medical Plus \| Equipamentos Médicos e Assistência Técnica` | Representação comercial de equipamentos médico-hospitalares e assistência técnica especializada para clínicas, hospitais e centros de diagnóstico no ES. | 1.0 |
| `/equipamentos-medicos-hospitalares` | `Equipamentos Médico-Hospitalares \| Medical Plus` | Soluções em equipamentos médico-hospitalares, diagnóstico por imagem, móveis clínicos e insumos no Espírito Santo. Atendimento consultivo com a Medical Plus. | 0.9 |
| `/marcas` | `Marcas e Fabricantes Representados \| Medical Plus` | Conheça as marcas parceiras com as quais a Medical Plus trabalha no Espírito Santo: Levita Móveis Hospitalares, Fujifilm Healthcare e Carbogel. | 0.8 |
| `/marcas/levita` | `Móveis Hospitalares Levita \| Medical Plus` | Conheça a linha de móveis hospitalares Levita representada pela Medical Plus: camas hospitalares, macas, poltronas e mobiliário clínico durável no ES. | 0.9 |
| `/marcas/fujifilm` | `Soluções Fujifilm Healthcare \| Medical Plus` | Conheça as soluções de diagnóstico por imagem Fujifilm Healthcare representadas pela Medical Plus: raio X, mamografia, tomografia e TI médica no ES. | 0.9 |
| `/marcas/carbogel` | `Carbogel e Aquecedor de Gel \| Medical Plus` | Linha completa de géis para ultrassom, gel condutor para ECG e aquecedor de gel GELKENT Carbogel na Medical Plus. Atendimento especializado no ES. | 0.9 |
| `/assistencia-tecnica` | `Assistência Técnica Especializada em Equipamentos Médicos \| Medical Plus` | Assistência técnica para ultrassom, raio X, mamógrafo, densitômetro ósseo e tomografia no Espírito Santo. Manutenção preventiva e corretiva com a Medical Plus. | 0.9 |
| `/assistencia-tecnica/ultrassom` | `Assistência Técnica de Ultrassom \| Medical Plus` | Assistência técnica especializada em aparelhos de ultrassom no ES. Manutenção preventiva, corretiva e suporte técnico para ultrassonografia. | 0.95 |
| `/assistencia-tecnica/raio-x` | `Assistência Técnica de Raio X \| Medical Plus` | Assistência técnica especializada para aparelhos de raio X fixos e móveis no ES. Manutenção preventiva, diagnóstico de falhas e suporte técnico. | 0.85 |
| `/assistencia-tecnica/mamografo` | `Assistência Técnica de Mamógrafo \| Medical Plus` | Assistência técnica especializada em mamógrafos no Espírito Santo. Manutenção preventiva, diagnóstico e calibração para clínicas de mamografia. | 0.85 |
| `/assistencia-tecnica/densitometro-osseo` | `Assistência Técnica de Densitômetro Ósseo \| Medical Plus` | Suporte e assistência técnica para densitômetro ósseo (DEXA) no Espírito Santo. Manutenção mecânica, calibração e suporte preventivo. | 0.85 |
| `/assistencia-tecnica/tomografia-computadorizada` | `Assistência Técnica de Tomografia \| Medical Plus` | Assistência técnica especializada em tomografia computadorizada (TC) no Espírito Santo. Suporte técnico para gantry, mesa e consoles de comando. | 0.85 |
| `/sobre` | `Sobre a Medical Plus \| Equipamentos e Assistência Técnica` | Conheça a Medical Plus: representação comercial de equipamentos médico-hospitalares e assistência técnica especializada no Espírito Santo. | 0.7 |
| `/contato` | `Fale Conosco \| Contato \| Medical Plus` | Entre em contato com a Medical Plus no Espírito Santo. Fale diretamente com Claudiomiro Marques Caetano pelo WhatsApp (27) 99632-6622. | 0.8 |

---

## 4. Dados Estruturados (JSON-LD Schema.org)

Foram implementadas as seguintes marcações semânticas nativas em JSON-LD:

1. **`Organization`**: Identifica a entidade Medical Plus, razão social, logotipo, telefone de contato internacional (`+5527996326622`), área de atendimento no Brasil e idioma oficial.
2. **`WebSite`**: Identifica o site oficial, nome fantasia e publicador.
3. **`BreadcrumbList`**: Presente em todas as páginas internas para orientar motores de busca sobre a hierarquia de navegação e gerar rich snippets de breadcrumb nas SERPs do Google.
4. **`Service`**: Implementado especificamente em cada rota de assistência técnica (`ultrassom`, `raio-x`, `mamografo`, `densitometro-osseo`, `tomografia-computadorizada`), especificando o fornecedor, tipo do serviço e localização geográfica atendida (`Espírito Santo`).

---

## 5. Rastreamento e Indexação

- **`sitemap.xml`**: Gerado dinamicamente via `src/app/sitemap.ts`, listando todas as 14 rotas públicas com suas respectivas prioridades e frequências de atualização.
- **`robots.txt`**: Gerado dinamicamente via `src/app/robots.ts`, permitindo rastreamento irrestrito de todo o site, desautorizando apenas páginas técnicas privadas (como política de privacidade) e indicando o endereço exato do sitemap.
- **Open Graph & Twitter Cards**: Configurados globalmente em `src/app/layout.tsx` e estendidos nas rotas específicas para exibição otimizada em compartilhamentos de WhatsApp, LinkedIn e redes sociais.

---

## 6. Plano de Conteúdo Futuro (Evolução Orgânica)

Para fases subsequentes do projeto:
1. **Páginas de Cidades / SEO Local:** Criação de landing pages específicas para Vitória, Vila Velha, Serra e Linhares com termos voltados à manutenção médica regional.
2. **Fichas Técnicas por Categoria:** Ao avançar para a fase de catálogo, estruturar páginas individuais para modelos de camas Levita e detectores de imagem Fujifilm com Schema `Product` e download de manuais em PDF.
3. **Seção de Artigos / Blog Técnico:** Publicação de guias práticos como *"Como prolongar a vida útil de transdutores de ultrassom"*, *"Dicas de manutenção preventiva para salas de raio X"* e *"Guia de ergonomia em mobiliário hospitalar"*.
