const ProjectCard = ({ project }: any) => {
  return (
    <div className="project-card">

      <img src={project.image} />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

    </div>
  )
}

export default ProjectCard