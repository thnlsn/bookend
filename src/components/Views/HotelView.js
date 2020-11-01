import React, { Fragment } from 'react';

// SVG SPRITES
import sprite from '../../images/sprite.svg';

const HotelView = ({
  images,
  stars,
  rating,
  votes,
  hotelName,
  hotelLocation,
  benefits,
}) => {
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
      {/* IMAGE GALLERY */}
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

      {/* OVERVIEW HEADER */}
      <div className='overview'>
        <h1 className='overview__heading'>{hotelName}</h1>

        <div className='overview__stars'>{generateStars()}</div>

        <div className='overview__location'>
          <svg className='overview__icon-location'>
            <use href={`${sprite}#icon-location-pin`}></use>
          </svg>
          <button className='btn-inline'>{hotelLocation}</button>
        </div>

        <div className='overview__rating'>
          <div className='overview__rating-average'>{rating}</div>
          <div className='overview__rating-count'>{votes} votes</div>
        </div>
      </div>

      {/* DETAILS MAIN SECTION */}
      <div className='detail'>
        {/* This blocks styles will be determined in the layout sass file because it is more concerned with layout */}
        <div className='description'>
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            hic consectetur corrupti, accusantium cumque, ut quos illo debitis
            quasi laborum enim facilis optio.
          </p>
          <p className='paragraph'>
            Nemo aliquam ipsum facilis sunt veritatis architecto voluptatibus
            autem excepturi. Doloribus dolores ex dolorum ad earum minima
            tenetur expedita non fuga illum!
          </p>
          <ul className='list'>
            {benefits.map((benefit) => (
              <li className='list-item'>{benefit}</li>
            ))}
          </ul>
          <div className='recommend'>
            <p className='recommend__count'></p>
          </div>
        </div>

        <div className='user-reviews'>User reviews</div>
      </div>
    </Fragment>
  );
};

export default HotelView;
