import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Animacion from './components/Animacion';
import Home from './components/Home';
import Educacion from './components/Educacion';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Discografia from './components/Discografia';




function App() {

  
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Animacion} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/educacion" component={Educacion} />
          <Route exact path="/sobre-mi" component={SobreMi} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/discografia" component={Discografia} />
        </Switch>
      </Router>
    </Fragment>

  )

}

export default App;
