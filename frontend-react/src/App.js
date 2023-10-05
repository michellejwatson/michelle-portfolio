import React from 'react'

import { Contact, Header, Projects, WorkExperience } from './containers';
import { NavBar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
        <NavBar />
        <Header />
        <Projects />
        <WorkExperience />
        <Contact />
    </div>
  )
}

export default App;