import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { urlFor, client } from '../../client';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query)
      .then((data) => setProjects(data))
  }, [])
  

  return (
    
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.projectLink && (
              <p>
                Project Link: <a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.projectLink}</a>
              </p>
            )}
            {project.codeLink && (
              <p>
                Code Link: <a href={project.codeLink} target="_blank" rel="noopener noreferrer">{project.codeLink}</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects