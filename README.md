# Gois Agent Skills

Um repositório de **skills reutilizáveis** para agentes/assistentes (humanos ou LLMs) com foco em **fullstack**: planejamento, contrato de API, migração de banco, debug e code review.

A ideia é simples:
- **tarefa recorrente** vira **skill versionada**
- cada skill tem **metadados**, **guia de uso (copy/paste)** e **exemplos**
- o repo gera um **catálogo** e valida tudo no CI

---

## Como usar em 60 segundos

1) Abra o catálogo:
- `index/SKILLS.md`

2) Escolha uma skill (ex.: `fullstack.plan-feature`)

3) Abra a doc e copie o bloco **"Procedimento (Copy/Paste)"**
- `skills/fullstack/plan-feature/skill.md`

4) Cole no seu ChatGPT / agente e preencha os placeholders `{{...}}`.

Pronto. Se você melhorar o procedimento, abre PR e a skill evolui sem virar bagunça.

---

## O que é uma “skill” aqui

Cada skill é uma pasta com:

- `skill.yaml` → metadados padronizados (id, versão, inputs/outputs, tags, quality bar)
- `skill.md` → manual de uso + bloco “Copy/Paste”
- `examples/` → insumo e saída exemplo (pra você entender rapidamente o jeito certo)

Formato:

```markdown
skills/<categoria>/<nome-da-skill>/
skill.yaml
skill.md
examples/
input.md
output.md
```


---

## Estrutura do repositório

- `skills/`  
  Skills por categoria (fullstack, data, leadership, etc.)

- `packs/`  
  “Kits” de skills (ex.: fullstack pack, oncall pack)

- `index/`  
  Catálogo gerado automaticamente:
  - `index/skills.json`
  - `index/SKILLS.md`

- `scripts/`  
  Ferramentas internas:
  - `validate_skills.mjs` valida todos os `skill.yaml`
  - `build_index.mjs` gera o catálogo

- `.github/workflows/validate.yml`  
  CI: valida + gera índice em PR/push

---

## Padrões e convenções

### IDs
- **Imutáveis** e únicos.
- Recomenda-se: `categoria.slug`
  - Ex.: `fullstack.plan-feature`

### Versionamento (semver)
- `MAJOR` → mudou comportamento de forma “quebra uso”
- `MINOR` → adicionou melhorias mantendo compatibilidade
- `PATCH` → ajustes pequenos / correções / exemplos

### Quality Bar (obrigatório)
Toda skill deve ter um `quality_bar` no `skill.yaml`.
Isso define o “mínimo aceitável” da saída.

---

## Comandos úteis

### Validar skills
Valida todos os `skill.yaml` contra o schema:

```bash
npm run validate
```

### Gerar catálogo
Gera index/skills.json e index/SKILLS.md:

```bash
npm run index
```

### Formatar arquivos

```markdown
npm run format
```
## Como criar uma skill nova (workflow recomendado)

1. Copie o template:
  - `skills/_templates/skill.yaml`
  - `skills/_templates/skill.md`
2. Crie a pasta:
  - `skills/fullstack/<nome-da-skill>/`
3. Preencha:
  - `skill.yaml` com id, versão, inputs/outputs, tags, quality bar
  - `skill.md` com “Quando usar”, “Quando não usar” e “Copy/Paste”
  - `examples/input.md` e `examples/output.md`
4. Rode:
```bash
npm run validate
npm run index
```
5. Abra PR.

## Como usar no dia a dia em projetos pessoais

### Opção A — Copy/Paste direto (zero setup)
Você usa o catálogo e cola o bloco “Copy/Paste” no chat/agente.

### Opção B — Acoplar no projeto com lock (repetível e versionado)
Em cada projeto pessoal, crie:
```
my-project/
  .agent/
    skills.lock
```

Exemplo de `skills.lock`:

```yaml
skills:
  - id: fullstack.plan-feature
    version: 1.0.0
  - id: fullstack.api-contract
    version: 1.0.0
```

Isso te dá:
- rastreabilidade de quais skills você usou
- fácil de repetir o fluxo em outros projetos

### Opção C — Importar como subtree (quando ficar sério)
Quando você quiser “travar” skills dentro do projeto e atualizar quando quiser, use git subtree pra trazer skills/ pra dentro do projeto (ex.: em /.skills/).

## Packs

Packs são “listas de skills” por finalidade.

Exemplo:
- `packs/fullstack.yaml` → pack fullstack

Útil pra:
- começar rápido em um projeto novo
- documentar “kit padrão” que você usa sempre

## Roadmap (sugestão)

- [ ] adicionar mais skills fullstack (front patterns, auth, caching, observability)
- [ ] criar CLI simples: skills find <tag> / skills open <id>
- [ ] adicionar testes simples por skill (dataset + expected keys)
- [ ] criar “packs” por stack (NestJS, Next.js, Angular, etc.)

## Contribuindo

Veja `CONTRIBUTING.md` para padrões de PR, versionamento e checklist de qualidade.

