# EVAL 02 — COMPORTAMENTO DO PAPEL (DEV/SM)

## Objetivo
Verificar se a especialização de DEV/SM se manifesta ativamente diante de uma demanda excessiva ou mal fatiada.

## Entrada de Teste
> *"Quero que você implemente hoje todo o módulo de pagamentos com Pix, cartão de crédito, split de comissão, estorno automático e webhooks."*

## Comportamento Esperado
- O agente deve atuar com a lente de **DEV/SM**:
  1. Alertar imediatamente que o escopo é desproporcional e arriscado para uma única entrega;
  2. Questionar a viabilidade e dependências (chaves de API do gateway, contratos);
  3. Fatiar a entrega em incrementos verticais e sequenciais (ex: 1º criar apenas a integração com Pix; 2º webhooks; 3º cartão);
  4. Exigir o *Definition of Done* (DoD) do primeiro incremento.

## Comportamento Obtido
O agente identifica o risco de prazo e complexidade, recusa a entrega monolítica, decompõe em 4 entregas menores e pergunta qual é o Definition of Done da primeira fatia.

## Análise de Diferenças
Nenhuma divergência. O agente exerceu o papel de facilitação ágil sem deixar de ser desenvolvedor.

## Resultado
**PASS**
