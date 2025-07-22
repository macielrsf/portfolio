# 🚀 Portfolio - Maciel Rodrigues

[![Deploy to GitHub Pages](https://github.com/macielrsf/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/macielrsf/portfolio/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)

<div align="center">
  <a href="README_EN.md">🇺🇸 English</a> | 
  <a href="README.md">🇧🇷 Português</a>
</div>

---

## 🇺🇸 English

Interactive and modern portfolio developed in React + TypeScript, showcasing my professional experiences, projects, and technical skills in a dynamic and responsive way.

### ✨ Features

- 🎨 **Modern Design**: Clean and professional interface with smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet and mobile
- 🌍 **Multilingual**: Support for Portuguese and English
- 📱 **Smartphone Simulation**: Interactive component that simulates a smartphone with apps
- ⚡ **Optimized Performance**: Built with Vite for fast loading
- 🎯 **SEO Friendly**: Meta tags and optimized structure for search engines
- 🚀 **Automatic Deploy**: CI/CD configured with GitHub Actions

### 🛠️ Technologies Used

#### Frontend
- **React 19** - Main library for interface construction
- **TypeScript** - Static typing for greater code safety
- **Vite** - Fast and modern build tool
- **CSS3** - Custom styling with animations
- **React Icons** - Icon library
- **Lucide React** - Modern and consistent icons

#### Development Tools
- **ESLint** - Code linting and formatting
- **Yarn** - Package manager
- **GitHub Actions** - Automated CI/CD

### 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Badge/          # Technology badges
│   ├── Header/         # Header with navigation
│   ├── LoadingScreen/  # Loading screen
│   ├── Phone/          # Smartphone simulation
│   └── SocialMedia/    # Social media links
├── sections/           # Main portfolio sections
│   ├── HomeSection/    # Initial section with presentation
│   ├── SkillsSection/  # Skills and technologies
│   ├── ExperiencesSection/ # Professional experience
│   ├── ProjectsSection/    # Completed projects
│   └── ContactSection/     # Contact information
├── contexts/           # React contexts
│   └── LanguageContext.tsx # Language management
├── hooks/              # Custom hooks
├── translations/       # Translation files
├── types/              # TypeScript definitions
└── utils/              # Utilities
```

### 🚀 How to Run

#### Prerequisites
- Node.js 18+ 
- Yarn (recommended) or npm

#### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/macielrsf/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run in development mode**
   ```bash
   yarn dev
   ```

4. **Access in browser**
   ```
   http://localhost:5173
   ```

#### Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Generate production build
yarn preview      # Preview local build
yarn lint         # Run linter

# Deploy
yarn deploy       # Manual deploy to GitHub Pages
yarn deploy:manual # Build + Manual deploy
```

### 📱 Main Features

#### 🏠 Home Section
- Personal presentation with photo
- Professional title and description
- Social media links
- Resume download button
- Interactive smartphone simulation

#### 📱 Smartphone Simulation
- **Boot Animation**: Realistic startup animation
- **Clock**: Real-time clock
- **App Grid**: Application grid with technologies
- **App Details**: Technology details when clicking
- **Pagination**: Navigation between app pages
- **Search**: Functional search field

#### 💼 Experience Section
- Professional experience timeline
- Details of each company and period
- Technologies used in each project
- Interactive technology badges

#### 🛠️ Skills Section
- Categorization by type (Frontend, Backend, etc.)
- Progress animations
- Moving technology ticker
- Years of experience for each technology

#### 📂 Projects Section
- Project cards with images
- Code and demo links
- Technologies used in each project
- Responsive grid layout

#### 📞 Contact Section
- Location information
- Social media links
- Contact form (if implemented)

### �� Language Support

The portfolio supports multiple languages through the translation system:

- **Portuguese (pt-BR)** - Default language
- **English (en)** - Complete translation

#### Translation Structure
```
translations/
├── pt-br/
│   ├── common.ts      # Common texts
│   ├── experiences.ts # Experiences
│   ├── projects.ts    # Projects
│   └── skills.ts      # Skills
└── en/
    └── [same structure]
```

### 🚀 Deploy

#### GitHub Pages (Automatic)
The project is configured for automatic deployment on GitHub Pages:

1. **Push to main/master** → Automatic deploy
2. **Pull Request** → Build and tests (no deploy)
3. **Manual Deploy** → Available in GitHub Actions

#### Configuration
- Workflow: `.github/workflows/deploy.yml`
- Deploy branch: `gh-pages`
- URL: `https://macielrsf.github.io/portfolio`

For more details, see the [DEPLOY.md](./DEPLOY.md) file.

### 🎨 Customization

#### Colors and Theme
Colors are defined in `src/styles/theme.css` and can be easily customized.

#### Content
- **Personal data**: `src/translations/pt-br/common.ts`
- **Experiences**: `src/translations/pt-br/experiences.ts`
- **Projects**: `src/translations/pt-br/projects.ts`
- **Skills**: `src/data/technologies.ts`

#### Images
- **Avatar**: `src/assets/photo.jpeg`
- **Company logos**: `src/assets/projects-images/`
- **Technology icons**: `src/assets/technologies/`

### 📊 Performance

- **Lighthouse Score**: 95+ in all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

### 📞 Contact

- **LinkedIn**: [Maciel Rodrigues](https://linkedin.com/in/macielrodrigues)
- **GitHub**: [@macielrsf](https://github.com/macielrsf)
- **Email**: macielrsf@gmail.com
- **Location**: Santo Antonio do Monte, MG, Brazil

---

## 🇧🇷 Português

Portfolio interativo e moderno desenvolvido em React + TypeScript, apresentando minhas experiências profissionais, projetos e habilidades técnicas de forma dinâmica e responsiva.

### ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional com animações suaves
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- 🌍 **Multilíngue**: Suporte para Português e Inglês
- 📱 **Simulação de Smartphone**: Componente interativo que simula um smartphone com apps
- ⚡ **Performance Otimizada**: Construído com Vite para carregamento rápido
- 🎯 **SEO Friendly**: Meta tags e estrutura otimizada para motores de busca
- 🚀 **Deploy Automático**: CI/CD configurado com GitHub Actions

### 🛠️ Tecnologias Utilizadas

#### Frontend
- **React 19** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança do código
- **Vite** - Build tool rápida e moderna
- **CSS3** - Estilização customizada com animações
- **React Icons** - Biblioteca de ícones
- **Lucide React** - Ícones modernos e consistentes

#### Ferramentas de Desenvolvimento
- **ESLint** - Linting e formatação de código
- **Yarn** - Gerenciador de pacotes
- **GitHub Actions** - CI/CD automatizado

### 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Badge/          # Badges para tecnologias
│   ├── Header/         # Cabeçalho com navegação
│   ├── LoadingScreen/  # Tela de carregamento
│   ├── Phone/          # Simulação de smartphone
│   └── SocialMedia/    # Links para redes sociais
├── sections/           # Seções principais do portfolio
│   ├── HomeSection/    # Seção inicial com apresentação
│   ├── SkillsSection/  # Habilidades e tecnologias
│   ├── ExperiencesSection/ # Experiência profissional
│   ├── ProjectsSection/    # Projetos realizados
│   └── ContactSection/     # Informações de contato
├── contexts/           # Contextos React
│   └── LanguageContext.tsx # Gerenciamento de idiomas
├── hooks/              # Custom hooks
├── translations/       # Arquivos de tradução
├── types/              # Definições TypeScript
└── utils/              # Utilitários
```

### 🚀 Como Executar

#### Pré-requisitos
- Node.js 18+ 
- Yarn (recomendado) ou npm

#### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/macielrsf/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

#### Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev          # Inicia servidor de desenvolvimento
yarn build        # Gera build de produção
yarn preview      # Preview do build local
yarn lint         # Executa linter

# Deploy
yarn deploy       # Deploy manual para GitHub Pages
yarn deploy:manual # Build + Deploy manual
```

### 📱 Funcionalidades Principais

#### 🏠 Seção Inicial
- Apresentação pessoal com foto
- Título e descrição profissional
- Links para redes sociais
- Botão para download do currículo
- Simulação interativa de smartphone

#### 📱 Simulação de Smartphone
- **Boot Animation**: Animação de inicialização realista
- **Clock**: Relógio em tempo real
- **App Grid**: Grid de aplicativos com tecnologias
- **App Details**: Detalhes de cada tecnologia ao clicar
- **Pagination**: Navegação entre páginas de apps
- **Search**: Campo de busca funcional

#### 💼 Seção de Experiências
- Timeline de experiências profissionais
- Detalhes de cada empresa e período
- Tecnologias utilizadas em cada projeto
- Badges interativos para tecnologias

#### 🛠️ Seção de Habilidades
- Categorização por tipo (Frontend, Backend, etc.)
- Animações de progresso
- Ticker de tecnologias em movimento
- Experiência em anos para cada tecnologia

#### 📂 Seção de Projetos
- Cards de projetos com imagens
- Links para código e demo
- Tecnologias utilizadas em cada projeto
- Layout responsivo em grid

#### 📞 Seção de Contato
- Informações de localização
- Links para redes sociais
- Formulário de contato (se implementado)

### 🌍 Suporte a Idiomas

O portfolio suporta múltiplos idiomas através do sistema de traduções:

- **Português (pt-BR)** - Idioma padrão
- **Inglês (en)** - Tradução completa

#### Estrutura de Traduções
```
translations/
├── pt-br/
│   ├── common.ts      # Textos comuns
│   ├── experiences.ts # Experiências
│   ├── projects.ts    # Projetos
│   └── skills.ts      # Habilidades
└── en/
    └── [mesma estrutura]
```

### 🚀 Deploy

#### GitHub Pages (Automático)
O projeto está configurado para deploy automático no GitHub Pages:

1. **Push para main/master** → Deploy automático
2. **Pull Request** → Build e testes (sem deploy)
3. **Deploy Manual** → Disponível nas GitHub Actions

#### Configuração
- Workflow: `.github/workflows/deploy.yml`
- Branch de deploy: `gh-pages`
- URL: `https://macielrsf.github.io/portfolio`

Para mais detalhes, consulte o arquivo [DEPLOY.md](./DEPLOY.md).

### 🎨 Customização

#### Cores e Tema
As cores são definidas em `src/styles/theme.css` e podem ser facilmente customizadas.

#### Conteúdo
- **Dados pessoais**: `src/translations/pt-br/common.ts`
- **Experiências**: `src/translations/pt-br/experiences.ts`
- **Projetos**: `src/translations/pt-br/projects.ts`
- **Habilidades**: `src/data/technologies.ts`

#### Imagens
- **Avatar**: `src/assets/photo.jpeg`
- **Logos de empresas**: `src/assets/projects-images/`
- **Ícones de tecnologias**: `src/assets/technologies/`

### 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### 📞 Contato

- **LinkedIn**: [Maciel Rodrigues](https://linkedin.com/in/macielrodrigues)
- **GitHub**: [@macielrsf](https://github.com/macielrsf)
- **Email**: macielrsf@gmail.com
- **Localização**: Santo Antonio do Monte, MG, Brasil

---

<div align="center">
  ⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
</div>
