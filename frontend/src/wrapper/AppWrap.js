import React from 'react';
import { NavigationTracker, SocialMedia } from '../components'

// HOC = Higher Order Component
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={'app__container ${classNames}'}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
            <Component />
        </div>
        <NavigationTracker active={idName} />
    </div>
  )
}

export default AppWrap;