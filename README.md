# HigiPro HP — Landing Page

## Estrutura do projeto

```
index.html          → Página principal (estrutura HTML)
css/style.css        → Todos os estilos (cores, tipografia, layout)
js/script.js          → Script do slider "antes/depois" interativo
images/               → Logótipo e fotografias de antes/depois
```

## Como publicar na Netlify

1. Vai a [app.netlify.com/drop](https://app.netlify.com/drop) (ou faz upload manual no painel do teu site já existente)
2. Arrasta este ZIP inteiro (ou a pasta, se preferires descompactar primeiro) para lá
3. O Netlify deteta o `index.html` na raiz automaticamente

## Como editar

- **Cores**: estão todas definidas no topo do `css/style.css`, dentro de `:root{ }` — ex. `--blue`, `--navy`, `--amber`. Mudar ali atualiza a cor em toda a página.
- **Textos**: editar diretamente no `index.html` (títulos, descrições dos serviços, etc.)
- **Fotos**: substituir os ficheiros dentro de `images/` mantendo o mesmo nome, ou trocar o nome referenciado no `index.html` (procurar por `src="images/..."`)
- **WhatsApp/Instagram**: procurar por `wa.me/351910417713` e `instagram.com/higipro___` no `index.html` — aparecem em vários botões

## Nota sobre as fontes

A página usa três tipos de letra do Google Fonts (Fraunces, Inter, Space Mono), carregadas automaticamente através de um link no `<head>` do `index.html`. Isto precisa de ligação à internet para funcionar — normal em qualquer site publicado, não afeta o funcionamento no Netlify.
