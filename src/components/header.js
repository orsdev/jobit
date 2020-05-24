import React from 'react';

const header = () => (
  <header className="header">
    <nav className="header__nav">
      <h1 className="header__nav-logo">
        JOB
        <span className="green">I</span>
        T
      </h1>
      <ul className="header__nav-nav">
        <li className="header__nav-nav-link">About</li>
        <li className="header__nav-nav-link">Login</li>
        <li className="header__nav-nav-link header__nav-nav-btn">POST A JOB</li>
      </ul>
    </nav>
  </header>
);

export default header;
