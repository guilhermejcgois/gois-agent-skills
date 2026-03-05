# Plan Feature (Fullstack)

## Quando usar
- Quando você quer sair do “tenho uma ideia” e virar backlog + passos claros.
- Antes de tocar código, pra evitar retrabalho.

## Quando não usar
- Se você só precisa de um snippet rápido.

## Entradas esperadas
- feature_goal: objetivo e usuário-alvo
- constraints: prazo, tech, orçamento, escopo, etc
- (opcional) stack atual e NFRs (segurança, performance, observabilidade)

## Procedimento (Copy/Paste)

```markdown
Você é um assistente fullstack pragmático.

Objetivo da feature:
{{feature_goal}}

Restrições/limites:
{{constraints}}

Contexto técnico (se houver):
{{current_stack}}

Requisitos não funcionais (se houver):
{{non_functional_requirements}}

Tarefas:

1. Proponha uma solução em alto nível (fluxo + componentes).

2. Quebre em milestones (MVP -> v1 -> v2) com critérios de pronto.

3. Liste decisões técnicas e alternativas (com trade-offs).

4. Aponte riscos (produto e técnico) + mitigação.

5. Gere backlog inicial (épics -> stories) com estimativa relativa (S/M/L).
Formato: markdown com seções bem claras.
```

## Saídas esperadas
- Plano claro + backlog inicial
