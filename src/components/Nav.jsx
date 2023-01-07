import React from 'react';
import '../styles/Nav.css';

const Nav = ({ state, send }) => {

  const handleSend = () => send('CANCEL')

  return(
    <nav className='Nav'>
      <h1>Book a fly</h1>
      {(!state.matches('initial') && (!state.matches('tickets'))) && <button onClick={handleSend}>Cancel</button>}
    </nav>
  )
};

export default Nav;
