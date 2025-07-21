import React from 'react';

import {Project} from '../../../../types/Project';
import BadgeList from '../../../../components/BadgeList';
import { useLanguage } from '../../../../contexts/LanguageContext';

import './styles.css';

interface ProjectCardProps {
  project: Project;
}

const customStyles = {
  badgeListStyle: {
    fontSize: 12
  },
  badgeTechListStyle: {
    fontSize: 10
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-row">
          <img className="project-img" src={project.img} alt="Hubsoft App Logo" />
          <div className="project-center">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
          <BadgeList items={project.buttons} badgeNameStyle={customStyles.badgeListStyle} />
        </div>
        <h4 className="project-technologies">{t('technologies')}</h4>
        <div className="project-badges">
          <BadgeList items={project.technologies} badgeNameStyle={customStyles.badgeTechListStyle} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
