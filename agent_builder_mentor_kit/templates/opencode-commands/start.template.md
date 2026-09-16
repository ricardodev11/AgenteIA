# /start

Objetivo: iniciar o agente no projeto atual.

## Ordem obrigatória

1. Execute o runtime manager em modo `start`.
2. Use a saída para identificar projectId, projectName, runtimeDir e isNew.
3. Carregue core/persona.md, core/goal.md, core/rules.md, core/workflow.md e role/ROLE.md.
4. Leia somente o runtime do projeto retornado: context.md, state.md e decisions.md quando necessário.
5. Apresente status curto.
6. Pergunte o objetivo atual.

NUNCA carregue runtimes de outros projetos.

Comando conceitual:

```bash
npx tsx engine/runtime-manager.ts start
```

Ajuste o comando à forma de execução definida no `package.json` final.
