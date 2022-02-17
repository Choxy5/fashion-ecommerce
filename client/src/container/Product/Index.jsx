import React from 'react';
import { Contact, Footer, Navbar } from '../../components';
import './style.scss';

import img from '../../assets/images/Men/Black Jacket.jpg';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

function Product() {
  return (
    <div className="product">
      <Navbar />
      <div className="product__wrapper">
        <div className="product__img">
          <img src={img} alt="" />
        </div>

        <div className="product__info">
          <h1 className="product__title">Denim Jacket</h1>
          <p className="product__desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors
          </p>

          <div className="filter__container">
            <div className="filter">
              <div className="filter__title">Color: </div>
              <div
                className="filter__color"
                style={{ backgroundColor: 'red' }}
              ></div>
              <div
                className="filter__color"
                style={{ backgroundColor: 'blue' }}
              ></div>
              <div
                className="filter__color"
                style={{ backgroundColor: 'black' }}
              ></div>
            </div>

            <div className="filter">
              <div className="filter__title">Size: </div>
              <div className="filter__size">
                <div className="filter__size_option">S</div>
                <div className="filter__size_option">M</div>
                <div className="filter__size_option">L</div>
                <div className="filter__size_option">XL</div>
              </div>
            </div>
          </div>
          <div className="add__container">
            <div className="amount__container">
              <IoRemoveCircleOutline
                style={{ fontSize: '35px', cursor: 'pointer' }}
              />
              <span className="amount">1</span>
              <IoAddCircleOutline
                style={{ fontSize: '35px', cursor: 'pointer' }}
              />
            </div>
          </div>
          <span className="product__price">20 €</span>
          <button className="product__button">ADD TO CART</button>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Product;
