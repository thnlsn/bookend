import React from 'react';

const Header = ({ logo }) => {
  return (
    <header className='header'>
      <img src={logo} alt='bookend logo' className='logo' />
    </header>
  );
};

export default Header;
