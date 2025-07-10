import React from 'react';
import ExperienceCard from '../ExperienceCard';
import { experiences } from '../../data/experiences';

const ExperienceList: React.FC = () => {
  return (
    <section className="experience-list">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </section>
  );
};

export default ExperienceList;
