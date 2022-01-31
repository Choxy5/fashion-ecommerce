import React from 'react';
import './style.scss';

import Men from '../../assets/images/Home/home-img.png';
import Navbar from '../../components/Navbar/Index';
import About from '../../components/About/Index';
import Shop from '../../components/Shop Section/Index';
import Contact from '../../components/Contact Section/Index';

function Home() {
  return (
    <>
      <Navbar />
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
      <About />
      <Shop />
      <Contact />
    </>
  );
}

export default Home;
