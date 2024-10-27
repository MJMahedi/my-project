import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { useStateValue, useProductValue } from '../../StateProvider'


const ProductItem = ({ item, addToBasket }) => {

  const { category } = useParams(); // Get category from URL
  console.log(category)

  

  return (
    <div className="product-item border-2 border-customBg-800 rounded-md text-center">
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
