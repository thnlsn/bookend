import React from 'react';

const HotelView = ({ images }) => {
  return (
    <div className='gallery'>
      {images.map((hotel, index) => (
        <figure className='gallery__item'>
          <img
            src={hotel[index]}
            alt={`Hotel ${index + 1}`}
            className='gallery__item'
          />
        </figure>
      ))}
    </div>
  );
};

export default HotelView;
