import { createContext, useState } from "react";

interface ICartContext{
    isCartOpen: boolean,
    setIsCartOpen: React.Dispatch<any>
}

export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartProvider: React.FC<any> = ({ children }) => {

    const[isCartOpen,setIsCartOpen] = useState(false);
    const value = { isCartOpen,setIsCartOpen }

    return <CartContext.Provider
        value={value}
    >
        {children}
    </CartContext.Provider>
}