import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  iconColor?: string;
}

export interface SkillsProps {
  skills: Skill[];
}
