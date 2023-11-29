import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}

export default function CartProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);
    const addToCart = (e) => {
        setCartCount(cartCount + 1);
        e.target.disabled = true;
    };
    const value = {
        cartCount,
        addToCart,
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
