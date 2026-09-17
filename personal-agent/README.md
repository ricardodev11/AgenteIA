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

## 🧪 Exemplo de Uso (Interação Real)

> Interação executada de verdade neste repositório via `npm run start` e `npm run status`.

### Passo 1 — Inicializar a sessão do agente (`/start`)

```bash
npm run start
```

**Resultado real:**

```json
{
  "command": "start",
  "status": "ready",
  "projectId": "27bca86b",
  "projectName": "AgenteIA",
  "projectRoot": "C:\\Users\\User\\Documents\\AgenteIA",
  "runtimeDir": "C:\\Users\\User\\.dev-agent\\projects\\AgenteIA-27bca86b",
  "isNew": true
}
```

O agente identificou o repositório, calculou o ID estável `27bca86b` e criou o runtime isolado em `~/.dev-agent/projects/AgenteIA-27bca86b/` — sem tocar no código do projeto.

### Passo 2 — Consultar o estado atual (`/status`)

```bash
npm run status
```

```json
{
  "command": "status",
  "projectId": "27bca86b",
  "projectName": "AgenteIA",
  "projectRoot": "C:\\Users\\User\\Documents\\AgenteIA",
  "gitBranch": "main",
  "detectedStack": "Desconhecida / Genérica",
  "isInitialized": true,
  "currentStateSnippet": "# CURRENT STATE\n\n## Tarefa Atual\nNenhuma tarefa em andamento.\n\n## Status\nidle\n..."
}
```

### Passo 3 — Interação conversacional (lente DEV/SM)

> 👤 **Desenvolvedor:** *"Quero que você implemente hoje todo o módulo de pagamentos com Pix, cartão de crédito, split de comissão, estorno automático e webhooks."*

> 🤖 **Agente (dev.sm):**
> "Entendo o objetivo, mas este escopo é grande demais para uma única entrega segura hoje. Vou fatiar com a lente DEV/SM:
>
> 1. **Entrega 1 — Pix:** integração mínima com o gateway (necessita da chave de API → dependência externa).
> 2. **Entrega 2 — Webhooks:** recebimento e confirmação de eventos.
> 3. **Entrega 3 — Cartão de crédito:** fluxo de captura + estorno.
> 4. **Entrega 4 — Split de comissão:** cálculo e conciliação.
>
> Qual é o *Definition of Done* (DoD) da Entrega 1? Antes de codificar, preciso de evidência do contrato da API do gateway e da chave de teste."

Esse comportamento está validado nos `evals/` (EVAL 02 — papel DEV/SM: recusa entrega monolítica e fatiamento; EVAL 01 — anti-alucinação: só age com evidência; EVAL 03 — economia de contexto).

### Resultado observável

Ao final da interação, o runtime mantém a memória isolada do projeto para um `/resume` futuro:

```text
~/.dev-agent/projects/AgenteIA-27bca86b/
├── context.md       # Stack, branch e metadados seguros do projeto
├── state.md         # Tarefa atual, bloqueios e próximo passo
└── decisions.md     # Decisões arquiteturais (formato ADR)
```

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
