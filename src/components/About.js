import React from 'react';
import ABOUTBG from '../assets/img/hero-bg2.png';

const about = () => {
  return (
    <div className="about">
      <div className="about__img">
        <img src={ABOUTBG} alt="ABOUT BACKGROUND" />
      </div>
      <div className="about__body">
        <h2 className="heading-two"> Why People Trust Us</h2>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida
        </p>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida
        </p>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida
        </p>
      </div>
    </div>
  )
};

export default about;