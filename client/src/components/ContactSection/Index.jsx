import React from 'react';
import './style.scss';

function Contact() {
  return (
    <div className="contact_section">
      <h3>subscribe for newsletter?</h3>
      <div className="subscribe">
        <input type="email" placeholder="Email" />
        <button className="button">subscribe</button>
      </div>
    </div>
  );
}

export default Contact;
