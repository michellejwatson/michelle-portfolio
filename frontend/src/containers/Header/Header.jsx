import React from 'react';
import { motion, transform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
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
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            {/**<p className="p-text">Hello, I am</p>**/}
            <h1 className="head-text">Michelle Watson</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software Engineer</p>
          <p className="p-text">Full Stack and Backend</p>
        </div>
        
        <div className="tag-cmp app__flex">
          <p className="p-text">University of Victoria - Bachelor of Engineering</p>
          <p className="p-text">Software Engineering with Minor in Mechanical Systems</p>
          <p className="p-text">September 2018 - December 2023</p>
        </div>
      </div>
    </motion.div>

    <div className="app__header-img">
      {/*<img src={images.profile} alt="profile_bg" />*/}
    </div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[<FontAwesomeIcon icon={faReact} />, <FontAwesomeIcon icon={faDocker} />, <FontAwesomeIcon icon={faAws} />].map((CircleComponent, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          {CircleComponent}
        </div>
      ))}
    </motion.div>
  </div>
  )
}

export default AppWrap(Header, 'home');