import React from 'react';
import './Tickets.css';

export const Tickets = ({ send, state }) => {
  const finish = () => {
    send('FINISH')
  };

  const passengers = state.context.passengers;

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Gracias por volar con Book a Fly 💚</p>
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>{state.context.selectedCountry}</div>
        <div className='Tickets-passengers'>
          {passengers.map((person, id) => <p className='text' key={`person-${id}`}>{person}</p>)}
          <span>✈</span>
        </div>
      </div>
      <button
        onClick={finish}
        className='Tickets-finalizar rounded-lg bg-indigo-700 text-white p-2'
      >
        Finalizar
      </button>
    </div>
  );
}; 