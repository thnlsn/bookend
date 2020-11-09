import React from 'react';
import { Link } from 'react-router-dom';

// SVG SPRITES
import sprite from '../../images/sprite.svg';

const SidebarLink = ({ icon, title, href, func }) => {
  return (
    <li
      // If the url path after the / and before the second / is the same as the href value that this button would take you to, then apply the active styles to it, otherwise don't
      className={`side-nav__item ${
        window.location.pathname.split('/')[1] === href.substr(1)
          ? 'side-nav__item--active'
          : ''
      }`}
      // Simple function to set the current search placeholder value to whatever the url path says
      onClick={func}
    >
      <Link to={`${href}`} className='side-nav__link'>
        <svg className='side-nav__icon'>
          <use xlinkHref={`${sprite}${icon}`}></use>
        </svg>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarLink;
