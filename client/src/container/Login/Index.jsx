import React from 'react';
import './style.scss';

function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <h1 className="login__title">login</h1>
        <form className="login__form">
          
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="login__button">login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
