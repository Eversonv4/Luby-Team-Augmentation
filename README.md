<h1 align="center">🚀 Team Augmentation</h1>

<img src="https://img.shields.io/static/v1?label=Luby&message=Software&color=10B981&style=for-the-badge&logo=GHOST">

<h2>✅ Instalando dependências</h2>

Após clonar o repositório, é preciso instalar as dependências:

## Instalando

```bash
npm install
# ou
yarn install
```

Em seguida executamos o projeto:

## Executando o projeto

```bash
npm run dev
# ou
yarn dev
```

<hr />

<p>O projeto possui algumas pastas principais onde se encontram todo o conteúdo da aplicação. São elas: <br />
(clique nos títulos abaixo para ir até as respectivas seções)</p>

<p align="center" style="font-size: 22px"> 
<a href="#pages-folder" style="text-decoration: underline">Pages</a> •
<a href="#styles-folder" style="text-decoration: underline">Styles</a> •
<a href="#public-folder" style="text-decoration: underline">Public</a> •
<a href="#src-folder" style="text-decoration: underline">Src</a>
</p>

<h2 id="pages-folder">Pages</h2>

Dentro da pasta `pages` temos o arquivo `_app.tsx` que possui todo o conteúdo do site exportado em um único componente `<Component {...pageProps} />`, além de algumas "meta-tags" especiais para melhorar a semântica do site e o SEO com base nos parâmetros do google.

Lá nós vamos encontrar também a aplicação dos temas globais, utilizados no `styled-components` que irá prover toda a aplicação com cores e fontes pré-definidas, assim como a importação dos estilos globais em css puro.

Temos também o arquivo `_document.tsx` que é bastante utilizado quando desejamos implementar alguma meta-tag ou atributo do HTML semântico nas tags mais externas, como por exemplo `<html lang="pt-BR">`.

Dentro de `_document.tsx` temos um trecho importante que é a definição de execução carregamento das estilizações do styled components do lado do servidor. Para isso precisamos fazer a importação do componente `ServerStyleSheet`:

```
import { ServerStyleSheet } from "styled-components"
```

E adicionamos o seguinte trecho de código dentro da nossa classe `MyDocument`, mas fora do método `render()`:

```
static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
```

Dessa forma podemos garantir que o NextJs faça o carregamento das estilizações por dentro do servidor com mais performance, antes de exibir em tela.

E por último, o arquivo `index.tsx`, que é a primeira página apresentada em tela assim que executamos o projeto. Dentro dela estão as importações todo o conteúdo visível do site, separados por seções.

<h2 id="styles-folder">Styles</h2>

Dentro de `styles`, mais especificamente no arquivo `globals.css` temos a importação das fontes utilizadas no projeto e a definição do comportamento do scroll no nosso html. Já no arquivo `inputPhoneNumber.css` é uma estilização bem especifica de um input utilizado na seção "contact us" do projeto, onde temos um formulário para captar números de telefones de diferentes países. Como o componente é importado da biblioteca <a href="https://www.npmjs.com/package/react-phone-input-2">`react-phone-input-2`</a> e já vem pronto, sua estilização precisou ser feita em css puro, ao invés do `styles-components`, que usamos na maior parte do projeto.

<h2 id="public-folder">Public</h2>

Dentro da pasta `public` temos uma pasta de `assets`, onde podemos encontrar todas as imagens, backgrounds e boa parte dos ícones utilizados no projeto, com excessão de pequenos ícones importados por meio da biblioteca <a href="react-icons.github.io/react-icons/">`react-icons`</a>. As imagens foram separadas nas pastas `background-sections`, `company-icons`, `icons` e `programming-tools`. Os próprios nomes já dão uma sugestão sobre quais os tipos das imagens estão contidas. "background-sections" é referente as imagens usadas como fundo em algumas seções; "company-icons" se refere à segunda seção que contém um carrossel com a logo de diversas empresas que tiveram contato com a Luby; "icons" são alguns icones genéricos que podem ser usados no projeto; "programming-tools" contém os ícones de algumas tecnologias onde serão utilizadas na seção "Tech Stacks", onde temos uma lista de ferramentas de desenvolvimento tecnológico: Javascript, ReactJS, Cypress, Jenkins, etc.

<h2 id="src-folder">Src</h2>
<p>Aqui temos os principais arquivos e códigos da aplicação. Todo o conteúdo da pasta "source" foi distribuído em quatro pastas:</p>

<p align="center" style="font-size: 22px"> 
   <a href="#assets-src" style="text-decoration: underline">assets</a> •
   <a href="#components-src" style="text-decoration: underline">components</a> •
   <a href="#sectionsPage-src" style="text-decoration: underline">sectionsPage</a> •
   <a href="#shared-src" style="text-decoration: underline">shared</a>
</p>

<h2 id="assets-src">assets</h2>

Dentro da pasta `assets` temos dois ícones em SVG que foram utilizados especificamente na seção "Scale Your Team" que se localizam no topo dos cards. Os ícones `agility_icon.svg` e `security.svg` estão localizados no canto esquerdo, e no canto direito, respectivamente. Como a família dos ícones não foi encontrada dentro da biblioteca `react-icons`, foi necessário obter esses ícones de outras formas. Em caso de mudança nos ícones dessa seção, não será mais necessário trabalhar com essas imagens SVG.

<h2 id="components-src">components</h2>

Em `components` temos pequenos elementos que podem ser usados em qualquer parte do projeto apenas fazendo sua importação adequadamente.

- <a href="#accordion-components">Accordion</a>
- <a href="#buttonStackList-components">ButtonStackList</a>
- <a href="#buttonTechList-components">ButtonTechList</a>
- <a href="#carrosselTestimonials-components">CarrosselTestimonials</a>
- <a href="#clutchReview-components">ClutchReview</a>
- <a href="#footer-components">Footer</a>
- <a href="#header-components">Header</a>
- <a href="#iframeThumb-components">IframeThumb</a>
- <a href="#iframeVideo-components">IframeVideo</a>
- <a href="#menuAside-components">MenuAside</a>
- <a href="#stackList-components">StackList</a>
- <a href="#teamsList-components">TeamsList</a>

<h2 align="center" id="accordion-components">Accordion</h2>

O `Accordion` é um componente que fica na seção `FAQ`, ele apresenta as perguntas quando está fechado, e ao ser aberto vai mostrar a resposta referente à pergunta. Esse componente recebe por "Props" uma `question`, que é o título da pergunta; Recebe uma propriedade `isOpen`, que recebe um valor booleano e irá definir se o accordion estará aberto ou fechado. Possui também a propriedade `children`, isso significa que o conteúdo da resposta precisará ser englobado pelo componente como se fosse uma `<div>`. Se a resposta estiver dentro de tags `<p>`, a estilização irá aplicar automaticamente, basta ir no arquivo `styles.ts` dentro da mesma pasta e estilizar o texto de acordo com o restante do conteúdo mostrado.

O accordion também recebe uma propriedade chamada `AccordeonHeight` que vai determinar a altura máxima que ele irá abrir. Esse valor é opcional, mas é essencial para o efeito de transição suave, já que o `CSS` não consegue executar o efeito de transição quando o elemento possui uma altura com o valor automático `auto`. Logo será necessário determinar uma altura fixa que possa conter a resposta da pergunta, manter uma folga para o texto respirar, além de apresentar o efeito de transição suave.

Por último temos mais duas últimas propriedades que devem ser passadas por parâmetro ao importar o componente, `openAccordion`

<h2 align="center" id="buttonStackList-components">ButtonStackList</h2>
<h2 align="center" id="buttonTechList-components">ButtonTechList</h2>
<h2 align="center" id="carrosselTestimonials-components">CarrosselTestimonials</h2>
<h2 align="center" id="clutchReview-components">ClutchReview</h2>
<h2 align="center" id="footer-components">Footer</h2>
<h2 align="center" id="header-components">Header</h2>
<h2 align="center" id="iframeThumb-components">IframeThumb</h2>
<h2 align="center" id="iframeVideo-components">IframeVideo</h2>
<h2 align="center" id="menuAside-components">MenuAside</h2>
<h2 align="center" id="stackList-components">StackList</h2>
<h2 align="center" id="teamsList-components">TeamsList</h2>

<h2 id="sectionsPage-src">sectionsPage</h2>

Sections page...

- <a href="#benefits-sectionsPage">Benefits</a>
- <a href="#companies-sectionsPage">Companies</a>
- <a href="#contactUs-sectionsPage">ContactUs</a>
- <a href="#faq-sectionsPage">FAQ</a>
- <a href="#home-sectionsPage">Home</a>
- <a href="#multiTeams-sectionsPage">MultiTeams</a>
- <a href="#scaleTechTeam-sectionsPage">ScaleTechTeam</a>
- <a href="#techStacks-sectionsPage">TechStacks</a>
- <a href="#testimonials-sectionsPage">Testimonials</a>
- <a href="#thePillars-sectionsPage">ThePillars</a>

<h2 align="center" id="benefits-sectionsPage">Benefits</h2>
<h2 align="center" id="companies-sectionsPage">Companies</h2>
<h2 align="center" id="contactUs-sectionsPage">ContactUs</h2>
<h2 align="center" id="faq-sectionsPage">FAQ</h2>
<h2 align="center" id="home-sectionsPage">Home</h2>
<h2 align="center" id="multiTeams-sectionsPage">MultiTeams</h2>
<h2 align="center" id="scaleTechTeam-sectionsPage">ScaleTechTeam</h2>
<h2 align="center" id="techStacks-sectionsPage">TechStacks</h2>
<h2 align="center" id="testimonials-sectionsPage">Testimonials</h2>
<h2 align="center" id="thePillars-sectionsPage">ThePillars</h2>

<h2 id="shared-src">shared</h2>

shared files...

- <a href="">dataLists</a>
- <a href="">globalStyle</a>
- <a href="">globalTheme</a>

<h2 align="center" id="-shared">dataLists</h2>
<h2 align="center" id="-shared">globalStyle</h2>
<h2 align="center" id="-shared">globalTheme</h2>

<p>Dessa forma, os tópicos também serão abordados com base em cada seção para facilitar o entendimento e permitir que seja fácil se localizar. Abaixo podemos ver um mapa que nos apresenta as seções e componentes que são mostrados em tela e sua ordem e suas divisões:</p>

- Header (componentes)
- Menu Aside (componentes)
- Home
- Companies
- Scale Your Team
- Benefits
- The 3 Pillars
- Multi Teams
- Tech Stacks
- Testimonials
- Contact Us
- FAQ (perguntas frequentes)
- Footer (componentes)

<hr>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
