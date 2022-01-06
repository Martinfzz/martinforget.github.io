import React from 'react';
import Hero from '../../Components/Hero';
import Portfolio from '../../Components/Portfolio';
import About from '../../Components/About';
import Contact from '../../Components/Contact';

// eslint-disable-next-line react/prop-types
const Home = ({ t }) => (
  <>
    <Hero t={t} />
    <Portfolio />
    <About />
    <Contact />
  </>
);

export default Home;
