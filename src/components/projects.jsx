import { projectData } from './data.js';

function projectItem(project) {
  if (project.visible) {
      return (
          <div key={project.id} className="project-card">
              <a href={project.gitHubLink} target="_blank">
                  <div className="project-header">
                      <img className="project-icon" src={project.img} alt="text"/>
                      <div className="small-icons">
                          <i className="fa-brands fa-github"></i>
                      </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
              </a>
              <p dangerouslySetInnerHTML={{__html: project.description}}></p>
          </div>
  )
      ;
  } else
      return "";
}

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    projectItem(project)
                ))
                }
            </div>
        </div>
    )
}

export default Projects;