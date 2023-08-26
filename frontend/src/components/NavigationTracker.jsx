import React from 'react';

const NavigationTracker = ({ active }) => (
  <div className="app__navigation">
    {['home', 'projects', 'work experience', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-track"
        style={active === item ? { backgroundColor: '#47294c' } : {}}
      />
    ))}
  </div>
);

export default NavigationTracker;