# Estratégia de SEO Técnico, SEO Local e Orgânico — Medical Plus

Este documento descreve a arquitetura de SEO, palavras-chave prioritárias, estrutura de metadados, marcação de dados estruturados, indexação e diretrizes do Google Search Console para o site `medicalplus.com.br`.

---

## 1. Arquitetura Canônica e Domínio

- **Domínio Canônico:** `https://www.medicalplus.com.br` (ou conforme variável de ambiente)
- **Protocolo:** HTTPS obrigatório
- **Redirecionamento:** `medicalplus.com.br` -> `www.medicalplus.com.br` (gerenciado na borda pela Vercel)
- **Variável de Ambiente:** `NEXT_PUBLIC_SITE_URL=https://www.medicalplus.com.br` (com fallback seguro em código para evitar URLs de preview em metadados de produção)
- **Tag do Search Console:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` configurável via variáveis de ambiente da Vercel sem alterar componentes.

---

## 2. Palavras-Chave Prioritárias

### Buscas Institucionais e Marca:
- `Medical Plus`
- `Medical Plus equipamentos médicos`
- `Medical Plus Espírito Santo`
- `Medical Plus assistência técnica`
- `Medical Plus ES`

### Core B2B & Equipamentos Médicos:
- `equipamentos médicos`
- `equipamentos hospitalares`
- `equipamentos médico-hospitalares`
- `equipamentos para diagnóstico por imagem`
- `representante de equipamentos médicos ES`
- `móveis hospitalares`
- `móveis hospitalares Levita`
- `Levita móveis hospitalares`
- `camas hospitalares levita`
- `macas hospitalares`

### Diagnóstico por Imagem e Soluções Fujifilm:
- `Fujifilm equipamentos médicos`
- `equipamentos Fujifilm para diagnóstico por imagem`
- `raio X digital Fujifilm`
- `mamografia digital Fujifilm`
- `tomografia computadorizada Fujifilm`
- *(Atenção estrita: Medical Plus NÃO comercializa ultrassom Fujifilm)*

### Assistência Técnica Especializada (Foco de Alta Conversão):
- `assistência técnica equipamentos médicos`
- `assistência técnica de ultrassom` (Prioridade Máxima)
- `manutenção de ultrassom`
- `manutenção de aparelho de ultrassom`
- `assistência técnica de raio x`
- `manutenção de raio x`
- `assistência técnica de mamógrafo`
- `manutenção de mamógrafo`
- `assistência técnica de densitômetro ósseo`
- `assistência técnica de tomografia computadorizada`

### Insumos e Meios de Contato (Carbogel):
- `Carbogel`
- `gel para ultrassom`
- `gel condutor para ECG`
- `aquecedor de gel Carbogel`
- `aquecedor de gel GELKENT`

### SEO Local (Espírito Santo):
- `equipamentos médicos Espírito Santo`
- `manutenção de ultrassom Vitória ES`
- `manutenção de equipamentos hospitalares Vila Velha / Serra / Cariacica`
- `assistência técnica hospitalar ES`

---

## 3. Matriz de Rotas, Titles e Meta Descriptions

| Rota | Tag `<title>` | Meta Description (140-160 caracteres) | Prioridade no Sitemap |
|---|---|---|---|
| `/` | `Medical Plus \| Equipamentos Médicos e Assistência Técnica` | Representação comercial de equipamentos médico-hospitalares e assistência técnica especializada para clínicas, hospitais e centros de diagnóstico no ES. | 1.0 |
| `/equipamentos` | `Equipamentos Médicos e Hospitalares \| Medical Plus ES` | Equipamentos médico-hospitalares, soluções para diagnóstico por imagem, mobiliário clínico e insumos no Espírito Santo. Atendimento consultivo especializado. | 0.95 |
| `/equipamentos/diagnostico-por-imagem` | `Equipamentos para Diagnóstico por Imagem no ES \| Medical Plus` | Soluções em diagnóstico por imagem para clínicas e hospitais no Espírito Santo: raio X digital, mamografia, tomografia e ressonância magnética. | 0.9 |
| `/equipamentos/fujifilm` | `Equipamentos Fujifilm para Diagnóstico por Imagem \| Medical Plus` | Soluções Fujifilm Healthcare para radiologia digital, raio X, mamografia, tomografia e TI médica no Espírito Santo. Atendimento especializado Medical Plus. | 0.9 |
| `/mobiliario-hospitalar` | `Móveis Hospitalares e Mobiliário Clínico \| Medical Plus ES` | Mobiliário hospitalar durável e ergonômico no Espírito Santo: camas hospitalares, leitos de UTI, macas, poltronas e mesas clínicas Levita. | 0.9 |
| `/mobiliario-hospitalar/levita` | `Móveis Hospitalares Levita no Espírito Santo \| Medical Plus` | Linha completa de móveis hospitalares Levita no ES: camas para internação e UTI, macas, poltronas e mobiliário em aço com pintura eletrostática. | 0.9 |
| `/carbogel` | `Carbogel: Gel para Ultrassom e Aquecedores \| Medical Plus ES` | Linha Carbogel no Espírito Santo: gel para ultrassom de alta condutividade acústica, gel condutor para ECG e aquecedor de gel GELKENT. | 0.9 |
| `/carbogel/gel-para-ultrassom` | `Gel para Ultrassom Carbogel \| Medical Plus ES` | Gel hidrossolúvel para ultrassom Carbogel no ES. Alta condutividade acústica, sem sal ou álcool, preserva transdutores. Bombonas 5kg e frascos. | 0.9 |
| `/carbogel/aquecedor-de-gel` | `Aquecedor de Gel Carbogel GELKENT \| Medical Plus ES` | Aquecedor térmico de gel para exames de ultrassom GELKENT Carbogel no ES. Conforto térmico para o paciente e temperatura uniforme e segura. | 0.9 |
| `/equipamentos-medicos-hospitalares` | `Equipamentos Médico-Hospitalares \| Medical Plus` | Soluções em equipamentos médico-hospitalares, diagnóstico por imagem, móveis clínicos e insumos no Espírito Santo. Atendimento consultivo com a Medical Plus. | 0.85 |
| `/marcas` | `Marcas e Fabricantes Representados \| Medical Plus` | Conheça as marcas parceiras com as quais a Medical Plus trabalha no Espírito Santo: Levita Móveis Hospitalares, Fujifilm Healthcare e Carbogel. | 0.8 |
| `/marcas/levita` | `Móveis Hospitalares Levita \| Medical Plus` | Conheça a linha de móveis hospitalares Levita representada pela Medical Plus: camas hospitalares, macas, poltronas e mobiliário clínico durável no ES. | 0.9 |
| `/marcas/fujifilm` | `Soluções Fujifilm Healthcare \| Medical Plus` | Conheça as soluções de diagnóstico por imagem Fujifilm Healthcare representadas pela Medical Plus: raio X, mamografia, tomografia e TI médica no ES. | 0.9 |
| `/marcas/carbogel` | `Carbogel e Aquecedor de Gel \| Medical Plus` | Linha completa de géis para ultrassom, gel condutor para ECG e aquecedor de gel GELKENT Carbogel na Medical Plus. Atendimento especializado no ES. | 0.9 |
| `/assistencia-tecnica` | `Assistência Técnica Especializada em Equipamentos Médicos \| Medical Plus` | Assistência técnica para ultrassom, raio X, mamógrafo, densitômetro ósseo e tomografia no Espírito Santo. Manutenção preventiva e corretiva com a Medical Plus. | 0.95 |
| `/assistencia-tecnica/ultrassom` | `Assistência Técnica de Ultrassom \| Medical Plus` | Assistência técnica especializada em aparelhos de ultrassom no ES. Manutenção preventiva, corretiva e suporte técnico para ultrassonografia. | 0.95 |
| `/assistencia-tecnica/raio-x` | `Assistência Técnica de Raio X \| Medical Plus` | Assistência técnica especializada para aparelhos de raio X fixos e móveis no ES. Manutenção preventiva, diagnóstico de falhas e suporte técnico. | 0.85 |
| `/assistencia-tecnica/mamografo` | `Assistência Técnica de Mamógrafo \| Medical Plus` | Assistência técnica especializada em mamógrafos no Espírito Santo. Manutenção preventiva, diagnóstico e calibração para clínicas de mamografia. | 0.85 |
| `/assistencia-tecnica/densitometro-osseo` | `Assistência Técnica de Densitômetro Ósseo \| Medical Plus` | Suporte e assistência técnica para densitômetro ósseo (DEXA) no Espírito Santo. Manutenção mecânica, calibração e suporte preventivo. | 0.85 |
| `/assistencia-tecnica/tomografia-computadorizada` | `Assistência Técnica de Tomografia \| Medical Plus` | Assistência técnica especializada em tomografia computadorizada (TC) no Espírito Santo. Suporte técnico para gantry, mesa e consoles de comando. | 0.85 |
| `/sobre` | `Sobre a Medical Plus \| Equipamentos e Assistência Técnica` | Conheça a Medical Plus: representação comercial de equipamentos médico-hospitalares e assistência técnica especializada no Espírito Santo. | 0.7 |
| `/contato` | `Fale Conosco \| Contato \| Medical Plus` | Entre em contato com a Medical Plus no Espírito Santo. Fale diretamente com Claudiomiro Marques Caetano pelo WhatsApp (27) 99632-6622. | 0.85 |

---

## 4. Dados Estruturados (JSON-LD Schema.org)

Foram implementadas as seguintes marcações semânticas nativas em JSON-LD:

1. **`Organization`**: Identifica a entidade Medical Plus, razão social, logotipo, telefone de contato internacional (`+5527996326622`), área de atendimento no Brasil/Espírito Santo e idioma oficial.
2. **`LocalBusiness`**: Configurado na página `/contato`, vinculando o negócio local, canais de atendimento e área de cobertura regional.
3. **`WebSite`**: Identifica o site oficial, nome fantasia e publicador.
4. **`BreadcrumbList`**: Presente em todas as páginas internas para orientar motores de busca sobre a hierarquia de navegação e gerar rich snippets de breadcrumb nas SERPs do Google.
5. **`Service`**: Implementado nas rotas de assistência técnica (`ultrassom`, `raio-x`, `mamografo`, `densitometro-osseo`, `tomografia-computadorizada`), especificando o fornecedor, tipo do serviço e localização geográfica atendida (`Espírito Santo`).
6. **`Product`**: Implementado nas páginas de produtos específicos (`/carbogel/gel-para-ultrassom` e `/carbogel/aquecedor-de-gel`), sem avaliações artificiais e sem preços fictícios.

---

## 5. Rastreamento e Indexação

- **`sitemap.xml`**: Gerado dinamicamente via `src/app/sitemap.ts`, listando todas as 22 rotas públicas indexáveis com suas respectivas prioridades e frequências de atualização.
- **`robots.txt`**: Gerado dinamicamente via `src/app/robots.ts`, permitindo rastreamento irrestrito de todo o site, desautorizando apenas páginas técnicas privadas (como política de privacidade) e indicando o endereço exato do sitemap.
- **Open Graph & Twitter Cards**: Configurados globalmente em `src/app/layout.tsx` e estendidos nas rotas específicas para exibição otimizada em compartilhamentos de WhatsApp, LinkedIn e redes sociais.

---

## 6. Procedimento para Google Search Console e Perfil da Empresa

### Passo 1: Cadastro no Google Search Console
1. Acesse o [Google Search Console](https://search.google.com/search-console).
2. Adicione uma nova propriedade com o tipo **Prefixo de URL** inserindo `https://www.medicalplus.com.br` (ou o domínio canônico configurado).
3. Na etapa de verificação de propriedade, selecione a opção **Tag HTML**.
4. Copie o valor alfanumérico dentro de `content="..."`.
5. No painel da Vercel, acesse **Project Settings > Environment Variables** e crie a variável:
   - Key: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: `(o valor copiado do Google)`
   - Environments: `Production`, `Preview`.
6. Faça um redeploy na Vercel e clique em **Verificar** no Google Search Console.

### Passo 2: Envio do Sitemap
1. No menu lateral do Google Search Console, clique em **Sitemaps**.
2. No campo "Adicionar um novo sitemap", digite: `sitemap.xml`.
3. Clique em **Enviar**.
4. O Google iniciará o rastreamento das 22 rotas indexáveis do site Medical Plus.
