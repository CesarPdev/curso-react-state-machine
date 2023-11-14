import React, { useState } from 'react';
import './Search.css';

export const Search = ({ send }) => {
  const [flight, setFlight] = useState('');

  const goToPassengers = () => {
    send('NEXT', {selectedCountry: flight})
  }

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const options = ['Argentina','Colombia','Mexico','Venezuela'];

  return (
    <div className='Search'>
      <p className='Search-title title'>Busca tu destino</p>
      <select
        id="country"
        className='Search-select'
        value={flight}
        onChange={handleSelectChange}
      >
        <option
          value=""
          disabled
          defaultValue
        >
            Escoge un país
        </option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button
        onClick={goToPassengers}
        disabled={flight === ''}
        className='Search-continue rounded-lg bg-indigo-700 text-white p-2'
      >
        Continuar
      </button>
    </div>
  );
};