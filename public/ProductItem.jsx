import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ item, addToBasket }) => {
  return (
    <div className="product-item">
      <Link to={`/product/${item._id}`}> {/* Ensure this links to the correct product page */}
        <img src={item.image} alt={item.title} className="product-image" />
        <h2>{item.title}</h2>
        <p>{item.price} Tk</p>
      </Link>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default ProductItem;
