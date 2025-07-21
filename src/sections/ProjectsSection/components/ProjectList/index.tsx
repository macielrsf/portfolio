import React from 'react';
import ProjectCard from '../ProjectCard';
import { useProjects } from '../../../../data/projects';

import './styles.css';

const ProjectList: React.FC = () => {
  const projects = useProjects();
  
  return (
    <section className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
