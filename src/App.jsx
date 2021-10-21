import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => (
  <Router>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
