import { createContext, useState, useEffect } from "react";
import { CartItemModel } from "../Model/cart-item.model";
import { ShopModel } from "../Model/ShopModel";

interface ICartContext{
    isCartOpen: boolean,
    setIsCartOpen: React.Dispatch<any>,
    cartItems: CartItemModel [],
    addItemToCart:  React.Dispatch<any>,
    removeItemFromCart:  React.Dispatch<any>,
    decrementItemFromCart:  React.Dispatch<any>,
    cartCount:number,
    cartTotal:number
}

export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart:() => {},
    decrementItemFromCart:() => {},
    cartCount: 0,
    cartTotal:0
});

export const CartProvider: React.FC<any> = ({ children }) => {

    const[isCartOpen,setIsCartOpen] = useState(false);
    const[cartItems,setCartItems] = useState<CartItemModel []>([]);
    const[cartCount,setCartCount] = useState<number>(0);
    const[cartTotal,setCartTotal] = useState<number>(0);

    useEffect(
        () => {
            setCartCount(cartItems.reduce((total:number, item) => total + item.quantity, 0));
        },[cartItems]
    );
    useEffect(
        () => {
            setCartTotal(cartItems.reduce((total:number, item) => total + (item.quantity*item.price), 0));
        },[cartItems]
    );

    const addItemToCart = (productToAdd: ShopModel | CartItemModel) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const decrementItemFromCart = (productToDecrement: ShopModel | CartItemModel) => {
        setCartItems(decrementCartItem(cartItems,productToDecrement));
    }

    const removeItemFromCart = (productToRemove: ShopModel | CartItemModel) => {
        setCartItems(removeCartItem(cartItems,productToRemove));
    }

    const value = { isCartOpen,setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, decrementItemFromCart, cartTotal }

    return <CartContext.Provider
        value={value}
    >
        {children}
    </CartContext.Provider>
}

const removeCartItem = (cardItems: CartItemModel [],productToRemove: ShopModel | CartItemModel): CartItemModel[] => {
    return [...cardItems.filter(item => item.id !== productToRemove.id)];
}

const decrementCartItem = (cardItems: CartItemModel [],productToDecrement: ShopModel | CartItemModel) : CartItemModel[] => {
    let newCardItems = [...cardItems];
    const itemIndex = cardItems.findIndex(
        item => item.id === productToDecrement.id
    )

    if(itemIndex >= 0) {
        if(newCardItems[itemIndex].quantity <= 1){
            newCardItems = removeCartItem(newCardItems,productToDecrement);
        }else{
            newCardItems[itemIndex].quantity -= 1;
        }
    }
    return newCardItems;
}

const addCartItem = (cardItems: CartItemModel [], productToAdd:ShopModel | CartItemModel): CartItemModel [] => {
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