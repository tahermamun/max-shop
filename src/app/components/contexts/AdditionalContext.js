import React, { useContext, useEffect, useState } from 'react';


const AdditionalContext = React.createContext()

export const useAdiContext = () => {
    return useContext(AdditionalContext)
}


export const AdditionalProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    // product adding function
    const addToCartHandler = (product) => {

        setCart([
            ...cart,
            product
        ])


    }
  


    const value = {
        cart,
        addToCartHandler
    }
    return (
        <AdditionalContext.Provider value={value}>
            {children}
        </AdditionalContext.Provider>
    );
};
