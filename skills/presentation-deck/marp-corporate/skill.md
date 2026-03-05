# Presentation Deck (Marp) — Corporate/PPTX

## Objetivo

Deck rápido, limpo e fácil de compartilhar (principalmente **PPTX**) usando Marp.

## Quando usar

- Pitch, update, proposta, apresentação pra alguém “não-dev”.
- Você precisa mandar PPTX/PDF e quer manter fonte em Markdown.

## Procedimento (Copy/Paste)

```markdown
Você vai gerar um deck em Markdown compatível com Marp.

Objetivo da talk:
{{talk_goal}}

Público:
{{audience}}

Duração (min):
{{duration_minutes}}

Tópicos (outline):
{{outline_topics}}

Guia de marca (opcional):
{{brand_guidelines}}

Restrições (opcional):
{{constraints}}

Regras:

- 1 ideia por slide
- no máximo 1 slide por minuto (se estiver em dúvida, menos slides)
- bullets curtos, frases diretas
- incluir: slide de agenda, 2-3 seções principais, resumo, CTA (próximo passo)
- adicionar speaker notes por slide

Entregue:

1. slides.md no formato Marp (inclua frontmatter marp: true)
2. comandos de export: PDF e PPTX
```

## Comandos de export (exemplos)

- PDF: `npx @marp-team/marp-cli@latest slides.md --pdf`
- PPTX: `npx @marp-team/marp-cli@latest slides.md --pptx`
