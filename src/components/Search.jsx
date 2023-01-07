import React from 'react';
import ContinueButton from './ContinueButton';
import { contryList } from '../utils/countryList';
import '../styles/Search.css';

const Search = ({ send, data, setData }) => {

  const event = () => send('CONTINUE');

  return(
    <div className="Search">
      <h2>Find your destiny</h2>
      <div className="inputContainer">
        <input list="datalist" onChange={(e) => setData(e.target.value)}/>
      </div>
      <ContinueButton title="Continue" event={event} isDisabled={!data.length}/>

      <datalist id='datalist'>
        {contryList.map(l => (
          <option value={l} key={l}></option>
        ))}
      </datalist>
    </div>
  )
};

export default Search;
