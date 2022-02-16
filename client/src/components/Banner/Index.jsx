import React from 'react';
import './style.scss';

import Men from '../../assets/images/Home/home-img.png';


function Banner() {
  return (
    <div className="home">
      <div className="banner_image">
        <img src={Men} alt="Men" />
      </div>

      <div className="left_section">
        <h1 className="home_title">
          make. <br />
          <span>a.</span>
          <br /> difference.
        </h1>
      </div>
    </div>
  );
}

export default Banner;
