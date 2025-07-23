import { FaReact, FaRocket, FaNode } from 'react-icons/fa';
import { SiRedux, SiTypescript } from 'react-icons/si';

import SectionTitle from '@components/SectionTitle';
import BadgeList from '@components/BadgeList';
import useLanguage from '@hooks/useLanguage';

import './styles.css';

const coreSkills = [
  { name: 'React Native', icon: FaReact, iconColor: '#61dafb' },
  { name: 'Redux', icon: SiRedux, iconColor: '#764abc' },
  { name: 'ReactJS', icon: FaReact, iconColor: '#61dafb' },
  { name: 'CI/CD', icon: FaRocket, iconColor: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, iconColor: '#3178c6' },
  { name: 'Node.js', icon: FaNode, iconColor: '#3c873a' },
];

const SkillsSection = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <SectionTitle title={t('skillsTitle')} />
      <div className="core-skills-content">
        <BadgeList items={coreSkills} />
      </div>
    </div>
  );
}

export default SkillsSection;
