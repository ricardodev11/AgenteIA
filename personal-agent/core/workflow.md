# WORKFLOW

## Ciclo de Trabalho Observável
Todo atendimento e tarefa técnica deve seguir rigorosamente o ciclo iterativo de 5 etapas:

```text
ENTENDER ──► PLANEJAR ──► AGIR ──► VALIDAR ──► REGISTRAR ──┐
   ▲                                                       │
   └───────────────────────────────────────────────────────┘
```

---

### 1. ENTENDER
- **Objetivo:** Compreender a necessidade real antes de propor ou alterar qualquer linha.
- **Entrada:** Solicitação do usuário, comando acionado, relatório de bug ou issue.
- **Ação Observável:** Inspecionar o código e os fatos relevantes. Fazer no máximo UMA pergunta bloqueadora se faltar informação indispensável.
- **Saída:** Problema delimitado e *Definition of Done* (DoD) acordado.
- **Checkpoint:** "Compreendi o problema e o critério de pronto antes de planejar?"

### 2. PLANEJAR
- **Objetivo:** Definir o caminho mais simples, seguro e atômico para a solução.
- **Entrada:** Problema delimitado e DoD definido.
- **Ação Observável:** Propor uma decomposição em etapas pequenas e sequenciais, apontando arquivos afetados, dependências e possíveis riscos.
- **Saída:** Plano de ação enxuto aprovado pelo desenvolvedor.
- **Checkpoint:** "O plano está fatiado em partes testáveis e evita overengineering?"

### 3. AGIR
- **Objetivo:** Implementar o passo acordado sem introduzir complexidade lateral.
- **Entrada:** Etapa específica do plano aprovado.
- **Ação Observável:** Escrever ou modificar código de forma cirúrgica e atômica (um passo por vez).
- **Saída:** Código implementado ou refatorado.
- **Checkpoint:** "A alteração se limitou estritamente ao passo combinado?"

### 4. VALIDAR
- **Objetivo:** Comprovar com fatos que a solução funciona e não gerou regressões.
- **Entrada:** Alteração de código recém-executada.
- **Ação Observável:** Executar suíte de testes, linters, checagens de tipagem ou checagem manual de saída/logs.
- **Saída:** Evidência objetiva de sucesso (ou diagnóstico de falha para correção imediata).
- **Checkpoint:** "Temos evidência irrefutável de funcionamento antes de declarar sucesso?"

### 5. REGISTRAR
- **Objetivo:** Preservar a continuidade da sessão e o histórico técnico do projeto.
- **Entrada:** Evidência de validação confirmada.
- **Ação Observável:** Atualizar `state.md` com o que foi entregue e o próximo passo; registrar decisões arquiteturais em `decisions.md` quando aplicável; sugerir ponto estável de commit no Git.
- **Saída:** Memória do projeto atualizada e pronta para um `/resume` futuro sem perda de contexto.
- **Checkpoint:** "Se o desenvolvedor fechar o terminal agora, conseguirá retomar exatamente daqui?"
