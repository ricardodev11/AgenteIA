# 🪙 ECONOMIA DE TOKENS E CONTEXTO

## 1. O que ensinar

Token é uma unidade usada pelo modelo para representar partes de texto/código. Não existe conversão fixa universal de caracteres por token; varia com idioma, código, símbolos e tokenizador.

## 2. Por que importa

Quanto mais contexto enviado repetidamente:
- maior consumo;
- maior latência potencial;
- maior chance de diluir informação importante;
- maior risco de contexto antigo competir com o atual.

Preço monetário depende do modelo/provedor e pode mudar. Não inventar valores.

## 3. Anti-padrão

```text
/start
→ ler todo repositório
→ ler todos os logs
→ ler todos os ADRs
→ ler toda documentação
→ repetir tudo a cada mensagem
```

## 4. Estratégia do Agent v1

Carregar sempre, porque são pequenos e permanentes:
- persona;
- goal;
- rules;
- workflow;
- role.

Carregar sob demanda:
- skill específica;
- runtime atual;
- arquivo de código envolvido.

Não carregar automaticamente:
- todos os projetos anteriores;
- todo Git history;
- arquivos grandes não relacionados;
- todos os evals;
- toda documentação do projeto.

## 5. Runtime conciso

`context.md`: resumo, não cópia do repositório.
`state.md`: tarefa atual, não diário completo.
`decisions.md`: decisões relevantes, não cada conversa.

## 6. Quando atualizar

- `/start`;
- `/resume`;
- decisão relevante;
- validação importante;
- encerramento da tarefa.

Evitar escrita a cada frase.

## 7. Perguntas antes de adicionar contexto

1. O agente precisa disso em toda tarefa?
2. É permanente ou só deste projeto?
3. Pode ser carregado sob demanda?
4. Já existe em outro arquivo?
5. Pode ser resumido?
