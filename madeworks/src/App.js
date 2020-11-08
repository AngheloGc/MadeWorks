import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './views/homepage/homepage';
import Anuncios from './views/anuncios/anuncios';
import Empleos from './views/empleos/empleos';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/empleos">
          <Empleos />
        </Route>
        <Route path="/anuncios">
          <Anuncios />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
