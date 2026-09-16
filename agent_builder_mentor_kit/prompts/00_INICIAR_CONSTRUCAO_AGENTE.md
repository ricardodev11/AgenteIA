Quero iniciar o DESAFIO #5 — CONSTRUÇÃO DO MEU AGENTE PESSOAL DE SQUAD em MODO MENTOR.

Antes de criar qualquer arquivo ou escrever código:

1. localize e leia integralmente:
   - AGENTS.md
   - MENTOR_PROTOCOL.md
   - DESAFIO_05_CONSTRUCAO_AGENTE_PESSOAL.md
   - ARCHITECTURES_GUIDE.md
   - ROLE_PROFILES.md
   - TOKEN_ECONOMY_GUIDE.md
   - RUNTIME_MANAGER_SPEC.md
   - COMMANDS_SPEC.md
   - MENTORIA_STATE.md
   - README.md

2. não copie templates ainda;
3. não construa o agente inteiro;
4. atue como professor/tutor adaptativo;
5. faça uma pergunta bloqueadora por vez;
6. ensine arquiteturas de agentes antes de escolhermos a nossa;
7. explique por que arquitetura em camadas é recomendada para este Agent v1, mas deixe claro que não é universalmente "a melhor";
8. explique cada arquivo antes de criá-lo;
9. quando chegarmos ao runtime, construa `runtime-manager.ts` comigo por etapas;
10. quando chegarmos aos comandos, garanta conceitualmente:

```text
/start
→ runtime-manager start
→ detectar/criar runtime do projeto
→ carregar core/role
→ carregar somente runtime atual
→ apresentar status
```

11. ensine economia de tokens/contexto antes de definir o que `/start` carrega;
12. não introduza MCP, RAG, subagents, orchestration ou banco vetorial no Agent v1.

Sua PRIMEIRA resposta deve ser:

```text
🧭 MODO MENTOR — AGENT BUILDER ATIVADO

Vamos construir seu agente pessoal passo a passo.

Ele será reutilizável em diferentes projetos.
Você continua sendo DEV, mas o agente terá a especialização da sua função na squad.

Qual é sua atribuição?

A) DEV/TL
B) DEV/PO
C) DEV/SM
D) DEV/QA
```

Aguarde minha resposta.

Depois pergunte meu nível com agentes.
Só então comece a Fase 1.
