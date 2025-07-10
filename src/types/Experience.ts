import {Badge} from './Badge';

export interface Experience {
  title: string;
  company: string;
  description: string;
  period: string;
  technologies: Badge[];
}

export interface ExperienceList {
  items: Experience[];
}
