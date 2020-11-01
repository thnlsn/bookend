import React, { Fragment } from 'react';

// SVG SPRITES
import sprite from '../../images/sprite.svg';

const HotelView = ({ images, stars, rating, votes }) => {
  const generateStars = () => {
    let rating = [];
    for (let i = 0; i < 5; i++) {
      if (stars > i) {
        rating.push(
          <svg className='overview__icon-star' key={i}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        );
      } else {
        rating.push(
          <svg className='overview__icon-star--grey' key={i}>
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

        <div className='overview__location'>
          <svg className='overview__icon-location'>
            <use href={`${sprite}#icon-location-pin`}></use>
          </svg>
          <button className='btn-inline'>Albufeira, Portugal</button>
        </div>

        <div className='overview__rating'>
          <div className='overview__rating-average'>{rating}</div>
          <div className='overview__rating-count'>{votes} votes</div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelView;
