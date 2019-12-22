import React from 'react'
import DefaultContainer from '../containers/DefaultContainer';
import FluffText from '../components/fluff/FluffText';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import './pages.css';

const Work = () => {
  const location = useLocation();
  
  return (
    <DefaultContainer 
    content={
      <>
        <h3>Work stuff</h3>
        <FluffText text={location.pathname.slice(1)} />
      </>
    }
    />
  )
};

export default Work;
