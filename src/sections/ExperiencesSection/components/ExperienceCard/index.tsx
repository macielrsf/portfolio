import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import {Experience} from '../../../../types/Experience';
import BadgeList from '@components/BadgeList';
import useLanguage from '@hooks/useLanguage';

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
  const { t } = useLanguage();

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

        <h4 className="experience-technologies">{t('technologies')}</h4>
        <div className="experience-badges">
          <BadgeList items={experience.technologies} badgeNameStyle={customStyles.badgeListStyle} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
