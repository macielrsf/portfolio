import {Badge} from './Badge';

export interface Experience {
  title: string;
  company: string;
  location: string;
  description: string;
  period: string;
  startDate: string;
  endDate?: string;
  technologies: Badge[];
}

export interface ExperienceList {
  items: Experience[];
}
