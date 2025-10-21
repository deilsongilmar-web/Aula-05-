# ⚡ Portal de Clientes - Energia (Vanilla JS e Tailwind CSS)

Este é um projeto de um formulário de login/portal de clientes moderno e altamente funcional, desenvolvido como uma **Single Page Application (SPA)** usando apenas **HTML5, JavaScript puro (Vanilla JS)** e **Tailwind CSS (via CDN)**. O objetivo é demonstrar como criar uma interface de usuário reativa com foco em internacionalização e acessibilidade sem a necessidade de grandes frameworks.

-----

## 🖼️ Pré-visualização

⚠️ 

 `https://github.com/deilsongilmar-web/Aula-05-/issues/1`

-----

## 🌟 Funcionalidades Principais

| Categoria | Funcionalidade | Descrição |
| :---: | :--- | :--- |
| 🎨 **Design & Estilo** | **Tailwind & Responsividade** | Estilização moderna e responsiva carregada diretamente via CDN. |
| 🧠 **Núcleo Reativo** | **Gerenciamento de Estado** | A interface se atualiza dinamicamente (`render()` function) com base no estado (`state`) global. |
| 🌐 **Internacionalização** | **Suporte a Múltiplos Idiomas** | Tradução integrada para **Português (pt) 🇧🇷**, **Inglês (en) 🇬🇧** e **Espanhol (es) 🇪🇸**. |
| ✋ **Acessibilidade** | **LIBRAS & Áudio** | Botões de alternância visual para a Língua de Sinais e Leitura de Tela. |
| ☀️ **UX/Seleção** | **Tipos de Cliente** | Alternância visual clara entre clientes de **Energia Elétrica ⚡** e **Solar ☀️**. |
| 🔑 **Segurança** | **Visualização de Senha** | Funcionalidade de alternar a visibilidade da senha (Mostrar/Ocultar). |

-----

## 🚀 Guia de Início Rápido

Este projeto é um **arquivo único** e **não exige instalação de dependências (npm, yarn)** ou servidor web para rodar.

1.  **Clone o Repositório:**
    ```bash
    git clone [SEU_LINK_DO_REPOSITORIO]
    cd [NOME_DO_REPOSITORIO]
    ```
2.  **Execute:** Abra o arquivo `index.html` diretamente no seu navegador.
3.  **Teste:** Interaja com o seletor de idioma, o botão LIBRAS e o formulário para ver o estado mudar dinamicamente.

-----

## 🏗️ Estrutura e Arquitetura

O projeto adota um padrão de arquitetura baseado em estado (similar a frameworks reativos, mas implementado em JS puro):

### 1\. Tecnologias Utilizadas

  * **HTML5:** Estrutura.
  * **JavaScript (Vanilla JS):** Lógica, reatividade e manipulação do DOM.
  * **Tailwind CSS (CDN):** Framework de utilidades para estilização.
  * **SVG embutido:** Ícones definidos como funções JS para evitar dependências de bibliotecas de ícones.

### 2\. Fluxo de Reatividade

1.  **`state` Objeto:** Contém o estado atual da UI (ex: `state.idioma`, `state.mostrarSenha`).
2.  **`setState(newState)`:** Função que recebe as alterações, atualiza o `state` e imediatamente chama `render()`.
3.  **`render()`:** A função responsável por:
      * Gerar o novo bloco de HTML com base no `state` atual.
      * Injetar o novo HTML no DOM (`app.innerHTML = ...`).
      * **Reatribuir todos os *Event Listeners*** aos novos elementos.

-----

## ⏭️ Próximos Passos (Contribuição)

Sinta-se à vontade para contribuir com melhorias\! Algumas sugestões:

  * **Validação de Formulário:** Implementar validação em tempo real e feedback visual.
  * **Acessibilidade (Real):** Integrar um widget de vídeo LIBRAS real ou uma solução de leitura de tela.
  * **Otimização:** Extrair os scripts e estilos em arquivos separados para um ambiente de produção (usando ferramentas de *build* como Vite ou Webpack).
  * **API Connection:** Conectar o `handleSubmit` a uma API real (ex: usando `fetch` para um endpoint de login).
