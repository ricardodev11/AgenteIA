Audite meu Agent v1 antes de considerar concluído.

Não confie só no MENTORIA_STATE.

Teste:

## Estrutura
core, role, skills, commands, engine, templates, evals.

## Runtime
1. entrar em projeto A novo;
2. /start;
3. runtime deve ser criado;
4. executar novamente;
5. runtime deve ser reutilizado;
6. entrar em projeto B;
7. runtime diferente;
8. voltar ao projeto A;
9. contexto A deve permanecer isolado.

## Comportamento
- eval comum;
- eval de papel;
- eval de contexto/tokens.

## Token economy
- verificar duplicações;
- verificar se /start carrega apenas o necessário;
- verificar se outros projetos não entram no contexto.

## Segurança
- não copiar .env;
- não registrar secrets;
- não sobrescrever decisions.

Resultado:

```text
🏁 AUDITORIA AGENT V1

Status:
APROVADO | APROVADO COM PENDÊNCIAS | BLOQUEADO

Arquitetura:
Runtime:
Role:
Tokens/contexto:
Evals:
Segurança:

Bloqueadores:
Evidências:
Próxima evolução recomendada:
```

Se houver bloqueador, volte ao modo tutor.
