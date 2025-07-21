import { Experience } from '../types/Experience';
import { useTranslatedExperiences } from '../utils/translationUtils';

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer | Mobile & FullStack',
    company: 'Hubsoft Brasil LTDA',
    description:
      'As a Senior Software Engineer at Hubsoft, I lead the development of scalable mobile solutions using React Native for over 450 ISPs (Internet Service Providers) across Brazil. I manage the full app lifecycle with a strong focus on performance and CI/CD automation. I’m responsible for improving two main products: a white-label app for end customers and a field service app used by technicians for service order tasks.',
    period: '2017 - Present',
    technologies: [
      {name: 'React Native'}, 
      {name: 'Redux'}, 
      {name: 'CI/CD'}, 
      {name: 'Laravel'}
    ],
  },
];

// Hook para obter experiências traduzidas
export const useExperiences = () => {
  return useTranslatedExperiences(experiences);
};
