import React from 'react';
import './Nav.css';

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    send('CANCEL')
  }

  return (
    <nav className='Nav'>
      {state.matches('initial') &&
        <h1 className='Nav-logo'>Book a Fly ✈</h1>
      }
      {state.matches('search') &&
        <h1 className='Nav-logo'>Book a Fly ✈✈</h1>
      }
      {state.matches('passengers') &&
        <h1 className='Nav-logo'>Book a Fly ✈✈✈</h1>
      }
      {state.matches('tickets') &&
        <h1 className='Nav-logo'>Book a Fly ✈✈✈✈</h1>
      }
      {!state.matches('initial') && !state.matches('tickets') &&
        <button
          onClick={goToWelcome}
          className='Nav-cancel button-secondary bg-white rounded-lg p-2'
        >
          Cancelar
        </button>
      }
    </nav>
  );
}; 