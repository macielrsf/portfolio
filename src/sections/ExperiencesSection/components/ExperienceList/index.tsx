import React from 'react';
import ExperienceCard from '../ExperienceCard';
import { useExperiences } from '../../../../data/experiences';

import './styles.css';

const ExperienceList: React.FC = () => {
  const experiences = useExperiences();
  
  return (
    <section className="experience-list">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </section>
  );
};

export default ExperienceList;
