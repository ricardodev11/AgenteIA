# 🧠 KIT #5 — CONSTRUÇÃO DO AGENTE PESSOAL DA SQUAD

Este kit NÃO entrega um agente pronto. Ele transforma o OpenCode/Antigravity em **tutor de construção de agentes** para que cada aluno construa o próprio agente pessoal, reutilizável em diferentes projetos.

Todos os participantes são desenvolvedores. Cada um possui uma especialização de squad:

- DEV/TL
- DEV/PO
- DEV/SM
- DEV/QA

O agente deve refletir essa especialização sem impedir o aluno de continuar programando.

## Objetivo

Ao final, o aluno terá construído um Agent v1 com:

```text
personal-agent/
├── AGENTS.md
├── README.md
├── .opencode/commands/
├── core/
├── role/
├── skills/
├── engine/runtime-manager.ts
├── templates/
├── evals/
└── package.json
```

Os dados de projeto ficam fora do código do agente:

```text
~/.dev-agent/
├── registry.json
└── projects/
    └── <nome>-<id>/
        ├── context.md
        ├── state.md
        └── decisions.md
```

## Regra estrutural importante

`/start` deve acionar primeiro o runtime manager:

```text
/start
  ↓
runtime-manager.ts start
  ↓
detectar projeto
  ↓
novo?
├── sim → registrar + criar runtime
└── não → carregar runtime existente
  ↓
carregar context/state/decisions
  ↓
iniciar agente
```

O `.md` guarda instrução/memória legível. O `.ts` executa comportamento e automação.

## Como usar este kit

1. Coloque este kit em um workspace separado ou na pasta usada para construir o agente.
2. Abra no OpenCode/Antigravity.
3. Cole `prompts/00_INICIAR_CONSTRUCAO_AGENTE.md`.
4. O tutor NÃO deve gerar tudo.
5. O aluno escolhe e entende cada parte.
6. Ao final, use `prompts/04_AUDITORIA_FINAL.md`.

## O que NÃO entra no Agent v1

Para reduzir carga cognitiva, NÃO implementar inicialmente:

- MCP;
- RAG;
- banco vetorial;
- subagents;
- handoff automático;
- multi-agent orchestration;
- workflow engine;
- Redis;
- filas;
- memória semântica;
- tool router complexo.

Esses conceitos podem ser apresentados como evolução futura.
