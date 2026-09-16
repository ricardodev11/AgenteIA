# 🏗️ GUIA DE ARQUITETURAS DE AGENTES — PARA DISCUSSÃO COM O ALUNO

> Não trate esta lista como ranking universal. São padrões comuns para organizar agentes.

## 1. Prompt/Persona simples

```text
Usuário → Instruções → Modelo
```

Vantagens: simples, pouco contexto, ótimo para tarefas estreitas.
Limites: difícil crescer sem virar prompt gigante.

## 2. Arquitetura em camadas

```text
Interação → Core → Role/Skills → Runtime/Infra
```

Vantagens: separação clara, fácil ensinar, fácil testar, cada responsabilidade tem lugar, boa para agente pessoal.
Limites: exige disciplina e não resolve orquestração complexa.

⭐ Recomendada para este Agent v1.

## 3. ReAct / loop ação-observação

```text
observar → escolher ação → executar → observar resultado → repetir
```

Vantagens: útil com ferramentas e feedback.
Limites: pode gastar contexto e precisa limites para evitar loops.

Nosso `workflow.md` usa uma versão didática:

```text
Entender → Planejar → Agir → Validar → Registrar
```

## 4. Planner–Executor

```text
Planner → plano → Executor → resultado
```

Vantagens: separa planejamento de execução.
Limites: mais componentes e possível duplicação de contexto.

## 5. Tool-centric

```text
Agente
├── ferramenta A
├── ferramenta B
└── ferramenta C
```

Vantagens: amplia ações reais.
Limites: cada tool adiciona superfície de falha, permissões e segurança.

## 6. Multi-agent / orchestrator

```text
Orchestrator
├── Agent TL
├── Agent PO
├── Agent SM
└── Agent QA
```

Vantagens: especialização e possível paralelismo.
Limites: coordenação, custo, contexto duplicado, conflitos e debugging difícil.

É evolução futura, NÃO primeira atividade.

## 7. Workflow graph / state machine

```text
estado A → estado B → decisão → estado C
```

Vantagens: previsível para processos rígidos.
Limites: mais engenharia e menos flexibilidade.

# Decisão pedagógica

Pergunte ao aluno:

1. Qual dessas arquiteturas parece mais fácil de explicar?
2. Qual facilita localizar onde um problema aconteceu?
3. Qual adiciona menos componentes?
4. O que perderemos usando camadas?

Depois recomende arquitetura em camadas.

Não diga que é "a melhor arquitetura". Diga que é a mais adequada aos objetivos e nível desta atividade.
