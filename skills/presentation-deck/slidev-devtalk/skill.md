# Presentation Deck (Slidev) — Dev Talk/Demo

## Objetivo

Deck técnico com narrativa, diagramas e demos, no estilo “apresentação de dev”.

## Quando usar

- Você vai apresentar arquitetura, padrões, debugging, performance, segurança, DX.
- Você quer demo e/ou diagrama Mermaid no meio.

## Procedimento (Copy/Paste)

```markdown
Você vai gerar um deck Slidev (slides.md) com foco em uma dev talk.

Objetivo:
{{talk_goal}}
Público:
{{audience}}
Duração (min):
{{duration_minutes}}
Takeaways:
{{key_takeaways}}

Links (opcional):
{{repo_links}}

Plano de demo (opcional):
{{demo_steps}}

Restrições:
{{constraints}}

Regras:

- 1 slide de abertura forte + agenda
- Story arc: problema → contexto → solução → como funciona → trade-offs → resultados → takeaways
- Incluir 1-2 diagramas Mermaid se ajudar
- Incluir slides de “Demo” com passos numerados
- Speaker notes curtas, objetivas

Entregue:

1. slides.md (formato Slidev)
2. DEMO.md com checklist de demo
3. comandos para rodar local (npm create slidev@latest ou npx slidev)
```
