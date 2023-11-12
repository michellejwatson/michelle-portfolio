import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from 'react-icons/fa';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="/frontend-react/src/components/MichelleWatsonResume.pdf"
      download="MichelleWatsonResume.pdf"
      title="MichelleWatsonResume.pdf"
    >
      <FontAwesomeIcon icon={faDownload} />
    </a>
    <a href="https://github.com/michellejwatson" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="mailto:michellejwatson1@gmail.com">
      <FaEnvelope />
    </a>
    <a href="https://www.linkedin.com/in/michelle-watson-8b1483205" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
);

export default SocialMedia;