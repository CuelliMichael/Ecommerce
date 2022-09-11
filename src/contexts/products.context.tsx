import { createContext, useState } from "react";
import { ShopModel } from "../Model/ShopModel";

import PRODUCTS from '../shop-data.json';

interface IProductContext{
    products: ShopModel []
}

export const ProductsContext = createContext<IProductContext>({
    products: []
});

export const ProductsProvider: React.FC<any> = ({ children }) => {

    const[products,setProducts] = useState(PRODUCTS);
    const value = { products }

    return <ProductsContext.Provider
        value={value}
    >
        {children}
    </ProductsContext.Provider>
}