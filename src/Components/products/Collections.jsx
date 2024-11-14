import React, { useState } from 'react';
import { useStateValue, useProductValue } from '../../StateProvider';
import ProductItem from './ProductItem';

const Collections = () => {
    const { state, dispatch } = useStateValue();
    const { products, loading, error } = useProductValue();

    // State to control "Show More" for each category
    const [showMoreMen, setShowMoreMen] = useState(false);
    const [showMoreWomen, setShowMoreWomen] = useState(false);
    const [showMoreKids, setShowMoreKids] = useState(false);
    const [showMoreMinasDream, setShowMoreMinasDream] = useState(false);

    const addToBasket = (product) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: product,
        });
    };

    // Unique categories are already being logged if needed for future use
    const uniqueCategories = [...new Set(products.map(item => item.category))];
    console.log(uniqueCategories);

    // Function to get the displayed products based on the showMore state
    const getDisplayedProducts = (categoryProducts, showMore) => (
        showMore ? categoryProducts : categoryProducts.slice(0, 5)
    );

    return (
        <div className='bg-customBg bg-opacity-50'>
            <div className="py-2 ">
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-2xl text-center">Our Collections</legend>
                </fieldset>
            </div>

            {/* Men Category */}
            <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Men</h1>
            <div className="w-full py-6 px-6 md:px-4 flex justify-center">
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-content-center">
                    {getDisplayedProducts(products.filter(item => item.category === 'Men'), showMoreMen)
                        .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
                </section>
            </div>
            <div className="flex justify-center py-4">
                <button
                    onClick={() => setShowMoreMen(!showMoreMen)}
                    className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
                >
                    {showMoreMen ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* Women Category */}
            <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Women</h1>
            <div className="w-full py-6 px-6 md:px-4 flex justify-center">
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-content-center">
                    {getDisplayedProducts(products.filter(item => item.category === 'Women'), showMoreWomen)
                        .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
                </section>
            </div>
            <div className="flex justify-center py-4">
                <button
                    onClick={() => setShowMoreWomen(!showMoreWomen)}
                    className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
                >
                    {showMoreWomen ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* Kids Category */}
            <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Kids</h1>
            <div className="w-full py-6 px-6 md:px-4 flex justify-center">
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-content-center">
                    {getDisplayedProducts(products.filter(item => item.category === 'kids'), showMoreKids)
                        .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
                </section>
            </div>
            <div className="flex justify-center py-4">
                <button
                    onClick={() => setShowMoreKids(!showMoreKids)}
                    className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
                >
                    {showMoreKids ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* Mina's Dream Brand */}
            <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Mina's Dream</h1>
            <div className="w-full py-6 px-6 md:px-4 flex justify-center">
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-content-center">
                    {getDisplayedProducts(products.filter(item => item.brand === "Mina's Dream"), showMoreMinasDream)
                        .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
                </section>
            </div>
            <div className="flex justify-center py-4">
                <button
                    onClick={() => setShowMoreMinasDream(!showMoreMinasDream)}
                    className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
                >
                    {showMoreMinasDream ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </div>
    );
}

export default Collections;
