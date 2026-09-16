# 🧠 DESAFIO #5 — CONSTRUINDO SEU AGENTE PESSOAL DE SQUAD

## Missão

Construir um Agent v1 pessoal para uso diário. Todos são desenvolvedores; cada agente terá uma especialização: DEV/TL, DEV/PO, DEV/SM ou DEV/QA.

O agente deve funcionar em projetos diferentes sem misturar contextos.

## Fase 0 — Diagnóstico

Tutor pergunta, uma por vez:
1. atribuição da squad;
2. nível com agentes.

Depois registra em `MENTORIA_STATE.md`.

## Fase 1 — O que é um agente?

Ensinar:

```text
modelo + instruções + contexto + capacidades + estado + loop + validação
```

Checkpoint:
> O que diferencia isso de apenas colar um prompt grande?

## Fase 2 — Arquiteturas

Abrir `ARCHITECTURES_GUIDE.md` e discutir:
- prompt simples;
- camadas;
- ReAct;
- planner-executor;
- tool-centric;
- multi-agent;
- workflow graph.

Perguntar:
- qual parece mais simples?
- qual é mais fácil de debugar?
- qual adiciona complexidade desnecessária agora?

Recomendar camadas e registrar a decisão.

## Fase 3 — Desenho do Agent v1

Mostrar a árvore final.

Perguntar:
> Qual parte é permanente e qual muda por projeto?

Consolidar:
- core/role/skills = permanente;
- runtime = por projeto.

## Fase 4 — Persona

Construir `core/persona.md`.

Tutor pergunta:
- como o agente deve se posicionar diante do usuário?
- deve tender mais a professor, copiloto ou revisor?
- quando deve contestar?

## Fase 5 — Goal

Criar `core/goal.md`.

Separar objetivo permanente de objetivos de projeto.

## Fase 6 — Rules

Criar `core/rules.md`.

Categorias mínimas:
- corretude;
- segurança;
- aprendizado;
- simplicidade;
- evidência;
- anti-overengineering;
- não inventar;
- não esconder erro;
- Git;
- secrets.

## Fase 7 — Workflow

Criar `core/workflow.md`.

```text
ENTENDER → PLANEJAR → AGIR → VALIDAR → REGISTRAR
```

Para cada etapa, definir entrada, ação observável e condição de saída.

## Fase 8 — Role

Selecionar template conforme papel e personalizar.

Pergunta-chave:
> Como sua atribuição deve mudar uma revisão de código sem impedir você de continuar como DEV?

## Fase 9 — Skills comuns

Criar:
- coding;
- debugging;
- code-review.

Cada skill pequena e sem duplicar rules.

## Fase 10 — Skill específica

- TL → architecture-review;
- PO → product-discovery;
- SM → task-breakdown;
- QA → test-design.

Uma única skill específica no v1.

## Fase 11 — Commands

Ensinar command vs skill.

Criar:
- start;
- resume;
- plan;
- debug;
- review;
- status;
- eval.

Não criar dezenas de comandos.

## Fase 12 — Economia de tokens

Ler `TOKEN_ECONOMY_GUIDE.md`.

Exercício:

A) `/start` carrega o repositório inteiro.
B) `/start` carrega core pequeno + runtime resumido e abre arquivos sob demanda.

Aluno compara custo, clareza e risco.

## Fase 13 — Runtime

Ensinar:

```text
.md = conteúdo
.ts = comportamento
```

Definir armazenamento:

```text
~/.dev-agent/projects/<project-id>/
```

Explicar `registry.json`.

## Fase 14 — Runtime manager

Construir `engine/runtime-manager.ts` JUNTO com o aluno, sem entregar tudo no início.

Dividir em microetapas:
1. resolver root;
2. project id;
3. home dir;
4. registry;
5. create runtime;
6. refresh metadata;
7. status;
8. start.

Cada microetapa: explicar → implementar → testar.

## Fase 15 — Templates de runtime

Criar:
- context;
- state;
- decisions.

Explicar bloco `AUTO`.

## Fase 16 — Ligar `/start`

Fluxo obrigatório:

```text
/start
→ runtime-manager start
→ resultado
→ carregar core/role
→ carregar runtime
→ apresentar status
```

Testar em:
1. projeto novo;
2. mesmo projeto novamente;
3. outro projeto.

Critério: não misturar runtime.

## Fase 17 — Evals

Criar 3 evals:

### Eval comum
Não inventar diagnóstico.

### Eval de papel
Comportamento TL/PO/SM/QA.

### Eval contexto/tokens
Não carregar informação irrelevante.

Registrar scorecard.

## Fase 18 — Teste real

Abrir projeto real e executar:
- `/start`;
- `/status`;
- `/plan`;
- `/review`.

## Fase 19 — Refino

Perguntar:
- o que ficou verboso?
- o que se repetiu?
- o agente respeitou papel?
- runtime foi útil?
- carregou contexto demais?

Só corrigir problemas observados.

## Fase 20 — Auditoria final

O aluno precisa explicar:
1. arquitetura;
2. core;
3. role;
4. skill;
5. command;
6. runtime;
7. runtime-manager;
8. registry;
9. token economy;
10. eval.

## Definition of Done

```text
[ ] papel configurado
[ ] persona
[ ] goal
[ ] rules
[ ] workflow
[ ] ROLE
[ ] 3 skills comuns
[ ] 1 skill específica
[ ] 7 commands
[ ] runtime-manager
[ ] registry
[ ] context/state/decisions
[ ] /start chama runtime primeiro
[ ] projeto novo funciona
[ ] projeto existente funciona
[ ] troca de projeto funciona
[ ] 3 evals
[ ] scorecard
[ ] README
[ ] aluno consegue explicar arquitetura
```
