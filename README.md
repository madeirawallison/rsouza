# RSouza Contábil — Novo site

Site institucional estático em HTML, CSS e JavaScript, preparado para publicação no GitHub Pages ou em hospedagem tradicional.

## Estrutura

```text
rsouza-site/
├── index.html
├── privacidade.html
├── termos-de-uso.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── favicon.svg
│   ├── logo.svg
│   └── img/
│       ├── clientes/
│       ├── rodrigo/
│       └── site/
├── robots.txt
└── sitemap.xml
```

## Publicar no GitHub Pages

1. Crie um novo repositório no GitHub.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve.
7. O GitHub informará o endereço temporário do site.

## Domínio próprio

Quando o site estiver aprovado:

1. Configure o domínio `rsouzacontabil.com.br` no GitHub Pages.
2. Ajuste os registros DNS conforme o GitHub solicitar.
3. Ative `Enforce HTTPS`.

Não incluí um arquivo `CNAME` nesta versão porque ele deve ser criado somente quando a migração do domínio for autorizada.

## O que já está funcional

- Layout responsivo para desktop, tablet e celular
- Menu fixo
- Menu mobile
- Rolagem suave
- Animações de entrada
- Contador animado
- Carrossel automático de logotipos
- Central de links com abas
- FAQ interativo
- Botões de WhatsApp
- Ligações telefônicas clicáveis
- E-mail clicável
- Página de privacidade estrutural
- Metatags básicas para SEO
- Sitemap e robots.txt

## Antes de publicar definitivamente

### 1. Logo

O arquivo `assets/logo.svg` é uma reconstrução simples criada para deixar o projeto imediatamente utilizável.  
Substitua-o pelo arquivo oficial da marca quando tiver o logo original em SVG ou PNG de alta resolução.

### 2. Links úteis

A interface da Central RSouza está pronta, mas os endereços oficiais ainda precisam ser configurados.

Abra:

`js/main.js`

Procure:

```js
const resourceLinks = {
```

E informe as URLs oficiais. Exemplo:

```js
const resourceLinks = {
  "simples": "https://endereco-oficial..."
};
```

### 3. Privacidade e Termos de Uso

Os arquivos `privacidade.html` e `termos-de-uso.html` foram atualizados com os documentos oficiais fornecidos pela RSouza Contábil. Se houver futura revisão jurídica, mantenha estes arquivos sincronizados com as versões aprovadas.

### 4. WhatsApp

O projeto está configurado com o número:

`(31) 4042-8070`

Se o WhatsApp correto for outro, pesquise por:

`553140428070`

em `index.html` e substitua.

## Cores principais

- Azul profundo: `#07152c`
- Azul RSouza: `#112b59`
- Azul apoio: `#183b76`
- Verde de destaque: `#b9d866`
- Fundo claro: `#f7f8fb`

A cor verde foi usada de forma discreta para remeter ao elemento vegetal já presente na identidade atual e diferenciar botões de ação sem descaracterizar a marca.

## Desenvolvimento

Layout e desenvolvimento: TW Estratégia Digital
