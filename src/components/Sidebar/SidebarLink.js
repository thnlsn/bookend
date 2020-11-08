import React from 'react';
import {
  /* BrowserRouter as Router, Switch, Route, */ Link,
} from 'react-router-dom';

// SVG SPRITES
import sprite from '../../images/sprite.svg';

const SidebarLink = ({ icon, title, href, currentTab, func }) => {
  console.log(window.location.pathname.split('/')[1]);
  return (
    <li
      className={`side-nav__item ${
        window.location.pathname.split('/')[1] === href.substr(1)
          ? 'side-nav__item--active'
          : ''
      }`}
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
