import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductValue } from '../../StateProvider'; // For fetching products
import { useStateValue } from '../../StateProvider'; // For managing basket

function Product() {
  const { id } = useParams(); // Get the product ID from the URL
  const { products, loading, error } = useProductValue(); // Get products from the context
  const [, dispatch] = useStateValue(); // Get dispatch from global state

  // Handle loading or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Find the product by ID (parse ID to number if necessary)
  const product = products.find(item => item._id === parseInt(id)); 

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  const addToBasket = () => {
    // Push the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
      _id: product._id,
      title: product.title,
      image: product.image,
      price: product.price,  // Make sure price is included here
      discount: product.discount,  // If relevant
      quantity: 1 // Or whatever logic you need for quantity
    }
    });
  };

  return (
    <div>
      <main className="py-10 bg-sky-50">
        <div className="container space-x-4 mx-auto px-4 flex flex-col md:flex-row">

          <div className="md:w-1/2">
            <div className="relative">
              <div style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`
              }} className='w-full h-72 object-cover rounded-lg shadow-lg'>
              </div>

              <div className='flex justify-center space-x-5 mt-4'>
                {product.size.map((size, index) => (
                  <div key={index} style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                  }} className='w-28 h-20 object-cover rounded-md shadow-md'>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-xl font-bold text-gray-900">{product.title}</h1>

            <div className='p-2 bg-yellow-200 rounded-2xl'>
              <p className="text-md text-gray-700 font-semibold">Original Price : {product.price} Tk</p>
              <p className="text-sm text-gray-600 cursor-auto font-semibold">Discount : {product.discount} Tk</p>
            </div>

            <p className="text-sm text-gray-600 mt-4">{product.description}</p>

            <div className="mt-4 text-sm">
              <label htmlFor="size" className="block text-gray-700 font-semibold">Size</label>
              <select id="size" className="block w-full mt-2 p-2 border border-gray-300 rounded-lg">
                {product.size.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div>

            <div className="mt-4 text-sm">
              <label htmlFor="color" className="block text-gray-700 font-semibold">Color</label>
              <div className="flex space-x-4 mt-2">
                {product.color.map((color, index) => (
                  <button key={index} className="w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }}></button>
                ))}
              </div>
            </div>

            <Link to={"/shoping-cart"} onClick={addToBasket}>
              <button className="w-full mt-10 animate-bounce bg-gradient-to-tr from-sky-900 to-blue-500 text-white py-[10px] font-bold px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <p className='animate-pulse tracking-widest'>Buy Now</p>
              </button>
            </Link>

          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 text-sm">
          <div className="bg-gradient-to-tr from-sky-50 to-sky-600 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900">Product Description</h2>
            <p className="text-gray-700 mt-4">{product.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <p className="text-gray-700">"Great product! Really happy with my purchase."</p>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-yellow-500">★★★☆☆</span>
                  <p className="text-gray-700">"Good quality but a bit expensive."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
