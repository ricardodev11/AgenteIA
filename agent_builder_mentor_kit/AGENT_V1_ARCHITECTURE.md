# 🧩 ARQUITETURA-ALVO — PERSONAL AGENT V1

## Visão em camadas

```text
                         USUÁRIO
                            │
                            ▼
┌─────────────────────────────────────────────────┐
│ CAMADA 1 — INTERAÇÃO                            │
│ OpenCode CLI + Commands                         │
│ /start /resume /plan /debug /review /status     │
└───────────────────────┬─────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│ CAMADA 2 — CORE                                 │
│ core/persona.md                                 │
│ core/goal.md                                    │
│ core/rules.md                                   │
│ core/workflow.md                                │
│                                                 │
│ ENTENDER → PLANEJAR → AGIR → VALIDAR → REGISTRAR│
└───────────────────────┬─────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│ CAMADA 3 — ROLE + SKILLS                        │
│ role/ROLE.md                                    │
│ skills/coding.md                                │
│ skills/debugging.md                             │
│ skills/code-review.md                           │
│ skills/<role-specific>.md                       │
└───────────────────────┬─────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│ CAMADA 4 — RUNTIME / INFRA                      │
│ engine/runtime-manager.ts                       │
│ templates/context.template.md                   │
│ templates/state.template.md                     │
│ templates/decisions.template.md                 │
│                                                 │
│ ~/.dev-agent/registry.json                      │
│ ~/.dev-agent/projects/<project-id>/             │
│   context.md | state.md | decisions.md          │
└─────────────────────────────────────────────────┘
```

## Fluxo crítico do `/start`

```text
/start
  ↓
executar runtime-manager.ts start
  ↓
resolver projeto atual
  ↓
consultar registry.json
  ↓
novo projeto?
  ├── SIM → criar registro + runtime
  └── NÃO → reutilizar runtime
  ↓
refresh de metadados automáticos
  ↓
retornar projectId/runtimeDir
  ↓
carregar CORE + ROLE
  ↓
carregar SOMENTE runtime do projeto atual
  ↓
apresentar status e perguntar objetivo
```

## Separação de responsabilidades

```text
.md  → conteúdo, política, memória, contexto resumido
.ts  → detecção, criação, leitura/escrita controlada e automação
.json → índice estruturado para máquina
```

## Permanente x por projeto

Permanente:
- persona;
- goal;
- rules;
- workflow;
- role;
- skills;
- commands;
- runtime-manager.

Por projeto:
- context;
- state;
- decisions.
