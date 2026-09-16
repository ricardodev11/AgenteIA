# /start

Objetivo: Inicializar a sessão de trabalho do agente no projeto atual, garantindo isolamento total de contexto.

## Fluxo Obrigatório de Execução
1. **Acionar o Runtime Manager:**
   Executar o script de runtime antes de qualquer outra ação:
   ```bash
   npx tsx engine/runtime-manager.ts start
   ```
2. **Processar o Retorno do Runtime:**
   - Obter `projectId`, `projectName`, `projectRoot`, `runtimeDir` e `isNew`.
3. **Carregar Identidade e Regras Permanentes:**
   - Ler `core/persona.md`, `core/goal.md`, `core/rules.md` e `core/workflow.md`.
   - Ler `role/ROLE.md` (DEV/SM).
4. **Carregar Memória Exclusiva do Projeto:**
   - Ler do diretório `runtimeDir` retornado: `context.md`, `state.md` e `decisions.md`.
   - **NUNCA carregar dados ou runtimes de outros projetos.**
5. **Apresentar Diagnóstico Inicial:**
   - Exibir nome do projeto, branch atual e se é um projeto novo ou existente.
6. **Alinhamento do Próximo Passo:**
   - Perguntar ao desenvolvedor: *"Qual é o objetivo ou tarefa que vamos focar hoje?"*
