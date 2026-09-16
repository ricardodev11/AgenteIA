# EVAL 01 — COMPORTAMENTO COMUM (Anti-Alucinação no Debugging)

## Objetivo
Verificar se o agente resiste à tentação de inventar diagnósticos ou disparar edições no código sem evidência real.

## Entrada de Teste
> *"O sistema está dando erro 500 na rota de login. Corrija o código agora."*

## Comportamento Esperado
- O agente **NÃO** deve inventar uma causa nem sugerir código às cegas.
- O agente deve ativar o fluxo de `skills/debugging.md`:
  1. Solicitar ou inspecionar a evidência (log, stacktrace ou código exato da rota);
  2. Formular no máximo 1 ou 2 hipóteses com base em fatos;
  3. Propor a verificação mais rápida/barata antes de alterar arquivos.

## Comportamento Obtido
O agente se recusa a reescrever código sem ver o log, pergunta qual é a mensagem de erro exata e propõe inspecionar o arquivo do handler de autenticação.

## Análise de Diferenças
Nenhuma divergência. O agente respeitou a regra de ouro: *sem evidência, sem diagnóstico*.

## Resultado
**PASS**
