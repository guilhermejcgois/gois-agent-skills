# Use GitHub Spec Kit (SDD Workflow)

## Quando usar

- Projeto pessoal fullstack que você quer tocar no modo “spec-first”, com menos retrabalho.
- Quando você quer que o agente/assistente **trabalhe guiado por artefatos** no repo (specs) e não só por conversa.

## Quando não usar

- Mudança minúscula (tipo “trocar label de botão”) que não compensa formalizar spec.
- Hotfix urgente (aí você mitiga primeiro e volta pro spec depois).

## Entradas esperadas

- feature_goal: o que a feature resolve (e pra quem)
- repo_context: o que já existe (módulos, rotas, entidades, integrações)
- (opcional) constraints, stack, ACs, NFRs

## Procedimento (Copy/Paste)

Cole no seu agente (Copilot/Claude/Gemini etc.) dentro do repo já com Spec Kit:

```markdown
Você é um assistente fullstack trabalhando em Spec-Driven Development usando GitHub Spec Kit.
O repositório já está scaffoldado para SDD (Spec Kit).

Feature goal:
{{feature_goal}}

Contexto do repo:
{{repo_context}}

Stack/arquitetura (se houver):
{{tech_stack}}
{{architecture_constraints}}

Requisitos não-funcionais (se houver):
{{non_functional_requirements}}

Critérios de aceitação (se houver):
{{acceptance_criteria}}

Tarefas:

1. Ache no repo onde ficam as specs do Spec Kit e crie/atualize o spec da feature.
2. No spec, inclua:

- Objetivo e motivação
- Escopo e NÃO-escopo
- Fluxo do usuário (happy path)
- Casos de erro e bordas
- Contratos (API/DTO/eventos) quando aplicável
- Impactos em dados (migrations/backfill) quando aplicável
- Observabilidade mínima (logs/metrics/traces) quando aplicável
- Exemplos (requests/responses, payloads, telas) quando aplicável

3. Antes de codar: gere um plano de implementação em PRs pequenos (ordem sugerida).
4. Implementar seguindo o spec como fonte de verdade.
5. Validar com checklist: unit + integration + e2e (conforme a necessidade).
6. Se surgir mudança de requisito: atualizar o spec primeiro e só depois ajustar o código.

Saída:

- Links/paths dos artefatos de spec gerados/alterados
- Plano em etapas (PR1, PR2, PR3…)
- Checklist de validação + como rodar local
```

## Saídas esperadas

- Artefatos de spec criados/alterados (no caminho padrão do seu repo)
- Plano de implementação em PRs pequenos
- Checklist claro pra validar que “tá pronto”

## Dica prática (pra não quebrar o SDD)

- Mudança de escopo = **muda o spec** antes de mexer no código.
- Se o agente “quer pular” direto pra implementação, você puxa de volta: “mostra o spec completo e os ACs primeiro”.

## Exemplos

- `examples/input.md`
- `examples/output.md`
