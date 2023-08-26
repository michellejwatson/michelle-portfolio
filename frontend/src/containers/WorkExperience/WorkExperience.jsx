import React, { useState, useEffect } from 'react';
import './WorkExperience.scss';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    client.fetch(query)
      .then((data) => setWorkExperiences(data))
  }, [])

  return (
    <div>
      <h1 className='head-text'>Work Experience</h1>
      <div>
        {workExperiences.map((work) => (
          <div key={work._id}>
            <h2>{work.jobtitle}</h2>
            {work.jobtitle2 && <h2>{work.jobtitle2}</h2>}
            <p>{work.company}</p>
            <p>{work.startDate}</p>
            <p>{work.endDate}</p>
            {work.startDate2 && <p>{work.startDate2}</p>}
            {work.endDate2 && <p>{work.endDate2}</p>}
            <p>{work.description}</p>
            {work.skills && work.skills.map((skill) => (
              <div>
                <p>{skill.name}</p>
                <p>{skill.bgColor}</p>
                <p>{skill.icon}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(WorkExperience, 'work experience');