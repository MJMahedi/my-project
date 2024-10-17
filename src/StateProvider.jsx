import React, { createContext, useReducer, useContext, useState, useEffect, useMemo } from 'react';


// Prepare or Bring the DataLayer 
export const StateContext = createContext();


// Warp & Provide the DataLayer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider 
    value={useReducer(reducer, initialState)} 
    >
        {children}
    </StateContext.Provider>
);




// Pull informaton from the DataLayer
export const useStateValue = () => useContext(StateContext);



// For Product Data 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('demodata.json'); // replace with your JSON URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // by mj
     // Memoize context value to prevent unnecessary re-renders
     const value = useMemo(() => ({ products, loading, error }), [products, loading, error]);


    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use ProductContext
export const useProductValue = () => useContext(ProductContext);
