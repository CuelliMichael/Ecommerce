

import { CartItemModel } from '../../Model/cart-item.model';
import './cart-item.style.scss';

interface CartItemProps {
    cartItem: CartItemModel
}

export const CartItem: React.FC<CartItemProps> = ({ cartItem: { name, quantity, imageUrl, price } }) => {

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='cart-item-name'>{name}</span>
                <span className='cart-item-quantity'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}