import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}

export default function CartProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (e) => {
        console.log(e)
        setCartCount(cartCount + 1);
        setCartItems([...cartItems, e]);
        // e.target.disabled = true;
    };
    const value = {
        cartCount,
        cartItems,
        addToCart,
    };
    console.log(cartItems, "000000000")
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
