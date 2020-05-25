import React from 'react';

const jobs = () => {
  return (
    <div className="jobs">
      <h2 className="heading-two"> Recent Jobs </h2>
      <div className="jobs__board">
        <div className="jobs__board-item">
          <div className="jobs__board-item-left">
            <h3>Senior Manager</h3>
            <a href="#">company.com</a>
            <ul>
              <li>
                <i className="icofont-money-bag"></i>
               $20k - $25k
               </li>
              <li>
                <i className="icofont-location-pin"></i>
             Location 210-27 Quadra, Market Street, Victoria Canada
             </li>
            </ul>
          </div>
          <div className="jobs__board-item-right">
            <ul>
              <li className="apply">
                <a href="#">Apply</a>
              </li>
              <li>
                <a className="job-type" href="#">Full Time</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs__board-item">
          <div className="jobs__board-item-left">
            <h3>Software Engineer</h3>
            <a href="#">software.com</a>
            <ul>
              <li>
                <i className="icofont-money-bag"></i>
               $120k - $250k
               </li>
              <li>
                <i className="icofont-location-pin"></i>
             Location 210-27 Quadra, Market Street, Vi Canada
             </li>
            </ul>
          </div>
          <div className="jobs__board-item-right">
            <ul>
              <li className="apply">
                <a href="#">Apply</a>
              </li>
              <li>
                <a className="job-type" href="#">Remote</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs__board-item">
          <div className="jobs__board-item-left">
            <h3>Data Engineer</h3>
            <a href="#">company.com</a>
            <ul>
              <li>
                <i className="icofont-money-bag"></i>
               $90k - $125k
               </li>
              <li>
                <i className="icofont-location-pin"></i>
             Location 210-27 Quadra, Market Street, Victoria Canada
             </li>
            </ul>
          </div>
          <div className="jobs__board-item-right">
            <ul>
              <li className="apply">
                <a href="#">Apply</a>
              </li>
              <li>
                <a className="job-type" href="#">Part Time</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs__board-item">
          <div className="jobs__board-item-left">
            <h3>Product Designer</h3>
            <a href="#">company.com</a>
            <ul>
              <li>
                <i className="icofont-money-bag"></i>
               $80k - $95k
               </li>
              <li>
                <i className="icofont-location-pin"></i>
             Location 210-27 Quadra, Market Street, Victoria Canada
             </li>
            </ul>
          </div>
          <div className="jobs__board-item-right">
            <ul>
              <li className="apply">
                <a href="#">Apply</a>
              </li>
              <li>
                <a className="job-type" href="#">Full Time</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs__board-item">
          <div className="jobs__board-item-left">
            <h3>Customer Support Specialist</h3>
            <a href="#">company.com</a>
            <ul>
              <li>
                <i className="icofont-money-bag"></i>
               $60k - $75k
               </li>
              <li>
                <i className="icofont-location-pin"></i>
             Location 210-27 Quadra, Market Street, Victoria Canada
             </li>
            </ul>
          </div>
          <div className="jobs__board-item-right">
            <ul>
              <li className="apply">
                <a href="#">Apply</a>
              </li>
              <li>
                <a className="job-type" href="#">Freelance</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs__board-item">
          <div className="jobs__board-item-left">
            <h3>IT Manager</h3>
            <a href="#">company.com</a>
            <ul>
              <li>
                <i className="icofont-money-bag"></i>
               $20k - $25k
               </li>
              <li>
                <i className="icofont-location-pin"></i>
             Location 210-27 Quadra, Market Street, Victoria Canada
             </li>
            </ul>
          </div>
          <div className="jobs__board-item-right">
            <ul>
              <li className="apply">
                <a href="#">Apply</a>
              </li>
              <li>
                <a className="job-type" href="#">Contract</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="jobs__footer">
        <button type="button"> Load More </button>
      </div>
    </div>
  )
};

export default jobs;
