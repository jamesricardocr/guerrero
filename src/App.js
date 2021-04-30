import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Educacion from './components/Educacion';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Discografia from './components/Discografia';

function App() {
  // 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/educacion" component={Educacion}/>
        <Route exact path="/sobre-mi" component={SobreMi}/>
        <Route exact path="/servicios" component={Servicios}/>
        <Route exact path="/discografia" component={Discografia}/>
      </Switch>
    </Router>

  )
    
}

export default App;
