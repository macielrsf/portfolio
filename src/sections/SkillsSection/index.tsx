import { FaReact, FaRocket, FaNode } from 'react-icons/fa';
import { SiRedux, SiTypescript } from 'react-icons/si';
import {SectionTitle} from '../../components/SectionTitle';
import Skills from './Components/Skills';

const skills = [
  { name: 'React Native', icon: FaReact, iconColor: '#61dafb' },
  { name: 'Redux', icon: SiRedux, iconColor: '#764abc' },
  { name: 'ReactJS', icon: FaReact, iconColor: '#61dafb' },
  { name: 'CI/CD', icon: FaRocket, iconColor: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, iconColor: '#3178c6' },
  { name: 'Node.js', icon: FaNode, iconColor: '#3c873a' },
];

export const SkillsSection = () => {
  return (
    <div>
      <SectionTitle title="Core Skills" />
      <Skills skills={skills} />
    </div>
  );
}
