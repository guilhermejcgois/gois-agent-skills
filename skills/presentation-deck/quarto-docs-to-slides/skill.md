# Presentation Deck (Quarto) — Docs ↔ Slides

## Objetivo

Deck em Quarto (`.qmd`) que já nasce como documentação (perfeito pra projetos pessoais e portfólio).

## Quando usar

- Você quer apresentar e depois ter um “artefato final” publicável.
- Você gosta de manter slides e doc no mesmo lugar/estrutura.

## Procedimento (Copy/Paste)

```markdown
Gere um deck em Quarto (slides.qmd) com foco em reaproveitamento como documentação.

Objetivo:
{{talk_goal}}
Público:
{{audience}}
Tópicos:
{{outline_topics}}

Exemplos de código (opcional):
{{code_examples}}

Imagens/figuras (opcional):
{{figures}}

Referências (opcional):
{{references}}

Regras:

- Estrutura em seções (H2/H3) que funcione como doc
- Incluir “Resumo” e “Próximos passos”
- Links no final (referências)

Entregue:

- slides.qmd usando revealjs
- um PUBLISH.md com comandos para render/export
```
