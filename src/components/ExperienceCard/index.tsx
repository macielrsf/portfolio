import React from 'react';
import {Experience} from '../../types/Experience';
import {BadgeList} from '../BadgeList';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card">
      <h3>{experience.title}</h3>
      <h4>{experience.company}</h4>
      <p>{experience.description}</p>
      <div className="experience-footer">
        <span role="img" aria-label="calendar">📅</span> {experience.period}
      </div>
      <BadgeList items={experience.technologies} />
    </div>
  );
};

export default ExperienceCard;
