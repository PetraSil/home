import React from 'react'
import DefaultContainer from '../containers/DefaultContainer';
import Intro from '../components/intro/Intro';
import FluffText from '../components/fluff/FluffText';
import './pages.css';

const Home = () =>
  <DefaultContainer 
  content={
    <>
      <Intro />
      <FluffText text={"Home"}/>
    </>
  }
  />
;

export default Home;
