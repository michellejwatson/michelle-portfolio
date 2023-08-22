import React from 'react'
import { motion, transform } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

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
    <div className='app__header app__flex'>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='app_header-info'>
        <div className='app__header-badge'>
          <div className='app__flex badge-cmp'>
            <div style={{ margin: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Michelle</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>New Grad Web Developer</p>
            <p className='p-text'>Backend</p>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className='app_header-img'>
        <img src={images.profile} alt="profile_bg"></img>
        <motion.img 
          whileInView={{ scale: [0, 1] }} 
          transition={{ duration: 1, ease: 'easeInOut' }} 
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div 
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-$(index)`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header