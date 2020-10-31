import React, { Fragment } from 'react';

const HotelView = ({ images }) => {
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
    </Fragment>
  );
};

export default HotelView;
