import React from 'react';

// SVG SPRITES
import sprite from '../../images/sprite.svg';

const SidebarLink = ({ icon, title }) => {
  return (
    <li className='side-nav__item'>
      <a href='#' className='side-nav__link'>
        <svg className='side-nav__icon'>
          <use xlinkHref={`${sprite}${icon}`}></use>
        </svg>
        <span>{title}</span>
      </a>
    </li>
  );
};

export default SidebarLink;
