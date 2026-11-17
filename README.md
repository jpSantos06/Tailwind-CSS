# Biblioteca de Componentes UI — React + Tailwind CSS

Projeto desenvolvido com React e Vite para demonstrar a criação de uma biblioteca de componentes reutilizáveis, utilizando Tailwind CSS para estilização.

## Componentes

- **Card:** estrutura de conteúdo com título, descrição e área para outros elementos.
- **Button:** botão com variantes `primary`, `secondary`, `danger` e `outline`, além de tamanhos.
- **Badge:** etiqueta visual com variantes `success`, `warning`, `error`, `info` e `neutral`.
- **Input:** campo de formulário com label, placeholder, texto auxiliar e estado de erro.
- **Alert:** mensagem de feedback com variantes `success`, `error` e `warning`.
- **Header**, **Footer** e **Lista:** componentes de estrutura e apresentação.

## Como executar

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components
        ├── Alert.jsx
        ├── Badge.jsx
        ├── Button.jsx
        ├── Card.jsx
        ├── Footer.jsx
        ├── Header.jsx
        ├── Input.jsx
        └── Lista.jsx
```

## Configuração do Tailwind

O arquivo `tailwind.config.js` informa ao Tailwind quais arquivos devem ser analisados para localizar as classes utilizadas. Neste projeto, são verificados o `index.html` e os arquivos JavaScript/JSX dentro de `src`. O PostCSS processa as diretivas do Tailwind e o Autoprefixer adiciona prefixos de compatibilidade quando necessário.

## Reflexão: Tailwind CSS e CSS tradicional

O Tailwind CSS permite construir a aparência diretamente no JSX por meio de classes utilitárias, como espaçamento, cores, bordas e tipografia. Isso agiliza a criação de interfaces e mantém os estilos próximos dos componentes que os utilizam. No CSS tradicional, os estilos ficam em arquivos separados e são aplicados por seletores e classes próprias, oferecendo uma separação mais explícita entre estrutura e apresentação. Por outro lado, em projetos com muitos componentes, essa abordagem pode exigir mais organização de nomes e arquivos. O Tailwind reduz a necessidade de escrever CSS personalizado para estilos comuns, mas pode deixar o JSX com muitas classes. A escolha depende do tamanho do projeto, da equipe e da preferência de organização.

## Tecnologias

- React
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
