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
        <div className='switch-input'>
          <input
            type='radio'
            id='detour'
            className='switch-input__radio'
            name='switch-toggle'
          />
          <label
            htmlFor='detour'
            className='switch-input__button switch-input__button--left u-unselectable'
          >
            Detour
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default FlightView;
