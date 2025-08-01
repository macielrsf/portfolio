import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Project } from '../../types/Project';
import hubsoftLogo from '@assets/projects-images/hubsoft-logo.webp';
import allredeLogo from '@assets/projects-images/allrede-logo.webp';
import sempreLogo from '@assets/projects-images/sempre-logo.jpg';
import githubLogo from '@assets/projects-images/github.jpeg';
import rap10Logo from '@assets/projects-images/rap10-logo.png';
import g3Logo from '@assets/projects-images/g3telecom-logo.webp';

export const projects: Project[] = [
  {
    _id: "f68ffcf8-cfeb-41f9-8699-1d9b4404ca85",
    title: "Hubsoft App",
    description: "A field service app for ISP technicians.",
    img: hubsoftLogo,
    technologies: [
      {name: 'React Native', uri: 'https://reactnative.dev/'}, 
      {name: 'Redux', uri: 'https://redux.js.org/'}, 
      {name: 'CI/CD'}, 
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'Code Push', uri: 'https://github.com/microsoft/react-native-code-push'},
      {name: 'Fastlane', uri: 'https://fastlane.tools/'},
      {name: 'Flipper', uri: 'https://fbflipper.com/'},
      {name: 'Jest', uri: 'https://jestjs.io/'},
      {name: 'Testing Library', uri: 'https://callstack.github.io/react-native-testing-library/'},
    ],
    buttons: [{
      id: "0154472d-55c0-402e-9e94-066596d6db22",
      name: "Android",
      uri: "https://play.google.com/store/apps/details?id=com.hubsoft_app",
      icon: FcAndroidOs 
    }, {
      id: "a57ada99-44d2-482a-9e79-e91ccedd0957",
      name: "iOS",
      uri: "https://apps.apple.com/br/app/hubsoft/id1476554009",
      icon: FaApple
    }]
  },
  {
    _id: "93b99693-b2a3-4825-8b2d-066d08542e06",
    title: "All Rede App",
    description: "A white-label app for All Rede customers",
    img: allredeLogo,
    technologies: [
      {name: 'React Native', uri: 'https://reactnative.dev/'}, 
      {name: 'Redux', uri: 'https://redux.js.org/'}, 
      {name: 'CI/CD'}, 
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'Code Push', uri: 'https://github.com/microsoft/react-native-code-push'},
      {name: 'Fastlane', uri: 'https://fastlane.tools/'},
      {name: 'Flipper', uri: 'https://fbflipper.com/'},
      {name: 'Jest', uri: 'https://jestjs.io/'},
      {name: 'Testing Library', uri: 'https://callstack.github.io/react-native-testing-library/'},
      {name: 'React Hook Form', uri: 'https://react-hook-form.com/'},
      {name: 'Figma', uri: 'https://www.figma.com/'},
    ],
    buttons: [{
      id: "0154472d-55c0-402e-9e94-066596d6db22",
      name: "Android",
      uri: "https://play.google.com/store/apps/details?id=com.hubsoft_client_app.allrede",
      icon: FcAndroidOs 
    }, {
      id: "a57ada99-44d2-482a-9e79-e91ccedd0957",
      name: "iOS",
      uri: "https://apps.apple.com/br/app/minha-allrede/id1615766177",
      icon: FaApple
    }]
  },
  {
    _id: "7b1b8fb5-85b0-4515-bfcf-2d673ecc491f",
    title: "Sempre Internet App",
    description: "A white-label app for Sempre Internet customers",
    img: sempreLogo,
    technologies: [
      {name: 'React Native', uri: 'https://reactnative.dev/'}, 
      {name: 'Redux', uri: 'https://redux.js.org/'}, 
      {name: 'CI/CD'}, 
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'Code Push', uri: 'https://github.com/microsoft/react-native-code-push'},
      {name: 'Fastlane', uri: 'https://fastlane.tools/'},
      {name: 'Flipper', uri: 'https://fbflipper.com/'},
      {name: 'Jest', uri: 'https://jestjs.io/'},
      {name: 'Testing Library', uri: 'https://callstack.github.io/react-native-testing-library/'},
      {name: 'React Hook Form', uri: 'https://react-hook-form.com/'},
      {name: 'Figma', uri: 'https://www.figma.com/'},
    ],
    buttons: [{
      id: "0154472d-55c0-402e-9e94-066596d6db22",
      name: "Android",
      uri: "https://play.google.com/store/apps/details?id=com.hubsoft_client_app.sempre",
      icon: FcAndroidOs 
    }, {
      id: "a57ada99-44d2-482a-9e79-e91ccedd0957",
      name: "iOS",
      uri: "https://apps.apple.com/br/app/sempre-internet/id1523528026",
      icon: FaApple
    }]
  },
  {
    _id: "7b1b8fb5-85b0-4515-bfcf-2d673ecc491f",
    title: "App G3 Telecom",
    description: "A white-label app for G3 Telecom customers.",
    img: g3Logo,
    technologies: [
      {name: 'React Native', uri: 'https://reactnative.dev/'}, 
      {name: 'Redux', uri: 'https://redux.js.org/'}, 
      {name: 'CI/CD'}, 
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'Code Push', uri: 'https://github.com/microsoft/react-native-code-push'},
      {name: 'Fastlane', uri: 'https://fastlane.tools/'},
      {name: 'Flipper', uri: 'https://fbflipper.com/'},
      {name: 'Jest', uri: 'https://jestjs.io/'},
      {name: 'Testing Library', uri: 'https://callstack.github.io/react-native-testing-library/'},
      {name: 'React Hook Form', uri: 'https://react-hook-form.com/'},
      {name: 'Figma', uri: 'https://www.figma.com/'},
    ],
    buttons: [{
      id: "0154472d-55c0-402e-9e94-066596d6db22",
      name: "Android",
      uri: "https://play.google.com/store/apps/details?id=com.hubsoft_client_app.g3telecom",
      icon: FcAndroidOs 
    }, {
      id: "a57ada99-44d2-482a-9e79-e91ccedd0957",
      name: "iOS",
      uri: "https://apps.apple.com/br/app/minha-g3/id1640465858",
      icon: FaApple
    }]
  },
  {
    _id: "316cc286-4b80-473c-9f78-761810318175",
    title: "RAP10 Internet App",
    description: "An app for RAP10 Internet customers.",
    img: rap10Logo,
    technologies: [
      {name: 'React Native', uri: 'https://reactnative.dev/'}, 
      {name: 'Redux', uri: 'https://redux.js.org/'}, 
      {name: 'CI/CD'}, 
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'Code Push', uri: 'https://github.com/microsoft/react-native-code-push'},
      {name: 'Fastlane', uri: 'https://fastlane.tools/'},
      {name: 'Flipper', uri: 'https://fbflipper.com/'},
      {name: 'Jest', uri: 'https://jestjs.io/'},
      {name: 'Testing Library', uri: 'https://callstack.github.io/react-native-testing-library/'},
      {name: 'React Hook Form', uri: 'https://react-hook-form.com/'},
      {name: 'Figma', uri: 'https://www.figma.com/'},
    ],
    buttons: [{
      id: "a57ada99-44d2-482a-9e79-e91ccedd0957",
      name: "iOS",
      uri: "https://apps.apple.com/br/app/rap10-internet/id1610036916",
      icon: FaApple
    }]
  },
  {
    _id: "7b1b8fb5-85b0-4515-bfcf-2d673ecc491h",
    title: "React Native Clean Architecture - DDD & SOLID",
    description: "A clean architecture project example in React Native, following the DDD (Domain-Driven Design) and SOLID principles.",
    img: githubLogo,
    technologies: [
      {name: 'React Native', uri: 'https://reactnative.dev/'}, 
      {name: 'Typescript', uri: 'https://www.typescriptlang.org/'},
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'DDD', uri: 'https://www.domainlanguage.com/ddd/'},
      {name: 'SOLID', uri: 'https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design'},
      {name: 'Tanstack React Query', uri: 'https://tanstack.com/query/latest/docs/framework/react/overview'},
    ],
    buttons: [{
      id: "0154472d-55c0-402e-9e94-066596d6db22",
      name: "GitHub",
      uri: "https://github.com/macielrsf/react-native-clean-arch-domain",
      icon: FaGithub
    }]
  },
  {
    _id: "7b1b8fb5-85b0-4515-bfcf-2d673ecc491g",
    title: "React Native GPT",
    description: "A React Native chat app with ChatGPT integration using SSE (Server-Sent Events), providing real-time responses.",
    img: githubLogo,
    technologies: [
      {name: 'React Native', uri: 'https://reactnative.dev/'}, 
      {name: 'Typescript', uri: 'https://www.typescriptlang.org/'},
      {name: 'Expo', uri: 'https://expo.dev/'},
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'SSE', uri: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events'},
      {name: 'ChatGPT', uri: 'https://openai.com/api/'},
    ],
    buttons: [{
      id: "0154472d-55c0-402e-9e94-066596d6db22",
      name: "GitHub",
      uri: "https://github.com/macielrsf/react-native-gpt",
      icon: FaGithub
    }]
  },
  {
    _id: "7b1b8fb5-85b0-4515-bfcf-2d673ecc491h",
    title: "Portfolio",
    description: "My portfolio, developed with React and TypeScript.",
    img: githubLogo,
    technologies: [
      {name: 'React', uri: 'https://react.dev/'}, 
      {name: 'Typescript', uri: 'https://www.typescriptlang.org/'},
      {name: 'Hooks', uri: 'https://react.dev/reference/react/hooks'},
      {name: 'CSS', uri: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
      {name: 'HTML', uri: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
      {name: 'Git', uri: 'https://git-scm.com/'},
      {name: 'Figma', uri: 'https://www.figma.com/'},
      {name: 'Vite', uri: 'https://vitejs.dev/'},
      {name: 'GitHub Pages', uri: 'https://pages.github.com/'},
    ],
    buttons: [{
      id: "0154472d-55c0-402e-9e94-066596d6db22",
      name: "GitHub",
      uri: "https://github.com/macielrsf/portfolio",
      icon: FaGithub
    }]
  },
]; 