import React from 'react';

// COMPONENTS
import Item from './Sidebar/SidebarLink';

const Sidebar = ({ icons, titles }) => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        {titles.map((title, index) => (
          <Item title={title} icon={icons[index]} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
