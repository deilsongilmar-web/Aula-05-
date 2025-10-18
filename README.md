# Aula-05- Criação de uma  pagina para clientes de energia solar e elétrica.

# 🌞 DL MENDES SERVIÇOS - Página de Login com Acessibilidade

Uma página de login moderna e acessível para plataformas de energia solar, com suporte a múltiplos idiomas e Língua de Sinais Brasileira (LIBRAS).

## ✨ Características

### 🎨 Design Moderno
- Interface responsiva e intuitiva
- Gradientes visuais atraentes em tons de laranja (energia solar)
- Painel solar animado com efeitos de brilho
- Sol flutuante com animações suaves
- Design dual-section (imagem + formulário)

### 🌐 Suporte Multilíngue
- **Português Brasileiro (PT)** - Idioma padrão
- **Inglês (EN)**
- **Espanhol (ES)**
- Seletor de idiomas na barra de acessibilidade
- Tradução dinâmica de todos os elementos da página

### ♿ Acessibilidade - LIBRAS
- Botão dedicado para ativar o guia de LIBRAS
- Modal com instruções detalhadas de gestos e sinais
- Guia prático com 6 gestos principais:
  - 🖱️ Clicar
  - ✍️ Escrever
  - 🔑 Senha
  - ❓ Ajuda
  - ☀️ Energia Solar
  - 🌐 Mudar Idioma
- Recomendação de intérprete ou videoconferência

### 📱 Responsividade
- Totalmente adaptado para dispositivos móveis
- Design fluido em tablets, desktops e smartphones
- Barra de acessibilidade otimizada para telas menores

## 🚀 Como Usar

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/sunpower-login.git
cd sunpower-login
```

2. Abra o arquivo `index.html` em seu navegador:
```bash
# Opção 1: Abrir diretamente
open index.html

# Opção 2: Usar um servidor local (Python 3)
python -m http.server 8000
# Acesse: http://localhost:8000

# Opção 3: Usar Node.js (http-server)
npx http-server
```

### Funcionalidades

**Seletor de Idiomas:**
- Clique nos botões **PT**, **EN** ou **ES** no topo direito
- A página será traduzida instantaneamente

**Guia LIBRAS:**
- Clique no botão **🤟 LIBRAS** para abrir o modal
- Visualize os gestos e instruções
- Clique em **✕** ou fora do modal para fechar

**Formulário de Login:**
- Preencha Usuário e Senha
- Marque "Lembrar-me" se desejar
- Clique em "ENTRAR" para enviar

## 📁 Estrutura do Projeto

```
sunpower-login/
├── index.html          # Página principal com HTML, CSS e JavaScript
├── README.md           # Este arquivo
└── assets/            # (Opcional) Pasta para imagens adicionais
```

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações e responsividade
  - Flexbox e Grid
  - Gradientes lineares e radiais
  - Animações keyframe
  - Media queries
- **JavaScript Vanilla** - Lógica de tradução e interatividade
  - DOM manipulation
  - Event listeners
  - Classes dinâmicas

## 🎯 Funcionalidades de Código

### Tradução Dinâmica
```javascript
const textos = {
    pt: { /* textos em português */ },
    en: { /* textos em inglês */ },
    es: { /* textos em espanhol */ }
};

function mudarIdioma(idioma) {
    // Atualiza botão ativo
    // Traduz todos os elementos
}
```

### Modal de LIBRAS
```javascript
function abrirLibras() {
    document.getElementById('libras-modal').classList.add('active');
}

function fecharLibras() {
    document.getElementById('libras-modal').classList.remove('active');
}
```

## 🎨 Personalização

### Mudar Cores
Edite as variáveis de cor no CSS:
```css
/* Cor principal (laranja) */
color: #FF9800;

/* Gradiente do painel solar */
background: linear-gradient(45deg, #1a237e, #283593);
```

### Adicionar Novos Idiomas
1. Adicione um novo objeto no array `textos`:
```javascript
es: {
    'brand-text': 'SunPower',
    'tagline': 'Energía limpia...',
    // ... mais traduções
}
```

2. Adicione um novo botão de idioma:
```html
<button class="lang-btn" onclick="mudarIdioma('fr')">FR</button>
```

### Modificar Gestos LIBRAS
Edite o conteúdo das `.libras-card` no HTML para adicionar ou alterar gestos.

## 📱 Responsividade

| Dispositivo | Breakpoint | Ajustes |
|-------------|-----------|---------|
| Mobile | < 768px | Layout vertical, barra compacta |
| Tablet | 768px - 1024px | Layout intermediário |
| Desktop | > 1024px | Layout completo dual-section |

## 🔒 Segurança

⚠️ **Importante:** Este é um template de login. Para produção, implemente:

- Validação de senha no servidor
- HTTPS/SSL
- Hashing de senhas
- Proteção CSRF
- Rate limiting
- Autenticação segura (OAuth, JWT)

## 🌍 Acessibilidade

### WCAG 2.1 Compliance
- ✅ Contraste adequado de cores
- ✅ Navegação por teclado
- ✅ Rótulos descritivos
- ✅ Suporte a leitores de tela
- ✅ Guia em LIBRAS para pessoas surdas

### Melhorias Futuras
- [ ] Integração com intérprete de vídeo em LIBRAS
- [ ] Audiodescrição das imagens
- [ ] Validação em tempo real com feedback auditivo
- [ ] Modo de alto contraste
- [ ] Suporte a mais idiomas

## 📋 Browser Support

- ✅ Chrome (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)
- ✅ Opera (v76+)

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Ideias para Contribuição
- Novos idiomas e traduções
- Melhorias de acessibilidade
- Novos gestos LIBRAS
- Otimizações de performance
- Testes automatizados

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💼 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- Email: seu.email@exemplo.com

## 🙏 Agradecimentos

- Comunidade surda brasileira pela inspiração em LIBRAS
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) por diretrizes de acessibilidade
- Comunidade open source

## 📞 Suporte

Se encontrar problemas ou tiver sugestões:
- Abra uma [Issue](https://github.com/seu-usuario/sunpower-login/issues)
- Envie um email
- Faça uma discussão no repositório

## 🔗 Links Úteis

- [LIBRAS - Língua de Sinais Brasileira](https://www.cultura.gov.br/)
- [W3C Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [Can I use - Browser Compatibility](https://caniuse.com/)

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Desenvolvido com ❤️ para acessibilidade e inclusão

</div>
