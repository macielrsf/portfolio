import React from 'react';
import { IconType } from 'react-icons';

import './styles.css';

interface Skill {
  name: string;
  icon: IconType;
  iconColor?: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-badge">
          <skill.icon size={20} color={skill.iconColor || '#fff'} />
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
