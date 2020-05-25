import React from 'react';

const footer = () => (
  <footer>
    <div className="footer">
      <div className="footer__logo">
        <h1 className="heading-one">JOBIT</h1>
      </div>
      <div className="footer__links">
        <ul>
          <li className="link-title">Quick Links</li>
          <li>Home</li>
          <li>About</li>
          <li>Jobs</li>
        </ul>
        <ul>
          <li className="link-title">Find Us</li>
          <li>28/A Street, Usa</li>
          <li> +88 0023 186 891</li>
          <li>jobit@careers.com</li>
        </ul>
      </div>
    </div>
    <div className="footer__copyright">
      <small>&copy; 2020 JOBIT</small>
    </div>
  </footer>
);

export default footer;
