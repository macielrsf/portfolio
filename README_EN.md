# 🚀 Portfolio - Maciel Rodrigues

[![Deploy to GitHub Pages](https://github.com/seu-usuario/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/seu-usuario/portfolio/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)

<div align="center">
  <a href="README.md">🇧🇷 Português</a> | 
  <a href="README_EN.md">🇺🇸 English</a>
</div>

---

Interactive and modern portfolio developed in React + TypeScript, showcasing my professional experiences, projects, and technical skills in a dynamic and responsive way.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional interface with smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet and mobile
- 🌍 **Multilingual**: Support for Portuguese and English
- 📱 **Smartphone Simulation**: Interactive component that simulates a smartphone with apps
- ⚡ **Optimized Performance**: Built with Vite for fast loading
- 🎯 **SEO Friendly**: Meta tags and optimized structure for search engines
- 🚀 **Automatic Deploy**: CI/CD configured with GitHub Actions

## 🛠️ Technologies Used

### Frontend
- **React 19** - Main library for interface construction
- **TypeScript** - Static typing for greater code safety
- **Vite** - Fast and modern build tool
- **CSS3** - Custom styling with animations
- **React Icons** - Icon library
- **Lucide React** - Modern and consistent icons

### Development Tools
- **ESLint** - Code linting and formatting
- **Yarn** - Package manager
- **GitHub Actions** - Automated CI/CD

## 🏗️ Project Structure

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

## 🚀 How to Run

### Prerequisites
- Node.js 18+ 
- Yarn (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/seu-usuario/portfolio.git
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

### Available Scripts

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

## 📱 Main Features

### 🏠 Home Section
- Personal presentation with photo
- Professional title and description
- Social media links
- Resume download button
- Interactive smartphone simulation

### 📱 Smartphone Simulation
- **Boot Animation**: Realistic startup animation
- **Clock**: Real-time clock
- **App Grid**: Application grid with technologies
- **App Details**: Technology details when clicking
- **Pagination**: Navigation between app pages
- **Search**: Functional search field

### 💼 Experience Section
- Professional experience timeline
- Details of each company and period
- Technologies used in each project
- Interactive technology badges

### 🛠️ Skills Section
- Categorization by type (Frontend, Backend, etc.)
- Progress animations
- Moving technology ticker
- Years of experience for each technology

### 📂 Projects Section
- Project cards with images
- Code and demo links
- Technologies used in each project
- Responsive grid layout

### 📞 Contact Section
- Location information
- Social media links
- Contact form (if implemented)

## 🌍 Language Support

The portfolio supports multiple languages through the translation system:

- **Portuguese (pt-BR)** - Default language
- **English (en)** - Complete translation

### Translation Structure
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

## 🚀 Deploy

### GitHub Pages (Automatic)
The project is configured for automatic deployment on GitHub Pages:

1. **Push to main/master** → Automatic deploy
2. **Pull Request** → Build and tests (no deploy)
3. **Manual Deploy** → Available in GitHub Actions

### Configuration
- Workflow: `.github/workflows/deploy.yml`
- Deploy branch: `gh-pages`
- URL: `https://seu-usuario.github.io/portfolio`

For more details, see the [DEPLOY.md](./DEPLOY.md) file.

## 🎨 Customization

### Colors and Theme
Colors are defined in `src/styles/theme.css` and can be easily customized.

### Content
- **Personal data**: `src/translations/pt-br/common.ts`
- **Experiences**: `src/translations/pt-br/experiences.ts`
- **Projects**: `src/translations/pt-br/projects.ts`
- **Skills**: `src/data/technologies.ts`

### Images
- **Avatar**: `src/assets/photo.jpeg`
- **Company logos**: `src/assets/projects-images/`
- **Technology icons**: `src/assets/technologies/`

## 📊 Performance

- **Lighthouse Score**: 95+ in all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 📞 Contact

- **LinkedIn**: [Maciel Rodrigues](https://linkedin.com/in/seu-perfil)
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)
- **Email**: seu-email@exemplo.com
- **Location**: Santo Antonio do Monte, MG, Brazil

---

<div align="center">
  ⭐ If this project helped you, consider giving it a star!
</div> 