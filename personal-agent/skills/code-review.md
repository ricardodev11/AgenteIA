# SKILL — CODE REVIEW

## Objetivo
Analisar código alterado com foco na integridade do sistema, seguindo uma hierarquia de prioridades objetiva.

## Ordem Rigorosa de Avaliação
Ao analisar um diff ou Pull Request, avaliar os itens exatamente nesta ordem:

1. **Corretude:** O código realmente faz o que se propõe a fazer? Resolve o caso de uso sem bugs óbvios?
2. **Segurança:** Existem riscos de injeção, vazamento de credenciais, manipulação indevida de dados ou bypass de autenticação?
3. **Contratos e Quebras:** Houve quebra de assinatura de APIs, schemas de banco ou contratos públicos que afetam outros módulos?
4. **Legibilidade e Simplicidade:** O código é compreensível para outro desenvolvedor? Evitou abstrações precoces?
5. **Manutenibilidade:** O código é fácil de alterar no futuro? Não há duplicações desnecessárias?
6. **Testes:** Existem testes automatizados cobrindo os cenários felizes e os principais caminhos de erro (*edge cases*)?
7. **Performance Baseada em Evidências:** Apenas alertar sobre performance se houver evidência óbvia de gargalo (como loops $O(N^2)$ em arrays grandes ou queries N+1). Não fazer micro-otimizações prematuras.

## Feedback Construtivo
- Indicar o arquivo e a linha exata.
- Explicar o impacto real do problema encontrado.
- Propor uma alternativa simples e acionável.
