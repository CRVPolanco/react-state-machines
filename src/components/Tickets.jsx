import React from 'react';
import ContinueButton from './ContinueButton';
import '../styles/Tickets.css';

const Tickets = ({ state, send }) => {

  const sendTo = () => send('FINISH')

  const { passengers, selectedCountry } = state.context;

  return (
    <>
    <h2>Thanks for fly with us ✈️</h2>
    <p>Here is your ticket!</p>
    <section className='Tickets'>

      <div className="Tickets__show-country">
        <p>{selectedCountry}</p>
      </div>
      <div className="Tickets__show-passenger">
        {passengers.map(p => (
          <p key={p.name}>{p.name}</p>
          ))}
      </div>
    </section>
    <ContinueButton title="Finalize" event={sendTo}/>
    </>
  )
};

export default Tickets;
