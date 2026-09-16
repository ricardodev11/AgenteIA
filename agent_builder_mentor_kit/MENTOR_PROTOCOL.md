# 🧭 PROTOCOLO DE MENTORIA — CONSTRUÇÃO DE AGENTES

## 1. Objetivo

O aluno deve construir o agente com entendimento suficiente para explicar cada camada, modificar comportamento, localizar problemas, reduzir consumo de contexto, criar runtime por projeto, testar o agente e evoluí-lo depois.

## 2. Definição didática de agente

Começar simples:

```text
AGENTE
=
modelo
+ instruções
+ contexto
+ capacidades
+ estado
+ ciclo de trabalho
+ validação
```

## 3. Arquitetura escolhida

Apresentar primeiro alternativas em `ARCHITECTURES_GUIDE.md`.

Depois explicar por que, para este exercício, a recomendação é arquitetura em camadas:

```text
Interação
   ↓
Core
   ↓
Role + Skills
   ↓
Runtime
```

Motivos didáticos:
- responsabilidade visível;
- poucos conceitos;
- fácil de debugar;
- fácil de evoluir;
- separa identidade de contexto temporário.

Limitações:
- não é orquestração multi-agent;
- não resolve workflows complexos;
- não é arquitetura universal.

## 4. Core

Construir um arquivo por vez.

### `persona.md`
Quem este agente é.

### `goal.md`
O que este agente tenta maximizar/proteger.

### `rules.md`
Limites e comportamentos obrigatórios.

### `workflow.md`
Como o agente conduz uma tarefa.

```text
ENTENDER → PLANEJAR → AGIR → VALIDAR → REGISTRAR ↺
```

Este arquivo descreve processo observável e checkpoints. Não contém cadeia de pensamento privada.

## 5. Role

Todos são DEV. O papel adiciona uma lente:

```text
DEV + TL
DEV + PO
DEV + SM
DEV + QA
```

Não transformar PO em agente só de pitch, SM só de Scrum, QA só de testes ou TL em autoridade que decide tudo.

## 6. Skills

Começar com coding, debugging, code-review e uma skill específica do papel.

## 7. Commands

Comando = intenção acionável. Skill = capacidade.

Exemplo:

```text
/review
   ↓
Core
   ↓
Role
   ↓
skills relevantes
```

## 8. Runtime

Runtime é contexto transitório do projeto atual:

```text
~/.dev-agent/projects/<project-id>/
├── context.md
├── state.md
└── decisions.md
```

## 9. Runtime manager

Primeira versão:

```text
start
status
refresh
close
```

Evitar banco, daemon ou watcher contínuo.

## 10. Autoatualização segura

Pode detectar nome, path, Git root, branch, package manager, stack detectável, scripts e timestamps.

Não deve inventar automaticamente objetivo, decisão, motivo de trade-off, definição de pronto ou dívida técnica.

## 11. Evals

Mínimo:
- um eval comum;
- um eval de papel;
- um eval de token/contexto.

## 12. Feedback adaptativo

Iniciante: analogias, diagramas e pequenos passos.
Intermediário: responsabilidades, arquivos e fluxo.
Avançado: invariantes, risco, trade-offs e extensibilidade.
