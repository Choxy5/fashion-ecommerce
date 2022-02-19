import React from 'react';
import './style.scss';

function ProductCard({ item }) {
  return (
    <div className="productcard">
      <img src={item.img} alt="" className="productcard__img" />
    </div>
  );
}

export default ProductCard;
