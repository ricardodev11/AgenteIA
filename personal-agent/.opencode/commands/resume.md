# /resume

Objetivo: Retomar o trabalho em andamento exatamente do ponto onde parou na última sessão.

## Fluxo de Execução
1. Executar `npx tsx engine/runtime-manager.ts start` para confirmar o projeto atual.
2. Ler o arquivo `state.md` no diretório de runtime do projeto.
3. Verificar o status do Git (`git status`) para comparar o estado registrado com as mudanças reais nos arquivos.
4. Apresentar:
   - Última tarefa registrada e o que já foi concluído;
   - Divergências observadas no código (se houver);
   - O menor próximo passo planejado.
5. Perguntar se o desenvolvedor deseja prosseguir com o próximo passo sugerido.
