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
            id='round-trip'
            className='switch-input__radio'
            name='switch-toggle'
          />
          <label
            htmlFor='round-trip'
            className='switch-input__button switch-input__button--left u-unselectable'
          >
            Round trip
          </label>

          <input
            type='radio'
            id='one-way'
            className='switch-input__radio'
            name='switch-toggle'
          />
          <label
            htmlFor='one-way'
            className='switch-input__button switch-input__button--left u-unselectable'
          >
            One way
          </label>
        </div>
      </div>

      <div className='flight-form'>
        <input
          type='text'
          className='flight-form__date'
          placeholder='Departure'
        />
        <input type='text' className='flight-form__date' placeholder='Return' />
        <input type='select' className='flight-form__date' />
      </div>
    </Fragment>
  );
};

export default FlightView;
