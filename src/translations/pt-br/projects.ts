import { Project } from '../../types/Project';
import hubsoftLogo from '../../assets/projects-images/hubsoft-logo.webp';
import allredeLogo from '../../assets/projects-images/allrede-logo.webp';
import sempreLogo from '../../assets/projects-images/sempre-logo.jpg';
import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const projects: Project[] = [
  {
    _id: "f68ffcf8-cfeb-41f9-8699-1d9b4404ca85",
    title: "App Hubsoft",
    description: "Um app de campo para técnicos de provedores de internet.",
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
    title: "App All Rede",
    description: "Um app white-label para clientes All Rede.",
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
    title: "App Sempre Internet",
    description: "Um app white-label para clientes Sempre Internet.",
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
]; 