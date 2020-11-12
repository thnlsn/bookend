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
        <input
          type='radio'
          id='switch-toggle'
          className='switch-button__radio'
          name='switch-toggle'
        />
        <label
          htmlFor='switch-toggle'
          className='switch-button switch-button--left'
        >
          Round Trip
        </label>

        <input
          type='radio'
          id='switch-toggle'
          className='switch-button__radio'
          name='switch-toggle'
          defaultChecked
        />
        <label
          htmlFor='switch-toggle'
          className='switch-button switch-button--right'
        >
          One Way
        </label>
      </div>
    </Fragment>
  );
};

export default FlightView;
