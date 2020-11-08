import React from 'react';

// COMPONENTS
import Item from './Sidebar/SidebarLink';

const Sidebar = ({ icons, titles, hrefs, func }) => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        {titles.map((title, index) => (
          <Item
            title={title}
            icon={icons[index]}
            href={hrefs[index]}
            key={index}
            func={func}
          />
        ))}
      </ul>
      <div className='legal-text'>
        &copy; 2020 by Bookend. All rights reserved.
      </div>
    </nav>
  );
};

export default Sidebar;
