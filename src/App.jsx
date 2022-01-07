import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/style.scss';
import { withNamespaces } from 'react-i18next';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

// eslint-disable-next-line react/prop-types
const App = ({ t }) => (
  <Router>
    <Navbar t={t} />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home t={t} />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default withNamespaces()(App);
