import React from 'react';
import './style.scss';

import { Contact, Footer, Navbar } from '../../components';
import ProductList from '../../components/ProductList/Index';

function Products() {
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="products__title">
          <h2 className="title__text">Men</h2>
          <h2 className="title__text">Women</h2>
        </div>
        <div className="filter__container">
          <div className="filter">
            <span className="filter__text">Filter Products:</span>
            <select name="" id="" className="filter__select">
              <option value="" disabled selected>
                Color
              </option>
              <option value="">
                White
              </option>
              <option value="">
                Black
              </option>
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Yellow</option>
              <option value="">Green</option>
            </select>
            <select name="" id="" className="filter__select">
              <option value="" disabled selected>
                Size
              </option>
              <option value="">XL</option>
              <option value="">L</option>
              <option value="">M</option>
              <option value="">S</option>
            </select>
          </div>
          <div className="filter">
            <span className="filter__text">Sort Products:</span>
            <select name="" id="" className="filter__select">
              <option value="" selected>
                Newest
              </option>
              <option value="">Price (asc)</option>
              <option value="">Price (desc)</option>
            </select>
          </div>
        </div>
        <ProductList />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Products;
