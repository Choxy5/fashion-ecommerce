import React from 'react';
import './style.scss';

import { Footer, Navbar } from '../../components';

import img1 from '../../assets/images/Men/Black Jacket.jpg';
import img2 from '../../assets/images/Men/Blue Jacket.jpg';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

function Cart() {
  return (
    <div className="cart">
      <Navbar />
      <div className="cart__wrapper">
        <h1 className="cart__title">YOUR BAG</h1>
        <div className="cart__top">
          <button className="cart__top_button continue">
            CONTINUE SHOPPING
          </button>
          <div className="cart__top_texts">
            <span className="cart__top_text">Shopping Bag (2)</span>
          </div>
          <button className="cart__top_button checkout">CHECKOUT NOW</button>
        </div>
        <div className="cart__bottom">
          <div className="cart__info">
            <div className="cart__product">
              <div className="cart__product_detail">
                <img src={img1} alt="" className="cart__product_img" />
                <div className="details">
                  <span className="details__product_name">
                    <b>Product:</b> Denim Jacket
                  </span>
                  <span className="details__product_id">
                    <b>ID:</b> 9483589468
                  </span>
                  <span className="details__product_color">
                    <b>Color: </b>
                  </span>
                  <span className="details__product_size">
                    <b>Size: </b>L
                  </span>
                </div>
              </div>
              <div className="cart__product_price">
                <div className="price__amount_container">
                  <IoAddCircleOutline
                    style={{ fontSize: '35px', cursor: 'pointer' }}
                  />
                  <div className="product__amount">2</div>
                  <IoRemoveCircleOutline
                    style={{ fontSize: '35px', cursor: 'pointer' }}
                  />
                </div>
                <div className="product__price">20 €</div>
              </div>
            </div>

            <hr className="space" />

            <div className="cart__product">
              <div className="cart__product_detail">
                <img src={img2} alt="" className="cart__product_img" />
                <div className="details">
                  <span className="details__product_name">
                    <b>Product:</b> Blue Jacket
                  </span>
                  <span className="details__product_id">
                    <b>ID:</b> 23494043745
                  </span>
                  <span className="details__product_color">
                    <b>Color:</b>
                  </span>
                  <span className="details__product_size">
                    <b>Size: </b> XLb
                  </span>
                </div>
              </div>
              <div className="cart__product_price">
                <div className="price__amount_container">
                  <IoAddCircleOutline
                    style={{ fontSize: '35px', cursor: 'pointer' }}
                  />
                  <div className="product__amount">2</div>
                  <IoRemoveCircleOutline
                    style={{ fontSize: '35px', cursor: 'pointer' }}
                  />
                </div>
                <div className="product__price">20 €</div>
              </div>
            </div>
          </div>
          <div className="cart__summary">
            <div className="summary__title">ORDER SUMMARY</div>
            <div className="summary__item">
              <div className="summary__item_text">Subtotal</div>
              <div className="summary__item_price">40 €</div>
            </div>
            <div className="summary__item">
              <div className="summary__item_text">Estimated Shipping</div>
              <div className="summary__item_price">4.99 €</div>
            </div>
            <div className="summary__item">
              <div className="summary__item_text">Shipping Discount</div>
              <div className="summary__item_price">-4.99 €</div>
            </div>
            <div className="summary__item">
              <div className="summary__item_text total">Total</div>
              <div className="summary__item_price total">40 €</div>
            </div>
            <button className="summary__item_button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
