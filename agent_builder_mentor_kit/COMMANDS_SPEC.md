# ⌨️ COMMANDS — CONTRATO DO AGENT V1

> A forma exata de registrar custom commands pode variar conforme a versão da CLI. O tutor deve inspecionar a instalação/configuração disponível e adaptar a pasta/metadata sem mudar o comportamento conceitual.

## `/start`

Ordem obrigatória:

```text
runtime-manager start
→ detectar/criar runtime
→ carregar core
→ carregar role
→ carregar runtime atual
→ apresentar situação
```

**Runtime primeiro.**

## `/resume`

```text
runtime-manager start
→ verificar projeto
→ carregar state
→ comparar estado com Git/código
→ sugerir próximo passo
```

## `/plan`

Não implementar imediatamente. Produzir objetivo, áreas prováveis, riscos, dependências, opções, recomendação e primeiro passo.

## `/debug`

Aciona skill de debugging: sintoma → evidência → hipóteses → teste barato → causa → correção mínima → validação.

## `/review`

Aciona code-review + role-specific.

TL: arquitetura/contratos.
PO: requisito/valor/aceite.
SM: escopo/dependências/prazo.
QA: corretude/testes/edge cases.

## `/status`

Usa runtime manager + state. Mostra projeto, papel, tarefa, branch, bloqueio, última evidência e próximo passo.

## `/eval`

Executa eval escolhido. Registrar entrada, esperado, obtido, diferenças e ajuste proposto. Não autoaprovar.
