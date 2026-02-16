# Porque Atletas do Brasil?

Este projeto foi desenvolvido como uma evolução de um trabalho anterior,
com foco em refatoração e melhoria das boas práticas de CSS, organização
de código e estrutura semântica. A proposta é apresentar informações
sobre esportes olímpicos e atletas brasileiros de forma moderna,
responsiva e interativa.

------------------------------------------------------------------------

## 🏗 Estrutura HTML

-   **Cabeçalho (Header)**: Contém a navbar fixa com Bootstrap, campo de
    pesquisa dinâmica e navegação por âncoras.
-   **Seção Inicial (Hero Section)**: Tela principal com chamada visual
    forte e botões de ação.
-   **Seção Sobre**: Apresentação do propósito do projeto.
-   **Seção Serviços**: Cards dinâmicos que mudam conforme o esporte
    pesquisado.
-   **Seção Testemunhos**: Implementação de Carousel com Bootstrap.
-   **Seção Contato**: Informações organizadas em layout responsivo.
-   **Rodapé (Footer)**: Links rápidos, contato e informações
    adicionais.

O projeto utiliza elementos semânticos como `<header>`, `<section>`,
`<nav>`, `<footer>`, melhorando acessibilidade e organização estrutural.

------------------------------------------------------------------------

## 🎨 Estilização (SCSS + Bootstrap)

-   **Bootstrap 5.3**: Utilizado para grid responsivo, navbar, carousel
    e componentes visuais.
-   **SCSS (Sass)**: Organização modular dos estilos, facilitando
    manutenção e escalabilidade.
-   **Estilos personalizados**: Ajustes visuais próprios para identidade
    do projeto.
-   **Animação Marquee**: Implementação de animação contínua com CSS.
-   **Refatoração CSS**: Correção de problemas anteriores como repetição
    excessiva de código, falta de padronização e problemas de
    alinhamento.

------------------------------------------------------------------------

## ⚡ JavaScript

O projeto utiliza JavaScript puro para manipulação do DOM.

### 🔎 Função de Pesquisa Dinâmica

A função `pesquisarEsporte()`:

-   Captura o valor digitado pelo usuário.
-   Converte para minúsculo.
-   Atualiza dinamicamente os cards da seção de serviços.
-   Altera título, imagem e descrição conforme o esporte selecionado:
    -   Futebol
    -   Skate
    -   Taekwondo (padrão)

Isso demonstra manipulação de DOM, controle condicional
(`if / else if / else`) e atualização dinâmica de conteúdo.

------------------------------------------------------------------------

## 🚀 Destaques e Aprendizados

-   Estruturação semântica adequada do HTML.
-   Uso eficiente do Bootstrap para responsividade.
-   Organização de estilos com SCSS.
-   Manipulação dinâmica do DOM com JavaScript.
-   Melhoria na legibilidade e organização comparado à versão anterior
    do projeto.
-   Separação clara entre estrutura (HTML), estilo (SCSS/CSS) e
    comportamento (JS).

------------------------------------------------------------------------

## 🌐 Funcionamento

Para rodar o projeto:

1.  Instale as dependências:

```{=html}

```
    npm install

2.  Compile o SCSS:

```{=html}

```
    npm run sass

3.  Abra o arquivo `index.html` no navegador.

O projeto utiliza Bootstrap via CDN e não depende de backend.

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    📂 alura
    ├── 📄 README.md
    ├── 📄 index.html
    ├── 📄 script.js
    ├── 📄 package.json
    ├── 📄 package-lock.json
    ├── 📂 sass/
    │   └── main.scss
    ├── 📂 css/
    │   └── style.css (gerado)
    ├── 📂 img/
    └── 📂 node_modules/

------------------------------------------------------------------------

## 📌 Contribuição

Sinta-se à vontade para contribuir enviando um **Pull Request** ou
abrindo uma **Issue**.

------------------------------------------------------------------------

## 📜 Licença

Este projeto está sob a licença MIT.
