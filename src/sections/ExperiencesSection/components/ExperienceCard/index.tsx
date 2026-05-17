import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import {Experience} from '../../../../types/Experience';
import BadgeList from '@components/BadgeList';
import useLanguage from '@hooks/useLanguage';
import { formatExperienceDuration } from '@utils/formatExperienceDuration';

import './styles.css';

interface ExperienceCardProps {
  experience: Experience;
}

const customStyles = {
  badgeListStyle: {
    fontSize: 12
  }
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { t, language } = useLanguage();
  const duration = formatExperienceDuration(experience.startDate, experience.endDate, language);

  return (
    <div className="experience-card">
      <div className="experience-content">
        <h3 className="experience-title">{experience.title}</h3>
        <h4 className="experience-company">{experience.company}</h4>
        <p className="experience-location">{experience.location}</p>
        <p className="experience-description">{experience.description}</p>

        <div className="experience-period">
          <FiCalendar className="experience-icon" />
          <span>{experience.period} ({duration})</span>
        </div>

        <h4 className="experience-technologies">{t('technologies')}</h4>
        <div className="experience-badges">
          <BadgeList items={experience.technologies} badgeNameStyle={customStyles.badgeListStyle} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
