import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartItemModel } from '../../Model/cart-item.model';
import './checkout-item.style.scss';

interface CheckoutItemProps {
    cartItem: CartItemModel
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { removeItemFromCart, addItemToCart, decrementItemFromCart } = useContext(CartContext);

    const handleRemoveFromCart = () => removeItemFromCart(cartItem);
    const handleAddItemToCart = () => addItemToCart(cartItem);
    const handleDecrementItemFromCart = () => decrementItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div
                    className='arrow'
                    onClick={handleDecrementItemFromCart}
                    
                >
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div
                    className='arrow'
                    onClick={handleAddItemToCart}
                >
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleRemoveFromCart}>
                &#10005;
            </div>
        </div>
    )
}