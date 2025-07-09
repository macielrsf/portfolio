import React from 'react';

import './styles.css';
import {SkillsProps} from './types';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="skills-container">
    <div className="skills-content">
      {skills.map((skill, index) => (
        <div key={index} className="skill-badge">
          <skill.icon size={20} color={skill.iconColor || '#fff'} />
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
