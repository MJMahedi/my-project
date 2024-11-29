import React, { useState } from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { useProductValue } from '../../../StateProvider'


const Best_Selling = () => {

    const { products, loading, error } = useProductValue();
    // Filter products to get those where subcategory is 'Best Selling'
    const bestSellingProducts = products.filter(item => item.subCategory === 'BestSelling' || item.subCategory === 'NewArrival' );
    // Get unique categories from products

    // const uniqueCategories = [...new Set(products.map(item => item.category))];
    const uniqueCategories = [
        ...new Map(
          products.map(item => [item.category.toLowerCase(), item.category])
        ).values()
      ];
    //  console.log(uniqueCategories);

    const formatCategoryName = (category) => {
        return category
            .replace(/([a-z])([A-Z])/g, "$1 $2") // Handle camelCase to add space
            .replace(/[_-]/g, " ")              // Replace underscores or dashes with spaces
            .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
            .trim();                            // Remove any leading/trailing spaces
    };
    return (
        <div className="bg-customBg-300">

            <div className="py-2">
                <fieldset className="text-black border-t-2 mx-4 md:mx-8 lg:mx-12 border-gray-600 rounded-xl">
                    <legend className="px-6 text-2xl md:text-2xl lg:text-3xl font-semibold text-center ">Best Selling</legend>
                </fieldset>
            </div>
            <div className="w-[auto] h-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-2 lg:gap-5 mx-4 md:mx-8 lg:mx-16 relative">
                {uniqueCategories.map((category, index) => {
                    // Find the first product for each category to get the image
                    const item = bestSellingProducts.find(item => item.category === category);
                    return item ? (
                        <div key={index} className="relative w-full overflow-hidden">
                            <Link
                                to={`/category-products/${category}`} // Dynamic URL
                                className="block relative w-full border-2 border-customBg-800 rounded-md"
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[1]})`, // Use item.image directly
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                               
                                <div className=" absolute bottom-0 w-full flex justify-center items-center">

                                    <button className="btn btn-sm bg-customBg-900 bg-opacity-50 tracking-wide md:tracking-widest text-xs px-1 text-white animate-bounce tracking-widest hover:bg-[#e49b0f] ">{formatCategoryName(category)}</button>
                                </div>
                            </Link>
                        </div>
                    ) : null; // Return null if no item is found for the category
                })}
            </div>


        </div>
    )
}
export default Best_Selling
