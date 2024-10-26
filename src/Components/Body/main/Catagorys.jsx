import React, { useState } from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { useProductValue } from '../../../StateProvider'


function Catagorys() {

    const { products, loading, error } = useProductValue();

    // Get unique categories from products

    const uniqueCategories = [...new Set(products.map(item => item.category))];
    //  console.log(uniqueCategories);

    // const [uniqueProducts, setUniqueProducts] = useState(['']);
    // console.log(uniqueCategories.map(category =>
    //     products.find(item => item.category === category)))

    return (
        <div className="bg-customBg bg-opacity-70">

            <div className="">
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-lg font-semibold text-center">CATEGORIES</legend>
                </fieldset>
            </div>

            <div className=" w-[auto] h-auto grid grid-cols-3 md:grid-cols-4 gap-1 mx-8 sm:mx-4 relative">

                {uniqueCategories.map((category, index) => {
                    // Find the first product for each category to get the image
                    const item = products.find(item => item.category === category);
                    return item ? (
                        <div key={index} className=" overflow-hidden">
                            <Link
                                to={`/category-products/${category}`} // Dynamic URL
                                style={{
                                    backgroundImage: `url(${item.image})`, // Use item.image directly
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `center`
                                }}
                                className='flex justify-center items-end h-44 md:h-60 w-full object-fit rounded'>
                                <h1 className='btn btn-ghost md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2 animate-bounce tracking-widest '>
                                    {category}
                                </h1>
                            </Link>
                        </div>
                    ) : null; // Return null if no item is found for the category
                })}
            </div>

            <div className=" flex flex-col items-center border-y-[1px] py-3 ">
                <div className="w-2/3 text-center">
                    <h1 className="text-lg font-semibold pb-2 ">Do you know how JACKET-POINT got its name?</h1>
                    <p className="font-light">
                        The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth, happiness,
                        loyalty, and long-lasting connections 🌻</p>
                </div>
            </div>
        </div>
    )
}

export default Catagorys
