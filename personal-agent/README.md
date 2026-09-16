# 🤖 Personal Agent v1 — Squad DEV/SM

Meu agente pessoal de desenvolvimento de software com especialização em facilitação ágil, decomposição de tarefas e garantia de entrega sustentável (DEV/SM).

## 🚀 Como Usar

### 1. Inicializar no Projeto Atual
Ao abrir o terminal no seu repositório:
```bash
npm run start
```
O agente identifica o repositório, calcula o ID único estável e cria ou recupera o runtime isolado em `~/.dev-agent/projects/<projeto-id>/`.

### 2. Comandos Disponíveis (.opencode/commands/)
- `/start` — Inicializa a sessão, atualiza metadados seguros e apresenta o projeto.
- `/resume` — Retoma a tarefa exatamente de onde parou lendo o `state.md`.
- `/plan` — Decompõe uma demanda em fatias finas com critérios de pronto (DoD).
- `/debug` — Conduz a investigação investigativa sem chutes às cegas.
- `/review` — Revisa código com foco em corretude, segurança e viabilidade do PR.
- `/status` — Visão executiva em 5 linhas da tarefa atual e bloqueios.
- `/eval` — Executa testes comportamentais do agente.

## 🏗️ Estrutura do Projeto
```text
personal-agent/
├── AGENTS.md                   # Guia mestre do agente
├── README.md                   # Documentação de uso
├── package.json                # Configuração e scripts de execução
├── .opencode/commands/         # Camada 1: Comandos (/start, /plan, etc.)
├── core/                       # Camada 2: Persona, Goal, Rules, Workflow
├── role/                       # Camada 3: ROLE.md (DEV/SM)
├── skills/                     # Camada 3: Habilidades modulares
├── engine/runtime-manager.ts   # Camada 4: Motor de isolamento de projetos
├── templates/                  # Camada 4: Modelos de context, state e decisions
└── evals/                      # Validação comportamental e scorecard
```

## 🔒 Isolamento de Projetos
Os dados de cada projeto ficam armazenados fora do código do agente, na sua pasta pessoal:
```text
~/.dev-agent/
├── registry.json               # Índice de todos os projetos na sua máquina
└── projects/
    └── <slug>-<id>/
        ├── context.md          # Stack, scripts e branch atual
        ├── state.md            # Tarefa do momento e bloqueios
        └── decisions.md        # Decisões arquiteturais registradas
```
