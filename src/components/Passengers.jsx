import React from 'react';
import ContinueButton from './ContinueButton';
import '../styles/Passengers.css';

const Passengers = ({ state, send }) => {

  const passengersList = state.context.passengers;

  const [person, setPerson] = React.useState('');

  const handleAdd = () => {
    send('ADD', { setPassengers: { name: person } });
    setPerson('');
  }

  const handleRemove = (text) => {
    const copyPersons = [...passengersList].filter(p => p.name !== text);
    send('REMOVE', { setPassengers: [...copyPersons] });
  }

  const handleSend = () => send('DONE');

  return(
    <div className='Passengers'>
      <h2>Select the passengers</h2>
      {passengersList.map(el => (
        <p key={el.name}>{el.name}<button onClick={() => handleRemove(el.name)}>X</button></p>
      ))}
      <input type="text" onChange={e => setPerson(e.target.value)} value={person}/>
      <div className="ButtonAdd__container"> <button onClick={handleAdd}>Add</button> </div>
      <ContinueButton title="Get a Ticket" event={handleSend} isDisabled={passengersList.length < 1} />
    </div>
  )
};

export default Passengers;
