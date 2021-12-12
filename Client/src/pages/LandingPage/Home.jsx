import React from 'react';
import About from './components/About';
import CTA from './components/CTA.jsx';
import Features from './components/Features';
import Hero from './components/Hero';
import Team from './components/Team';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Features />
      <Team />
      <CTA />
    </React.Fragment>
  );
};

export default Home;
