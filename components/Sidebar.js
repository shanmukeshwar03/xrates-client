import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const state = useSelector((state) => state);

  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        <h1>Exhange Rates</h1>
        <h3>(Base : {state.base})</h3>
      </div>

      <div>
        {state.options.map((option, key) => (
          <div className="sidebar__list" key={key}>
            <span>{option}</span>
            <span>{state.rates[option]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
