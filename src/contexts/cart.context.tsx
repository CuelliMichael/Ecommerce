import { createContext, useState, useEffect } from "react";
import { CartItemModel } from "../Model/cart-item.model";
import { ShopModel } from "../Model/ShopModel";

interface ICartContext{
    isCartOpen: boolean,
    setIsCartOpen: React.Dispatch<any>,
    cartItems: CartItemModel [],
    addItemToCart:  React.Dispatch<any>,
    cartCount:number
}

export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider: React.FC<any> = ({ children }) => {

    const[isCartOpen,setIsCartOpen] = useState(false);
    const[cartItems,setCartItems] = useState<CartItemModel []>([]);
    const[cartCount,setCartCount] = useState<number>(0);

    useEffect(
        () => {
            setCartCount(cartItems.reduce((total:number, item) => total + item.quantity, 0))
        },[cartItems]
    )

    const addItemToCart = (productToAdd: ShopModel) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const value = { isCartOpen,setIsCartOpen, cartItems, addItemToCart, cartCount }

    return <CartContext.Provider
        value={value}
    >
        {children}
    </CartContext.Provider>
}

const addCartItem = (cardItems: CartItemModel [], productToAdd:ShopModel): CartItemModel [] => {
    let newCardItems = [...cardItems];
    const itemIndex = cardItems.findIndex(
        item => item.id === productToAdd.id
    )

    if(itemIndex >= 0) {
        newCardItems[itemIndex].quantity += 1;
    }else{
        newCardItems = [...newCardItems, new CartItemModel(productToAdd.id,productToAdd.name,productToAdd.imageUrl,productToAdd.price,1)]
    }

    return newCardItems;

}