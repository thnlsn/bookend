import React, { Fragment } from 'react';

// SVG SPRITES
import sprite from '../../images/sprite.svg';

const HotelView = ({ images, stars }) => {
  const generateStars = () => {
    let rating = [];
    for (let i = 0; i < 5; i++) {
      if (stars > i) {
        rating.push(
          <svg className='side-nav__icon--primary' key={i}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        );
      } else {
        rating.push(
          <svg className='side-nav__icon' key={i}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        );
      }
    }
    return rating;
  };

  return (
    <Fragment>
      <div className='gallery'>
        {images.map((hotel, index) => (
          <figure className='gallery__item' key={index}>
            <img
              src={hotel}
              alt={`Hotel ${index + 1}`}
              className='gallery__photo'
            />
          </figure>
        ))}
      </div>

      <div className='overview'>
        <h1 className='overview__heading'>Hotel Las Palmas</h1>
        <div className='overview__stars'>{generateStars()}</div>
      </div>
    </Fragment>
  );
};

export default HotelView;
