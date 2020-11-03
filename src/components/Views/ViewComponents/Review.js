import React from 'react';

const Review = ({ quote, photo, name, date, rating }) => {
  return (
    <div className='review'>
      {/* Figures are great for text and descriptions of images, not just images */}
      <figure className='review'>
        <blockquote className='review__text'>
          {quote}
          <figcaption className='review__user'>
            <img src={photo} alt='User photo' className='review__photo' />
            <div className='review__user-box'>
              <p className='user__name'>{name}</p>
              <p className='review__user-date'>{date}</p>
            </div>
            <div className='review__rating'>{rating}</div>
          </figcaption>
        </blockquote>
      </figure>
    </div>
  );
};

export default Review;
