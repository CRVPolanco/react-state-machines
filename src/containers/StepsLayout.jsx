import React from 'react';
import Welcome from '../components/Welcome';
import Search from '../components/Search';
import Passengers from '../components/Passengers';
import Tickets from '../components/Tickets';
import '../styles/StepsLayout.css';

const StepsLayout = ({ state, send }) => {

  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [passengerList, setPassengerList] = React.useState([]);

  const reset = () => {
    setSelectedCountry('');
    setPassengerList([]);
  }

  const stepsContinueMachine = () => {
    if (state.matches('initial')) return <Welcome send={send} reset={reset}/>;
    if (state.matches('search')) return <Search send={send} data={selectedCountry} setData={setSelectedCountry} />;
    if (state.matches('passengers')) return <Passengers send={send} data={passengerList} setData={setPassengerList} />
    if (state.matches('tickets')) return <Tickets country={selectedCountry}  passengers={passengerList} send={send}/>
    return null;
  }

  return(
    <div className='StepsLayout'>
      {stepsContinueMachine()}
    </div>
  )
};

export default StepsLayout;
