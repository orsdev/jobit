import React from 'react';

const jobs = () => (
  <div className="jobs">
    <h2 className="heading-two"> Recent Jobs </h2>
    <div className="jobs__board">
      <div className="jobs__board-item">
        <div className="jobs__board-item-left">
          <h3>Senior Manager</h3>
          <button type="button">company.com</button>
          <ul>
            <li>
              <i className="icofont-money-bag" />
              $20k - $25k
            </li>
            <li>
              <i className="icofont-location-pin" />
              Location 210-27 Quadra, Market Street, Victoria Canada
            </li>
          </ul>
        </div>
        <div className="jobs__board-item-right">
          <ul>
            <li className="apply">
              <button type="button">Apply</button>
            </li>
            <li>
              <button type="button" className="job-type">Full Time</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="jobs__board-item">
        <div className="jobs__board-item-left">
          <h3>Software Engineer</h3>
          <button type="button">software.com</button>
          <ul>
            <li>
              <i className="icofont-money-bag" />
              $120k - $250k
            </li>
            <li>
              <i className="icofont-location-pin" />
              Location 210-27 Quadra, Market Street, Vi Canada
            </li>
          </ul>
        </div>
        <div className="jobs__board-item-right">
          <ul>
            <li className="apply">
              <button type="button">Apply</button>
            </li>
            <li>
              <button type="button" className="job-type">Remote</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="jobs__board-item">
        <div className="jobs__board-item-left">
          <h3>Data Engineer</h3>
          <button type="button">company.com</button>
          <ul>
            <li>
              <i className="icofont-money-bag" />
              $90k - $125k
            </li>
            <li>
              <i className="icofont-location-pin" />
              Location 210-27 Quadra, Market Street, Victoria Canada
            </li>
          </ul>
        </div>
        <div className="jobs__board-item-right">
          <ul>
            <li className="apply">
              <button type="button">Apply</button>
            </li>
            <li>
              <button type="button" className="job-type">Part Time</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="jobs__board-item">
        <div className="jobs__board-item-left">
          <h3>Product Designer</h3>
          <button type="button">company.com</button>
          <ul>
            <li>
              <i className="icofont-money-bag" />
              $80k - $95k
            </li>
            <li>
              <i className="icofont-location-pin" />
              Location 210-27 Quadra, Market Street, Victoria Canada
            </li>
          </ul>
        </div>
        <div className="jobs__board-item-right">
          <ul>
            <li className="apply">
              <button type="button">Apply</button>
            </li>
            <li>
              <button type="button" className="job-type">Full Time</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="jobs__board-item">
        <div className="jobs__board-item-left">
          <h3>Customer Support Specialist</h3>
          <button type="button">company.com</button>
          <ul>
            <li>
              <i className="icofont-money-bag" />
              $60k - $75k
            </li>
            <li>
              <i className="icofont-location-pin" />
              Location 210-27 Quadra, Market Street, Victoria Canada
            </li>
          </ul>
        </div>
        <div className="jobs__board-item-right">
          <ul>
            <li className="apply">
              <button type="button">Apply</button>
            </li>
            <li>
              <button type="button" className="job-type">Freelance</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="jobs__board-item">
        <div className="jobs__board-item-left">
          <h3>IT Manager</h3>
          <button type="button">company.com</button>
          <ul>
            <li>
              <i className="icofont-money-bag" />
              $20k - $25k
            </li>
            <li>
              <i className="icofont-location-pin" />
              Location 210-27 Quadra, Market Street, Victoria Canada
            </li>
          </ul>
        </div>
        <div className="jobs__board-item-right">
          <ul>
            <li className="apply">
              <button type="button">Apply</button>
            </li>
            <li>
              <button type="button" className="job-type">Contract</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="jobs__footer">
      <button type="button"> Load More </button>
    </div>
  </div>
);

export default jobs;
