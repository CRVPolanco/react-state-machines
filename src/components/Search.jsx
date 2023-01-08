import React from 'react';
import ContinueButton from './ContinueButton';
import '../styles/Search.css';

const Search = ({ state, send }) => {

  const [country, setCountry] = React.useState('');

  const countryList = state.context.countries;

  const handleAdd = e => setCountry(e.target.value);
  const event = () => send('CONTINUE', { selectedCountry: country });

  return(
    <div className="Search">
      <h2>Find your destiny</h2>
      <div className="inputContainer">
        <input list="datalist" onChange={handleAdd}/>
      </div>
      <ContinueButton title="Continue" event={event} isDisabled={!country.length}/>

      <datalist id='datalist'>
        {countryList.map(l => (
          <option value={l.name.common} key={l.population}></option>
        ))}
      </datalist>
    </div>
  )
};

export default Search;
