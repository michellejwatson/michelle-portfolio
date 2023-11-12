import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query)
      .then((data) => setProjects(data))
  }, []);

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleProjectExpansion = (projectId) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  return (
    <div className='app__projects'>
      <h1 className='head-text'>Projects</h1>
      <div>
        <div className='app__projects-grid'>
          {projects.map((project, index) => (
            <motion.div
              whileInView={{ x: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.25 }}
              className={`app__project ${expandedProjectId === project._id ? 'expanded' : ''}`}
              key={project._id}
              onClick={() => toggleProjectExpansion(project._id)}
            >
              <h2>{project.title}</h2>
              <div class='app__flex extended-image-container'>
                <img src={urlFor(project.imgUrl)} alt="" class="extended-image" />
              </div>
              {expandedProjectId === project._id && (
                <div className='project-description'>
                  <p>{project.description}</p>
                  <div className='project-links'>
                    {project.projectLink && (
                      <button>
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                          View Project Page
                        </a>
                      </button>
                    )}
                    {project.codeLink && (
                      <button>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          View Code on GitHub
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Projects, 'projects');