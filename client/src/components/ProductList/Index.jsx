import React from 'react';
import './style.scss';

import { popularProducts } from '../../data';
import ProductCard from '../ProductCard/Index';

function ProductList() {
  return (
    <div className="productlist">
      {popularProducts.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductList;
