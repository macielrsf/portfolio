import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import {Experience} from '../../types/Experience';
import BadgeList from '../BadgeList';

import './styles.css';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-content">
        <h3 className="experience-title">{experience.title}</h3>
        <h4 className="experience-company">{experience.company}</h4>
        <p className="experience-description">{experience.description}</p>

        <div className="experience-period">
          <FiCalendar className="experience-icon" />
          <span>{experience.period}</span>
        </div>

        <div className="experience-badges">
          <BadgeList items={experience.technologies} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
