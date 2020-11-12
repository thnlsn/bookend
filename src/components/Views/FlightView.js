import React, { Fragment } from 'react';

const FlightView = ({ origin, destination, roundTrip }) => {
  return (
    <Fragment>
      <div className='flight'>
        <div className='flight__airport'>
          <p className='flight__iata'>{origin[0]}</p>
          <p className='flight__location'>{origin[1]}</p>
        </div>
        <span>&harr;</span>
        <div className='flight__airport'>
          <p className='flight__iata'>{destination[0]}</p>
          <p className='flight__location'>{destination[1]}</p>
        </div>
      </div>

      <div className='trip'>
        <button className='switch-button switch-button--left'>
          <span>Round Trip</span>
        </button>
        <button className='switch-button switch-button--right'>
          <span>One Way</span>
        </button>
      </div>
    </Fragment>
  );
};

export default FlightView;
