import React, { useEffect } from 'react';
import './style.scss';

import hoverEffect from 'hover-effect';

import MenRight from '../../assets/images/Home/model-4.jpg';
import MenRight2 from '../../assets/images/Home/model-2.jpg';
import WomenRight from '../../assets/images/Home/model-3.jpg';
import WomenRight2 from '../../assets/images/Home/home2-img.jpg';

function About() {
  useEffect(() => {
    let image_animate = new hoverEffect({
      parent: document.querySelector('.item_image1'),
      intensity: 0.3,
      image1: MenRight,
      image2: MenRight2,
      displacementImage: MenRight2,
    });
  });

  useEffect(() => {
    let image_animate2 = new hoverEffect({
      parent: document.querySelector('.item_image2'),
      intensity: 0.3,
      image1: WomenRight,
      image2: WomenRight2,
      displacementImage: WomenRight2,
    });
  });

  return (
    <div className="about_section">
      <div className="left_section">
        <div className="women_left"></div>
      </div>
      <div className="right_section">
        <div className="item_image1"></div>
        <div className="item_image2"></div>
      </div>
      <div className="liquid">
        <h2>fashion speaks for itself</h2>
      </div>
    </div>
  );
}

export default About;
