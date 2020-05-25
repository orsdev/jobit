import React from 'react';
import HEROBG from '../assets/img/hero-bg1.png';

const hero = () => (
  <div className="hero">
    <div className="hero__body">
      <h1 className="heading-one">FIND YOUR DREAM JOB</h1>
      <p>
        Aliquam vestibulum cursus felis.
        In iaculis iaculis sapien ac condimentum.
        Vestibulum congue posuere lacus,
        id tincidunt nisi porta sit amet.
      </p>
      <form
        action=""
        id="search"
        onSubmit={(e) => { e.preventDefault() }}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Job Title or Company Name"
            required />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="location"
            placeholder="City or State"
            required />
        </div>
        <div className="form-search-btn">
          <button
            type="submit"
            className="search-btn"> Search </button>
        </div>
      </form>
    </div>
    <div className="hero__img">
      <img src={HEROBG} alt="HERO BACKGROUND" />
    </div>
  </div>
);

export default hero;
