# 📱 Projeto – Gerador de "Link na Bio"

Este projeto foi desenvolvido como uma ferramenta simples e elegante para criar uma página de **"Link na Bio"** personalizada, semelhante às utilizadas em redes sociais como Instagram, TikTok e Twitter. Ele permite ao usuário preencher um formulário com seu nome, foto e links importantes, e visualizar em tempo real como a página ficará em dispositivos móveis.

## 💡 Motivação do Projeto

A ideia surgiu da necessidade de criar uma **solução prática e sem dependências externas** para gerar uma página de perfil com links de forma rápida. O foco foi construir uma aplicação totalmente funcional utilizando **HTML, CSS e JavaScript puros**, explorando manipulação do DOM, preview dinâmico e responsividade.

---

## 🏗 Estrutura HTML

- **Formulário principal**: Permite ao usuário inserir nome, URL da foto de perfil e até dois links personalizados.
- **Mini preview de foto**: Exibe a imagem carregada via URL ou upload de arquivo local.
- **Área de preview (simulação de celular)**: Mostra em tempo real como será a página final com avatar, nome e botões de links.
- **Footer**: Exibe créditos e informações adicionais do projeto.

> Tudo isso organizado de forma semântica e acessível com uso de `aria-labels` e boas práticas de HTML5.

---

## 🎨 Estilização CSS

- **`style.css`**:  
  - Define o layout geral da página, tipografia, cores e espaçamentos.  
  - Cria um tema moderno com **gradientes, sombras e variáveis CSS**.  
  - Adiciona **animações sutis e transições suaves** para uma experiência mais fluida.  
  - Implementa **responsividade completa** para desktops, tablets e smartphones usando media queries.
  - Inclui elementos visuais como:  
    - Preview em formato de smartphone  
    - Botões de links com gradiente e sombra  
    - Estilos diferenciados para erros e feedback ao usuário.

---

## ⚙️ JavaScript

- **`script.js`** – Manipula toda a interatividade do projeto:  
  - ✅ **Validação de campos**: exige que pelo menos um link seja informado.  
  - 🖼️ **Preview de imagem**: atualiza dinamicamente a foto a partir de URL ou upload local.  
  - 🔗 **Geração de links clicáveis**: cria botões estilizados com base nos URLs fornecidos.  
  - 📱 **Atualização ao vivo do preview**: exibe imediatamente as alterações feitas no formulário.  
  - 📂 **Upload de arquivos**: suporta imagens locais e mostra miniaturas no formulário.  
  - 🧪 **Botão de demonstração**: preenche automaticamente campos de exemplo para testes.

---

## 🚀 Destaques e Aprendizados

- 🛠 **HTML, CSS e JS puros**: nenhum framework ou biblioteca externa foi utilizada.  
- 📸 **Preview dinâmico com upload local**: exibe imagens diretamente no navegador usando `URL.createObjectURL`.  
- 📲 **Design responsivo e mobile-first**: interface adaptada para diferentes tamanhos de tela.  
- ♻️ **Manipulação do DOM em tempo real**: elementos HTML são criados e atualizados dinamicamente.  
- ⚡ **Experiência fluida e acessível**: com mensagens de erro amigáveis e feedback visual.

---

## 🌐 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno.  
2. Preencha o formulário com:  
   - Nome de usuário  
   - URL da foto de perfil **ou** carregue uma imagem do seu computador  
   - Até dois links personalizados  
3. Clique em **"Gerar preview"** para visualizar sua página no lado direito.  
4. Use o botão **"Preencher exemplo"** para testar rapidamente.

---

## 📂 Estrutura do Projeto

```
📁 link-na-bio/
├── 📄 index.html        → Estrutura principal do projeto
├── 📄 style.css         → Estilos e responsividade
├── 📄 script.js         → Lógica e interatividade com JavaScript
├── 📄 README.md         → Documentação do projeto
```

---

## 📌 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para enviar **Pull Requests**, abrir **Issues** ou sugerir novas funcionalidades.

---

## 📜 Licença

Este projeto está sob a licença **MIT** – você pode usá-lo e modificá-lo livremente para fins pessoais ou comerciais.
