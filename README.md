# 🖥️ Pokedex JS - Projeto Interativo

Bem-vindo à minha **Pokédex em JavaScript**, um projeto que consome a [PokéAPI](https://pokeapi.co/) e exibe os Pokémons de forma dinâmica, com detalhes completos ao clicar em cada um.  

---

🌐 **Veja o projeto online:**  
Acesse a Pokédex interativa diretamente no navegador pelo GitHub Pages: [Pokédex](https://feliperonni.github.io/pokedex/). Explore os Pokémon, visualize detalhes no modal e use o botão "Load More" para carregar toda a lista de forma dinâmica!

---

## 🎯 Descrição do Projeto

Esta Pokédex é um **desafio de aula**, mas evoluiu para um projeto interativo e visualmente agradável. Ela permite:

- Carregar Pokémon dinamicamente com paginação (`Load More`).  
- Exibir cards de Pokémon com **nome, número, tipos e imagem**.  
- Clicar em qualquer Pokémon para abrir um **modal** com detalhes extras:
  - Altura e peso  
  - Habilidades  
  - Stats (ataque, defesa, HP, etc.)  

O design é responsivo e organizado, com **cores por tipo de Pokémon** e modal limpo e centralizado.

---

## 💻 Funcionalidades

1. **Carregamento dinâmico de Pokémon**  
   - Mostra 24 Pokémon por vez.  
   - Ao clicar em "Load More", novos Pokémon aparecem e continuam clicáveis.  

2. **Detalhes interativos no modal**  
   - Modal centralizado com fundo escuro sem interferir na lista.  
   - Exibe informações detalhadas que não poluem a lista principal.  

3. **Design responsivo**  
   - Cards organizados em grid que se adaptam ao tamanho da tela.  
   - Fundo principal cinza, cards coloridos por tipo, modal elegante.  

---

## ⚡ Tecnologias Utilizadas

- HTML5  
- CSS3 (Grid, Flexbox, Responsividade, Modal)  
- JavaScript (Fetch API, Promises, Event Delegation, Classes ES6)  
- API: [PokéAPI](https://pokeapi.co/)  

---

## 📌 Como Usar

1. Clone este repositório:
```bash
git clone https://github.com/feliperonni/js-developer-pokedex.git
Abra o arquivo index.html no navegador.

Navegue pela lista de Pokémon, clique em qualquer card para ver os detalhes.

Clique em "Load More" para carregar mais Pokémon dinamicamente.

🎨 Design
Cards com cores diferenciadas de acordo com o tipo de Pokémon.

Modal centralizado com fundo escuro.

Layout responsivo, ajustando a quantidade de colunas conforme o tamanho da tela.

🔗 Links
API usada: PokéAPI

👨‍💻 Autor
Felipe Ronni
