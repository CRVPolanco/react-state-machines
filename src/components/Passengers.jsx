import React from 'react';
import ContinueButton from './ContinueButton';
import '../styles/Passengers.css';

const Passengers = ({ data, setData, send }) => {

  const [people, setPeople] = React.useState('');
  const ref = React.useRef(null);

  const handleClick = () => {
    setData([...data, { name: ref.current.value} ]);
  };
  const handleRemove = (text) => {
    const newCopy = [...data].filter(t => t.name !== text);
    setData([...newCopy]);
  }

  console.log(data);

  const handleEvent = () => send('DONE');

  return(
    <div className='Passengers'>
      <h2>Select your companions</h2>
      {data.map(el => (
        <p key={el.name}>{el.name}<button onClick={() => handleRemove(el.name)}>X</button></p>
      ))}
      <input type="text" ref={ref}/>
      <div className="ButtonAdd__container"> <button onClick={handleClick}>Add</button> </div>
      <ContinueButton title="Get a Ticket" event={handleEvent}/>
    </div>
  )
};

export default Passengers;
