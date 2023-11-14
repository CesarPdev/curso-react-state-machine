import React from 'react';
import './Nav.css';

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    send('CANCEL')
  }

  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Book a fly ✈</h1>
      {!state.matches('initial') &&
        <button onClick={goToWelcome} className='Nav-cancel button-secondary bg-white rounded-lg p-2'>Cancelar</button>
      }
    </nav>
  );
}; 