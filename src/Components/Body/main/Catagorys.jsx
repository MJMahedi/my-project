import React, { useState } from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { useProductValue } from '../../../StateProvider'


function Catagorys() {

    const { products, loading, error } = useProductValue();
    // Handling loading and error state
    if (loading) {
        return <div className="text-center py-8">Loading...</div>;
    }
    if (error) {
        return <div className="text-center py-8 text-red-500">Failed to load data</div>;
    }
    if (!products || products.length === 0) {
        return <div className="text-center py-8 text-gray-500">No products available</div>;
    }
    // Get unique categories from products

    const uniqueCategories = [...new Set(products.map(item => item.category))];
    //  console.log(uniqueCategories);

    // const [uniqueProducts, setUniqueProducts] = useState(['']);
    // console.log(uniqueCategories.map(category =>
    //     products.find(item => item.category === category)))

    return (
        <div className="bg-customBg bg-opacity-70">

            <div className=" py-6">
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-3xl md:text-2xl lg:text-3xl font-semibold text-center">Categories</legend>
                </fieldset>
            </div>

            <div className="w-auto h-full grid grid-cols-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-2 lg:gap-5 mx-4 md:mx-8 lg:mx-16 justify-center">



                {uniqueCategories.map((category, index) => {
                    // Find the first product for each category to get the image
                    const item = products.find(item => item.category === category);
                    return item ? (
                        <div key={index} className=" relative w-full overflow-hidden border-2 border-customBg-800 rounded-md">
                            <Link
                                to={`/category-products/${category}`} // Dynamic URL
                                className="block relative w-full "
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[0]})`, // Use item.image directly
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `center`
                                }}
                            >
                                <div className=" absolute bottom-0 w-full flex justify-center items-center">

                                    <button className="btn btn-sm bg-customBg-900 bg-opacity-15 tracking-wide md:tracking-widest text-customBg-900 font-bold animate-bounce tracking-widest ">{category}</button>
                                </div>
                            </Link>
                        </div>
                    ) : null; // Return null if no item is found for the category
                })}
            </div>

            <div className=" flex flex-col items-center border-y-[1px] py-3 ">
                <div className="w-2/3 text-center">
                    <h1 className="text-lg font-semibold pb-2 ">Do you know how “Millennial Clothing” got its name?</h1>
                    <p className="font-light">
                        The name "Millennial Clothing" reflects our commitment to a generation that values style, individuality, and quality.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Catagorys
