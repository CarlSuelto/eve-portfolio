import { useProjects } from "../hooks/useProjects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const { projects } = useProjects()

  return (
    <section className="section alt" id="projects">

      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>

    </section>
  )
}

export default Projects