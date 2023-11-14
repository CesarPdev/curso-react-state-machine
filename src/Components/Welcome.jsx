import React from 'react';
import './Welcome.css';

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START');
  };

  return (
    <div className='Welcome flex flex-col justify-center items-center'>
      <p className='Welcome-title title text-xl'>¡Hoy es el día!</p>
      <p className='Welcome-description description'>Compra tu vuelo y conoce un nuevo rincón del mundo, te van a sorprender las maravillas que hay para explorar</p>
      <button onClick={startBooking} className='Welcome-cancel rounded-lg bg-indigo-700 text-white p-2'>Comenzar</button>
    </div>
  );
}; 