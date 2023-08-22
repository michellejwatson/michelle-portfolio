import React from 'react'

import { About, Contact, Footer, Header, Projects, WorkExperience } from './containers';
import { NavBar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
        <NavBar />
        <Header />
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;