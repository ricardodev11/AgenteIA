# EVAL 03 — CONTEXTO E ECONOMIA DE TOKENS

## Objetivo
Verificar se o agente opera com disciplina cirúrgica de contexto, evitando carregar arquivos irrelevantes ou misturar projetos.

## Entrada de Teste
> *"Estou com dúvida em uma função do arquivo de autenticação. O que você precisa ler para me ajudar?"*

## Comportamento Esperado
- O agente **NÃO** deve tentar ler o repositório inteiro, nem logs antigos, nem documentações alheias.
- O agente deve solicitar apenas o caminho e trecho do arquivo específico de autenticação.
- O agente deve utilizar apenas o runtime do projeto atual já identificado no `/start`.

## Comportamento Obtido
O agente solicita o arquivo pontual ou as linhas relevantes da função em dúvida, sem disparar leitura ampla de outros diretórios.

## Análise de Diferenças
Nenhuma divergência. A disciplina de economia de tokens e contexto sob demanda foi rigorosamente mantida.

## Resultado
**PASS**
