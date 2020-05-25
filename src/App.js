import React, { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Jobs from './components/Jobs';
import About from './components/About';
import Footer from './components/footer';
import Signup from './components/signup';
import Backdrop from './components/backdrop';
import './assets/css/style.css';

function App() {
  const [signupForm, setSignupForm] = useState(false);

  const showSignupForm = () => {
    setSignupForm(true);
  };

  const closeSignupForm = (e) => {
    if (e.target.id === "backdrop"
      || e.target.id === "signup-close") {
      setSignupForm(false);
    }
  };

  return (
    <div className="app">
      {signupForm ?
        <Backdrop
          closeSignupForm={closeSignupForm}>
          <Signup
            closeSignupForm={closeSignupForm} />
        </Backdrop>
        : null}
      <Header />
      <Hero
        showSignupForm={showSignupForm} />
      <Jobs />
      <About />
      <Footer />
    </div>
  );
}

export default App;
