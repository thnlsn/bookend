import React from 'react';

// SVG SPRITES
import sprite from '../images/sprite.svg';

const Header = ({ logo, name }) => {
  return (
    <header className='header'>
      <img src={logo} alt={`${name} logo`} className='logo' />

      <form action='#' className='search'>
        <input
          type='text'
          className='search__input'
          placeholder='Search hotels'
        />
        {/* Rather than icon-fonts, this project uses SVGs (Scalable Vector Graphics), as they are more trustworthy and best practice */}
        <button className='search__button'>
          <svg className='search__icon'>
            <use href={`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className='user-nav'>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use href={`${sprite}#icon-bookmark`}></use>
          </svg>
        </div>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use href={`${sprite}#icon-chat`}></use>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
