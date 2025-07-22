# Deploy no GitHub Pages + GitHub Actions

Este projeto está configurado para fazer deploy automático no GitHub Pages usando GitHub Actions.

## Configuração Inicial

### 1. Preparar o Repositório

1. Certifique-se de que seu repositório está no GitHub
2. O repositório deve ser público (ou você precisa ter GitHub Pro para repositórios privados)

### 2. Configurar GitHub Pages

1. Vá para **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione a branch **gh-pages** (será criada automaticamente)
4. Clique em **Save**

### 3. Atualizar Configurações

1. **Atualizar o package.json**: Substitua `seu-usuario` na linha `homepage` pelo seu nome de usuário do GitHub:
   ```json
   "homepage": "https://seu-usuario.github.io/portfolio"
   ```

2. **Atualizar o vite.config.ts**: Se o nome do seu repositório for diferente de "portfolio", atualize o base path:
   ```typescript
   base: mode === 'production' ? '/nome-do-seu-repo/' : '/',
   ```

### 4. Configurar GitHub Actions

O workflow já está configurado em `.github/workflows/deploy.yml`. Ele irá:

- Executar em pushes para `main` ou `master`
- Instalar dependências com Yarn
- Executar o linter
- Fazer o build do projeto
- Fazer deploy para GitHub Pages

### 5. Permissões do GitHub Actions

1. Vá para **Settings** > **Actions** > **General**
2. Em **Workflow permissions**, selecione **Read and write permissions**
3. Marque **Allow GitHub Actions to create and approve pull requests**
4. Clique em **Save**

## Como Funciona

1. **Push para main/master**: O GitHub Actions automaticamente:
   - Faz checkout do código
   - Instala dependências
   - Executa linter
   - Faz build
   - Deploy para GitHub Pages

2. **Pull Request**: Executa os mesmos passos, mas não faz deploy

3. **Deploy Manual**: Você pode executar o workflow manualmente:
   - Vá para **Actions** > **Deploy to GitHub Pages**
   - Clique em **Run workflow**

## URLs

- **Desenvolvimento**: `http://localhost:5173`
- **Produção**: `https://seu-usuario.github.io/portfolio`

## Troubleshooting

### Erro 404 no GitHub Pages
- Verifique se o `base` no `vite.config.ts` está correto
- Certifique-se de que o `homepage` no `package.json` está correto
- Aguarde alguns minutos após o deploy (pode demorar para propagar)

### Build falhando
- Verifique os logs do GitHub Actions
- Certifique-se de que todas as dependências estão no `package.json`
- Verifique se não há erros de TypeScript

### Deploy não acontecendo
- Verifique se as permissões do GitHub Actions estão configuradas
- Certifique-se de que está fazendo push para `main` ou `master`
- Verifique se o repositório é público ou você tem GitHub Pro

## Comandos Úteis

```bash
# Deploy manual (se necessário)
yarn deploy

# Build local
yarn build

# Preview do build
yarn preview
``` 