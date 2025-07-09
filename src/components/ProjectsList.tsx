import { ProjectItem } from './ProjectItem'
import type { FullProject } from '../sections/ProjetcsSection'

interface ProjectsListProps {
  projects: FullProject[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="projects-list">
      {projects
        .map(project => (
          <ProjectItem
            key={project._id}
            logo={project.logo}
            title={project.title}
            image={project.mockup}
            stack={project.stack}
            repository={project.repository}
          />
        ))
        .reverse()}
    </div>
  )
}
