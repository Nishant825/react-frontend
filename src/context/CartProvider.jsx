import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}

export default function CartProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [isButtonClicked, setDisabledButtons] = useState([]);

    const addToCart = (book, bookid) => {
        setCartCount(cartCount + 1);
        setCartItems([...cartItems, book]);
        setDisabledButtons([...isButtonClicked, bookid]);
        // e.target.disabled = true;
    };
    const value = {
        cartCount,
        cartItems,
        addToCart,
        isButtonClicked
    };
    console.log(cartItems, "000000000")
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
