import React from 'react';
import './style.scss';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="top_section">
        <div className="logo">
          <h2>eCom.</h2>
        </div>
        <div className="title_links">
          <div className="links">
            <p>Information</p>
            <ul>
              <li>Events</li>
              <li>Terms of services</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="links">
            <p>Shop</p>
            <ul>
              <li>Jackets</li>
              <li>Shirts</li>
              <li>Jeans</li>
              <li>Shoes</li>
            </ul>
          </div>

          <div className="links">
            <p>Contact</p>
            <ul>
              <li>New York</li>
              <li>9416 Wood Street</li>
              <li>555 - 888 - 222</li>
              <li>eCom@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="side_section">
        <a href="#" className="side_links">
          <FaFacebook />
        </a>
        <a href="#" className="side_links">
          <FaInstagram />
        </a>
        <a href="#" className="side_links">
          <FaTwitter />
        </a>
      </div>
      <div className="bottom_section">
        <p className="end"> 2022 Kristijan Blažević. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
