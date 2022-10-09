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

<p>O projeto possui algumas pastas principais onde se encontram todo o conteúdo da aplicação. São elas: <br />
(clique nos títulos abaixo para ir até as respectivas seções)</p>

- <a href="#pages-folder">pages</a>
- <a href="#styles-folder">styles</a>
- <a href="#public-folder">public</a>
- <a href="#src-folder">src</a>

<h2 id="pages-folder">Pages</h2>

Dentro da pasta `pages` temos o arquivo `_app.tsx` que possui todo o conteúdo do site exportado em um único componente `<Component {...pageProps} />`, além de algumas "meta-tags" especiais para melhorar a semântica do site e o SEO com base nos parâmetros do google.

Lá nós vamos encontrar também a aplicação dos temas globais, utilizados no `styled-components` que irá prover toda a aplicação com cores e fontes pré-definidas, assim como a importação dos estilos globais em css puro.

Temos também o arquivo `_document.tsx` que é bastante utilizado quando desejamos implementar alguma meta-tag ou atributo do HTML semântico nas tags mais externas, como por exemplo `<html lang="pt-BR">`. E por último, o arquivo `index.tsx`, que é a primeira página apresentada em tela assim que executamos o projeto. Dentro dela estão as importações todo o conteúdo visível do site, separados por seções.

<h2 id="styles-folder">styles</h2>

Dentro de `styles`, mais especificamente no arquivo `globals.css` temos a importação das fontes utilizadas no projeto e a definição do comportamento do scroll no nosso html. Já no arquivo `inputPhoneNumber.css` é uma estilização bem especifica de um input utilizado na seção "contact us" do projeto, onde temos um formulário para captar números de telefones de diferentes países. Como o componente é importado da biblioteca <a href="https://www.npmjs.com/package/react-phone-input-2">`react-phone-input-2`</a> e já vem pronto, sua estilização precisou ser feita em css puro, ao invés do `styles-components`, que usamos na maior parte do projeto.

<h2 id="public-folder">public</h2>

Dentro da pasta `public` temos uma pasta de `assets`, onde podemos encontrar todas as imagens, backgrounds e boa parte dos ícones utilizados no projeto, com excessão de pequenos ícones importados por meio da biblioteca <a href="react-icons.github.io/react-icons/">`react-icons`</a>. As imagens foram separadas nas pastas `background-sections`, `company-icons`, `icons` e `programming-tools`. Os próprios nomes já dão uma sugestão sobre quais os tipos das imagens estão contidas. "background-sections" é referente as imagens usadas como fundo em algumas seções; "company-icons" se refere à segunda seção que contém um carrossel com a logo de diversas empresas que tiveram contato com a Luby; "icons" são alguns icones genéricos que podem ser usados no projeto; "programming-tools" contém os ícones de algumas tecnologias onde serão utilizadas na seção "Tech Stacks", onde temos uma lista de ferramentas de desenvolvimento tecnológico: Javascript, ReactJS, Cypress, Jenkins, etc.

<h2 id="src-folder">src</h2>
<p>Aqui temos os principais arquivos e códigos do site...</p>

<p>Dessa forma, os tópicos também serão abordados com base em cada seção para facilitar o entendimento e permitir que seja fácil se localizar. As seções foram organizadas na ordem:</p>

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
