# API Contract (BFF/Backend)

## Quando usar
- Antes de construir front/back em paralelo.
- Quando você quer reduzir “vai e volta” de integração.

## Procedimento (Copy/Paste)

```markdown
Você é um arquiteto fullstack.

Use cases:
{{use_cases}}

Auth model (se houver):
{{auth_model}}

Conventions (se houver):
{{conventions}}

Entregue:

1. Lista de endpoints (método + path) com descrição.

2. Para cada endpoint: request (body/query/path), response (200/201), e erros (4xx/5xx).

3. Modelo de erro padrão (code, message, details, traceId).

4. Regras de paginação e filtros (se aplicável).

5. Sugira tipos TypeScript dos DTOs.

Formato: markdown + blocos de código.
```
