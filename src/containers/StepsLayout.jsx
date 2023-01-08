import React from 'react';
import Welcome from '../components/Welcome';
import Search from '../components/Search';
import Passengers from '../components/Passengers';
import Tickets from '../components/Tickets';
import '../styles/StepsLayout.css';

const StepsLayout = ({ state, send }) => {

  const stepsContinueMachine = () => {
    if (state.matches('initial')) return <Welcome send={send} />;
    if (state.matches('search')) return <Search state={state} send={send} />;
    if (state.matches('passengers')) return <Passengers state={state} send={send} />
    if (state.matches('tickets')) return <Tickets state={state} send={send}/>
    return null;
  }

  return(
    <div className='StepsLayout'>
      {stepsContinueMachine()}
    </div>
  )
};

export default StepsLayout;
