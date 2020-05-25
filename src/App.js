import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Jobs from './components/Jobs';
import About from './components/About';
import Footer from './components/footer';
import './assets/css/style.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Jobs />
      <About />
      <Footer />
    </div>
  );
}

export default App;
