import React from 'react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../../../data/projects';

import './styles.css';

const ProjectList: React.FC = () => {
  return (
    <section className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
