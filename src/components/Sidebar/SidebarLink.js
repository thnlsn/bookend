import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// SVG SPRITES
import sprite from '../../images/sprite.svg';

const SidebarLink = ({ icon, title, href }) => {
  console.log(href);
  return (
    <li className='side-nav__item side-nav__item--active'>
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
