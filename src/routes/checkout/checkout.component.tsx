import React, { useContext } from "react";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import './checkout.style.scss';

export const Checkout :React.FC = props =>  {

    const { cartItems, cartTotal } = useContext(CartContext)

    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-blocks">
                    <span>Product</span>
                </div>
                <div className="header-blocks">
                    <span>Description</span>
                </div>
                <div className="header-blocks">
                    <span>Quantity</span>
                </div>
                <div className="header-blocks">
                    <span>Price</span>
                </div>
                <div className="header-blocks">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(
                    item => (
                        <CheckoutItem key={item.id} cartItem={item} />
                    )
                )
            }
            <span className="total">Total: {cartTotal}</span>
        </div>
    )
}