import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/style.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
