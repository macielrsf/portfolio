import React from 'react';
import ProjectCard from '../ProjectCard';
import { useLocalizedProjects } from '@utils/getLocalizedData';

import './styles.css';

const ProjectList: React.FC = () => {
  const projects = useLocalizedProjects();
  
  return (
    <section className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
