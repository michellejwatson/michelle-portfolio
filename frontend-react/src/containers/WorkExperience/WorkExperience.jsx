import React, { useState, useEffect } from 'react';
import './WorkExperience.scss';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';

function convertToSortableDate(dateString) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [month, year] = dateString.split(' ');

  const monthIndex = months.indexOf(month);
  const sortableDate = new Date(year, monthIndex);

  return sortableDate;
}

const LongTextToJotNotes = ({ text }) => {
  // Split the text into sentences
  const sentences = text.split('. ');

  return (
    <ul>
      {sentences.map((sentence, index) => (
        <li key={index}>{sentence}</li>
      ))}
    </ul>
  );
};

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    client.fetch(query)
      .then((data) => {
        // Convert and sort work experiences by start date
        const sortedWorkExperiences = data.sort((a, b) => {
          const startDateA = convertToSortableDate(a.startDate);
          const startDateB = convertToSortableDate(b.startDate);
          return startDateB - startDateA; // Sort in descending order
        });

        setWorkExperiences(sortedWorkExperiences);
      })
  }, [])

  const [expandedWorkExperienceId, setExpandedWorkExperienceId] = useState(null);

  const toggleWorkExperienceExpansion = (workExperienceId) => {
    if (expandedWorkExperienceId === workExperienceId) {
      setExpandedWorkExperienceId(null);
    } else {
      setExpandedWorkExperienceId(workExperienceId);
    }
  };

  return (
    <div className='app__works'>
      <h1 className='head-text'>Work Experience</h1>
      <div className='app__works-grid'>
        {workExperiences.map((work) => (
          <div
            className={`app__work ${expandedWorkExperienceId === work._id ? 'expanded' : ''}`}
            key={work._id}
            onClick={() => toggleWorkExperienceExpansion(work._id)}
          >
            <div className='app__work-header'>
              <h2>{work.jobtitle}</h2>
              <p>{work.startDate} - {work.endDate}</p>
            </div>
            {work.jobtitle2 && work.startDate2 && 
              <div className='app__work-header'>
                <h2>{work.jobtitle2}</h2>
                <p>{work.startDate2} - {work.endDate2}</p>
              </div>
            }
            <p>{work.company}</p>
            <div className='app__work-skills'>
              {work.skills && work.skills.map((skill) => (
                <div className='app__work-skill'>
                  <div className='app__flex'>
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                  </div>
                  <p className={`app__work-skill-text ${expandedWorkExperienceId === work._id ? 'expanded' : ''}`}>
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
            <div className='app__work-description'>
              <LongTextToJotNotes text={work.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(WorkExperience, 'work experience');