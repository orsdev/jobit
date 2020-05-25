import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import './assets/css/style.css';
import Jobs from './components/Jobs';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Jobs />
    </div>
  );
}

export default App;
