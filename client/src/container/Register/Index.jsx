import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Register() {
  return (
    <div className="register">
      <div className="register__wrapper">
        <h1 className="register__title">Register</h1>
        <form className="register__form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="test">
            <p className="register__text">
              Already have an account?{' '}
              <Link to="/login" style={{ marginLeft: '10px' }}>
                Login
              </Link>{' '}
            </p>

            <button className="register__button">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
