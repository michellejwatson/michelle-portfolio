import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationTracker = () => {
  const [active, setActive] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'projects', 'work experience', 'contact'];

      // Determine the active section based on scroll position
      let activeSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition + 100) {
          activeSection = section;
        }
      }

      setActive(activeSection);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update URL when active section changes
    if (location.hash !== `#${active}`) {
      window.history.replaceState(null, null, `#${active}`);
    }
  }, [active, location]);

  return (
    <div className="app__navigation">
      {['home', 'projects', 'work experience', 'contact'].map((item) => (
        <a
          href={`#${item}`}
          key={item}
          className="app__navigation-track"
          style={active === item ? { backgroundColor: '#47294c' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationTracker;