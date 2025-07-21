import React from 'react';
import ExperienceCard from '../ExperienceCard';
import { useLocalizedExperiences } from '../../../../utils/getLocalizedData';

import './styles.css';

const ExperienceList: React.FC = () => {
  const experiences = useLocalizedExperiences();
  
  return (
    <section className="experience-list">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </section>
  );
};

export default ExperienceList;
