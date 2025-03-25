import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((proj) => (
        <ProjectCard key={proj.name} project={proj} />
      ))}
    </div>
  </section>
);

export default Projects;