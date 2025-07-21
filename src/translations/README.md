# Sistema de Internacionalização

Este projeto implementa um sistema completo de internacionalização (i18n) para suportar múltiplos idiomas.

## Estrutura

```
src/translations/
├── pt-br/
│   ├── common.ts
│   └── index.ts
├── en/
│   ├── common.ts
│   └── index.ts
└── README.md
```

## Como usar

### 1. Importar o hook

```tsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { t, language, toggleLanguage, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('hello')}</h1>
      <button onClick={toggleLanguage}>
        Trocar idioma
      </button>
    </div>
  );
};
```

### 2. Adicionar novas traduções

Para adicionar novas traduções, edite os arquivos correspondentes:

**src/translations/pt-br/common.ts:**
```typescript
export const common = {
  // ... traduções existentes
  newKey: "Nova tradução em português",
};
```

**src/translations/en/common.ts:**
```typescript
export const common = {
  // ... traduções existentes
  newKey: "New translation in English",
};
```

### 3. Usar em componentes

```tsx
const { t } = useLanguage();

// Tradução simples
<p>{t('hello')}</p>

// Com namespace específico (se necessário)
<p>{t('key', 'namespace')}</p>
```

## Funcionalidades

- **Idioma padrão**: Inglês (en)
- **Persistência**: O idioma selecionado é salvo no localStorage
- **Toggle automático**: Alterna entre pt-br e en
- **Fallback**: Se uma chave não for encontrada, retorna a própria chave
- **TypeScript**: Totalmente tipado para melhor experiência de desenvolvimento

## API do Hook

### `useLanguage()`

Retorna um objeto com:

- `language`: Idioma atual ('pt-br' | 'en')
- `toggleLanguage()`: Função para alternar entre idiomas
- `setLanguage(lang)`: Função para definir um idioma específico
- `t(key, namespace?)`: Função para obter tradução

### Exemplo completo

```tsx
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  
  return (
    <header>
      <nav>
        <a href="#home">{t('home')}</a>
        <a href="#about">{t('about')}</a>
        <button onClick={toggleLanguage}>
          {language === 'pt-br' ? '🇺🇸 EN' : '🇧🇷 PT-BR'}
        </button>
      </nav>
    </header>
  );
};
```

## Configuração

O `LanguageProvider` deve envolver toda a aplicação no `App.tsx`:

```tsx
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      {/* resto da aplicação */}
    </LanguageProvider>
  );
}
```

## Tradução de Dados

O sistema também suporta tradução automática dos dados da pasta `src/data`. Para usar:

### 1. Hooks de Tradução

```tsx
import { useExperiences } from '../data/experiences';
import { useProjects } from '../data/projects';
import { useSkills } from '../data/skills';

const MyComponent = () => {
  const experiences = useExperiences(); // Dados traduzidos
  const projects = useProjects(); // Dados traduzidos
  const skills = useSkills(); // Dados traduzidos
  
  return (
    <div>
      {experiences.map(exp => (
        <div key={exp.title}>{exp.title}</div>
      ))}
    </div>
  );
};
```

### 2. Utilitários de Tradução

```tsx
import { useTranslatedExperiences, useTranslatedProjects, useTranslatedSkills } from '../utils/translationUtils';

const MyComponent = () => {
  const rawExperiences = [/* dados brutos */];
  const translatedExperiences = useTranslatedExperiences(rawExperiences);
  
  return (
    <div>
      {translatedExperiences.map(exp => (
        <div key={exp.title}>{exp.title}</div>
      ))}
    </div>
  );
};
```

### 3. Dados Traduzidos Automaticamente

Os seguintes dados são traduzidos automaticamente:

- **Experiências**: título, empresa, descrição
- **Projetos**: título, descrição
- **Skills**: nome

### 4. Adicionar Novas Traduções de Dados

Para adicionar traduções para novos dados:

1. Adicione as chaves de tradução em `src/translations/pt-br/common.ts` e `src/translations/en/common.ts`
2. Atualize o mapeamento em `src/utils/translationUtils.ts`
3. Use os hooks correspondentes nos componentes 