import useLanguage from '@hooks/useLanguage';
import { experiences as experiencesPT, projects as projectsPT, skills as skillsPT } from '@translations/pt-br';
import { experiences as experiencesEN, projects as projectsEN, skills as skillsEN } from '@translations/en';

export function useLocalizedExperiences() {
  const { language } = useLanguage();
  return language === 'pt-br' ? experiencesPT : experiencesEN;
}

export function useLocalizedProjects() {
  const { language } = useLanguage();
  return language === 'pt-br' ? projectsPT : projectsEN;
}

export function useLocalizedSkills() {
  const { language } = useLanguage();
  return language === 'pt-br' ? skillsPT : skillsEN;
} 