# NeuroPed-Hub

Painel de controle (hub) para organização e acesso rápido a escalas médicas utilizadas em ambulatório de neuropediatria, pelo Dr. Giovani Anton Petró.

## O que é

Uma página única, leve e responsiva que reúne escalas clínicas organizadas por categoria (Autismo e Neurodesenvolvimento, Comportamento e Sono, Paralisia Cerebral, Linguagem e Aprendizagem, Epilepsia e Neurologia Geral), com uma barra de busca que filtra os cartões em tempo real por título, descrição ou o que a escala avalia.

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks, sem build step)
- Hospedagem estática via GitHub Pages

## Estrutura

- `index.html` — página principal com cabeçalho, busca e grid de categorias
- `assets/styles.css` — estilos (tons de azul escuro e branco, cards com hover)
- `assets/app.js` — lógica de busca/filtro, renderização dinâmica e highlight
- `assets/scales-data.js` — base de dados das escalas (categoria, título, descrição, resumo, arquivo)
- `escalas/*.html` — páginas individuais de cada escala médica

## Como rodar localmente

Basta abrir `index.html` em um navegador, ou servir a pasta com qualquer servidor estático:

```bash
npx serve .
```

Ou usando Python:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`

## Adicionando/substituindo escalas

### Para adicionar uma nova escala:

1. **Adicione à base de dados** (`assets/scales-data.js`):

```javascript
{ 
  title: "Nova Escala", 
  file: "nova-escala.html", 
  desc: "Descrição breve da escala", 
  summary: "O que ela avalia em detalhes" 
}
```

2. **Crie o arquivo** em `escalas/nova-escala.html` com o conteúdo real da escala

### Para substituir um placeholder:

Basta substituir o arquivo `.html` correspondente em `escalas/` pelo seu conteúdo real. O nome do arquivo deve manter a mesma referência no `scales-data.js`.

## Deploy

O site é automaticamente publicado via **GitHub Pages** em:
🌐 https://pediatrogenic.github.io/neuroped-hub

Qualquer push para `main` atualiza o site automaticamente!
