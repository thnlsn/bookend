import React from 'react';

const Review = ({ quote, photo, name, date, rating }) => {
  return (
    <figure className='review'>
      {/* Figures are great for text and descriptions of images, not just images */}
      <blockquote className='review__text'>
        {quote}
        <figcaption className='review__user'>
          <img src={photo} alt='User' className='review__photo' />
          <div className='review__user-box'>
            <p className='review__user-name'>{name}</p>
            <p className='review__user-date'>{date}</p>
          </div>
          <div className='review__rating'>{rating}</div>
        </figcaption>
      </blockquote>
    </figure>
  );
};

export default Review;
