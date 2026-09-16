# ⚙️ RUNTIME MANAGER — ESPECIFICAÇÃO DIDÁTICA

## Responsabilidade

`engine/runtime-manager.ts` gerencia contextos por projeto. Ele NÃO é o cérebro do agente; é infraestrutura.

## Fluxo obrigatório do `/start`

```text
/start
  ↓
runtime-manager.ts start
  ↓
resolver project root
  ↓
calcular project id
  ↓
ler ~/.dev-agent/registry.json
  ↓
projeto existe?
  ├── NÃO → registrar + criar pasta + criar 3 arquivos
  └── SIM → reutilizar pasta
  ↓
refresh automático seguro
  ↓
retornar resumo
  ↓
agente carrega runtime
```

## Como identificar projeto

1. tentar `git rev-parse --show-toplevel`;
2. se não houver Git, usar `process.cwd()`;
3. normalizar caminho real;
4. `name = basename(root)`;
5. `id = hash(path normalizado)` truncado.

Não usar apenas nome da pasta: dois projetos podem ter o mesmo nome.

## Persistência

```text
~/.dev-agent/
├── registry.json
└── projects/
    └── <slug>-<id>/
        ├── context.md
        ├── state.md
        └── decisions.md
```

## `registry.json`

```json
{
  "version": 1,
  "projects": {
    "a13f84c2": {
      "name": "windops",
      "path": "/home/aluno/IdeaProjects/windops",
      "runtimeDir": "windops-a13f84c2",
      "lastUsedAt": "ISO_DATE"
    }
  }
}
```

## Comandos iniciais

- `start`
- `status`
- `refresh`
- `close`

## Metadados automáticos permitidos

- nome;
- path;
- Git root;
- branch;
- package manager;
- stack por manifests;
- scripts;
- timestamp.

Não inferir como fato:
- objetivo;
- arquitetura desejada;
- decisão;
- motivo;
- débito técnico.

## Bloco AUTO

`context.md` pode ter:

```text
<!-- AUTO:START -->
...
<!-- AUTO:END -->
```

O TypeScript reescreve apenas esse trecho.

## Saída do runtime-manager

Preferir JSON curto e parseável:

```json
{
  "projectId": "a13f84c2",
  "projectName": "windops",
  "projectRoot": "/.../windops",
  "runtimeDir": "/home/.../.dev-agent/projects/windops-a13f84c2",
  "isNew": false,
  "branch": "main"
}
```

## Segurança

- não deletar runtime automaticamente;
- não sobrescrever decisions;
- não executar comandos destrutivos;
- não iniciar daemon;
- não copiar código para memória;
- não gravar secrets;
- ignorar `.env` e valores sensíveis.
