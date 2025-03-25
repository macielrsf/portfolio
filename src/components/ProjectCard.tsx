import { Project } from "../data/projects";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => (
  <div className="project-card">
    <img src={project.image} alt={project.name} />
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p><strong>Techs:</strong> {project.technologies.join(", ")}</p>
    <p><strong>Status:</strong> {project.status}</p>
    <div className="links">
      {project.android && <a href={project.android}>Android</a>}
      {project.ios && <a href={project.ios}>iOS</a>}
    </div>
  </div>
);

export default ProjectCard;