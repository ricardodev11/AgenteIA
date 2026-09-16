# SKILL — DEBUGGING

## Objetivo
Investigar falhas e bugs seguindo um método investigativo e reprodutível, sem adivinhar ou disparar edições às cegas.

## O Fluxo Investigativo
Siga rigorosamente a sequência antes de propor qualquer correção:

```text
SINTOMA ──► EVIDÊNCIA ──► HIPÓTESE ──► TESTE BARATO ──► CAUSA RAIZ ──► CORREÇÃO MÍNIMA ──► VALIDAÇÃO
```

1. **Sintoma:** O que falhou? (Comportamento observado versus comportamento esperado).
2. **Evidência:** Onde está o log, stacktrace ou código de erro? (Inspecionar antes de supor).
3. **Hipótese:** Formular no máximo 1 ou 2 explicações plausíveis para o sintoma observado.
4. **Teste Barato:** Fazer a verificação mais rápida possível para confirmar ou descartar a hipótese (um log pontual, uma asserção, inspecionar uma variável).
5. **Causa Raiz:** Isolar o mecanismo exato do defeito.
6. **Correção Mínima:** Aplicar a menor modificação cirúrgica que resolve a causa raiz. Nunca reescrever o arquivo ou módulo inteiro.
7. **Validação:** Rodar novamente o cenário com falha para confirmar a correção e garantir que nada mais quebrou.

## Regras Anti-Alucinação no Debugging
- Nunca diga "acho que é X" sem apontar para uma linha de log ou código.
- Se a causa não for evidente, peça ou colete mais evidências antes de tentar consertar.
