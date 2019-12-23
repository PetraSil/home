import React, {  useEffect, useContext, createContext, useState, useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import { BrowserRouter as Router, withRouter, Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import AbsoluteWrapper from './containers/AbsoluteWrapper';
import MobileMenu from './components/mobileMenu/MobileMenu';
import FluffText from './components/fluff/FluffText';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const { location } = useContext(__RouterContext);
  const pageTransitions = useTransition(location, location => location.pathname, {
    config: { duration: 800 },
    from: { opacity: 0 },
    enter: { opacity: 1},
    leave: { opacity: 0 }
  });

  return (
      <>
        <Navbar open={mobileOpen} setMobile={setMobileOpen}/>
        <MobileMenu open={mobileOpen} setMobile={setMobileOpen}/>
        <FluffText text={ location.pathname.slice(1) == '' ? 'HOME' : location.pathname.slice(1) } />
        {pageTransitions.map(({item, props, key}) => (
          <AbsoluteWrapper content={
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route path="/" exact component={Home} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </animated.div>
          } />
        ))}
      </>
  );
}

export default withRouter(App);