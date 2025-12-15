# 🐍 Jornada SASS – Landing Page (Sass)

Este projeto é uma **landing page responsiva** desenvolvida com **HTML5 e Sass**, focada em organização de estilos, responsividade por breakpoints e boas práticas modernas de CSS.  
O layout é uma **cópia educacional do site da Hashtag Treinamentos**, utilizada exclusivamente para **estudo e prática**.

👉 **Este é meu primeiro projeto utilizando Sass**, com foco em estrutura, compilação, prefixação automática e compressão de CSS.

---

## 🎯 Objetivo do Projeto

O objetivo foi:

- Aprender **Sass na prática**
- Organizar CSS de forma escalável
- Trabalhar responsividade sem depender de frameworks
- Entender o fluxo real de build CSS (compile → prefix → compress)
- Evitar gambiarras comuns como posicionamento manual excessivo

---

## 🧩 Tecnologias Utilizadas

- **HTML5**
- **Sass (SCSS)**
- **Node.js + NPM**
- **Autoprefixer**
- **PostCSS**

---

## 🏗 Estrutura HTML

- **Hero Section**: Banner principal com chamada para ação
- **Seção de Passos**: Grid responsivo com cards explicativos
- **Conteúdo do Evento**: Thumbnails das aulas
- **Sobre o Instrutor**: Texto + imagem em layout flexível
- **Modal**: Formulário exibido via checkbox + CSS
- **Rodapé**: Informações institucionais

---

## 🎨 Estilização com Sass

A estilização foi feita utilizando **Sass puro**, com separação clara de responsabilidades.

### Arquivos principais:

- **`main.scss`**
  - Estilos globais
  - Layout base
  - Tipografia
  - Componentes reutilizáveis

- **`respo.scss`**
  - Media queries
  - Ajustes para mobile, tablet e desktop

---

## ⚙️ Scripts de Build (package.json)

```json
"scripts": {
  "watch:sass": "sass sass/main.scss css/style.css -w",
  "compile:sass": "sass sass/main.scss css/style.comp.css",
  "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.comp.css -o css/style.prefix.css",
  "compress:css": "sass css/style.prefix.css css/style.css --style compressed",
  "build:css": "npm-run-all compile:sass prefix:css compress:css"
}
```

---

## 📱 Responsividade

- Layout por breakpoints
- Testado em mobile, tablet e desktop
- Não quebra em telas reais

---

## 🚀 Aprendizados

- Uso real de Sass
- Flexbox e Grid
- Fluxo profissional de CSS
- Responsividade consciente

---

## 📂 Estrutura do Projeto

```
📦 PROJETOPAGINACAPUTA(SASS)
├── 📂 css/
│   └── style.css
├── 📂 sass/
│   ├── main.scss
│   └── respo.scss
├── 📂 src/
│   └── imagens
├── 📄 index.html
├── 📄 package.json
├── 📄 package-lock.json
└── 📄 README.md
```

---

## 📜 Licença

Projeto educacional, sem fins comerciais.
