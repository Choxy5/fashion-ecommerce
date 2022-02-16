import React from 'react';

import Men from '../../assets/images/Home/home-img.png';
import { About, Banner, Contact, Footer, Navbar, Shop } from '../../components';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Shop />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
