import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from 'react-icons/fa';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FontAwesomeIcon icon={faDownload} />
    </div>
    <div>
      <FontAwesomeIcon icon={faGithub} />
    </div>
    <div>
      <FaEnvelope />
    </div>
    <div>
      <FontAwesomeIcon icon={faLinkedin} />
    </div>
  </div>
);

export default SocialMedia;