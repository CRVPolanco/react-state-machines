import React from 'react';
import '../styles/ContinueButton.css';

const ContinueButton = ({ title, event, isDisabled }) => {
  return(
    <div className='ContinueButton__container'>
      <button className="Standar__Continue" disabled={isDisabled} onClick={event}>{title}</button>
    </div>
  );
};

export default ContinueButton;
