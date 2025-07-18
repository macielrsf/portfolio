import { IconType } from 'react-icons';
import { Badge } from './Badge';

interface Button {
  id: string;
  name: string;
  icon?: IconType;
  uri: string;
}

interface BaseProject {
  title: string;
  description: string;
  img: string;
  buttons: Button[];
  technologies: Badge[];
}

export type CreateProject = BaseProject;

export type UpdateProject = Partial<BaseProject>;

export type Project = BaseProject & {
  _id: string;
};
