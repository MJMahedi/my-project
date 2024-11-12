import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const ProductItem = ({ item }) => {
  const { category } = useParams();
  const { user, state, dispatch } = useStateValue();
  const { basket } = state;
  
  const [isAdded, setIsAdded] = useState(false);

  // Check if the item is already in the basket
  useEffect(() => {
    const isInCart = basket.some((basketItem) => basketItem._id === item._id);
    setIsAdded(isInCart);
  }, [basket, item._id]);

  const handleAddToCart = () => {
    // Dispatch action to add product to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: item._id,
        title: item.title,
        description: item.description,
        image: item.image,
        price: item.price,
        discount: item.discount,
        quantity: 1,
        size: item.size[0],
        color: item.color[0],
      },
    });
    setIsAdded(true); // Update button state to indicate it's added
  };

  return (
    <div className="product-item w-[200px] h-[320px] border-2 bg-customBg-300 border-customBg-800 rounded-md text-center font-normal relative group overflow-hidden">
      <Link to={`/product/${item._id}`}>
        <div className="w-[auto] h-[auto]">
          <img
            src={item.image[0]}
            alt={item.title}
            className="product-image object-cover rounded-t-md"
          />
        </div>
        <div className="p-[1px] w-full">
          <h2 className="text-sm font-semibold text-customBg-900">{item.title}</h2>
          <p className="text-sm font-medium text-gray-700">
            Price Only <span className="font-bold">{item.price}</span> Tk
          </p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded} // Disable if already added
        className={`${
          isAdded ? 'bg-green-600 cursor-not-allowed' : 'bg-[#e49b0f]'
        } text-white rounded-md absolute bottom-2 left-1/2 
        transform -translate-x-1/2 w-[90%] font-semibold py-1 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isAdded ? 'hover:bg-green-700' : 'hover:bg-customBg-900'
        }`}
      >
        {isAdded ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductItem;
