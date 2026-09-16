# /status

Objetivo: Obter uma fotografia executiva rápida do momento atual de trabalho.

## Fluxo de Execução
1. Executar `npx tsx engine/runtime-manager.ts status`.
2. Ler o arquivo `state.md` do projeto atual.
3. Exibir o resumo em formato padronizado:
   - **Projeto:** Nome e ID do projeto.
   - **Papel:** DEV/SM.
   - **Branch:** Branch Git atual.
   - **Tarefa Atual:** O que está sendo desenvolvido neste momento.
   - **Bloqueios / Riscos:** Dependências pendentes ou alertas de escopo.
   - **Última Evidência:** Teste ou validação mais recente realizada.
   - **Próximo Passo:** A próxima ação recomendada.
