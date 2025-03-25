export type Project = {
  name: string;
  description: string;
  technologies: string[];
  android?: string;
  ios?: string;
  image: string;
  status: string;
};

export const projects: Project[] = [
  {
    name: "App HubSoft (Técnico)",
    description:
      "Aplicativo usado por técnicos de provedores, focado em suporte e manutenção em campo. Desenvolvido e mantido desde 2017 para a empresa HubSoft.",
    technologies: [
      "React Native",
      "Redux",
      "React Hooks",
      "Styled-Components",
      "Fastlane",
      "Jest",
      "Code Push",
      "React Navigation",
      "Redux Persist"
    ],
    android: "https://play.google.com/store/apps/details?id=com.hubsoft_app",
    ios: "https://play.google.com/store/apps/details?id=com.hubsoft_app",
    image: "/assets/mock.gif",
    status: "Publicado",
  },
  {
    name: "App do Cliente (white-label)",
    description:
      "Aplicativo white-label utilizado por mais de 450 provedores de internet no Brasil. Customizado por cliente, com funcionalidades de atendimento, fatura e suporte.",
    technologies: [
      "React Native",
      "Redux",
      "React Hooks",
      "Styled-Components",
      "Fastlane",
      "Jest",
      "Code Push",
      "React Navigation",
      "Redux Persist"
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.hubsoft_client_app.allrede",
    ios: "https://apps.apple.com/br/app/minha-allrede/id1615766177",
    image: "/assets/mock.gif",
    status: "Publicado",
  },
  {
    name: "RAP10 Internet",
    description:
      "Aplicativo oficial da RAP10 Internet, focado em funcionalidades para clientes residenciais, como fatura, suporte, segunda via, pagamentos e notificações.",
    technologies: [
      "React Native",
      "Context API",
      "React Hooks",
      "Styled-Components",
      "Fastlane",
      "Jest",
      "Code Push",
      "React Navigation"
    ],
    ios: "https://apps.apple.com/br/app/rap10-internet/id1610036916",
    image: "/assets/mock.gif",
    status: "Publicado (iOS)",
  },
  {
    name: "Aplicativo da Paróquia (white-label)",
    description:
      "Aplicativo MVP desenvolvido com autenticação via Firebase, gerenciamento de conteúdo pela Firestore, Cloud Functions e upload de mídia. Idealizado para paróquias e comunidades religiosas.",
    technologies: [
      "React Native",
      "Redux",
      "React Hooks",
      "Styled-Components",
      "Fastlane",
      "Jest",
      "Code Push",
      "React Navigation",
      "TypeScript",
      "Firebase Auth",
      "Firebase Cloud Functions",
      "Firebase Firestore",
      "Firebase Storage"
    ],
    image: "/assets/mock.gif",
    status: "MVP finalizado (não publicado)",
  }
];