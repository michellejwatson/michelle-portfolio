import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faAws, faSquareJs, faLinux, faJava } from '@fortawesome/free-brands-svg-icons';
import { images } from '../../constants';
import './Header.scss';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp">
              <h1 className="head-text">Michelle Watson</h1>
          </div>

          <div className="tag-cmp">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">Full Stack and Backend Development</p>
          </div>

          <div className="tag-cmp">
            <p className="p-text">University of Victoria - Bachelor of Engineering</p>
            <p className="p-text">Software Engineering, Mechanical Systems Minor</p>
            <p className="p-text">September 2018 - December 2023</p>
            <p className="p-text">4.0 Graduating GPA</p>
          </div>
        </div>
      </motion.div>

      <div className="app__header-img">
      </div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[<FontAwesomeIcon icon={faSquareJs} />, <FontAwesomeIcon icon={faLinux} />, <FontAwesomeIcon icon={faJava} />].map((CircleComponent, index) => (
          <div className={`circle-cmp app__flex ${index === 1 ? 'more-left' : ''}`} key={`circle-${index}`}>
            {CircleComponent}
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[<FontAwesomeIcon icon={faDocker} />, <FontAwesomeIcon icon={faReact} />, <FontAwesomeIcon icon={faAws} />].map((CircleComponent, index) => (
          <div className={`circle-cmp app__flex ${index === 1 ? 'more-right' : ''}`} key={`circle-${index}`}>
            {CircleComponent}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');