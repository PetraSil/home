import React, { useContext, createContext, useState } from 'react';
import './fluff.css';

const FluffText = ({ text }) => {

  return (
    <div className="fluff-text">    
      <span>{text}</span>
    </div>
  )
};

export default FluffText;