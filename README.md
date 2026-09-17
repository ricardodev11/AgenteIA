# AgenteIA

Repositório para construir, mentorar e versionar agentes de desenvolvimento pessoais com o OpenCode/Antigravity.

Contém dois projetos:

| Projeto | Descrição |
| --- | --- |
| [`agent_builder_mentor_kit/`](agent_builder_mentor_kit/) | Kit de mentoria que transforma o OpenCode em **tutor de construção de agentes**, guiando cada aluno a construir o próprio agente reutilizável em diferentes projetos. |
| [`personal-agent/`](personal-agent/) | O **Agente v1** construído com o kit, especializado em facilitação ágil, decomposição de tarefas e garantia de entrega sustentável (DEV/SM). |

## Como começar

1. Explore o [`agent_builder_mentor_kit`](agent_builder_mentor_kit/) para entender a proposta e os prompts de mentoria.
2. Cada aluno constrói o próprio agente dentro da sua especialização (DEV/TL, DEV/PO, DEV/SM ou DEV/QA).
3. A referência de construção finalizada está no [`personal-agent`](personal-agent/).

## Estrutura resumida

```text
AgenteIA/
├── agent_builder_mentor_kit/   # Kit de mentoria (prompts, templates, specs)
└── personal-agent/             # Agente v1 construído (DEV/SM)
```

## Ideias-chave

- O agente NÃO guarda dados de projeto dentro do código: o runtime fica isolado em `~/.dev-agent/projects/<projeto-id>/`.
- Arquivos `.md` guardam instrução/memória legível; o `runtime-manager.ts` executa comportamento e automação.
- O v1 foca no essencial (comandos, persona, skills e runtime) e deixa MCP, RAG, subagents e orquestração multi-agente como evolução futura.