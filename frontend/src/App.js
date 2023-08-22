import React from 'react'

import { About, Footer, Header, Projects, WorkExperience } from './containers';
import { NavBar } from './components';

const App = () => {
  return (
    <div className="app">
        <NavBar />
        <Header />
        <About />
        <Projects />
        <WorkExperience />
        <Footer />
    </div>
  )
}

export default App;