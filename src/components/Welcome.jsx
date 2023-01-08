import React from 'react';
import ContinueButton from './ContinueButton';

const Welcome = ({ send }) => {

  const event = () => {
    send('START')
  };

  return(
    <section className='Welcome'>
      <h2>Today is the day</h2>
      <p>Buy your ticket and learn a new corner of the world, you will be amazed for the wonders there is to explore.</p>
      <ContinueButton title="Start" event={event}/>
    </section>
  )
};

export default Welcome;
