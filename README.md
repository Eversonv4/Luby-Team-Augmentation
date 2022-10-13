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

<h2>Configurando o Path Mapping</h2>

path mapping...

<h2>Iniciando o projeto</h2>

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

<h2 align="center" id="accordion-components">
  <a href="#components-src">Accordion</a>
</h2>

O `Accordion` é um componente que fica na seção `FAQ`, ele apresenta as perguntas quando está fechado, e ao ser aberto vai mostrar a resposta referente à pergunta. Esse componente recebe por "Props" uma `question`, que é o título da pergunta; Recebe uma propriedade `isOpen`, que recebe um valor booleano e irá definir se o accordion estará aberto ou fechado, como o componente só receber um valor true ou false, a lógica que vai determinar se ele estará aberto ou fechado é feita no container ou componente que fará a importação desse componente, nesse caso, a seção "FAQ". Possui também a propriedade `children`, isso significa que o conteúdo da resposta precisará ser englobado pelo componente como se fosse uma `<div>`. Se a resposta estiver dentro de tags `<p>`, a estilização irá aplicar automaticamente, basta ir no arquivo `styles.ts` dentro da mesma pasta e estilizar o texto de acordo com o restante do conteúdo mostrado.

### O código

```
export function Accordeon({
  children,
  question,
  isOpen,
  AccordeonHeight,
  openAccordion,
  ...rest
}: IAccordeonProps) {

  return (
    <AcordeonContainer {...rest}>
      <ContentBox isOpen={isOpen}>
        <label onClick={openAccordion}>
          <HelpIcon />
          <span>{question}</span>
          <ArrowRightIcon className="arrow" />
        </label>

        <ContentText
          AccordeonHeight={AccordeonHeight}
          className={isOpen ? "active" : ""}
          isOpen={isOpen}
        >
          {children}
        </ContentText>
      </ContentBox>
    </AcordeonContainer>
  );
}
```

O accordion também recebe uma propriedade chamada `AccordeonHeight` que vai determinar a altura máxima que ele irá abrir. Esse valor é opcional, mas é essencial para o efeito de transição suave, já que o `CSS` não consegue executar o efeito de transição quando o elemento possui uma altura com o valor automático `auto`. Logo será necessário determinar uma altura fixa que possa conter a resposta da pergunta, manter uma folga para o texto respirar, além de apresentar o efeito de transição suave.

Por último temos mais uma última propriedade que deve ser passadas por parâmetro ao importar o componente, `openAccordion`. Essa é uma função que será passada para o componente e ativada quando clicarmos no título da pergunta. Essa função é criada no componente que importou o accordion e será responsável para indicar qual o accordion específico será aberto, e quando um estiver aberto, os outros deverão estar fechados. Essa função não retorna nada, ela apenas executa a função de abrir e fechar. Veremos mais detalhes sobre essa função na seção <a href="#faq-sectionsPage">FAQ</a>.

Exemplo de como é utilizado:

```
<Accordeon
  // Altura definida
  AccordeonHeight="198px"
  // Título da pergunta
  question="What's the difference between Extended Teams and Team Augmentation?"
  // Função que irá definir esse acordeon especifico como "aberto", passando como parâmetro o "identificador" desse acordeon.
  openAccordion={() => handleOpenAcordion("two")}
  // Condição que verifica se esse é realmente o que está aberto e retorna um valor booleano
  isOpen={open === "two"}
>
  <p>
    On the Extended Teams offering, the squads are fully managed
    by Luby and the professionals are selected by our team without
    the client's validation. On the other hand, for the Team
    Augmentation format the allocated personnel are hired by Luby,
    but onboarded and fully managed by the client. The client
    still relies on Luby's resources to guarantee the professional
    adherence to the client's company.
  </p>
</Accordeon>
```

### Estilização

A estilização é bastante simples baseada na sintaxe do `styled-components` e sua forma de passar estilizações de elementos pai para filho. Todo o projeto foi construído com base em um tema aplicado globalmente, mais detalhes sobre os estilos globais e temas podem ser encontrados na seção <a href="#globalStyle-shared">globalStyle</a> e <a href="#globalTheme-shared">globalTheme</a>. Em alguns elementos que necessitavam de uma estilização condicional, como por exemplo o ícone de flecha pra direita no título da pergunta, que rotaciona 90° quando o acordeon está ativo, para isso passamos o estado "isOpen" para o componente que importamos do nosso arquivo `styles.ts`:

```
...
<ContentBox isOpen={isOpen}> // passamos o estado "isOpen" para o componente
  <label onClick={openAccordion}>
    <HelpIcon />
    <span>{question}</span>
    <ArrowRightIcon className="arrow" />
  </label>
...
```

Esse estado passado pelo componente pode ser acessado dentro do arquivo `styles.ts`, como estamos utilizando typescript no projeto, precisamos criar uma interface para essas propriedades que passamos entre componentes:

```
...
interface IAccordionOpen {
  isOpen: boolean;
  AccordeonHeight?: string;
}

export const ContentBox = styled.div<IAccordionOpen>`
  ...

  & .arrow {
      position: absolute;
      right: 0px;
      font-size: 1.5rem;
      transition: 0.7s ease;

      // aqui fazemos uma estilização com base no estado passado por parâmetro.
      transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "")};
  }
`
```

No exemplo acima, se o estado `isOpen` for verdadeiro, o ícone irá rotacionar em 90 graus. Lembrando de adicionar a classe `arrow-right-rotate` ou qualquer outro seletor para indicar o elemento que se deseja estilizar em caso de um valor ser true ou false. O mesmo vale para outros elementos desse componente, será fácil notar um padrão. Outro detalhe: nota-se que o parâmetro da função está escrito dentro de `({ isOpen })`, foi preferível escrever dessa forma para que possamos puxar exatamente aquela informação desejada, ao invés de algo como `props.isOpen`.

<h2 align="center" id="buttonTechList-components">
  <a href="#components-src">ButtonTechList</a>
</h2>

Esse componente fica na seção <a href="#multiTeams-sectionsPage">MultiTeams</a> e na seção <a href="#techStacks-sectionsPage">TechStacks</a>. São coponentes relativemente simples, assim como um `Accordion` eles recebem algumas propriedades, são elas: `isActive`um valor booleano que será usado para criar uma estilização condicional, além de uma propriedade chamada `TechTitle` que representa o título, ou texto, que será mostrado em tela.

Exemplo:

```
<ButtonTechList
  isActive={selectedStack === "data"}
  onClick={() => handleStackList("data")}
  TechTitle="Data"
/>
```

Resultado:

<img src="https://raw.githubusercontent.com/Eversonv4/Luby-Team-Augmentation/fd07fd98c47e004096a15a1e5df68720948a3272/ButtonnTechListActive.png" alt="button tech active">

### Estilização

Sua estilização, assim como nos outros componentes, são condicionais e foram feitas com base em valores passados por props.

Ex:

```
export const Button = styled.button<ITechButton>`
...
color: ${({ isActive, theme }) => isActive ? theme.colors.secondary : theme.colors.text};
...
`
```

<h2 align="center" id="carrosselTestimonials-components">
  <a href="#components-src">CarrosselTestimonials</a>
</h2>

Esse componente é um widget que já vem pronto do site <a href="https://clutch.co/profile/luby#summary">clutch.co</a>. Ao importar para o seu projeto, é importante pegar todo o conteúdo de dentro da `div` que possui a classe `clutch-widget`, o conteúdo de dentro faz parte do Iframe do widget que trará um carrossel com reviews de algumas empresas sobre a Luby.

Além de importar todo o conteúdo de `clutch-widget`, é necessário importar o script que irá montar o widget. Em caso de problemas com a importação do script externo, pode-se fazer uso da biblioteca <a href="https://github.com/nfl/react-helmet">react-helmet</a>, ele fará o trabalho de realizar a importação do script corretamente. Basta englobar a tag `<script>` com o componente do `Helmet`. É interessante que a importação seja feita acima da `div` que engloba o iframe, assim como está no projeto.

Dentro da estilização estão os `media-queries` para controlar a altura do widget em diferentes resoluções de telas.

<h2 align="center" id="clutchReview-components">
  <a href="#components-src">ClutchReview</a>
</h2>

Assim como o componente do `CarrosselTestimonials`, o widget já vem pronto. Uma informação importante é que nesse componente não é necessário fazer o import do `script`, já que esse widget faz uso do mesmo widget que o `CarrosselTestimonials`, mas é importante que manter todo o conteúdo de dentro da `div` com a classe `custom-html`. Para posicionar bem em tela, vale a pena usar esse widget como componente e importar dentro da sua seção, dentro de um container para adequá-lo ao layout do seu projeto.

<h2 align="center" id="footer-components">
  <a href="#components-src">Footer</a>
</h2>

O `footer` é um componente pronto e isolado do restante, para aplicar em tela basta importar e aplicar em tela. Assim como qualquer outro componente, sua estilização estão dentro da própria pasta do componente, assim como sua responsividade com os `media queries`.

<h2 align="center" id="header-components">
  <a href="#components-src">Header</a>
</h2>

O Header também é um componente isolado. Ele foi importado e aplicado dentro da seção <a href="#homeSection-sectionsPage">HomeSection</a>. Além do menu `nav`, que está linkando à diferentes seções da landing page, dentro do `Header` também foi importado e aplicado o componente <a href="#menuAside-components">Menu Aside</a>. Dentro do Header criamos uma função para abrir e fechar o Menu Aside, e criamos um estado com `useState` que vai armazenar qual o estado atual do Menu Aside, `true` ou `false`.

Tanto a função para abrir e fechar o menu, quanto o valor do estado do Menu Aside será passado para o componente `MenuAside` por meio de props.

<h2 align="center" id="iframeThumb-components">
  <a href="#components-src">IframeThumb</a>
</h2>

Esse componente funciona como uma "thumbnail" do vídeo que retiramos do youtube. Para melhorar a performance do site e evitar que o usuário consuma dados desnecessário, foi criado uma prévia de vídeo que é apenas um container com uma imagem de fundo e um ícone de "play". Os elementos iframe acabam trazendo mais informações que apenas o player do vídeo, dessa forma, ao utilizar um componente como prévia, evitando o carregamento direto do player, podemos economizar em processamento, melhorando a performance.

Esse componente é importado na seção <a href="#thePillars-sectionsPage">The Pillars</a>, e lá realizamos uma estrutura condicional, por meio de `useState`, onde passamos uma função para dentro do nosso componente `IframeThumb`, e essa função será aplicada no `PlayIcon` e será executada ao clicarmos no mesmo. Ao ser clicado, o estado da variável no `useState` muda e a seção passa a renderizar o vídeo direto do youtube.

Vale ressaltar que o `IframeThumb` deve sequir as mesmas dimensões do iframe do vídeo do youtube, assim como respeitar os seus `media queries`

<h2 align="center" id="iframeVideo-components">
  <a href="#components-src">IframeVideo</a>
</h2>

O componente `IframeVideo` é mais um widget que já vem pronto direto do youtube. Basta aplicarmos o iframe em tela que o vídeo será importado, não tem muito mistério. Dentro do arquivo `styles.ts` cuidamos da responsividade desse componente, assim como nos demais componentes e o seus respectivos arquivos de estilos.

<h2 align="center" id="menuAside-components">
  <a href="#components-src">MenuAside</a>
</h2>

O `Menu Aside` é um componente semelhante ao `Header`, com uma lista de links que vão redirecionar à alguma seção, mas ele possui umas animações e efeitos. Esse componente pode ser divido em duas partes, o `BackgroundShadow` que é um fundo mais escuro, porém transparente que fica por cima de toda a tela, e o `AsideMenuContainer`, que possui uma largura fixa e onde está localizado a listagem de links.

Esse componente é importado de dentro do componente `Header`, e dentro do header nós passamos por props para o Menu Aside duas informações, um estado `true` ou `false` para determinar a abertura o fechamento do Menu Aside, e uma função para fechá-lo, já que quando um link for clicado, a página irá nos redirecionar para a seção e o menu também deve ser fechado.

A mesma função para fechar o menu é aplicada no `BackgroundShadow`, para o caso de se desejar fechar o menu, mas há também um ícone `X` no canto superior direito para indicar fechamento.

Em relação as animações do menu, como `BackgroundShadow` e `AsideMenuContainer` são componentes independentes, cada um recebeu uma animação diferente ao aparecer e sumir, sendo o primeiro recebendo uma animação de opacidade, e o segundo, uma transição lateral. Toda e qualquer estilização e animação desses elementos podem ser encontradas dentro do arquivo `styles.ts` desse componente.

<h2 align="center" id="stackList-components">
  <a href="#components-src">StackList</a>
</h2>

Dentro de `StackList` podemos encontrar dois componentes: `List` e `StackItem`. Esse componente está sendo aplicado na seção <a href="#techStacks-sectionsPage">TechStacks</a>. O componente `List` contém apenas uma `<ul>` e dentro dela foi aplicado as dimensões do componente, assim como a montagem do layout utilizando uma estilização baseada em `Grid`, e dentro da `<ul>` nós importamos e aplicamoso o componente `StackItem`, que nada mais é que uma `<li>`. E dentro de `StackItem` temos apenas um container com o nome `Item`, e dentro dele temos uma imagem com a logo da tecnologia e um `Title`, com o nome da ferramenta.

A estilização dos itens `StackItem`, assim como a denifição de quantas colunas e linhas eles irão pegar no grid estão descritas no arquivo de estilização dentro dessa mesma pasta.

Os dados que serão utilizados para preencher essa lista vem do arquivo de nome `StackListData.ts`, mais especificamente, fica dentro da pasta `dataLists`, dentro de <a href="#shared-src">shared</a>. Em resumo, importamos a nossa lista de dentro da pasta `List`, aplicamos na seção <a href="#techStacks-sectionsPage">TechStacks</a> e passamos por props os dados do arquivo `StackListData.ts`.

<h2 align="center" id="teamsList-components">
  <a href="#components-src">TeamsList</a>
</h2>

O componente `TeamsList` funciona examente da mesma forma que o componente anterior, `StackList`, sua principal diferença é nas quantidade de colunas no grid e que não possui imagens, mas a lógica é exatamente a mesma.

De dentro da pasta `TeamsList`, importamos a nossa lista `TeamsList`, aplicamos na seção <a href="#multiTeams-sectionsPage">MultiTeams</a>, e passamos por props os dados que vão preencher a nossa lista. Esses dados vem do arquivo `TeamsListData.ts`, dentro da pasta `dataLists`, que está dentro da pasta <a href="#shared-src">shared</a>.

<h2 id="sectionsPage-src">sectionsPage</h2>

Dentro dessa pasta temos todas as seções do projeto que fica entre o Header e o Footer.

- <a href="#benefits-sectionsPage">Benefits</a>
- <a href="#companies-sectionsPage">Companies</a>
- <a href="#contactUs-sectionsPage">ContactUs</a>
  - <a href="#inputPhone-contactUs">Validação React-Phone-Input-2</a>
- <a href="#faq-sectionsPage">FAQ</a>
- <a href="#home-sectionsPage">Home</a>
- <a href="#multiTeams-sectionsPage">MultiTeams</a>
- <a href="#scaleTechTeam-sectionsPage">ScaleTechTeam</a>
- <a href="#techStacks-sectionsPage">TechStacks</a>
- <a href="#testimonials-sectionsPage">Testimonials</a>
- <a href="#thePillars-sectionsPage">ThePillars</a>

<h2 align="center" id="benefits-sectionsPage">
  <a href="#sectionsPage-src">Benefits</a>
</h2>

A seção `Benefits` é bastante simples, com um título principal e uma lista com alguns itens. A imagem de fundo foi colocada como background no `css` da `<section>` que engloba essa seção. Os ícones de "check" de fundo azul foi colocado com um `position: absolute` para que o círculo não ficasse deformado com as margens do texto.

Dentro dessa seção, assim como nas seções adiante foi importado a biblioteca <a href="https://www.framer.com/motion/">Framer Motion</a> para fazer a animação do conteúdo da seção surgir em tela vindo de baixo numa animação bem suave. Exemplo de código:

```
...
import { motion, Variants } from "framer-motion";

const FadeTranslateSection: Variants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

export function BenefitsSection() {
  return (
    <Container id="benefits-section">
      <motion.article
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={FadeTranslateSection}
      >
      ...
      </motion.article>
    </Container>
  )
}
```

Esse componente englobando o conteúdo das `<section>` irá se repetir em diversas seções, o gatilho da animação é quando damos scroll até aquela determinada seção.

<h2 align="center" id="companies-sectionsPage">
  <a href="#sectionsPage-src">Companies</a>
</h2>

Nesta seção temos apenas um título lateral e um carrossel com criado utilizando a biblioteca <a href="https://splidejs.com">Splide</a>, que é uma ferramenta bastante simples e em pouco tempos nós já temos um carrossel em tela. As imagens das empresas que aparecem foram colocadas como `background` das divs. Essa foi uma estratégia adotada para melhorar o SEO, já que ao renderizar uma imagem com a tag `<img>`, ou a tag de imagem do NextJS `<Image />`, as regras de SEO pedem para que passemos alguns valores e atributos, etc.

Colocando as imagens como fundo de uma div com tamanho fixo, ao analisar a página, as imagens não serão interpretadas como imagens para o SEO, e dessa forma ele nos dá uma nota melhor.

Todas as regras para manipular o carrossel e os slides são passadas dentro do próprio componente do `Splide`. Para mais informações sobre o funcionamento dessa biblioteca, recomendo fortemente a dar uma lida na documentação <a href="https://splidejs.com">Splide</a>. Uma vez que se aprende a utilizar essa ferramenta, ela será sempre a primeira opção quando pensar em carrossel. Exemplo de como aplicamos as propriedades desejadas ao carrossel dentro do ReactJS:

```
<Splide
  className="carrossel-companies"
  options={{
    arrows: false,
    autoplay: true,
    interval: 3000,
    ...
  }}
  aria-label="Logos companies"
>
...
```

<h2 align="center" id="contactUs-sectionsPage">
  <a href="#sectionsPage-src">ContactUs</a>
</h2>

Essa seção à primeira vista parece simples, e de fato é. Temos duas `<div>` lado a lado. Do lado esquerdo temos um título e alguns `<span>` e alguns textos em negrito. Ao lado direto temos um formulário, nele nós utilizamos a biblioteca <a href="https://react-hook-form.com">React Hook Form</a> junto com a ferramenta `Yup` para gerenciar os estados dos nossos e principalmente as validações dos nossos `inputs`. Seria tudo bem tranquilo se não fosse pelo input de números de celulares internacionais, `PhoneInput`.

O componente `PhoneInput` foi importado da biblioteca <a href="https://www.npmjs.com/package/react-phone-input-2">React-Phone-Input-2</a>, e ele por si só é um componente bem mais complexo que um input normal. Primeiro instamos a biblioteca como está na documentação, depois fazemos as importações do componente, e do seu arquivo de estilização, ambos provenientes da própria biblioteca:

```
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
```

Em seguida aplicamos o componente no nosso formulário e passamos para ele alguns atributos desejados, como por exemplo: o país que irá aparecer por padrão, o valor inicial (que normalmente é uma `string` vazia), uma função `onChange`, formatar automaticamente `autoFormat`, etc:

```
<PhoneInput
  country="us"
  value={initialValuePhoneInput}
  onChange={(value) => onChangePhoneInput(value)}
  autoFormat={true}
  placeholder="Your phone number"
  enableSearch={true}
/>
```

Só isso já é suficiente para fazer o input funcionar normalmente, mas precisamos aplicar uma validação, e aí as coisas ficam um pouco mais delicadas, mas é possível. Dentro da documentação nos é apresentado uma forma, que seria adicionando ao nosso input o atributo `isValid` e passando para ele uma função que já recebe alguns parâmetros por padrão: `inputNumber`, `country` e `countries`.

```
import startsWith from 'lodash.startswith';

<PhoneInput
  isValid={(inputNumber, country, countries) => {
    return countries.some((country) => {
      return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
    });
  }}
/>
```

Esses valores são adicionados por padrão, onde:

- `inputNumber` - valor que está dentro do input
- `country` - É o país selecionado na opção de países do input, ele nos retorna um objeto com as seguintes características:

```
{
  name: string;
  regions: string[];
  iso2: string;
  countryCode: string;
  dialCode: string;
  format: string;
  priority: number;
}
```

Todos esses informações e valores são referentes ao país escolhido no input

- `countries` = é a `lista com todos os países suportados pelo input`, contendo mais de 200 países e cada elemento do array é um objeto que possui as mesmas propriedades encontradas no parâmetro `country`. Só para fixar: "country" é um país especifico selecionado, já o "countries" é uma lista de objetos do tipo "country", contendo todos os países.

Esses são os valores, mas quem iria ficar responsável por validar se um determinado número passado no input é válido ou não, ia ficar por conta da biblioteca `lodash.startswith`, porém ela não se mostrou útil, já que mesmo ao digitar propositalmente um número inválido, ela retornada um valor positivo, afirmando que se tratava de um número válido.

Partindo desse ponto, buscou-se outra forma de validar o input já que a forma disponibilizada pela biblioteca não funcionava, assim como também não dava para validar utilizando o `React Hook Form` com o `Yup`, por conta do `PhoneInput` não ser um input normal, mas um componente mais complexo.

<h2 id="inputPhone-contactUs">Validação React-Phone-Input-2</h2>

Como houve problemas na validação dos números de telefone por meio da ferramenta indicada na documentação do <a href="https://www.npmjs.com/package/react-phone-input-2">React-Phone-Input-2</a>, assim como também não era possível realizar a validação pelo React Hook Form ou o Yup, se fez necessário buscar outra forma de validar corretamente o input de telefone. Após analisar os valores recebidos em nos parâmetros `country` e `countries` que recebemos por padrão na função que aplicamos dentro do atributo `isValid`, podemos realizar uma validação mais confiável e testável. Chegamos à seguinte conclusão:

(Como o projeto foi criado com template typescript, algumas tipagens são necessárias)

```
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IPhoneInputCountry {
  name: string;
  regions: string[];
  iso2: string;
  countryCode: string;
  dialCode: string;
  format: string;
  priority: number;
}

const [initialValuePhoneInput, setInitialValuePhoneInput] = useState("");
const [maxLengthPhoneInput, setMaxLengthPhoneInput] = useState(0);
const [errorPhoneInput, setErrorPhoneInput] = useState(false);

function onChangePhoneInput(phoneInputValue: string) {
  setInitialValuePhoneInput(phoneInputValue);
  setErrorPhoneInput(false);
}

function validationInputPhone() {
  if (initialValuePhoneInput.length < maxLengthPhoneInput) {
    setErrorPhoneInput(true);
    return;
  }
  return true;
};

<PhoneInput
  country="us"
  value={initialValuePhoneInput}
  onChange={(value) => onChangePhoneInput(value)}
  autoFormat={true}
  placeholder="Your phone number"
  enableSearch={true}
  disableSearchIcon={false}
  isValid={(inputNumber, country: any) => {
    const selectedCountry: IPhoneInputCountry = country;

    let placeholderMaskInput = selectedCountry?.format;
    const stringConvertedToArray = placeholderMaskInput.split("");

    let filteredMaskInput = stringConvertedToArray.filter(
      (character: string) => character === "."
    );

    let resultLength;
    if (placeholderMaskInput.match(/\s..$/gm)) {
      // console.log("Matches!");
      resultLength = filteredMaskInput.slice(0, filteredMaskInput.length - 2);
    } else {
      // console.log("NOT MATCHES!");
      resultLength = filteredMaskInput;
    }
    setMaxLengthPhoneInput(resultLength.length);
    return true;
  }}
/>

{errorPhoneInput && (
  <p>Please, insert a valid number!</p>
)}
```

Tudo isso compõe todo o componente `PhoneInput` junto com sua validação. Mas não se preocupa, vamos explicando por partes:

```
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
```

Esse trecho acima se trata da importação do componente e a sua estilização da listagem dos países ao abrirmos o menu de países.

Logo abaixo temos a tipagem do objeto `country` que recebemos como parâmetro da função que fica dentro do atributo `isValid`:

```
interface IPhoneInputCountry {
  name: string;
  regions: string[];
  iso2: string;
  countryCode: string;
  dialCode: string;
  format: string;
  priority: number;
}
```

Depois temos alguns estados que vão nos auxiliar a manter um controle das informações dos inputs e seus nomes são bastante descritivos:

```
const [initialValuePhoneInput, setInitialValuePhoneInput] = useState("");
const [maxLengthPhoneInput, setMaxLengthPhoneInput] = useState(0);
const [errorPhoneInput, setErrorPhoneInput] = useState(false);
```

Temos também duas funções, uma que vai monitorar os dados inseridos no input e outra para validar:

```
function onChangePhoneInput(phoneInputValue: string) {
  setInitialValuePhoneInput(phoneInputValue);
  setErrorPhoneInput(false);
}

function validationInputPhone() {
  if (initialValuePhoneInput.length < maxLengthPhoneInput) {
    setErrorPhoneInput(true);
    return;
  }
  return true;
};
```

A função `onChangePhoneInput` será executada sempre que algum valor for alterado dentro do `PhoneInput` e sempre que for alterado, ela irá aplicar o valor no nosso estado `initialValuePhoneInput` e enquanto o usuário estiver digitando o seu número dentro do input, `errorPhoneInput` sempre será `false` e não serão apresentados erros. Se o usuário tentar submeter o formulário com um número que não seja válido, ele irá executar a função `validationInputPhone`, que irá fazer a verificação e atribuir o valor `true` para o nosso estado `errorPhoneInput`. Dessa forma, mostramos em tela a mensagem de erro, e assim que o usuário alterar o input pra corrigir o seu número de telefone a mensagem de erro irá sumir, ativando a função `onChangePhoneInput`.

E com base no retorno da função `validationInputPhone` podemos condicionar o envio, ou não, do formulário.

Por último, a lógica por trás da validação desse input:

```
<PhoneInput
  [...]

  isValid={(inputNumber, country: any) => {
    const selectedCountry: IPhoneInputCountry = country;

    let placeholderMaskInput = selectedCountry?.format;
    const stringConvertedToArray = placeholderMaskInput.split("");

    let filteredMaskInput = stringConvertedToArray.filter(
      (character: string) => character === "."
    );

    let resultLength;
    if (placeholderMaskInput.match(/\s..$/gm)) {
      // console.log("Matches!");
      resultLength = filteredMaskInput.slice(0, filteredMaskInput.length - 2);
    } else {
      // console.log("NOT MATCHES!");
      resultLength = filteredMaskInput;
    }
    setMaxLengthPhoneInput(resultLength.length);
    return true;
  }}
/>
```

Como estamos usando `typescript`, foi necessário aplicar uma tipagem no parâmetro `country`, porém ao aplicar a interface direto no parâmetro da função acabava gerando conflito no componente e ele não permitia tal ação. Dessa forma, passamos uma tipagem do tipo `any` para que o typescript parasse de acusar erro, mas logo na linha abaixo passamos o valor de `country` para uma variável `selectedCountry` e nesta aplicamos a sua devida tipagem.

Dentro de `selectedCountry` temos uma propriedade chamada `format`, dentro dela vem uma string que representa a máscara do input para aquele determinado país escolhido. Por exemplo, ao selecionar o Brasil, ele nos retorna o seguinte valor:

```
"+.. (..) ........."
```

Onde cada ponto "`.`" seria um dígito. Tendo isso em mente, passamos esse valor para uma variável e convertemos essa string em um `array`, separando caractere por caractere e colocando cada um separadamente dentro do array, isso por meio do método de string `split()`.

Depois disso precisávamos saber a quantidade de números deveriam ser digitado para que fosse válido. Então filtramos o array de strings para que nos retornasse um novo array com apenas os elementos que contém um ponto "`.`", depois disso era só pegar o tamanho desse novo array e saberíamos quantos caracteres deveria estar no input para que ele fosse válido.

Entretanto houve um pequeno problema em que alguns `format` estavam vindo com dois pontos a mais que o permitido, foi onde realizamos uma vericação por meio de `regex` em que ao se deparar com uma máscara que contém esses pontos a mais, ele logo tratava de remover esses dois últimos elementos do nosso array filtrado.

```
let resultLength;

if (placeholderMaskInput.match(/\s..$/gm)) {
  // console.log("Matches!");
  resultLength = filteredMaskInput.slice(0, filteredMaskInput.length - 2);
} else {
  // console.log("NOT MATCHES!");
  resultLength = filteredMaskInput;
}

setMaxLengthPhoneInput(resultLength.length);
```

E assim passando corretamente um número contendo a quantidade máxima de caracteres para o estado `maxLengthPhoneInput` e assim podemos aplicar a função `validationInputPhone` e ela terá a quantidade total de caracteres que aquele número daquele país deveria ter (`maxLengthPhoneInput`) e a quantidade atual que temos no nosso input (`initialValuePhoneInput`) e verifcar se os valores estão de acordo.

Por fim temos uma mensagem de erro que será mostrada ao usuário em caso de tentar submeter um número inválido.

```
{ errorPhoneInput && <p>Please, insert a valid number!</p> }
```

Sinta-se à vontade pra estilizar a mensagem como preferir.

<h2 align="center" id="faq-sectionsPage">
  <a href="#sectionsPage-src">FAQ</a>
</h2>

Nesta seção de perguntas frequentes a estilização é bastante simples, temos um título maior ao topo, e um pequeno `<span>` acima dele. Os componentes `Accordion` foram divididos em duas colunas e a lógica aplicada para selecionar qual acordeon desejamos abrir é bastante simples: primeiro criamos um estado que vai armazenar qual acordeon será aberto:

```
const [selectedAccordion, setSelectedAccordion] = useState("");

function handleOpenAccordion(AccordionName: string) {
  if (AccordionName === selectedAccordion) {
    setSelectedAccordion("");
    return;
  }
  setSelectedAccordion(AccordionName);
}
```

Também implementamos uma função `handleOpenAccordion` que será executada quando clicado no acordeon desejado, e ao fazer isso, o acordeon irá passar um valor que o identificará e fará a abertura do componente:

```
<Accordeon
  AccordeonHeight="375px"
  question="What is IT Team Augmentation?"
  openAccordion={() => handleOpenAccordion("one")} // A função será passada já com o valor daquele accordion
  isOpen={selectedAccordion === "one"}
>
...
```

Se desejar estilizar o componente <a href="#components-src">Accordion</a>, basta ir até a descrição desse componente nesta mesma documentação e você irá encontrar mais detalhes sobre. Se deseja estilizar o layout desta seção, basta ir no arquivo `styles.ts` dentro da pasta `FAQ`. A responsividade desta seção está em seus respectivos arquivos de estilo.

<h2 align="center" id="homeSection-sectionsPage">
  <a href="#sectionsPage-src">HomeSection</a>
</h2>

A seção `Home Section` é a seção principal que podemos ver logo que entramos no site. Dentro dela temos o componente <a href="#header-components">Header</a> importado logo no topo. Em seguida temos uma imagem que será usada como background desta seção, está possui um `position: absolute` e um `z-index: -1` para que ela fique no topo da página, em um nível abaixo, para que não interferisse nos componentes em tela: títulos, botões, parágrafos, etc.

Nesta seção temos um título principal, um subtítulo e um parágrafo, logo abaixo temos um botão que nos irá levar até a seção <a href="#contactUs-sectionsPage">ContactUs</a> e um texto ao lado deste botão. Todo esse conteúdo de dentro está centralizado ao meio e sua responsividade foi aplicada no arquivo `styles.ts` dentro da pasta desta seção.

<h2 align="center" id="multiTeams-sectionsPage">
  <a href="#sectionsPage-src">MultiTeams</a>
</h2>

Em `MultiTeams` temos a primeira seção com um menu dinâmico. Aqui temos a importação dos componentes <a href="#buttonTechList-components">ButtonTechList</a> e da nossa lista <a href="#teamsList-components">TeamsList</a>. Para mais detalhes sobre esses componentes, vale a pena conferir o trecho da documentação que abordamos esses tópicos.

Aqui aplicamos uma lógica para que a listagem dos times de tecnologias fossem apresentados em tela de acordo com suas respectivas áreas `Technology`, `Product` e `Design`. Para isso, primeiramente importamos o componente `TeamsListData`, que está na pasta `shared` e contém um array com a lista dos nomes das tecnologias separadas pelos seus times.

Em seguida criamos alguns estamos e uma função para lidar com essa listagem dinâmica:

```
const [chooseTeam, setChooseTeam] = useState<TeamsProps>("tech");
const [listActive, setListActive] = useState<string[]>([]);

function handleTeamActive(team: TeamsProps) {
  setChooseTeam(team);
  setListActive(TeamsListData[team]);
}
```

O primeiro estado `chooseTeam` é onde iremos armazenar o nome do team ("tech", "product" e "design"), como assim que carregamos a página temos que mostrar um time, o valor inicial para esse estado já foi o time `tech`. O segundo estado é a lista de todos grupos daquele time específico. Porém essa lista vai variar de acordo com o time escolhido `chooseTeam` vá alterando.

A função `handleTeamActive` irá receber o título do time ativo e logo irá passar esse valor para o estado `chooseTeam`, assim como também vamos pegar a listagem do time correto do nosso objeto `TeamsListData` com base no time indicado e passar para o nosso estado `listActive`.

O Objeto `TeamsListData` tem uma cara mais ou menos assim:

```
export const TeamsListData = {
  tech: [...],
  product: [...],
  design: [...],
}
```

Com base nisso, passamos a listagem escolhida dentro do nosso estado `listActive` para dentro do nosso componente-lista `TeamsList`.

<h2 align="center" id="scaleTechTeam-sectionsPage">
  <a href="#sectionsPage-src">ScaleTechTeam</a>
</h2>

Nesta seção temos um título principal, uma descrição e alguns cards. A parte legal aqui é que os cards foram criados dentro de uma `<div>` que possui um `template grid` e isso permitiu que tanto a estilização quanto a responsividade da seção fosse bem mais simples.

Na `<div>` que engloba os `cards` passamos a seguinte configuração para o grid:

```
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: minmax(85px, auto);
gap: 30px;
```

Em `grid-template-columns: repeat(4, 1fr);` dividimos o nosso grid em 4 colunas, cada uma delas com as larguras iguais `1fr`. Passamos também uma altura mímina e máxima, respectivamente, para as linhas do grid `minmax(85px, auto);`, e por último um `gap` de 30px para que os cards dessem uma respirada. No media query desse conteúdo é só alterando a quantidade de colunas do grid e o tamanho das linhas, bem tranquilo.

O efeito de `hover` possui um detalhe a mais. Os ícones que vieram provenientes da biblioteca <a href="react-icons.github.io/react-icons/">`react-icons`</a> recebem as cores dinamicamente assim como o texto, porém, temos dois ícones que não vieram dessa biblioteca, pois não foi encontrado a família. De tal forma, foi retirado esse ícone da internet e os convertidos manualmente para `SVG`. Por conta disso, não foi possível alterar sua cor dinamicamente como podemos fazer com um texto ou um svg da bibliboteca react-icons, então aplicamos uma propriedade css `filter: invert(1)` que consegue fazer o mesmo efeito de alterar a cor do ícone, de preto para branco. Dentro do componente `Card` dentro do arquivo `styles.ts` foi adicionado essa estilização ao passar o mouse em cima do componente, resultando em uma estilização igual para todos os cards, independente dos ícones.

<h2 align="center" id="techStacks-sectionsPage">
  <a href="#sectionsPage-src">TechStacks</a>
</h2>

A seção `TechStacks` é identica à seção <a href="#multiTeams-sectionsPage">MultiTeams</a>, a única diferença é os dados vem de um outro objeto, o `StackListData.ts`, também dentro da pasta <a href="#shared-src">shared</a>, e o componente que fará a listagem é o <a href="#stackList-components">StackList</a>, e cada elemento terá um texto e uma imagem, referente àquela tecnologia, por exemplo: `{ title: Javascript, image: 'URL_da_Imagem' }`.

Os botões que farão o controle de qual `Stack` será listada também é o componente <a href="#buttonStackList-components">ButtonStackList</a> e a sua lógica para a sua ativação é a mesma lógica.

```
const [selectedStack, setSelectedStack] = useState<StackProps>("backend");
const [stackActive, setStackActive] = useState<StackItem[]>([]);

function handleStackList(stack: StackProps) {
  setSelectedStack(stack);
  setStackActive(StackListData[stack]);
}
```

Como podemos observar, o raciocínio se mantém o mesmo nessa seção. Dentro do nosso estado `selectedStack` temos armazenado qual stack selecionada e com isso podemos definir a listagem de qual stack desejamos mostrar em tela. No estado `stackActive` armazenamos a lista do conteúdo dentro da stack selecionada.

Depois passamos por props a lista que está no nosso estado `stackActive`, para o nosso componente <a href="#stackList-components">StackList</a> e ele fará o trabalho de renderizar os pequenos cards com o nome e a logo daquela tecnologia.

A lógica dos botões `ButtonTechList` é comum tanto na seção aqui quanto na seção `MultiTeams`, passamos para o componente uma verificação que retorna um valor booleano, se o valor do nosso estado `selectedStack` for igual áquele do botão especifico, então retornará verdadeiro. Passamos também uma função para que ao clicar nesse botão, um novo estado seja passado ao nosso estado `selectedStack` e por último é o título que irá aparecer naquele botão `TechTitle`.

<h2 align="center" id="testimonials-sectionsPage">
  <a href="#sectionsPage-src">Testimonials</a>
</h2>

Esta seção é bastante simples, já que boa parte dela se resume ao componente <a href="#carrosselTestimonials-components">CarrosselTestimonials</a>, basta importá-lo e aplicá-lo em tela dentro de uma `<div>` com uma largura máxima pré-definina e ele se comportará bem. Acima desse componente temos um título e um subtítulo bem simples.

Abaixo do carrossel de reviews dos clientes da `Luby` temos uma "sub-seção" que nos apresenta um status e informações sobre as conquistas da luby. Nesta seção temos dois conteúdos separados cada um de um lado, dessa forma colocamos cada um dentro de uma `<div>` e aplicamos um alinhamento de `justify-content` para que elas se separassem. Temos alguns títulos e spans, mas sua estilização não envolve nenhuma lógica complicada. Vale atentar-se que na coluna da direita temos um widget proveniente do site <a href="https://clutch.co/profile/luby#summary">clutch.co</a>, é um pequeno widget de review que também já está pronto e basta importar o componente `ClutchReview`. Mais detalhes sobre este componente pode ser encontrado em <a href="#clutchReview-components">ClutchReview</a>.

<h2 align="center" id="thePillars-sectionsPage">
  <a href="#sectionsPage-src">ThePillars</a>
</h2>

A seção `The 3 Pillars` é uma seção relativamente simples, temos um título no topo e um subtítulo logo abaixo, além de um botão que linka até a seção <a href="#contactUs-sectionsPage">ContactUs</a>. A parte principal desta seção se encontra nos dois componentes `IframeThumb` e `IframeVideo`, onde nós trocamos a renderização dos componentes de forma condicional. A lógica aplicada é bem básica, mas só por renderizar uma simples div com uma imagem de fundo e um ícone já causa um impactor enorme na performance do site, ao invés de renderizar todo um iframe com diversos dados externos:

```
const [loadVideo, setLoadVideo] = useState(false);

function showVideo() {
  setLoadVideo(true);
}

{loadVideo ? <IframeVideo /> : <IframeThumb showVideo={showVideo} />}
```

O estado `loadVideo` é o que vai servir de gatilho para trocar entre o `IframeThumb` e o `IframeVideo`. A função só tem um propósito: trocar o valor do estado de `false` para `true`. Dessa forma a thumbnail some e o navegador faz a requisição e nos retorna o vídeo do youtube. A função de troca de componente é passada por props para o `IframeThumb` e passamos para o ícone de `play` no evento `onClick`.

<h2 id="shared-src">shared</h2>

Dentro da pasta `shared` temos definidos os estilos globais assim como os nossos temas, com as fontes utilizadas no projeto, as cores, além dos dados das listas <a href="#stackList-components">StackList</a> e <a href="#teamsList-components">TeamsList</a>.

- <a href="#dataLists-shared">dataLists</a>
  - <a href="#Stack-dataLists">StackListData</a>
  - <a href="#Teams-dataLists">TeamsListData</a>
- <a href="#globalStyle-shared">globalStyle</a>
- <a href="#globalTheme-shared">globalTheme</a>

<h2 align="center" id="dataLists-shared">dataLists</h2>

Dentro de `dataLists` temos as informações que vão servir para apresentar em tela as informações das listas nas seções `StackLists` e `TeamsLists`.

<h3 id="Stack-dataLists">StackListData</h3>

Em StackListData temos um objeto contendo a lista de tecnologias, com suas logos e seus nomes, separados por categorias: `backend`, `frontend`, `mobile`, etc. E todas as imagens das logos das tecnologias estão dentro da pasta `public/assets/programming-tools`, separadas por suas respectivas stacks.

<h3 id="Teams-dataLists">TeamsListData</h3>

Em `TeamsListData` também temos um objeto contendo uma lista de áreas de desenvolvimento, separados por times: `technology`, `product` e `design` .

<h2 align="center" id="globalStyle-shared">globalStyle</h2>

Aqui nós definimos alguns estilos globais por meio da ferramenta de contexto do styled-components, passando algumas estilizações que desejamos que sejam aplicadas em todo o projeto. Diferente do arquivo `globals.css`, dentro da pasta <a href="#styles-folder">Styles</a>, nos estilos globais do styled-components não é uma boa opção para fazer a importação das fontes do projeto. Por isso utilizamos ambos os estilos globais.

Para mais informações sobre estilos globais com o Styled Components, é recomendado conferir mais detalhes em sua <a href="https://styled-components.com/docs/api#helpers">documentação</a>.

<h2 align="center" id="globalTheme-shared">globalTheme</h2>

Assim como na estilização global, podemos criar um objeto contendo nossas cores utilizadas no projeto, assim como as fontes. De tal forma, podemos acessar essas informações em qualquer lugar do projeto, já que o componente `<ThemeProvider>` está englobando todo o projeto dentro do arquivo `_app.tsx`. O tema criado:

```
export default {
  colors: {
    text: "#FFFFFF",
    text_dark: "#1b1b1b",

    primary: "#02A4EF",
    secondary: "#FFB706",

    bg_hover: "#0039B3",
    bg_hover_dark: "#002066",
    hover_button: "#2F3439",
    bg_cards: "#EBEBE8",
  },
  fonts: {
    oswald: "Oswald",
    manrope: "Manrope",
  },
};
```

Dentro de `globalTheme` criamos esse objeto contendo nossas cores e fontes. Dentro do arquivo `_app.tsx` fazemos a importação do componente `<ThemeProvider>` proveniente do 'styled-components' e englobamos todo o conteúdo de `_app.tsx` e passamos o nosso tema como atributo do nosso componente `<ThemeProvider>`:

```
import { GlobalStyle } from "@shared/globalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "@shared/globalTheme/theme";

<ThemeProvider theme={Theme}>
  <GlobalStyle />
  <Component {...pageProps} />
</ThemeProvider>
```

Exemplo de como consumir uma cor proveniente do nosso tema lá de dentro do nosso arquivo `styles.ts` dentro de alguma pasta de componente ou seção:

```
color: ${({ theme }) => theme.colors.text_dark};
```

Para mais detalhes sobre como utilizar os temas e os estilos globais, recomendo ler essa seção da documentação do <a href="https://styled-components.com/docs/api#helpers">styled components</a>

<h2>styled.d.ts</h2>

Nesse arquivo nos criamos só para resolver os problemas de tipagem e fazer com que o próprio typescrit nossa nos ajudar com sugestões sobre quais as propriedades nós temos nos temas. Assim, sempre que tivermos dúvidas sobre o nome de alguma cor ou fonte, o próprio typescript vai nos mostrar quais opções temos.

<hr />

Em caso de dúvidas ou sugestões a respeito da documentação, pode entrar em contato com o email <i>eversonv4@gmail.com</i>
