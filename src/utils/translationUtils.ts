import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Experience } from '../types/Experience';
import { Project } from '../types/Project';
import { Skill } from '../types/Skill';

// Mapeamento de chaves para tradução
const skillTranslationKeys: Record<string, string> = {
  'Microservices': 'microservices',
  'Backend': 'backend',
  'Frontend': 'frontend',
  'Clean Architecture': 'cleanArchitecture',
  'Clean Code': 'cleanCode',
  'Layered Architecture': 'layeredArchitecture',
  'MVC': 'mvc',
  'SOLID': 'solid',
  'Design Patterns': 'designPatterns',
  'REST API': 'restApi',
  'Websockets': 'websockets',
  'TDD': 'tdd',
  'CI/CD': 'cicd',
  'GIT': 'git',
  'Docker': 'docker',
  'SQL': 'sql',
  'NoSql': 'nosql',
  'Redis': 'redis',
  'Elasticsearch': 'elasticsearch',
  'JWT': 'jwt',
  'CORS': 'cors',
  'SCRUM': 'scrum',
  'Kanban': 'kanban',
  'Swagger': 'swagger',
  'Responsiveness ': 'responsiveness',
  'UI/UX': 'uiux'
};

const projectTranslationKeys: Record<string, { title: string; description: string }> = {
  'Hubsoft App': { title: 'hubsoftApp', description: 'hubsoftAppDescription' },
  'All Rede App': { title: 'allRedeApp', description: 'allRedeAppDescription' },
  'Sempre Internet App': { title: 'sempreInternetApp', description: 'sempreInternetAppDescription' }
};

const experienceTranslationKeys: Record<string, { title: string; company: string; description: string; period: string }> = {
  'Senior Software Engineer | Mobile & FullStack': { 
    title: 'seniorSoftwareEngineer', 
    company: 'hubsoftBrasil', 
    description: 'experienceDescription',
    period: 'period'
  }
};

// Hook para traduzir experiências
export const useTranslatedExperiences = (experiences: Experience[]): Experience[] => {
  const { t } = useLanguage();
  
  return useMemo(() => {
    return experiences.map(experience => {
      const translationKey = experienceTranslationKeys[experience.title];
      
      if (translationKey) {
        return {
          ...experience,
          title: t(translationKey.title),
          company: t(translationKey.company),
          description: t(translationKey.description),
          period: t(translationKey.period)
        };
      }
      
      return experience;
    });
  }, [experiences, t]);
};

// Hook para traduzir projetos
export const useTranslatedProjects = (projects: Project[]): Project[] => {
  const { t } = useLanguage();
  
  return useMemo(() => {
    return projects.map(project => {
      const translationKey = projectTranslationKeys[project.title];
      
      if (translationKey) {
        return {
          ...project,
          title: t(translationKey.title),
          description: t(translationKey.description)
        };
      }
      
      return project;
    });
  }, [projects, t]);
};

// Hook para traduzir skills
export const useTranslatedSkills = (skills: Skill[]): Skill[] => {
  const { t } = useLanguage();
  
  return useMemo(() => {
    return skills.map(skill => {
      const translationKey = skillTranslationKeys[skill.name];
      
      if (translationKey) {
        return {
          ...skill,
          name: t(translationKey)
        };
      }
      
      return skill;
    });
  }, [skills, t]);
}; 